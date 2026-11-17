'use strict';
function arrangePreview(getDesign, setPositions, labelFor, editImage) {
  const drawing=document.getElementById('drawing'), select=document.getElementById('move-object');
  const xField=document.getElementById('move-x'), yField=document.getElementById('move-y');
  const reset=document.getElementById('reset-layout');
  const angleField=document.getElementById('object-angle'), linked=document.getElementById('link-images');
  const front=document.getElementById('layer-front'),back=document.getElementById('layer-back');
  const isImage=key=>key!=='name'&&key!=='subtitle';
  const clamp=(value,min,max)=>Math.min(max,Math.max(min,value));
  const normalized=angle=>((angle+180)%360+360)%360-180;
  function turn(x,y,angle) {
    const a=angle*Math.PI/180;
    return {x:x*Math.cos(a)-y*Math.sin(a),y:x*Math.sin(a)+y*Math.cos(a)};
  }
  let selected='', gesture=null, frame=0;
  const paths=()=>[...drawing.querySelectorAll('path[data-object]')];
  const keyOf=node=>node.dataset.object;
  function boxOf(node) {
    if(node.dataset.box) {
      const [x,y,width,height,angle]=node.dataset.box.split(' ').map(Number);
      return {x,y,width,height,angle};
    }
    const b=node.getBBox();
    return {x:b.x+b.width/2,y:b.y+b.height/2,width:b.width,height:b.height,angle:0};
  }
  function currentPositions() {
    const d=getDesign(),positions={...d.positions};
    for(const node of paths()) {
      const key=keyOf(node),b=boxOf(node),image=isImage(key);
      positions[key]={x:b.x/d.width,y:b.y/d.height,angle:b.angle,size:Math.min(1,image?b.width/d.width:b.height/d.height)};
    }
    return positions;
  }
  function point(e) {
    const svg=drawing.querySelector('svg'),matrix=svg?.getScreenCTM();
    if(!matrix) return null;
    return new DOMPoint(e.clientX,e.clientY).matrixTransform(matrix.inverse());
  }
  function sync() {
    const nodes=paths(), d=getDesign(),factor=d.units==='in'?25.4:1;
    const items=nodes.map(node=>[keyOf(node),labelFor(keyOf(node))]);
    const signature=JSON.stringify(items);
    if(select.dataset.items!==signature) {
      select.replaceChildren(new Option('Choose an object…',''),...items.map(([k,text])=>new Option(text,k)));
      select.dataset.items=signature;
    }
    const node=nodes.find(n=>keyOf(n)===selected);
    if(!node) selected='';
    select.value=selected;xField.disabled=yField.disabled=!node;
    angleField.disabled=!node;
    const images=nodes.filter(n=>isImage(keyOf(n))), groupList=document.getElementById('group-list');
    const available=images.map(keyOf), group=available.filter(key=>d.groupKeys.includes(key));
    document.getElementById('link-caption').textContent=available.length>2?'Move grouped images together':'Move both images together';
    const chooseGroup=available.length>2;
    document.getElementById('group-members').hidden=!chooseGroup;
    const groupSignature=JSON.stringify([available.map(key=>[key,labelFor(key)]),d.groupKeys]);
    if(chooseGroup&&groupList.dataset.items!==groupSignature) {
      groupList.replaceChildren();groupList.dataset.items=groupSignature;
      for(const key of available) {
        const label=document.createElement('label'),input=document.createElement('input');
        label.className='check';input.type='checkbox';input.checked=d.groupKeys.includes(key);
        input.onchange=()=>{
          const keys=getDesign().groupKeys.filter(k=>k!==key);
          if(input.checked) keys.push(key);
          setPositions(getDesign().positions,null,{groupKeys:keys,linked:getDesign().linked&&keys.filter(k=>available.includes(k)).length>=2});
        };
        label.append(input,document.createTextNode(labelFor(key)));groupList.append(label);
      }
    }
    linked.disabled=available.length<2||(chooseGroup&&group.length<2);
    linked.checked=!linked.disabled&&d.linked;
    front.disabled=!node||node===nodes.at(-1);
    back.disabled=!node||node===nodes[0];
    const automatic=BenchArt.defaultOrder(d.images);
    reset.disabled=!Object.keys(d.positions).length&&!d.linked&&!d.order.some((key,i)=>key!==automatic[i]);
    document.getElementById('position-unit').textContent=d.units==='in'?'inches':'mm';
    const svg=drawing.querySelector('svg');
    svg?.querySelector('[data-selection]')?.remove();
    if(!node) {xField.value=yField.value=angleField.value='';return;}
    const b=boxOf(node);
    angleField.value=Number(b.angle.toFixed(2));
    xField.value=Number((b.x/factor).toFixed(d.units==='in'?4:2));
    yField.value=Number((b.y/factor).toFixed(d.units==='in'?4:2));
    function svgNode(tag,attributes) {
      const node=document.createElementNS('http://www.w3.org/2000/svg',tag);
      for(const [attr,value] of Object.entries(attributes)) node.setAttribute(attr,value);
      return node;
    }
    const selection=svgNode('g',{'data-selection':'','aria-hidden':'true'});
    const outline=svgNode('g',{transform:'rotate('+b.angle+' '+b.x+' '+b.y+')'});
    selection.append(outline);
    outline.append(svgNode('rect',{x:b.x-b.width/2,y:b.y-b.height/2,width:b.width,height:b.height,class:'selected-outline'}));
    const matrix=svg.getScreenCTM();
    if(matrix) {
      // Size handles in screen pixels, even for a very small printed object.
      const px=1/Math.hypot(matrix.a,matrix.b);
      const left=Math.max(0,b.x-Math.max(b.width/2,13*px)),right=Math.min(d.width,b.x+Math.max(b.width/2,13*px));
      const top=Math.max(0,b.y-Math.max(b.height/2,13*px)),bottom=Math.min(d.height,b.y+Math.max(b.height/2,13*px));
      for(const [corner,x,y] of [['nw',left,top],['ne',right,top],['se',right,bottom],['sw',left,bottom]]) {
        const handle=svgNode('g',{'data-corner':corner});
        handle.append(svgNode('rect',{x:x-10*px,y:y-10*px,width:20*px,height:20*px,class:'corner-hit'}),
          svgNode('rect',{x:x-4*px,y:y-4*px,width:8*px,height:8*px,rx:px,class:'corner-grip'}));
        outline.append(handle);
      }
      // Keep the rotation grip on the canvas even when an object touches an edge.
      let stem=turn(0,-b.height/2,b.angle), tip=turn(0,-b.height/2-24*px,b.angle);
      if(b.y+tip.y<9*px||b.x+tip.x<9*px||b.y+tip.y>d.height-9*px||b.x+tip.x>d.width-9*px) {
        stem=turn(0,b.height/2,b.angle);tip=turn(0,b.height/2+24*px,b.angle);
      }
      const x=clamp(b.x+tip.x,8*px,d.width-8*px),y=clamp(b.y+tip.y,8*px,d.height-8*px);
      const rotate=svgNode('g',{'data-rotate':''});
      rotate.append(svgNode('line',{x1:b.x+stem.x,y1:b.y+stem.y,x2:x,y2:y,class:'selected-outline'}),
        svgNode('circle',{cx:x,cy:y,r:10*px,class:'corner-hit'}),
        svgNode('circle',{cx:x,cy:y,r:5*px,class:'corner-grip'}));
      selection.append(rotate);
    }
    svg.append(selection);
  }
  function resize(g) {
    const d=getDesign(),b=g.box;
    const sx=g.corner.endsWith('e')?1:-1,sy=g.corner.startsWith('s')?1:-1;
    const v=turn(sx*b.width,sy*b.height,b.angle);
    const ax=b.x-v.x/2,ay=b.y-v.y/2;
    let max=Math.min(d.width/b.width,d.height/b.height);
    for(const [distance,slope] of [[ax,(b.width-v.x)/2],[d.width-ax,(b.width+v.x)/2],
                                    [ay,(b.height-v.y)/2],[d.height-ay,(b.height+v.y)/2]]) {
      if(slope>0) max=Math.min(max,distance/slope);
    }
    const requested=1+(v.x*g.dx+v.y*g.dy)/(v.x*v.x+v.y*v.y);
    const scale=clamp(requested,Math.min(1,.3/Math.max(b.width,b.height)),Math.max(1,max));
    const w=b.width*scale,h=b.height*scale,image=isImage(g.key);
    const updated={angle:b.angle,x:(ax+v.x*scale/2)/d.width,y:(ay+v.y*scale/2)/d.height,size:image?w/d.width:h/d.height};
    setPositions({...g.base,[g.key]:updated},{field:g.sizeField,value:image?w:h});
  }
  function movers(key) {
    const images=paths().map(keyOf).filter(isImage);
    const group=images.length===2?images:getDesign().groupKeys;
    return paths().filter(n=>keyOf(n)===key||(linked.checked&&group.includes(key)&&group.includes(keyOf(n))))
      .map(n=>({key:keyOf(n),box:boxOf(n)}));
  }
  function move(base,objects,dx,dy) {
    const d=getDesign(),next={...base};
    // Limit one shared translation to keep the spacing of linked artwork exact.
    for(const {box:b} of objects) {
      dx=clamp(dx,Math.min(0,b.width/2-b.x),Math.max(0,d.width-b.width/2-b.x));
      dy=clamp(dy,Math.min(0,b.height/2-b.y),Math.max(0,d.height-b.height/2-b.y));
    }
    for(const {key,box:b} of objects)
      next[key]={...base[key],x:(b.x+dx)/d.width,y:(b.y+dy)/d.height};
    setPositions(next);
  }
  function rotate(base,key,angle) {
    setPositions({...base,[key]:{...base[key],angle:normalized(angle)}});
  }
  function flush() {
    if(frame) cancelAnimationFrame(frame);frame=0;
    if(!gesture?.moved) return;
    const g=gesture;
    if(g.corner) resize(g);
    else if(g.rotating) {
      const x=g.start.x-g.box.x,y=g.start.y-g.box.y;
      const delta=Math.atan2(y+g.dy,x+g.dx)-Math.atan2(y,x);
      rotate(g.base,g.key,Math.round(g.box.angle+delta*180/Math.PI));
    } else move(g.base,g.objects,g.dx,g.dy);
  }
  select.onchange=()=>{selected=select.value;editImage(selected);sync();};
  reset.onclick=()=>{selected='';setPositions({},null,{order:BenchArt.defaultOrder(getDesign().images),linked:false});};
  linked.onchange=()=>setPositions(getDesign().positions,null,{linked:linked.checked});
  function reorder(onTop) {
    const d=getDesign(),others=d.order.filter(key=>key!==selected);
    setPositions(d.positions,null,{order:onTop?[...others,selected]:[selected,...others]});
  }
  front.onclick=()=>reorder(true);back.onclick=()=>reorder(false);
  angleField.onchange=()=>{
    if(!selected||!Number.isFinite(angleField.valueAsNumber)) {sync();return;}
    rotate(currentPositions(),selected,angleField.valueAsNumber);
  };
  function coordinate(e) {
    const node=paths().find(n=>keyOf(n)===selected);
    if(!node||e.target.value===''||!Number.isFinite(e.target.valueAsNumber)) {sync();return;}
    const b=boxOf(node),factor=getDesign().units==='in'?25.4:1;
    move(currentPositions(),movers(selected),e.target===xField?xField.valueAsNumber*factor-b.x:0,e.target===yField?yField.valueAsNumber*factor-b.y:0);
  }
  xField.onchange=yField.onchange=coordinate;
  angleField.onkeydown=xField.onkeydown=yField.onkeydown=e=>{if(e.key==='Enter') e.target.blur();};
  drawing.onpointerdown=e=>{
    if(gesture||e.button!==0||!e.isPrimary) return;
    const start=point(e);if(!start) return;
    const corner=e.target.closest('[data-corner]')?.dataset.corner;
    const rotating=!!e.target.closest('[data-rotate]');
    let node=(corner||rotating)?paths().find(n=>keyOf(n)===selected):e.target.closest('[data-object]');
    if(!node) node=paths().reverse().find(n=>{const b=n.getBBox();return start.x>=b.x&&start.x<=b.x+b.width&&start.y>=b.y&&start.y<=b.y+b.height;});
    if(!node) return;
    selected=keyOf(node);editImage(selected);
    const sizeField=selected+(isImage(selected)?'Width':'Height');
    gesture={corner,rotating,objects:movers(selected),sizeField,originalSize:getDesign().images.find(img=>img.key===selected)?.width??getDesign()[sizeField],pointer:e.pointerId,key:selected,start,clientX:e.clientX,clientY:e.clientY,dx:0,dy:0,moved:false,
      box:boxOf(node),original:getDesign().positions,base:currentPositions()};
    drawing.focus({preventScroll:true});drawing.setPointerCapture(e.pointerId);sync();e.preventDefault();
  };
  function track(e) {
    if(gesture?.pointer!==e.pointerId) return;
    const pos=point(e);if(!pos) return;
    gesture.dx=pos.x-gesture.start.x;gesture.dy=pos.y-gesture.start.y;
    gesture.moved ||= Math.hypot(e.clientX-gesture.clientX,e.clientY-gesture.clientY)>2;
    if(gesture.moved&&!frame) frame=requestAnimationFrame(flush);
  }
  drawing.onpointermove=track;
  drawing.onpointerup=e=>{
    if(gesture?.pointer!==e.pointerId) return;
    track(e);flush();gesture=null;
    if(drawing.hasPointerCapture(e.pointerId)) drawing.releasePointerCapture(e.pointerId);
  };
  drawing.onpointercancel=drawing.onlostpointercapture=e=>{
    if(gesture?.pointer!==e.pointerId) return;
    const g=gesture;gesture=null;cancelAnimationFrame(frame);frame=0;
    if(g.moved) setPositions(g.original,g.corner?{field:g.sizeField,value:g.originalSize}:null);
  };
  drawing.onkeydown=e=>{
    const dir={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]}[e.key];
    if(!dir||!selected) return;
    const node=paths().find(n=>keyOf(n)===selected);if(!node) return;
    e.preventDefault();const step=e.shiftKey?.1:1;
    move(currentPositions(),movers(selected),step*dir[0],step*dir[1]);
  };
  return {sync,currentPositions,select(key){selected=key;sync();}};
}

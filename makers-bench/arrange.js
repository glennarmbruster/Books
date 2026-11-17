'use strict';
function arrangePreview(getDesign, setPositions, labelFor) {
  const drawing=document.getElementById('drawing'), select=document.getElementById('move-object');
  const xField=document.getElementById('move-x'), yField=document.getElementById('move-y');
  const reset=document.getElementById('reset-layout');
  let selected='', gesture=null, frame=0;
  const paths=()=>[...drawing.querySelectorAll('path[data-object]')];
  const keyOf=node=>node.dataset.object;
  const boxOf=node=>{const b=node.getBBox();return {x:b.x+b.width/2,y:b.y+b.height/2,width:b.width,height:b.height};};
  function currentPositions() {
    const d=getDesign(),positions={...d.positions};
    for(const node of paths()) {
      const key=keyOf(node),b=boxOf(node),image=key==='motif'||key==='extraMotif';
      positions[key]={x:b.x/d.width,y:b.y/d.height,size:Math.min(1,image?b.width/d.width:b.height/d.height)};
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
    reset.disabled=!Object.keys(d.positions).length;
    document.getElementById('position-unit').textContent=d.units==='in'?'inches':'mm';
    const svg=drawing.querySelector('svg');
    svg?.querySelector('[data-selection]')?.remove();
    if(!node) {xField.value=yField.value='';return;}
    const b=boxOf(node);
    xField.value=Number((b.x/factor).toFixed(d.units==='in'?4:2));
    yField.value=Number((b.y/factor).toFixed(d.units==='in'?4:2));
    function svgNode(tag,attributes) {
      const node=document.createElementNS('http://www.w3.org/2000/svg',tag);
      for(const [attr,value] of Object.entries(attributes)) node.setAttribute(attr,value);
      return node;
    }
    const selection=svgNode('g',{'data-selection':'','aria-hidden':'true'});
    selection.append(svgNode('rect',{x:b.x-b.width/2,y:b.y-b.height/2,width:b.width,height:b.height,class:'selected-outline'}));
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
        selection.append(handle);
      }
    }
    svg.append(selection);
  }
  function resize(g) {
    const d=getDesign(),b=g.box;
    const sx=g.corner.endsWith('e')?1:-1,sy=g.corner.startsWith('s')?1:-1;
    const anchorX=b.x-sx*b.width/2,anchorY=b.y-sy*b.height/2;
    const max=Math.min((sx>0?d.width-anchorX:anchorX)/b.width,(sy>0?d.height-anchorY:anchorY)/b.height);
    // Project the drag onto the original diagonal to preserve aspect ratio.
    const requested=1+(sx*b.width*g.dx+sy*b.height*g.dy)/(b.width*b.width+b.height*b.height);
    const scale=Math.min(max,Math.max(Math.min(1,.3/Math.max(b.width,b.height)),requested));
    const w=b.width*scale,h=b.height*scale, image=g.sizeField.endsWith('Width');
    const updated={x:Math.max(0,Math.min(1,(anchorX+sx*w/2)/d.width)),
      y:Math.max(0,Math.min(1,(anchorY+sy*h/2)/d.height)),size:image?w/d.width:h/d.height};
    setPositions({...g.base,[g.key]:updated},{field:g.sizeField,value:image?w:h});
  }
  function move(original,key,x,y,box) {
    const d=getDesign(),clamp=(v,min,max)=>Math.max(min,Math.min(max,v));
    const px=clamp(x,box.width/2,d.width-box.width/2), py=clamp(y,box.height/2,d.height-box.height/2);
    setPositions({...original,[key]:{...original[key],x:px/d.width,y:py/d.height}});
  }
  function flush() {
    if(frame) cancelAnimationFrame(frame);frame=0;
    if(!gesture?.moved) return;
    const g=gesture;
    if(g.corner) resize(g);
    else move(g.base,g.key,g.box.x+g.dx,g.box.y+g.dy,g.box);
  }
  select.onchange=()=>{selected=select.value;sync();};
  reset.onclick=()=>{selected='';setPositions({});};
  function coordinate(e) {
    const node=paths().find(n=>keyOf(n)===selected);
    if(!node||e.target.value===''||!Number.isFinite(e.target.valueAsNumber)) {sync();return;}
    const b=boxOf(node),factor=getDesign().units==='in'?25.4:1;
    move(currentPositions(),selected,e.target===xField?xField.valueAsNumber*factor:b.x,e.target===yField?yField.valueAsNumber*factor:b.y,b);
  }
  xField.onchange=yField.onchange=coordinate;
  xField.onkeydown=yField.onkeydown=e=>{if(e.key==='Enter') e.target.blur();};
  drawing.onpointerdown=e=>{
    if(gesture||e.button!==0||!e.isPrimary) return;
    const start=point(e);if(!start) return;
    const corner=e.target.closest('[data-corner]')?.dataset.corner;
    let node=corner?paths().find(n=>keyOf(n)===selected):e.target.closest('[data-object]');
    if(!node) node=paths().reverse().find(n=>{const b=n.getBBox();return start.x>=b.x&&start.x<=b.x+b.width&&start.y>=b.y&&start.y<=b.y+b.height;});
    if(!node) return;
    selected=keyOf(node);
    const sizeField=selected+(['motif','extraMotif'].includes(selected)?'Width':'Height');
    gesture={corner,sizeField,originalSize:getDesign()[sizeField],pointer:e.pointerId,key:selected,start,clientX:e.clientX,clientY:e.clientY,dx:0,dy:0,moved:false,
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
    e.preventDefault();const b=boxOf(node),step=e.shiftKey?.1:1;
    move(currentPositions(),selected,b.x+step*dir[0],b.y+step*dir[1],b);
  };
  return {sync};
}

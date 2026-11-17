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
    const outline=document.createElementNS('http://www.w3.org/2000/svg','rect');
    for(const [attr,value] of Object.entries({x:b.x-b.width/2,y:b.y-b.height/2,width:b.width,height:b.height,'data-selection':'','aria-hidden':'true'}))
      outline.setAttribute(attr,value);
    svg.append(outline);
  }
  function move(original,key,x,y,box) {
    const d=getDesign(),clamp=(v,min,max)=>Math.max(min,Math.min(max,v));
    const px=clamp(x,box.width/2,d.width-box.width/2), py=clamp(y,box.height/2,d.height-box.height/2);
    setPositions({...original,[key]:{...original[key],x:px/d.width,y:py/d.height}});
  }
  function flush() {
    if(frame) cancelAnimationFrame(frame);frame=0;
    if(!gesture?.moved) return;
    const g=gesture;move(g.base,g.key,g.box.x+g.dx,g.box.y+g.dy,g.box);
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
    let node=e.target.closest('[data-object]');
    if(!node) node=paths().reverse().find(n=>{const b=n.getBBox();return start.x>=b.x&&start.x<=b.x+b.width&&start.y>=b.y&&start.y<=b.y+b.height;});
    if(!node) return;
    selected=keyOf(node);
    gesture={pointer:e.pointerId,key:selected,start,clientX:e.clientX,clientY:e.clientY,dx:0,dy:0,moved:false,
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
    if(g.moved) setPositions(g.original);
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

/* Maker's Bench design geometry uses millimeters throughout. */
(() => {
  'use strict';
  const defaultFont = 'atkinson';
  const typefaces = [{id:defaultFont,label:'Atkinson Hyperlegible Bold',category:'Sans serif',font:window.BenchFont}, ...BenchTypefaces,window.BenchStoryFont];
  const byFont = new Map(typefaces.map(face=>[face.id,face]));
  const runCache = new Map();
  const scriptURL = document.currentScript.src;
  const mmPerInch = 25.4;
  const kappa = 4 * (Math.sqrt(2) - 1) / 3;
  const motifs = ['none', 'wave', 'sun', 'leaf', 'mountain'];

  const catalogIds = new Set(BenchCatalog.items.map(item => item.id));
  const presets = {
    tag:[90,50,5], coaster:[95,95,0], plate:[140,45,0],
    keyfob:[72,30,5], bookmark:[40,145,4], ornament:[80,80,4],
    marker:[95,85,0], label:[85,45,0], magnet:[65,45,0], sign:[180,85,0]
  };
  const baseShapes=new Map();
  for(const project of BenchGuide.projects) if(project.base) {
    baseShapes.set(project.id,project.base);presets[project.id]=project.size;
  }
  const baseShape=shape=>baseShapes.get(shape)||shape;
  const topHole = shape => ['bookmark','ornament'].includes(baseShape(shape))||baseShape(shape).startsWith('ornament-');
  const hasHole = shape => topHole(shape) || ['keyfob','tag'].includes(baseShape(shape));
  function validArt(id) { return motifs.includes(id) || catalogIds.has(id); }

  function number(value, label, min, max) {
    const n = Number(value);
    if (value === '' || value == null || !Number.isFinite(n) || n < min || n > max) {
      throw Error(label + ' must be between ' + rounded(min) + ' and ' + rounded(max) + ' mm.');
    }
    return n;
  }
  function rounded(value) { return Number(value.toFixed(4)); }
  function color(value) {
    if (!/^#[\da-f]{6}$/i.test(value)) throw Error('Choose a solid color for each layer.');
    return value.toLowerCase();
  }
  function cleanLine(raw,face) {
    const text = String(raw ?? '').normalize('NFC').trim();
    if ([...text].length > 64) throw Error('Use up to 64 characters per line.');
    const map=face.font.map;
    for (const char of text) {
      if (!Object.hasOwn(map, char)) throw Error(face.label+' does not include “'+char+'”. Choose another font or character.');
    }
    return text;
  }
  const imageKeys=images=>['motif','extraMotif',...images.map(img=>img.key)];
  const defaultOrder=(images=[])=>[...imageKeys(images),'name','subtitle'];
  function positions(value={},objectKeys) {
    if(!value||typeof value!=='object'||Array.isArray(value)) throw Error('Invalid object positions.');
    const result={};
    for(const [key,point] of Object.entries(value)) {
      if(!objectKeys.includes(key)||!point||![point.x,point.y,point.size].every(Number.isFinite)||
        point.x<0||point.x>1||point.y<0||point.y>1||point.size<=0||point.size>1.001)
        throw Error('Invalid object position or size.');
      const angle=point.angle??0;
      if(!Number.isFinite(angle)||Math.abs(angle)>180) throw Error('Choose a rotation between -180 and 180 degrees.');
      result[key]={x:point.x,y:point.y,size:point.size,angle};
    }
    return result;
  }
  function validate(input) {
    if (!Object.hasOwn(presets,input.shape)) throw Error('Choose a project shape.');
    const width = number(input.width,'Width',15,500);
    const height = number(input.height,'Height',15,500);
    const extra = input.extraMotif ?? 'none', placement = input.placement ?? 'above';
    if (!validArt(input.motif) || !validArt(extra)) throw Error('Choose artwork from the catalog.');
    if (!['above','left','right'].includes(placement)) throw Error('Choose a position for the artwork.');
    const nameFont=input.nameFont??defaultFont, subtitleFont=input.subtitleFont??defaultFont;
    if(!byFont.has(nameFont)||!byFont.has(subtitleFont)) throw Error('Choose a font from the lettering list.');
    const motifLines=input.motifLines??'auto',extraMotifLines=input.extraMotifLines??'auto';
    if(![motifLines,extraMotifLines].every(v=>['auto','on','off'].includes(v))) throw Error('Choose a side-line setting.');
    const images=input.images??[], fields={}, artColors={motif:input.accent,extraMotif:input.secondColor||input.accent};
    if(!Array.isArray(images)) throw Error('Invalid artwork list.');
    const used=new Set();
    for(const image of images) {
      if(!image||typeof image.key!=='string'||!/^image[1-9][0-9]*$/.test(image.key)||used.has(image.key)||!validArt(image.art)||image.art==='none')
        throw Error('Invalid artwork entry.');
      used.add(image.key);
      fields[image.key]=image.art;
      fields[image.key+'Width']=number(image.width,'Artwork width',0,500);
      if(!['auto','on','off'].includes(image.lines)) throw Error('Choose a side-line setting.');
      fields[image.key+'Lines']=image.lines;
      artColors[image.key]=color(image.color||input.accent);
    }
    const objectKeys=defaultOrder(images),order=input.order??objectKeys;
    const ordered=new Set(Array.isArray(order)?order:[]);
    if(!Array.isArray(order)||order.length!==objectKeys.length||!objectKeys.every(key=>ordered.has(key)))
      throw Error('Invalid layer order.');
    return {
      ...fields,images,artColors,order, secondColor:input.secondColor?color(input.secondColor):'',
      positions:positions(input.positions,objectKeys),motifLines,extraMotifLines,
      nameFont,subtitleFont,
      motifWidth:number(input.motifWidth??0,'Artwork width',0,500),
      extraMotifWidth:number(input.extraMotifWidth??0,'Second artwork width',0,500),
      nameHeight:number(input.nameHeight??0,'Name letter height',0,500),
      subtitleHeight:number(input.subtitleHeight??0,'Second-line letter height',0,500),
      shape: input.shape, width, height,
      hole: hasHole(input.shape) ? number(input.hole ?? 0,'Hole diameter',0,Math.min(width*.2,height*.4)) : 0,
      thickness: number(input.thickness ?? 3,'Base thickness',.4,30),
      relief: number(input.relief ?? 1,'Raised height',.2,15),
      motif: input.motif, extraMotif: extra, placement, ink: color(input.ink), accent: color(input.accent),
      paper: color(input.paper), mirror: input.mirror === true,
      name: cleanLine(input.name,byFont.get(nameFont)), subtitle: cleanLine(input.subtitle,byFont.get(subtitleFont))
    };
  }

  function circle(cx,cy,rx,ry=rx) {
    const a=rx*kappa, b=ry*kappa;
    return [['M',cx+rx,cy], ['C',cx+rx,cy+b,cx+a,cy+ry,cx,cy+ry],
      ['C',cx-a,cy+ry,cx-rx,cy+b,cx-rx,cy], ['C',cx-rx,cy-b,cx-a,cy-ry,cx,cy-ry],
      ['C',cx+a,cy-ry,cx+rx,cy-b,cx+rx,cy], ['Z']];
  }
  function rect(x,y,w,h,r=0) {
    const right=x+w,bottom=y+h;
    if (!r) return [['M',x,y],['L',right,y],['L',right,bottom],['L',x,bottom],['Z']];
    const b=r*(1-kappa);
    return [['M',x+r,y],['L',right-r,y],['C',right-b,y,right,y+b,right,y+r],
      ['L',right,bottom-r],['C',right,bottom-b,right-b,bottom,right-r,bottom],
      ['L',x+r,bottom],['C',x+b,bottom,x,bottom-b,x,bottom-r],['L',x,y+r],
      ['C',x,y+b,x+b,y,x+r,y],['Z']];
  }
  function polygon(points) {
    return points.map(([x,y],i)=>[i?'L':'M',x,y]).concat([['Z']]);
  }
  function transform(path, sx, sy, x, y) {
    return path.map(([op,...coords])=>[op,...coords.map((n,i)=>i%2?y+n*sy:x+n*sx)]);
  }
  // Measure the ink itself, including cubic extrema between on-curve points.
  function inkBounds(path) {
    let left=Infinity,right=-Infinity,top=Infinity,bottom=-Infinity,px=0,py=0;
    function include(x,y) {left=Math.min(left,x);right=Math.max(right,x);top=Math.min(top,y);bottom=Math.max(bottom,y);}
    function roots(p,a,b,q) {
      const A=q-3*b+3*a-p, B=2*(b-2*a+p), C=a-p;
      if(Math.abs(A)<1e-10) return B?[-C/B]:[];
      const det=B*B-4*A*C;
      return det<0?[]:[(-B+Math.sqrt(det))/(2*A),(-B-Math.sqrt(det))/(2*A)];
    }
    function cubic(p,a,b,q,t) { const u=1-t;return u*u*u*p+3*u*u*t*a+3*u*t*t*b+t*t*t*q; }
    for(const [op,...v] of path) {
      if(op==='Z') continue;
      const x=v.at(-2),y=v.at(-1);
      if(op==='C') for(const t of [...roots(px,v[0],v[2],x),...roots(py,v[1],v[3],y)]) {
        if(t>0&&t<1) include(cubic(px,v[0],v[2],x,t),cubic(py,v[1],v[3],y,t));
      }
      include(x,y);px=x;py=y;
    }
    return {left,right,top,bottom,w:right-left,h:bottom-top};
  }
  function glyphRun(text,faceId) {
    const key=faceId+'|'+text;
    if(runCache.has(key)) return runCache.get(key);
    const font=byFont.get(faceId).font,path=[];
    const ligatureLengths=[...new Set(Object.keys(font.ligatures||{}).map(text=>text.length))].sort((a,b)=>b-a);
    let shift=0,prev=null,overlap=false,maxRight=-Infinity;
    for(let i=0;i<text.length;) {
      let char=String.fromCodePoint(text.codePointAt(i)),index=font.map[char];
      for(const n of ligatureLengths) {
        const group=text.slice(i,i+n);
        if(group.length===n && Object.hasOwn(font.ligatures||{},group)) {
          char=group;index=font.ligatures[group];break;
        }
      }
      i+=char.length;
      if(prev!==null && font.kerning) shift+=font.kerning(prev,index);
      const [advance,commands]=font.glyphs[index],glyph=[];
      let px=0,py=0;
      for(const [op,...p] of commands) {
        if(op==='Z') {glyph.push(['Z']);continue;}
        const points=p.map((n,i)=>i%2?-n:shift+n);
        if(op==='Q') {
          const [cx,cy,x,y]=points;
          glyph.push(['C',px+2*(cx-px)/3,py+2*(cy-py)/3,x+2*(cx-x)/3,y+2*(cy-y)/3,x,y]);
        } else glyph.push([op,...points]);
        px=points.at(-2);py=points.at(-1);
      }
      if(glyph.length) {
        const bounds=inkBounds(glyph);
        if(bounds.left<maxRight) overlap=true;
        maxRight=Math.max(bounds.right,maxRight);
        path.push(...glyph);
      }
      shift+=advance;prev=index;
    }
    const run={path,bounds:inkBounds(path),overlap};
    if(runCache.size>=64) runCache.delete(runCache.keys().next().value);
    runCache.set(key,run);return run;
  }
  function measureLimit(mm,units) {
    const inches=units==='in',factor=inches?1000:100;
    const value=Math.floor(mm/(inches?mmPerInch:1)*factor)/factor;
    return value+(inches?' in':' mm');
  }
  // A typed height is the physical height of the visible letters in millimeters.
  function sizeText(first,second,w,x,top,band,units) {
    const rows=[first,second].filter(Boolean);
    if(rows.every(row=>row.size===0)) {
      return rows.map((row,i)=>fit(row.run.path,x,top+band*(i===1?.84:second?.3:.5),
        w*(i===1?.92:1),band*(i===1?.225:second?.51:.79)));
    }
    const gap=second?band*.075:0,room=band-gap;
    let fixed=0;
    const heights=rows.map((row,i)=>{
      const bounds=row.run.bounds,maxWidth=w*(i===1?.92:1),limit=Math.min(room,bounds.h*maxWidth/bounds.w);
      if(row.size>limit+.00001) {
        throw Error('For “'+row.text+'”, use a letter height of '+measureLimit(limit,units)+' or less, or enlarge the blank.');
      }
      if(row.size) {fixed+=row.size;return row.size;}
      return Math.min(limit,band*(i===1?.225:second?.51:.79));
    });
    if(fixed>room+.00001 || (rows.some(r=>!r.size)&&fixed>=room-.001)) throw Error('The two lines are too tall together. Reduce a letter height or enlarge the blank.');
    for(let i=0;i<rows.length;i++) if(!rows[i].size) heights[i]=Math.min(heights[i],room-fixed);
    let y=top+(band-heights.reduce((sum,v)=>sum+v,0)-gap)/2;
    return rows.map((row,i)=>{
      const box=row.run.bounds,k=heights[i]/box.h;
      const path=transform(row.run.path,k,k,x-k*(box.left+box.right)/2,y-k*box.top);
      y+=heights[i]+gap;return path;
    });
  }
  function fit(path,x,y,w,h) {
    if (!path.length) return [];
    let x0=Infinity,y0=Infinity,x1=-Infinity,y1=-Infinity;
    for(const command of path) for(let i=1;i<command.length;i+=2){
      x0=Math.min(x0,command[i]);x1=Math.max(x1,command[i]);
      y0=Math.min(y0,command[i+1]);y1=Math.max(y1,command[i+1]);
    }
    const scale=Math.min(w/(x1-x0),h/(y1-y0));
    return transform(path,scale,scale,x-(x0+x1)*scale/2,y-(y0+y1)*scale/2);
  }
  function motifPath(type) {
    switch(type) {
      case 'wave':
        return [['M',0,6],['C',5,6,7,0,12,0],['C',12,3,15,6,20,5],['C',16,10,10,10,8,6],['C',6,8,2,9,0,8],['Z']];
      case 'leaf':
        return [['M',0,14],['C',0,4,6,0,17,0],['C',16,10,11,16,1,15],['L',11,5],['L',0,14],['Z']];
      case 'mountain':
        return polygon([[0,13],[8,1],[13,8],[16,4],[23,13],[19,13],[16,9],[13,13],[8,6],[3.5,13]]);
      case 'sun': {
        const contours=circle(10,10,4.8);
        for(let i=0;i<8;i++) {
          const a=i*Math.PI/4, dx=Math.cos(a),dy=Math.sin(a);
          const points=[[6.5,-.7],[10,0],[6.5,.7]].map(([r,t])=>[10+r*dx-t*dy,10+r*dy+t*dx]);
          contours.push(...polygon(points));
        }
        return contours;
      }
      default: return catalogIds.has(type) ? BenchCatalog.path(type) : [];
    }
  }

  function blank(shape,w,h) {
    const small=Math.min(w,h);
    switch(shape) {
      case 'coaster': case 'ornament': return circle(w/2,h/2,w/2,h/2);
      case 'ornament-arch': return [['M',0,h],['L',0,h*.42],['C',0,h*.17,w*.22,0,w*.5,0],
        ['C',w*.78,0,w,h*.17,w,h*.42],['L',w,h],['Z']];
      case 'ornament-hex': return polygon([[w*.25,0],[w*.75,0],[w,h*.5],[w*.75,h],[w*.25,h],[0,h*.5]]);
      case 'ornament-shield': return [['M',0,0],['L',w,0],['L',w,h*.45],['C',w,h*.70,w*.72,h*.91,w*.5,h],
        ['C',w*.28,h*.91,0,h*.70,0,h*.45],['Z']];
      case 'ornament-ticket': {
        const c=small*.09,r=small*.12,cy=h*.5;
        return [['M',c,0],['L',w-c,0],['L',w,c],['L',w,cy-r],['C',w-r*1.33,cy-r,w-r*1.33,cy+r,w,cy+r],
          ['L',w,h-c],['L',w-c,h],['L',c,h],['L',0,h-c],['L',0,cy+r],
          ['C',r*1.33,cy+r,r*1.33,cy-r,0,cy-r],['L',0,c],['Z']];
      }
      case 'ornament-drop': return [['M',w*.47,0],['L',w*.53,0],['C',w*.6,h*.20,w,h*.37,w,h*.64],
        ['C',w,h*.85,w*.77,h,w*.5,h],['C',w*.23,h,0,h*.85,0,h*.64],['C',0,h*.37,w*.40,h*.20,w*.47,0],['Z']];
      case 'ornament-heart': return [['M',w*.5,h*.18],['C',w*.43,h*.06,w*.34,0,w*.25,0],
        ['C',w*.10,0,0,h*.11,0,h*.28],['C',0,h*.58,w*.32,h*.85,w*.5,h],
        ['C',w*.68,h*.85,w,h*.58,w,h*.28],['C',w,h*.11,w*.90,0,w*.75,0],
        ['C',w*.66,0,w*.57,h*.06,w*.5,h*.18],['Z']];
      case 'ornament-star': {
        const points=Array.from({length:10},(_,i)=>{
          const radius=i%2?.50:1,angle=(i/5-.5)*Math.PI;
          return [Math.cos(angle)*radius,Math.sin(angle)*radius];
        });
        const sx=Math.cos(Math.PI/10),sy=1+Math.sin(3*Math.PI/10);
        return polygon(points.map(([x,y])=>[(x/sx+1)*w/2,(y+1)*h/sy]));
      }
      case 'keyfob': return rect(0,0,w,h,small*.49);
      case 'bookmark': return rect(0,0,w,h,small*.15);
      case 'marker': return polygon([[0,0],[w,0],[w,h*.53],[w*.57,h*.53],
        [w*.57,h*.88],[w*.5,h],[w*.43,h*.88],[w*.43,h*.53],[0,h*.53]]);
      case 'label': case 'magnet': {
        const clip=small*(shape==='label'?.17:.30);
        return polygon([[clip,0],[w-clip,0],[w,clip],[w,h-clip],[w-clip,h],[clip,h],[0,h-clip],[0,clip]]);
      }
      case 'sign': return [['M',0,h*.23],['C',w*.18,h*.23,w*.23,0,w*.50,0],
        ['C',w*.77,0,w*.82,h*.23,w,h*.23],['L',w,h],['L',0,h],['Z']];
      default: return rect(0,0,w,h,small*(shape==='tag'?.16:.09));
    }
  }
  function geometry(input) {
    const d=validate(input),w=d.width,h=d.height,small=Math.min(w,h);
    const shape=baseShape(d.shape),base=blank(shape,w,h),upper=topHole(shape);
    const free=Object.keys(d.positions).length>0;
    const holeX=upper?w/2:d.hole/2+Math.min(w*.075,h*.13);
    const recessed=['ornament-heart','ornament-star','ornament-drop'].includes(shape);
    const holeY=upper?d.hole/2+(recessed?h*.20+small*.025:small*.09):h/2;
    const hole=d.hole?circle(holeX,holeY,d.hole/2):[];
    const round=shape==='coaster'||shape==='ornament';
    const ornament=shape.startsWith('ornament-');
    const insetX=ornament?w*(shape==='ornament-star'?.29:.18):round?w*.16:small*(shape==='magnet'?.23:.085);
    const left=d.hole&&!upper?Math.max(insetX,holeX+d.hole/2+small*.065):insetX;
    const usable=w-left-insetX,cx=left+usable/2;
    let areaTop=0,areaEnd=h;
    if(upper && d.hole) areaTop=holeY+d.hole/2+small*.045;
    if(shape==='ornament-star') {areaTop=Math.max(areaTop,h*.34);areaEnd=h*.67;}
    if(shape==='ornament-heart'||shape==='ornament-shield') areaEnd=h*.74;
    if(shape==='ornament-drop') {areaTop=Math.max(areaTop,h*.36);areaEnd=h*.86;}
    if(shape==='marker') areaEnd=h*.53;
    if(shape==='sign') areaTop=h*.23;
    const cy=(areaEnd+areaTop)/2;
    const innerH=(areaEnd-areaTop)*(round?.67:.73);
    const artwork=imageKeys(d.images).filter(key=>d[key]!=='none');
    const hasMark=artwork.length>0, hasType=Boolean(d.name||d.subtitle);
    const beside=hasMark&&hasType&&d.placement!=='above';
    let typeWidth=usable,typeX=cx,markX=cx;
    if(beside) {
      typeWidth=usable*.60;
      const dir=d.placement==='left'?1:-1;
      typeX+=dir*(usable-typeWidth)/2;
      markX-=dir*usable*.325;
    }
    const markSize=beside?innerH*.88:hasType?innerH*.29:innerH*.66;
    let markWidth=beside?usable*.32:Math.min(usable*(artwork.length>1?.90:.66),markSize*(artwork.length>1?4:2));
    let markY=hasType&&!beside?cy-innerH*.32:cy, textTop=cy-innerH*.085;
    const parts=[], artSizes={}, boxes={};
    if(!free&&artwork.some(key=>d[key+'Width']>0)) {
      const maxWidth=usable*(beside?.80:.97), maxHeight=innerH*(hasType&&!beside?.70:1);
      const gap=artwork.length>1?Math.min(usable*.035,small*.055):0;
      const slot=markWidth/artwork.length;
      const icons=artwork.map(key=>{
        const path=motifPath(d[key]),bounds=inkBounds(path),fixed=d[key+'Width'];
        const automatic=Math.min(slot*(artwork.length>1?.89:1),markSize*bounds.w/bounds.h);
        const width=fixed||automatic;
        if(fixed && width*bounds.h/bounds.w>maxHeight+.00001) {
          const limit=maxHeight*bounds.w/bounds.h;
          throw Error('For this artwork, use a width of '+measureLimit(limit,input.units)+' or less to fit the height.');
        }
        return {key,path,bounds,fixed,width};
      });
      const fixedWidth=icons.reduce((sum,icon)=>sum+icon.fixed,0);
      const autoWidth=icons.reduce((sum,icon)=>sum+(icon.fixed?0:icon.width),0);
      const available=maxWidth-gap*(artwork.length-1)-fixedWidth;
      if(available<-.00001 || (autoWidth && available<.05))
        throw Error('Artwork exceeds the available width of '+measureLimit(maxWidth,input.units)+'. Reduce an image width or enlarge the blank.');
      for(const icon of icons) if(!icon.fixed) icon.width*=Math.min(1,available/autoWidth);
      markWidth=icons.reduce((sum,icon)=>sum+icon.width,gap*(artwork.length-1));
      const rowHeight=Math.max(...icons.map(icon=>icon.width*icon.bounds.h/icon.bounds.w));
      if(beside) {
        const dir=d.placement==='left'?1:-1;
        const separation=Math.min(usable*.045,small*.12);
        typeWidth=usable-markWidth-separation;
        markX=cx-dir*(usable-markWidth)/2;
        typeX=cx+dir*(usable-typeWidth)/2;
      } else if(hasType) {
        markY=cy-innerH*.49+rowHeight/2;
        textTop=Math.max(textTop,markY+rowHeight/2+innerH*.045);
      }
      let x=markX-markWidth/2;
      for(const {key,path,bounds,width} of icons) {
        const k=width/bounds.w;
        parts.push(transform(path,k,k,x-k*bounds.left,markY-k*(bounds.top+bounds.bottom)/2));
        artSizes[key]=width;x+=width+gap;
      }
    } else {
      // Preserve first-edition layouts until an image width is set.
      artwork.forEach((key,index)=>{
        const slot=markWidth/artwork.length,x=markX-markWidth/2+slot*(index+.5);
        const path=fit(motifPath(d[key]),x,markY,slot*(artwork.length>1?.89:1),markSize);
        parts.push(path);artSizes[key]=inkBounds(path).w;
      });
    }

    function line(text,face,size) {
      if(!text) return null;
      const run=glyphRun(text,face);
      if(!run.path.length) throw Error('The lettering contains only invisible characters.');
      return {text,run,size:free?0:size};
    }
    const name=line(d.name,d.nameFont,d.nameHeight), subtitle=line(d.subtitle,d.subtitleFont,d.subtitleHeight);
    const first=name||subtitle,second=name&&subtitle;
    const overhead=hasMark&&!beside;
    const top=overhead?textTop:cy-innerH*.43;
    const bottom=cy+innerH*(overhead?.49:.43);
    const band=bottom-top;
    let [lettering=[],smallType=[]]=sizeText(first,second,typeWidth,typeX,top,band,input.units);
    const mainKey=name?'name':'subtitle';
    function positioned(path,key,art) {
      if(!path.length||!free) return path;
      const box=inkBounds(path), point=d.positions[key];
      const fixed=d[key+(art?'Width':'Height')],extent=art?w:h, autoSize=art?box.w:box.h;
      let scale=(fixed||(point?point.size*extent:autoSize))/autoSize;
      const maxScale=Math.min(w/box.w,h/box.h);
      if(fixed&&scale>maxScale+0.00001) throw Error('The '+(art?'image width':'letter height')+' exceeds the blank. Reduce the size to '+measureLimit(autoSize*maxScale,input.units)+' or less.');
      scale=Math.min(scale,maxScale);
      const bx=(box.left+box.right)/2,by=(box.top+box.bottom)/2,rx=box.w*scale/2,ry=box.h*scale/2;
      const px=Math.max(rx,Math.min(w-rx,point?point.x*w:bx));
      const py=Math.max(ry,Math.min(h-ry,point?point.y*h:by));
      if(art) artSizes[key]=rx*2;
      const angle=point?.angle||0;
      boxes[key]=[px,py,rx*2,ry*2,angle];
      const placed=transform(path,scale,scale,px-scale*bx,py-scale*by);
      if(!angle) return placed;
      const radians=angle*Math.PI/180, cos=Math.cos(radians),sin=Math.sin(radians);
      return placed.map(([op,...coords])=>{
        const command=[op];
        for(let i=0;i<coords.length;i+=2) {
          const x=coords[i]-px,y=coords[i+1]-py;
          command.push(px+x*cos-y*sin,py+x*sin+y*cos);
        }
        return command;
      });
    }
    artwork.forEach((key,i)=>{parts[i]=positioned(parts[i],key,true);});
    lettering=positioned(lettering,mainKey,false);smallType=positioned(smallType,'subtitle',false);
    let rules=[];
    function addRules(path,key) {
      const box=inkBounds(path), pose=boxes[key];
      const [x,y,width,,angle]=pose||[(box.left+box.right)/2,(box.top+box.bottom)/2,box.w,box.h,0];
      const gap=small*.035,length=small*.13,c=Math.cos(angle*Math.PI/180),s=Math.sin(angle*Math.PI/180);
      for(const sign of [-1,1]) {
        const near=sign*(width/2+gap),far=near+sign*length;
        if(!free) {
          const l=Math.max(0,x+Math.min(near,far)),r=Math.min(w,x+Math.max(near,far));
          if(r-l>small*.02) rules.push([l,y,r,y,key]);
        } else rules.push([x+c*near,y+s*near,x+c*far,y+s*far,key]);
      }
    }
    if(!free&&artwork.every(key=>d[key+'Lines']==='auto')) {
      // Preserve the original group ornament on automatic layouts.
      if(hasMark&&hasType&&!beside) {
        const from=markWidth/2+small*.035,to=Math.min(usable*.47,from+small*.13);
        if(to>from+small*.02) rules.push([cx-to,markY,cx-from,markY,artwork[0]],[cx+from,markY,cx+to,markY,artwork[0]]);
      }
    } else artwork.forEach((key,i)=>{
      const mode=d[key+'Lines'];
      if(mode==='on'||(mode==='auto'&&!free&&hasType&&!beside)) {
        addRules(parts[i],key);
      }
    });
    if(free&&rules.length) {
      // Intersect each score line with the blank and its hole in the line's own coordinate system.
      const face=contours([...base,...hole],h,.006);
      rules=rules.flatMap(([x,y,u,v,key])=>{
        const dx=u-x,dy=v-y,lengthSquared=dx*dx+dy*dy,crossings=[];
        for(const ring of face) for(let i=0;i<ring.length;i++) {
          const a=ring[i],b=ring[(i+1)%ring.length];
          const ax=a[0]-x,ay=h-a[1]-y,bx=b[0]-x,by=h-b[1]-y;
          const sideA=dx*ay-dy*ax,sideB=dx*by-dy*bx;
          if((sideA>0)===(sideB>0)) continue;
          const t=sideA/(sideA-sideB);
          crossings.push(((ax+t*(bx-ax))*dx+(ay+t*(by-ay))*dy)/lengthSquared);
        }
        crossings.sort((a,b)=>a-b);
        const spans=[];
        for(let i=1;i<crossings.length;i+=2) {
          const l=Math.max(0,crossings[i-1]),r=Math.min(1,crossings[i]);
          if(l<r) spans.push([x+l*dx,y+l*dy,x+r*dx,y+r*dy,key]);
        }
        return spans;
      });
    }
    const ruleFills=rules.map(([x,y,u,v])=>{
      const half=small*.0045/Math.hypot(u-x,v-y),nx=(y-v)*half,ny=(u-x)*half;
      return polygon([[x-nx,y-ny],[u-nx,v-ny],[u+nx,v+ny],[x+nx,y+ny]]);
    });
    return {d,base,hole,parts,artwork,boxes,free,mainKey,artSizes,lettering,smallType,weldName:first?.run.overlap,weldSmall:second?.run.overlap,rules,ruleFills};
  }
  function pathData(path) {
    return path.map(([op,...points])=>op+points.map(rounded).join(' ')).join(' ');
  }
  function filled(path,rule='evenodd') { return path.length?'<path fill-rule="'+rule+'" d="'+pathData(path)+'"/>':''; }
  function swatch(id,ink) {
    const path=fit(motifPath(id),50,32,90,54);
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 64" aria-hidden="true" fill="'+color(ink)+'">'+filled(path)+'</svg>';
  }
  function separateLayers(g) {
    const automatic=defaultOrder(g.d.images);
    return g.d.images.length>0||!!g.d.secondColor||g.d.order.some((key,i)=>key!==automatic[i]);
  }
  function layers(g) {
    if(g.cutLayers) return g.cutLayers;
    if(separateLayers(g)) {
      const rows=[];
      for(const key of g.d.order) {
        const index=g.artwork.indexOf(key),image=index!==-1;
        const path=image?g.parts[index]:key===g.mainKey?g.lettering:key==='subtitle'?g.smallType:null;
        const sideLines=image?g.ruleFills.filter((_,i)=>g.rules[i][4]===key):[];
        if(path?.length) rows.push({name:key,rule:image?'evenodd':'nonzero',keys:[key],paths:[path,...sideLines],
          color:image?g.d.artColors[key]:g.d.ink});
      }
      return rows;
    }
    return [
      {name:'Motif',rule:'evenodd',color:g.d.accent,paths:[...g.parts,...g.ruleFills],keys:g.artwork},
      {name:'Lettering',rule:'nonzero',color:g.d.ink,keys:[g.mainKey,'subtitle'],paths:[g.lettering,g.smallType].filter(p=>p.length)}
    ].filter(layer=>layer.paths.length);
  }
  function credit(design) {
    const ids=[design.motif,design.extraMotif,...(design.images||[]).map(image=>image.art)].filter(id=>catalogIds.has(id)), notices=[];
    const fa=ids.filter(id=>id.startsWith('fa-'));
    if(fa.length) notices.push('Artwork '+fa.join(', ')+': Font Awesome Free 6.7.2 by Fonticons, Inc. (https://fontawesome.com). Adapted outlines, CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/).');
    for(const artist of ['Lorc','Delapouite']) {
      const art=ids.filter(id=>id.startsWith('gi-'+artist.toLowerCase()+'-'));
      if(art.length) notices.push('Artwork '+art.join(', ')+' by '+artist+' (https://game-icons.net). Adapted outlines, CC BY 3.0 (https://creativecommons.org/licenses/by/3.0/).');
    }
    if(ids.some(id=>id.startsWith('ne-'))) notices.push('Adapted Noto Emoji outlines by Google LLC (https://github.com/googlefonts/noto-emoji), SIL OFL 1.1.');
    if(ids.some(id=>id.startsWith('mdi-'))) notices.push('Adapted Material Design Icons by Pictogrammers (https://pictogrammers.com/library/mdi/), Apache License 2.0.');
    const sources=[
      ['ph-','Phosphor Icons (https://phosphoricons.com), MIT'],['fe-','Microsoft Fluent Emoji (https://github.com/microsoft/fluentui-emoji), MIT'],
      ['ms-','Google Material Symbols (https://fonts.google.com/icons), Apache 2.0'],['hi-','Healthicons by Resolve to Save Lives (https://healthicons.org), CC0'],
      ['maki-','Mapbox Maki (https://github.com/mapbox/maki), CC0'],['tb-','Tabler Icons by Pawel Kuna (https://tabler.io/icons), MIT'],
      ['bi-','Bootstrap Authors (https://icons.getbootstrap.com), MIT']
    ];
    for(const [prefix,source] of sources) if(ids.some(id=>id.startsWith(prefix))) notices.push('Adapted artwork: '+source+'.');
    if(ids.includes('uh-interlocking')) notices.push('Interlocking UH mark, University of Houston. https://www.uh.edu/brand/brand-identity/master-brand-logos-and-marks/interlocking-uh/');
    if(ids.some(id=>id.startsWith('parking-'))) notices.push('Parking artwork from The Makers Bench. Individual source notices: https://glennarmbruster.github.io/Books/makers-bench/artwork-credits.txt');
    if(design.nameFont==='waltograph'||design.subtitleFont==='waltograph')
      notices.push('Waltograph by Justin Callaghan. Adapted outlines under CC NC-SA 1.0. https://mickeyavenue.com/fonts/waltograph/');
    return notices.join(' ');

  }
  let clipSerial=0;
  function xml(g,mode) {
    const {d}=g;
    const dimensions=mode==='preview'?Object.entries(g.artSizes).map(([key,width])=>' data-'+key.toLowerCase()+'-width="'+rounded(width)+'"').join(''):'';
    const opening='<svg xmlns="http://www.w3.org/2000/svg" width="'+d.width+'mm" height="'+d.height+'mm" viewBox="0 0 '+d.width+' '+d.height+'"'+dimensions+'>'+(credit(d)?'<desc>'+credit(d)+'</desc>':'');
    if(mode==='glowforge') {
      const score=g.rules.map(([x,y,u,v])=>'<path d="M'+rounded(x)+' '+rounded(y)+'L'+rounded(u)+' '+rounded(v)+'"/>').join('');
      return opening+'<g id="Engrave" fill="#000000">'+g.parts.map(path=>filled(path)).join('')+filled(g.lettering,'nonzero')+filled(g.smallType,'nonzero')+'</g>'+
        (score?'<g id="Score" fill="none" stroke="#0000ff" stroke-width="0.1">'+score+'</g>':'')+
        '<g id="Cut" fill="none" stroke="#ff0000" stroke-width="0.1">'+[g.hole,g.base].filter(p=>p.length).map(p=>'<path d="'+pathData(p)+'"/>').join('')+'</g></svg>';
    }
    const art=layers(g).map(l=>'<g id="'+l.name+'" fill="'+l.color+'">'+l.paths.map((p,i)=>{
      const path=filled(p,l.rule),key=l.keys[i];
      const box=g.boxes[key];
      return mode==='preview'&&key?path.replace('<path ','<path data-object="'+key+'" '+(box?'data-box="'+box.join(' ')+'" ':'')):path;
    }).join('')+'</g>').join('');
    if(mode==='cricut') {
      if (!art) throw Error('Add lettering or a motif for the Cricut to cut.');
      return opening+art+'</svg>';
    }
    const outline=[...g.base,...g.hole],clip='bench-face-'+(++clipSerial);
    const painted=(g.free&&['print','preview'].includes(mode))
      ? '<defs><clipPath id="'+clip+'"><path clip-rule="evenodd" d="'+pathData(outline)+'"/></clipPath></defs><g clip-path="url(#'+clip+')">'+art+'</g>'
      : art;
    const front='<g id="Blank" fill="'+d.paper+'">'+filled(outline)+'</g>'+painted;
    return opening+(mode==='print'&&d.mirror?'<g transform="translate('+d.width+' 0) scale(-1 1)">'+front+'</g>':front)+'</svg>';
  }
  function svg(input,mode='preview') { return xml(geometry(input),mode); }

  // Preserve the intended physical print size as both a PNG pHYs chunk and a vector PDF page.
  function pngResolution(bytes,notice) {
    const chunk=new Uint8Array(21), view=new DataView(chunk.buffer);
    view.setUint32(0,9);chunk.set([112,72,89,115],4);
    const ppm=Math.round(300*1000/mmPerInch);
    view.setUint32(8,ppm);view.setUint32(12,ppm);chunk[16]=1;
    function checksum(chunk) {
      let crc=0xffffffff;
      for(const b of chunk.subarray(4,-4)){crc^=b;for(let i=0;i<8;i++)crc=(crc>>>1)^((crc&1)?0xedb88320:0);}
      new DataView(chunk.buffer).setUint32(chunk.length-4,(crc^0xffffffff)>>>0);
    }
    checksum(chunk);
    const parts=[bytes.slice(0,33),chunk],input=new DataView(bytes.buffer,bytes.byteOffset,bytes.byteLength);
    if(notice) {
      const line=new TextEncoder().encode('Copyright\0'+notice), textChunk=new Uint8Array(12+line.length);
      new DataView(textChunk.buffer).setUint32(0,line.length);
      textChunk.set([116,69,88,116],4);textChunk.set(line,8);checksum(textChunk);parts.push(textChunk);
    }
    for(let at=33;at<bytes.length;){
      const end=at+input.getUint32(at)+12;
      if(input.getUint32(at+4)!==0x70485973)parts.push(bytes.slice(at,end));
      at=end;
    }
    return new Blob(parts,{type:'image/png'});
  }
  async function png(g) {
    const canvas=document.createElement('canvas');
    canvas.width=Math.round(g.d.width*300/mmPerInch);
    canvas.height=Math.round(g.d.height*300/mmPerInch);
    const src=URL.createObjectURL(new Blob([xml(g,'print')],{type:'image/svg+xml'}));
    try {
      const img=new Image();img.src=src;await img.decode();
      const ctx=canvas.getContext('2d');ctx.drawImage(img,0,0,canvas.width,canvas.height);
      const output=await new Promise((resolve,reject)=>canvas.toBlob(value=>value?resolve(value):reject(Error('The image is too large for this browser.')),'image/png'));
      return pngResolution(new Uint8Array(await output.arrayBuffer()),credit(g.d));
    } finally {URL.revokeObjectURL(src);canvas.width=canvas.height=0;}
  }
  function pdf(g) {
    const {d}=g, scale=72/mmPerInch, width=rounded(d.width*scale),height=rounded(d.height*scale);
    let content='q\n'+[d.mirror?-scale:scale,0,0,-scale,d.mirror?width:0,height].map(rounded).join(' ')+' cm\n';
    function trace(path) {
      for(const [op,...coords] of path)content+=(coords.length?coords.map(rounded).join(' ')+' ':'')+({M:'m',L:'l',C:'c',Z:'h'})[op]+'\n';
    }
    function paint(hex,paths,rule='evenodd') {
      const rgb=hex.slice(1).match(/../g).map(h=>rounded(parseInt(h,16)/255));
      content+=rgb.join(' ')+' rg\n';
      for(const path of paths){
        trace(path);
        content+=rule==='evenodd'?'f*\n':'f\n';
      }
    }
    paint(d.paper,[[...g.base,...g.hole]]);
    if(g.free) {trace([...g.base,...g.hole]);content+='W* n\n';}
    for(const layer of layers(g))paint(layer.color,layer.paths,layer.rule);
    content+='Q\n';
    const objects=['<< /Type /Catalog /Pages 2 0 R >>','<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
      '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 '+width+' '+height+'] /Resources << >> /Contents 4 0 R >>',
      '<< /Length '+content.length+' >>\nstream\n'+content+'endstream'];
    let out='%PDF-1.4\n'+(credit(d)?'% '+credit(d)+'\n':'');const offsets=[0];
    objects.forEach((o,i)=>{offsets.push(out.length);out+=(i+1)+' 0 obj\n'+o+'\nendobj\n';});
    const xref=out.length;
    out+='xref\n0 5\n0000000000 65535 f \n'+offsets.slice(1).map(n=>String(n).padStart(10,'0')+' 00000 n \n').join('')+
      'trailer\n<< /Size 5 /Root 1 0 R >>\nstartxref\n'+xref+'\n%%EOF\n';
    return new Blob([out],{type:'application/pdf'});
  }
  function contours(path,height,tolerance=.025) {
    const result=[];
    let row=[],last;
    function append(point) {
      if(!row.length||point[0]!==last[0]||point[1]!==last[1]){
        row.push([point[0],height-point[1]]);
        last=point;
      }
    }
    const mid=(a,b)=>[(a[0]+b[0])/2,(a[1]+b[1])/2];
    function curve(a,b,c,d,depth=0) {
      const dx=d[0]-a[0],dy=d[1]-a[1],len=Math.hypot(dx,dy);
      const dist=p=>len?Math.abs(dx*(a[1]-p[1])-dy*(a[0]-p[0]))/len:Math.hypot(p[0]-a[0],p[1]-a[1]);
      if(depth>=12||Math.max(dist(b),dist(c))<=tolerance){append(d);return;}
      const ab=mid(a,b),bc=mid(b,c),cd=mid(c,d),abc=mid(ab,bc),bcd=mid(bc,cd),center=mid(abc,bcd);
      curve(a,ab,abc,center,depth+1);curve(center,bcd,cd,d,depth+1);
    }
    for(const [op,...p] of path) {
      if(op==='M'){row=[];append(p);}
      if(op==='L')append(p);
      if(op==='C')curve(last,p.slice(0,2),p.slice(2,4),p.slice(4,6));
      if(op==='Z'){
        if(row.length>1&&row[0][0]===row.at(-1)[0]&&row[0][1]===row.at(-1)[1])row.pop();
        if(row.length>=3)result.push(row);
        row=[];
      }
    }
    return result;
  }
  let manifoldPromise;
  function manifoldModule() {
    if (!manifoldPromise) {
      const source=new URL('vendor/manifold.js',scriptURL);
      manifoldPromise=import(source.href).then(async ({default:initialize})=>{
        const api=await initialize({locateFile:file=>new URL(file,source).href});
        api.setup();return api;
      }).catch(error=>{manifoldPromise=undefined;throw error;});
    }
    return manifoldPromise;
  }
  function binarySTL(mesh,design) {
    const indices=mesh.triVerts,vertices=mesh.vertProperties,step=mesh.numProp;
    const count=indices.length/3;
    const bytes=new ArrayBuffer(84+50*count),out=new DataView(bytes);
    const sources=credit(design), labels=[];
    if(sources.includes('Fonticons')) labels.push('Fonticons CC BY 4.0');
    for(const artist of ['Lorc','Delapouite']) if(sources.includes('by '+artist)) labels.push(artist+' CC BY 3.0');
    if(sources.includes('Waltograph')) labels.push('Waltograph J. Callaghan CC NC-SA 1.0');
    if(sources&&labels.length===0) labels.push('Art credits: glennarmbruster.github.io/Books/makers-bench/artwork-credits.txt');
    new Uint8Array(bytes).set(new TextEncoder().encode([...labels,"Maker's Bench | mm"].join(' | ')).subarray(0,80));
    out.setUint32(80,count,true);
    let offset=84;
    const float=value=>{out.setFloat32(offset,value,true);offset+=4;};
    for(let i=0;i<indices.length;i+=3) {
      const [a,b,c]=[indices[i],indices[i+1],indices[i+2]].map(k=>vertices.subarray(k*step,k*step+3));
      const u=[b[0]-a[0],b[1]-a[1],b[2]-a[2]],v=[c[0]-a[0],c[1]-a[1],c[2]-a[2]];
      const normal=[u[1]*v[2]-u[2]*v[1],u[2]*v[0]-u[0]*v[2],u[0]*v[1]-u[1]*v[0]];
      const length=Math.hypot(...normal);
      for(const n of normal)float(n/(length||1));
      for(const point of [a,b,c])for(const n of point)float(n);
      offset+=2;
    }
    return new Blob([bytes],{type:'model/stl'});
  }
  async function stl(g) {
    const {CrossSection}=await manifoldModule(),{d}=g,owned=[];
    const own=obj=>(owned.push(obj),obj);
    const section=(path,rule='EvenOdd')=>own(new CrossSection(contours(path,d.height),rule));
    try {
      const face=section([...g.base,...g.hole]),base=own(face.extrude(d.thickness));
      const artwork=layers(g).flatMap(layer=>layer.paths.map(path=>section(path,layer.rule==='nonzero'?'NonZero':'EvenOdd')));
      let solid=base;
      if(artwork.length) {
        const union=own(CrossSection.union(artwork)),relief=g.free?own(union.intersect(face)):union;
        const prism=own(relief.extrude(d.relief+.01));
        const raised=own(prism.translate([0,0,d.thickness-.01]));
        solid=own(base.add(raised));
      }
      if(solid.status()!=='NoError')throw Error('The solid could not be built. Try a different size.');
      return binarySTL(solid.getMesh(),d);
    } finally { for(const obj of owned.reverse())obj.delete(); }
  }
  async function blob(input,format) {
    const g=geometry(input);
    switch(format) {
      case 'profile': case 'glowforge': case 'cricut': {
        // Cutters trace internal edges. Unite touching script outlines before exporting.
        if(g.free||separateLayers(g)) {
          // Union overlapping contours per operation, then trim to the real blank and holes.
          const {CrossSection}=await manifoldModule(),owned=[];
          const keep=section=>{owned.push(section);return section;};
          const area=(path,rule)=>keep(new CrossSection(contours(path,g.d.height,.006),rule));
          try {
            const face=area([...g.base,...g.hole],'EvenOdd');
            function trimmed(regions) {
              if(!regions.length) return [];
              const whole=keep(CrossSection.union(regions)),trim=keep(whole.intersect(face));
              return trim.toPolygons().flatMap(poly=>polygon(poly.map(([x,y])=>[x,g.d.height-y])));
            }
            if(separateLayers(g)&&format!=='glowforge') {
              // Weld adjacent layers of the same color without changing their stacking order.
              const runs=[];
              for(const layer of layers(g)) {
                if(runs.at(-1)?.color!==layer.color) runs.push({...layer,regions:[]});
                runs.at(-1).regions.push(...layer.paths.map(path=>area(path,layer.rule==='nonzero'?'NonZero':'EvenOdd')));
              }
              g.cutLayers=runs.map(run=>({...run,paths:[trimmed(run.regions)],rule:'evenodd'}));
            } else {
              const inks=g.parts.map(path=>area(path,'EvenOdd'));
              const type=[g.lettering,g.smallType].filter(p=>p.length).map(p=>area(p,'NonZero'));
              if(format==='glowforge') inks.push(...type);
              else inks.push(...g.ruleFills.map(p=>area(p,'EvenOdd')));
              const path=trimmed(inks);
              g.parts=path.length?[path]:[];g.ruleFills=[];
              g.lettering=format==='glowforge'?[]:trimmed(type);
              g.smallType=[];
            }
            g.weldName=false;g.weldSmall=false;
          } finally {for(const section of owned.reverse()) section.delete();}
        }
        if(g.weldName||g.weldSmall) {
          const {CrossSection}=await manifoldModule();
          for(const [key,weld] of [['lettering',g.weldName],['smallType',g.weldSmall]]) {
            if(!weld||!g[key].length) continue;
            const area=new CrossSection(contours(g[key],g.d.height,.006),'NonZero');
            try {g[key]=area.toPolygons().flatMap(poly=>polygon(poly.map(([x,y])=>[x,g.d.height-y])));}
            finally {area.delete();}
          }
        }
        return new Blob([xml(g,format)],{type:'image/svg+xml'});
      }
      case 'png':return png(g);
      case 'pdf':return pdf(g);
      case 'stl':return stl(g);
      default:throw Error('Choose a download format.');
    }
  }
  async function download(input,format) {
    const content=await blob(input,format);
    const extension={glowforge:'svg',cricut:'svg',png:'png',pdf:'pdf',stl:'stl'}[format];
    const label=String(input.name||input.shape).normalize('NFC').replace(/[^\p{L}\p{N}_-]+/gu,'-').replace(/^-+|-+$/g,'')||'design';
    const mirrored=input.mirror&&['png','pdf'].includes(format)?'-mirrored':'';
    const filename=label+'-'+format+mirrored+'.'+extension;
    const address=URL.createObjectURL(content),link=document.createElement('a');
    link.href=address;link.download=filename;document.body.append(link);link.click();link.remove();
    setTimeout(()=>URL.revokeObjectURL(address),30000);
    return filename;
  }
  window.BenchArt=Object.freeze({presets,typefaces,hasHole,defaultOrder,credit,swatch,validate,svg,blob,download});
})();

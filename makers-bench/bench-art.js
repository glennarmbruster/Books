/* Maker's Bench design geometry uses millimeters throughout. */
(() => {
  'use strict';
  const font = window.BenchFont;
  const scriptURL = document.currentScript.src;
  const mmPerInch = 25.4;
  const kappa = 4 * (Math.sqrt(2) - 1) / 3;
  const motifs = ['none', 'wave', 'sun', 'leaf', 'mountain'];

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
  function cleanLine(raw) {
    const text = String(raw ?? '').normalize('NFC').trim();
    if ([...text].length > 64) throw Error('Use up to 64 characters per line.');
    for (const char of text) {
      if (!Object.hasOwn(font.map, char)) throw Error('The outline font does not include “' + char + '”. Try a different character.');
    }
    return text;
  }
  function validate(input) {
    if (!['tag','coaster','plate'].includes(input.shape)) throw Error('Choose a project shape.');
    const width = number(input.width,'Width',15,500);
    const height = number(input.height,'Height',15,500);
    if (!motifs.includes(input.motif)) throw Error('Choose a motif from the list.');
    return {
      shape: input.shape, width, height,
      hole: input.shape === 'tag' ? number(input.hole ?? 0,'Hole diameter',0,Math.min(width*.2,height*.4)) : 0,
      thickness: number(input.thickness ?? 3,'Base thickness',.4,30),
      relief: number(input.relief ?? 1,'Raised height',.2,15),
      motif: input.motif, ink: color(input.ink), accent: color(input.accent),
      paper: color(input.paper), mirror: input.mirror === true,
      name: cleanLine(input.name), subtitle: cleanLine(input.subtitle)
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
  function glyphPath(text) {
    const paths=[];
    let shift=0;
    for(const char of text) {
      const [advance,commands]=font.glyphs[font.map[char]];
      let px=0,py=0;
      for(const [op,...p] of commands) {
        if(op==='Z') { paths.push(['Z']); continue; }
        const points=p.map((n,i)=>i%2?-n:shift+n);
        if(op==='Q') {
          const [cx,cy,x,y]=points;
          paths.push(['C',px+2*(cx-px)/3,py+2*(cy-py)/3,x+2*(cx-x)/3,y+2*(cy-y)/3,x,y]);
        } else paths.push([op,...points]);
        px=points.at(-2);py=points.at(-1);
      }
      shift+=advance;
    }
    return paths;
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
      default: return [];
    }
  }

  function geometry(input) {
    const d=validate(input),w=d.width,h=d.height,small=Math.min(w,h);
    const base = d.shape==='coaster'?circle(w/2,h/2,w/2,h/2):rect(0,0,w,h,small*(d.shape==='tag'?.16:.09));
    const holeX=d.hole/2+Math.min(w*.075,h*.13);
    const hole=d.hole?circle(holeX,h/2,d.hole/2):[];
    const insetX=d.shape==='coaster'?w*.16:small*.085;
    const left=d.hole?Math.max(insetX,holeX+d.hole/2+small*.065):insetX;
    const usable=w-left-insetX,cx=left+usable/2;
    const innerH=h*(d.shape==='coaster'?.67:.73);
    const hasMark=d.motif!=='none', hasType=Boolean(d.name||d.subtitle);
    const markSize=hasType?innerH*.29:innerH*.66;
    const markY=hasType?h/2-innerH*.32:h/2;
    const mark=fit(motifPath(d.motif),cx,markY,Math.min(usable*.66,markSize*2),markSize);
    const first=d.name||d.subtitle,second=d.name?d.subtitle:'';
    const top=hasMark?h/2-innerH*.085:h/2-innerH*.43;
    const bottom=h/2+innerH*(hasMark?.49:.43);
    const band=bottom-top;
    const lettering=first?fit(glyphPath(first),cx,top+band*(second?.30:.5),usable,band*(second?.51:.79)):[];
    const smallType=second?fit(glyphPath(second),cx,top+band*.84,usable*.92,band*.225):[];
    const rules=[];
    if (hasMark && hasType) {
      const markHalf=Math.min(usable*.66,markSize*2)/2;
      const from=markHalf+small*.035,to=Math.min(usable*.47,from+small*.13);
      if(to>from+small*.02)rules.push([cx-to,markY,cx-from,markY],[cx+from,markY,cx+to,markY]);
    }
    const ruleWidth=small*.009;
    const ruleFills=rules.map(([x,y,r])=>rect(x,y-ruleWidth/2,r-x,ruleWidth));
    return {d,base,hole,mark,lettering,smallType,rules,ruleFills};
  }
  function pathData(path) {
    return path.map(([op,...points])=>op+points.map(rounded).join(' ')).join(' ');
  }
  function filled(path) { return path.length?'<path fill-rule="evenodd" d="'+pathData(path)+'"/>':''; }
  function layers(g) {
    return [
      {name:'Motif',color:g.d.accent,paths:[g.mark,...g.ruleFills].filter(p=>p.length)},
      {name:'Lettering',color:g.d.ink,paths:[g.lettering,g.smallType].filter(p=>p.length)}
    ].filter(layer=>layer.paths.length);
  }
  function xml(g,mode) {
    const {d}=g;
    const opening='<svg xmlns="http://www.w3.org/2000/svg" width="'+d.width+'mm" height="'+d.height+'mm" viewBox="0 0 '+d.width+' '+d.height+'">';
    if(mode==='glowforge') {
      const score=g.rules.map(([x,y,u,v])=>'<path d="M'+rounded(x)+' '+rounded(y)+'L'+rounded(u)+' '+rounded(v)+'"/>').join('');
      return opening+'<g id="Engrave" fill="#000000">'+[g.mark,g.lettering,g.smallType].map(filled).join('')+'</g>'+
        (score?'<g id="Score" fill="none" stroke="#0000ff" stroke-width="0.1">'+score+'</g>':'')+
        '<g id="Cut" fill="none" stroke="#ff0000" stroke-width="0.1">'+[g.hole,g.base].filter(p=>p.length).map(p=>'<path d="'+pathData(p)+'"/>').join('')+'</g></svg>';
    }
    const art=layers(g).map(l=>'<g id="'+l.name+'" fill="'+l.color+'">'+l.paths.map(filled).join('')+'</g>').join('');
    if(mode==='cricut') {
      if (!art) throw Error('Add lettering or a motif for the Cricut to cut.');
      return opening+art+'</svg>';
    }
    const front='<g id="Blank" fill="'+d.paper+'">'+filled([...g.base,...g.hole])+'</g>'+art;
    return opening+(mode==='print'&&d.mirror?'<g transform="translate('+d.width+' 0) scale(-1 1)">'+front+'</g>':front)+'</svg>';
  }
  function svg(input,mode='preview') { return xml(geometry(input),mode); }

  // Preserve the intended physical print size as both a PNG pHYs chunk and a vector PDF page.
  function pngResolution(bytes) {
    const chunk=new Uint8Array(21), view=new DataView(chunk.buffer);
    view.setUint32(0,9);chunk.set([112,72,89,115],4);
    const ppm=Math.round(300*1000/mmPerInch);
    view.setUint32(8,ppm);view.setUint32(12,ppm);chunk[16]=1;
    let crc=0xffffffff;
    for(const b of chunk.slice(4,17)){crc^=b;for(let i=0;i<8;i++)crc=(crc>>>1)^((crc&1)?0xedb88320:0);}
    view.setUint32(17,(crc^0xffffffff)>>>0);
    const parts=[bytes.slice(0,33),chunk],input=new DataView(bytes.buffer,bytes.byteOffset,bytes.byteLength);
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
      return pngResolution(new Uint8Array(await output.arrayBuffer()));
    } finally {URL.revokeObjectURL(src);canvas.width=canvas.height=0;}
  }
  function pdf(g) {
    const {d}=g, scale=72/mmPerInch, width=rounded(d.width*scale),height=rounded(d.height*scale);
    let content='q\n'+[d.mirror?-scale:scale,0,0,-scale,d.mirror?width:0,height].map(rounded).join(' ')+' cm\n';
    function paint(hex,paths) {
      const rgb=hex.slice(1).match(/../g).map(h=>rounded(parseInt(h,16)/255));
      content+=rgb.join(' ')+' rg\n';
      for(const path of paths){
        for(const [op,...coords] of path)content+=(coords.length?coords.map(rounded).join(' ')+' ':'')+({M:'m',L:'l',C:'c',Z:'h'})[op]+'\n';
        content+='f*\n';
      }
    }
    paint(d.paper,[[...g.base,...g.hole]]);
    for(const layer of layers(g))paint(layer.color,layer.paths);
    content+='Q\n';
    const objects=['<< /Type /Catalog /Pages 2 0 R >>','<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
      '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 '+width+' '+height+'] /Resources << >> /Contents 4 0 R >>',
      '<< /Length '+content.length+' >>\nstream\n'+content+'endstream'];
    let out='%PDF-1.4\n';const offsets=[0];
    objects.forEach((o,i)=>{offsets.push(out.length);out+=(i+1)+' 0 obj\n'+o+'\nendobj\n';});
    const xref=out.length;
    out+='xref\n0 5\n0000000000 65535 f \n'+offsets.slice(1).map(n=>String(n).padStart(10,'0')+' 00000 n \n').join('')+
      'trailer\n<< /Size 5 /Root 1 0 R >>\nstartxref\n'+xref+'\n%%EOF\n';
    return new Blob([out],{type:'application/pdf'});
  }
  function contours(path,height) {
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
      if(depth>=12||Math.max(dist(b),dist(c))<=.025){append(d);return;}
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
  function binarySTL(mesh) {
    const indices=mesh.triVerts,vertices=mesh.vertProperties,step=mesh.numProp;
    const count=indices.length/3;
    const bytes=new ArrayBuffer(84+50*count),out=new DataView(bytes);
    new Uint8Array(bytes).set(new TextEncoder().encode("Maker's Bench | millimeters"));
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
    const section=path=>own(new CrossSection(contours(path,d.height),'EvenOdd'));
    try {
      const base=own(section([...g.base,...g.hole]).extrude(d.thickness));
      const artwork=layers(g).flatMap(layer=>layer.paths.map(section));
      let solid=base;
      if(artwork.length) {
        const relief=own(CrossSection.union(artwork));
        const prism=own(relief.extrude(d.relief+.01));
        const raised=own(prism.translate([0,0,d.thickness-.01]));
        solid=own(base.add(raised));
      }
      if(solid.status()!=='NoError')throw Error('The solid could not be built. Try a different size.');
      return binarySTL(solid.getMesh());
    } finally { for(const obj of owned.reverse())obj.delete(); }
  }
  async function blob(input,format) {
    const g=geometry(input);
    switch(format) {
      case 'glowforge': case 'cricut': return new Blob([xml(g,format)],{type:'image/svg+xml'});
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
  window.BenchArt=Object.freeze({validate,svg,blob,download});
})();

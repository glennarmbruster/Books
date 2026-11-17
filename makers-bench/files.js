'use strict';
window.BenchFiles = (() => {
  const bytes = new TextEncoder();
  const crcTable = Uint32Array.from({length:256}, (_, byte) => {
    for (let n = 0; n < 8; n++) byte = (byte >>> 1) ^ ((byte & 1) ? 0xedb88320 : 0);
    return byte >>> 0;
  });
  async function zip(entries, type = 'application/zip') {
    const parts = [], directory = [];
    let offset = 0, directorySize = 0;
    for (const [filename, blob] of entries) {
      const name = bytes.encode(filename), data = new Uint8Array(await blob.arrayBuffer());
      let crc = 0xffffffff;
      for (const byte of data) crc = (crc >>> 8) ^ crcTable[(crc ^ byte) & 255];
      const header = new DataView(new ArrayBuffer(30));
      header.setUint32(0,0x04034b50,true); header.setUint16(4,20,true);
      header.setUint16(6,0x0800,true); header.setUint16(12,33,true);
      header.setUint32(14,~crc,true); header.setUint32(18,data.length,true);
      header.setUint32(22,data.length,true); header.setUint16(26,name.length,true);
      const central = new DataView(new ArrayBuffer(46));
      central.setUint32(0,0x02014b50,true); central.setUint16(4,20,true);
      new Uint8Array(central.buffer,6,26).set(new Uint8Array(header.buffer,4));
      central.setUint32(42,offset,true);
      parts.push(header.buffer,name,data); directory.push(central.buffer,name);
      directorySize += 46 + name.length; offset += 30 + name.length + data.length;
    }
    const end = new DataView(new ArrayBuffer(22));
    end.setUint32(0,0x06054b50,true); end.setUint16(8,entries.length,true); end.setUint16(10,entries.length,true);
    end.setUint32(12,directorySize,true); end.setUint32(16,offset,true);
    return new Blob([...parts,...directory,end.buffer],{type});
  }
  function save(blob, filename) {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob); a.download = filename;
    document.body.append(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href),30000);
  }
  function slug(s) { return s.normalize('NFC').replace(/[^\p{L}\p{N}-]+/gu,'-').replace(/^-+|-+$/g,'') || 'design'; }

  // 3MF indexes shared vertices and explicitly records millimeters.
  async function model3mf(stl,notice) {
    const data = new DataView(await stl.arrayBuffer()), ids = new Map(), vertices = [], triangles = [];
    for (let i=0; i<data.getUint32(80,true); i++) {
      const triangle = [];
      for (let j=0; j<3; j++) {
        const start = 96 + i*50 + j*12;
        const xyz = [0,4,8].map(delta=>data.getFloat32(start+delta,true));
        const key = xyz.join(',');
        if (!ids.has(key)) {
          ids.set(key, vertices.length);
          vertices.push('<vertex x="'+xyz[0]+'" y="'+xyz[1]+'" z="'+xyz[2]+'"/>');
        }
        triangle.push(ids.get(key));
      }
      triangles.push('<triangle v1="'+triangle[0]+'" v2="'+triangle[1]+'" v3="'+triangle[2]+'"/>');
    }
    const xml = str=>new Blob(['<?xml version="1.0" encoding="UTF-8"?>',str]);
    return zip([
      ['[Content_Types].xml',xml('<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="model" ContentType="application/vnd.ms-package.3dmanufacturing-3dmodel+xml"/></Types>')],
      ['_rels/.rels',xml('<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Target="/3D/3dmodel.model" Id="model" Type="http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel"/></Relationships>')],
      ['3D/3dmodel.model',xml('<model unit="millimeter" xml:lang="en-US" xmlns="http://schemas.microsoft.com/3dmanufacturing/core/2015/02">'+(notice?'<metadata name="Description">'+notice+'</metadata>':'')+'<resources><object id="1" type="model"><mesh><vertices>'+vertices.join('')+'</vertices><triangles>'+triangles.join('')+'</triangles></mesh></object></resources><build><item objectid="1"/></build></model>')]
    ],'model/3mf');
  }
  async function output(design, format) {
    if (format === 'profile') return new Blob([BenchArt.svg(design,'preview')],{type:'image/svg+xml'});
    if (format === '3mf') return model3mf(await BenchArt.blob(design,'stl'),BenchArt.credit(design));
    return BenchArt.blob(design,format);
  }
  let db;
  function database() {
    if (!db) db = new Promise((resolve,reject)=>{
      const req = indexedDB.open('makers-bench-workshop',1);
      req.onupgradeneeded=()=>req.result.createObjectStore('runs',{keyPath:'id'});
      req.onsuccess=()=>resolve(req.result); req.onerror=()=>reject(req.error);
    }).catch(err=>{db=null;throw err;});
    return db;
  }
  async function records(value) {
    const conn=await database();
    return new Promise((resolve,reject)=>{
      const tx=conn.transaction('runs',value?'readwrite':'readonly'), store=tx.objectStore('runs');
      const request=value?store.add(value):store.getAll();
      tx.oncomplete=()=>resolve(request.result);
      tx.onabort=()=>reject(tx.error || Error('Could not save the project on this device.'));
    });
  }
  async function photo(file) {
    if (!file) return '';
    const img=new Image(), url=URL.createObjectURL(file);
    try {
      img.src=url; await img.decode();
      const scale=Math.min(1,1000/Math.max(img.naturalWidth,img.naturalHeight)), canvas=document.createElement('canvas');
      canvas.width=Math.max(1,Math.round(img.naturalWidth*scale)); canvas.height=Math.max(1,Math.round(img.naturalHeight*scale));
      const ctx=canvas.getContext('2d'); ctx.fillStyle='white';ctx.fillRect(0,0,canvas.width,canvas.height);
      ctx.drawImage(img,0,0,canvas.width,canvas.height);return canvas.toDataURL('image/jpeg',.8);
    } finally {URL.revokeObjectURL(url);}
  }
  return {zip,save,output,slug,records,photo};
})();

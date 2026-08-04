const fs = require('fs');
const files = ['public/fw1.mp4','public/fw2.mp4','public/v2.mp4','public/v4.mp4'];
const tags = ['ftyp','moov','mdat','avc1','mp4a','hvc1','vp09'];
for (const f of files) {
  const b = fs.readFileSync(f);
  const s = b.toString('latin1');
  const results = tags.map((tag) => {
    const idx = s.indexOf(tag);
    return `${tag}:${idx >= 0 ? idx : 'no'}`;
  });
  console.log(`${f} size=${b.length} ${results.join(' ')}`);
}

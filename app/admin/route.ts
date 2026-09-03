import fs from 'node:fs';
import path from 'node:path';
import {gunzipSync} from 'node:zlib';

type Bundle={adminHtml:string};
function getBundle():Bundle{
  const dir=path.join(process.cwd(),'content','chunks');
  const encoded=fs.readdirSync(dir).filter(f=>f.endsWith('.txt')).sort().map(f=>fs.readFileSync(path.join(dir,f),'utf8')).join('');
  return JSON.parse(gunzipSync(Buffer.from(encoded,'base64')).toString('utf8')) as Bundle;
}
export function GET(){const b=getBundle();return new Response(b.adminHtml,{headers:{'content-type':'text/html; charset=utf-8','cache-control':'no-store'}})}

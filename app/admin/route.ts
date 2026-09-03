import fs from 'node:fs';
import path from 'node:path';
import {gunzipSync} from 'node:zlib';
type Bundle={adminHtml:string};
function getBundle():Bundle{const encoded=fs.readFileSync(path.join(process.cwd(),'content','site-bundle.b64'),'utf8');return JSON.parse(gunzipSync(Buffer.from(encoded,'base64')).toString('utf8')) as Bundle}
export function GET(){const bundle=getBundle();return new Response(bundle.adminHtml,{headers:{'content-type':'text/html; charset=utf-8','cache-control':'no-store'}})}

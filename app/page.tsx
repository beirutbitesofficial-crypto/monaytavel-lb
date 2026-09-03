import fs from 'node:fs';
import path from 'node:path';
import {gunzipSync} from 'node:zlib';
import Script from 'next/script';

type Bundle={bodyHtml:string;css:string;js:string;adminHtml:string};
function getBundle():Bundle{
  const dir=path.join(process.cwd(),'content','chunks');
  const encoded=fs.readdirSync(dir).filter(f=>f.endsWith('.txt')).sort().map(f=>fs.readFileSync(path.join(dir,f),'utf8')).join('');
  return JSON.parse(gunzipSync(Buffer.from(encoded,'base64')).toString('utf8')) as Bundle;
}
export default function HomePage(){const b=getBundle();return <><style dangerouslySetInnerHTML={{__html:b.css}}/><main suppressHydrationWarning dangerouslySetInnerHTML={{__html:b.bodyHtml}}/><Script id="mona-bootstrap" strategy="afterInteractive" dangerouslySetInnerHTML={{__html:b.js}}/></>}

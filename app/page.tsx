import fs from 'node:fs';
import path from 'node:path';
import {gunzipSync} from 'node:zlib';
import Script from 'next/script';

type Bundle={bodyHtml:string;css:string;js:string;adminHtml:string};
function getBundle():Bundle{
  const encoded=fs.readFileSync(path.join(process.cwd(),'content','site-bundle.b64'),'utf8');
  return JSON.parse(gunzipSync(Buffer.from(encoded,'base64')).toString('utf8')) as Bundle;
}
export default function HomePage(){const bundle=getBundle();return <><style dangerouslySetInnerHTML={{__html:bundle.css}}/><main suppressHydrationWarning dangerouslySetInnerHTML={{__html:bundle.bodyHtml}}/><Script id="mona-bootstrap" strategy="afterInteractive" dangerouslySetInnerHTML={{__html:bundle.js}}/></>}

'use client';
import {useEffect,useState} from 'react';

const STORAGE_KEY='mona-admin-settings';

type Settings={phone:string;email:string;whatsapp:string;heroBadge:string;heroTitle:string};
const defaults:Settings={phone:'+961 71 472 852',email:'contact@monatravel-lb.com',whatsapp:'+961 71 472 852',heroBadge:'B2B & MICE Specialists in Lebanon',heroTitle:'Your Premier B2B & MICE Partner in Lebanon'};

export default function AdminPage(){
 const [settings,setSettings]=useState<Settings>(defaults);
 const [saved,setSaved]=useState(false);
 useEffect(()=>{try{const raw=localStorage.getItem(STORAGE_KEY);if(raw)setSettings({...defaults,...JSON.parse(raw)})}catch{}},[]);
 const save=()=>{localStorage.setItem(STORAGE_KEY,JSON.stringify(settings));setSaved(true);setTimeout(()=>setSaved(false),1800)};
 return <main style={{minHeight:'100vh',background:'#0b1d2b',color:'#fff',padding:'40px 20px',fontFamily:'Poppins,Arial,sans-serif'}}>
  <div style={{maxWidth:820,margin:'0 auto'}}>
   <a href="/" style={{color:'#d9ad59',textDecoration:'none'}}>← Back to website</a>
   <h1 style={{fontFamily:'Cormorant Garamond,serif',fontSize:'48px',marginBottom:8}}>Mona Travel Admin</h1>
   <p style={{color:'#b9c5cf',marginBottom:28}}>Lightweight browser-based settings panel. Changes are stored locally on this device.</p>
   <div style={{background:'#102737',border:'1px solid rgba(255,255,255,.12)',borderRadius:20,padding:24,display:'grid',gap:18}}>
    {([['heroBadge','Hero Badge'],['heroTitle','Hero Title'],['phone','Phone'],['email','Email'],['whatsapp','WhatsApp']] as const).map(([key,label])=><label key={key} style={{display:'grid',gap:8,fontWeight:600}}>{label}<input value={settings[key]} onChange={e=>setSettings({...settings,[key]:e.target.value})} style={{padding:'13px 14px',borderRadius:10,border:'1px solid #cad1d6',font:'inherit'}}/></label>)}
    <button onClick={save} style={{border:0,borderRadius:999,padding:'14px 22px',background:'#d9ad59',fontWeight:800,fontSize:16,cursor:'pointer'}}>{saved?'Saved ✓':'Save Changes'}</button>
   </div>
  </div>
 </main>
}

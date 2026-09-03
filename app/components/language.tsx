'use client';

import {useEffect,useState} from 'react';

export type SiteLanguage='en'|'fr'|'ar';
const STORAGE_KEY='mona-travel-language';

export function useSiteLanguage(){
  const [language,setLanguage]=useState<SiteLanguage>('en');
  useEffect(()=>{
    const saved=window.localStorage.getItem(STORAGE_KEY) as SiteLanguage|null;
    if(saved==='en'||saved==='fr'||saved==='ar') setLanguage(saved);
  },[]);
  useEffect(()=>{
    window.localStorage.setItem(STORAGE_KEY,language);
    document.documentElement.lang=language;
    document.documentElement.dir=language==='ar'?'rtl':'ltr';
    window.dispatchEvent(new CustomEvent('mona-language-change',{detail:language}));
  },[language]);
  return {language,setLanguage};
}

export function LanguageSwitcher({language,onChange,className=''}:{language:SiteLanguage;onChange:(language:SiteLanguage)=>void;className?:string}){
  return <div className={`language-switcher ${className}`} aria-label="Language selector">
    {(['en','fr','ar'] as SiteLanguage[]).map(code=><button key={code} type="button" onClick={()=>onChange(code)} className={language===code?'active':''} aria-pressed={language===code}>{code.toUpperCase()}</button>)}
  </div>;
}

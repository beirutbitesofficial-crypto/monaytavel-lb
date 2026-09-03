'use client';
import Link from 'next/link';
import {FormEvent,useEffect,useState} from 'react';
import {LanguageSwitcher,useSiteLanguage} from './language';
import styles from './BranchSite.module.css';

type Mode='b2b'|'mice';
type Service={icon:string,title:string,text:string};
type Program={tag:string,title:string,text:string,items:string[]};

const data={
  b2b:{
    eyebrow:'B2B TRAVEL · DMC LEBANON',
    hero:'Your B2B Travel Partner in Lebanon',
    sub:'Reliable destination management, corporate travel and ground handling for international agencies, companies, delegations and professional travel buyers.',
    primary:'Request a B2B Proposal',
    about:'Mona Travel operates as a local destination partner for companies, travel agencies, tour operators and international organizations that need dependable execution on the ground in Lebanon. We combine local market knowledge, supplier relationships and responsive B2B coordination under one point of contact.',
    services:[
      {icon:'fa-hotel',title:'Hotel Sourcing & Group Rates',text:'Accommodation sourcing for executives, groups and delegations based on location, category, budget and operational requirements.'},
      {icon:'fa-plane-arrival',title:'Airport Meet & Assist',text:'Professional arrival and departure coordination for executives, delegations, speakers and groups.'},
      {icon:'fa-car-side',title:'Executive & Group Transport',text:'Private cars, executive vehicles, vans, minibuses and coaches with coordinated schedules.'},
      {icon:'fa-user-tie',title:'Business Delegation Logistics',text:'Hotels, meetings, transfers, dining, guides and local support managed as one integrated operation.'},
      {icon:'fa-route',title:'Inbound DMC Programs',text:'Tailor-made itineraries for agencies and corporate groups combining business requirements with destination experiences.'},
      {icon:'fa-file-invoice-dollar',title:'B2B Quotations & Invoicing',text:'Clear proposals, professional quotations and detailed corporate invoicing for approved partners.'}
    ] as Service[],
    programs:[
      {tag:'INBOUND CORPORATE',title:'Business Delegations',text:'Complete local handling for incoming business groups and professional delegations.',items:['Airport handling','Hotel coordination','Executive transport','Meeting logistics']},
      {tag:'AGENCY PARTNERSHIPS',title:'DMC & Ground Handling',text:'A local operating partner for overseas travel agencies, tour operators and corporate travel planners.',items:['B2B hotel sourcing','Guides & excursions','Restaurant bookings','On-ground support']},
      {tag:'BUSINESS + LEISURE',title:'Bleisure Lebanon',text:'Extend business travel with curated cultural, coastal, mountain or culinary experiences.',items:['1-day extensions','2-day extensions','Custom multi-day programs','Private experiences']}
    ] as Program[],
    why:[['fa-handshake','Direct Supplier Relationships','Local supplier and hotel relationships help us build competitive, practical solutions.'],['fa-location-dot','Local Operating Expertise','A team that understands Lebanon on the ground, not from a distance.'],['fa-clock','Responsive B2B Mindset','Fast handling of briefs, changes and operational requests.'],['fa-diagram-project','One Point of Contact','Centralized coordination across hotels, transport, guides, restaurants and activities.']],
    formTitle:'Request a B2B Proposal',
    requestOptions:['Business Travel','Business Delegation','Ground Handling','Group Accommodation','Transportation','Hotel Sourcing','DMC Program','Bleisure Program','Other']
  },
  mice:{
    eyebrow:'MEETINGS · INCENTIVES · CONFERENCES · EVENTS',
    hero:'Your Premier MICE Partner in Lebanon',
    sub:'Bespoke meetings, incentive travel, conferences, exhibitions and corporate events delivered through strong local partnerships and precise on-ground execution.',
    primary:'Submit a MICE RFP',
    about:'Mona Travel provides end-to-end MICE support for companies, agencies, associations, institutions and international organizers operating in Lebanon. From venue sourcing and hotel contracting to delegate movements, incentive experiences and event-day logistics, we manage the destination layer from planning through execution.',
    services:[
      {icon:'fa-people-roof',title:'Meetings & Corporate Events',text:'Executive meetings, board meetings, workshops, product launches, networking events and company functions.'},
      {icon:'fa-trophy',title:'Incentive Travel Programs',text:'Bespoke reward journeys combining Lebanese culture, gastronomy, nature, heritage and premium hospitality.'},
      {icon:'fa-users-rectangle',title:'Conferences & Congresses',text:'Venue sourcing, accommodation, delegate movements, speaker logistics, catering, AV and gala coordination.'},
      {icon:'fa-shop',title:'Exhibitions & Event Logistics',text:'Hospitality, transportation, group movements and complete local support for exhibitions and trade events.'},
      {icon:'fa-people-group',title:'Corporate Team Building',text:'Professionally organized group activities built around team objectives, season, budget and participant profile.'},
      {icon:'fa-champagne-glasses',title:'Corporate Dining & Experiences',text:'Private dinners, cultural experiences, winery visits and curated hospitality programs for groups.'}
    ] as Service[],
    programs:[
      {tag:'INCENTIVE TRAVEL',title:'Incentive Trips to Lebanon',text:'Reward top-performing teams with a tailor-made Lebanon program.',items:['Beirut & Byblos','Baalbek & heritage','Wine & gastronomy','Mountain & coastal experiences']},
      {tag:'TEAM BUILDING',title:'Team Experiences',text:'Structured group activities designed to create memorable shared experiences.',items:['Hiking & challenges','Paragliding','Culinary programs','Mountain retreats']},
      {tag:'CONFERENCES & EVENTS',title:'Delegate & Event Logistics',text:'A complete operating layer for local and international events.',items:['Venue & hotel sourcing','Airport assistance','Group transportation','On-site coordination']}
    ] as Program[],
    why:[['fa-hotel','Hotel & Venue Buying Power','Direct market relationships support stronger accommodation and meeting solutions.'],['fa-location-dot','Local Event Operations','Precise coordination of destination logistics from first arrival to final departure.'],['fa-briefcase','Professional RFP Handling','Clear briefs, proposals, revisions and operational planning for business buyers.'],['fa-user-check','Dedicated Coordination','One destination contact throughout planning and event execution.']],
    formTitle:'Submit a MICE RFP',
    requestOptions:['Meeting','Corporate Event','Incentive Travel','Conference / Congress','Exhibition','Team Building','Gala Dinner','Event Logistics','Other']
  }
};

export default function BranchSite({mode}:{mode:Mode}){
  const [menu,setMenu]=useState(false);
  const {language,setLanguage}=useSiteLanguage();
  const d=data[mode];
  const other=mode==='b2b'?'/mice':'/b2b';
  const otherLabel=mode==='b2b'?'MICE':'B2B';

  useEffect(()=>{
    document.body.style.overflow=menu?'hidden':'';
    const onKey=(event:KeyboardEvent)=>{if(event.key==='Escape')setMenu(false)};
    window.addEventListener('keydown',onKey);
    return()=>{document.body.style.overflow='';window.removeEventListener('keydown',onKey)};
  },[menu]);

  function submit(e:FormEvent<HTMLFormElement>){
    e.preventDefault();
    const fd=new FormData(e.currentTarget);
    const subject=`${mode==='b2b'?'B2B':'MICE'} Request — ${fd.get('company')||'New inquiry'}`;
    const body=[
      `${mode==='b2b'?'B2B':'MICE'} REQUEST`,
      `Name: ${fd.get('name')||''}`,
      `Company: ${fd.get('company')||''}`,
      `Email: ${fd.get('email')||''}`,
      `Phone / WhatsApp: ${fd.get('phone')||''}`,
      `Country: ${fd.get('country')||''}`,
      `Request Type: ${fd.get('type')||''}`,
      `Group Size: ${fd.get('size')||''}`,
      `Arrival: ${fd.get('arrival')||'TBD'}`,
      `Departure: ${fd.get('departure')||'TBD'}`,
      '',
      'Requirements:',String(fd.get('requirements')||'')
    ].join('\n');
    window.location.href=`mailto:contact@monatravel-lb.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return <main className={styles.site}>
    <div className={`${styles.backdrop} ${menu?styles.open:''}`} onClick={()=>setMenu(false)}/>
    <aside className={`${styles.drawer} ${menu?styles.open:''}`} aria-hidden={!menu}>
      <div className={styles.drawerHead}><Link href="/" className={styles.brand}><i className="fa-solid fa-plane-departure"/> Mona Travel</Link><button onClick={()=>setMenu(false)} aria-label="Close menu">×</button></div>
      <LanguageSwitcher language={language} onChange={setLanguage} className="drawer-language"/>
      <nav>{[['Home','home'],['About','about'],['Services','services'],['Programs','programs'],['Why Us','why'],['Contact','contact']].map(([label,id])=><a key={id} href={`#${id}`} onClick={()=>setMenu(false)}>{label}</a>)}</nav>
      <Link className={styles.switchMobile} href={other}>Switch to {otherLabel}</Link>
      <a className={styles.rfpMobile} href="#request" onClick={()=>setMenu(false)}>{d.primary}</a>
    </aside>

    <header className={`${styles.hero} ${mode==='mice'?styles.heroMice:styles.heroB2B}`} id="home">
      <nav className={styles.nav} aria-label="Main navigation">
        <Link href="/" className={styles.brand}><i className="fa-solid fa-plane-departure"/> Mona Travel</Link>
        <div className={styles.links}><a href="#home">Home</a><a href="#about">About</a><a href="#services">Services</a><a href="#programs">Programs</a><a href="#why">Why Us</a><a href="#contact">Contact</a></div>
        <div className={styles.actions}><LanguageSwitcher language={language} onChange={setLanguage} className="branch-language"/><Link href={other} className={styles.switch}>{otherLabel}</Link><a href="#request" className={styles.navRfp}>Request</a><button onClick={()=>setMenu(true)} aria-label="Open menu" aria-expanded={menu}>☰</button></div>
      </nav>
      <div className={styles.heroInner}>
        <div className={styles.badge}><i className={mode==='b2b'?'fa-regular fa-building':'fa-solid fa-people-group'}/> {d.eyebrow}</div>
        <h1>{d.hero}</h1>
        <p>{d.sub}</p>
        <div className={styles.heroButtons}><a href="#request" className={styles.primary}>{d.primary} <i className="fa-solid fa-arrow-right"/></a><a href="#services" className={styles.secondary}>Explore Services</a></div>
        <div className={styles.trustbar}><span><i className="fa-solid fa-location-dot"/> Lebanon Expertise</span><span><i className="fa-solid fa-hotel"/> Hotel Partnerships</span><span><i className="fa-solid fa-route"/> Ground Handling</span><span><i className="fa-solid fa-file-invoice"/> Corporate Invoicing</span></div>
      </div>
    </header>

    <section className={styles.section} id="about">
      <div className={styles.split}><div><div className={styles.eyebrow}>ABOUT MONA TRAVEL</div><h2>A specialist local partner inside one trusted travel brand.</h2></div><div><p>{d.about}</p><div className={styles.stats}><span><b>Local</b> Destination Expertise</span><span><b>360°</b> Ground Support</span><span><b>B2B</b> Professional Mindset</span></div></div></div>
    </section>

    <section className={`${styles.section} ${styles.soft}`} id="services">
      <div className={styles.centerHead}><div className={styles.eyebrow}>{mode==='b2b'?'B2B SERVICES':'MICE SERVICES'}</div><h2>{mode==='b2b'?'Corporate Travel & Destination Management':'Meetings, Incentives, Conferences & Events'}</h2><p>Built as a full-service division of Mona Travel, with the same brand standards and one local operating team.</p></div>
      <div className={styles.serviceGrid}>{d.services.map(s=><article key={s.title}><i className={`fa-solid ${s.icon}`}/><h3>{s.title}</h3><p>{s.text}</p></article>)}</div>
    </section>

    <section className={`${styles.section} ${styles.dark}`} id="programs">
      <div className={styles.centerHead}><div className={styles.eyebrow}>{mode==='b2b'?'BUSINESS PROGRAMS':'SIGNATURE MICE PROGRAMS'}</div><h2>{mode==='b2b'?'Business Travel, Managed Locally':'Corporate Events, Designed Around Your Brief'}</h2></div>
      <div className={styles.programGrid}>{d.programs.map(p=><article key={p.title}><small>{p.tag}</small><h3>{p.title}</h3><p>{p.text}</p><ul>{p.items.map(i=><li key={i}>{i}</li>)}</ul><a href="#request">Discuss this program <i className="fa-solid fa-arrow-right"/></a></article>)}</div>
    </section>

    <section className={styles.section} id="why">
      <div className={styles.centerHead}><div className={styles.eyebrow}>WHY CHOOSE MONA TRAVEL?</div><h2>Local expertise. Strong partnerships. Seamless execution.</h2></div>
      <div className={styles.whyGrid}>{d.why.map(([icon,title,text],i)=><article key={title}><span>0{i+1}</span><i className={`fa-solid ${icon}`}/><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <section className={`${styles.section} ${styles.partnerBand}`}>
      <div><div className={styles.eyebrow}>{mode==='b2b'?'YOUR LOCAL DMC PARTNER':'YOUR LOCAL MICE PARTNER'}</div><h2>{mode==='b2b'?'Need someone on the ground in Lebanon?':'Planning an event or incentive program in Lebanon?'}</h2><p>{mode==='b2b'?'Mona Travel can act as the local operating arm for international agencies, companies and professional travel buyers.':'Mona Travel coordinates the destination layer so organizers can focus on their delegates, content and event objectives.'}</p></div><a href="#request" className={styles.primary}>{d.primary}</a>
    </section>

    <section className={`${styles.section} ${styles.requestSection}`} id="request">
      <div className={styles.requestLayout}>
        <div className={styles.requestCopy}><div className={styles.eyebrow}>START A PROJECT</div><h2>{d.formTitle}</h2><p>Share the essentials of your brief. The request will open in your email application addressed to Mona Travel, ready to send.</p><div className={styles.contactMini}><span><i className="fa-solid fa-envelope"/> contact@monatravel-lb.com</span><span><i className="fa-solid fa-phone"/> +961 71 472 852</span><span><i className="fa-solid fa-location-dot"/> Lebanon</span></div></div>
        <form className={styles.form} onSubmit={submit}>
          <div className={styles.formGrid}><label>Full Name *<input name="name" required/></label><label>Company Name *<input name="company" required/></label><label>Business Email *<input type="email" name="email" required/></label><label>Phone / WhatsApp *<input name="phone" required/></label><label>Country *<input name="country" required/></label><label>Request Type *<select name="type" required defaultValue=""><option value="" disabled>Select request</option>{d.requestOptions.map(x=><option key={x}>{x}</option>)}</select></label><label>Group Size<select name="size" defaultValue=""><option value="">Not specified</option><option>1–10</option><option>11–20</option><option>21–50</option><option>51–100</option><option>101–250</option><option>250+</option></select></label><label>Arrival Date<input type="date" name="arrival"/></label><label>Departure Date<input type="date" name="departure"/></label><label className={styles.full}>Requirements<textarea name="requirements" rows={5} placeholder="Tell us about the group, event, hotels, transport, venues, activities or special requirements..."/></label><button className={`${styles.primary} ${styles.full}`} type="submit">Prepare Request <i className="fa-solid fa-paper-plane"/></button></div>
        </form>
      </div>
    </section>

    <section className={styles.section} id="contact"><div className={styles.contactHead}><div><div className={styles.eyebrow}>CONTACT</div><h2>Talk to Mona Travel</h2></div><p>For partnerships, quotations, group requests or destination planning in Lebanon, contact our team directly.</p></div><div className={styles.contactGrid}><a href="tel:+96171472852"><i className="fa-solid fa-phone"/><b>Call Us</b><span>+961 71 472 852</span></a><a href="mailto:contact@monatravel-lb.com"><i className="fa-solid fa-envelope"/><b>Email Us</b><span>contact@monatravel-lb.com</span></a><a href="https://wa.me/96171472852" target="_blank" rel="noopener"><i className="fa-brands fa-whatsapp"/><b>WhatsApp</b><span>Start a conversation</span></a></div></section>

    <footer className={styles.footer}><div className={styles.footerGrid}><div><Link href="/" className={styles.brand}><i className="fa-solid fa-plane-departure"/> Mona Travel</Link><p>Lebanon destination management, B2B travel and MICE solutions under one trusted local travel brand.</p></div><div><h4>{mode==='b2b'?'B2B Division':'MICE Division'}</h4><a href="#services">Services</a><a href="#programs">Programs</a><a href="#why">Why Us</a><a href="#request">Request</a></div><div><h4>Switch Division</h4><Link href={other}>{otherLabel} Website</Link><Link href="/">Division Selector</Link></div><div><h4>Contact</h4><span>+961 71 472 852</span><span>contact@monatravel-lb.com</span><span>Lebanon</span></div></div><div className={styles.copy}>© 2026 Mona Travel. All rights reserved.</div></footer>
    <a className={styles.wa} href="https://wa.me/96171472852" target="_blank" rel="noopener" aria-label="WhatsApp"><i className="fa-brands fa-whatsapp"/></a>
  </main>;
}
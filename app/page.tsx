'use client';

import Link from 'next/link';
import {FormEvent,useState} from 'react';

const destinations=[
  ['Beirut','The vibrant capital — where history, culture and modern energy meet.','https://monatravel-lb.com/images/beirut.png'],
  ['Harissa','Iconic hilltop sanctuary with panoramic views over Jounieh Bay.','https://monatravel-lb.com/images/harissa.png'],
  ['Jeita Grotto','One of Lebanon’s most spectacular natural wonders.','https://monatravel-lb.com/images/jeita-grotto.png'],
  ['Baalbek','Monumental Roman temples and one of Lebanon’s greatest heritage sites.','https://monatravel-lb.com/images/baalbek.png'],
  ['Byblos','Ancient history, Mediterranean charm and unforgettable coastal atmosphere.','https://monatravel-lb.com/images/byblos.png'],
  ['Sidon','A historic coastal city known for its old souks and sea castle.','https://monatravel-lb.com/images/sidon.png']
];

const services=[
  ['fa-hotel','Hotel Reservation','Handpicked accommodation across Lebanon, from Beirut business hotels to boutique and mountain stays.'],
  ['fa-car','Transportation','Airport transfers, private vehicles, luxury cars, vans and coaches for individuals and groups.'],
  ['fa-user-tie','Tour Guides','Professional multilingual guides for cultural, historical and tailor-made experiences.'],
  ['fa-route','Tailored Trips','Customized itineraries built around your interests, schedule, group profile and budget.']
];

export default function HomePage(){
  const [menu,setMenu]=useState(false);
  const close=()=>setMenu(false);

  function submitBooking(e:FormEvent<HTMLFormElement>){
    e.preventDefault();
    const fd=new FormData(e.currentTarget);
    const subject=`Leisure Reservation Request — ${fd.get('firstName')||''} ${fd.get('lastName')||''}`.trim();
    const body=[
      'MONA TRAVEL RESERVATION REQUEST','',
      `Name: ${fd.get('firstName')||''} ${fd.get('lastName')||''}`,
      `Email: ${fd.get('email')||''}`,
      `Phone: ${fd.get('phone')||''}`,
      `Nationality: ${fd.get('nationality')||'Not specified'}`,
      `Number of Travelers: ${fd.get('travelers')||''}`,
      `Arrival Date: ${fd.get('arrival')||''}`,
      `Departure Date: ${fd.get('departure')||''}`,
      `Trip Type: ${fd.get('tripType')||''}`,'',
      'Special Requests:',String(fd.get('requests')||'None')
    ].join('\n');
    window.location.href=`mailto:contact@monatravel-lb.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return <>
    <div className={'drawer-backdrop '+(menu?'open':'')} onClick={close}/>
    <aside className={'drawer '+(menu?'open':'')}>
      <div className="drawer-head">
        <div className="brand"><i className="fa-solid fa-plane-departure"/>Mona Travel</div>
        <button className="drawer-close" onClick={close} aria-label="Close menu">×</button>
      </div>
      <div className="drawer-lang"><i className="fa-solid fa-globe"/> &nbsp; EN⌄</div>
      <nav className="drawer-links">
        <a href="#home" onClick={close}>Home</a>
        <a href="#about" onClick={close}>About</a>
        <a href="#services" onClick={close}>Services</a>
        <a href="#destinations" onClick={close}>Destinations</a>
        <a href="#programs" onClick={close}>Programs</a>
        <a href="#book" onClick={close}>Book Now</a>
        <a href="#contact" onClick={close}>Contact</a>
      </nav>
      <div className="corp-menu">
        <small>CORPORATE DIVISIONS</small>
        <Link className="corp-item" href="/b2b" onClick={close}>
          <i className="fa-regular fa-building"/><div><b>B2B Travel</b><span>Business Travel & DMC</span></div>
        </Link>
        <Link className="corp-item" href="/mice" onClick={close}>
          <i className="fa-solid fa-people-group"/><div><b>MICE</b><span>Meetings, Incentives, Conferences & Events</span></div>
        </Link>
      </div>
    </aside>

    <header className="hero" id="home" style={{backgroundImage:"linear-gradient(90deg,rgba(4,24,39,.88),rgba(4,24,39,.40)),url('https://monatravel-lb.com/images/background.png')"}}>
      <nav className="nav">
        <a href="#home" className="brand"><i className="fa-solid fa-plane-departure"/>Mona Travel</a>
        <div className="desktop-links">
          <a href="#home">Home</a><a href="#about">About</a><a href="#services">Services</a><a href="#destinations">Destinations</a><a href="#programs">Programs</a>
          <Link className="corp" href="/b2b">B2B</Link><Link className="corp" href="/mice">MICE</Link>
          <a href="#book">Book Now</a><a href="#contact">Contact</a><span className="lang">◎ EN⌄</span>
        </div>
        <button className="hamb" onClick={()=>setMenu(true)} aria-label="Open menu">☰</button>
      </nav>

      <div className="hero-content">
        <div className="badge"><i className="fa-solid fa-location-dot"/> YOUR TRUSTED LOCAL PARTNER IN LEBANON</div>
        <h1>Discover <em>Lebanon</em> with Mona Travel</h1>
        <p className="hero-copy">Tailor-made leisure travel, local experiences and complete destination support — now strengthened by dedicated B2B Travel and MICE divisions for professional partners.</p>
        <div className="heroButtons" style={{display:'flex',gap:12,flexWrap:'wrap',marginTop:26}}>
          <a href="#destinations" className="primary">Explore Lebanon <i className="fa-solid fa-arrow-down"/></a>
          <a href="#book" style={{display:'inline-flex',alignItems:'center',border:'1px solid rgba(255,255,255,.55)',borderRadius:30,padding:'14px 22px',fontWeight:700}}>Plan Your Trip</a>
        </div>

        <div className="choice-grid">
          <article className="choice">
            <i className="fa-regular fa-building"/><small>BUSINESS TRAVEL & DESTINATION MANAGEMENT</small>
            <h3>B2B Travel</h3>
            <p>Corporate travel, delegations, hotel sourcing, executive transport and complete ground handling.</p>
            <Link href="/b2b">Enter B2B Website &nbsp;→</Link>
          </article>
          <article className="choice">
            <i className="fa-solid fa-people-group"/><small>MEETINGS · INCENTIVES · CONFERENCES · EVENTS</small>
            <h3>MICE</h3>
            <p>Meetings, incentive programs, conferences, exhibitions and end-to-end event management.</p>
            <Link href="/mice">Enter MICE Website &nbsp;→</Link>
          </article>
        </div>
      </div>
    </header>

    <section className="section" id="about">
      <div className="eyebrow">Who We Are</div>
      <h2 className="section-title">About Mona Travel</h2>
      <p className="lead">Mona Travel is a Lebanon-based travel agency officially registered with the Lebanese Ministry of Tourism. We provide high-quality travel and destination services for individual travelers, groups, international travel agencies and professional partners.</p>
      <p className="lead">Our role is simple: make Lebanon easier to experience. From accommodation and transportation to private tours, tailored programs and on-ground coordination, we bring local knowledge and dependable execution together under one brand.</p>
      <div className="stats">
        <div className="stat"><b>Local</b><div>Destination Expertise</div></div>
        <div className="stat"><b>360°</b><div>Travel Support</div></div>
        <div className="stat"><b>B2B + MICE</b><div>Specialist Divisions</div></div>
      </div>
    </section>

    <section className="section" id="services" style={{background:'#f0eee8'}}>
      <div className="eyebrow">What We Offer</div>
      <h2 className="section-title">Our Best Services</h2>
      <p className="lead">Everything you need for a smooth, personalized trip across Lebanon.</p>
      <div className="services">
        {services.map(([icon,title,text])=><article className="card" key={title}><i className={'fa-solid '+icon}/><h3>{title}</h3><p>{text}</p></article>)}
      </div>
    </section>

    <section className="section" id="destinations">
      <div className="eyebrow">Where To Go</div>
      <h2 className="section-title">Tourist Destinations</h2>
      <p className="lead">From ancient cities and archaeological landmarks to mountains, caves and Mediterranean coastlines.</p>
      <div className="destinations">
        {destinations.map(([name,text,img])=><article className="destination" key={name}><img src={img} alt={name}/><h3>{name}</h3><p>{text}</p></article>)}
      </div>
    </section>

    <section className="section" id="programs" style={{background:'#f0eee8'}}>
      <div className="eyebrow">Experiences</div>
      <h2 className="section-title">Our Programs</h2>
      <p className="lead">Choose a travel style or let Mona Travel combine several experiences into one tailor-made itinerary.</p>
      <div className="program-grid">
        <article className="program"><h3 className="serif" style={{fontSize:30}}>Cultural & Historical</h3><ul><li>UNESCO heritage sites</li><li>Archaeological tours</li><li>Museums & old cities</li><li>Private guided experiences</li></ul></article>
        <article className="program"><h3 className="serif" style={{fontSize:30}}>Adventure & Nature</h3><ul><li>Cedars forests</li><li>Hiking & mountain experiences</li><li>Paragliding</li><li>Skiing & eco-tourism villages</li></ul></article>
      </div>
    </section>

    <section className="section dark" id="corporate">
      <div className="eyebrow">For Companies & Professional Partners</div>
      <h2 className="section-title">Two Specialist Divisions. One Mona Travel.</h2>
      <p className="lead">Corporate buyers, agencies and event planners can enter the dedicated business division that matches their requirements. Both remain part of the same Mona Travel brand and operate under the same local expertise.</p>
      <div className="choice-grid" style={{maxWidth:'none'}}>
        <article className="choice"><i className="fa-regular fa-building"/><small>B2B TRAVEL & DMC</small><h3>B2B Travel Website</h3><p>Inbound corporate travel, delegations, hotel sourcing, business transport, partner rates and destination management.</p><Link href="/b2b">Explore Full B2B Website →</Link></article>
        <article className="choice"><i className="fa-solid fa-people-group"/><small>MICE SPECIALISTS</small><h3>MICE Website</h3><p>Meetings, incentives, conferences, congresses, exhibitions, corporate events and professional event logistics.</p><Link href="/mice">Explore Full MICE Website →</Link></article>
      </div>
    </section>

    <section className="section" id="book">
      <div className="booking">
        <div>
          <div className="eyebrow">Plan Your Trip</div><h2 className="section-title">Book Your Adventure</h2>
          <p className="lead">Tell us when you are coming and what you would like to experience. Our team will prepare a personalized travel proposal.</p>
          <div style={{marginTop:25}}><b>✓ Tailor-Made Planning</b><p className="lead">Programs built around your travel style.</p><b>✓ Local Support</b><p className="lead">One team supporting your trip in Lebanon.</p><b>✓ Flexible Options</b><p className="lead">Accommodation, transport, tours and activities combined as needed.</p></div>
        </div>
        <form className="form" onSubmit={submitBooking}>
          <h3 className="serif" style={{fontSize:30,marginTop:0}}>Reservation Request</h3>
          <div className="form-grid">
            <label className="field">First Name *<input name="firstName" required/></label><label className="field">Last Name *<input name="lastName" required/></label>
            <label className="field">Email *<input name="email" type="email" required/></label><label className="field">Phone *<input name="phone" required/></label>
            <label className="field">Nationality<input name="nationality"/></label><label className="field">Number of Travelers *<input name="travelers" type="number" min="1" required/></label>
            <label className="field">Arrival Date *<input name="arrival" type="date" required/></label><label className="field">Departure Date *<input name="departure" type="date" required/></label>
            <label className="field full">Trip Type *<select name="tripType" required defaultValue=""><option value="" disabled>Select trip type</option><option>Leisure</option><option>Adventure</option><option>Family</option><option>Honeymoon</option><option>Group Travel</option></select></label>
            <label className="field full">Special Requests<textarea name="requests" rows={4}/></label>
            <button className="primary field full" type="submit">Prepare Reservation Request</button>
          </div>
        </form>
      </div>
    </section>

    <section className="section" id="contact" style={{background:'#f0eee8'}}>
      <div className="eyebrow">Reach Out</div><h2 className="section-title">Get in Touch</h2>
      <div className="contact-grid">
        <div className="contact-card"><b>Phone</b><p>+961 71 472 852</p></div>
        <div className="contact-card"><b>Email</b><p>contact@monatravel-lb.com</p></div>
        <div className="contact-card"><b>Location</b><p>Lebanon</p></div>
      </div>
    </section>

    <footer className="footer">
      <div className="footer-grid">
        <div><div className="brand"><i className="fa-solid fa-plane-departure"/>Mona Travel</div><p>Lebanon travel, destination management, B2B travel and MICE — all under one trusted local brand.</p></div>
        <div><h4>Travel</h4><a href="#about">About</a><a href="#services">Services</a><a href="#destinations">Destinations</a><a href="#programs">Programs</a></div>
        <div><h4>Corporate</h4><Link href="/b2b">B2B Travel</Link><Link href="/mice">MICE</Link></div>
        <div><h4>Contact</h4><span>+961 71 472 852</span><span>contact@monatravel-lb.com</span><span>Lebanon</span></div>
      </div>
      <div className="copyright">© 2026 Mona Travel. All rights reserved.</div>
    </footer>
    <a className="wa" href="https://wa.me/96171472852" target="_blank" rel="noreferrer"><i className="fa-brands fa-whatsapp"/></a>
  </>;
}

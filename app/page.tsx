'use client';

import { FormEvent, useState } from 'react';
import {
  ArrowRight,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Globe2,
  Handshake,
  Hotel,
  Landmark,
  Mail,
  MapPin,
  Menu,
  Mountain,
  Plane,
  Route,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from 'lucide-react';

const micePillars = [
  {
    letter: 'M',
    title: 'Meetings & Corporate Events',
    text: 'Executive meetings, board meetings, launches, workshops, networking events and company functions.',
    items: ['Hotel & venue sourcing', 'DDR / delegate packages', 'AV, catering & coordination', 'Corporate dinners & on-site support'],
  },
  {
    letter: 'I',
    title: 'Incentive Travel Programs',
    text: 'Premium reward programs combining Lebanon’s culture, gastronomy, heritage, nature and hospitality.',
    items: ['Customized itineraries', 'Wine & culinary experiences', 'Byblos, Baalbek, Jeita & Beirut', 'Adventure and mountain activities'],
  },
  {
    letter: 'C',
    title: 'Conferences & Congresses',
    text: 'Destination and logistics management for medical, scientific, association, NGO and institutional events.',
    items: ['Venue and hotel contracting', 'Delegate accommodation', 'Speaker & VIP transport', 'Registration and transfer logistics'],
  },
  {
    letter: 'E',
    title: 'Exhibitions & Event Logistics',
    text: 'Complete ground handling and hospitality support for trade events, delegations and international participants.',
    items: ['Airport meet & assist', 'Group movements', 'VIP vehicles', 'Hospitality desks & local excursions'],
  },
];

const b2bServices = [
  ['Executive Travel', 'Premium accommodation, transportation and travel coordination for executives and VIP guests.'],
  ['Business Delegation Logistics', 'Airport assistance, hotels, meeting transfers, dining and on-ground coordination for incoming delegations.'],
  ['Ground Handling', 'One local partner for accommodation, transfers, guides, restaurants, activities and group movements.'],
  ['Meeting & Venue Sourcing', 'Hotels, conference venues, boardrooms and event spaces matched to the requirements of each brief.'],
];

const destinations = [
  ['Beirut', 'Urban culture, gastronomy, entertainment and business hospitality.', 'https://monatravel-lb.com/images/beirut.png'],
  ['Byblos', 'Historic Mediterranean experiences, coastal dining and group activities.', 'https://monatravel-lb.com/images/byblos.png'],
  ['Baalbek', 'Heritage experiences and cultural excursions for premium groups.', 'https://monatravel-lb.com/images/baalbek.png'],
  ['Jeita & Harissa', 'Iconic sightseeing, mountain views and flexible pre/post-event programs.', 'https://monatravel-lb.com/images/harissa.png'],
];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  }

  function submitRfp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const company = String(data.get('company') || 'Corporate Client');
    const requestType = String(data.get('requestType') || 'B2B / MICE Request');
    const lines = [
      'MONA TRAVEL — B2B & MICE RFP',
      '',
      ...Array.from(data.entries()).map(([key, value]) => `${key}: ${String(value)}`),
    ];
    window.location.href = `mailto:contact@monatravel-lb.com?subject=${encodeURIComponent(`RFP - ${company} - ${requestType}`)}&body=${encodeURIComponent(lines.join('\n'))}`;
  }

  return (
    <main>
      <nav className="navbar">
        <button className="brand" onClick={() => scrollTo('top')} aria-label="Mona Travel home">
          <Plane size={20} />
          <span>Mona Travel</span>
        </button>
        <button className="mobileMenuButton" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle navigation">
          {menuOpen ? <X /> : <Menu />}
        </button>
        <div className={`navLinks ${menuOpen ? 'open' : ''}`}>
          <button onClick={() => scrollTo('b2b')}>B2B</button>
          <button onClick={() => scrollTo('mice')}>MICE</button>
          <button onClick={() => scrollTo('incentives')}>Incentives</button>
          <button onClick={() => scrollTo('why')}>Why Us</button>
          <button onClick={() => scrollTo('rfp')} className="navCta">Submit RFP</button>
        </div>
      </nav>

      <section id="top" className="entryHero">
        <div className="overlay" />
        <div className="entryContent">
          <span className="kicker"><Handshake size={16} /> B2B & MICE Specialists in Lebanon</span>
          <h1>Your Premier B2B & MICE Partner in Lebanon</h1>
          <p>Delivering bespoke corporate events, incentive travel and seamless ground handling through trusted local expertise and strong hospitality partnerships.</p>
          <div className="choiceGrid">
            <button className="choiceCard" onClick={() => scrollTo('b2b')}>
              <Building2 />
              <small>BUSINESS TRAVEL & DMC</small>
              <strong>B2B Solutions</strong>
              <span>Corporate travel, delegations, hotel sourcing, executive transport and complete ground handling.</span>
              <em>Explore B2B <ArrowRight size={17} /></em>
            </button>
            <button className="choiceCard accent" onClick={() => scrollTo('mice')}>
              <CalendarDays />
              <small>MEETINGS • INCENTIVES • CONFERENCES • EXHIBITIONS</small>
              <strong>MICE Solutions</strong>
              <span>End-to-end planning and logistics for meetings, incentives, conferences and exhibitions in Lebanon.</span>
              <em>Explore MICE <ArrowRight size={17} /></em>
            </button>
          </div>
          <button className="scrollCue" onClick={() => scrollTo('b2b')}>Discover Mona Travel <ChevronDown /></button>
        </div>
      </section>

      <section className="trustBar">
        <div className="trustInner">
          <span><Hotel size={18} /> Direct Hotel Partnerships</span>
          <span><Route size={18} /> Professional Ground Handling</span>
          <span><ShieldCheck size={18} /> Licensed Travel Agency</span>
          <span><Globe2 size={18} /> International B2B Mindset</span>
        </div>
      </section>

      <section id="b2b" className="section sectionLight">
        <div className="container">
          <div className="sectionHead splitHead">
            <div>
              <span className="eyebrow">B2B TRAVEL & DMC</span>
              <h2>Your Local Business Travel Partner in Lebanon</h2>
            </div>
            <p>Mona Travel supports international travel agencies, tour operators, companies, institutions and business delegations with complete local destination management from arrival to departure.</p>
          </div>
          <div className="serviceGrid">
            {b2bServices.map(([title, text], index) => (
              <article className="serviceCard" key={title}>
                <span className="serviceNumber">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="featureBand">
            <div>
              <span className="eyebrow light">INBOUND CORPORATE TRAVEL</span>
              <h3>One destination. One trusted local partner.</h3>
              <p>Accommodation, airport handling, transportation, venues, guides, restaurants, activities, VIP services and group coordination — managed through one local team.</p>
            </div>
            <button className="primaryButton" onClick={() => scrollTo('rfp')}>Send Us an RFP <ArrowRight size={18} /></button>
          </div>
        </div>
      </section>

      <section id="mice" className="section sectionSoft">
        <div className="container">
          <div className="sectionHead centered">
            <span className="eyebrow">OUR MICE EXPERTISE</span>
            <h2>Four Core Pillars. One Seamless Operation.</h2>
            <p>From a private board meeting to a major congress, Mona Travel coordinates the destination, hospitality and logistics behind the event.</p>
          </div>
          <div className="miceGrid">
            {micePillars.map((pillar) => (
              <article className="miceCard" key={pillar.letter}>
                <span className="miceLetter">{pillar.letter}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
                <ul>
                  {pillar.items.map((item) => <li key={item}><CheckCircle2 size={16} /> {item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="section whySection">
        <div className="container whyGrid">
          <div>
            <span className="eyebrow light">WHY CHOOSE MONA TRAVEL?</span>
            <h2>Local expertise. Strong partnerships. Seamless execution.</h2>
            <p>Corporate buyers need a partner that understands both Lebanon and the operational expectations of international business.</p>
          </div>
          <div className="whyCards">
            <article><Hotel /><div><h3>Direct Hotel Buying Power</h3><p>Established hotel relationships help us source competitive accommodation, meetings and group solutions while keeping commercial terms confidential.</p></div></article>
            <article><MapPin /><div><h3>Local Expertise & Logistics</h3><p>On-ground coordination from airport arrival through venues, transport, dining, activities and final departure.</p></div></article>
            <article><Handshake /><div><h3>B2B Mindset</h3><p>Clear quotations, responsive RFP handling, flexible planning and professional corporate invoicing.</p></div></article>
            <article><Route /><div><h3>End-to-End DMC Support</h3><p>One point of contact replacing multiple disconnected local suppliers.</p></div></article>
          </div>
        </div>
      </section>

      <section id="incentives" className="section sectionLight">
        <div className="container">
          <div className="sectionHead centered">
            <span className="eyebrow">INCENTIVE TRAVEL</span>
            <h2>Reward Your Team With Lebanon</h2>
            <p>Tailor-made incentive programs combining culture, gastronomy, history, premium hospitality, coast and mountains.</p>
          </div>
          <div className="destinationGrid">
            {destinations.map(([title, text, image]) => (
              <article className="destinationCard" key={title} style={{ backgroundImage: `linear-gradient(180deg, transparent 25%, rgba(5,14,22,.88) 100%), url('${image}')` }}>
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
          <div className="programGrid">
            <article>
              <Mountain />
              <span>TEAM BUILDING</span>
              <h3>Stronger Teams. Unforgettable Experiences.</h3>
              <p>Hiking, adventure, culinary experiences, cultural challenges, winery experiences, beach activities and mountain retreats for groups from 10 to 100+ participants.</p>
            </article>
            <article>
              <Sparkles />
              <span>BLEISURE LEBANON</span>
              <h3>Extend the Business Trip. Experience Lebanon.</h3>
              <p>Flexible one-, two- or multi-day leisure extensions for executives, speakers and conference delegates visiting Beirut.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section hotelSection">
        <div className="container hotelGrid">
          <div>
            <span className="eyebrow">HOTEL PARTNERSHIPS</span>
            <h2>Strong Hospitality Relationships Across Lebanon</h2>
          </div>
          <p>Our direct relationships with hospitality partners help us build accommodation, meeting, conference and group solutions around location, group size, event requirements and budget — without exposing confidential commercial terms.</p>
        </div>
      </section>

      <section id="rfp" className="section rfpSection">
        <div className="container rfpGrid">
          <div className="rfpIntro">
            <span className="eyebrow light">CORPORATE & MICE REQUEST</span>
            <h2>Planning Business in Lebanon?</h2>
            <p>Tell us what you are planning and our team can prepare a tailored proposal for your event, delegation, incentive program or corporate travel requirement.</p>
            <div className="contactMini">
              <span><Mail size={17} /> contact@monatravel-lb.com</span>
              <span><Plane size={17} /> Lebanon DMC • B2B • MICE</span>
            </div>
          </div>
          <form className="rfpForm" onSubmit={submitRfp}>
            <div className="formGrid">
              <label>Full Name*<input name="name" required /></label>
              <label>Business Email*<input type="email" name="email" required /></label>
              <label>Phone / WhatsApp*<input name="phone" required /></label>
              <label>Country*<input name="country" required /></label>
              <label>Company Name*<input name="company" required /></label>
              <label>Company Type<select name="companyType" defaultValue="Company / Corporate"><option>Company / Corporate</option><option>Travel Agency</option><option>Tour Operator</option><option>Event Agency</option><option>MICE Agency</option><option>Association</option><option>NGO</option><option>Government / Institution</option><option>Other</option></select></label>
              <label>Request Type*<select name="requestType" required defaultValue="Corporate Event"><option>Corporate Event</option><option>Meeting</option><option>Incentive Travel</option><option>Conference / Congress</option><option>Exhibition</option><option>Team Building</option><option>Business Travel</option><option>Business Delegation</option><option>Ground Handling</option><option>Group Accommodation</option><option>Transportation</option><option>Bleisure Program</option><option>Other</option></select></label>
              <label>Group Size*<select name="groupSize" required defaultValue="21–50"><option>1–10</option><option>11–20</option><option>21–50</option><option>51–100</option><option>101–250</option><option>250+</option></select></label>
              <label>Arrival Date<input type="date" name="arrival" /></label>
              <label>Departure Date<input type="date" name="departure" /></label>
            </div>
            <label className="fullLabel">Additional Requirements<textarea name="requirements" rows={5} placeholder="Hotel, venue, transportation, AV, dining, activities, VIP handling, special requirements..." /></label>
            <button className="submitButton" type="submit">Prepare & Submit RFP <ArrowRight size={18} /></button>
            <small>Submitting opens your email app with all request details prepared for Mona Travel.</small>
          </form>
        </div>
      </section>

      <footer>
        <div className="container footerInner">
          <div><strong>Mona Travel</strong><p>Your B2B & MICE partner in Lebanon.</p></div>
          <div><span>Lebanon DMC</span><span>Corporate Travel</span><span>MICE</span><span>Ground Handling</span></div>
          <p>© 2026 Mona Travel. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

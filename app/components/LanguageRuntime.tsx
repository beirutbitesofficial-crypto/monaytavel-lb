'use client';

import {useEffect} from 'react';
import type {SiteLanguage} from './language';

const originalText=new WeakMap<Text,string>();
const originalAttr=new WeakMap<Element,Map<string,string>>();

const fr:Record<string,string>={
  'Home':'Accueil','About':'À propos','Services':'Services','Destinations':'Destinations','Programs':'Programmes','Book Now':'Réserver','Contact':'Contact','Why Us':'Pourquoi nous','Request':'Demande',
  'YOUR TRUSTED LOCAL PARTNER IN LEBANON':'VOTRE PARTENAIRE LOCAL DE CONFIANCE AU LIBAN',
  'Discover Lebanon with Mona Travel':'Découvrez le Liban avec Mona Travel',
  'Tailor-made leisure travel, local experiences and complete destination support — now strengthened by dedicated B2B Travel and MICE divisions for professional partners.':'Voyages de loisirs sur mesure, expériences locales et accompagnement complet à destination — renforcés par nos divisions B2B Travel et MICE dédiées aux partenaires professionnels.',
  'Explore Lebanon':'Découvrir le Liban','Plan Your Trip':'Planifier votre voyage',
  'BUSINESS TRAVEL & DESTINATION MANAGEMENT':'VOYAGES D’AFFAIRES & GESTION DE DESTINATION','B2B Travel':'Voyages B2B','Corporate travel, delegations, hotel sourcing, executive transport and complete ground handling.':'Voyages d’affaires, délégations, recherche hôtelière, transport exécutif et assistance locale complète.','Enter B2B Website →':'Accéder au site B2B →',
  'MEETINGS · INCENTIVES · CONFERENCES · EVENTS':'RÉUNIONS · INCENTIVES · CONFÉRENCES · ÉVÉNEMENTS','MICE':'MICE','Meetings, incentive programs, conferences, exhibitions and end-to-end event management.':'Réunions, programmes incentive, conférences, expositions et gestion événementielle de bout en bout.','Enter MICE Website →':'Accéder au site MICE →',
  'Who We Are':'Qui sommes-nous','About Mona Travel':'À propos de Mona Travel','What We Offer':'Ce que nous proposons','Our Best Services':'Nos meilleurs services','Where To Go':'Où aller','Tourist Destinations':'Destinations touristiques','Experiences':'Expériences','Our Programs':'Nos programmes',
  'Hotel Reservation':'Réservation d’hôtel','Transportation':'Transport','Tour Guides':'Guides touristiques','Tailored Trips':'Voyages sur mesure',
  'Cultural & Historical':'Culture & Histoire','Adventure & Nature':'Aventure & Nature',
  'For Companies & Professional Partners':'Pour les entreprises et partenaires professionnels','Two Specialist Divisions. One Mona Travel.':'Deux divisions spécialisées. Une seule Mona Travel.','B2B Travel Website':'Site B2B Travel','MICE Website':'Site MICE','Explore Full B2B Website →':'Découvrir le site B2B →','Explore Full MICE Website →':'Découvrir le site MICE →',
  'Plan Your Trip':'Planifier votre voyage','Book Your Adventure':'Réservez votre aventure','Reservation Request':'Demande de réservation','First Name *':'Prénom *','Last Name *':'Nom *','Email *':'E-mail *','Phone *':'Téléphone *','Nationality':'Nationalité','Number of Travelers *':'Nombre de voyageurs *','Arrival Date *':'Date d’arrivée *','Departure Date *':'Date de départ *','Trip Type *':'Type de voyage *','Special Requests':'Demandes spéciales','Prepare Reservation Request':'Préparer la demande de réservation','Select trip type':'Choisir le type de voyage','Leisure':'Loisirs','Adventure':'Aventure','Family':'Famille','Honeymoon':'Lune de miel','Group Travel':'Voyage en groupe',
  'Reach Out':'Contactez-nous','Get in Touch':'Nous contacter','Phone':'Téléphone','Email':'E-mail','Location':'Localisation','Travel':'Voyage','Corporate':'Corporate',
  'CORPORATE DIVISIONS':'DIVISIONS CORPORATE','Business Travel & DMC':'Voyages d’affaires & DMC','Meetings, Incentives, Conferences & Events':'Réunions, Incentives, Conférences & Événements',
  'B2B TRAVEL · DMC LEBANON':'VOYAGES B2B · DMC LIBAN','Your B2B Travel Partner in Lebanon':'Votre partenaire B2B Travel au Liban','Reliable destination management, corporate travel and ground handling for international agencies, companies, delegations and professional travel buyers.':'Gestion de destination fiable, voyages d’affaires et assistance au sol pour agences internationales, entreprises, délégations et acheteurs professionnels.','Request a B2B Proposal':'Demander une proposition B2B','Submit a MICE RFP':'Soumettre un appel d’offres MICE','Your Premier MICE Partner in Lebanon':'Votre partenaire MICE de premier plan au Liban','Bespoke meetings, incentive travel, conferences, exhibitions and corporate events delivered through strong local partnerships and precise on-ground execution.':'Réunions sur mesure, voyages incentive, conférences, expositions et événements corporate réalisés grâce à de solides partenariats locaux et une exécution précise sur le terrain.',
  'Explore Services':'Découvrir les services','Lebanon Expertise':'Expertise Liban','Hotel Partnerships':'Partenariats hôteliers','Ground Handling':'Assistance au sol','Corporate Invoicing':'Facturation corporate','ABOUT MONA TRAVEL':'À PROPOS DE MONA TRAVEL','A specialist local partner inside one trusted travel brand.':'Un partenaire local spécialisé au sein d’une marque de voyage de confiance.','Destination Expertise':'Expertise destination','Ground Support':'Assistance terrain','Professional Mindset':'Approche professionnelle',
  'B2B SERVICES':'SERVICES B2B','MICE SERVICES':'SERVICES MICE','Corporate Travel & Destination Management':'Voyages d’affaires & gestion de destination','Built as a full-service division of Mona Travel, with the same brand standards and one local operating team.':'Une division complète de Mona Travel, avec les mêmes standards de marque et une seule équipe opérationnelle locale.',
  'BUSINESS PROGRAMS':'PROGRAMMES BUSINESS','SIGNATURE MICE PROGRAMS':'PROGRAMMES MICE SIGNATURE','Business Travel, Managed Locally':'Voyages d’affaires, gérés localement','Corporate Events, Designed Around Your Brief':'Événements corporate conçus autour de votre brief','Discuss this program':'Discuter de ce programme',
  'WHY CHOOSE MONA TRAVEL?':'POURQUOI CHOISIR MONA TRAVEL ?','Local expertise. Strong partnerships. Seamless execution.':'Expertise locale. Partenariats solides. Exécution fluide.','YOUR LOCAL DMC PARTNER':'VOTRE PARTENAIRE DMC LOCAL','YOUR LOCAL MICE PARTNER':'VOTRE PARTENAIRE MICE LOCAL','Need someone on the ground in Lebanon?':'Besoin d’un partenaire sur le terrain au Liban ?','Planning an event or incentive program in Lebanon?':'Vous planifiez un événement ou un programme incentive au Liban ?',
  'START A PROJECT':'DÉMARRER UN PROJET','Share the essentials of your brief. The request will open in your email application addressed to Mona Travel, ready to send.':'Partagez les éléments essentiels de votre brief. La demande s’ouvrira dans votre application e-mail, adressée à Mona Travel et prête à être envoyée.','Full Name *':'Nom complet *','Company Name *':'Nom de l’entreprise *','Business Email *':'E-mail professionnel *','Phone / WhatsApp *':'Téléphone / WhatsApp *','Country *':'Pays *','Request Type *':'Type de demande *','Select request':'Sélectionner une demande','Group Size':'Taille du groupe','Not specified':'Non précisé','Requirements':'Besoins','Prepare Request':'Préparer la demande',
  'Talk to Mona Travel':'Parler à Mona Travel','For partnerships, quotations, group requests or destination planning in Lebanon, contact our team directly.':'Pour les partenariats, devis, demandes de groupes ou la planification de destination au Liban, contactez directement notre équipe.','Call Us':'Appelez-nous','Email Us':'Écrivez-nous','Start a conversation':'Démarrer une conversation','Switch Division':'Changer de division','Division Selector':'Sélecteur de division','All rights reserved.':'Tous droits réservés.'
};

const ar:Record<string,string>={
  'Home':'الرئيسية','About':'من نحن','Services':'الخدمات','Destinations':'الوجهات','Programs':'البرامج','Book Now':'احجز الآن','Contact':'تواصل معنا','Why Us':'لماذا نحن','Request':'طلب',
  'YOUR TRUSTED LOCAL PARTNER IN LEBANON':'شريككم المحلي الموثوق في لبنان','Discover Lebanon with Mona Travel':'اكتشف لبنان مع Mona Travel','Tailor-made leisure travel, local experiences and complete destination support — now strengthened by dedicated B2B Travel and MICE divisions for professional partners.':'رحلات سياحية مصممة حسب الطلب، تجارب محلية ودعم متكامل داخل لبنان، مع قسمين متخصصين للسفر B2B وخدمات MICE للشركاء المهنيين.','Explore Lebanon':'اكتشف لبنان','Plan Your Trip':'خطّط لرحلتك',
  'BUSINESS TRAVEL & DESTINATION MANAGEMENT':'سفر الأعمال وإدارة الوجهات','B2B Travel':'سفر B2B','Corporate travel, delegations, hotel sourcing, executive transport and complete ground handling.':'سفر الشركات والوفود، حجز الفنادق، النقل التنفيذي وخدمات أرضية متكاملة.','Enter B2B Website →':'الدخول إلى قسم B2B ←',
  'MEETINGS · INCENTIVES · CONFERENCES · EVENTS':'اجتماعات · حوافز · مؤتمرات · فعاليات','MICE':'MICE','Meetings, incentive programs, conferences, exhibitions and end-to-end event management.':'اجتماعات وبرامج حوافز ومؤتمرات ومعارض وإدارة متكاملة للفعاليات.','Enter MICE Website →':'الدخول إلى قسم MICE ←',
  'Who We Are':'من نحن','About Mona Travel':'عن Mona Travel','What We Offer':'ما نقدّمه','Our Best Services':'أفضل خدماتنا','Where To Go':'إلى أين تذهب','Tourist Destinations':'الوجهات السياحية','Experiences':'التجارب','Our Programs':'برامجنا','Hotel Reservation':'حجز الفنادق','Transportation':'النقل','Tour Guides':'المرشدون السياحيون','Tailored Trips':'رحلات مصممة حسب الطلب','Cultural & Historical':'ثقافي وتاريخي','Adventure & Nature':'مغامرة وطبيعة',
  'For Companies & Professional Partners':'للشركات والشركاء المهنيين','Two Specialist Divisions. One Mona Travel.':'قسمان متخصصان. علامة Mona Travel واحدة.','B2B Travel Website':'قسم B2B Travel','MICE Website':'قسم MICE','Explore Full B2B Website →':'استكشف قسم B2B بالكامل ←','Explore Full MICE Website →':'استكشف قسم MICE بالكامل ←',
  'Book Your Adventure':'احجز مغامرتك','Reservation Request':'طلب حجز','First Name *':'الاسم *','Last Name *':'الشهرة *','Email *':'البريد الإلكتروني *','Phone *':'الهاتف *','Nationality':'الجنسية','Number of Travelers *':'عدد المسافرين *','Arrival Date *':'تاريخ الوصول *','Departure Date *':'تاريخ المغادرة *','Trip Type *':'نوع الرحلة *','Special Requests':'طلبات خاصة','Prepare Reservation Request':'جهّز طلب الحجز','Select trip type':'اختر نوع الرحلة','Leisure':'سياحة','Adventure':'مغامرة','Family':'عائلية','Honeymoon':'شهر عسل','Group Travel':'رحلة جماعية',
  'Reach Out':'تواصل معنا','Get in Touch':'ابقَ على تواصل','Phone':'الهاتف','Email':'البريد الإلكتروني','Location':'الموقع','Travel':'السفر','Corporate':'الشركات','CORPORATE DIVISIONS':'أقسام الشركات','Business Travel & DMC':'سفر الأعمال وإدارة الوجهات','Meetings, Incentives, Conferences & Events':'الاجتماعات والحوافز والمؤتمرات والفعاليات',
  'B2B TRAVEL · DMC LEBANON':'سفر B2B · إدارة وجهات لبنان','Your B2B Travel Partner in Lebanon':'شريككم لسفر B2B في لبنان','Reliable destination management, corporate travel and ground handling for international agencies, companies, delegations and professional travel buyers.':'إدارة موثوقة للوجهات وسفر الشركات والخدمات الأرضية للوكالات الدولية والشركات والوفود ومشتري خدمات السفر المحترفين.','Request a B2B Proposal':'اطلب عرض B2B','Submit a MICE RFP':'أرسل طلب MICE','Your Premier MICE Partner in Lebanon':'شريككم المتخصص بخدمات MICE في لبنان','Bespoke meetings, incentive travel, conferences, exhibitions and corporate events delivered through strong local partnerships and precise on-ground execution.':'اجتماعات ورحلات حوافز ومؤتمرات ومعارض وفعاليات شركات مصممة حسب الطلب، بتنفيذ محلي دقيق وشراكات قوية.',
  'Explore Services':'استكشف الخدمات','Lebanon Expertise':'خبرة محلية في لبنان','Hotel Partnerships':'شراكات فندقية','Ground Handling':'خدمات أرضية','Corporate Invoicing':'فواتير شركات','ABOUT MONA TRAVEL':'عن MONA TRAVEL','A specialist local partner inside one trusted travel brand.':'شريك محلي متخصص ضمن علامة سفر موثوقة واحدة.','Destination Expertise':'خبرة بالوجهة','Ground Support':'دعم ميداني','Professional Mindset':'عقلية احترافية','B2B SERVICES':'خدمات B2B','MICE SERVICES':'خدمات MICE','Corporate Travel & Destination Management':'سفر الشركات وإدارة الوجهات','Built as a full-service division of Mona Travel, with the same brand standards and one local operating team.':'قسم متكامل من Mona Travel بنفس معايير العلامة وفريق تشغيل محلي واحد.',
  'BUSINESS PROGRAMS':'برامج الأعمال','SIGNATURE MICE PROGRAMS':'برامج MICE المميزة','Business Travel, Managed Locally':'سفر أعمال بإدارة محلية','Corporate Events, Designed Around Your Brief':'فعاليات شركات مصممة حسب متطلباتكم','Discuss this program':'ناقش هذا البرنامج','WHY CHOOSE MONA TRAVEL?':'لماذا MONA TRAVEL؟','Local expertise. Strong partnerships. Seamless execution.':'خبرة محلية. شراكات قوية. تنفيذ سلس.','YOUR LOCAL DMC PARTNER':'شريككم المحلي لإدارة الوجهات','YOUR LOCAL MICE PARTNER':'شريككم المحلي لـMICE','Need someone on the ground in Lebanon?':'تحتاجون شريكاً على الأرض في لبنان؟','Planning an event or incentive program in Lebanon?':'تخططون لفعالية أو برنامج حوافز في لبنان؟',
  'START A PROJECT':'ابدأ مشروعاً','Share the essentials of your brief. The request will open in your email application addressed to Mona Travel, ready to send.':'شاركنا أهم تفاصيل الطلب. سيفتح الطلب في تطبيق البريد الإلكتروني موجهاً إلى Mona Travel وجاهزاً للإرسال.','Full Name *':'الاسم الكامل *','Company Name *':'اسم الشركة *','Business Email *':'البريد الإلكتروني للشركة *','Phone / WhatsApp *':'الهاتف / واتساب *','Country *':'الدولة *','Request Type *':'نوع الطلب *','Select request':'اختر الطلب','Group Size':'حجم المجموعة','Not specified':'غير محدد','Requirements':'المتطلبات','Prepare Request':'جهّز الطلب','Talk to Mona Travel':'تواصل مع Mona Travel','For partnerships, quotations, group requests or destination planning in Lebanon, contact our team directly.':'للشراكات وعروض الأسعار وطلبات المجموعات أو التخطيط في لبنان، تواصلوا مباشرة مع فريقنا.','Call Us':'اتصل بنا','Email Us':'راسلنا','Start a conversation':'ابدأ محادثة','Switch Division':'تبديل القسم','Division Selector':'اختيار القسم','All rights reserved.':'جميع الحقوق محفوظة.'
};

const dictionaries:Record<SiteLanguage,Record<string,string>>={en:{},fr,ar};

function preserveSpacing(source:string,replacement:string){
  const lead=source.match(/^\s*/)?.[0]??'';
  const tail=source.match(/\s*$/)?.[0]??'';
  return lead+replacement+tail;
}

export default function LanguageRuntime(){
  useEffect(()=>{
    let current=(localStorage.getItem('mona-travel-language')||'en') as SiteLanguage;
    let queued=false;

    const apply=()=>{
      queued=false;
      const dict=dictionaries[current]||{};
      const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
      let node:Node|null;
      while((node=walker.nextNode())){
        const text=node as Text;
        const parent=text.parentElement;
        if(!parent||['SCRIPT','STYLE','NOSCRIPT'].includes(parent.tagName)) continue;
        if(!originalText.has(text)) originalText.set(text,text.textContent||'');
        const original=originalText.get(text)||'';
        const key=original.trim();
        if(!key) continue;
        const replacement=current==='en'?key:(dict[key]||key);
        const next=preserveSpacing(original,replacement);
        if(text.textContent!==next) text.textContent=next;
      }
      document.querySelectorAll('[placeholder],[aria-label]').forEach(el=>{
        let attrs=originalAttr.get(el);
        if(!attrs){attrs=new Map();originalAttr.set(el,attrs);}
        for(const name of ['placeholder','aria-label']){
          const value=el.getAttribute(name);
          if(value&&!attrs.has(name)) attrs.set(name,value);
          const original=attrs.get(name);
          if(original){
            const replacement=current==='en'?original:(dict[original]||original);
            if(el.getAttribute(name)!==replacement) el.setAttribute(name,replacement);
          }
        }
      });
    };

    const schedule=()=>{if(!queued){queued=true;requestAnimationFrame(apply);}};
    const onLanguage=(event:Event)=>{current=(event as CustomEvent<SiteLanguage>).detail||'en';schedule();};
    window.addEventListener('mona-language-change',onLanguage);
    const observer=new MutationObserver(schedule);
    observer.observe(document.body,{childList:true,subtree:true});
    schedule();
    return()=>{observer.disconnect();window.removeEventListener('mona-language-change',onLanguage);};
  },[]);
  return null;
}

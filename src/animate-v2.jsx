import React, {useEffect, useState} from 'react';
import {createRoot} from 'react-dom/client';
import {createPortal} from 'react-dom';
import {animate, inView} from 'motion';
import {AnimateUIProvider} from '@animate-ui/react/provider';
import {ScrollProgress, ScrollProgressProvider} from '@animate-ui/react/primitives/scroll-progress';
import {RippleButton, RippleButtonRipples} from '@animate-ui/react/primitives/buttons/ripple';
import {Slide} from '@animate-ui/react/primitives/effects/slide';
import {spring, transition} from '@animate-ui/react/utils/motion';

const labels={vi:{book:'Liên hệ booking',statement:<>Một giọng nói.<br/>Kết nối muôn câu chuyện.</>},en:{book:'Book now',statement:<>One voice.<br/>Countless connections.</>},zh:{book:'预约合作',statement:<>一种声音。<br/>连接万千故事。</>}};
function useLang(){const [lang,setLang]=useState(document.documentElement.lang);useEffect(()=>{const ob=new MutationObserver(()=>setLang(document.documentElement.lang));ob.observe(document.documentElement,{attributes:true,attributeFilter:['lang']});return()=>ob.disconnect();},[]);return labels[lang]?lang:'vi';}
function Link({href,children,className='',external=false}){return <RippleButton asChild tapScale={.985} hoverScale={1.015}><a href={href} className={className} {...(external?{target:'_blank',rel:'noopener noreferrer'}:{})}><span>{children}</span><span aria-hidden="true">↗</span><RippleButtonRipples color="rgba(193,163,109,.32)"/></a></RippleButton>;}
function MotionController(){useEffect(()=>{
 const pref=matchMedia('(prefers-reduced-motion: reduce)'); const seen=new WeakSet(),running=new Set(),stops=[];
 document.documentElement.classList.remove('enhanced');
 const reveal=(el,i)=>{if(seen.has(el)||pref.matches||document.body.classList.contains('present'))return;seen.add(el);el.classList.add('aui-reveal');const a=animate(el,{opacity:[0,1],y:[24,0]},{...transition.reveal,duration:.62,delay:(i%3)*.065});running.add(a);a.then(()=>{running.delete(a);el.classList.remove('aui-reveal');}).catch(()=>{});};
 document.querySelectorAll('.reveal').forEach((el,i)=>{stops.push(inView(el,()=>reveal(el,i),{margin:'0px 0px -30px 0px'}));});
 const clear=()=>{running.forEach(a=>a.stop());running.clear();document.querySelectorAll('.aui-reveal').forEach(e=>{e.style.opacity='1';e.style.transform='none';e.classList.remove('aui-reveal');});};
 pref.addEventListener('change',clear);
 const header=document.querySelector('.top');let menuWasOpen=header.classList.contains('menu-open');
 const menuObs=new MutationObserver(()=>{const open=header.classList.contains('menu-open');if(open!==menuWasOpen){menuWasOpen=open;if(open&&!pref.matches)animate(document.querySelector('.nav'),{opacity:[0,1],y:[-10,0]},transition.menu);}});menuObs.observe(header,{attributes:true,attributeFilter:['class']});
 const modeObs=new MutationObserver(()=>{if(document.body.classList.contains('present'))clear();});modeObs.observe(document.body,{attributes:true,attributeFilter:['class']});
 const filterRemovers=[...document.querySelectorAll('[data-filter]')].map(button=>{const handler=()=>{if(pref.matches)return;document.querySelectorAll('#masonry>button:not([hidden])').forEach((el,i)=>animate(el,{opacity:[.3,1],y:[10,0]},{...transition.reveal,delay:(i%4)*.025}));};button.addEventListener('click',handler);return()=>button.removeEventListener('click',handler);});
 document.body.dataset.motion='animate-ui';
 return()=>{clear();stops.forEach(s=>s());filterRemovers.forEach(fn=>fn());menuObs.disconnect();modeObs.disconnect();pref.removeEventListener('change',clear);};
},[]);return null;}
const primary=document.querySelector('.cta .primary');
const primarySlot=document.createElement('span');primarySlot.className='button-island';primary?.replaceWith(primarySlot);
const statement=document.querySelector('.hero-statement');
const statementSlot=document.createElement('div');statementSlot.className='statement-island';statement?.replaceWith(statementSlot);
const socialSlot=document.querySelector('.socials');
function App(){const lang=useLang();return <AnimateUIProvider reducedMotion="user" tempo={1.1}>
 <MotionController/>
 <ScrollProgressProvider global direction="vertical" transition={spring.progress}><ScrollProgress mode="scaleX" className="aui-progress"/></ScrollProgressProvider>
 {createPortal(<Link href="#contact" className="btn primary">{labels[lang].book}</Link>,primarySlot)}
 {createPortal(<Slide direction="up" offset={18}><p className="hero-statement">{labels[lang].statement}</p></Slide>,statementSlot)}
 {socialSlot&&createPortal(<><Link className="chip gold" href="https://zalo.me/0943916893" external>Zalo</Link><Link className="chip gold" href="https://www.facebook.com/profile.php?id=61576395254123" external>Facebook</Link></>,socialSlot)}
 </AnimateUIProvider>;}
// Static HTML remains usable if this enhancement cannot load.
if(socialSlot)socialSlot.replaceChildren();
const root=document.createElement('div');root.id='animate-root';document.body.append(root);
createRoot(root).render(<App/>);

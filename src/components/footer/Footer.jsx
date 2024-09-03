import React from 'react'
import "./footer.css"

import { Link,useLocation } from 'react-router-dom'
const Footer =({lngsvg,width,opacity,border,height})=>{
    const location=useLocation();
    const pathname=location.pathname;
const LandingPageFooter=[
    {name:"FAQ", href: ""},
    {name:"Investor Relations", href: ""},
    {name:"Privacy", href: ""},
    {name:"Speed Test", href: ""},
    {name:"Help Centre", href: ""},
    {name:"Jobs", href: ""},
    {name:"Cookie Preferences", href: ""},
    {name:"Legal Notices", href: ""},
    {name:"Account", href: ""},
    {name:"Ways to Watch", href: ""},
    {name:"Corporate Information", href: ""},
    {name:"Only on Netflix", href: ""},
    {name:"Media Centre", href: ""},
    {name:"Terms of Use", href: ""},
    {name:"Contact Us", href: ""},
];
const SignInPageFooter=[
    
    {name:"FAQ", href: ""},
    {name:"Help Centre", href: ""},
    {name:"Terms of Use", href: ""},
    {name:"Privacy", href: ""},
    {name:"Cookie Preferences", href: ""},
    {name:"Corporate Information", href: ""},
];
  return (  
    
    <div className='footer'
    style={{
        width:`${width}`,
        opacity:`${opacity}`,
        border:`${ border}`,
        height:`${ height}`
    }}
    >
        <div className='footer-content'>
            <div className='contect-num'>
                <p>Questions?call</p>
                <a href="html">000-800-919-1694</a>
            </div>
            {/* ..... */}
            <div className='a-tag'>
                <div className='a-tag-container'>
                    {pathname ==="/"
                    ?LandingPageFooter.map((item,index)=>(
                        <Link key={index} to={item.href}>
                            {item.name}
                        </Link>
                    ))
                    :
                        SignInPageFooter.map((item,index)=>(
                        <Link key={index} to={item.href}>
                            {item.name}
                        </Link>
                    ))
                }
                </div>
            </div>
            {/* ... */}
            <div className='container'>
              {lngsvg}
            <section className='footer-language'>
                <select className='lan'>
               
                <option value="eng">English</option>
                <option value="hin">हिन्दी</option>
                </select>
            </section>
            {pathname ==="/"&&(
             <p className='netflix-txt'>
                Netflix India
             </p>
            )}
        </div> 
        </div>
    </div>
  )
}
export default Footer;

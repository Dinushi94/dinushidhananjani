import{r as x,c as h,o as v,a as s,d as g,A as w,B as m,C as p}from"./index-BPOSAqTW.js";const n={_origin:"https://api.emailjs.com"},y=(i,e="https://api.emailjs.com")=>{n._userID=i,n._origin=e},b=(i,e,o)=>{if(!i)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!o)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class u{constructor(e){this.status=e.status,this.text=e.responseText}}const f=(i,e,o={})=>new Promise((r,t)=>{const l=new XMLHttpRequest;l.addEventListener("load",({target:a})=>{const d=new u(a);d.status===200||d.text==="OK"?r(d):t(d)}),l.addEventListener("error",({target:a})=>{t(new u(a))}),l.open("POST",n._origin+i,!0),Object.keys(o).forEach(a=>{l.setRequestHeader(a,o[a])}),l.send(e)}),k=(i,e,o,r)=>{const t=r||n._userID;return b(t,i,e),f("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:t,service_id:i,template_id:e,template_params:o}),{"Content-type":"application/json"})},j=i=>{let e;if(typeof i=="string"?e=document.querySelector(i):e=i,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},_=(i,e,o,r)=>{const t=r||n._userID,l=j(o);b(t,i,e);const a=new FormData(l);return a.append("lib_version","3.2.0"),a.append("service_id",i),a.append("template_id",e),a.append("user_id",t),f("/api/v1.0/email/send-form",a)},c={init:y,send:k,sendForm:_},S={class:"text-white mt-20",id:"contact"},L={class:"grid md:grid-cols-2 gap-4 relative px-4 xl:px-16 mt-8","data-aos":"zoom-in-up"},q={style:{background:"#111a3e",width:"100%",height:"100%","border-radius":"20px",overflow:"hidden",border:"1px solid #111a3e","backdrop-filter":"blur(9px)","-webkit-backdrop-filter":"blur(9px)"}},C={class:"mb-6"},E={class:"mb-6"},A={class:"mb-6"},M={class:"mb-6"},V={__name:"ContactSection",setup(i){c.init({publicKey:"nYuyLlCLG9EJRefrp"});const e=x({email:"",subject:"",message:""}),o=()=>{c.send("service_8ziy81f","template_p0vjztk",{email:e.value.email,name:e.value.name,subject:e.value.subject,message:e.value.message},"nYuyLlCLG9EJRefrp").then(r=>{alert("Message sent successfully!"),e.value={email:"",subject:"",message:""}},r=>{alert("Failed to send message. Please try again.")})};return(r,t)=>(v(),h("section",S,[t[11]||(t[11]=s("h2",{class:"text-4xl font-bold text-white text-left mb-4 px-4 xl:pl-16"},"Let's Connect",-1)),s("div",L,[t[9]||(t[9]=g('<div><p class="text-[#adb7be]">Have a project in mind or just want to say hello? Feel free to reach out! I&#39;m always open to discussing new opportunities, collaborations, or simply connecting with like-minded individuals. </p><div class="col-lg-4 col-md-4 mb-lg-0 mt-5"><div class="flex mb-10 items-center"><div class="p-2" style="background:#111a3e;width:50px;height:46px;display:flex;justify-content:center;border-radius:50%;overflow:hidden;border:1px solid#111a3e;backdrop-filter:blur(9px);-webkit-backdrop-filter:blur(9px);"><img src="https://img.icons8.com/metro/50/ffffff/new-post.png" alt="new-post" class="w-6"></div><div class="ml-5 text-white"><h4>Email</h4><p>dinushidhananjani@gmail.com</p></div></div><div class="flex mb-10 items-center"><div class="p-2" style="background:#111a3e;width:50px;height:46px;display:flex;justify-content:center;border-radius:50%;overflow:hidden;border:1px solid#111a3e;backdrop-filter:blur(9px);-webkit-backdrop-filter:blur(9px);"><img src="https://img.icons8.com/ios-filled/50/ffffff/phone.png" alt="phone" class="w-6"></div><div class="ml-5 text-white"><h4>Phone</h4><p>0719518168</p></div></div><div class="flex mb-10 items-center"><div class="p-2" style="background:#111a3e;width:50px;height:46px;display:flex;justify-content:center;border-radius:50%;overflow:hidden;border:1px solid#111a3e;backdrop-filter:blur(9px);-webkit-backdrop-filter:blur(9px);"><img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="linkedin" class="w-6"></div><div class="ml-5 text-white"><h4>LinkedIn</h4><p>https://www.linkedin.com/in/dinushi-dhananjani-891b80192/</p></div></div></div></div>',1)),s("div",q,[s("form",{class:"flex flex-col p-2","data-aos":"zoom-in-up",onSubmit:w(o,["prevent"])},[s("div",C,[t[4]||(t[4]=s("label",{for:"email",class:"text-white block mb-2 text-sm font-medium"},"Email",-1)),m(s("input",{type:"email",id:"email","onUpdate:modelValue":t[0]||(t[0]=l=>e.value.email=l),class:"bg-[#111827] placeholder:[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5",placeholder:"email@gmail.com",name:"email",required:""},null,512),[[p,e.value.email]])]),s("div",E,[t[5]||(t[5]=s("label",{for:"subject",class:"text-white block mb-2 text-sm font-medium"},"Name",-1)),m(s("input",{type:"text",id:"subject","onUpdate:modelValue":t[1]||(t[1]=l=>e.value.name=l),class:"bg-[#111827] placeholder:[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5",placeholder:"Subject",name:"subject",required:""},null,512),[[p,e.value.name]])]),s("div",A,[t[6]||(t[6]=s("label",{for:"subject",class:"text-white block mb-2 text-sm font-medium"},"Subject",-1)),m(s("input",{type:"text",id:"subject","onUpdate:modelValue":t[2]||(t[2]=l=>e.value.subject=l),class:"bg-[#111827] placeholder:[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5",placeholder:"Subject",name:"subject",required:""},null,512),[[p,e.value.subject]])]),s("div",M,[t[7]||(t[7]=s("label",{for:"message",class:"text-white block mb-2 text-sm font-medium"},"Message",-1)),m(s("textarea",{id:"message","onUpdate:modelValue":t[3]||(t[3]=l=>e.value.message=l),class:"bg-[#111827] placeholder:[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5",placeholder:"Let's talk about ... ",name:"message",required:""},null,512),[[p,e.value.message]])]),t[8]||(t[8]=s("button",{type:"submit",class:"z-1 w-[100%!important] px-6 md:px-7 py-3 rounded-full sm:w-max flex justify-center text-white bg-primary border-2 border-transparent"}," Send Message ",-1))],32)]),t[10]||(t[10]=s("div",{class:"bg-gradient-to-tr opacity-25 from-[#570cac] to-primary blur-2xl h-20 w-80 z-0 absolute -top-1/2 -left-4 transform -translate-x-2/3 -translate-1/2"},null,-1))])]))}};export{V as default};

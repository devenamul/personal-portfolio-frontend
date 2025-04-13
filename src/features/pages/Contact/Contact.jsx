import { useState } from "react"
import Footer from "../../compnent/Footer/Footer"
import Header from "../../compnent/Header/Header"
import "./Contact.css"
import { useDispatch} from "react-redux"
import { createContactData } from "./contactApi"

import Swal from 'sweetalert2';

const Contact = () => {
  
     // dispatch data
     const dispatch = useDispatch()
  
 
 
   // useState for input data
    const [input, setInput]= useState({
      firstName:"", 
      lastName:"", 
      email:"", 
      phone:"", 
      subject:'',
      message:"" 
    })

    // handel input change
    const handelInputChange =(e)=>{
      setInput((prevState) => ({
         ...prevState,
         [e.target.name]: e.target.value
     }));
    }

    // submit form data
const handleContactCreate = (e) => {
   e.preventDefault();
 
   // form data validation
   if (
     input.firstName === "" || 
     input.lastName === "" || 
     input.email === "" || 
     input.phone === "" || 
     input.subject === "" || 
     input.message === ""
   ) {
      Swal.fire({
         title: 'All field are Required',
         icon: 'error',
         showCancelButton: true,
         confirmButtonText: 'OK',
         cancelButtonText: 'Cancel',
         showConfirmButton: false,
         background: '#454545',
         color: '#f27474', 
         customClass: {
           popup: 'custom-swal-popup',
           cancelButton: 'custom-cancel-button'
         },
        
       });
       
       
   } else {
     dispatch(createContactData(input));
     Swal.fire({
      icon: "success",
      title: "Successful send your data",
      showConfirmButton: false,
      background: '#454545',
      color: '#6de767',
      customClass: {
        popup: 'custom-swal-popup',
      },
      timer: 1500 
    })

    setInput({
      firstName:"", 
      lastName:"", 
      email:"", 
      phone:"", 
      subject:'',
      message:"" 
    })
    
   }
 };
 

  return (
    <>
           
   
      <Header/>
      
      <main className="p-relative tp-home-svg-wrap z-index-1">
         
         <div className="tp-home-svg-shape">
            <svg width="1920" height="779" viewBox="0 0 1920 779" fill="none" xmlns="http://www.w3.org/2000/svg">
               <g filter="url(#filter0_f_27_375)">
                 <path className="line-1" d="M2087 308.5C1974 236.833 1691.4 145.6 1465 354C1182 614.5 1965.5 427.5 1556 207.5C1146.5 -12.5 788 331 762.5 490.5C737 650 1354.5 230 671.5 184.5C-11.5 139 381 -17.5 588 83.5C795 184.5 286.5 834 -62 543.5C-410.5 253 492 414.5 176 905" stroke="white" strokeOpacity="0.06" strokeWidth="40" />
               </g>
               <defs>
                 <filter id="filter0_f_27_375" x="-193.436" y="0.173615" width="2321.15" height="945.658" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                   <feFlood floodOpacity="0" result="BackgroundImageFix" />
                   <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                   <feGaussianBlur stdDeviation="15" result="effect1_foregroundBlur_27_375" />
                 </filter>
               </defs>
            </svg>
         </div>

       
         <div className="tp-home-area tp-about-wrap tp-about-spacing">
            <div className="container">
               <div className="row gx-24">
                  <div className="col-xl-4 col-lg-5">
                     <div className="tp-service-left mb-30">
                        <div className="tp-home-2-author tp-home-author-shadow mb-25 p-relative">
                           <img className="w-100 tp-round-10" src="/img/about/about/thumb.jpg" alt=""/>
                        </div>
                        <div className="tp-home-2-social-wrap mb-25 tp-round-4">
                           <h3 className="tp-home-2-title mb-10">Stay with me</h3>
                           <span className="tp-home-2-border mb-20"></span>
                           <div className="tp-home-2-social-inner">
                              <a href="https://x.com/smenamulhaque23" target="_blank" rel="noopener noreferrer" className="tp-home-social-icon">
                                 <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.9027 8.46864L19.3482 0H17.5838L11.119 7.3532L5.95547 0H0L7.8082 11.1193L0 20H1.76443L8.59152 12.2348L14.0445 20H20L11.9023 8.46864H11.9027ZM9.48608 11.2173L8.69495 10.1101L2.40018 1.29967H5.11025L10.1902 8.40994L10.9813 9.51718L17.5847 18.7594H14.8746L9.48608 11.2177V11.2173Z" fill="#D2D2D2" />
                                 </svg>
                              </a>
                              <a href="https://www.facebook.com/s.m.enamul.haque.55291" target="_blank" rel="noopener noreferrer"className="tp-home-social-icon">
                                 <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.74157 20V10.8777H9.80231L10.2615 7.32156H6.74157V5.05147C6.74157 4.0222 7.02622 3.32076 8.50386 3.32076L10.3854 3.31999V0.13923C10.06 0.0969453 8.94308 0 7.64308 0C4.92848 0 3.07002 1.65697 3.07002 4.69927V7.32156H0V10.8777H3.07002V20H6.74157Z" fill="#D2D2D2" />
                                 </svg>
                              </a>
                              <a href="https://www.instagram.com/smenamulhaque23/profilecard/?igsh=MjB0dnJvYWFjMnQ2" target="_blank" rel="noopener noreferrer" className="tp-home-social-icon">
                                 <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.5862 0H5.41382C2.42859 0 0 2.42859 0 5.41382V14.5863C0 17.5714 2.42859 20 5.41382 20H14.5863C17.5714 20 20 17.5714 20 14.5863V5.41382C20 2.42859 17.5714 0 14.5862 0ZM18.8275 14.5863C18.8275 16.9249 16.9249 18.8275 14.5862 18.8275H5.41382C3.0751 18.8275 1.17249 16.9249 1.17249 14.5863V5.41382C1.17249 3.0751 3.0751 1.17249 5.41382 1.17249H14.5863C16.9249 1.17249 18.8275 3.0751 18.8275 5.41382V14.5863Z" fill="#D2D2D2" />
                                    <path d="M9.99985 4.53139C6.98441 4.53139 4.53125 6.98454 4.53125 9.99998C4.53125 13.0154 6.98441 15.4686 9.99985 15.4686C13.0153 15.4686 15.4684 13.0154 15.4684 9.99998C15.4684 6.98454 13.0153 4.53139 9.99985 4.53139ZM9.99985 14.2961C7.63107 14.2961 5.70374 12.3689 5.70374 9.99998C5.70374 7.63121 7.63107 5.70387 9.99985 5.70387C12.3688 5.70387 14.296 7.63121 14.296 9.99998C14.296 12.3689 12.3688 14.2961 9.99985 14.2961Z" fill="#D2D2D2" />
                                    <path d="M15.5981 2.58925C14.707 2.58925 13.9822 3.31419 13.9822 4.20515C13.9822 5.09627 14.707 5.82121 15.5981 5.82121C16.4892 5.82121 17.2141 5.09627 17.2141 4.20515C17.2141 3.31404 16.4892 2.58925 15.5981 2.58925ZM15.5981 4.64857C15.3536 4.64857 15.1547 4.4496 15.1547 4.20515C15.1547 3.96056 15.3536 3.76173 15.5981 3.76173C15.8427 3.76173 16.0417 3.96056 16.0417 4.20515C16.0417 4.4496 15.8427 4.64857 15.5981 4.64857Z" fill="#D2D2D2" />
                                 </svg>
                              </a>
                              <a href="https://www.linkedin.com/in/enamulsarder-full-stack-webseveloper/" target="_blank" rel="noopener noreferrer"className="tp-home-social-icon">
                                 <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="11" cy="11" r="10" stroke="#D2D2D2" strokeWidth="1.4" />
                                    <path d="M8 8.5C8 8.22386 8.22386 8 8.5 8H9.5C9.77614 8 10 8.22386 10 8.5V13.5C10 13.7761 9.77614 14 9.5 14H8.5C8.22386 14 8 13.7761 8 13.5V8.5Z" stroke="#D2D2D2" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12 10C12 9.44772 12.4477 9 13 9H13.5C14.3284 9 15 9.67157 15 10.5V13.5C15 13.7761 14.7761 14 14.5 14H13.5C13.2239 14 13 13.7761 13 13.5V11.5C13 11.2239 12.7761 11 12.5 11H12C12 11 12 10.5 12 10Z" stroke="#D2D2D2" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                                    <circle cx="8.75" cy="6.75" r="0.75" fill="#D2D2D2"/>
                                  </svg>
                              </a>
                              <a href="https://github.com/devenamul" target="_blank" rel="noopener noreferrer" className="tp-home-social-icon">
                                 <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 0.5C5.37 0.5 0 5.87 0 12.5C0 17.89 3.438 22.39 8.207 23.96C8.805 24.06 9.025 23.72 9.025 23.42C9.025 23.15 9.015 22.39 9.01 21.39C5.672 22.09 4.968 19.64 4.968 19.64C4.437 18.24 3.672 17.87 3.672 17.87C2.547 17.09 3.758 17.1 3.758 17.1C4.992 17.19 5.63 18.39 5.63 18.39C6.75 20.29 8.547 19.78 9.225 19.48C9.325 18.73 9.625 18.23 9.96 17.95C7.26 17.67 4.438 16.6 4.438 11.84C4.438 10.49 4.922 9.4 5.738 8.54C5.61 8.25 5.18 6.98 5.85 5.29C5.85 5.29 6.86 4.98 9.01 6.44C9.98 6.18 11.01 6.05 12.04 6.05C13.07 6.05 14.1 6.18 15.07 6.44C17.21 4.98 18.22 5.29 18.22 5.29C18.89 6.98 18.46 8.25 18.34 8.54C19.16 9.4 19.64 10.49 19.64 11.84C19.64 16.61 16.81 17.66 14.1 17.94C14.52 18.31 14.89 19.01 14.89 20.08C14.89 21.64 14.87 22.93 14.87 23.42C14.87 23.72 15.09 24.07 15.69 23.96C20.46 22.38 24 17.88 24 12.5C24 5.87 18.63 0.5 12 0.5Z" fill="#D2D2D2"/>
                                  </svg>
                              </a>
                           </div>
                        </div>
                        <div className="tp-contact-location">
                           <div className="tp-contact-form-location-item mb-25">
                              <span>
                                 <svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.99999 0C6.61402 0.00316505 4.32667 0.952392 2.63953 2.63953C0.952392 4.32667 0.00316505 6.61402 0 8.99999C0 15.4612 8.38499 23.5537 8.74124 23.895C8.81054 23.9623 8.90336 24 8.99999 24C9.09662 24 9.18945 23.9623 9.25874 23.895C9.61499 23.5537 18 15.4612 18 8.99999C17.9968 6.61402 17.0476 4.32667 15.3604 2.63953C13.6733 0.952392 11.386 0.00316505 8.99999 0ZM8.99999 13.125C8.18414 13.125 7.38662 12.8831 6.70827 12.4298C6.02991 11.9765 5.5012 11.3323 5.18899 10.5786C4.87678 9.82481 4.79509 8.99541 4.95426 8.19524C5.11342 7.39507 5.50629 6.66007 6.08318 6.08318C6.66007 5.50629 7.39507 5.11342 8.19524 4.95426C8.99541 4.79509 9.82481 4.87678 10.5786 5.18899C11.3323 5.5012 11.9765 6.02991 12.4298 6.70827C12.8831 7.38662 13.125 8.18414 13.125 8.99999C13.1243 10.0938 12.6895 11.1426 11.9161 11.9161C11.1426 12.6895 10.0938 13.1243 8.99999 13.125Z" fill="#D2D2D2" />
                                 </svg>
                              </span>
                              <p>Dhaka, Bangladesh<br/>
                                 Uttar Badda, Dhaka</p>
                           </div>
                           <div className="tp-contact-form-location-item">
                              <span>
                                 <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.1121 6.12857L19.6429 7.37V5.17786L20.8764 5.96357C20.9578 6.01442 21.0365 6.0695 21.1121 6.12857ZM21.9371 7.48786L19.6429 9.42857L12.5164 15.4629C12.2481 15.6808 11.9379 15.8413 11.605 15.9343C11.4729 15.9655 11.3391 15.9891 11.2043 16.005H10.7957C10.6609 15.9891 10.5271 15.9655 10.395 15.9343C10.065 15.8439 9.75734 15.686 9.49143 15.4707L2.35714 9.42857L0.0628571 7.48786C0.0260006 7.6398 0.00493652 7.79515 0 7.95143V19.6429C0 20.268 0.248341 20.8676 0.690391 21.3096C1.13244 21.7517 1.73199 22 2.35714 22H19.6429C20.268 22 20.8676 21.7517 21.3096 21.3096C21.7517 20.8676 22 20.268 22 19.6429V7.95143C21.9951 7.79515 21.974 7.6398 21.9371 7.48786ZM10.4971 14.2607L3.92857 8.69786V2.35714C3.92857 1.73199 4.17691 1.13244 4.61896 0.690391C5.06101 0.248341 5.66056 0 6.28571 0H15.7143C16.3394 0 16.939 0.248341 17.381 0.690391C17.8231 1.13244 18.0714 1.73199 18.0714 2.35714V8.69786L11.5029 14.2607C11.3617 14.3783 11.1837 14.4427 11 14.4427C10.8163 14.4427 10.6383 14.3783 10.4971 14.2607ZM7.07143 4.71429C7.07143 4.92267 7.15421 5.12252 7.30156 5.26987C7.44891 5.41722 7.64876 5.5 7.85714 5.5H14.1429C14.3512 5.5 14.5511 5.41722 14.6984 5.26987C14.8458 5.12252 14.9286 4.92267 14.9286 4.71429C14.9286 4.5059 14.8458 4.30605 14.6984 4.1587C14.5511 4.01135 14.3512 3.92857 14.1429 3.92857H7.85714C7.64876 3.92857 7.44891 4.01135 7.30156 4.1587C7.15421 4.30605 7.07143 4.5059 7.07143 4.71429ZM7.85714 8.64286H14.1429C14.3512 8.64286 14.5511 8.56008 14.6984 8.41273C14.8458 8.26538 14.9286 8.06553 14.9286 7.85714C14.9286 7.64876 14.8458 7.44891 14.6984 7.30156C14.5511 7.15421 14.3512 7.07143 14.1429 7.07143H7.85714C7.64876 7.07143 7.44891 7.15421 7.30156 7.30156C7.15421 7.44891 7.07143 7.64876 7.07143 7.85714C7.07143 8.06553 7.15421 8.26538 7.30156 8.41273C7.44891 8.56008 7.64876 8.64286 7.85714 8.64286ZM2.35714 5.17786L1.11571 5.96357C1.0363 6.02212 0.960226 6.08508 0.887857 6.15214L2.35714 7.37V5.17786Z" fill="#D2D2D2" />
                                 </svg>
                              </span>
                              <div>
                                 <p>Direct email:</p>
                                 <a href="engenamul2@gmail.com">engenamul2@gmail.com</a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-8 col-lg-7">
                     <div className="tp-contact-form-wrap tp-contact-form-main-wrap">
                        <h3 className="tp-contact-form-main-title mb-40">Let’s work with <span>together 👋</span></h3>
                        <form onSubmit={handleContactCreate}>
                           <div className="tp-contact-form-input">
                              <div className="row">
                                 <div className="col-md-6">
                                    <div className="mb-15">
                                       <input name="firstName" value={input.firstName} onChange={handelInputChange} className="input" type="text" placeholder="First name*"/>
                                    </div>
                                 </div>
                                 <div className="col-md-6">
                                    <div className="mb-15">
                                       <input name="lastName" value={input.lastName} onChange={handelInputChange} className="input" type="text" placeholder="Last name*"/>
                                    </div>
                                 </div>
                                 <div className="col-md-6">
                                    <div className="mb-15">
                                       <input name="email" value={input.email} onChange={handelInputChange} className="input" type="email" placeholder="engenamul2@mail.com"/>
                                    </div>
                                 </div>
                                 <div className="col-md-6">
                                    <div className="mb-15">
                                       <input name="phone" value={input.phone} onChange={handelInputChange} className="input" type="text" placeholder="Phone number"/>
                                    </div>
                                 </div>
                                 <div className="col-12">
                                    <div className="mb-15">
                                       <input  name="subject" value={input.subject} onChange={handelInputChange} className="input" type="text" placeholder="Enter subject"/>
                                    </div>
                                 </div>
                                 <div className="col-12">
                                    <div className="mb-15 lh-1">
                                       <textarea  name="message" value={input.message} onChange={handelInputChange} className="input textarea" placeholder="Write your message"></textarea>
                                    </div>
                                 </div>
                                 <div className="col-12">
                                    <button type="submit" className="tp-contact-form-btn">Send message</button>
                                    <p className="ajax-response mt-20"></p>
                                 </div>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
                  <div className="col-lg-12">
                   <Footer/>
                  </div>
               </div>
            </div>
         </div>
       

      </main>
    </>
  )
}

export default Contact
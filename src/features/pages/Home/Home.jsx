import { useEffect } from "react";
import { Link } from "react-router-dom";
import './Home.css'


const Home = () => {

   useEffect(() => {

      const $ = window.jQuery;
  
      // Initialize Swiper slider
      const tp_service_slide = new Swiper(".tp-home-service-active", {
          slidesPerView: 1,
          speed: 700,
          spaceBetween: 5,
          centeredSlides: true,
          loop: true,
          pagination: {
              el: ".tp-home-service-pagination",
              clickable: true,
          },
      });
  
  }, []);
  return (
    <>
  
      <main>

     
         <div className="tp-home-area tp-home-spacing p-relative p-relative tp-home-svg-wrap z-index-1">
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
            <div className="container-fluid">
               <div className="row gx-16">
                  <div className="col-xl-7">
                     <div className="row gx-16">
                        <div className="col-lg-3 col-md-3 col-sm-5 mb-15">
                           <div className="tp-home-author-thumb tp-round-10  tp-home-author-shadow p-relative h-100 fix">
                              <img className="tp-round-10 w-100" src="/img/author/thumb.jpg" alt=""/>
                           </div>
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-7 mb-15">
                           <div className="tp-home-author-name bg-position tp-round-10 border-full h-100" data-background="/img/author/noice.png">
                              <div>
                                 <h2 className="tp-home-author-title fw-500 tp-text-common-white">Hi, I'm Enamul ⎯</h2>
                                 <p>I'm a computer Science Engineer with a B.Sc degree and a Diploma in Engineering</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-5">
                     <div className="row gx-16">
                        <div className="col-lg-7 col-md-7 mb-15 ">
                        <div className=" firstPage-portfolio tp-home-project-wrap bg-position tp-round-10 h-100" style={{ backgroundImage: "url('/img/project/bg.jpg')" }}>
                              <div className="tp-home-project-contect">
                                 <Link to="/portfolio" className="tp-home-project-icon mb-15 firstPage-portfolio-buton">
                                    <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M9.80005 1L16 7.00005L9.80005 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                       <path d="M1 6.99854H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                 </Link>
                                 <h2 className="tp-home-title fw-500 tp-text-common-white"><a className="underline-white" href="/portfolio">Portfolio</a></h2>
                              </div>
                           </div>
                        </div>
                        <div className="col-lg-5 col-md-5 mb-15">
                           <div className="tp-home-resorces-wrap bg-position tp-round-10 h-100" data-background="/img/resorces/bg.jpg">
                              <span className="tp-home-subtitle mb-15">RESORCES</span>
                              <h2 className="tp-home-title fw-500 tp-text-common-white mb-60"><a className="underline-white" href="/service">Tools to accelerate<br/> your workflow.</a></h2>
                              <a href="/service"><img src="/img/resorces/icon.png" alt=""/></a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-7">
                     <div className="row gx-16">
                        <div className="col-xl-9 col-lg-7 col-md-7 mb-15">
                           <div className="tp-home-about-wrap bg-position tp-round-10 border-full h-100" data-background="/img/about/thumb.png">
                              <span className="tp-home-subtitle d-block text-end mb-40">ABOUT</span>
                              <h2 className="tp-home-title fw-500 tp-text-common-white mb-25">Focused on impactful design and innovation solutions<br/>
                                 solving problems.</h2>
                              <a className="tp-home-btn underline-green" href="/about">Read more about</a>
                           </div>
                        </div>
                        <div className="col-xl-3 col-lg-5 col-md-5 mb-15">
                           <div className="tp-home-blog-wrap bg-position tp-round-10 border-full h-100" data-background="/img/blog/bg.png">
                              <div className="text-center mb-40">
                                 <img src="/img/blog/blog.png" alt=""/>
                              </div>
                              <h2 className="tp-home-title fw-500 tp-text-common-white mb-10"><a className="underline-white" href="/blog">Tesla net worth</a></h2>
                              <span className="tp-home-subtitle">BLOG</span>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-5">
                     <div className="row gx-16">
                        <div className="col-lg-7 col-md-7">
                           <div className="tp-home-social-wrap  h-100">
                              <div className="tp-home-social-item bg-position p-relative tp-round-10 border-full" data-background="/img/social/bg.png">
                                 <div className="tp-home-social-hover-shadow">
                                    <img className="tp-round-10" src="/img/social/bg-2.png" alt=""/>
                                 </div>
                                 <a className="tp-home-social-icon-wrap p-relative" href="https://x.com/smenamulhaque23" target="_blank" rel="noopener noreferrer">
                                    <span className="tp-home-social-icon">
                                       <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M13.6881 10.1624L22.2504 0H20.2214L12.7868 8.82384L6.84879 0H0L8.97943 13.3432L0 24H2.0291L9.88025 14.6817L16.1512 24H23L13.6876 10.1624H13.6881ZM10.909 13.4608L9.99919 12.1321L2.76021 1.55961H5.87679L11.7187 10.0919L12.6285 11.4206L20.2224 22.5113H17.1058L10.909 13.4613V13.4608Z" fill="#D2D2D2" />
                                       </svg>
                                    </span>
                                    <div className="tp-home-social-content d-flex">
                                       <div className="animate-right d-flex align-items-start">
                                          <span className="mr-10">Twitter</span>
                                          <span className="mr-10">Twitter</span>
                                          <span className="mr-10">Twitter</span>
                                       </div>
                                       <div className="animate-right d-flex align-items-start">
                                          <span className="mr-10">Twitter</span>
                                          <span className="mr-10">Twitter</span>
                                          <span className="mr-10">Twitter</span>
                                       </div>
                                    </div>
                                 </a>
                              </div>
                              <div className="tp-home-social-item bg-position p-relative tp-round-10 border-full" data-background="/img/social/bg.png">
                                 <div className="tp-home-social-hover-shadow">
                                    <img className="tp-round-10" src="/img/social/bg-2.png" alt=""/>
                                 </div>
                                 <a className="tp-home-social-icon-wrap p-relative" href="https://wa.me/8801960233363?text=Hello%20Enamul%2C%20I%20visited%20your%20website." target="_blank" rel="noopener noreferrer">
                                    <span className="tp-home-social-icon">
                                       <svg width="22" height="22" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M16.001 2.667C8.64 2.667 2.667 8.64 2.667 16.001C2.667 18.999 3.679 21.76 5.396 24.005L4 29.333L9.452 27.986C11.612 29.313 13.967 29.999 16.001 29.999C23.361 29.999 29.333 24.027 29.333 16.666C29.333 9.306 23.361 2.667 16.001 2.667Z" stroke="#D2D2D2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                          <path d="M11.2 12.267C11.6 13.534 12.4 15.067 13.6 16.267C14.8 17.467 16.4 18.267 17.6 18.667C18.4 18.934 19.067 18.667 19.6 18.267L20.4 17.6C20.667 17.334 20.667 16.934 20.267 16.667L18.933 15.867C18.533 15.6 18.267 15.734 17.867 16.134L17.467 16.534C17.334 16.667 17.067 16.667 16.8 16.534C16 16.134 14.933 15.333 14.267 14.267C14 13.867 14 13.6 14.133 13.467L14.533 13.067C14.933 12.667 15.067 12.4 14.8 12L14 10.667C13.733 10.267 13.333 10.267 13.067 10.4L12.267 10.933C11.867 11.333 11.067 11.6 11.2 12.267Z" stroke="#D2D2D2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </span>
                                    <div className="tp-home-social-content d-flex">
                                       <div className="animate-right d-flex align-items-start">
                                          <span className="mr-10">What's app</span>
                                          <span className="mr-10">What's app</span>
                                          <span className="mr-10">What's app</span>
                                       </div>
                                       <div className="animate-right d-flex align-items-start">
                                          <span className="mr-10">What's app</span>
                                          <span className="mr-10">What's app</span>
                                          <span className="mr-10">What's app</span>
                                       </div>
                                    </div>
                                 </a>
                              </div>
                              <div className="tp-home-social-item bg-position p-relative tp-round-10 border-full" data-background="/img/social/bg.png">
                                 <div className="tp-home-social-hover-shadow">
                                    <img className="tp-round-10" src="/img/social/bg-2.png" alt=""/>
                                 </div>
                                 <a className="tp-home-social-icon-wrap p-relative" href="https://www.instagram.com/smenamulhaque23/profilecard/?igsh=MjB0dnJvYWFjMnQ2" target="_blank" rel="noopener noreferrer" >
                                    <span className="tp-home-social-icon">
                                       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M17.5034 0H6.49658C2.91431 0 0 2.91431 0 6.49658V17.5036C0 21.0857 2.91431 24 6.49658 24H17.5036C21.0857 24 24 21.0857 24 17.5036V6.49658C24 2.91431 21.0857 0 17.5034 0ZM22.593 17.5036C22.593 20.3099 20.3099 22.593 17.5034 22.593H6.49658C3.69012 22.593 1.40698 20.3099 1.40698 17.5036V6.49658C1.40698 3.69012 3.69012 1.40698 6.49658 1.40698H17.5036C20.3099 1.40698 22.593 3.69012 22.593 6.49658V17.5036Z" fill="#D2D2D2" />
                                          <path d="M11.9998 5.43765C8.38129 5.43765 5.4375 8.38144 5.4375 12C5.4375 15.6185 8.38129 18.5623 11.9998 18.5623C15.6183 18.5623 18.5621 15.6185 18.5621 12C18.5621 8.38144 15.6183 5.43765 11.9998 5.43765ZM11.9998 17.1553C9.15729 17.1553 6.84448 14.8427 6.84448 12C6.84448 9.15744 9.15729 6.84464 11.9998 6.84464C14.8425 6.84464 17.1552 9.15744 17.1552 12C17.1552 14.8427 14.8425 17.1553 11.9998 17.1553Z" fill="#D2D2D2" />
                                          <path d="M18.7178 3.10709C17.6484 3.10709 16.7787 3.97702 16.7787 5.04617C16.7787 6.11551 17.6484 6.98544 18.7178 6.98544C19.7871 6.98544 20.657 6.11551 20.657 5.04617C20.657 3.97684 19.7871 3.10709 18.7178 3.10709ZM18.7178 5.57828C18.4244 5.57828 18.1857 5.33951 18.1857 5.04617C18.1857 4.75266 18.4244 4.51407 18.7178 4.51407C19.0113 4.51407 19.2501 4.75266 19.2501 5.04617C19.2501 5.33951 19.0113 5.57828 18.7178 5.57828Z" fill="#D2D2D2" />
                                       </svg>
                                    </span>
                                    <div className="tp-home-social-content d-flex">
                                       <div className="animate-right d-flex align-items-start">
                                          <span className="mr-10">Instagram</span>
                                          <span className="mr-10">Instagram</span>
                                          <span className="mr-10">Instagram</span>
                                       </div>
                                       <div className="animate-right d-flex align-items-start">
                                          <span className="mr-10">Instagram</span>
                                          <span className="mr-10">Instagram</span>
                                          <span className="mr-10">Instagram</span>
                                       </div>
                                    </div>
                                 </a>
                              </div>
                              <div className="tp-home-social-item bg-position p-relative tp-round-10 border-full" data-background="/img/social/bg.png">
                                 <div className="tp-home-social-hover-shadow">
                                    <img className="tp-round-10" src="/img/social/bg-2.png" alt=""/>
                                 </div>
                                 <a className="tp-home-social-icon-wrap p-relative"  href="https://www.linkedin.com/in/enamulsarder-full-stack-webseveloper/" target="_blank" rel="noopener noreferrer" >
                                    <span className="tp-home-social-icon">
                                       <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <circle cx="11" cy="11" r="10" stroke="#D2D2D2" strokeWidth="1.4" />
                                          <path d="M8 8.5C8 8.22386 8.22386 8 8.5 8H9.5C9.77614 8 10 8.22386 10 8.5V13.5C10 13.7761 9.77614 14 9.5 14H8.5C8.22386 14 8 13.7761 8 13.5V8.5Z" stroke="#D2D2D2" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                                          <path d="M12 10C12 9.44772 12.4477 9 13 9H13.5C14.3284 9 15 9.67157 15 10.5V13.5C15 13.7761 14.7761 14 14.5 14H13.5C13.2239 14 13 13.7761 13 13.5V11.5C13 11.2239 12.7761 11 12.5 11H12C12 11 12 10.5 12 10Z" stroke="#D2D2D2" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                                          <circle cx="8.75" cy="6.75" r="0.75" fill="#D2D2D2"/>
                                        </svg>
                                    </span>
                                    <div className="tp-home-social-content d-flex">
                                       <div className="animate-right d-flex align-items-start">
                                          <span className="mr-10">LonkIned</span>
                                          <span className="mr-10">LinkIned</span>
                                          <span className="mr-10">LinkIned</span>
                                       </div>
                                       <div className="animate-right d-flex align-items-start">
                                          <span className="mr-10">LonkIned</span>
                                          <span className="mr-10">LinkIned</span>
                                          <span className="mr-10">LinkIned</span>
                                       </div>
                                    </div>
                                 </a>
                              </div>
                              <div className="tp-home-social-item bg-position p-relative tp-round-10 border-full" data-background="/img/social/bg.png">
                                 <div className="tp-home-social-hover-shadow">
                                    <img className="tp-round-10" src="/img/social/bg-2.png" alt=""/>
                                 </div>
                                 <a className="tp-home-social-icon-wrap p-relative" href="https://www.facebook.com/s.m.enamul.haque.55291" target="_blank" rel="noopener noreferrer">
                                    <span className="tp-home-social-icon">
                                       <svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M14.0207 5.00495H16.7604V0.00304437H11.7815C11.3662 -0.0142373 6.30322 -0.111015 4.99096 4.89319C4.97195 4.94562 4.55258 6.13575 4.55258 8.9158L0 8.92963V14.1758L4.55834 14.1625V28H11.5211V14.1746H16.1296V8.91465H11.5211V7.25964C11.5211 6.2308 11.9549 5.00495 14.0207 5.00495ZM14.9775 10.0662V13.0219H10.369V26.8473H5.71045V13.007L1.15211 13.0202V10.0783L5.72255 10.065L5.71045 9.47919C5.65054 6.53438 6.07049 5.29586 6.0895 5.23652C7.22203 0.926464 11.5465 1.14306 11.732 1.15458L15.6083 1.15573V3.85341H14.0207C11.3287 3.85341 10.3696 5.61269 10.3696 7.25906V10.0662H14.9775Z" fill="#D2D2D2" />
                                        </svg>
                                    </span>
                                    <div className="tp-home-social-content d-flex">
                                       <div className="animate-right d-flex align-items-start">
                                          <span className="mr-10">What's app</span>
                                          <span className="mr-10">Facebook</span>
                                          <span className="mr-10">Facebook</span>
                                       </div>
                                       <div className="animate-right d-flex align-items-start">
                                          <span className="mr-10">Facebook</span>
                                          <span className="mr-10">Facebook</span>
                                          <span className="mr-10">Facebook</span>
                                       </div>
                                    </div>
                                 </a>
                              </div>
                              <div className="tp-home-social-item bg-position p-relative tp-round-10 border-full" data-background="/img/social/bg.png">
                                 <div className="tp-home-social-hover-shadow">
                                    <img className="tp-round-10" src="/img/social/bg-2.png" alt=""/>
                                 </div>
                                 <a className="tp-home-social-icon-wrap p-relative" href="https://github.com/devenamul" target="_blank" rel="noopener noreferrer">
                                    <span className="tp-home-social-icon">
                                       <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M12 0.5C5.37 0.5 0 5.87 0 12.5C0 17.89 3.438 22.39 8.207 23.96C8.805 24.06 9.025 23.72 9.025 23.42C9.025 23.15 9.015 22.39 9.01 21.39C5.672 22.09 4.968 19.64 4.968 19.64C4.437 18.24 3.672 17.87 3.672 17.87C2.547 17.09 3.758 17.1 3.758 17.1C4.992 17.19 5.63 18.39 5.63 18.39C6.75 20.29 8.547 19.78 9.225 19.48C9.325 18.73 9.625 18.23 9.96 17.95C7.26 17.67 4.438 16.6 4.438 11.84C4.438 10.49 4.922 9.4 5.738 8.54C5.61 8.25 5.18 6.98 5.85 5.29C5.85 5.29 6.86 4.98 9.01 6.44C9.98 6.18 11.01 6.05 12.04 6.05C13.07 6.05 14.1 6.18 15.07 6.44C17.21 4.98 18.22 5.29 18.22 5.29C18.89 6.98 18.46 8.25 18.34 8.54C19.16 9.4 19.64 10.49 19.64 11.84C19.64 16.61 16.81 17.66 14.1 17.94C14.52 18.31 14.89 19.01 14.89 20.08C14.89 21.64 14.87 22.93 14.87 23.42C14.87 23.72 15.09 24.07 15.69 23.96C20.46 22.38 24 17.88 24 12.5C24 5.87 18.63 0.5 12 0.5Z" fill="#D2D2D2"/>
                                        </svg>
                                    </span>
                                    <div className="tp-home-social-content d-flex">
                                       <div className="animate-right d-flex align-items-start">
                                          <span className="mr-10">gitHub</span>
                                          <span className="mr-10">gitHub</span>
                                          <span className="mr-10">gitHub</span>
                                       </div>
                                       <div className="animate-right d-flex align-items-start">
                                          <span className="mr-10">gitHub</span>
                                          <span className="mr-10">gitHub</span>
                                          <span className="mr-10">gitHub</span>
                                       </div>
                                    </div>
                                 </a>
                              </div>
                           </div>
                        </div>
                        <div className="col-lg-5 col-md-5 mb-15">
                           <div className="tp-home-banner-thumb h-100">
                              <img className="tp-round-10 w-100" src="/img/banner/bg.jpg" alt=""/>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-4 col-lg-7 col-md-7 mb-15">
                     <div className="tp-home-software-wrap p-relative fix tp-round-10 bg-position border-full h-100" data-background="/img/software/bg.png">
                        <span className="tp-home-software-shape"></span>
                        <span className="tp-home-software-shape-2"></span>
                        <h2 className="tp-home-title fw-500 tp-text-common-white mb-55 ml-60 p-relative z-index-1"><a href="#">Stack I utilize.</a></h2>
                        <div className="tp-home-software-slider d-flex">
                           <div className="animate-right d-flex align-items-start">
                              <div className="tp-home-software-item">
                                 <a className="tp-home-software-icon" href="#">
                                    <img src="/img/software/stack-1.png" alt=""/>
                                 </a>
                              </div>
                              <div className="tp-home-software-item">
                                 <a className="tp-home-software-icon" href="#">
                                    <img src="/img/software/stack-2.png" alt=""/>
                                 </a>
                              </div>
                              <div className="tp-home-software-item">
                                 <a className="tp-home-software-icon" href="#">
                                    <img src="/img/software/stack-3.png" alt=""/>
                                 </a>
                              </div>
                              <div className="tp-home-software-item">
                                 <a className="tp-home-software-icon" href="#">
                                    <img src="/img/software/stack-4.png" alt=""/>
                                 </a>
                              </div>
                              <div className="tp-home-software-item">
                                 <a className="tp-home-software-icon" href="#">
                                    <img src="/img/software/stack-5.png" alt=""/>
                                 </a>
                              </div>
                           </div>
                           <div className="animate-right d-flex align-items-start">
                              <div className="tp-home-software-item">
                                 <a className="tp-home-software-icon" href="#">
                                    <img src="/img/software/stack-6.png" alt=""/>
                                 </a>
                              </div>
                              <div className="tp-home-software-item">
                                 <a className="tp-home-software-icon" href="#">
                                    <img src="/img/software/stack-7.png" alt=""/>
                                 </a>
                              </div>
                              <div className="tp-home-software-item">
                                 <a className="tp-home-software-icon" href="#">
                                    <img src="/img/software/stack-8.png" alt=""/>
                                 </a>
                              </div>
                              <div className="tp-home-software-item">
                                 <a className="tp-home-software-icon" href="#">
                                    <img src="/img/software/stack-9.png" alt=""/>
                                 </a>
                              </div>
                              <div className="tp-home-software-item">
                                 <a className="tp-home-software-icon" href="#">
                                    <img src="/img/software/stack-10.png" alt=""/>
                                 </a>
                              </div>
                           </div>
                           <div className="animate-right d-flex align-items-start">
                              <div className="tp-home-software-item">
                                 <a className="tp-home-software-icon" href="#">
                                    <img src="/img/software/stack-11.png" alt=""/>
                                 </a>
                              </div>
                              <div className="tp-home-software-item">
                                 <a className="tp-home-software-icon" href="#">
                                    <img src="/img/software/stack-12.png" alt=""/>
                                 </a>
                              </div>
                              <div className="tp-home-software-item">
                                 <a className="tp-home-software-icon" href="#">
                                    <img src="/img/software/stack-13.png" alt=""/>
                                 </a>
                              </div>
                              <div className="tp-home-software-item">
                                 <a className="tp-home-software-icon" href="#">
                                    <img src="/img/software/stack-14.png" alt=""/>
                                 </a>
                              </div>
                              <div className="tp-home-software-item">
                                 <a className="tp-home-software-icon" href="#">
                                    <img src="/img/software/stack-14.png" alt=""/>
                                 </a>
                              </div>
                              <div className="tp-home-software-item">
                                 <a className="tp-home-software-icon" href="#">
                                    <img src="/img/software/stack-15.png" alt=""/>
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-2 col-lg-5 col-md-5 mb-15">
                     <div className="tp-home-banner-2-wrap h-100">
                        <img className="w-100 tp-round-10" src="/img/banner/bg-2.jpg" alt=""/>
                     </div>
                  </div>
                  <div className="col-xl-3 col-lg-6 col-md-6 mb-15">
                     <div className="tp-home-service-wrap tp-round-10 bg-position border-full h-100" data-background="/img/service/bg.png">
                        <div className="swiper-container tp-home-service-active">
                           <div className="swiper-wrapper">
                              <div className="swiper-slide">
                                 <div className="tp-home-service-item">
                                    <span className="tp-home-subtitle mb-25">SERVICE 01</span>
                                    <h2 className="tp-home-title fw-500 tp-text-common-white mb-10"><a className="underline-white" href="/service">Full Stack Web Development-</a></h2>
                                    <p>Developing end-to-end web applications using React.js, Node.js, Express.js, MongoDB, and MySQL.</p>
                                 </div>
                              </div>
                              <div className="swiper-slide">
                                 <div className="tp-home-service-item">
                                    <span className="tp-home-subtitle mb-25">SERVICE 02</span>
                                    <h2 className="tp-home-title fw-500 tp-text-common-white mb-10"><a className="underline-white" href="/service">Frontend Development –</a></h2>
                                    <p>Creating responsive and user-friendly interfaces using HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, jQuery, React and Next </p>
                                 </div>
                              </div>
                              <div className="swiper-slide">
                                 <div className="tp-home-service-item">
                                    <span className="tp-home-subtitle mb-25">SERVICE 03</span>
                                    <h2 className="tp-home-title fw-500 tp-text-common-white mb-10"><a className="underline-white" href="/service">Backend Development –</a></h2>
                                    <p>Building scalable and secure APIs and server-side logic using Node.js, Express.js, and integrating with various databases.</p>
                                 </div>
                              </div>
                              <div className="swiper-slide">
                                 <div className="tp-home-service-item">
                                    <span className="tp-home-subtitle mb-25">SERVICE 04</span>
                                    <h2 className="tp-home-title fw-500 tp-text-common-white mb-10"><a className="underline-white" href="/service">Apps Development – </a></h2>
                                    <p> Developing cross-platform mobile applications using React Native, ensuring smooth performance and native feel.</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="tp-home-service-pagination mt-15"></div>
                     </div>
                  </div>
                  <div className="col-xl-3 col-lg-6 col-md-6 mb-15">
                     <div className="tp-home-contact-wrap p-relative text-center fix tp-round-10 bg-position border-full h-100" data-background="/img/contact/bg.png">
                       <span className="tp-home-contact-shape p-absolute"></span>
                       <span className="tp-home-contact-shape-2 p-absolute"></span>
                        <h2 className="tp-home-contact-title mb-25 p-relative z-index-1">Let’s work with <span>together</span></h2>
                        <a href="/contact" className="tp-home-project-icon p-relative z-index-1">
                           <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.80005 1L16 7.00005L9.80005 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M1 6.99854H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                           </svg>
                        </a>
                        <div className="tp-home-contact-slide pt-25">
                           <div className="animate-right d-flex align-items-start">
                              <p className="mb-0">I am always ready to help you with quality services</p>
                              <p className="mb-0">I am always ready to help you with quality services</p>
                              <p className="mb-0">I am always ready to help you with quality services</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
        

      </main>
    </>
  )
}

export default Home
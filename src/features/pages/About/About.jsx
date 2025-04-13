import './About.css'
import Footer from '../../compnent/Footer/Footer'
import Header from '../../compnent/Header/Header'





import './About.css'
import { useEffect } from 'react'
const About = () => {

   useEffect(() => {
      const windowOn = $(window);
  

      // Custom background and width for elements
      $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
      });
  
      $("[data-width]").each(function () {
        $(this).css("width", $(this).attr("data-width"));
      });
  
      // Initialize Swiper for Home Service
      const tpServiceSlide = new Swiper(".tp-home-service-active", {
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
  
      // Initialize Swiper for Testimonial Slider
      const tpTestimonialSlide = new Swiper(".tp-testimonial-slider-active", {
        slidesPerView: 1,
        speed: 700,
        spaceBetween: 24,
        loop: true,
        autoplay: {
          delay: 4000,
        },
        breakpoints: {
          1400: { slidesPerView: 2 },
          1200: { slidesPerView: 2 },
          991: { slidesPerView: 2 },
          576: { slidesPerView: 1 },
          0: { slidesPerView: 1 },
        },
      });
  
      // Initialize Swiper for Portfolio Slider
      const tpPortfolioSlide = new Swiper(".tp-portfolio-slider-active", {
        slidesPerView: 1,
        speed: 700,
        spaceBetween: 40,
        loop: true,
        autoplay: {
          delay: 4000,
        },
        breakpoints: {
          1400: { slidesPerView: 2 },
          1200: { slidesPerView: 2 },
          991: { slidesPerView: 2 },
          576: { slidesPerView: 1 },
          0: { slidesPerView: 1 },
        },
      });
  
    }, []);
  return (
    <>
          
    
      <Header/>

      <main>
         
      
         <div className="tp-home-area tp-about-wrap tp-about-spacing">
            <div className="container">
               <div className="row gx-24">
                  <div className="col-lg-4 mb-25">
                     <div className="tp-home-2-author tp-home-author-shadow h-100 p-relative">
                        <img className="w-100 tp-round-10" src="/img/about/about/thumb.jpg" alt=""/>
                     </div>
                  </div>
                  <div className="col-lg-8 mb-25">
                     <div className="tp-about-heiko tp-round-4 h-100">
                        <h2 className="tp-home-author-title fw-500 tp-text-common-white mb-30">Hi, I'm Eng. Enamul</h2>
                        <p className="fw-500 mb-25">
                           I am a passionate and results-driven Computer Science Engineer with both a B.Sc. and a Diploma in Computer Science. I specialize in full-stack web and mobile development, with hands-on experience in HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, jQuery, React.js, React Native, Node.js, Express.js, and Next.js. On the backend, I work with MongoDB, MySQL, and SQL databases. I also have solid skills in Python.</p>
                        <p className="fw-500">I’m dedicated to building modern, responsive, and high-performance applications. I love solving real-world problems with clean code, scalable architecture, and innovative solutions.</p>
                     </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 mb-25">
                     <div className="tp-home-2-expreance-wrap h-100">
                        <h3 className="tp-home-2-title mb-10">Work experience</h3>
                        <span className="tp-home-2-border mb-30"></span>
                        <div className="tp-home-2-expreance-item mb-25 d-flex">
                           
                          
                           <div className="tp-home-2-expreance-content">
                              <h6 className="tp-home-2-title mb-0">Full Stack Web Development-</h6>
                              <span className="tp-home-2-expreance-subtitle">MERN Stack and Python</span>
                           </div>
                        </div>
                        <div className="tp-home-2-expreance-item mb-25 d-flex">
               
                           <div className="tp-home-2-expreance-content">
                              <h6 className="tp-home-2-title mb-0">Frontend Development</h6>
                              <span className="tp-home-2-expreance-subtitle">HTML, CSS, Bootstrap, Tilwind CSS, Js, jQuery, React and Next</span>
                           </div>
                        </div>
                        <div className="tp-home-2-expreance-item mb-25 d-flex">
                           <div className="tp-home-2-expreance-content">
                              <h6 className="tp-home-2-title mb-0">Backend Development </h6>
                              <span className="tp-home-2-expreance-subtitle">Node, Express, Python & Various Dtatabase</span>
                           </div>
                        </div>
                        <div className="tp-home-2-expreance-item d-flex">
                           <div className="tp-home-2-expreance-content">
                              <h6 className="tp-home-2-title mb-0">Apps Development </h6>
                              <span className="tp-home-2-expreance-subtitle">React Native</span>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 mb-25">
                     <div className="tp-home-2-project-wrap tp-round-4 h-100">
                        <h3 className="tp-home-2-title mb-10">Latest projects</h3>
                        <span className="tp-home-2-border mb-30"></span>
                        <div className="swiper-container tp-home-service-active">
                           <div className="swiper-wrapper">
                              <div className="swiper-slide">
                                 <div className="tp-home-2-project-item p-relative">
                                    <img className="w-100 tp-round-4" src="/img/project/project-2/project.jpg" alt=""/>
                                    <a href="portfolio-details.html" className="tp-home-2-project-icon">
                                       <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M9.80005 1L16 7.00005L9.80005 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                          <path d="M1 6.99854H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                       </svg>
                                    </a>
                                    <h2 className="tp-home-2-project-title p-absolute"><a className="underline-white" href="portfolio-details.html">See More</a></h2>
                                 </div>
                              </div>
                              <div className="swiper-slide">
                                 <div className="tp-home-2-project-item p-relative">
                                    <img className="w-100 tp-round-4" src="/img/project/project-2/project.jpg" alt=""/>
                                    <a href="portfolio-details.html" className="tp-home-2-project-icon">
                                       <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M9.80005 1L16 7.00005L9.80005 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                          <path d="M1 6.99854H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                       </svg>
                                    </a>
                                    <h2 className="tp-home-2-project-title p-absolute"><a className="underline-white" href="portfolio-details.html">See More</a></h2>
                                 </div>
                              </div>
                              <div className="swiper-slide">
                                 <div className="tp-home-2-project-item p-relative">
                                    <img className="w-100 tp-round-4" src="/img/project/project-2/project.jpg" alt=""/>
                                    <a href="portfolio-details.html" className="tp-home-2-project-icon">
                                       <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M9.80005 1L16 7.00005L9.80005 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                          <path d="M1 6.99854H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                       </svg>
                                    </a>
                                    <h2 className="tp-home-2-project-title p-absolute"><a className="underline-white" href="portfolio-details.html">See More</a></h2>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="tp-home-service-pagination mt-25 text-center"></div>
                     </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 mb-25">
                     <div className="tp-home-2-expreance-wrap h-100">
                        <h3 className="tp-home-2-title mb-10">Education</h3>
                        <span className="tp-home-2-border mb-30"></span>
                        <div className="tp-home-2-expreance-item mb-25 d-flex">
                           <span className="tp-home-expreance-2-year mr-40">2021 - 202</span>
                           <div className="tp-home-2-expreance-content">
                              <h6 className="tp-home-2-title mb-0">Bachelor degree in CSE</h6>
                              <span className="tp-home-2-expreance-subtitle">DIU at Dhaka</span>
                           </div>
                        </div>
                        <div className="tp-home-2-expreance-item mb-25 d-flex">
                           <span className="tp-home-expreance-2-year mr-40">2015 - 2019</span>
                           <div className="tp-home-2-expreance-content">
                              <h6 className="tp-home-2-title mb-0">Diploma in CSE</h6>
                              <span className="tp-home-2-expreance-subtitle">GMPI at Gopalganj</span>
                           </div>
                        </div>
                        <div className="tp-home-2-expreance-item mb-25 d-flex">
                           <span className="tp-home-expreance-2-year mr-40">2021 - 2022</span>
                           <div className="tp-home-2-expreance-content">
                              <h6 className="tp-home-2-title mb-0">Python</h6>
                              <span className="tp-home-2-expreance-subtitle">DIU, university</span>
                           </div>
                        </div>
                        <div className="tp-home-2-expreance-item d-flex">
                           <span className="tp-home-expreance-2-year mr-40">2019 - 2020</span>
                           <div className="tp-home-2-expreance-content">
                              <h6 className="tp-home-2-title mb-0">MERN</h6>
                              <span className="tp-home-2-expreance-subtitle">Sorobindu</span>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6">
                     <div className="tp-home-2-social-wrap mb-20 tp-round-4">
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
                     <div className="tp-home-2-expreance-bottom">
                        <div className="row gx-20">
                           <div className="col-lg-6 col-md-12 col-sm-6 mb-25">
                              <div className="tp-home-2-big-years-wrap text-center h-100">
                                 <h3 className="tp-home-2-title mb-10">Years experience</h3>
                                 <span className="tp-home-2-border mb-5"></span>
                                 <h2 className="tp-home-2-big-years mb-0">3</h2>
                              </div>
                           </div>
                           <div className="col-lg-6  col-md-12 col-sm-6 mb-25">
                              <div className="tp-home-2-big-years-wrap-2 h-100">
                                 <h3 className="tp-home-2-title mb-10"> My CV</h3>
                                 <span className="tp-home-2-border mb-50"></span>
                                 <a href="#" className="tp-btn-2 mb-5 w-100 d-flex justify-content-between">
                                    View
                                    <span>
                                       <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M6.8667 1L11 5.00003L6.8667 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                          <path d="M1 4.99902H11" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                       </svg>
                                    </span>
                                 </a>
                                 <a href="/files/resume.pdf" download className="download tp-btn-2 w-100 d-flex justify-content-between">
                                    Download
                                    <span>
                                       <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M6.8667 1L11 5.00003L6.8667 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                          <path d="M1 4.99902H11" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                       </svg>
                                    </span>
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-8 mb-25">
                     <div className="tp-about-testimonial-wrap h-100">
                        <div className="swiper-container tp-testimonial-slider-active">
                           <div className="swiper-wrapper">
                              <div className="swiper-slide">
                                 <div className="tp-about-testimonial-item tp-round-4">
                                    <span className="tp-about-testimonial-ratings-icon mb-10 d-block">
                                       <i className="fa-solid fa-star-sharp"></i>
                                       <i className="fa-solid fa-star-sharp"></i>
                                       <i className="fa-solid fa-star-sharp"></i>
                                       <i className="fa-solid fa-star-sharp"></i>
                                       <i className="fa-solid fa-star-sharp"></i>
                                    </span>
                                    <p className="mb-30">Sit amet luctussd fav venenatis, lectus
                                       magna fringilla inis urna,  porttitor rho
                                       ncus dolor puru non enim praesent
                                       in elementum sahasho facilisis leo
                                       vel fringilla est ullamcorpero</p>
                                    <div className="tp-about-testimonial-avatar-wrap d-flex align-items-center">
                                       <img className="rounded-circle tp-about-testimonial-avatar mr-15" src="/img/testimonial/avatar.png" alt=""/>
                                       <p className="tp-about-testimonial-name">Olivia Pitter at Fiverr</p>
                                    </div>
                                 </div>
                              </div>
                              <div className="swiper-slide">
                                 <div className="tp-about-testimonial-item tp-round-4">
                                    <span className="tp-about-testimonial-ratings-icon mb-10 d-block">
                                       <i className="fa-solid fa-star-sharp"></i>
                                       <i className="fa-solid fa-star-sharp"></i>
                                       <i className="fa-solid fa-star-sharp"></i>
                                       <i className="fa-solid fa-star-sharp"></i>
                                       <i className="fa-solid fa-star-sharp"></i>
                                    </span>
                                    <p className="mb-30">Sit amet luctussd fav venenatis, lectus
                                       magna fringilla inis urna,  porttitor rho
                                       ncus dolor puru non enim praesent
                                       in elementum sahasho facilisis leo
                                       vel fringilla est ullamcorpero</p>
                                    <div className="tp-about-testimonial-avatar-wrap d-flex align-items-center">
                                       <img className="rounded-circle tp-about-testimonial-avatar mr-15" src="/img/testimonial/avatar-2.png" alt=""/>
                                       <p className="tp-about-testimonial-name">Md Harun <span>/ Designer</span></p>
                                    </div>
                                 </div>
                              </div>
                              <div className="swiper-slide">
                                 <div className="tp-about-testimonial-item tp-round-4">
                                    <span className="tp-about-testimonial-ratings-icon mb-10 d-block">
                                       <i className="fa-solid fa-star-sharp"></i>
                                       <i className="fa-solid fa-star-sharp"></i>
                                       <i className="fa-solid fa-star-sharp"></i>
                                       <i className="fa-solid fa-star-sharp"></i>
                                       <i className="fa-solid fa-star-sharp"></i>
                                    </span>
                                    <p className="mb-30">Sit amet luctussd fav venenatis, lectus
                                       magna fringilla inis urna,  porttitor rho
                                       ncus dolor puru non enim praesent
                                       in elementum sahasho facilisis leo
                                       vel fringilla est ullamcorpero</p>
                                    <div className="tp-about-testimonial-avatar-wrap d-flex align-items-center">
                                       <img className="rounded-circle tp-about-testimonial-avatar mr-15" src="/img/testimonial/avatar.png" alt=""/>
                                       <p className="tp-about-testimonial-name">Belal Chandra<span>/ Designer</span></p>
                                    </div>
                                 </div>
                              </div>
                              <div className="swiper-slide">
                                 <div className="tp-about-testimonial-item tp-round-4">
                                    <span className="tp-about-testimonial-ratings-icon mb-10 d-block">
                                       <i className="fa-solid fa-star-sharp"></i>
                                       <i className="fa-solid fa-star-sharp"></i>
                                       <i className="fa-solid fa-star-sharp"></i>
                                       <i className="fa-solid fa-star-sharp"></i>
                                       <i className="fa-solid fa-star-sharp"></i>
                                    </span>
                                    <p className="mb-30">Sit amet luctussd fav venenatis, lectus
                                       magna fringilla inis urna,  porttitor rho
                                       ncus dolor puru non enim praesent
                                       in elementum sahasho facilisis leo
                                       vel fringilla est ullamcorpero</p>
                                    <div className="tp-about-testimonial-avatar-wrap d-flex align-items-center">
                                       <img className="rounded-circle tp-about-testimonial-avatar mr-15" src="/img/testimonial/avatar-2.png" alt=""/>
                                       <p className="tp-about-testimonial-name">Olivia Pitter <span>/ Designer</span></p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-12">
                     <div className="tp-about-contact-wrap text-center tp-round-4 mb-85">
                        <h3 className="tp-about-contact-title tp-home-contact-title"><a href="contact.html">Let’s work with <span>together 👋</span></a></h3>
                     </div>
                     <Footer/>
                  </div>
               </div>
            </div>
         </div>
        

      </main>
    </>
  )
}

export default About
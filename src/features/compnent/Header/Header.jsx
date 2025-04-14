import { useEffect, useState } from "react";
import './Header.css'
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Loader from "../Loder/Loader";

const Header = () => {
   useEffect(() => {
      const checkAndRun = () => {
        if (window.jQuery) {
          const $ = window.jQuery;
  
          // Open offcanvas menu
          $(".tp-offcanvas-open-btn").on("click", function () {
            $(".tp-offcanvas-area").addClass("opened");
            $(".body-overlay").addClass("opened");
          });
  
          // Close offcanvas menu
          $(".tp-offcanvas-close-btn, .body-overlay").on("click", function () {
            $(".tp-offcanvas-area").removeClass("opened");
            $(".body-overlay").removeClass("opened");
          });
  
          //  Clear existing menu before appending new one to avoid duplicates
          const tpSideMenu = $('.tp-offcanvas-menu nav');
          tpSideMenu.empty(); //  This prevents duplicate menu items
  
          // Clone mobile menu and append
          const tpMenuWrap = $('.tp-mobile-menu-active > ul').clone();
          tpSideMenu.append(tpMenuWrap);
  
          // Add icon next to submenu items
          if ($(tpSideMenu).find('.tp-submenu').length !== 0) {
            $(tpSideMenu)
              .find('.tp-submenu')
              .parent()
              .append('<button class="tp-menu-close"><i class="far fa-chevron-right"></i></button>');
          }
  
          // Toggle submenu on button or link click
          const sideMenuList = $('.tp-offcanvas-menu nav > ul > li button.tp-menu-close, .tp-offcanvas-menu nav > ul li.has-dropdown > a');
          $(sideMenuList).on('click', function (e) {
            e.preventDefault();
            if (!$(this).parent().hasClass('active')) {
              $(this).parent().addClass('active');
              $(this).siblings('.tp-submenu').slideDown();
            } else {
              $(this).siblings('.tp-submenu').slideUp();
              $(this).parent().removeClass('active');
            }
          });
        } else {
          // jQuery not yet loaded, retry after 100ms
          setTimeout(checkAndRun, 100);
        }
      };
  
      checkAndRun();
    }, []);

    // handel register
    const [loading, setLoading] = useState(false);
    const handelSignIn = () => {
      setLoading(true); // Loader start
  
      setTimeout(() => {
        setLoading(false); // Loader end
        Swal.fire({
          title: 'This field only Admin',
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
      }, 1000); // 1 secound  after show 
    };

  return (
    <>
        <div className="tp-offcanvas-area">
         <div className="tp-offcanvas-wrapper">
            <div className="tp-offcanvas-top d-flex align-items-center justify-content-between">
               <div className="tp-offcanvas-logo">
                  <a href="/">
                     <img data-width="98" src="/img/logo/logo-white.png" alt=""/>
                  </a>
               </div>
               <div className="tp-offcanvas-close">
                  <button className="tp-offcanvas-close-btn">
                     <svg width="37" height="38" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.19141 9.80762L27.5762 28.1924" stroke="currentColor" strokeWidth="1.5"
                           strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9.19141 28.1924L27.5762 9.80761" stroke="currentColor" strokeWidth="1.5"
                           strokeLinecap="round" strokeLinejoin="round" />
                     </svg>
                  </button>
               </div>
            </div>
            <div className="tp-offcanvas-main">
               <div className="tp-offcanvas-content">
                  <h3 className="tp-offcanvas-title">Hello There!</h3>
                  <p>Welcome to my portfolio! Explore my work, learn more about my services, and feel free to connect anytime.</p>
               </div>
               <div className="tp-offcanvas-menu d-xl-none">
                  <nav></nav>
               </div>
               <div className="tp-offcanvas-contact">
                  <h3 className="tp-offcanvas-title fs-20">My Information</h3>
                  <ul>
                     <li><a href="tel:1245654">+8801960233363</a></li>
                     <li><a href="engenamul2@gmail.com">engenamul2@gmail.com</a></li>
                     <li><a href="#">Uttar Badda, Dhaka</a></li>
                  </ul>
               </div>
               <div className="tp-offcanvas-social">
                  <h3 className="tp-offcanvas-title sm">Follow Me</h3>
                  <ul>
                     <li>
                        <a href="https://x.com/smenamulhaque23" target="_blank" rel="noopener noreferrer" className="tp-home-social-icon">
                           <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M11.9027 8.46864L19.3482 0H17.5838L11.119 7.3532L5.95547 0H0L7.8082 11.1193L0 20H1.76443L8.59152 12.2348L14.0445 20H20L11.9023 8.46864H11.9027ZM9.48608 11.2173L8.69495 10.1101L2.40018 1.29967H5.11025L10.1902 8.40994L10.9813 9.51718L17.5847 18.7594H14.8746L9.48608 11.2177V11.2173Z" fill="#D2D2D2" />
                           </svg>
                        </a>
                     </li>
                     <li>
                        <a href="https://www.facebook.com/s.m.enamul.haque.55291" target="_blank" rel="noopener noreferrer"className="tp-home-social-icon">
                           <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6.74157 20V10.8777H9.80231L10.2615 7.32156H6.74157V5.05147C6.74157 4.0222 7.02622 3.32076 8.50386 3.32076L10.3854 3.31999V0.13923C10.06 0.0969453 8.94308 0 7.64308 0C4.92848 0 3.07002 1.65697 3.07002 4.69927V7.32156H0V10.8777H3.07002V20H6.74157Z" fill="#D2D2D2" />
                           </svg>
                        </a>
                     </li>
                     <li>
                        <a href="https://www.instagram.com/smenamulhaque23/profilecard/?igsh=MjB0dnJvYWFjMnQ2" target="_blank" rel="noopener noreferrer" className="tp-home-social-icon">
                           <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M14.5862 0H5.41382C2.42859 0 0 2.42859 0 5.41382V14.5863C0 17.5714 2.42859 20 5.41382 20H14.5863C17.5714 20 20 17.5714 20 14.5863V5.41382C20 2.42859 17.5714 0 14.5862 0ZM18.8275 14.5863C18.8275 16.9249 16.9249 18.8275 14.5862 18.8275H5.41382C3.0751 18.8275 1.17249 16.9249 1.17249 14.5863V5.41382C1.17249 3.0751 3.0751 1.17249 5.41382 1.17249H14.5863C16.9249 1.17249 18.8275 3.0751 18.8275 5.41382V14.5863Z" fill="#D2D2D2" />
                              <path d="M9.99985 4.53139C6.98441 4.53139 4.53125 6.98454 4.53125 9.99998C4.53125 13.0154 6.98441 15.4686 9.99985 15.4686C13.0153 15.4686 15.4684 13.0154 15.4684 9.99998C15.4684 6.98454 13.0153 4.53139 9.99985 4.53139ZM9.99985 14.2961C7.63107 14.2961 5.70374 12.3689 5.70374 9.99998C5.70374 7.63121 7.63107 5.70387 9.99985 5.70387C12.3688 5.70387 14.296 7.63121 14.296 9.99998C14.296 12.3689 12.3688 14.2961 9.99985 14.2961Z" fill="#D2D2D2" />
                              <path d="M15.5981 2.58925C14.707 2.58925 13.9822 3.31419 13.9822 4.20515C13.9822 5.09627 14.707 5.82121 15.5981 5.82121C16.4892 5.82121 17.2141 5.09627 17.2141 4.20515C17.2141 3.31404 16.4892 2.58925 15.5981 2.58925ZM15.5981 4.64857C15.3536 4.64857 15.1547 4.4496 15.1547 4.20515C15.1547 3.96056 15.3536 3.76173 15.5981 3.76173C15.8427 3.76173 16.0417 3.96056 16.0417 4.20515C16.0417 4.4496 15.8427 4.64857 15.5981 4.64857Z" fill="#D2D2D2" />
                           </svg>
                        </a>
                     </li>
                     <li>
                        <a href="https://www.linkedin.com/in/enamulsarder-full-stack-webseveloper/" target="_blank" rel="noopener noreferrer"className="tp-home-social-icon">
                           <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="11" cy="11" r="10" stroke="#D2D2D2" strokeWidth="1.4" />
                              <path d="M8 8.5C8 8.22386 8.22386 8 8.5 8H9.5C9.77614 8 10 8.22386 10 8.5V13.5C10 13.7761 9.77614 14 9.5 14H8.5C8.22386 14 8 13.7761 8 13.5V8.5Z" stroke="#D2D2D2" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M12 10C12 9.44772 12.4477 9 13 9H13.5C14.3284 9 15 9.67157 15 10.5V13.5C15 13.7761 14.7761 14 14.5 14H13.5C13.2239 14 13 13.7761 13 13.5V11.5C13 11.2239 12.7761 11 12.5 11H12C12 11 12 10.5 12 10Z" stroke="#D2D2D2" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                              <circle cx="8.75" cy="6.75" r="0.75" fill="#D2D2D2"/>
                            </svg>
                        </a>
                     </li>
                     <li>
                        <a href="https://github.com/devenamul" target="_blank" rel="noopener noreferrer" className="tp-home-social-icon">
                           <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 0.5C5.37 0.5 0 5.87 0 12.5C0 17.89 3.438 22.39 8.207 23.96C8.805 24.06 9.025 23.72 9.025 23.42C9.025 23.15 9.015 22.39 9.01 21.39C5.672 22.09 4.968 19.64 4.968 19.64C4.437 18.24 3.672 17.87 3.672 17.87C2.547 17.09 3.758 17.1 3.758 17.1C4.992 17.19 5.63 18.39 5.63 18.39C6.75 20.29 8.547 19.78 9.225 19.48C9.325 18.73 9.625 18.23 9.96 17.95C7.26 17.67 4.438 16.6 4.438 11.84C4.438 10.49 4.922 9.4 5.738 8.54C5.61 8.25 5.18 6.98 5.85 5.29C5.85 5.29 6.86 4.98 9.01 6.44C9.98 6.18 11.01 6.05 12.04 6.05C13.07 6.05 14.1 6.18 15.07 6.44C17.21 4.98 18.22 5.29 18.22 5.29C18.89 6.98 18.46 8.25 18.34 8.54C19.16 9.4 19.64 10.49 19.64 11.84C19.64 16.61 16.81 17.66 14.1 17.94C14.52 18.31 14.89 19.01 14.89 20.08C14.89 21.64 14.87 22.93 14.87 23.42C14.87 23.72 15.09 24.07 15.69 23.96C20.46 22.38 24 17.88 24 12.5C24 5.87 18.63 0.5 12 0.5Z" fill="#D2D2D2"/>
                            </svg>
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
      <div className="body-overlay"></div>
     
      {loading && <Loader />}
      <header>
         <div className="tp-header-2-area">
            <div className="container">
               <div className="tp-header-border tp-header-spacing">
                  <div className="row align-items-center">
                     <div className="col-4 col-xl-2">
                        <div className="tp-header-logo">
                           <a href="/"><img src="/img/logo/logo-white.png" alt=""/></a>
                        </div>
                     </div>
                     <div className="col-lg-6 d-none d-xl-block">
                        <div className="tp-main-menu">
                           <nav className="tp-mobile-menu-active">
                              <ul>
                                 <li className="/a"><Link to="/">Home</Link></li>
                                 <li><Link to="/about">About</Link></li>
                                 <li><Link to="/service">Service</Link></li>
                                 <li><Link to="/blog">Blog</Link></li>
                                 <li><Link to="/portfolio">Portfolio</Link></li>
                                 <li><Link to="/contact">Contact</Link></li>
                                 <li className="signIn-signUp-offcanvas-btn"><Link onClick={handelSignIn} to="">SignIn/SignUp</Link></li>
                              </ul>
                           </nav>
                        </div>
                     </div>
                     <div className="col-8 col-xl-4">
                        <div className="tp-header-btn text-end">
                           <Link onClick={handelSignIn}  className="tp-btn d-none d-sm-inline-block" to="">SignIn/SignUp</Link>
                           <button className="tp-header-bar tp-offcanvas-open-btn d-xl-none ml-10">
                              <span>
                                 <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.8808 10.2976H3.8808" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M21.8808 6.29756H3.8808" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M21.8808 14.2976H3.8808" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M21.8808 18.2976H3.8808" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                 </svg>
                              </span>
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </header>
    </>
  )
}

export default Header
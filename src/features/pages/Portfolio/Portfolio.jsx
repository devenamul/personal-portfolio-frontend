import { useEffect } from 'react';
import './Portfolio.css'
import Header from '../../compnent/Header/Header';
import Footer from '../../compnent/Footer/Footer';
import { Link } from 'react-router-dom';

const Portfolio = () => {

   useEffect(() => {
      const buttons = document.querySelectorAll(".filter-btn");
      const items = document.querySelectorAll(".portfolio-item");
  
      buttons.forEach(btn => {
        btn.addEventListener("click", () => {
          const filter = btn.getAttribute("data-filter");
  
          items.forEach(item => {
            if (filter === "all" || item.classList.contains(filter)) {
              item.classList.add("show");
            } else {
              item.classList.remove("show");
            }
          });
        });
      });
  
      return () => {
        buttons.forEach(btn => {
          btn.replaceWith(btn.cloneNode(true)); 
        });
      };
    }, [])


  return (
    <>
        
   
     <Header/>

      <main>
         
             
           <div className="container">
               <div className="row">
                  <div className="col">
                  <div className="row">
                     <div className="blog-information text-center mt-4 mb-2">
                        <p>Showcasing some of my best work</p>
                        <h2><span className="portfolio-post-top-heading">My Portfolio</span></h2>
                      </div>
                 <div className="row">
               </div>
               <div className="portfolio-fulter-button d-flex justify-content-center mb-4">
                  <button className="btn portfolio-button btn-outline-primary mx-2 filter-btn" data-filter="all">All</button>
                  <button className="btn portfolio-button btn-outline-primary mx-2 filter-btn" data-filter="html">HTML-CSS-JS</button>
                  <button className="btn portfolio-button btn-outline-primary mx-2 filter-btn" data-filter="node">Node</button>
                  <button className="btn portfolio-button btn-outline-primary mx-2 filter-btn" data-filter="react">React</button>
                  <button className="btn portfolio-button btn-outline-primary mx-2 filter-btn" data-filter="next">Next.js</button>
                </div>
            </div>
                 </div>
               </div>
          
           
            <div className="row" id="portfolio-container">

               <div className="col-md-4 mb-4 portfolio-item html-relation html show">
                  <img src="/img/portfolio/html-css-js-1.png" className="img-fluid w-100 h-100 project-info-img" alt="HTML Project 1"/>
                
                  <div className="html-absolute d-flex justify-content-center flex-column align-items-center">
                    <h4 className="project-info-name text-center mt-2">html css & js Project</h4>
                    <Link target="_blank" to="https://portfolio2-mu-murex.vercel.app/" className="project-info-preview portfolio-button d-block mt-2 text-decoration-none">Preview this project</Link>
                    <Link target="_blank" to="https://github.com/devenamul/portfolio2" className="project-info-githublink portfolio-button d-block mt-2 text-decoration-none">See gitHub link</Link>   
                  </div>
                </div>
                
                
              <div className="col-md-4 mb-4 portfolio-item html-relation react show ">
                <img src="/img/portfolio/react-1.png" className=" w-100 h-100 img-fluid project-info-img" alt="React Project 1"/>
                <div className="html-absolute d-flex justify-content-center flex-column align-items-center">
                  <h4 className="project-info-name text-center mt-2">React Project</h4>
                  <Link target="_blank" to="#" className="project-info-preview portfolio-button d-block mt-2 text-decoration-none">Preview this project</Link>
                  <Link target="_blank" to="https://github.com/devenamul/personal-portfolio" className="project-info-githublink portfolio-button d-block mt-2 text-decoration-none">See gitHub link</Link>   
                </div>
              </div>

              <div className="col-md-4 mb-4 portfolio-item node show html-relation">
                <img src="/img/portfolio/nodejs-1.png" className=" w-100 h-100 img-fluid project-info-img" alt="Node Project 1"/>
                <div className="html-absolute d-flex justify-content-center flex-column align-items-center">
                  <h4 className="project-info-name text-center mt-2">Node Project</h4>
                  <Link target='_blank' to="https://constractor-project.onrender.com/" className="project-info-preview portfolio-button d-block mt-2 text-decoration-none">Preview this project</Link>
                  <Link target='_blank' to="https://github.com/devenamul/constractor-project" className="project-info-githublink portfolio-button d-block mt-2 text-decoration-none">See gitHub link</Link>   
                </div>
              </div>

              <div className="col-md-4 mb-4 portfolio-item next show html-relation">
                <img src="/img/portfolio/next-1.png" className="w-100 h-100 img-fluid project-info-img" alt="Next Project 1"/>
                <div className="html-absolute d-flex justify-content-center flex-column align-items-center">
                  <h4 className="project-info-name text-center mt-2">Next Project</h4>
                  <Link target="_blank" to="https://dashbord-sepia.vercel.app/"  className="project-info-preview portfolio-button d-block mt-2 text-decoration-none">Preview this project</Link>
                  <Link target="_blank" to="https://github.com/devenamul/dashbord" className="project-info-githublink portfolio-button d-block mt-2 text-decoration-none">See gitHub link</Link>   
                </div>
              </div>
            </div>


            <div className="row">
               <div className="row">
                  <Footer/>
               </div>
            </div>
          </div>

      </main>
    </>
  )
}

export default Portfolio
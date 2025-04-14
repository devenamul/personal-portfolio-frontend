import React from 'react'
import './SinglePage.css'
import { useLocation } from 'react-router-dom';
import Footer from '../../compnent/Footer/Footer';

const SinglePage = () => {
  const location = useLocation();
  const { img, date, title, dsc } = location.state || {};

  return (
    <div className="container py-2">
      <div className="row mt-2 justify-content-center">
        <div className="col-lg-10">
         <div className="row">
          <div className="col-md-12">
            <div className="row">
                <div className="col-md-10 d-flex justify-content-center">
                    <img className="singleBlogImg" src={img} alt="Blog Post" />
                </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                  <div className="blog-text mt-3">
                      <button className="date-btn">Date: {date}</button>
                      <h3 className="text-white">{title}</h3>
                      <div
                        className="text-white"
                        dangerouslySetInnerHTML={{ __html: dsc }}
                      />
                  </div>
              </div>
            </div>
          </div>
         </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SinglePage;

import { Link } from 'react-router-dom';
import Footer from '../../compnent/Footer/Footer';
import Header from '../../compnent/Header/Header';

import './Blog.css';

const blogData = [
  {
    id: "mern-stack",
    img: '/img/blog/post/post-2.jpg',
    date: '02/12/2025',
    title: 'Why MERN Stack is the Best ?',
    dsc: `<strong>✅ Single Language (JavaScript) Use:-</strong></br>
The biggest advantage of MERN Stack is that it is entirely JavaScript-based. From frontend to backend to database, everything uses JavaScript, making development faster and easier. </br> </br>

<strong>✅ React.js – Fast & Dynamic Frontend:-</strong> </br>
With React.js, you can build fast, responsive, and dynamic UIs. Its component-based architecture allows code reusability. </br> </br>

<strong>✅ Node.js & Express.js – High Performance Backend</strong> </br>
Thanks to Node.js’s asynchronous nature and Express.js being a lightweight framework, it’s easy to build fast and scalable servers. Creating APIs is also very straightforward. </br> </br>

<strong>✅ MongoDB – Flexible NoSQL Database:-</strong></br>
MongoDB is a document-based NoSQL database that uses a JSON-like structure. It is scalable, flexible, and integrates seamlessly with JavaScript. </br> </br>

<strong>✅ Full Stack Development Easily Possible:-</strong> </br>
With MERN Stack, you can handle everything from frontend to backend to database as a single developer – a true one-man army! </br> </br>

<strong>✅ Open Source & Community Support:-</strong> </br>
All technologies in MERN Stack are open source and have large developer communities, so support and resources are easily available. </br> </br>

<strong>✅ Real-time Projects & Job Market:-</strong> </br>
Many big companies and startups use MERN Stack. There is a high demand for MERN developers in both freelancing and job markets. </br> </br>`,
  }
];

const Blog = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <div className="row mt-3">
            <div className="blog-information text-center mt-3 mb-4">
              <p>Check out my latest blog posts</p>
              <h2><span className="blog-post-top-heading">My Blog</span></h2>
            </div>

            {blogData.map((blog) => (
              <div className="col-md-4 mb-4" key={blog.id}>
                <div className="card blog-card w-100">
                  <div className="position-relative">
                    <img
                      src={blog.img}
                      className="card-img-top bg-transparent border-0"
                      alt="..."
                    />
                    <button className="btn btn-success position-absolute bottom-0 start-0 text-white">
                      {blog.date}
                    </button>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title text-white text-truncate">{blog.title}</h5>
                    <div
                      className="card-text blog-post-pra truncate-multiline"
                      dangerouslySetInnerHTML={{ __html: blog.dsc }}
                    />

                    <Link to={`/blog/${blog.id}`} state={blog} className="card-button">
                      Read More Post
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Blog;

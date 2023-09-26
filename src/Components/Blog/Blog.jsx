import React from 'react';
import './Blog.css';
import BlogImage from '../../assets/blog/blog.jpg';

function Blog() {
  return (
    <>
      <section id="blog">
        <div className="container">
            <div className="blog_wrapper">
                <div className="blog_col">
                    <h3>WE HELP BUSINESS LAUNCH, GROW AND SUCCESS</h3>
                    <p>Business development & planning expertise to help your business thrive. Contact us today! Tailored, innovative solutions to set the stage for your success. Reach out to us today! Diverse Talent Pool. Strong & Stable Market. Low Corporate Taxes.</p>
                    <div className="btn_wrapper">
                        <a className="btn" href="/">Get Started</a>
                    </div>
                </div>
                <div className="blog_col">
                    <div className="blog_image">
                        <img src={BlogImage} alt="blog_image" />
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Blog;

import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";

import "./blog.scss";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Blog = ({ post, customStyle, aosAnimation }) => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div className={`blog ${customStyle} mb-4`} data-aos={aosAnimation}>
      <div className="blog-header">
        <span className="blog-techno">{post.technology}</span>
      </div>
      <div className="blog-body">
        <h3 className="blog-title">{post.title}</h3>
        <p className="blog-description">{post.description}</p>
      </div>
      <div className="blog-footer d-flex align-items-center justify-content-between">
        <Link to={`/blogs/blog/${post.id}`} className="more-about-me">
          Learn More
          <span>
            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
          </span>
        </Link>
        <a href="!#" className="read-time">
          <span>{post.time}</span>
          <span> min read</span>
        </a>
      </div>
    </div>
  );
};

export default Blog;

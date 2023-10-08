import React from "react";
import "./Blog.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const Blog = (props) => {
    console.log(props)
  const {
    authorName,
    blogTitle,
    blogCoverImage,
    readTime,
    publishDate,
    authorImage,
  } = props.blog;

  return (
    <div className="blog">
      <div className="cover-img">
        <img src={blogCoverImage} alt="" />
      </div>
      <div className="author">
        <div className="author-info">
          <img src={authorImage} alt="" />
          <div className="author-name">
            <h5>{authorName}</h5>
            <p>
              <small>{publishDate}</small>
            </p>
          </div>
        </div>
        <p>
          <small>
            {readTime} mins read{" "}
            <FontAwesomeIcon
              icon={faBookmark}
              size="sm"
              style={{ color: "#404244" }}
            />
          </small>
        </p>
      </div>
      <div className="title">
        <h2>{blogTitle}</h2>
        <button onClick={()=> }> Mark as read</button>
      </div>
    </div>
  );
};

export default Blog;

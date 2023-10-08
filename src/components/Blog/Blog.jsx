import React from "react";
import "./Blog.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import toast, { Toaster } from 'react-hot-toast';
const notify = () => toast.success('Bookmark Added');

const Blog = (props) => {
    const showToastAndExecuteFunction = () => {
        // Show a toast notification
        notify('This is a success message');
    
    
        // Call your other function here
        bookMark(props.blog);
      };
  const {
    authorName,
    blogTitle,
    blogCoverImage,
    readTime,
    publishDate,
    authorImage,
  } = props.blog;
  const markRead = props.markRead;
  const bookMark = props.bookMark;

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
            <FontAwesomeIcon onClick={showToastAndExecuteFunction}
              icon={faBookmark}
              
            />
            
          </small>
        </p>
        <Toaster />
      </div>
      <div className="title">
        <h2>{blogTitle}</h2>
        <button onClick={()=> {markRead(props.blog)}} >  Mark as read</button>
        
      </div>

    </div>
  );
};

export default Blog;

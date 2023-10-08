import React, { useEffect, useState } from 'react';
import './Blogs.css'
import Blog from '../Blog/Blog';
const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [count, setCount] = useState([])
    const[bookmark, setBookmark] = useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    const markRead = (blog) => {
        const newRead = [...count, blog]
        setCount(newRead)
       

    }
    const bookMark = (blog) => {
        const newRead = [...bookmark, blog]
        setBookmark(newRead)
       

    }
    let totalCount = 0;
    
    for (const blog of count){
        totalCount = totalCount + blog.readTime;

    }
    


    return (
        <div className="blogs">
         <div>
         {
                blogs.map(blog => <Blog
                key={blog.id}
                blog={blog}
                markRead={markRead}
                bookMark={bookMark}
                ></Blog> )
            }
            
         </div>
         <div className="total-time">
            <h3>Spent time on read: {totalCount} min </h3>

            <h4>bookmarked bolgs: {bookmark.length} </h4>
            <div>
               {
                bookmark.map(bookmark => <h3>{bookmark.blogTitle}</h3>)
               }
            </div>
         </div>
        </div>
    );
};

export default Blogs;
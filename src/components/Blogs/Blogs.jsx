import React, { useEffect, useState } from 'react';
import './Blogs.css'
import Blog from '../Blog/Blog';
const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [count, setCount] = useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    const markRead = (blog) => {
        const newRead = [...count, blog]
        setCount(newRead)
       

    }
    return (
        <div className="blogs">
         <div>
         {
                blogs.map(blog => <Blog
                key={blog.id}
                blog={blog}
                markRead={markRead}
                ></Blog> )
            }
            
         </div>
         <div className="total-time">
            <h3>Spent time on read: </h3>
         </div>
        </div>
    );
};

export default Blogs;
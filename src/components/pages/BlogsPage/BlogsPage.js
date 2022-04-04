import React, { useEffect, useState } from "react";
import "./Blogs.css";
import BlogsData from "../../utilities/BlogsData";
import Blog from "../../Blog/Blog";

const BlogsPage = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        setBlogs(BlogsData);
    }, []);
    return (
        <section className="blog-wrapper">
            <h2 className="blog-title">Blogs</h2>
            <div className="blog-row">
                {blogs.map((blog) => (
                    <Blog key={blog.id} blog={blog} />
                ))}
            </div>
        </section>
    );
};

export default BlogsPage;

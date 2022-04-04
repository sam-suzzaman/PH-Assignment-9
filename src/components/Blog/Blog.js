import "./blog.css";
const Blog = (props) => {
    const { title, des } = props.blog;
    return (
        <div className="blog">
            <h3 className="blog-question">{title}</h3>
            <p className="blog-answer">{des}</p>
        </div>
    );
};

export default Blog;

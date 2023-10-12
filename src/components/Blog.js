import './Blog.css';
import {blogs} from './data.js';


function Blog() {

    function Comp1(props) {
        let blog = props.blog;
        return (
            <div className="blog-box">
            <div className="blog-img">
                <img src={blog.img} alt="blog_photo"/>
            </div>
            <div className="blog-info">
                <p className='p1'>{blog.titel}</p>
                <p className='p2'>{blog.discription}</p>
                <a href="#" className='p3'>{"Continue Reading"}</a>
            </div>
            <p className='theme'>{blog.theme}</p>
            </div>
        );
    }
    
    const blog_list = blogs.map((blog)=>{
        return (
            <Comp1 key={blog.key} blog= {blog}/>
        );
    })

    return (
        <>
            <div className="blog_header header" >
                <p className="heading">{"#Read us"}</p>
                <p className="subheading">{"Wanna Know some about new fashion style"}</p>
            </div>
            <div className='blog_container'>
            {blog_list}
            </div>
            
        </>
    );
}

export default Blog;
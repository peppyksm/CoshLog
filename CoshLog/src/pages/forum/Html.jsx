import HeaderNav from "../compnent/HeaderNav";
import ForumPostList from "../compnent/ForumPostList";
import "../compnent/HeaderNav.css";
import "../compnent/PostList.css";
import { useNavigate } from "react-router";
import Post from "../compnent/Post";




function Html() {

    let navigate = useNavigate();

    const posts = JSON.parse(localStorage.getItem("posts")) || [];

    const htmlPosts = posts.filter((post) => {
        return post.ctg1 === "fe" && post.ctg2 === "html";
    });

    return (

        <div className="forumPage">
            <div className="header">
                <h1>FE / HTML</h1>
            </div>
            {HeaderNav()}
            {ForumPostList()}

            <Post ctg1 = "fe" ctg2 = "html"/>



        </div>
    )
}


export default Html;
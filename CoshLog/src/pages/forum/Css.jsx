import HeaderNav from "../compnent/HeaderNav";
import ForumPostList from "../compnent/ForumPostList";
import "../compnent/HeaderNav.css";
import "../compnent/PostList.css";
import Post from "../compnent/Post";


function Css() {

    const posts = JSON.parse(localStorage.getItem("posts")) || [];

    const cssPosts = posts.filter((post) => {
        return post.ctg1 === "fe" && post.ctg2 === "css";
    });

    return (

        <div className="forumPage">
            <div className="header">
                <h1>FE / CSS</h1>
            </div>
            {HeaderNav()}
            {ForumPostList()}

            <Post ctg1 = "fe" ctg2 = "css"/>
        </div>
    )
}


export default Css;
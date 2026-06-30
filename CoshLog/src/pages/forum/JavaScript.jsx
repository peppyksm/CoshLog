import HeaderNav from "../compnent/HeaderNav";
import ForumPostList from "../compnent/ForumPostList";
import "../compnent/HeaderNav.css";
import "../compnent/PostList.css";
import Post from "../compnent/Post";




function JavaScript() {
    return (

        <div className="forumPage">
            <div className="header">
                <h1>FE / JavaScript</h1>
            </div>
            {HeaderNav()}
            {ForumPostList()}
            <Post ctg1 = "fe" ctg2 = "javaScript"/>
        </div>
    )
}


export default JavaScript;
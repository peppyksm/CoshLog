import HeaderNav from "../compnent/HeaderNav";
import ForumPostList from "../compnent/ForumPostList";
import "../compnent/HeaderNav.css";
import "../compnent/PostList.css";
import Post from "../compnent/Post";




function React() {
    return (

        <div className="forumPage">
            <div className="header">
                <h1>FE / React</h1>
            </div>
            {HeaderNav()}
            {ForumPostList()}
            <Post ctg1 = "fe" ctg2 = "react"/>
        </div>
    )
}


export default React;
import HeaderNav from "../compnent/HeaderNav";
import ForumPostList from "../compnent/ForumPostList";
import "../compnent/HeaderNav.css";
import "../compnent/PostList.css";
import Post from "../compnent/Post";



function Go() {
    return (

        <div className="forumPage">
            <div className="header">
                <h1>BE / Go</h1>
            </div>
            {HeaderNav()}
            {ForumPostList()}
            
            <Post ctg1 = "be" ctg2 = "go"/>
        </div>
    )
}


export default Go;
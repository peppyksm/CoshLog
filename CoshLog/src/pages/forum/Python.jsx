import HeaderNav from "../compnent/HeaderNav";
import ForumPostList from "../compnent/ForumPostList";
import "../compnent/HeaderNav.css";
import "../compnent/PostList.css";
import Post from "../compnent/Post";




function Python() {
    return (

        <div className="forumPage">
            <div className="header">
                <h1>BE / Python</h1>
            </div>
            {HeaderNav()}
            {ForumPostList()}
            <Post ctg1 = "be" ctg2 = "python"/>
        </div>
    )
}


export default Python;
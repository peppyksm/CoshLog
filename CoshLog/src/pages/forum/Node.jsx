import HeaderNav from "../compnent/HeaderNav";
import ForumPostList from "../compnent/ForumPostList";
import "../compnent/HeaderNav.css";
import "../compnent/PostList.css";



function Node() {
    return (

        <div className="forumPage">
            <div className="header">
                <h1>BE / Node.js</h1>
            </div>
            {HeaderNav()}
            {ForumPostList()}
        </div>
    )
}


export default Node;
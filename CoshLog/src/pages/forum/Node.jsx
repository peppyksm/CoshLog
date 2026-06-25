import HeaderNav from "../compnent/HeaderNav";
import PostList from "../compnent/PostList";
import "../compnent/HeaderNav.css";
import "../compnent/PostList.css";



function Node() {
    return (

        <div className="forumPage">
            <div className="header">
                <h1>BE / Node.js</h1>
            </div>
            {HeaderNav()}
            {PostList()}
        </div>
    )
}


export default Node;
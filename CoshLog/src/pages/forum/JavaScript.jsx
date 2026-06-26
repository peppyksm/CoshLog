import HeaderNav from "../compnent/HeaderNav";
import ForumPostList from "../compnent/ForumPostList";
import "../compnent/HeaderNav.css";
import "../compnent/PostList.css";



function JavaScript() {
    return (

        <div className="forumPage">
            <div className="header">
                <h1>FE / JavaScript</h1>
            </div>
            {HeaderNav()}
            {ForumPostList()}
        </div>
    )
}


export default JavaScript;
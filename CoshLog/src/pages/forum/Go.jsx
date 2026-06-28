import HeaderNav from "../compnent/HeaderNav";
import ForumPostList from "../compnent/ForumPostList";
import "../compnent/HeaderNav.css";
import "../compnent/PostList.css";



function Go() {
    return (

        <div className="forumPage">
            <div className="header">
                <h1>BE / Go</h1>
            </div>
            {HeaderNav()}
            {ForumPostList()}
        </div>
    )
}


export default Go;
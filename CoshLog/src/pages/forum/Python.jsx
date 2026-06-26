import HeaderNav from "../compnent/HeaderNav";
import ForumPostList from "../compnent/ForumPostList";
import "../compnent/HeaderNav.css";
import "../compnent/PostList.css";



function Python() {
    return (

        <div className="forumPage">
            <div className="header">
                <h1>BE / Python</h1>
            </div>
            {HeaderNav()}
            {ForumPostList()}
        </div>
    )
}


export default Python;
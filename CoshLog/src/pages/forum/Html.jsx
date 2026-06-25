import HeaderNav from "../compnent/HeaderNav";
import PostList from "../compnent/PostList";
import "../compnent/HeaderNav.css";
import "../compnent/PostList.css";



function Html() {
    return (

        <div className="forumPage">
            <div className="header">
                <h1>FE / HTML</h1>
            </div>
            {HeaderNav()}
            {PostList()}
        </div>
    )
}


export default Html;
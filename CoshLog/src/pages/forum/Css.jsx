import HeaderNav from "../compnent/HeaderNav";
import PostList from "../compnent/PostList";
import "../compnent/HeaderNav.css";
import "../compnent/PostList.css";



function Css() {
    return (

        <div className="forumPage">
            <div className="header">
                <h1>FE / CSS</h1>
            </div>
            {HeaderNav()}
            {PostList()}
        </div>
    )
}


export default Css;
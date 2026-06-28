
import ForumPostList from "./compnent/ForumPostList";
import HeaderNav from "./compnent/HeaderNav";



function TeamPrivate() {
    return (
        <div className="teamPage" >
            <div className="header">
                <h1>? Team 전용 작업실</h1>
            </div>
            {HeaderNav()}
            {ForumPostList()}
        </div>
    )
}

export default TeamPrivate;
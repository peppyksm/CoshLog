
import ForumPostList from "./compnent/ForumPostList";
import HeaderNav from "./compnent/HeaderNav";
import "./TeamPrivate.css"
import { useNavigate } from "react-router";
import TeamList from "./compnent/TeamList";


function TeamPrivate() {
    let navigate = useNavigate();
    return (
        <div className="teamPage" >
            <div className="header">
                <h1>팀 전용 작업실</h1>
            </div>
            {HeaderNav()}
            {/* {ForumPostList()} */}

            <div className="teamHeader">
                <h3>팀 목록</h3>
                <div className="post" onClick={() => { navigate("/createteam") }}>팀 생성</div>
            </div><hr />

                <TeamList />

        </div>
    )
}

export default TeamPrivate;
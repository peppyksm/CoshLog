import HeaderNav from "./compnent/HeaderNav";
import TeamPostList from "./TeamPostList";
import Post from "./compnent/Post";

function TeamRecruitment(){
    return(
        <div className="teamPage">
            <div className="header">
                <h1>Team / 구인&구직</h1>
            </div>
            {HeaderNav()}
            {TeamPostList()}

            <Post ctg1 = "team" ctg2 = "findPeople"/>
        </div>
    )
}

export default TeamRecruitment;
import HeaderNav from "./compnent/HeaderNav";
import TeamPostList from "./compnent/TeamPostList";

function TeamRecruitment(){
    return(
        <div className="teamPage">
            <div className="header">
                <h1>Team / 구인&구직</h1>
            </div>
            {HeaderNav()}
            {TeamPostList()}
        </div>
    )
}

export default TeamRecruitment;
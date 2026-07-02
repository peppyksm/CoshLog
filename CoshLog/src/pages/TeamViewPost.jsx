import { useNavigate, useParams } from "react-router";
import HeaderNav from "./compnent/HeaderNav";
import "./View.css";
import "./TeamPrivate.css";

function TeamViewPost() {
    const { teamId, postId } = useParams();
    const navigate = useNavigate();

    const teams = JSON.parse(localStorage.getItem("teams")) || [];
    const team = teams.find((item) => String(item.id) === String(teamId));

    const teamPosts = JSON.parse(localStorage.getItem("teamPosts")) || [];
    const post = teamPosts.find((item) => {
        return String(item.id) === String(postId) && String(item.teamId) === String(teamId);
    });

    const handleDelete = () => {
        const newPosts = teamPosts.filter((item) => {
            return !(String(item.id) === String(postId) && String(item.teamId) === String(teamId));
        });

        localStorage.setItem("teamPosts", JSON.stringify(newPosts));

        alert("삭제되었습니다.");
        navigate(`/team/${teamId}`);
    };

    if (!team || !post) {
        return (
            <div className="teamPage">
                <div className="header">
                    <h1>팀 게시글</h1>
                </div>
                {HeaderNav()}

                <div className="emptyTeamRoom">
                    <h2>글을 찾을 수 없습니다.</h2>
                    <button type="button" onClick={() => navigate(`/team/${teamId}`)}>게시판으로</button>
                </div>
            </div>
        );
    }

    return (
        <div className="forumPage">
            <div className="header">
                <h1>{team.teamName} / {post.ctg}</h1>
            </div>
            {HeaderNav()}

            <div style={{ margin: "3%" }}>
                <hr /><br />
                <div>
                    <div className="viewTitle">{post.title}</div>
                    <div className="viewInfo">
                        <div><span>{post.nickName || "게스트"}</span> | <span>{post.time ? new Date(post.time).toLocaleDateString() : ""}</span></div>
                        <div><span>팀 전용 게시글</span></div>
                    </div>
                </div>
                <br /><hr /><br />

                <div className="teamMemo">
                    {post.content}
                </div>

                <div className="viewBtnContainer">
                    <button onClick={() => navigate(`/team/${teamId}`)}>목록</button>
                    <button onClick={() => {
                        let isDelete = confirm("정말로 삭제하시겠습니까?");
                        if (isDelete == true) {
                            handleDelete();
                        }
                    }}>삭제</button>
                </div>
            </div>
        </div>
    );
}

export default TeamViewPost;

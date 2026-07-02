import { useParams, useNavigate } from "react-router";
import { useState } from "react";
import HeaderNav from "./compnent/HeaderNav";
import "./compnent/HeaderNav.css";
import "./compnent/PostList.css";
import "./TeamPrivate.css";


function TeamRoom() {
    const { teamId } = useParams();
    const navigate = useNavigate();
    const [postType, setPostType] = useState("all");

    const teams = JSON.parse(localStorage.getItem("teams")) || [];
    const team = teams.find((item) => String(item.id) === String(teamId));

    const teamPosts = JSON.parse(localStorage.getItem("teamPosts")) || [];

    const filteredPosts = teamPosts.filter((post) => {
        const sameTeam = String(post.teamId) === String(teamId);
        const sameType = postType === "all" || post.ctg === postType;

        return sameTeam && sameType;
    });

    if (!team) {
        return (
            <div className="teamPage">
                <div className="header">
                    <h1>팀 전용 작업실</h1>
                </div>
                {HeaderNav()}

                <div className="emptyTeamRoom">
                    <h2>팀을 찾을 수 없습니다.</h2>
                    <button type="button" onClick={() => navigate("/team/private")}>팀 목록으로</button>
                </div>
            </div>
        );
    }

    return (
        <div className="teamPage">
            <div className="header">
                <h1>{team.teamName} 전용 작업실</h1>
            </div>
            {HeaderNav()}

            <div className="teamRoomInfo">
                <p>{team.teamExplain || "팀 소개가 없습니다."}</p>
                <span>최대 인원수 : {team.maxNum} 명</span>
            </div>
            
            <div className="postList">
            <input type="radio" name="teamPostSelect" id="teamAll" defaultChecked onChange={() => { setPostType("all") }} />
            <input type="radio" name="teamPostSelect" id="teamGeneral" onChange={() => { setPostType("일반") }} />
            <input type="radio" name="teamPostSelect" id="teamInfo" onChange={() => { setPostType("정보") }} />
            <input type="radio" name="teamPostSelect" id="teamQna" onChange={() => { setPostType("질문") }} />



            <div className="postselectCont">
                <label htmlFor="teamAll"><div className="selectBTN teamAllBtn"><h2>전체글</h2></div></label>
                <label htmlFor="teamGeneral"><div className="selectBTN teamGeneralBtn" ><h2>일반</h2></div></label>
                <label htmlFor="teamInfo"><div className="selectBTN teamInfoBtn"><h2>정보</h2></div></label>
                <label htmlFor="teamQna"><div className="selectBTN teamQnaBtn"><h2>질문</h2></div></label>

                <div className="post" onClick={() => navigate(`/team/${teamId}/write`)}>글쓰기</div>
            </div>


            <hr />


            <div style={{ color: "gray" }}><span style={{ marginLeft: "3%" }}>카테고리</span><span style={{ marginLeft: "3%" }}>제목</span><span style={{ marginLeft: "60%" }}>작성자</span><span style={{ marginLeft: "10%" }}>날짜</span></div><hr />
        </div>



            {
                filteredPosts.length == 0 ? (
                    <div className="emptyTeamRoom">
                        <p>아직 작성된 글이 없습니다.</p>
                    </div>
                ) : filteredPosts.map((post) => (
                    <div className="postItem" key={post.id}>
                        <span style={{ marginLeft: "26%" }}>{post.ctg}</span>
                        <span
                            style={{ cursor: "pointer" }}
                            onClick={() => navigate(`/team/${teamId}/post/${post.id}`)}
                        >
                            {post.title || "제목 없음"}
                        </span>
                        <span>{post.nickName || "게스트"}</span>
                        <span>{post.time ? new Date(post.time).toLocaleDateString() : ""}</span>
                    </div>
                ))
            }
        </div>
    );
}

export default TeamRoom;

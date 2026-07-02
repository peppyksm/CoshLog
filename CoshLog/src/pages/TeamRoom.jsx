import { useParams, useNavigate } from "react-router";
import HeaderNav from "./compnent/HeaderNav";


function TeamRoom() {
    const { teamId } = useParams();
    const navigate = useNavigate();

    const teams = JSON.parse(localStorage.getItem("teams")) || [];
    const team = teams.find((item) => String(item.id) === String(teamId));

    const teamPosts = JSON.parse(localStorage.getItem("teamPosts")) || [];

    const filteredPosts = teamPosts.filter((post) => {
        return String(post.teamId) === String(teamId);
    });


    return (
        <div>
            <div className="header">
                <h1>{team.teamName} 전용 작업실</h1>
            </div>
            {HeaderNav()}
            
            <div className="postList">
            <input type="radio" name="postSelect" id="all" defaultChecked onChange={() => { changePostType("all") }} />
            <input type="radio" name="postSelect" id="general" onChange={() => { changePostType("일반") }} />
            <input type="radio" name="postSelect" id="info" onChange={() => { changePostType("정보") }} />
            <input type="radio" name="postSelect" id="qna" onChange={() => { changePostType("질문") }} />



            <div className="postselectCont">
                <label htmlFor="all"><div className="selectBTN allBtn"><h2>전체글</h2></div></label>
                <label htmlFor="general"><div className="selectBTN generalBtn" ><h2>일반</h2></div></label>
                <label htmlFor="info"><div className="selectBTN infoBtn"><h2>정보</h2></div></label>
                <label htmlFor="qna"><div className="selectBTN qnaBtn"><h2>질문</h2></div></label>

                <div className="post" onClick={() => navigate(`/team/${teamId}/write`)}>글쓰기</div>
            </div>


            <hr />


            <div style={{ color: "gray" }}><span style={{ marginLeft: "3%" }}>카테고리</span><span style={{ marginLeft: "3%" }}>제목</span><span style={{ marginLeft: "60%" }}>작성자</span><span style={{ marginLeft: "10%" }}>날짜</span></div><hr />
        </div>



            {
                filteredPosts.map((post) => (
                    <div className="postItem" key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                        <span>{new Date(post.time).toLocaleDateString()}</span>
                    </div>
                ))
            }
        </div>
    );
}

export default TeamRoom;
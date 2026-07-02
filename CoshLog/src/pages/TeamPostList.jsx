
import { useNavigate } from "react-router";


function TeamPostList() {

    let navigate = useNavigate();
    const changePostType = (postType) => {
        window.dispatchEvent(new CustomEvent("postTypeChange", { detail: postType }));
    }

    return (
        <div className="postList">
            <input type="radio" name="teampostSelect" id="all" defaultChecked onChange={() => { changePostType("all") }} />
            <input type="radio" name="teampostSelect" id="general" onChange={() => { changePostType("팀원 모집") }} />
            <input type="radio" name="teampostSelect" id="info" onChange={() => { changePostType("팀 찾기") }} />



            <div className="postselectCont">
                <label htmlFor="all"><div className="selectBTN allBtn"><h2>전체글</h2></div></label>
                <label htmlFor="general"><div className="selectBTN generalBtn"><h2>팀원 모집</h2></div></label>
                <label htmlFor="info"><div className="selectBTN infoBtn"><h2>팀 찾기</h2></div></label>

                <div className="post" onClick={()=>{navigate("/forum/write")}}>글쓰기</div>
            </div>


            <hr />


            <div style={{ color: "gray" }}><span style={{ marginLeft: "3%" }}>카테고리</span><span style={{ marginLeft: "3%" }}>제목</span><span style={{ marginLeft: "60%" }}>작성자</span><span style={{ marginLeft: "10%" }}>날짜</span></div><hr />
        </div>
    )
}

export default TeamPostList;


import { useNavigate } from "react-router";


function ForumPostList() {

    let navigate = useNavigate();
    const changePostType = (postType) => {
        window.dispatchEvent(new CustomEvent("postTypeChange", { detail: postType }));
    }

    return (
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

                <div className="post" onClick={()=>{navigate("/forum/write")}}>글쓰기</div>
            </div>


            <hr />


            <div style={{ color: "gray" }}><span style={{ marginLeft: "3%" }}>카테고리</span><span style={{ marginLeft: "3%" }}>제목</span><span style={{ marginLeft: "60%" }}>작성자</span><span style={{ marginLeft: "10%" }}>날짜</span></div><hr />
        </div>
    )
}

export default ForumPostList;

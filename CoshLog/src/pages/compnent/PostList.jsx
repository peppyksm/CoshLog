
function PostList() {
    return (
        <div className="postList">
            <input type="radio" name="postSelect" id="all" defaultChecked />
            <input type="radio" name="postSelect" id="general" />
            <input type="radio" name="postSelect" id="info" />
            <input type="radio" name="postSelect" id="qna" />



            <div className="postselectCont">
                <label htmlFor="all"><div className="selectBTN allBtn"><h2>전체글</h2></div></label>
                <label htmlFor="general"><div className="selectBTN generalBtn"><h2>일반</h2></div></label>
                <label htmlFor="info"><div className="selectBTN infoBtn"><h2>정보</h2></div></label>
                <label htmlFor="qna"><div className="selectBTN qnaBtn"><h2>질문</h2></div></label>

                <div className="post">글쓰기</div>
            </div>


            <hr />


            <div style={{ color: "gray" }}><span style={{ marginLeft: "3%" }}>카테고리</span><span style={{ marginLeft: "3%" }}>제목</span><span style={{ marginLeft: "60%" }}>작성자</span><span style={{ marginLeft: "10%" }}>날짜</span></div><hr />
        </div>
    )
}

export default PostList;
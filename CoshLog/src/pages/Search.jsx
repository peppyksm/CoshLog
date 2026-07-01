import HeaderNav from "./compnent/HeaderNav";
import { useNavigate } from "react-router";


function Search() {

    let navigate = useNavigate();
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    const searchValue = JSON.parse(localStorage.getItem("search"));

    const searchPosts = posts.filter((post) => {
    return post.title.includes(searchValue);
});

    return (


        <div className="forumPage">
            <div className="header">
                <h1>검색 </h1>
            </div>
            {HeaderNav()}
            <p style={{margin : "3%"}}>'{searchValue}' 의 검색결과</p>
            <div style={{ color: "gray" }}><span style={{ marginLeft: "3%" }}>카테고리</span><span style={{ marginLeft: "3%" }}>제목</span><span style={{ marginLeft: "60%" }}>작성자</span><span style={{ marginLeft: "10%" }}>날짜</span></div><hr />
            <div>
                {
                    searchPosts.map((post) => (
                        <div className="postItem" key={post.id}>
                            <span style={{ marginLeft: "26%" }}>{post.ctg3}</span>
                            <span style={{ cursor: "pointer" }} onClick={() => {
                                navigate(`/viewpost/${post.id}`);
                            }}>{post.title || "제목 없음"}</span>
                            {post.nickName == null ? (<span>게스트</span>) : (<span>{post.nickName}</span>)}

                            <span>
                                {post.time ? new Date(post.time).toLocaleDateString() : ""}
                            </span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Search;
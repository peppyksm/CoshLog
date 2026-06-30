import { useNavigate } from "react-router";




function Post({ ctg1, ctg2 }) {

    let navigate = useNavigate();
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    const ctgPosts = posts.filter((post) => {
        return post.ctg1 == ctg1 && post.ctg2 == ctg2;
    })

    return (

        <div>
            {
                ctgPosts.map((post) => (
                    <div className="postItem" key={post.id}>
                        <span style={{ marginLeft: "26%" }}>{post.ctg3}</span>
                        <span style={{cursor : "pointer"}} onClick={() => {
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
    )
}

export default Post;
import { useNavigate } from "react-router";




function Post({ ctg1, ctg2 }) {

    let navigate = useNavigate();
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    const ctgPosts = posts.filter((post) => {
        return post.ctg1 == ctg1 && post.ctg2 == ctg2;
    })
    const nickname = JSON.parse(localStorage.getItem("nickka"));

    return (

        <div>
            {
                ctgPosts.map((post) => (
                    <div className="postItem" key={post.id}>
                        <span style={{ marginLeft: "26%" }}>{post.ctg3}</span>
                        <span style={{ cursor: "pointer" }} onClick={() => {

                            if (post.nickName == nickname || post.isPrivate == false) {
                                const posts = JSON.parse(localStorage.getItem("posts")) || [];

                                const newPosts = posts.map((item) => {
                                    if (item.id == post.id) {
                                        return {
                                            ...item,
                                            viewPoint: Number(item.viewPoint || 0) + 1,
                                        };
                                    }

                                    return item;
                                });

                                localStorage.setItem("posts", JSON.stringify(newPosts));

                                navigate(`/viewpost/${post.id}`);
                            } else {
                                alert("비공개 글입니다.")
                            }

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
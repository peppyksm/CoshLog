import { useNavigate } from "react-router";




function CtgCard({ ctg1, ctg2 }) {

    let navigate = useNavigate();
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    const ctgPosts = posts.filter((post) => {
        return post.ctg1 == ctg1 && post.ctg2 == ctg2;
    })

    return (

        <div>
            {
                ctgPosts.map((post, indexOf) => (
                    <div className="cardTitle" key={post.id}>
                        {/* <span>{(indexOf + 1)} - </span> */}
                        <span style={{ cursor: "pointer"}} onClick={() => {
                            navigate(`/viewpost/${post.id}`);
                        }}> {post.title || "제목 없음"}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default CtgCard;
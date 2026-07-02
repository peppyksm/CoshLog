import HeaderNav from "./compnent/HeaderNav";
import "./View.css";
import { useNavigate } from "react-router";
import { useParams } from "react-router";



function ViewPost() {

    let navigate = useNavigate();
    const { id } = useParams();
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    const post = posts.find((item) => {
        return String(item.id) == String(id);
    })

    // const handleDelete = () =>{
    //     const newPosts = posts.filter((post) => post.id !== Number(id));

    //     localStorage.setItem("posts", JSON.stringify(newPosts));
    //     navigate("/"); 
    // }
    const handleDelete = () => {
        const newPosts = posts.filter((post) => {
            return String(post.id) !== String(id);
        });

        localStorage.setItem("posts", JSON.stringify(newPosts));

        alert('삭제되었습니다. 홈으로 이동합니다.')
        navigate("/");
        window.location.reload();
    };


    return (
        <div className="forumPage">
            <div className="header">
                <h1>{(post.ctg1).toUpperCase()} / {post.ctg2}</h1>
            </div>
            {HeaderNav()}

            <div style={{ margin: '3%' }}>

                <hr /><br />
                <div>
                    <div className="viewTitle">{post.title}</div>
                    <div className="viewInfo">
                        <div><span>{post.nickName}</span> | <span>2026.06.28</span></div>
                        <div><span>조회수 {post.viewPoint}</span> | <span>추천 0 </span> | 댓글 0</div>
                    </div>
                </div>
                <br /><hr /><br />



                {
                    ((post.ctg1 == "fe") || (post.ctg1 == "be")) ?
                        (
                            <div className="viewContainer">
                                <div className="viewCode">
                                    {post.code}
                                </div>
                                <div className="viewMemo">
                                    {post.memo}
                                </div>
                            </div>
                        ) : (
                            <div className="teamMemo">
                                {post.memo}
                            </div>
                        )
                }

                <div className="viewBtnContainer">
                    <button onClick={() => {
                        let isEdit = confirm("수정하러 가시겠습니까?")
                        if (isEdit == true) {

                            //수정창 가기
                        }

                    }}>수정</button>
                    <button onClick={() => {
                        let isDelete = confirm("정말로 삭제하시겠습니까?")
                        if (isDelete == true) {

                            handleDelete();
                        }
                    }}>삭제</button>
                </div>



            </div>


        </div>
    )

}

export default ViewPost;
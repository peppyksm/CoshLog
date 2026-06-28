import HeaderNav from "./compnent/HeaderNav";
import "./View.css";
import { useNavigate } from "react-router";



function ViewPost() {

    let navigate = useNavigate();

    return (
        <div className="forumPage">
            <div className="header">
                <h1>게시판 이름 ctg1, ctg2, ctg3</h1>
            </div>
            {HeaderNav()}

            <div style={{ margin: '3%' }}>

                <hr /><br />
                <div>
                    <div className="viewTitle">제목이 들어갈 곳</div>
                    <div className="viewInfo">
                        <div><span>닉네임</span> | <span>2026.06.28</span></div>
                        <div><span>조회수 0</span> | <span>추천 0 </span> | 댓글 0</div>
                    </div>
                </div>
                <br /><hr /><br />




                <div className="viewContainer">
                    <div className="viewCode">
                        코드내용이 들어갈 곳
                    </div>
                    <div className="viewMemo">
                        메모내용이 들어갈 곳
                    </div>
                </div>

                <div className="viewBtnContainer">
                    <button onClick={()=>{
                        let isEdit = confirm("수정하러 가시겠습니까?")
                        if(isEdit == true){
                            
                            //수정창 가기
                        }

                    }}>수정</button>
                    <button onClick={()=>{
                        let isDelete = confirm("정말로 삭제하시겠습니까?")
                        if(isDelete == true){

                            //객체배열 삭제 로직 넣기

                            navigate("/"); 
                        }
                    }}>삭제</button>
                </div>



            </div>


        </div>
    )

}

export default ViewPost;
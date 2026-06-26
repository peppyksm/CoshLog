
import HeaderNav from "./compnent/HeaderNav";
import "./Writeform.css";
import { useNavigate } from "react-router";


function Write() {

    let navigate = useNavigate();

    return (

        <div className="WritePage">
            <div className="header">
                <h1>작성</h1>
            </div>
            {HeaderNav()}

            <form style={{ margin: "3%" }}>
                <select name="writeCtg" id="writeCtg">
                    <option value="fe">FE</option>
                    <option value="be">BE</option>
                </select>

                <select name="writeFe" id="writeFe">
                    <option value="html">HTML</option>
                    <option value="css">CSS</option>
                    <option value="javaScript">JavaScript</option>
                    <option value="react">React</option>
                </select>

                <select name="writeBe" id="writeBe">
                    <option value="java">JAVA</option>
                    <option value="node.js">Node.js</option>
                    <option value="python">Python</option>
                    <option value="go">Go</option>
                </select><br />


                <input type="text" name="title" id="title" placeholder="제목을 입력하세요." />
                <span style={{ marginLeft: "30%" }}>비공개 작성 <input type="checkbox" id="privateCheck" /></span><br />


                <textarea name="" id="writeCode" placeholder="//코드를 입력하세요"></textarea>
                <textarea name="" id="writeMemo" placeholder="//메모를 입력하세요"></textarea>

                <button type="submit" onClick={() => {

                    // let id = 1;
                    // let post = {
                    //     id: 0,
                    //     ctg1: document.getElementById("writeCtg").value,
                    //     ctg2: document.getElementById("writeFe").value,
                    //     title: document.getElementById("title").value,
                    //     code: document.getElementById("writeCode").value,
                    //     memo: document.getElementById("writeMemo").value,
                    //     isPrivate: document.getElementById("privateCheck").value,
                    //     time: Date.now()
                    // }

                    // let post = {
                    //     id,
                    //     ctg1,
                    //     ctg2,
                    //     title,
                    //     code,
                    //     memo,
                    //     isPrivate,
                    //     time
                    // }

// 포럼 데이터

// id                      글 번호
// ctg1 		카테고리1(FE, BE)
// ctg2		 카테고리2(HTML, CSS, JS, React)
// ctg3 		카테고리3(질문, 정보)
// title 		제목 
// code  		코드내용
// memo     	 메모내용
// time        	작성시간

// isPrivate   	공개여부체크박스


                    // console.log(post.id);
                    // console.log(post.memo);


                    alert("게시 되었습니다")
                    navigate("/forum/fe/html");
                }} id="submitBtn">작성</button>
            </form>


        </div>
    )
}

export default Write;
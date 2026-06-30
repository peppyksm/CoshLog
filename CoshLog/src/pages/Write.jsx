import HeaderNav from "./compnent/HeaderNav";
import "./Writeform.css";
import { useNavigate } from "react-router";
import { useState } from "react";

function Write() {
    const navigate = useNavigate();

    const [writeCtg, setWriteCtg] = useState("fe");
    const [ctg2, setCtg2] = useState("html");
    const [ctg3, setCtg3] = useState("일반");

    const [title, setTitle] = useState("");
    const [code, setCode] = useState("");
    const [memo, setMemo] = useState("");
    const [isPrivate, setIsPrivate] = useState(false);

    const nickName = JSON.parse(localStorage.getItem("nickka"));

    const handleCtgChange = (event) => {
        const value = event.target.value;

        setWriteCtg(value);

        if (value === "fe") {
            setCtg2("html");
        } else if (value == "be"){
            setCtg2("java");
        } else{
            setCtg2("recruitment")
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        let posts = JSON.parse(localStorage.getItem("posts")) || [];

        let post = {
            id: Date.now(),
            ctg1: writeCtg,
            ctg2: ctg2,
            ctg3: ctg3,
            title: title,
            code: code,
            memo: memo,
            isPrivate: isPrivate,
            time: new Date().toISOString(),
            nickName: nickName
        };

        posts.unshift(post);
        localStorage.setItem("posts", JSON.stringify(posts));

        alert("게시 되었습니다 ( + 10Exp 획득! )");

        // navigate(`/forum/${writeCtg}/${ctg2}`);
        navigate(`/viewpost/${post.id}`);
    };

    return (
        <div className="WritePage">
            <div className="header">
                <h1>작성</h1>
            </div>

            <HeaderNav />

            <form style={{ margin: "3%" }} onSubmit={handleSubmit}>
                <select name="writeCtg" id="writeCtg" value={writeCtg} onChange={handleCtgChange}>
                    <option value="fe">FE</option>
                    <option value="be">BE</option>
                    <option value="team">Team</option>
                </select>

                {
                    writeCtg == "fe" ? (
                        <select name="ctg2" id="ctg2" value={ctg2} onChange={(event) => setCtg2(event.target.value)}>
                            <option value="html">HTML</option>
                            <option value="css">CSS</option>
                            <option value="javaScript">JavaScript</option>
                            <option value="react">React</option>
                        </select>



                    ) :
                        writeCtg == "be" ? (
                            < select name="ctg2" id="ctg2" value={ctg2} onChange={(event) => setCtg2(event.target.value)}>
                                <option value="java">JAVA</option>
                                <option value="node">Node</option>
                                <option value="python">Python</option>
                                <option value="go">Go</option>
                            </select>

                        ) :
                            (< select name="ctg2" id="ctg2" value={ctg2} onChange={(event) => setCtg2(event.target.value)}>
                                <option value="recruitment">팀원 모집/팀 찾기</option>
                            </select>
                            )

                }
                {
                    writeCtg != "team" && (
                        <select name="ctg3" id="ctg3" value={ctg3} onChange={(event) => setCtg3(event.target.value)} >
                            <option value="일반">일반</option>
                            <option value="질문">질문</option>
                            <option value="정보">정보</option>
                        </select>
                    )
                }

                <br />

                <input type="text" name="Writetitle" id="Writetitle" placeholder="제목을 입력하세요." value={title} onChange={(event) => setTitle(event.target.value)} />

                <span style={{ marginLeft: "30%" }}> 비공개 작성{" "}
                    <input type="checkbox" id="privateCheck" checked={isPrivate} onChange={(event) => setIsPrivate(event.target.checked)} />
                </span>

                <br /><br /><hr />


                {
                    (writeCtg == "fe" || writeCtg == "be") ? (
                        <div>
                            <textarea name="writeCode" id="writeCode" placeholder="//코드를 입력하세요" value={code} onChange={(event) => setCode(event.target.value)} ></textarea>
                            <textarea name="writeMemo" id="writeMemo" placeholder="//메모를 입력하세요" value={memo} onChange={(event) => setMemo(event.target.value)} ></textarea>
                        </div>
                    ) : (
                        <div>
                            <textarea name="writeMemo" id="writeMemo2" placeholder="//내용을 입력하세요" value={memo} onChange={(event) => setMemo(event.target.value)} ></textarea>
                        </div>
                    )


                }



                {/* <textarea name="writeCode" id="writeCode" placeholder="//코드를 입력하세요" value={code} onChange={(event) => setCode(event.target.value)} ></textarea>
                <textarea name="writeMemo" id="writeMemo" placeholder="//메모를 입력하세요" value={memo} onChange={(event) => setMemo(event.target.value)} ></textarea> */}

                <button type="submit" id="submitBtn"> 작성 </button>
            </form>
        </div >
    );
}

export default Write;
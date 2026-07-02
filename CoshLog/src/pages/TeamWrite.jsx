import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import HeaderNav from "./compnent/HeaderNav";
import "./Writeform.css";
import "./TeamPrivate.css";

function TeamPostWrite() {
    const { teamId } = useParams();
    const navigate = useNavigate();

    const [ctg, setCtg] = useState("일반");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [isPrivate, setIsPrivate] = useState(false);

    const userData = JSON.parse(localStorage.getItem("user"));
    const userIndex = JSON.parse(localStorage.getItem("index"));
    const nickName = userData && userData[userIndex] ? userData[userIndex].nickName : "게스트";

    const handleSubmit = (event) => {
        event.preventDefault();

        const teamPosts = JSON.parse(localStorage.getItem("teamPosts")) || [];

        const newPost = {
            id: Date.now(),
            teamId: Number(teamId),
            ctg: ctg,
            title: title,
            content: content,
            isPrivate: isPrivate,
            time: new Date().toISOString(),
            nickName: nickName
        };

        teamPosts.unshift(newPost);
        localStorage.setItem("teamPosts", JSON.stringify(teamPosts));

        alert("게시 되었습니다.");
        navigate(`/team/${teamId}`);
    };

    return (
        <div className="WritePage">
            <div className="header">
                <h1>팀 글 작성</h1>
            </div>

            <HeaderNav />

            <form style={{ margin: "3%" }} onSubmit={handleSubmit}>
                <select name="teamCtg" id="writeCtg" value={ctg} onChange={(event) => setCtg(event.target.value)}>
                    <option value="일반">일반</option>
                    <option value="정보">정보</option>
                    <option value="질문">질문</option>
                </select>

                <br />

                <input
                    type="text"
                    name="Writetitle"
                    id="Writetitle"
                    placeholder="제목을 입력하세요."
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    required
                />

                <span style={{ marginLeft: "30%" }}> 비공개 작성{" "}
                    <input
                        type="checkbox"
                        id="privateCheck"
                        checked={isPrivate}
                        onChange={(event) => setIsPrivate(event.target.checked)}
                    />
                </span>

                <br /><br /><hr />

                <textarea
                    name="writeMemo"
                    id="writeMemo2"
                    placeholder="//내용을 입력하세요"
                    value={content}
                    onChange={(event) => setContent(event.target.value)}
                    required
                ></textarea>

                <button type="submit" id="submitBtn">작성</button>
            </form>
        </div>
    );
}

export default TeamPostWrite;

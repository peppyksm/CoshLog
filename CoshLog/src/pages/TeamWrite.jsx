import { useState } from "react";
import { useParams, useNavigate } from "react-router";

function TeamPostWrite() {
    const { teamId } = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const teamPosts = JSON.parse(localStorage.getItem("teamPosts")) || [];

        const newPost = {
            id: Date.now(),
            teamId: Number(teamId),
            title: title,
            content: content,
            time: Date.now()
        };

        teamPosts.push(newPost);
        localStorage.setItem("teamPosts", JSON.stringify(teamPosts));

        navigate(`/team/${teamId}`);
    };

    return (
        <div>
            <h2>팀 글 작성</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="제목"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />

                <br /><br />

                <textarea
                    placeholder="내용"
                    value={content}
                    onChange={(event) => setContent(event.target.value)}
                ></textarea>

                <br /><br />

                <button type="submit">작성 완료</button>
            </form>
        </div>
    );
}

export default TeamPostWrite;
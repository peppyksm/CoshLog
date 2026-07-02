import HeaderNav from "./compnent/HeaderNav";
import { useState } from "react";
import { useNavigate } from "react-router";
import "./TeamPrivate.css";

function CreateTeam() {

    let navigate = useNavigate();

    const [teamName, setTeamName] = useState("");
    const [teamExplain, setTeamExplain] = useState("");
    const [maxNum, setMaxNum] = useState("1");

    const handleSubmit = (event) => {
        event.preventDefault();

        let teams = JSON.parse(localStorage.getItem("teams")) || [];

        let team = {
            id: Date.now(),
            teamName: teamName,
            teamExplain: teamExplain,
            maxNum: maxNum
        };

        teams.push(team);

        localStorage.setItem("teams", JSON.stringify(teams));

        setTeamName("");
        setTeamExplain("");
        setMaxNum("1");

        alert("팀 생성 완료")
        navigate("/team/private")
    };

    return (
        <div className="teamPage">
            <div className="header">
                <h1>팀 전용 작업실</h1>
            </div>

            {HeaderNav()}

            <h3 style={{ margin: "2%" }}>팀 생성</h3>
            <hr />

            <div className="createTeamCont">
                <form onSubmit={handleSubmit}>
                    팀 이름 :
                    <input
                        type="text"
                        id="teamName"
                        value={teamName}
                        onChange={(event) => setTeamName(event.target.value)}
                    />
                    <br /><br />

                    팀 소개 :
                    <textarea
                        name="teamExplain"
                        id="teamExplain"
                        value={teamExplain}
                        onChange={(event) => setTeamExplain(event.target.value)}
                    ></textarea>
                    <br /><br />

                    최대 인원수 :
                    <select
                        name="maxNum"
                        id="maxNum"
                        value={maxNum}
                        onChange={(event) => setMaxNum(event.target.value)}
                    >
                        <option value="1">1 명</option>
                        <option value="2">2 명</option>
                        <option value="3">3 명</option>
                        <option value="4">4 명</option>
                        <option value="5">5 명</option>
                        <option value="6">6 명</option>
                    </select>

                    <br /><br />
                    <hr />

                    <button type="submit" id="teamSubmit">
                        팀 생성
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CreateTeam;

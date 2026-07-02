import { useNavigate } from "react-router";


function TeamList() {
    let navigate = useNavigate();
    const teams = JSON.parse(localStorage.getItem("teams")) || [];

    return (
        <div className="teamListContainer">
            {
                teams.map((team, index) => {
                    return (
                        <div className="teamBox" key={index} onClick={() => {
                            navigate(`/team/${team.id}`);
                        }}>
                            <h1>{team.teamName}</h1><hr /><br />
                            <p>{team.teamExplain}</p>
                            <p>{team.maxNum}</p>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default TeamList;
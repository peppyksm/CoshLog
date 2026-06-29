import { useNavigate } from 'react-router'
import { useState, useEffect } from 'react';
import profileImg from '../../image/캡처.PNG';
import "./Sidebar.css"

function Sidebar() {
    let navigate = useNavigate()
    const [forumOpen, setForumOpen] = useState(false);
    const [feOpen, setFeOpen] = useState(false);
    const [beOpen, setBeOpen] = useState(false);
    const [gameOpen, setGameOpen] = useState(false);
    const [teamOpen, setTeamOpen] = useState(false);
    const [rankOpen, setRankOpen] = useState(false);
    const [nickName, setNickName] = useState('');
    const [imageView, setImageView] = useState(null);

    useEffect(() => {
        const savedNick = localStorage.getItem('name');
        if (savedNick) {
            setNickName(JSON.parse(savedNick));
        }
        const savedImage = localStorage.getItem('image');
        if (savedImage) {
            setImageView(JSON.parse(savedImage));
        }
    })


    return (
        <aside className="sidebar dark">

            <div className="sidebarTop">
                <h1 className="logo" onClick={() => { navigate("/") }}>CoshLog</h1>

                <div
                    className="login"
                    onClick={() => {
                        navigate("/login")
                    }}
                >
                    <h2>로그인</h2>
                </div>

                <div className="profileCard" onClick={() => { navigate("/mypage") }}>
                    <div className="userInfo">
                        <img src={imageView} id="photo" alt="profile" />

                        <div className="infoText">
                            <h3>{nickName || '게스트'}</h3>
                            <h4>Lv.300</h4>
                        </div>
                    </div>

                    <div className="target">
                        <div className="achievement"></div>
                    </div>

                    <p id="targetText">오늘의 목표치 3/10</p>
                </div>

                <input
                    id="searchAll"
                    type="text"
                    placeholder="Search all posts"
                />
            </div>

            <nav className="category">
                <div className="forum">
                    <div
                        className="category-title"
                        onClick={() => {
                            setForumOpen(prev => !prev);
                        }}
                    >
                        {forumOpen ? "△" : "▽"} 포럼
                    </div>

                    {forumOpen && (
                        <div className="forum ctg">
                            <div className="fe">
                                <div
                                    className="category-title"
                                    onClick={() => {
                                        setFeOpen(prev => !prev);
                                    }}
                                >
                                    {feOpen ? "△" : "▽"} FE
                                </div>

                                {feOpen && (
                                    <div className="fe ctg">
                                        <p onClick={() => navigate("/forum/fe/html")}>- HTML</p>
                                        <p onClick={() => navigate("/forum/fe/css")}>- CSS</p>
                                        <p onClick={() => navigate("/forum/fe/javascript")}>- JavaScript</p>
                                        <p onClick={() => navigate("/forum/fe/react")}>- React</p>
                                    </div>
                                )}
                            </div>

                            <div className="be">
                                <div
                                    className="category-title"
                                    onClick={() => {
                                        setBeOpen(prev => !prev);
                                    }}
                                >
                                    {beOpen ? "△" : "▽"} BE
                                </div>

                                {beOpen && (
                                    <div className="be ctg">
                                        <p onClick={() => navigate("/forum/be/java")}>- JAVA</p>
                                        <p onClick={() => navigate("/forum/be/node")}>- Node.js</p>
                                        <p onClick={() => navigate("/forum/be/python")}>- Python</p>
                                        <p onClick={() => navigate("/forum/be/go")}>- Go</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                <div className="minigame" onClick={() => {
                    setGameOpen(!gameOpen);
                }}>
                    {gameOpen ? "△" : "▽"} 미니게임
                    {gameOpen && (
                        <div className="game ctg">
                            <p onClick={() => { navigate("/game/blankgame") }}>빈칸 맞추기</p>
                        </div>
                    )}

                </div>

                <div className="teamP" onClick={() => {
                    setTeamOpen(!teamOpen);
                }}>
                    {teamOpen ? "△" : "▽"} 팀 프로젝트
                    {teamOpen && (
                        <div className="team ctg">
                            <p onClick={() => { navigate("/team/recruitment") }}>구인/구직</p>
                            <p onClick={() => { navigate("/team/private") }}>팀 전용 작업실</p>

                        </div>
                    )}

                </div>

                <div className="ranking" onClick={() => {
                    setRankOpen(!rankOpen);
                }}>
                    {rankOpen ? "△" : "▽"} 랭킹
                    {rankOpen && (
                        <div className="rank ctg">
                            <p onClick={() => { navigate("/rank/level") }}>레벨 랭킹</p>
                        </div>
                    )}

                </div>
            </nav>

        </aside>
    )
}

export default Sidebar
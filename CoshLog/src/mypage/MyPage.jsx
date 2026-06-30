import './MyPage.css';
import React, { useState, useEffect } from 'react';
function MyPage() {
    useEffect(() => {
        localStorage.setItem('nickka', JSON.stringify(nickName));
    });
    const [nickName, setNickName] = useState(() => {
        const savedNick = localStorage.getItem('nickka');
        if (savedNick != '') {
            return (JSON.parse(savedNick));
        } else {
            return ('');
        }
        // return savedNick ? JSON.parse(savedNick) : '';
    })
    useEffect(() => {
        localStorage.setItem('image', JSON.stringify(imageView));
    })
    const [imageFile, setImageFile] = useState(null);
    const [imageView, setImageView] = useState(() => {
        const savedImage = localStorage.getItem('image');
        if (savedImage != null) {
            return (JSON.parse(savedImage));
        }
        // if (savedImage != '') {
        //     return (JSON.parse(savedImage))
        // } else {
        //     return ('');
        // }
    });
    const imageChange = (event) => {
        const profileImg = event.target.files[0];
        if (profileImg) {
            setImageFile(profileImg);
        }
        const reader = new FileReader();
        reader.onloadend = () => {
            setImageView(reader.result);
        }
        reader.readAsDataURL(profileImg);
        window.location.reload();
    }
    return (
        <div className='myPage_container'>
            <form className='myPage_form' onSubmit={(event) => {
                event.preventDefault();
            }}>
                <div className='myPage_box'>
                    <h1 className='myPage_text_title'>마이 페이지</h1>
                    <div className='myPage_line'></div>
                    <div className='myPage_profileArea'>
                        {imageView && (
                            <img className='myPage_img_profile' src={imageView} />
                        )}
                        <div className='myPage_profileArea1'>
                            <label for='changeImg'>
                                <span id='chnIMG'>사진 변경</span>
                            </label>
                            <input type='file' id='changeImg' className='myPage_btn_chnImg' accept='image/*' onChange={imageChange}></input>
                            <span>닉네임: <span>{nickName || '없음'}</span></span>
                            <span>현재 레벨: LV.30</span>
                            <span>칭호 : 주니어 모험가</span>
                            <span>골드비치 현피 전적 0승 1패</span>
                            <span>보유 스킬 : 달팽이 던지기</span>
                        </div>
                        <button className='myPage_btn_chnNick' onClick={() => {
                            const newNick = prompt();
                            if (newNick != '' && newNick.trim() != '') {
                                setNickName(newNick);
                                window.location.reload();
                            } else if (newNick == '' || newNick.trim() == '') {
                                alert('공백은 사용하실 수 없습니다.');
                            }
                        }}>닉네임 변경</button>
                    </div>
                    <div className='myPage_line1'></div>
                    <div className='myPage_badgeArea'>
                        <h3 className='myPage_text_main'>보유 뱃지</h3>
                        <div className='myPage_badgeImgArea'>
                            <img className='myPage_img_badge' src='https://static.wikia.nocookie.net/maplestorym/images/4/45/%EB%AA%AC%EC%8A%A4%ED%84%B0_%EB%A7%88%EB%85%B8.png/revision/latest/thumbnail/width/360/height/450?cb=20180201154835&path-prefix=ko' />
                            <img className='myPage_img_badge' src='https://i.namu.wiki/i/C-9ZpgUm8WmFFs0i-h2SJKWjkErdXTWgEcJSI3NQGCx5LSOXwkxSvxImOwe4lkHnqHJUT0K_TuZyaMRTBJDZyQ.webp' />
                            <img className='myPage_img_badge' src='https://i.namu.wiki/i/saCN7RitpGX_i9kdIAWLfwYg_XCXW8piTqn4Vw8YOF_d3Fh3EUzU81gOXPiVVJSf5y08cj_zHKfhoVJjuoAmqw.webp' />
                            <img className='myPage_img_badge' src='https://cdn.gamemeca.com/trees/0001/399/026/gm716075_cm_171015_ktj_300.jpg' />
                        </div>
                    </div>
                    <div className='myPage_line1'></div>
                    <div className='myPage_dailyArea'>
                        <div className='myPage_dailyArea1'>
                            <h3 className='myPage_text_mainDaily'>매일 목표 설정</h3>
                            <span className='myPage_text_daily1'>일일 퀴즈 풀기</span>
                            <span className='myPage_text_daily2'>질문 글 작성</span>
                        </div>
                        <div className='myPage_dailyArea2'>
                            <span className='myPage_text_daily'><input className='myPage_inputText_daily1' type='text'></input>회</span>
                            <span className='myPage_text_daily'><input className='myPage_inputText_daily2' type='text'></input>회</span>
                        </div>
                        <div className='myPage_dailyArea3'>
                            <button className='myPage_btn_daily' onClick={() => {
                                alert('목표가 저장되었습니다.');
                            }}>목표 저장</button>
                        </div>
                    </div>
                    <div className='myPage_line1'></div>
                    <div className='myPage_chnPWArea'>
                        <h3 className='myPage_text_chnPW'>비밀번호 변경</h3>
                        <span className='myPage_text_chnPW1'>새 비밀번호</span>
                        <input className='myPage_inputText_chnPW' type='password'></input>
                        <button className='myPage_btn_chnPW' onClick={() => {
                            alert('비밀번호가 수정되었습니다.');
                        }}>비밀번호 수정</button>
                    </div>
                </div>
            </form >
        </div >
    );
}
export default MyPage;
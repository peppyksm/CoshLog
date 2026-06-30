import './MyPage.css';
import React, { useState, useEffect } from 'react';
function MyPage() {
    useEffect(() => {
        localStorage.setItem('nickName', JSON.stringify(nickName));
    });
    const [nickName, setNickName] = useState(() => {
        const savedNick = localStorage.getItem('nickName');
        if (savedNick != '') {
            return (JSON.parse(savedNick));
        } else {
            return ('');
        }
        // return savedNick ? JSON.parse(savedNick) : '';
    })
    const [imageFile, setImageFile] = useState(null);

    const [imageView, setImageView] = useState(() => {
        const savedImage = localStorage.getItem('image');

        if (savedImage && savedImage !== "undefined") {
            return JSON.parse(savedImage);
        }

        return "";
    });

    useEffect(() => {
        if (imageView !== undefined) {
            localStorage.setItem('image', JSON.stringify(imageView));
        }
    }, [imageView]);

    const imageChange = (event) => {
        const profileImg = event.target.files[0];

        if (!profileImg) return;

        setImageFile(profileImg);

        const reader = new FileReader();

        reader.onloadend = () => {
            setImageView(reader.result);
        };

        reader.readAsDataURL(profileImg);

        setTimeout(()=>{window.location.reload();}, 10);
        
    };
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
                            <label htmlFor='changeImg'>
                                <span id='chnIMG'>사진 변경</span>
                            </label>
                            <input type='file' id='changeImg' className='myPage_btn_chnImg' accept='image/*' onChange={imageChange}></input>
                            <span>닉네임: <span>{nickName || '없음'}</span></span>
                            <span>현재 레벨: LV.300</span>
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
                            <img className='myPage_img_badge' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeSfQ4x3I6CTEt5PzhNWeng4BUsrCg2OBE2OARMBcnvg&s=10' />
                            <img className='myPage_img_badge' src='https://cdn-icons-png.flaticon.com/512/4209/4209019.png' />
                            <img className='myPage_img_badge' src='https://img.icons8.com/color/1200/warranty.jpg' />
                            <img className='myPage_img_badge' src='https://cdn-icons-png.flaticon.com/512/771/771273.png' />
                        </div>
                    </div>
                    <div className='myPage_line1'></div>
                    <div className='myPage_dailyArea'>
                        <h3 className='myPage_text_mainDaily'>매일 목표 설정</h3>
                        <div>
                            <span className='myPage_text_daily2'>질문 글 작성</span>
                            <span className='myPage_text_daily'><input className='myPage_inputText_daily1' type='text'></input>회</span>
                        </div>
                        <div>
                            <span className='myPage_text_daily1'>정보 글 작성</span>
                            <span className='myPage_text_daily'><input className='myPage_inputText_daily2' type='text'></input>회</span>
                        </div>
                        <div>
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
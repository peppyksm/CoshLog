import './Register.css';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { Form } from 'react-bootstrap';
function Register() {
    let navigate = useNavigate();
    const userDataSet = () => {
        const userDatas = JSON.parse(localStorage.getItem('user')) || [];
        const userData = {
            name: document.getElementById('userName').value,
            nickName: document.getElementById('userNickName').value,
            email: document.getElementById('userEmail').value,
            id: document.getElementById('userId').value,
            pw: document.getElementById('userPw').value,
            isTeamAvailable: false,
            image: '',
            dailyQuest: 0,
            dailyQuestDo: 0,
            level: 1,
            exp: 0,
            needExp: 50
        }
        userDatas.push(userData);
        localStorage.setItem('user', JSON.stringify(userDatas));
        alert('가입이 완료되었습니다.');
        navigate('/');
    }

    return (
        <div className='register_box'>
            <form className='register_form' onSubmit={(event) => {
                event.preventDefault();
            }}>
                <p id='title' style={{ marginBottom: '3%', marginTop: '3%' }}>회원가입</p>
                <div id='line'></div>
                <div className='register_inputBox'>
                    <div className='register_inputNameBox'>
                        <p>이름</p>
                        <p>닉네임</p>
                        <p>이메일</p>
                        <p>아이디</p>
                        <p>비밀번호</p>
                    </div>
                    <div className='register_inputTextBox'>
                        <input type='text' placeholder='이름을 입력하세요.' id='userName'></input>
                        <input type='text' placeholder='닉네임을 입력하세요.' id='userNickName'></input>
                        <input type='email' placeholder='이메일을 입력하세요.' id='userEmail'></input>
                        <input type='text' placeholder='아이디를 입력하세요.' id='userId'></input>
                        <input type='password' placeholder='비밀번호를 입력하세요.' id='userPw'></input>
                    </div>
                </div>
                <div id='line'></div>
                <div className='register_checkbox'>
                    <div className='register_checkbox1'>
                        <input type='checkbox' id='checkBox1'></input>
                        <span id='checklist'>서비스 이용약관 동의</span>
                    </div>
                    <div className='register_checkbox2'>
                        <input type='checkbox' id='checkBox2' style={{ marginLeft: '10%' }}></input>
                        <span id='checklist'>개인정보 처리방침 동의</span>
                    </div>
                </div>
                <div id='line'></div>
                <div className='register_btn_complete'>
                    <button id='button' onClick={() => {
                        if (document.getElementById('userName').value.trim() == '') {
                            alert('이름을 입력하세요!');
                            return;
                        }
                        if (document.getElementById('userNickName').value.trim() == '') {
                            alert('닉네임을 입력하세요!');
                            return;
                        }
                        if (document.getElementById('userEmail').value.trim() == '') {
                            alert('이메일을 입력하세요!');
                            return;
                        }
                        if (document.getElementById('userId').value.trim() == '') {
                            alert('아이디를 입력하세요!');
                            return;
                        }
                        if (document.getElementById('userPw').value.trim() == '') {
                            alert('비밀번호를 입력하세요!');
                            return;
                        }
                        if (document.getElementById('checkBox1').checked == false) {
                            alert('서비스 이용약관에 동의해주세요!');
                            return;
                        }
                        if (document.getElementById('checkBox2').checked == false) {
                            alert('개인정보 처리방침에 동의해주세요!');
                            return;
                        }
                        userDataSet();
                    }}>가 입 하 기</button>
                </div>
            </form >
        </div >
    );
}
export default Register;
import Register from '../register/Register';
import './Login.css';
import { useNavigate } from 'react-router';
function Login() {
    let navigate = useNavigate();
    return (
        <div className='login_box'>
            <form className='login_form'>
                <p id='title' style={{ marginBottom: '3%', marginTop: '3%' }}>로그인</p>
                <div id='line'></div>
                <div className='login_inputBox'>
                    <div className='login_inputNameBox'>
                        <p>아이디</p>
                        <p>비밀번호</p>
                    </div>
                    <div className='login_inputTextBox'>
                        <input type='text'></input>
                        <input type='password'></input>
                    </div>
                </div>
                <div className='login_loginBtnBox'>
                    <button onClick={() => {
                        alert('로그인 성공!');
                        navigate('/');
                    }}>로그인</button>
                </div>
                <div id='or'>
                    <p>or</p>
                </div>
                <div className='login_socialLoginBox'>
                    <img id='img1' onClick={() => {
                        alert('구글 계정으로 로그인되었습니다.');
                        navigate('/');
                    }} src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/3840px-Google_%22G%22_logo.svg.png' />
                    <img id='img2' onClick={() => {
                        alert('네이버 계정으로 로그인되었습니다.');
                        navigate('/');
                    }} src='https://static.wikia.nocookie.net/logopedia/images/d/d8/Naver_icon_2018.svg/revision/latest/scale-to-width-down/200?cb=20210322150331' />
                </div>
                <div className='login_findBox'>
                    <span onClick={() => {
                        alert('아이디는 찾을 수 없습니다.\n\n\n이용해주셔서 감사합니다.');
                    }}>아이디 찾기</span>
                    <span onClick={() => {
                        navigate('/register');
                    }}>회원가입</span>
                </div>
            </form>
        </div>
    );
}
export default Login;
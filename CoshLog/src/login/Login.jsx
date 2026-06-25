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
                        <input type='text'></input>
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
                    <button><img id='img1' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/3840px-Google_%22G%22_logo.svg.png' />구글 로그인</button>
                    <button><img id='img2' src='https://static.wikia.nocookie.net/logopedia/images/d/d8/Naver_icon_2018.svg/revision/latest/scale-to-width-down/200?cb=20210322150331' />네이버 로그인</button>
                </div>
                <div className='login_findBox'>
                    <span>아이디 찾기</span>
                    <span onClick={() => {
                        navigate('/register');
                    }}>회원가입</span>
                </div>
            </form>
        </div>
    );
}
export default Login;
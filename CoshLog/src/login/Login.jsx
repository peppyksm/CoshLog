import './Login.css';
function Login() {
    return (
        <div className='container'>
            <form>
                <div className='form'>
                    <p className='loginTitle'>로그인</p>
                    <div className='line'></div>
                    <input className='login_inputID' type='text' placeholder="아이디 입력"></input>
                    <input className='login_inputPW' type='password' placeholder="비밀번호 입력"></input>
                    <button className='btn_login'>로그인 버튼</button>
                    <p>OR</p>
                    <button className='btn_login_naver'>
                        <img style={{ width: '20%' }} src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNjA2MTRfMjk2%2FMDAxNzgxMzcwODc3Nzgw.7MoG5UIDbDH4M0qAlU-UZhSyIxlzBm9hZi8MllM0oigg.fakJf3dwYPbsdG-c6mV_pt0d-leS0w5bKAnJn1rC2w8g.GIF%2F1.gif&type=sc960_832_gif' />
                        네이버 로그인
                    </button>
                    <button className='btn_login_google'>
                        <img style={{ width: '20%' }} src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNjA2MTRfMjk2%2FMDAxNzgxMzcwODc3Nzgw.7MoG5UIDbDH4M0qAlU-UZhSyIxlzBm9hZi8MllM0oigg.fakJf3dwYPbsdG-c6mV_pt0d-leS0w5bKAnJn1rC2w8g.GIF%2F1.gif&type=sc960_832_gif' />
                        구글 로그인
                    </button>
                    <button className='btn_findID'>아이디 찾기</button>
                    <button className='btn_reg'>회원가입</button>
                </div>
            </form>
        </div>
    );
}

export default Login;
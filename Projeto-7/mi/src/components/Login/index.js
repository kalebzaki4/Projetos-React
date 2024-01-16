import Favicon from '../../assets/favicon.png'

function Login() {
    return (
        <div className="container">
            <div className="container-login">
                <div className="wrap-login">
                    <form className="login-form">
                        <span className="login-form-title">Faça Login!</span>
                        <span className="login-form-title"><img src={Favicon} /></span>

                        <div className='wrap-input'>
                            <input type='email' />
                            <span className='focus-input'></span>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login
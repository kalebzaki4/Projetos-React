import './style.css'
import { useState } from 'react'

function Login() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    return (
        <>
            <div className="container">
                <div className="wrap-login">
                    <form className="login-form">
                        <span className="login-form-title">Já tem uma conta?</span>
                        <span className='login-form-title-2'>Faça seu login e boa analise!</span>

                        <div className='wrap-input'>
                            <input className={name !== "" ? 'has-val input' : 'input'} type='name' value={name} onChange={e => setName(e.target.value)} />
                            <span className='focus-input' data-placeholder="Usuario"></span>
                        </div>

                        <div className='wrap-input'>
                            <input className={password !== "" ? 'has-val input' : 'input'} type='password' value={password} onChange={e => setPassword(e.target.value)} />
                            <span className='focus-input' data-placeholder="Password"></span>
                        </div>

                        <div className="container-login-form-btn">
                            <button className="login-form-btn">Entrar</button>
                        </div>

                        <div className="text-center">
                            <span className="txt1">Não possui conta?</span>

                            <a className="txt2" href="#">Criar conta.</a>
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
}

export default Login
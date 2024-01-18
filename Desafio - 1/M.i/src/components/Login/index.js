import './style.css'
import { useState } from 'react'
import LogoGrafico from '../../assets/Logo-Grafico.png'

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <>
            <div className="container">
                <div className="wrap-login">
                    <form className="login-form">
                        <span className="login-form-title">Já tem uma conta?</span>
                        <span className='login-form-title-2'>Faça seu login e boa analise!</span>

                        <div className='wrap-input'>
                            <input className={email !== "" ? 'has-val input' : 'input'} type='email' value={email} onChange={e => setEmail(e.target.value)} />
                            <span className='focus-input' data-placeholder="Email"></span>
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
            <section className='signup-invite'>
                <h1 className='txt-direita'>Ainda não conhece o site?</h1>
                <h4 className='txtzinho-direita'>Conheça mais de 5 utilidades do nosso site:</h4>
                <div className='categorias'>
                    <div className='quadradinho'>
                        <p className='descricao'>testando em...</p>
                    </div>
                    <div className='quadradinho'>
                        <div className='background-img'><img className='img-descricao' width={35} height={35} src={LogoGrafico}/><br/></div>
                        <span className='descricao-ex'>exemplo:</span> <br/>
                        <p className='descricao'>GRAFICOS</p> <br/>
                        <p className='descricao'>Analise seus dados pelos graficos do site</p>
                    </div>
                    <div className='quadradinho'>
                        <p className='descricao'>testando em...</p>
                    </div>
                    <div className='quadradinho'>
                        <p className='descricao'>testando em...</p>
                    </div>
                    <div className='quadradinho'>
                        <p className='descricao'>testando em...</p>
                    </div>
                    <div className='quadradinho'>
                        <p className='descricao'>testando em...</p>
                    </div>
                    <div className='quadradinho'>
                        <p className='descricao'>testando em...</p>
                    </div>
                    <div className='quadradinho'>
                        <p className='descricao'>testando em...</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Login
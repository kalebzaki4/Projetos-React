import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './style.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email.trim() || !password.trim()) {
            setError('Por favor, preencha todos os campos.');
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            if (response.ok) {
                // Login bem-sucedido
                navigate('/dashboard');
            } else {
                // Login falhou
                const data = await response.json();
                setError(data.msg || 'Ocorreu um erro ao efetuar o login. Tente novamente.');
            }
        } catch (error) {
            setError('Ocorreu um erro ao efetuar o login. Tente novamente.');
        }
    };

    return (
        <>
            <div className="container">
                <div className="wrap-login">
                    <form className="login-form" onSubmit={handleLogin}>
                        <span className="login-form-title">Já tem uma conta?</span>
                        <span className="login-form-title-2">Faça seu login e boa análise!</span>

                        <div className="wrap-input">
                            <input
                                className={email.trim() !== '' ? 'has-val input' : 'input'}
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="E-mail"
                            />
                            <span className="focus-input"></span>
                        </div>

                        <div className="wrap-input">
                            <input
                                className={password.trim() !== '' ? 'has-val input' : 'input'}
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                            />
                            <span className="focus-input"></span>
                            <div className="password-icon">
                                {showPassword ? (
                                    <FaEyeSlash
                                        className="eye-icon"
                                        onClick={() => setShowPassword(!showPassword)}
                                    />
                                ) : (
                                    <FaEye
                                        className="eye-icon"
                                        onClick={() => setShowPassword(!showPassword)}
                                    />
                                )}
                            </div>
                        </div>

                        <div className="container-login-form-btn">
                            <button className="login-form-btn" type="submit">
                                Entrar
                            </button>
                        </div>

                        {error && <div className="error-message">{error}</div>}

                        <div className="text-center">
                            <span className="txt1">Não possui conta?</span>
                            <Link className="txt2" to="/signup">
                                Criar conta.
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;

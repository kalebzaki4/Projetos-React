import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import '../../pages/Login/style.css';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    const handleSignup = async (e) => {
        e.preventDefault();

        if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
            setError('Por favor, preencha todos os campos.');
            return;
        }

        if (password !== confirmPassword) {
            setError('As senhas não coincidem. Tente novamente.');
            return;
        }

        try {
            const response = await fetch('/api/proxy', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                // Adicionando o novo usuário ao estado local
                const newUser = { id: Date.now(), email, password };
                setUsers([...users, newUser]);

                setSuccessMessage('Conta criada com sucesso! Redirecionando para o login...');
                setTimeout(() => {
                    navigate('/');
                }, 2000);
            } else {
                setError('Ocorreu um erro ao criar a conta. Tente novamente.');
            }
        } catch (error) {
            setError('Ocorreu um erro ao criar a conta. Tente novamente.');
        }
    };

    return (
        <>
            <div className="container">
                <div className="wrap-login">
                    <form className="login-form" onSubmit={handleSignup}>
                        <span className="login-form-title">Crie sua conta</span>
                        <span className="login-form-title-2">Insira os detalhes abaixo</span>

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
                                placeholder="Senha"
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

                        <div className="wrap-input">
                            <input
                                className={confirmPassword.trim() !== '' ? 'has-val input' : 'input'}
                                type={showConfirmPassword ? 'text' : 'password'}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Confirme a senha"
                            />
                            <span className="focus-input"></span>
                            <div className="password-icon">
                                {showConfirmPassword ? (
                                    <FaEyeSlash
                                        className="eye-icon"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    />
                                ) : (
                                    <FaEye
                                        className="eye-icon"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    />
                                )}
                            </div>
                        </div>

                        <div className="container-login-form-btn">
                            <button className="login-form-btn" type="submit">
                                Criar Conta
                            </button>
                        </div>

                        {error && <div className="error-message">{error}</div>}
                        {successMessage && <div className="success-message">{successMessage}</div>}

                        <div className="text-center">
                            <span className="txt1">Já possui uma conta?</span>
                            <Link className="txt2" to="/">
                                Fazer login.
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Signup;

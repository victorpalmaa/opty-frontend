import React from 'react';
import './LoginPage.css'; // Importando nosso CSS

// 1. Recebemos 'irParaRegistro' E 'irParaOnboarding' do App.js
function LoginPage({ irParaRegistro, irParaOnboarding }) {
    return (
        <div className="login-container">

            {/* Coluna da Esquerda */}
            <div className="login-info-panel">
                <h1>Opty</h1>
                <p>Encontre os melhores preços em um só lugar</p>
                <ul>
                    <li>✓ Compare preços de milhares de produtos</li>
                    <li>✓ Receba alertas de promoções</li>
                    <li>✓ Economize tempo e dinheiro</li>
                </ul>
            </div>

            {/* Coluna da Direita */}
            <div className="login-form-panel">
                <h2>Bem-Vindo de volta</h2>
                <p className="login-subtitle">Entre para continuar sua busca</p>

                {/* 2. Adicionamos 'onSubmit' ao form para impedir recarregamento */}
                <form onSubmit={(e) => e.preventDefault()}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" />

                    <label htmlFor="senha">Senha</label>
                    <input type="password" id="senha" />

                    <div className="login-form-options">
                        <div className="login-remember-me">
                            <input type="checkbox" id="lembrar" />
                            <label htmlFor="lembrar">Lembrar de mim</label>
                        </div>
                        <a href="#">Esqueci minha senha</a>
                    </div>

                    {/* 3. Botão agora é 'type="button"' e chama 'irParaOnboarding' */}
                    <button type="button" onClick={irParaOnboarding}>
                        Entrar
                    </button>
                </form>

                <div className="login-signup-link">
                    <p>Ainda não tem uma conta?
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault(); // Impede o link de recarregar a página
                                irParaRegistro();   // Chama a função que troca a tela
                            }}
                        >
                            Cadastre-se gratuitamente
                        </a>
                    </p>
                </div>
            </div>

        </div>
    );
}

export default LoginPage;
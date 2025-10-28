import React from 'react';
import './OnboardingPage.css'; // Importando o CSS

// 1. Recebemos a função 'irParaHome' do App.js
function OnboardingPage({ irParaHome }) {
    return (
        // Um 'overlay' cinza para cobrir a tela inteira
        <div className="onboarding-overlay">

            {/* O card branco centralizado */}
            <div className="onboarding-container">

                <p className="onboarding-step">Passo 1 de 3</p>

                <h2>Personalize sua experiência</h2>
                <p className="onboarding-subtitle">Isso nos ajudará a encontrar as melhores ofertas para você</p>

                {/* A barra de progresso */}
                <div className="onboarding-progress-bar">
                    <div className="onboarding-progress-fill"></div>
                </div>

                <h3>Quais categorias você mais compra?</h3>
                <p className="onboarding-subtitle">Selecione todas que se aplicam</p>

                {/* O grid de categorias */}
                <div className="onboarding-grid">
                    <div className="onboarding-category-item"></div>
                    <div className="onboarding-category-item"></div>
                    <div className="onboarding-category-item"></div>
                    <div className="onboarding-category-item"></div>
                    <div className="onboarding-category-item"></div>
                    <div className="onboarding-category-item"></div>
                    <div className_name="onboarding-category-item"></div>
                    <div className="onboarding-category-item"></div>
                    <div className="onboarding-category-item"></div>
                    <div className="onboarding-category-item"></div>
                    <div className="onboarding-category-item"></div>
                    <div className="onboarding-category-item"></div>
                </div>

                {/* Os botões de navegação no rodapé */}
                <div className="onboarding-footer">
                    <button className="onboarding-back-btn">Voltar</button>

                    {/* 2. A MUDANÇA ESTÁ AQUI: Adicionamos o onClick */}
                    <button className="onboarding-next-btn" onClick={irParaHome}>
                        Próximo
                    </button>
                </div>

            </div>
        </div>
    );
}

export default OnboardingPage;
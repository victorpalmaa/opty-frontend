import React from 'react';
import './UserMenu.css'; // Importando o CSS

// Recebemos a função 'onClose' do HomePage
function UserMenu({ onClose }) {
    return (
        <div>
            {/* O overlay escuro por trás. Clicar nele fecha o menu */}
            <div className="user-menu-overlay" onClick={onClose}></div>

            {/* O menu em si, que desliza da direita */}
            <div className="user-menu-sidebar">

                {/* Seção do Perfil */}
                <div className="user-profile-section">
                    <div className="user-avatar">JS</div>
                    <div className="user-info">
                        <h4>João Silva</h4>
                        <p>joao@email.com</p>
                    </div>
                </div>

                {/* Seção dos Links */}
                <nav className="user-menu-nav">
                    <a href="#">
                        <span>👤</span> Meu Perfil
                    </a>
                    <a href="#">
                        <span>📜</span> Histórico de Buscas
                    </a>
                    <a href="#">
                        <span>❤️</span> Favoritos
                    </a>
                    <a href="#">
                        <span>🔔</span> Alertas de Preço
                    </a>
                    <a href="#">
                        <span>⚙️</span> Configurações
                    </a>
                </nav>

                {/* Seção de Sair */}
                <div className="user-menu-logout">
                    <a href="#">
                        <span className="logout-icon"></span> Sair
                    </a>
                </div>

            </div>
        </div>
    );
}

export default UserMenu;
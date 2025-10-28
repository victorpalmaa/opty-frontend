import React from 'react';
import './ProductPage.css';

// 1. Recebemos 'irParaResultados' E 'openMenu'
function ProductPage({ irParaResultados, openMenu }) {
    return (
        <div className="product-page-container">

            {/* ===== CABEÇALHO ===== */}
            <header className="product-page-header">
                <a
                    href="#"
                    className="header-back-arrow"
                    onClick={(e) => { e.preventDefault(); irParaResultados(); }}
                >
                    ←
                </a>
                <span className="header-logo-short">Opty</span>
                <div className="header-search-bar-product">
                    <span>🔍</span>
                    <input type="text" defaultValue="iPhone 15 Pro Max 256 GB" />
                </div>

                {/* 2. ADICIONAMOS ONCLICK AQUI! */}
                <div className="header-user-icon" onClick={openMenu}>
                    {/* Ícone de usuário */}
                </div>
            </header>

            {/* ... (todo o resto da ProductPage: imagens, detalhes, gráfico...) ... */}
            <div className="product-page-body">
                <main className="product-main-content">
                    <aside className="product-images">
                        <div className="main-image-placeholder"></div>
                        <div className="thumbnail-grid">
                            <div className="thumbnail-placeholder"></div>
                            <div className="thumbnail-placeholder"></div>
                            <div className="thumbnail-placeholder"></div>
                            <div className="thumbnail-placeholder"></div>
                        </div>
                    </aside>
                    <section className="product-details">
                        <h2>iPhone 15 Pro Max 256 GB</h2>
                        <div className="product-rating">
                            <span>★★★★★</span> 4.8 <span className="rating-count">(2.231 avaliações)</span>
                        </div>
                        <div className="price-box">
                            <p>Melhor preço encontrado</p>
                            <h3>R$ 7.299</h3>
                            <div className="price-economy">Economia de R$ 200 (15%)</div>
                            <div className="store-info">
                                <span>Amazon</span> Frete grátis
                            </div>
                        </div>
                        <div className="action-buttons">
                            <button className="btn-go-to-store">Ir para a loja</button>
                            <button className="btn-create-alert">Criar alerta de preço</button>
                        </div>
                        <h4>Especificações</h4>
                        <div className="specs-grid">
                            <div className="spec-item">
                                <p>Armazenamento</p>
                                <strong>256 GB</strong>
                            </div>
                            <div className="spec-item">
                                <p>Tela</p>
                                <strong>6.7" Super Retina XDR</strong>
                            </div>
                            <div className="spec-item">
                                <p>Processador</p>
                                <strong>A17 Pro</strong>
                            </div>
                            <div className="spec-item">
                                <p>Câmera</p>
                                <strong>48MP Principal</strong>
                            </div>
                        </div>
                        <h4>Histórico de preço</h4>
                        <div className="graph-placeholder">
                            GRÁFICO
                        </div>
                    </section>
                </main>
                <aside className="comparison-sidebar">
                    <h4>Comparação de Lojas</h4>
                    <div className="comparison-list">
                        <div className="store-item-placeholder"></div>
                        <div className="store-item-placeholder"></div>
                        <div className="store-item-placeholder"></div>
                        <div className="store-item-placeholder"></div>
                        <div className="store-item-placeholder"></div>
                        <div className="store-item-placeholder"></div>
                        <div className="store-item-placeholder"></div>
                    </div>
                </aside>
            </div>
        </div>
    );
}

export default ProductPage;
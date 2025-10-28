import React from 'react';
import './ResultsPage.css';

// 1. Recebemos 'irParaHome', 'irParaProduto' E 'openMenu'
function ResultsPage({ irParaHome, irParaProduto, openMenu }) {
    return (
        <div className="results-page-container">

            {/* ===== CABEÇALHO ===== */}
            <header className="results-page-header">
                <a
                    href="#"
                    className="header-back-link"
                    onClick={(e) => { e.preventDefault(); irParaHome(); }}
                >
                    <span className="header-logo">Opty</span>
                </a>
                <div className="header-search-bar">
                    <span>🔍</span>
                    <input type="text" defaultValue="iPhone 15 Pro" />
                </div>

                {/* 2. ADICIONAMOS ONCLICK AQUI! */}
                <div className="header-user-icon" onClick={openMenu}>
                    {/* Ícone de usuário */}
                </div>
            </header>

            {/* ... (todo o resto da ResultsPage: filtros, produtos, etc.) ... */}
            <div className="results-page-body">
                <aside className="filters-sidebar">
                    <h3>Filtros</h3>
                    <div className="filter-group">
                        <h4>Faixa de Preço</h4>
                        <div className="price-range-placeholder"></div>
                        <div className="price-inputs">
                            <input type="text" placeholder="Min" />
                            <input type="text" placeholder="Max" />
                        </div>
                    </div>
                    <div className="filter-group">
                        <h4>Lojas</h4>
                        <label><input type="checkbox" /> Amazon</label>
                        <label><input type="checkbox" /> Mercado Livre</label>
                        <label><input type="checkbox" /> Magazine Luiza</label>
                        <label><input type="checkbox" /> Americanas</label>
                        <label><input type="checkbox" /> Extra</label>
                    </div>
                    <div className="filter-group">
                        <h4>Avaliação</h4>
                        <label><input type="checkbox" /> ★★★★★</label>
                        <label><input type="checkbox" /> ★★★★☆ ou mais</label>
                        <label><input type="checkbox" /> ★★★☆☆ ou mais</label>
                    </div>
                    <button className="clear-filters-btn">Limpar Filtros</button>
                </aside>
                <main className="results-main-content">
                    <div className="results-header">
                        <h2>Resultados para "iPhone 15 Pro"</h2>
                        <select>
                            <option value="menor-preco">Menor Preço</option>
                            <option value="maior-preco">Maior Preço</option>
                            <option value="relevancia">Relevância</option>
                        </select>
                    </div>
                    <div className="results-product-grid">
                        <div className="result-product-card">
                            <div className="result-product-image"></div>
                            <h4>Produto 1</h4>
                            <button onClick={irParaProduto}>Ver Detalhes</button>
                        </div>
                        <div className="result-product-card">
                            <div className="result-product-image"></div>
                            <h4>Produto 1</h4>
                            <button onClick={irParaProduto}>Ver Detalhes</button>
                        </div>
                        <div className="result-product-card">
                            <div className="result-product-image"></div>
                            <h4>Produto 1</h4>
                            <button onClick={irParaProduto}>Ver Detalhes</button>
                        </div>
                        <div className="result-product-card">
                            <div className="result-product-image"></div>
                            <h4>Produto 1</h4>
                            <button onClick={irParaProduto}>Ver Detalhes</button>
                        </div>
                        <div className="result-product-card">
                            <div className="result-product-image"></div>
                            <h4>Produto 1</h4>
                            <button onClick={irParaProduto}>Ver Detalhes</button>
                        </div>
                        <div className="result-product-card">
                            <div className="result-product-image"></div>
                            <h4>Produto 1</h4>
                            <button onClick={irParaProduto}>Ver Detalhes</button>
                        </div>
                        <div className="result-product-card">
                            <div className="result-product-image"></div>
                            <h4>Produto 1</h4>
                            <button onClick={irParaProduto}>Ver Detalhes</button>
                        </div>
                        <div className="result-product-card">
                            <div className="result-product-image"></div>
                            <h4>Produto 1</h4>
                            <button onClick={irParaProduto}>Ver Detalhes</button>
                        </div>
                    </div>
                    <div className="pagination">
                        <a href="#">Anterior</a>
                        <a href="#" className="active">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <a href="#">4</a>
                        <a href="#">Próximo</a>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default ResultsPage;
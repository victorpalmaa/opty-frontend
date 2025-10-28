import React from 'react'; // <-- Não precisamos mais do 'useState' aqui!
import './HomePage.css';
// <-- Não precisamos mais importar o 'UserMenu' aqui!

// 1. Recebemos 'irParaResultados' E a nova 'openMenu'
function HomePage({ irParaResultados, openMenu }) {

    // 2. REMOVEMOS o 'useState' de 'isMenuOpen' daqui!

    return (
        <div className="homepage-container">

            {/* ===== CABEÇALHO ===== */}
            <header className="homepage-header">
                <h1 className="header-logo">Opty</h1>

                {/* 3. O onClick agora chama 'openMenu' que veio do App.js */}
                <div className="header-user-icon" onClick={openMenu}>
                    {/* Ícone de usuário (placeholder) */}
                </div>
            </header>

            {/* ===== CONTEÚDO PRINCIPAL ===== */}
            <main className="homepage-main">
                {/* ... (todo o resto do seu código da Home: busca, categorias, produtos...) ... */}
                {/* --- Seção de Busca --- */}
                <section className="search-section">
                    <h2>Encontre os melhores preços</h2>
                    <p>Compare milhares de produtos em um só lugar</p>
                    <div className="search-bar">
                        <span>🔍</span>
                        <input type="text" placeholder="Busque por produtos, marcas ou categorias..." />
                    </div>
                    <div className="popular-searches">
                        <span>Buscas populares:</span>
                        <a href="#">iPhone 15</a>
                        <a href="#">Notebook Dell</a>
                        <a href="#">Smart TV</a>
                        <a href="#">Geladeira</a>
                    </div>
                </section>
                {/* --- Categorias Populares --- */}
                <section className="category-section">
                    <div className="section-header">
                        <h3>Categorias Populares</h3>
                    </div>
                    <div className="category-grid">
                        <div className="category-card">Eletrônicos</div>
                        <div className="category-card">Moda</div>
                        <div className="category-card">Casa</div>
                        <div className="category-card">Esportes</div>
                        <div className="category-card">Livros</div>
                        <div className="category-card">Beleza</div>
                    </div>
                </section>
                {/* --- Últimas Buscas --- */}
                <section className="recent-section">
                    <div className="section-header">
                        <h3>Últimas Buscas</h3>
                        <a href="#" className="see-all-link">Ver todas</a>
                    </div>
                    <div className="recent-grid">
                        <div className="recent-card-placeholder" onClick={irParaResultados}></div>
                        <div className="recent-card-placeholder" onClick={irParaResultados}></div>
                        <div className="recent-card-placeholder" onClick={irParaResultados}></div>
                        <div className="recent-card-placeholder" onClick={irParaResultados}></div>
                    </div>
                </section>
                {/* --- Ofertas em Destaque --- */}
                <section className="featured-section">
                    <div className="section-header">
                        <h3>Ofertas em Destaque</h3>
                    </div>
                    <div className="product-grid">
                        <div className="product-card" onClick={irParaResultados}>
                            <div className="product-image-placeholder"></div>
                            <p>Produto 1</p>
                        </div>
                        <div className="product-card" onClick={irParaResultados}>
                            <div className="product-image-placeholder"></div>
                            <p>Produto 2</p>
                        </div>
                        <div className="product-card" onClick={irParaResultados}>
                            <div className="product-image-placeholder"></div>
                            <p>Produto 3</p>
                        </div>
                        <div className="product-card" onClick={irParaResultados}>
                            <div className="product-image-placeholder"></div>
                            <p>Produto 4</p>
                        </div>
                        <div className="product-card" onClick={irParaResultados}>
                            <div className="product-image-placeholder"></div>
                            <p>Produto 5</p>
                        </div>
                    </div>
                </section>
            </main>

            {/* 4. REMOVEMOS a lógica do {isMenuOpen && ...} daqui! */}

        </div>
    );
}

export default HomePage;
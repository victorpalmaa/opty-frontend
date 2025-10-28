import React, { useState } from 'react';

// 1. Importamos TODAS as páginas E o UserMenu
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import OnboardingPage from './OnboardingPage';
import HomePage from './HomePage';
import ResultsPage from './ResultsPage';
import ProductPage from './ProductPage';
import UserMenu from './UserMenu'; // <-- IMPORTAMOS O MENU AQUI

function App() {
  // Estado da Página Atual
  const [telaAtual, setTelaAtual] = useState('login');

  // 2. ESTADO DO MENU - A "memória" do menu agora mora aqui!
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Nossas funções de navegação
  const irParaLogin = () => setTelaAtual('login');
  const irParaRegistro = () => setTelaAtual('register');
  const irParaOnboarding = () => setTelaAtual('onboarding');
  const irParaHome = () => setTelaAtual('home');
  const irParaResultados = () => setTelaAtual('results');
  const irParaProduto = () => setTelaAtual('product');

  // 3. Funções de controle do Menu
  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  // --- Lógica para decidir qual página mostrar ---
  // (Vamos criar uma variável para a página atual)
  let currentPage;

  if (telaAtual === 'login') {
    currentPage = <LoginPage irParaRegistro={irParaRegistro} irParaOnboarding={irParaOnboarding} />;
  }
  else if (telaAtual === 'register') {
    currentPage = <RegisterPage irParaLogin={irParaLogin} irParaOnboarding={irParaOnboarding} />;
  }
  else if (telaAtual === 'onboarding') {
    currentPage = <OnboardingPage irParaHome={irParaHome} />;
  }
  else if (telaAtual === 'home') {
    // 4. Passamos a função 'openMenu' para a HomePage
    currentPage = <HomePage irParaResultados={irParaResultados} openMenu={openMenu} />;
  }
  else if (telaAtual === 'results') {
    // 4. Passamos 'openMenu' para a ResultsPage
    currentPage = <ResultsPage irParaHome={irParaHome} irParaProduto={irParaProduto} openMenu={openMenu} />;
  }
  else {
    // 4. Passamos 'openMenu' para a ProductPage
    currentPage = <ProductPage irParaResultados={irParaResultados} openMenu={openMenu} />;
  }

  // --- O que será renderizado ---
  return (
    // 5. Usamos um "Fragment" (<> ... </>) para agrupar tudo
    <>
      {/* 6. Mostramos a página que foi decidida ali em cima */}
      {currentPage}

      {/* 7. SE o menu estiver aberto, mostre o componente UserMenu
             (isso agora funciona em CIMA de qualquer página) */}
      {isMenuOpen && <UserMenu onClose={closeMenu} />}
    </>
  );
}

export default App;
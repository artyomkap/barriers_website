import React from 'react';
import './Header.scss';
import logo from '../../images/logo.png';
        import { Link } from 'react-router-dom'; // Путь к вашему логотипу

function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <img src={logo} alt="Логотип" className="header__logo" />
        <nav className="header__nav">
            <Link to="/">Главная страница</Link>
            <Link to="/contacts">Контакты</Link>
            <Link to="/services">Услуги</Link>
            <Link to="/gallery">Галерея</Link>
        </nav>
      </div>
      <div className="header__auth">
        <a href="/login" className="header__auth-link">Логин</a>
        <a href="/register" className="header__auth-link">Регистрация</a>
      </div>
    </header>
  );
}

export default Header;

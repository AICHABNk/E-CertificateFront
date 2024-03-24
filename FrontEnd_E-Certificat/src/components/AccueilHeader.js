import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/AccueilHeader.css'; // Import the CSS file
import { FaSearch } from 'react-icons/fa'; // Import the search icon from react-icons/fa

function Header() {
  const [language, setLanguage] = useState('ar');

  const handleChangeLanguage = () => {
    const newLanguage = language === 'ar' ? 'fr' : 'ar';
    setLanguage(newLanguage);
  };

  const handleSearch = (event) => {
    const searchQuery = event.target.value;
    console.log('Recherche:', searchQuery);
  };

  return (
    <header className="header">
      <Link className="logo" to="#">
        <div className="logoWrapper">
          <img
            src={process.env.PUBLIC_URL + '/images/royaume-du-maroc.ico'}
            alt="شعار وزارة الداخلية ولاية اكادير"
            className="logo-img"
          />
        </div>
      </Link>
      <nav>
        <ul className="nav-links">
          <li>
            <Link className="nav-link" to="/">
              الرئيسية
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/demande-certificat">
              خدمات
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/demande-certificat">
              إجراءات
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/demande-certificat">
              أسئلة و أجوبة
            </Link>
          </li>
        </ul>
      </nav>
      <div className="header-actions">
        <form className="d-flex">
          <input
            className="form-control me-2 search-input"
            type="search"
            placeholder="Rechercher..."
            aria-label="Search"
            onChange={handleSearch}
          />
          <button className="btn search-btn" type="submit">
            <FaSearch />
          </button>
        </form>
        <Link className="language-link" onClick={handleChangeLanguage}>
          {language === 'ar' ? 'العربية' : 'Français'}
        </Link>
        <Link className="register-link" to="/register">
          تسجيل
        </Link>
      </div>
    </header>
  );
}

export default Header;

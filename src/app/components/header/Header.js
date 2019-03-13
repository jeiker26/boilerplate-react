import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./Header.scss";

export const Header = () => {
  const [t, i18n] = useTranslation();

  const handleChangeLanguage = language => {
    i18n.changeLanguage(language);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/">{t("home-title")}</Link>
          </li>
          <li className="nav-item">
            <Link to="/users">{t("users-title")}</Link>
          </li>
          <li className="nav-item">
            <Link to="/hello">{t("hello-title")}</Link>
          </li>
          <li className="nav-item">
            <Link to="/not-found">{t("error-404-title")}</Link>
          </li>
          <li className="nav-item">
            {i18n.language === "en" && (
              <span onClick={() => handleChangeLanguage("es")}>{t("language-title-es")}</span>
            )}
            {i18n.language === "es" && (
              <span onClick={() => handleChangeLanguage("en")}>{t("language-title-en")}</span>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const Header = () => {
  const [t, i18n] = useTranslation();

  const handleChangeLanguage = language => {
    i18n.changeLanguage(language);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        React boilerplate
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              {t("home-title")}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/users" className="nav-link">
              {t("users-title")}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/hello" className="nav-link">
              {t("hello-title")}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/not-found" className="nav-link">
              {t("error-404-title")}
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link">
              {i18n.language === "en" && (
                <span onClick={() => handleChangeLanguage("es")}>{t("language-title-es")}</span>
              )}
              {i18n.language === "es" && (
                <span onClick={() => handleChangeLanguage("en")}>{t("language-title-en")}</span>
              )}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
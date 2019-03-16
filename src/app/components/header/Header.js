import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./Header.scss";

export const Header = () => {
  const idComponent = "header";
  const [t, i18n] = useTranslation();

  const handleChangeLanguage = language => {
    i18n.changeLanguage(language);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link data-test-id={`${idComponent}-link-home`} to="/">
              {t("home-title")}
            </Link>
          </li>
          <li className="nav-item">
            <Link data-test-id={`${idComponent}-link-users`} to="/users">
              {t("users-title")}
            </Link>
          </li>
          <li className="nav-item">
            <Link data-test-id={`${idComponent}-link-hello`} to="/hello">
              {t("hello-title")}
            </Link>
          </li>
          <li className="nav-item">
            {
              <span
                data-test-id={`${idComponent}-change-language-es`}
                onClick={() => handleChangeLanguage("es")}
              >
                {t("language-title-es")}
              </span>
            }
            {
              <span
                data-test-id={`${idComponent}-change-language-en`}
                onClick={() => handleChangeLanguage("en")}
              >
                {t("language-title-en")}
              </span>
            }
          </li>
        </ul>
      </nav>
    </header>
  );
};

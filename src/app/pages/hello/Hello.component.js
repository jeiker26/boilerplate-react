import React from "react";
import { useTranslation } from "react-i18next";
import { TreeMap } from "src/app/pages/hello/components/TreeMap";

export const Hello = () => {
  const [t] = useTranslation();
  return (
    <p data-testid="init-message">
      {t("welcome")}
      <TreeMap />
    </p>
  );
};

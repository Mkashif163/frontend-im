import React, { createContext, useState } from "react";

interface ContextProps {
  languages: [];
  setLanguages: Function;
  setSelectedLang: Function;
  selectedLang: { lang: string; val: string };
}
export const Context = createContext({} as ContextProps);

export const Provider = (props) => {
  const { language: initialLang } = props;

  const [languages, setLanguages] = useState(initialLang);

  const [selectedLang, setSelectedLang] = useState({ lang: "English", val: "en" });

  const langContext = {
    languages,
    setLanguages,
    selectedLang,
    setSelectedLang,
  };

  return <Context.Provider value={langContext}>{props.children}</Context.Provider>;
};

export const { Consumer } = Context;

export { Context as LanguageContext, Provider as LanguageContextProvider } from "./TranslationContext";

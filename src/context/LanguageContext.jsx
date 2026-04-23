import { createContext, useState } from "react";

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {

  const [lang, setLang] = useState("en");

  const direction = lang === "ar" ? "rtl" : "ltr";

  return (

    <LanguageContext.Provider value={{ lang, setLang }}>

      <div dir={direction}>
        {children}
      </div>

    </LanguageContext.Provider>

  );
}
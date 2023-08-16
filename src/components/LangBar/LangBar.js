import { useTranslation } from "react-i18next";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { useMemo, useState } from "react";
import Modal from "components/Modal/Modal";

export default function LangBar({ firstLang }) {
  const [currentLang, setCurrentLang] = useState(firstLang);
  const [langbar, setLangbar] = useState(false);
  const [t, i18n] = useTranslation();
  const languages = useMemo(() => Object.keys(i18n.options.resources), [i18n]);

  function handleChangeLang(lang) {
    setLangbar(false);
    if (lang !== currentLang && currentLang) {
      setCurrentLang(lang);
      i18n.changeLanguage(lang);
    }
  }

  function handleOpen() {
    setLangbar(true);
  }

  if (langbar === false) {
    return (
      <div className="w-7" onClick={handleOpen}>
        <LanguageIcon langAbbr={currentLang} onChange={()=>{}} />
      </div>
    );
  }

  return (
    <div className=" w-7">
      <Modal isOpen={langbar} onClose={() => setLangbar(false)}>
        <div className="absolute top-0 right-0 bg-slate-500 bg-opacity-20 shadow-lg p-3 mr-3 mt-2 z-20 ">
          {currentLang &&
            languages.map((lang) => (
              <LanguageIcon
                key={lang}
                langAbbr={lang}
                currentLang={currentLang}
                onChange={handleChangeLang}
              />
            ))}
        </div>
      </Modal>
    </div>
  );
}

function LanguageIcon({ langAbbr, onChange }) {
    const spanClass = `fi fi-${langAbbr==='en' ? 'gb' : langAbbr} hover:scale-110 transition ease-in-out cursor-pointer`;
  
    return (
        <>
        <span
            role="button"
            onClick={() => onChange(langAbbr)}
            className={spanClass}
        >
        </span><br />
        </>
    );
  }
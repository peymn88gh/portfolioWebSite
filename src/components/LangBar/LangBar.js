import { useTranslation } from "react-i18next";
import { useMemo, useState } from "react";
import { FloatingFocusManager, autoUpdate, flip, offset, shift, useClick, useDismiss, useFloating, useInteractions, useRole } from "@floating-ui/react";

export default function LangBar({ firstLang , mode='desktop' }) {
  const [currentLang, setCurrentLang] = useState(firstLang);
  const [langbar, setLangbar] = useState(false);
  const [t, i18n] = useTranslation();
  const languages = useMemo(() => Object.keys(i18n.options.resources), [i18n]);
  const [isAccountBoxOpen, setIsAccountBoxOpen] = useState(false)
  const {refs, floatingStyles, context} = useFloating({
      open: isAccountBoxOpen,
      onOpenChange: setIsAccountBoxOpen,
      middleware: [offset(10), flip(), shift()],
      whileElementsMounted: autoUpdate,
  });
  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context);
  
  // Merge all the interactions into prop getters
  const {getReferenceProps, getFloatingProps} = useInteractions([
      click,
      dismiss,
      role,
  ]);


  function handleChangeLang(lang) {
    setIsAccountBoxOpen(false);
    if (lang !== currentLang && currentLang) {
      setCurrentLang(lang);
      i18n.changeLanguage(lang);
    }
  }



  return (
    <div className="">
      {
      mode==='desktop' && <div ref={refs.setReference} {...getReferenceProps()} className="">
        <LanguageIcon langAbbr={currentLang} onChange={()=>{}} />
      </div>
      }
      {isAccountBoxOpen && mode==='desktop' && (
        <FloatingFocusManager context={context} modal={true}>
          <div
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
            className=' z-50 flex flex-col bg-accent bg-opacity-25'
          >
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
        </FloatingFocusManager>
      )}
      {mode==='mobile' &&(
        <div
          className=' z-50 flex flex-row bg-transparent'
        >
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
      )}
    </div>
  );
}

function LanguageIcon({ currentLang, langAbbr, onChange }) {
    // const spanClass = `fi fi-${langAbbr==='en' ? 'gb' : langAbbr} ${langAbbr===currentLang ? 'scale-125 hover:cursor-default' : ''} mx-2 my-2 transition ease-in-out cursor-pointer`;
  
    return (
      
        <div
            role="button"
            onClick={() => onChange(langAbbr)}
            className=''
        >
          <img src={`/${langAbbr}-flag.svg`} className={`${langAbbr===currentLang ? 'scale-125 hover:cursor-default' : 'hover:scale-110'} h-5 m-2 md:m-1`} />
        </div>

    );
  }
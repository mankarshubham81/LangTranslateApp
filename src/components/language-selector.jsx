// import { changeLanguage } from 'i18next';
// import React from 'react'
import { useTranslation } from 'react-i18next';
// import { i18n } from 'i18next';


const languages = [
    {code: "en", lang: "English"},
    {code: "fr", lang: "French"},
    {code: "hi", lang: "Hindi"},
];


const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const changeTheLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className='button-container'>
        {
            languages.map((lng) => {
                return <button className={lng.code === i18n.language ? "selected" : ""} key={lng.code} onClick={() => changeTheLanguage(lng.code)} >
                    {lng.lang}
                    </button>;
            })}
    </div>
  );
};

export default LanguageSelector
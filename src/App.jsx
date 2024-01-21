import { Trans, useTranslation } from 'react-i18next'
import './App.css'
import LanguageSelector from './components/language-selector';

function App() {
  const {t} = useTranslation();

  const {line1, line2} = t("description");
console.log("line1",line1)
console.log("line2",line2)

  return (
    <div className='Main'>
      <div className='container'>
        <LanguageSelector/>
      <h1>{t("greeting")}</h1>
      <span className='descPadding5px'>
        <Trans
        i18nKey={line1}
        values={{
          flag: "!!🏳️‍🌈!!",
        }}
        components= {{1: <b/>}}
        />
        <br />
        <span>{line2}</span> 
        {/* <p>{line1}</p>
      ]*/}
      </span>
    </div>
    </div>
  )
}

export default App

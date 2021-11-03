import { NextPage } from 'next'
import { useState } from 'react'

import CloseIcon from '@material-ui/icons/Close'

import { CookiesTermManager } from '../../services/cache/cookiesTerm'

import styles from './styles.module.scss'

interface CookiesModalViewProps {
  onClick: () => void
}

const CookiesModalView: NextPage<CookiesModalViewProps> = ({ onClick }) => {
  return (
    <div className={styles.banner}>
      <p className={styles.bannerText}>
        Esse site usa Cookies!
        <br />
        <span>
          O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno
          de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com
          dados do usuário e informações pessoais, pode checar informações adicionais em&#160;
        </span>
        <a href="/policies">Política de Privacidade</a>.
      </p>
      <button onClick={onClick}>
        <CloseIcon fontSize="large" />
      </button>
    </div>
  )
}

export const CookiesModal: NextPage = () => {
  function handleCloseCookies() {
    setCookiesModalState(false)
    CookiesTermManager.saveAccepted()
  }

  const cookieStatus = CookiesTermManager.getAccepted() === 'accepted' ? false : true

  const [cookiesModalState, setCookiesModalState] = useState(cookieStatus)

  return cookiesModalState ? <CookiesModalView onClick={handleCloseCookies} /> : <></>
}

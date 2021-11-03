import { NextPage } from 'next'

import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'

import styles from './styles.module.scss'
import { useDeviceInformation } from '../../hooks/useDeviceInformation'

export const Footer: NextPage = () => {
  const { isMobile } = useDeviceInformation()

  const renderedFooter = isMobile ? <div></div> : <div></div>

  return renderedFooter
}

// TODO: todo this page

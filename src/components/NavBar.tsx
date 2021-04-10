import { NextPage } from 'next'
import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import styles from '../styles/components/navBar.module.scss'

const NavBar: NextPage = () => {
  const [followNavBar, setFollowNavBar] = useState(false)

  const changefollowNavBar = (): void => {
    if (window.scrollY >= 400) {
      setFollowNavBar(true)
    } else {
      setFollowNavBar(false)
    }
  }

  if (typeof window !== 'undefined') window.addEventListener('scroll', changefollowNavBar)

  return (
    <>
      <div className={styles.ToolBar}>
        <a>About us</a>
        <ul>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <img src="./icons/instagram.svg" alt="" />
          </a>
          <a href="http://www.fb.com" target="_blank" rel="noreferrer">
            <img src="./icons/facebook.svg" alt="" />
          </a>
        </ul>
      </div>

      <div className={styles.BehindNavBar}>
        <CSSTransition
          in={followNavBar}
          timeout={100}
          classNames={{
            enterActive: styles.NavBarEffectOutsideScreen,
            enterDone: styles.NavBarDropping,
          }}
        >
          <nav className={followNavBar ? styles.NavBarDropEffect : styles.NavBar}>
            <div className={styles.NavBarTopSection}>
              <a className={styles.SearchIcon}>
                <img src="./icons/search.svg" alt="SearchIcon" />
              </a>
              <div className={styles.Logo}>
                <img
                  className={styles.logo}
                  src="https://cdn.shopify.com/s/files/1/0153/0959/files/blacklogo1_190x.png?v=1576374662"
                />
              </div>
              <ul>
                <a>
                  <img src="./icons/login.svg" alt="Login" />
                </a>
                <a>
                  <img src="./icons/cart.svg" alt="" />
                </a>
              </ul>
            </div>
            <ul>
              <a href="">Shop</a>
              <a href="">New Arrivals</a>
              <a href="">Best Sellers</a>
              <a href="">Sale</a>
            </ul>
          </nav>
        </CSSTransition>
      </div>
    </>
  )
}

export default NavBar

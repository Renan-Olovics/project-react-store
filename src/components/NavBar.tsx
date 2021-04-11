import { NextPage } from 'next'
import Image from 'next/image'
import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { useCategories } from '../hooks/useCategories'

import styles from '../styles/components/navBar.module.scss'

const NavBar: NextPage = () => {
  const [followNavBar, setFollowNavBar] = useState(false)
  const [dropShopSection, setDropShopSection] = useState(styles.shopSectionHidden)
  const categories = useCategories()

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

      <CSSTransition
        in={followNavBar}
        timeout={100}
        classNames={{
          enterActive: styles.NavBarEffectOutsideScreen,
          enterDone: styles.NavBarDropping,
        }}
      >
        <div className={styles.descer}>
          <div className={styles.BehindNavBar}>
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
                <li>
                  <a
                    onMouseEnter={() => {
                      setDropShopSection(styles.shopSectionDisplayed)
                    }}
                    onMouseLeave={() => {
                      setDropShopSection(styles.shopSectionHidden)
                    }}
                    href=""
                  >
                    Shop
                  </a>
                </li>
                <li>
                  <a href="">New Arrivals</a>
                </li>
                <li>
                  <a href="">Best Sellers</a>
                </li>
                <li>
                  <a href="">Sale</a>
                </li>
              </ul>
            </nav>
          </div>

          <div
            className={dropShopSection}
            onMouseEnter={() => {
              setDropShopSection(styles.shopSectionDisplayed)
            }}
            onMouseLeave={() => {
              setDropShopSection(styles.shopSectionHidden)
            }}
          >
            <div className={styles.gridSectionWidth}>
              <div className={styles.eachSection}>
                <div>
                  <Image
                    className=""
                    src={categories[0].images[0].url}
                    width={150}
                    height={50}
                    layout="responsive"
                    objectFit="cover"
                  />
                </div>
                <ul>
                  <li>
                    <a href="">Nome da secao</a>
                  </li>
                  <li>
                    <a href="">nome1</a>
                  </li>
                  <li>
                    <a href="">Nome2</a>
                  </li>
                  <li>
                    <a href="">Nome3</a>
                  </li>
                  <li>
                    <a href="">Nome4</a>
                  </li>
                  <li>
                    <a href="">Nome5</a>
                  </li>
                </ul>
              </div>
              <div className={styles.eachSection}>
                <div>
                  <Image
                    className=""
                    src={categories[0].images[0].url}
                    width={150}
                    height={50}
                    layout="responsive"
                    objectFit="cover"
                  />
                </div>
                <ul>
                  <li>
                    <a href="">Nome da secao</a>
                  </li>
                  <li>
                    <a href="">nome1</a>
                  </li>
                  <li>
                    <a href="">Nome2</a>
                  </li>
                  <li>
                    <a href="">Nome3</a>
                  </li>
                  <li>
                    <a href="">Nome4</a>
                  </li>
                  <li>
                    <a href="">Nome5</a>
                  </li>
                </ul>
              </div>
              <div className={styles.eachSection}>
                <div>
                  <Image
                    className=""
                    src={categories[0].images[0].url}
                    width={150}
                    height={50}
                    layout="responsive"
                    objectFit="cover"
                  />
                </div>
                <ul>
                  <li>
                    <a href="">Nome da secao</a>
                  </li>
                  <li>
                    <a href="">nome1</a>
                  </li>
                  <li>
                    <a href="">Nome2</a>
                  </li>
                  <li>
                    <a href="">Nome3</a>
                  </li>
                  <li>
                    <a href="">Nome4</a>
                  </li>
                  <li>
                    <a href="">Nome5</a>
                  </li>
                </ul>
              </div>
              <div className={styles.eachSection}>
                <div>
                  <Image
                    className=""
                    src={categories[0].images[0].url}
                    width={150}
                    height={50}
                    layout="responsive"
                    objectFit="cover"
                  />
                </div>
                <ul>
                  <li>
                    <a href="">Nome da secao</a>
                  </li>
                  <li>
                    <a href="">nome1</a>
                  </li>
                  <li>
                    <a href="">Nome2</a>
                  </li>
                  <li>
                    <a href="">Nome3</a>
                  </li>
                  <li>
                    <a href="">Nome4</a>
                  </li>
                  <li>
                    <a href="">Nome5</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>
    </>
  )
}

export default NavBar

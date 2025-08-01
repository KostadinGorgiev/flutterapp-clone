import { type FC } from "react"
import Container from "@components/Container"

import Logo from '@assets/images/wordmark-tagline-black.png'

import styles from './Header.module.scss';

import { FaBolt } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { useTheme } from "../../contexts/ThemeContext";

const Header: FC = () => {

    const { showMenu, toggleMenu } = useTheme();

    return (
        <div className={styles.header}>
            <Container>
                <div className={styles.wrapper}>
                    <a href="/" className={styles.logo}>
                        <img src={Logo} alt="wordmark" />
                    </a>
                    {/*  navigation */}
                    <div className={styles.navs}>
                        <a href="index.html" className={styles.activeLink}>Home</a>
                        <a href="pads.html">Pads</a>
                        <a href="https://travel.flutterpads.com" target="_blank" rel="noopener noreferrer">Hotels</a>
                        <a href="https://travel.flutterpads.com" target="_blank" rel="noopener noreferrer">Rental Cars</a>
                        <a href="https://travel.flutterpads.com" target="_blank" rel="noopener noreferrer">Flights</a>
                        <a href="membership.html">Become a Host<FaBolt /></a>
                        <a href="contact.html">Contact</a>
                        <a href="invest.html">Invest</a>
                        <a href="https://booking.flutterpads.com/managers.php">Host Dashboard</a>
                    </div>
                    <a href="https://booking.flutterpads.com/signup.php" className={styles.listBtn}>
                        <span>List Your Property</span>
                    </a>
                    <div className={styles.mobileMenu}>
                        <div className={`${styles.menuBtn} ${showMenu ? styles.active : ''}`} onClick={toggleMenu}>
                            <div className={styles.menuBtnIcon}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div className={styles.closeIcon}>
                                <IoMdClose />
                            </div>
                        </div>
                        <div className={`${styles.menuList} ${showMenu ? styles.active : ''}`}>
                            <a href="index.html" className={styles.activeLink}>Home</a>
                            <a href="pads.html">Pads</a>
                            <a href="https://travel.flutterpads.com" target="_blank" rel="noopener noreferrer">Hotels</a>
                            <a href="https://travel.flutterpads.com" target="_blank" rel="noopener noreferrer">Rental Cars</a>
                            <a href="https://travel.flutterpads.com" target="_blank" rel="noopener noreferrer">Flights</a>
                            <a href="membership.html">Become a Host<FaBolt /></a>
                            <a href="contact.html">Contact</a>
                            <a href="invest.html">Invest</a>
                            <a href="https://booking.flutterpads.com/managers.php">Host Dashboard</a>
                            <a href="https://booking.flutterpads.com/signup.php" className={styles.listBtn}>
                                <span>List Your Property</span>
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Header
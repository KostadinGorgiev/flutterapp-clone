import type { FC } from "react"
import styles from "./Footer.module.scss"
import Container from "@components/Container"
import { FaFeatherPointed, FaInstagram } from "react-icons/fa6"
import { IoMdArrowDropright } from "react-icons/io"
import { AiOutlineHome } from "react-icons/ai"
import { RiTwitterXFill } from "react-icons/ri"
import { BiLogoFacebook } from "react-icons/bi"

const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.footerTop}>
                    <div className={`${styles.footerItem} ${styles.footerFirst}`}>
                        <div className={styles.footerHeader}>
                            Join FlutterPads
                        </div>
                        <div className={styles.footerContent}>
                            <div className={styles.footerContentText}>
                                FlutterPads is the first platform <i>Built by Hosts</i>, for Hosts. We know first hand what it takes to run rentals, manage guests, and stay profitable. That's why FlutterPads flips the script of the industry and gives Hosts unparalleled control, earnings potential, and protection capacity.
                            </div>
                            <br />
                            <button className={styles.footerContentButton}>
                                <span>Become a Host</span>
                                <FaFeatherPointed />
                            </button>
                        </div>
                    </div>
                    <div className={`${styles.footerItem} ${styles.footerSecond}`}>
                        <div className={styles.footerHeader}>
                            Helpful links
                        </div>
                        <div className={styles.footerContent}>
                            <div className={styles.footerLinkList}>
                                <div className={styles.footerLinkItem}><div className={styles.footerLinkIcon}><IoMdArrowDropright /></div><a href="#">All Properties</a></div>
                                <div className={styles.footerLinkItem}><div className={styles.footerLinkIcon}><IoMdArrowDropright /></div><a href="#">Membership</a></div>
                                <div className={styles.footerLinkItem}><div className={styles.footerLinkIcon}><IoMdArrowDropright /></div><a href="#">Terms & Conditions</a></div>
                                <div className={styles.footerLinkItem}><div className={styles.footerLinkIcon}><IoMdArrowDropright /></div><a href="#">Contact Us</a></div>
                                <div className={styles.footerLinkItem}><div className={styles.footerLinkIcon}><IoMdArrowDropright /></div><a href="#">Help Center</a></div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.footerItem} ${styles.footerThird}`}>
                        <div className={styles.footerHeader}>
                            Contact Us
                        </div>
                        <div className={styles.footerContent}>
                            <div className={styles.footerLinkList}>
                                <div className={styles.footerLinkItem}><div className={styles.footerLinkIcon}><IoMdArrowDropright /></div><a href="#"><span>Email:</span>info@flutterpads.com</a></div>
                                <div className={styles.footerLinkItem}><div className={styles.footerLinkIcon}><IoMdArrowDropright /></div><a href="#"><span>Corporate Address:</span><br /><br />1801 Century Park East Los Angeles, CA 90067</a></div>
                                <div className={styles.footerLinkItem}><div className={styles.footerLinkIcon}><IoMdArrowDropright /></div><a href="#">Contact Form</a></div>
                            </div>
                            <button className={`${styles.footerContentButton} ${styles.footerContentButtonContact}`}>
                                <span>Get in Touch</span>
                                <IoMdArrowDropright className={styles.footerContentButtonIcon} />
                            </button>
                        </div>
                    </div>
                    <div className={`${styles.footerItem} ${styles.footerFourth}`}>
                        <div className={styles.footerHeader}>
                            Subscribe
                        </div>
                        <div className={styles.footerContent}>
                            <div className={styles.footerContentText}>
                                Want to be notified when we launch a new property or have an update to share? Subscribe below and we'll send you a notification by email.
                            </div>
                        </div>
                        <iframe src="https://embed.fillout.com/t/3Agoej25Wgus?fillout-embed-id=64976129007991&amp;fillout-embed-type=standard&amp;fillout-embed-parent-page=https%3A%2F%2Fwww.flutterpads.com%2F&amp;fillout-embed-dynamic-resize=true" allow="microphone; camera; geolocation" title="3Agoej25Wgus" style={{ border: "0px" }}></iframe>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    <div className={styles.footerBottomLeft}>
                        <a href="/" className={styles.footerBottomHomeLink}><AiOutlineHome /></a>
                        <p className={styles.footerBottomText}>
                            &copy; FlutterPads 2025. All rights reserved.
                        </p>
                    </div>
                    <div className={styles.footerBottomRight}>
                        <p className={styles.footerBottomText}>
                            Follow Us
                        </p>
                        <div className={styles.footerBottomSocial}>
                            <a href="#">
                                <BiLogoFacebook />
                            </a>
                            <a href="#">
                                <RiTwitterXFill />
                            </a>
                            <a href="#">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                    <div className={styles.footerBottomSeparator}></div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
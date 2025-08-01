import type { FC } from "react"
import styles from "./MobileNavOverlay.module.scss"
import { useTheme } from "../contexts/ThemeContext"

const MobileNavOverlay: FC = () => {
    const { showMenu, toggleMenu } = useTheme();

    return (
        <div className={`${styles.mobileNavOverlay} ${showMenu ? styles.active : ''}`} onClick={toggleMenu}></div>
    )
}

export default MobileNavOverlay
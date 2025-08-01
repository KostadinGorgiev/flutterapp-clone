import type { FC } from "react"
import styles from "./ScrollProgressBar.module.scss"
import { useTheme } from "../contexts/ThemeContext"

const ScrollProgressBar: FC = () => {
    const { scrollProgress } = useTheme();

    return (
        <div className={styles.scrollProgressBar}>
            <div className={styles.scrollProgressBarInner} style={{ width: `${scrollProgress}%` }}></div>
        </div>
    )
}

export default ScrollProgressBar
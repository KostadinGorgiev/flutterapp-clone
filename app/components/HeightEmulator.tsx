import type { FC } from "react"
import styles from "./HeightEmulator.module.scss"
import { useTheme } from "../contexts/ThemeContext"

const HeightEmulator: FC = () => {
    const { footerHeight } = useTheme();

    console.log(footerHeight);

    return (
        <div className={styles.heightEmulator} style={{ height: footerHeight }}></div>
    )
}

export default HeightEmulator
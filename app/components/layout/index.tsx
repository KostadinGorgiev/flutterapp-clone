import type { FC } from "react"
import { Outlet } from "react-router"
import Header from "@layouts/Header"
import Footer from "@layouts/Footer"
import MobileNavOverlay from "@components/MobileNavOverlay"
import HeightEmulator from "@components/HeightEmulator"
import ScrollProgressBar from "@components/ScrollProgressBar"

const Layout: FC = () => {
    return (
        <div>
            <Header />
            <div className="wrapper">
                <div className="content">
                    <Outlet />
                </div>
                <HeightEmulator />
                <ScrollProgressBar />
                <Footer />
            </div>
            <MobileNavOverlay />
        </div>
    )
}

export default Layout
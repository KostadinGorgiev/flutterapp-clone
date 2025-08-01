import type { FC } from "react"
import { Outlet } from "react-router"
import Header from "@layouts/Header"
import Footer from "@layouts/Footer"
import MobileNavOverlay from "@components/MobileNavOverlay"

const Layout: FC = () => {
    return (
        <div>
            <Header />
            <div className="wrapper">
                <div className="content">
                    <Outlet />
                </div>
                <div className="height-emulator" style={{ height: "685px" }}></div>
                <Footer />
            </div>
            <MobileNavOverlay />
        </div>
    )
}

export default Layout
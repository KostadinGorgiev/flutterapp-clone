import type { FC } from "react"

const Footer: FC = () => {
    return (
        <footer className="layout-footer">
            <div className="container">
                <div className="footer-inner">
                    <div className="row">
                        {/* footer-widget */}
                        <div className="col-lg-4">
                            <div className="footer-widget">
                                <div className="footer-widget-title">Join FlutterPads</div>
                                <div className="footer-widget-content">
                                    <p>
                                        FlutterPads is the first platform{" "}
                                        <i>Built by Hosts, for Hosts</i>. We know first hand what it
                                        takes to run rentals, manage guests, and stay profitable. That's
                                        why FlutterPads flips the script of the industry and gives Hosts
                                        unparalleled control, earnings potential, and protection
                                        capacity.
                                    </p>
                                    <br />
                                    <div className="api-links-wrap">
                                        <a
                                            href="https://booking.flutterpads.com/mytrips.php"
                                            className="footer-widget-content-link"
                                        >
                                            <span>Become a Host</span>
                                            <i className="fa-solid fa-feather-pointed" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* footer-widget  end*/}
                        {/* footer-widget */}
                        <div className="col-lg-2">
                            <div className="footer-widget">
                                <div className="footer-widget-title">Helpful links</div>
                                <div className="footer-widget-content">
                                    <div className="footer-list footer-box  ">
                                        <ul>
                                            <li>
                                                <a href="pads.html">All Properties</a>
                                            </li>
                                            <li>
                                                <a href="membership.html">Membership</a>
                                            </li>
                                            <li>
                                                <a href="terms.html">Terms &amp; Conditions</a>
                                            </li>
                                            <li>
                                                <a href="contact.html">Contact Us</a>
                                            </li>
                                            <li>
                                                <a href="https://booking.flutterpads.com/help.php?type=tech-support">
                                                    Help Center
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* footer-widget  end*/}
                        {/* footer-widget */}
                        <div className="col-lg-2">
                            <div className="footer-widget">
                                <div className="footer-widget-title">Contact Us</div>
                                <div className="footer-widget-content">
                                    <div className="footer-list footer-box  ">
                                        <ul className="footer-contacts  ">
                                            <li>
                                                <span>Email:</span>
                                                <a href="mailto:info@flutterpads.com" target="_blank">
                                                    info@flutterpads.com
                                                </a>
                                            </li>
                                            <li>
                                                {" "}
                                                <span>Corporate Address:</span>
                                                <a>
                                                    <br />
                                                    1801 Century Park East Los Angeles, CA 90067
                                                </a>
                                            </li>
                                            <li>
                                                <a href="contact.html">Contact Form</a>
                                            </li>
                                        </ul>
                                        <a href="contact.html" className="footer-widget-content-link">
                                            <span>Get in Touch</span>
                                            <i className="fa-solid fa-caret-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* footer-widget  end*/}
                        {/* footer-widget */}
                        <div className="col-lg-4">
                            <div className="footer-widget">
                                <div className="footer-widget-title">Subscribe</div>
                                <div className="footer-widget-content">
                                    <p>
                                        Want to be notified when we launch a new property or have an
                                        update to share? Subscribe below and we'll send you a
                                        notification by email.
                                    </p>
                                    <div
                                        style={{
                                            width: "100%",
                                            height: 273,
                                            position: "relative",
                                            transition: "height 150ms"
                                        }}
                                        data-fillout-id="3Agoej25Wgus"
                                        data-fillout-embed-type="standard"
                                        data-fillout-inherit-parameters=""
                                        data-fillout-dynamic-resize=""
                                        data-fillout-initialized="true"
                                    >
                                        <div className="fillout-embed-standard" style={{ opacity: 1 }}>
                                            <div
                                                className="fillout-embed-loading"
                                                style={{ display: "none" }}
                                            />
                                            <div
                                                className="fillout-embed-iframe-container"
                                                style={{ opacity: 1 }}
                                            >
                                                <iframe
                                                    src="https://embed.fillout.com/t/3Agoej25Wgus?fillout-embed-id=64976129007991&fillout-embed-type=standard&fillout-embed-parent-page=https%3A%2F%2Fwww.flutterpads.com%2F&fillout-embed-dynamic-resize=true"
                                                    allow="microphone; camera; geolocation"
                                                    title="3Agoej25Wgus"
                                                    style={{ border: 0 }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* footer-widget  end*/}
                    </div>
                    {/* footer-widget-wrap end*/}
                </div>
                <div className="footer-bottom">
                    <a href="index.html" className="footer-home_link">
                        <i className="fa-regular  fa-house" />
                    </a>
                    <div className="copyright">
                        {" "}
                        <span>
                            © FlutterPads <span id="currentYear">2025</span>
                        </span>
                        . All rights reserved.{" "}
                    </div>
                    <div className="footer-social">
                        <span className="footer-social-title">Follow Us</span>
                        <div className="footer-social-wrap">
                            <a
                                href="https://www.facebook.com/p/FlutterPads-61552661315592/"
                                target="_blank"
                            >
                                <i className="fa-brands fa-facebook-f" />
                            </a>
                            <a href="https://twitter.com/FlutterPads" target="_blank">
                                <i className="fa-brands fa-x-twitter" />
                            </a>
                            <a href="https://instagram.com/Flutter.Pads" target="_blank">
                                <i className="fa-brands fa-instagram" />
                            </a>
                            {/* <a href="#" target="_blank"><i class="fa-brands fa-tiktok"></i></a> */}
                            {/* <a href="#" target="_blank"><i class="fa-brands fa-youtube"></i></a>										  */}
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer
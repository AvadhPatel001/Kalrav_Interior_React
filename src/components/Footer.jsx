import { Mail, Instagram, Phone } from "lucide-react";
import foooter_logo from "../assets/Images/footer_logo.png";
import whatsApp_footer from "../assets/Images/Icons/whatsapp_footer.png";
import { NavLinks_Left, NavLinks_Rigth, contactInformation, redirectToWhatsApp } from "../Content/Data";
import wayToCulture from "../assets/Images/Icons/Way_To_Culture_FONT.png"

const Footer = () => {
    return (
        <footer className="bg-black">
            <div className="px-10 sm:px-15 lg:px-20 pt-10">
                <div className="flex flex-wrap justify-between gap-10">

                    {/* col - 1 */}
                    <div>
                        <a href="#">
                            <img
                                src={foooter_logo}
                                alt="Kalrav Interior"
                                className="w-40 sm:w-45 lg:w-50" />
                        </a>

                        <div className="flex justify-start gap-7 lg:gap-10 mt-8">
                            <a href="https://www.instagram.com/kalrav_interior?igsh=M3NjaXFyOG91dW53" target="_blank">
                                <Instagram className="w-8 h-8 hover:scale-105 active:scale-98" />
                            </a>

                            <a href={`mailto:${contactInformation[0].contactInfo}`} target="_blank">
                                <Mail className="w-8 h-8 hover:scale-105 active:scale-98" />
                            </a>
                            <a href="#" onClick={redirectToWhatsApp} target="_blank">
                                <img src={whatsApp_footer} alt="WhatsApp" className="w-7 invert hover:scale-105 active:scale-98 " />
                            </a>
                        </div>
                    </div>

                    {/* col - 2 */}

                    <div className="text-center lg:ml-25">
                        <ul className="space-y-8 mb-8">
                            {NavLinks_Left.map((item, index) => (
                                <li key={index}>
                                    <a className="text-md text-neutral-300 hover: hover:text-orange-500" href={item.href}>{item.title}</a>
                                </li>
                            ))}
                        </ul>

                        <ul className="space-y-8">
                            {NavLinks_Rigth.map((item, index) => (
                                <li key={index}>
                                    <a className="text-md text-neutral-300 hover:hover:text-orange-500" href={item.href}>{item.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* col - 3 */}


                    <div className="space-y-5 ml-0 lg:ml-20">
                        <div className="flex gap-3 w-full ">
                            <Phone className="w-8 h-8" />
                            <div>
                                <h2 className="text-xl text-neutral-300">Call Us</h2>
                                <p className="text-neutral-400">+91 95866 41338 <br />+91 83473 42356</p>
                            </div>
                        </div>

                        {contactInformation.map((item, index) => (
                            <div key={index} className="flex gap-3 w-full">
                                <div>
                                    {item.icon}
                                </div>
                                <div>
                                    <h2 className="text-xl text-neutral-300">{item.title}</h2>
                                    <p className="text-neutral-400">{item.contactInfo}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* End part */}

                <img src={wayToCulture} alt="Way To Culture" className="mx-auto w-2/3 sm:w-1/2 lg:w-1/3 mt-10" />

            </div>


            {/* Copyright */}
            <hr className="text-neutral-700 my-3 mx-5 sm:mx-10 lg:mx-20" />

            <div className="text-center pb-10">
                <p className="text-sm">&copy;2025 Kalrav Interior - Designed by <span className="text-neutral-400">Avadh R.</span></p>
            </div>

        </footer >
    )
}

export default Footer
import "./home.css"
import { Social } from "../../components/social"
import {FaInstagram, FaWhatsapp} from "react-icons/fa"
import {AiOutlineMail} from "react-icons/ai"

export default function Home() {
    return(
        <div className = "home-container">
            <h1>Pedro Victor Gouveia</h1>
            <span>Veja meus links 👇</span>

            <main className="links">
                <section className='link-area'>
                    <a href="#">
                        <p className="link-text">Linkedin</p>
                    </a>
                </section>
                <section className='link-area'>
                    <a href="#">
                        <p className="link-text">Github</p>
                    </a>
                </section>

                <footer>
                    <Social url="https://www.instagram.com/pedrovictorg/">
                        <FaInstagram size={35} color="white" />
                    </Social>
                    <Social url= "https://wa.me/+5511978524120">
                        <FaWhatsapp size={35} color="white"/>
                    </Social>
                    <Social url= "mailto:pvictorgouveia@gmail.com">
                        <AiOutlineMail size={35} color="white"/>
                    </Social>
                </footer>
            </main>

        </div>
    )
}
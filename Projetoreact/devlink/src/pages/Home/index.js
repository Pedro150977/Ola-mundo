import "./home.css"

export default function Home() {
    return(
        <div className = "home-container">
            <h1>Pedro Victor Gouveia</h1>
            <span>Veja meus links 👇</span>

            <main className="links">
                <section className='link-area'>
                    <a href="#">
                        <p className="link-text">Instagram</p>
                    </a>
                </section>
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
            </main>

        </div>
    )
}
import './Rodape.css'

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="facebook.com" target="_blank">
                        <img src="/imagens/fb.png" alt="logo-face" />
                    </a>
                </li>
                <li>
                    <a href="twitter.com" target="_blank">
                        <img src="/imagens/tw.png" alt="logo-twitter" />
                    </a>
                </li>
                <li>
                    <a href="instagram.com" target="_blank">
                        <img src="/imagens/ig.png" alt="logo-insta" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/imagens/logo.png" alt="logo-organo" />
        </section>
        <section>
            <p>
                Developed by Cassio Jhones<br />Finished in 29/01/2024
            </p>
        </section>
    </footer>)
}

export default Rodape

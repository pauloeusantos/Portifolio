import Footer from '../components/Footer/footer'
import Header from '../components/Header/header'

function Home() {
    return (
       <>
          
          <Container>
            <section className={styles.home}>
                <div className={styles.apresentacao}>
                    <p>
                        Olá, sou <br />
                        <span>Sandra Alves</span> <br />
                        Dev Full Stack
                    </p>
                    <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>
                        Saiba mais sobre mim
                    </Link>
                </div>
                <figure>
                    <img className={styles.img_home} src="/developer-red.svg" alt="Imagem de Home" />
                </figure>
            </section>
          </Container>
        </> 
    )
}

export default Home

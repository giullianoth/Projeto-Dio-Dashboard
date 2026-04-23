import { Link } from "react-router-dom"
import Header from "../../components/Header/index.js"
import { PrimaryButton } from "../../styles/button.js"
import { Container } from "../../styles/container.js"
import { HomeHeadline, HomeTagline, HomeTitle, HomeWrapper } from "./styles.jsx"
import pageBanner from "/images/image-homepage.png"
import { Section } from "../../styles/section.js"

const Home = () => {
    return (
        <>
            <Header />

            <main>
                <Section>
                    <Container>
                        <HomeWrapper>
                            <HomeHeadline>
                                <HomeTitle>
                                    <span>Implemente</span> o seu futuro global agora!
                                </HomeTitle>

                                <HomeTagline>
                                    Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
                                </HomeTagline>

                                <PrimaryButton as={Link} to="/login">Começar agora</PrimaryButton>
                            </HomeHeadline>

                            <div>
                                <img src={pageBanner} alt="Banner da Homepage" />
                            </div>
                        </HomeWrapper>
                    </Container>
                </Section>
            </main>
        </>
    )
}

export default Home
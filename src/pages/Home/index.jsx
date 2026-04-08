import { Link } from "react-router-dom"
import Header from "../../components/Header"
import { PrimaryButton } from "../../styles/button"
import { Container } from "../../styles/container"
import { HomeHeadline, HomeTagline, HomeTitle, HomeWrapper } from "./styles"
import pageBanner from "/images/image-homepage.png"
import { Section } from "../../styles/section"

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
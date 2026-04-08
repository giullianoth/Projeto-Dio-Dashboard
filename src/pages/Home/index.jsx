import { Link } from "react-router-dom"
import Header from "../../components/Header"
import { PrimaryButton } from "../../styles/button"
import { Container } from "../../styles/container"
import { HomeHeadline, HomeSection, HomeTagline, HomeTitle, HomeWrapper } from "./styles"
import pageBanner from "/images/image-homepage.png"

const Home = () => {
    return (
        <>
            <Header />

            <main>
                <HomeSection>
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
                </HomeSection>
            </main>
        </>
    )
}

export default Home
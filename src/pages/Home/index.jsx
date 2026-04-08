import Header from "../../components/Header"
import { PrimaryButton } from "../../styles/button"
import { Container } from "../../styles/container"
import { HomeHeadline, HomeSection, HomeTagline, HomeTitle, HomeWrapper } from "./styles"

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

                                <PrimaryButton>Começar agora</PrimaryButton>
                            </HomeHeadline>

                            <div>
                                <img src="/images/image-homepage.png" alt="" />
                            </div>
                        </HomeWrapper>
                    </Container>
                </HomeSection>
            </main>
        </>
    )
}

export default Home
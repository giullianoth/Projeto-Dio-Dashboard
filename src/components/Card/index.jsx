import { FiThumbsUp } from "react-icons/fi"
import { CardContainer, CardDescription, CardImage, CardImageContainer, CardInfo, CardLikes, CardTags, CardTitle, CardUser, CardUserImage, CardUserImageContainer, CardUserName, CardUserNameContainer } from "./styles"
import postImage from "/images/post-image.png"

const Card = () => {
    return (
        <CardContainer>
            <CardImageContainer>
                <CardImage src={postImage} alt="Projeto para curso de HTML e CSS" />
            </CardImageContainer>

            <CardInfo>
                <CardUser>
                    <CardUserImageContainer>
                        <a href="#">
                            <CardUserImage src="https://avatars.githubusercontent.com/u/106249494?v=4" alt="Giulliano Guimarães" />
                        </a>
                    </CardUserImageContainer>

                    <CardUserNameContainer>
                        <CardUserName>
                            <a href="#">Giulliano Guimarães</a>
                        </CardUserName>

                        <p>Há 8 minutos</p>
                    </CardUserNameContainer>
                </CardUser>

                <CardTitle>Projeto para curso de HTML e CSS</CardTitle>

                <CardDescription>
                    Projeto feito no curso de html e css no bootcamp da dio do Global avanade...{" "}
                    <a href="#">
                        <strong>Ver Mais</strong>
                    </a>
                </CardDescription>

                <CardTags>
                    <span>#HTML</span>
                    <span>#CSS</span>
                    <span>#JavaScript</span>
                </CardTags>

                <CardLikes>
                    <FiThumbsUp />
                    <strong>10</strong>
                </CardLikes>
            </CardInfo>
        </CardContainer>
    )
}

export default Card
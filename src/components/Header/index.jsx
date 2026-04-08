import { Link } from "react-router-dom"
import { Container } from "../../styles/container"
import { HeaderContainer, HeaderWrapper, Menu, MenuItem } from "./styles"
import { Button } from "../../styles/button"

const Header = () => {
    return (
        <HeaderContainer>
            <Container>
                <HeaderWrapper>
                    <Link to="/">
                        <img src="/images/logo-dio.png" alt="DIO" />
                    </Link>

                    <Menu>
                        <MenuItem>
                            <Link to="/">Home</Link>
                        </MenuItem>

                        <MenuItem>
                            <Button as="a" href="#">Entrar</Button>
                        </MenuItem>

                        <MenuItem>
                            <Button as="a" href="#">Cadastrar</Button>
                        </MenuItem>
                    </Menu>
                </HeaderWrapper>
            </Container>
        </HeaderContainer>
    )
}

export default Header
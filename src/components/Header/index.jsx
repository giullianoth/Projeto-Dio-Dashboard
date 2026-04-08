import { Link } from "react-router-dom"
import { Container } from "../../styles/container"
import { HeaderContainer, HeaderWrapper, Menu, MenuItem } from "./styles"
import { Button } from "../../styles/button"
import logo from "/images/logo-dio.png"

const Header = () => {
    return (
        <HeaderContainer>
            <Container>
                <HeaderWrapper>
                    <Link to="/">
                        <img src={logo} alt="DIO" />
                    </Link>

                    <Menu>
                        <MenuItem>
                            <Link to="/">Home</Link>
                        </MenuItem>

                        <MenuItem>
                            <Button as={Link} to="/login">Entrar</Button>
                        </MenuItem>

                        <MenuItem>
                            <Button as={Link} to="/cadastrar">Cadastrar</Button>
                        </MenuItem>
                    </Menu>
                </HeaderWrapper>
            </Container>
        </HeaderContainer>
    )
}

export default Header
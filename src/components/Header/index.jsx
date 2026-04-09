import { Link } from "react-router-dom"
import { Container } from "../../styles/container"
import { HeaderContainer, HeaderWrapper, Menu, MenuIcon, MenuItem } from "./styles"
import { Button } from "../../styles/button"
import logo from "/images/logo-dio.png"
import { MdMenu } from "react-icons/md"
import { useState } from "react"

const Header = () => {
    const [open, setOpen] = useState(false)

    const handleToggleMenu = () => {
        setOpen(prev => !prev)
    }

    return (
        <HeaderContainer>
            <Container>
                <HeaderWrapper>
                    <Link to="/">
                        <img src={logo} alt="DIO" />
                    </Link>

                    <MenuIcon onClick={handleToggleMenu}>
                        <MdMenu />
                    </MenuIcon>

                    <Menu open={open}>
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
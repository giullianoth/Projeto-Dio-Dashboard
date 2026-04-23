import { Link } from "react-router-dom"
import { Container } from "../../styles/container.js"
import { HeaderContainer, HeaderSearch, HeaderSearchIcon, HeaderSearchInput, HeaderUserContainer, HeaderUserIcon, HeaderUserImage, HeaderWrapper, Menu, MenuIcon, MenuItem } from "./styles.jsx"
import { Button } from "../../styles/button.js"
import logo from "/images/logo-dio.png"
import { MdKeyboardArrowDown, MdMenu, MdSearch } from "react-icons/md"
import { useState } from "react"

type Props = {
    authenticated?: boolean
}

const Header = ({ authenticated }: Props) => {
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

                    {authenticated &&
                        <Menu>
                            <MenuItem>
                                <HeaderSearch>
                                    <HeaderSearchIcon>
                                        <MdSearch />
                                    </HeaderSearchIcon>

                                    <HeaderSearchInput type="text" placeholder="Buscar" />
                                </HeaderSearch>
                            </MenuItem>

                            <MenuItem>
                                <a href="#">
                                    <strong>Live Code</strong>
                                </a>
                            </MenuItem>

                            <MenuItem>
                                <a href="#">
                                    <strong>Global</strong>
                                </a>
                            </MenuItem>
                        </Menu>}

                    {authenticated
                        ? <HeaderUserContainer>
                            <HeaderUserImage src="https://avatars.githubusercontent.com/u/106249494?v=4" alt="Giulliano Guimarães" />

                            <HeaderUserIcon>
                                <MdKeyboardArrowDown />
                            </HeaderUserIcon>
                        </HeaderUserContainer>

                        : <>
                            <MenuIcon onClick={handleToggleMenu}>
                                <MdMenu />
                            </MenuIcon>

                            <Menu $mobileMenu $open={open}>
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
                        </>}
                </HeaderWrapper>
            </Container>
        </HeaderContainer>
    )
}

export default Header
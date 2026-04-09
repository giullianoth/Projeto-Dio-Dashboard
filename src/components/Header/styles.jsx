import styled from "styled-components";
import { media } from "../../styles/responsivity";

export const HeaderContainer = styled.header`
    background-color: var(--color-background-alt);
    padding-block: 20px;
    position: relative;
`

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const HeaderSearch = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;
    width: 100%;
    max-width: 275px;
    background-color: var(--color-accent-neutral);
    border-radius: 10px;
`

export const HeaderSearchIcon = styled.span`
    display: inline-block;
    flex-basis: 1rem;
`

export const HeaderSearchInput = styled.input`
    border: none;
    background: none;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    flex-basis: calc(100% - 1rem);
    outline: none;
`

export const HeaderUserContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
`

export const HeaderUserImage = styled.img`
    width: 42px;
    height: 42px;
    object-fit: cover;
    border: 3px solid var(--color-white);
    border-radius: 50%;
`

export const HeaderUserIcon = styled.div`
    font-size: 1.6rem;
`

export const MenuIcon = styled.button`
    background: none;
    border: none;
    color: inherit;
    font-size: 2.2rem;
    cursor: pointer;
    display: none;

    ${media.large`
        display: block;
    `}
`

export const Menu = styled.ul`
    display: flex;
    align-items: center;
    gap: 24px;

    ${({ mobilemenu, open }) => mobilemenu
        ? media.large`
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: var(--color-background-alt);
            padding: ${open ? "20px" : "0"} 20px;
            flex-direction: column;
            z-index: 100;
            overflow: hidden;
            transition: var(--transition);
            max-height: ${open ? "179px" : "0"};
            border-top: 1px solid ${open ? "var(--color-accent-neutral)" : "transparent"};
        `
        : media.small`
            display: none;
        `}
`

export const MenuItem = styled.li`
    list-style-type: none;
`
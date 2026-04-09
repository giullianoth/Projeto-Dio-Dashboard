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

export const MenuIcon = styled.button`
    background: none;
    border: none;
    color: inherit;
    font-size: 2.2rem;
    cursor: pointer;
    display: none;

    svg {
        vertical-align: middle;
    }

    ${media.large`
        display: block;
    `}
`

export const Menu = styled.ul`
    display: flex;
    align-items: center;
    gap: 24px;

    ${media.large`
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background-color: var(--color-background-alt);
        padding: ${({ open }) => open ? "20px" : "0"} 20px;
        flex-direction: column;
        z-index: 100;
        overflow: hidden;
        transition: var(--transition);
        max-height: ${({ open }) => open ? "179px" : "0"};
        border-top: 1px solid ${({ open }) => open ? "var(--color-accent-neutral)" : "transparent"};
    `}
`

export const MenuItem = styled.li`
    list-style-type: none;
`
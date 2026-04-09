import styled from "styled-components"
import { media } from "../../styles/responsivity"

export const AuthWrapper = styled.div`
    display: flex;
    justify-content: space-between;

    ${media.large`
        flex-direction: column;
        align-items: center;
        row-gap: 60px;
    `}
`

export const AuthTitle = styled.h1`
    max-width: 480px;
    font-size: 2rem;
    line-height: 1.5;

    ${media.large`
        text-align: center;
    `}

    ${media.small`
        font-size: 1.6rem;
    `}
`

export const AuthFormWrapper = styled.div`
    width: 100%;
    max-width: 370px;
`

export const AuthFormTitle = styled.h3`
    margin-bottom: 12px;
    font-size: 2rem;

    ${media.large`
        text-align: center;
    `}
`

export const AuthFormText = styled.p`
    margin-bottom: 40px;

    ${media.large`
        text-align: center;
    `}
`

export const AuthForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 50px;

    button {
        margin-top: 30px;
    }
`

export const AuthLinks = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 700;

    span {
        ${media.large`
            margin-inline: auto;
        `}
    }
`

export const Forgot = styled.a`
    color: var(--color-yellow);
`

export const Redirect = styled.a`
    color: var(--color-green);
`
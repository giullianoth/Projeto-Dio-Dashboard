import styled from "styled-components"

export const AuthWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

export const AuthTitle = styled.h1`
    max-width: 480px;
    font-size: 2rem;
    line-height: 1.5;
`

export const AuthFormWrapper = styled.div`
    width: 100%;
    max-width: 370px;
`

export const AuthFormTitle = styled.h3`
    margin-bottom: 12px;
    font-size: 2rem;
`

export const AuthFormText = styled.p`
    margin-bottom: 40px;
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
`

export const Forgot = styled.a`
    color: var(--color-yellow);
`

export const Redirect = styled.a`
    color: var(--color-green);
`
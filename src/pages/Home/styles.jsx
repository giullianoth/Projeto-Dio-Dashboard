import styled from "styled-components"

export const HomeSection = styled.section`
    padding-block: 80px;
`

export const HomeWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const HomeHeadline = styled.div`
    max-width: 370px;
`

export const HomeTitle = styled.h1`
    font-size: 2rem;
    margin-bottom: 12px;

    span {
        color: var(--color-accent);
        display: block;
    }
`

export const HomeTagline = styled.p`
    line-height: 1.4;
    margin-bottom: 40px;
`
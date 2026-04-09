import styled from "styled-components"
import { Container } from "../../styles/container"
import { Section } from "../../styles/section"

export const FeedContainer = styled(Container)`
    display: flex;
    column-gap: 120px;
`

export const FeedSection = styled(Section)`
    width: 100%;
    max-width: 768px;
`

export const FeedTitle = styled.h1`
    margin-bottom: 20px;
    font-size: 1.125rem;
`

export const FeedPosts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`

export const FeedAside = styled(Section)`
    width: 100%;
    max-width: 270px;
`

export const FeedAsideTitle = styled.h2`
    margin-bottom: 24px;
    font-size: 1.125rem;
    color: rgba(255, 255, 255, 0.6);
    text-transform: uppercase;
`

export const FeedAsideUsers = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`
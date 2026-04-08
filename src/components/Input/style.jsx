import styled from "styled-components"

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    border-bottom: 1px solid var(--color-accent-neutral);
    transition: var(--transition);

    &:has(input:focus) {
        border-color: var(--color-accent-alt);
    }
`

export const InputIcon = styled.span`
    display: inline-block;
    color: var(--color-accent-alt);
    flex-basis: 1rem;
    
    & > * {
        vertical-align: middle;
    }
`

export const InputElement = styled.input`
    flex-grow: 1;
    border: none;
    background: none;
    font-size: inherit;
    font-family: inherit;
    font-weight: inherit;
    color: inherit;
    padding-block: 6px;
    outline: none;

    &::placeholder {
        color: var(--color-white);
    }
`
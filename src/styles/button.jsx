import styled from "styled-components"

const borderRadius = "50px";

export const Button = styled.button`
    display: inline-block;
    background-color: var(--color-background-neutral);
    padding: 6px 24px;
    border-radius: ${borderRadius};
    border: none;
    cursor: pointer;
    color: var(--color-white);
    font-size: inherit;
    font-family: inherit;
    font-weight: inherit;
`

export const PrimaryButton = styled(Button)`
    background-color: var(--color-accent);
    position: relative;

    &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: calc(100% + 6px);
        height: calc(100% + 6px);
        border: 1px solid var(--color-accent);
        border-radius: ${borderRadius};
    }
`
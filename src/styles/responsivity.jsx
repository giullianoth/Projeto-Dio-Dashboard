import { css } from "styled-components"

export const breakpoints = {
    extraSmall: 375,
    small: 576,
    medium: 768,
    large: 992,
    extraLarge: 1024,
    xxLarge: 1200
}

export const media = Object.keys(breakpoints).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media screen and (max-width: ${breakpoints[label] / 16}rem) {
            ${css(...args)};
        }
    `
    return acc
}, {})
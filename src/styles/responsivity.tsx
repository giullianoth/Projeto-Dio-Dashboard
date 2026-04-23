import { css, type CSSObject, type RuleSet } from "styled-components"

export const breakpoints = {
    extraSmall: 375,
    small: 576,
    medium: 768,
    large: 992,
    extraLarge: 1024,
    xxLarge: 1200
} as const

type BreakpontLabels = keyof typeof breakpoints

type MediaGenerator = (
    first: CSSObject | TemplateStringsArray,
    ...interpolations: any[]
) => RuleSet<object>

type MediaQueries = Record<BreakpontLabels, MediaGenerator>

export const media = (Object.keys(breakpoints) as BreakpontLabels[]).reduce((acc, label) => {
    acc[label] = (first, ...interpolations) => css`
        @media screen and (max-width: ${breakpoints[label] / 16}rem) {
            ${css(first, ...interpolations)};
        }
    `
    return acc
}, {} as MediaQueries)
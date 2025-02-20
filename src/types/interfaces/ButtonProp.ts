import React from "react"

export enum Variant {
    Primary = "primary",
    Negative = "negative",
    Secondary = "secondary"
}

export enum Appearance{
    Fill = "fill",
    Outline = "outline"
}

export enum Size{
    Small = 'sm',
    Medium = 'md',
    Large = 'lg'
}

export interface IButtonProp {
    variant?: Variant
    appearance?: Appearance
    loading?: boolean
    disable?: boolean
    size?: Size
    children?: React.ReactNode
}
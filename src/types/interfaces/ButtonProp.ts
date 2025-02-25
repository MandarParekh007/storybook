import React from "react"

export interface IButtonProp {
    variant?: "primary" | "negative" | "secondary"
    appearance?: "fill" | "outline"
    loading?: boolean
    disable?: boolean
    size?: "sm" | "md" | "lg"
    children?: React.ReactNode
    isIcon?: string
}
// themeDecorator.js
import React from "react"
import { ThemeProvider } from '@primer/react'

const ThemeDecorator = storyFn => (
  <ThemeProvider colorMode="day">{storyFn()}</ThemeProvider>
)

export default ThemeDecorator
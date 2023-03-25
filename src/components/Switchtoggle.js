import { switchAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys)

const baseStyle = definePartsStyle({
  container: {
    width:'70px',
  },
  thumb: {
    bg: 'var(--Very-Light-Grayish-Blue)',
  },
  track: {
    bg: 'var(--Gradient)',
    _checked: {
      bg: 'var(--Gradient)',
    },
  },
})

export const switchTheme = defineMultiStyleConfig({ baseStyle });
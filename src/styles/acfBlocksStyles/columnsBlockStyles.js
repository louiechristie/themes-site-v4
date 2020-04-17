import { darken } from 'polished'
export default {
  '&.whyJamstack': {
    '.colsWrap': {},
    '.columnItem': {
      bg: 'background',
      variant: 'gradients.cardGradient',
      borderRadius: 20,
      boxShadow: 'small',
      color: 'light',

      h3: {
        variant: 'text.headingBorders',
        fontSize: 'm',
      },
    },
  },
}

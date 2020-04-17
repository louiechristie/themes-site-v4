export default {
  '.project': {
    width: [`100%`, `50%`],
    px: 20,
    pb: 40,
  },
  '.projectTitle': {
    textAlign: `center`,
    mb: 20,
    pt: 30,
    textTransform: 'uppercase',
    fontSize: 'l',
  },
  '.description': {
    p: {
      fontSize: 'xs',
    },
  },
  '.button': {
    justifyContent: `center`,
    mb: 6,
    mt: 4,
  },
  '.projectWrap': {
    variant: 'gradients.cardGradient',
    p: 40,
    boxShadow: `small`,
    pb: 25,
    height: `100%`,
    flexDirection: `column`,
    justifyContent: `space-between`,
    transition: `all .4s ease-in-out`,
    borderRadius: 15,

    // '.gatsby-image-wrapper': {
    //   borderTopLeftRadius: 15,
    //   borderTopRightRadius: 15,
    // },
    '&:hover': {
      boxShadow: `default`,
      transform: `translateY(-5px)`,
    },
  },
}

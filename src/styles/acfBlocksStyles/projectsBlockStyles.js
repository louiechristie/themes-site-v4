export default {
  ".intro": {
    mb: 50,
    // display: "flex",
    // justifyContent: "space-between",
    p: {
      width: ["100%", "80%", "50%"],
      color: "text",
      fontSize: "xl",
      // textAlign: "left",
    },
    img: {
      maxWidth: 200,
    },
  },
  ".project": {
    width: [`100%`, `50%`],
    px: 20,
    pb: 40,
  },
  ".projectTitle": {
    textAlign: `center`,
    mb: 20,
    pt: 30,
    textTransform: "uppercase",
    fontSize: "l",
    color: "light",
  },
  ".description": {
    color: "light",
    fontSize: 17,
    mb: 30,
    maxWidth: 350,
    textAlign: "center",
    mx: "auto",
    fontStyle: "italic",
  },
  button: {
    px: 40,
    py: 12,
  },
  ".button": {
    justifyContent: `center`,
    mb: 6,
    mt: 4,
  },
  ".tags": {
    mb: 20,
    justifyContent: "center",
    flexWrap: "wrap",
  },
  ".badge": {
    bg: "yellow",
    mr: 10,
    mb: 10,
    color: "dark",
    px: 10,
    borderRadius: 5,
    textTransform: "uppercase",
    fontWeight: "bold",
    letterSpacing: 1,
    fontSize: "xxs",
  },
  ".projectWrap": {
    variant: "gradients.cardGradient",
    px: 20,
    py: 40,
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
    "&:hover": {
      boxShadow: `default`,
      transform: `translateY(-5px)`,
    },
  },
}

import { darken, lighten } from "polished"
export default {
  ".columnItem": {
    display: "flex",
    alignItems: "center",
  },
  "&.section-1": {
    p: { fontSize: "xl" },
    button: {
      variant: "gradients.primary",
    },
  },
  "&.section-2": {
    ".bigger": {
      fontSize: "xl",
      lineHeight: 1.5,
      mb: 20,
    },
    p: {
      fontSize: "m",
    },
  },
  "&.plugins": {
    color: "text",
    ".colsWrap": {
      px: [20],
      gridGap: 60,
    },
    // color: "textInverse",
    h2: {
      textTransform: "uppercase",
      // color: "light",
    },
    p: { display: "flex", justifyContent: "center" },
    img: {
      maxWidth: 80,
    },
    h3: {
      fontSize: 18,
    },
    ".col": {
      variant: "gradients.cardGradient",
      borderRadius: 20,
      color: "light",
      h3: {
        color: "secondary",
      },
    },
  },
  "&.getStarted": {
    p: {
      fontSize: "l",
      textTransform: "uppercase",
      fontWeight: "bold",
    },
  },
}

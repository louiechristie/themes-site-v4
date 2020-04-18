import { darken, lighten } from "polished"
import checked from "../../assets/images/check.svg"
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
      mb: 40,
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
        // color: "secondary",
        variant: "text.gradient.secondary",
      },
    },
    ul: {
      display: "flex",
      flexWrap: "wrap",
      maxWidth: 600,
      mt: 40,
      mx: "auto",
      justifyContent: "space-between",
      li: {
        width: "50%",
        pr: 20,
        textTransform: "uppercase",
        fontSize: "s",
        fontWeight: 600,
        listStyleType: "none",
        position: "relative",
        "&:before": {
          content: "''",
          position: "absolute",
          left: -35,
          background: `url(${checked})`,
          height: 24,
          width: 24,
        },
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

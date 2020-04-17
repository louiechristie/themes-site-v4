/** @jsx jsx */
import { jsx, useColorMode, Box } from "theme-ui"
import { useEffect } from "react"
import { Icon } from "react-icons-kit"
import { iosSunny as sun } from "react-icons-kit/ionicons/iosSunny"
import { iosMoon as moon } from "react-icons-kit/ionicons/iosMoon"

const ColorSwitch = ({ ...props }) => {
  const [colorMode, setColorMode] = useColorMode("dark")
  useEffect(() => {
    setColorMode("dark")
  }, [])

  return (
    <Box
      onClick={() => setColorMode(colorMode === "default" ? "dark" : "default")}
      {...props}
    >
      <Box sx={{ color: "light", mt: -7, cursor: "pointer" }}>
        {colorMode === "dark" ? (
          <Icon size={36} icon={sun} />
        ) : (
          <Icon size={36} icon={moon} />
        )}
      </Box>
    </Box>
  )
}

export default ColorSwitch

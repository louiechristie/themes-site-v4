export const header = {
  bg: 'headerBg',
  color: 'headerColor',
  fontWeight: 'bold',
  margin: 'none',

  '.container': {
    display: ['flex'],
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'center',
    fontSize: 'm',
    margin: '0 auto',
    maxWidth: 'container',
    py: 30,
    width: '90vw',
  },

  '.headroom--pinned &': {
    '>div': {
      py: 'xxs',
    },
  },
}

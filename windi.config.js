/* eslint-disable global-require */
export default {
  screens: {
    hh: { raw: '(hover: hover)' },
    p: { raw: '(orientation: portrait)' },
  },
  variants: {
    backgroundColor: ['can-hover', 'no-hover'],
  },
  plugins: [
    require('@windicss/plugin-interaction-variants'),
  ],
};

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './functions/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    maxWidth: {
      "mobile-menu": "320px"
     },
    minWidth: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
      "dropdown": "11rem",
      "palette":"23rem",
      "palette-md":"350px",
     },
    container: {
      width: {
        sm: '540px',
        md: '720px',
        lg: '960px',
        xl: '1140px',
        '2xl': '1320px'
      },
    },
    extend: {
      spacing: {
        "p-header": "55px",
        "p-design": "calc(100% - 56px)"
      },
      colors: {
        "primary" : "#1266F1",
        "secondary" : "#B23CFD",
        "success" : "#00B74A",
        "danger" : "#F93154",
        "warning" : "#FFA900",
        "info" : "#39C0ED",
        "light" : "#FBFBFB",
        "primary-hov" : "#0c56d0",
        "secondary-hov" : "#a316fd",
        "success-hov" : "#00913b",
        "danger-hov" : "#f80c35",
        "warning-hov" : "#d99000",
        "info-hov" : "#16b5ea",
        "light-hov" : "#e8e8e8",
        "light-2": "#f7f7f8",
        "dark" : "#262626",
        "util-1" : "#f7f7f8",
        "dark-background": "#181818",
        "dark-border":"#5b5b5b",
        "light-border":"#c4c4c4",
        "dark-util-1":"#2f2f2f",
        "dropdown-light": "#eee"
      },
      margin: {
        "sidebar": "200px"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

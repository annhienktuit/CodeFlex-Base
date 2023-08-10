module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  },
  theme: {
    extend: {
      colors: {
        primary: '#6DBE45',
        secondary: '#F4A623',
        background: '#FFFFFF',
        text: '#333333',
        accent1: '#E71D36',
        accent2: '#FF9F1C',
        accent3: '#2EC4B6',
        neutral1: '#C0C0C0',
        neutral2: '#E5E5E5',
      }
    },
  },
};

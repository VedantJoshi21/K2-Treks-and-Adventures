export const getTheme = (darkMode) => ({
  bg: darkMode ? '#181818' : '#fafaf9',
  text: darkMode ? '#f0f4f1' : '#1c1917',
  subtext: darkMode ? '#a8c4ae' : '#78716c',
  cardBg: darkMode ? 'rgba(255,255,255,0.04)' : '#ffffff',
  border: darkMode ? 'rgba(255,255,255,0.08)' : '#e7e5e4',
  navBg: darkMode ? 'rgba(24, 24, 24, 0.92)' : 'rgba(250,250,249,0.92)'
});

export const getTheme = () => {
  const store = localStorage.getItem('theme');
  if (!store) {
    localStorage.setItem('theme', 'dark');
    return 'dark';
  }
  return store;
};

export const setTheme = (value: string) => {
  localStorage.setItem('theme', value);
};

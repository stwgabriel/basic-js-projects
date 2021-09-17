const body = document.querySelector('body');
const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const userPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
let theme = '';

function setDark() {

   body.classList.remove('theme--light');
   body.classList.add('theme--dark');
};
function setLight() {

   body.classList.remove('theme--dark');
   body.classList.add('theme--light');
};
(function restoreTheme() {

   theme = localStorage.getItem('theme');

   if (theme === 'dark') {

      setDark();
      return;
   };
   if (theme === 'light') {

      setLight();
      return;
   };
   userPrefersTheme();
})()
function userPrefersTheme() {

   if (userPrefersDark) {

      body.classList.remove('theme--light');
      body.classList.add('theme--dark');
      saveTheme();
   };
   if (userPrefersLight) {

      body.classList.remove('theme--dark');
      body.classList.add('theme--light');
      saveTheme();
   };
};
function saveTheme() {

   if (body.classList.contains('theme--dark')) {

      theme = 'dark';
      localStorage.setItem('theme', theme);
      return
   };

   if (body.classList.contains('theme--light')) {

      theme = 'light';
      localStorage.setItem('theme', theme);
      return
   };
   userPrefersTheme();
};
function changeTheme() {

   if (body.classList.contains('theme--dark')) {

      setLight();
      saveTheme();
      return;
   };
   if (body.classList.contains('theme--light')) {

      setDark();
      saveTheme();
      return;
   };
   if (!body.classList.contains('theme--light') && !body.classList.contains('theme--dark')) {

      userPrefersTheme();
   };
};

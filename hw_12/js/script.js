let header = {
    logo: {
      url: '/home',
      text: 'logo',
    },
    nav: {
      1: {
        url: '/home',
        text: 'Home',
      },
      2: {
        url: '/about',
        text: 'About',
      },
      3: {
        url: '/portfolio',
        text: 'Portfolio',
      },
      4: {
        url: '/contacts',
        text: 'Contacts',
      }
    },
    btn: ['LogIn', 'LogOut'],
  };

  document.addEventListener('DOMContentLoaded', function() {

  let headerContainer = document.createElement('header');
  let logoLink = document.createElement('a');
  logoLink.href = header.logo.url;
  logoLink.textContent = header.logo.text;
  headerContainer.appendChild(logoLink);

  let navList = document.createElement('nav');
  for (let key in header.nav) {
    let navItem = document.createElement('li');
    let navLink = document.createElement('a');
    navLink.href = header.nav[key].url;
    navLink.textContent = header.nav[key].text;
    navItem.appendChild(navLink);
    navList.appendChild(navItem);
  }
  headerContainer.appendChild(navList);

  let btnContainer = document.createElement('div');
  btnContainer.className = 'btn-container';
  for (let btnText of header.btn) {
    let btn = document.createElement('button');
    btn.textContent = btnText;
    btnContainer.appendChild(btn);
  }
  headerContainer.appendChild(btnContainer);

  document.body.appendChild(headerContainer);
});
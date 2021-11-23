const importItems = [
  'High Quality Sanitary Wares',
  'Ceramic Tiles',
  'Swimming Pools',
  'Marble',
  'Granites',
  'Building Materials',
];

let itemCount = 1;

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    const importElem = document.querySelector('.import-item');
    importElem.innerHTML = importItems[0];
    navbarScroll(true);

    window.addEventListener('scroll', evt => {
      navbarScroll();
    });

    // For the scrolling
    navLinkCloseNav();

    changeText(1500);
  }
};

function changeText(delay) {
  setTimeout(async () => {
    await scrollImport(itemCount);

    if (itemCount === importItems.length - 1) {
      itemCount = 0;
    } else {
      itemCount++;
    }
    changeText(delay);
  }, delay);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function scrollImport(index) {
  // Fade element out
  const importElem = document.querySelector('.import-item');
  console.log('importELem: ', importElem);

  console.log('Adding fade class');
  importElem.classList.add('fade');
  await sleep(2000);

  importElem.innerHTML = importItems[index];

  // Fade element back in
  console.log('Removing the fade class');
  importElem.classList.remove('fade');
}

function navLinkCloseNav() {
  const navlinks = document.querySelectorAll('.nav-link');
  const navigation = document.querySelector('.navigation');

  navlinks.forEach(link => {
    link.addEventListener('click', () => {
      navigation.classList.remove('show-nav');
    });
  });
}

function toggleNav(evt) {
  console.log('Toggling navbar: ');

  const navigation = document.querySelector('.navigation');
  navigation.classList.toggle('show-nav');
}

function navbarScroll() {
  const topBar = document.querySelector('.top-bar');
  // console.log('Scrll top: ', document.documentElement.scrollTop);
  if (document.documentElement.scrollTop > 0) {
    topBar.classList.add('top-bar-alt');
  } else {
    topBar.classList.remove('top-bar-alt');
  }
}

function arrowLeft() {
  const cardHolder = document.querySelector('.card-holder');
  const scrollWidth = document.querySelectorAll('.card')[0].scrollWidth;
  cardHolder.scrollBy({
    left: 0 - scrollWidth,
    behavior: 'smooth',
  });
}

function arrowRight() {
  const cardHolder = document.querySelector('.card-holder');
  const scrollWidth = document.querySelectorAll('.card')[0].scrollWidth;
  cardHolder.scrollBy({
    left: scrollWidth,
    behavior: 'smooth',
  });
}

const filterText = document.querySelector('.filter-content');
const filterMenu = document.querySelector('.select-style');
const flagsContent = document.querySelector('.flag-info');
const searchContent = document.querySelector('.searchContent');
const moreInfo = document.querySelector('.flag-more-info');

// Exports

export {changeTheme, clickedFilter, returnToFlags};

// Change Theme In LocalStorage

const changeTheme = e => {
  if (document.body.classList.value === 'light') {
    document.body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    return;
  }
  document.body.classList.remove('dark');
  document.body.classList.add('light');
  localStorage.setItem('theme', 'light');
};

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
}

// Open Filter By Region

const clickedFilter = e => {
  if (e.target.classList[0] === 'filter-content') {
    filterMenu.classList.toggle('active');
    filterText.textContent = e.target.textContent;
  }
  if (e.target.classList[0] === 'item-value') {
    filterRegion(e);
    filterText.textContent = e.target.textContent;
    filterMenu.classList.toggle('active');
  }
};

// Modify Filter In to Menu

const filterRegion = e =>
  Array.from(flagsContent.children).filter(item => {
    const filterRegion = item.textContent.includes(e.target.textContent);

    filterRegion ? item.classList.remove('hidden') : item.classList.add('hidden');

    if (e.target.textContent === 'All') {
      item.classList.remove('hidden');
    }
  });

// Back To Inicial Page

const returnToFlags = () => {
  flagsContent.classList.remove('hidden');
  searchContent.classList.remove('hidden');
  moreInfo.classList.add('hidden');
};

const theme = document.querySelector('.modify-theme');
const searchContent = document.querySelector('.searchContent');
const input = document.querySelector('#searchItem');
const filterMenu = document.querySelector('.select-style');
const flagsContent = document.querySelector('.flag-info');
const moreInfo = document.querySelector('.flag-more-info');
const backMenu = document.querySelector('.return');

// imports

import {clickedFilter, changeTheme, returnToFlags} from './menu.js';
import {getStates, searchItemIntoFlags, getMoreInfo} from './flags.js';

// API to Get All Rest Countries

const sendFullCountries = async () => {
  const url = await fetch('https://restcountries.com/v3.1/all');
  const response = await url.json();
  getStates(response);
};

// API to Get a Specific Rest Countrie

const sendMoreInfo = async state => {
  const url = await fetch(`https://restcountries.com/v3.1/name/${state}?fullText=true`);
  const response = await url.json();
  getMoreInfo(response);
};

const showMoreInfo = async e => {
  const isFlagContent = e.target.parentElement.classList[0] !== 'container';
  if (isFlagContent) {
    flagsContent.classList.add('hidden');
    searchContent.classList.add('hidden');
    moreInfo.classList.remove('hidden');
    sendMoreInfo(e.target.parentElement.childNodes[3].textContent.trim());
  }
};

// Event Listeners

document.body.addEventListener('load', sendFullCountries());
backMenu.addEventListener('click', returnToFlags);
theme.addEventListener('click', changeTheme);
input.addEventListener('input', searchItemIntoFlags);
flagsContent.addEventListener('click', showMoreInfo);
filterMenu.addEventListener('click', clickedFilter);

// Functions

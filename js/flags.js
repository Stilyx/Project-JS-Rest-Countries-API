const flagsContent = document.querySelector('.flag-info');
const input = document.querySelector('#searchItem');

// Exports

export {getStates, searchItemIntoFlags, getMoreInfo};

// Get and show All Countries Flags

const getStates = response => response.map(statesDivContent);
const statesDivContent = ({flags, name, population, region, capital}) => {
  flagsContent.innerHTML += `<div class="flag-content">
<img src="${flags.png}" alt="flag" class="flag" />
<h1 class="state"> ${name.common}</h1>
<p class="population"> Population: <span>${population}</span> </p>
<p class="region"> Region: <span>${region}</span></p>
<p class="capital"> Capital: <span>${capital}</span> </p>
</div>`;
};

// Search for States

const searchItemIntoFlags = event =>
  Array.from(flagsContent.children).filter(filterFlagTextContent);

const filterFlagTextContent = text => {
  const eventValue = input.value.trim().toLowerCase();
  const filterInputValue = text.textContent.toLowerCase().includes(eventValue);

  return filterInputValue ? text.classList.remove('hidden') : text.classList.add('hidden');
};

// More info About State Content

const getMoreInfo = response => Array.from(response).map(moreInfoContent);
const moreInfoContent = ({
  flags,
  name,
  population,
  region,
  subregion,
  capital,
  tld,
  currencies,
  languages,
  borders
}) => {
  document.querySelector('.more-info-image').src = flags.png;
  document.querySelector('.region-name').textContent = name.common;
  document.querySelector('.populationNumber').textContent = population.toLocaleString();
  document.querySelector('.regionName').textContent = region;
  document.querySelector('.subRegion').textContent = subregion;
  document.querySelector('.capitalName').textContent = capital;
  document.querySelector('.levelDomain').textContent = tld;
  document.querySelector('.currencies').textContent = Object.values(currencies)[0].name;
  document.querySelector('.nativeName').textContent = name.official;
  document.querySelector('.languagues').textContent = languagesInToParagraph(languages);

  if (borders === undefined) {
    document.querySelector(
      '.countriesList'
    ).innerHTML = `<li class="countrieName">No Border Countries</li>`;
  } else {
    document.querySelector('.countriesList').innerHTML = addCountriesInLi(borders);
  }
};

// Fix Language Setence

const languagesInToParagraph = item =>
  Object.values(item)
    .reduce((acc, item) => (acc += ` ${item} ,`), '')
    .slice(0, -1);

// ADD Border Countries LI

const addCountriesInLi = borders =>
  Array.from(borders).reduce(
    (acc, countrie) => (acc += `<li class="countrieName">${countrie}</li>`),
    ''
  );

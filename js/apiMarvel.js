// const ITEMSPERPAGE = 12;

// document.addEventListener('DOMContentLoaded', () => {
//   const loader = document.getElementById('loader');

//   calculatePagination()
//     .then(allPages => {
//       addCharacters(allPages[0]);

//       let page = 0;

//       const pagination = document.querySelector('.pagination');
//       const botonAnterior = document.querySelector('.botonAnterior');
//       const botonSiguiente = document.querySelector('.botonSiguiente');

//       pagination.innerHTML = `${page + 1}/${allPages.length}`;

//       if (allPages.length === 1) {
//         botonAnterior.style.display = 'none';
//         botonSiguiente.style.display = 'none';
//         pagination.innerHTML = '';
//         return;
//       }

//       botonAnterior.addEventListener('click', () => {
//         page--;
//         if (page < 0) page = allPages.length - 1;
//         addCharacters(allPages[page]);
//         pagination.innerHTML = `${page + 1}/${allPages.length}`;
//       });

//       botonSiguiente.addEventListener('click', () => {
//         page++;
//         if (page > allPages.length - 1) page = 0;
//         addCharacters(allPages[page]);
//         pagination.innerHTML = `${page + 1}/${allPages.length}`;
//       });

//       loader.style.display = 'none';
//     })
//     .catch(error => {
//       console.error('Error: ', error);
//       loader.style.display = 'none';
//     });
// });

// function addCharacters(pageArray) {
//   const charactersContainer = document.querySelector('.characters');
//   charactersContainer.innerHTML = '';

//   pageArray.forEach(character => {
//     const imageElem = document.createElement('img');
//     imageElem.src = `${character.thumbnail.path}.${character.thumbnail.extension}`;
//     imageElem.alt = character.name;
//     imageElem.classList.add('imgCharacter');
//     imageElem.setAttribute('loading', 'lazy');

//     const titleElem = document.createElement('h3');
//     titleElem.innerHTML = character.name;

//     const anchorElem = document.createElement('a');
//     anchorElem.href = character.urls[0].url;

//     const characterDiv = document.createElement('div');
//     characterDiv.classList.add('character');

//     anchorElem.appendChild(imageElem);
//     anchorElem.appendChild(titleElem);
//     characterDiv.appendChild(anchorElem);

//     if (character.urls[2]) {
//       const comicsButton = document.createElement('a');
//       comicsButton.href = character.urls[2].url;
//       comicsButton.innerHTML = 'Comics';
//       comicsButton.classList.add('botonComic');
//       characterDiv.appendChild(comicsButton);
//     }

//     charactersContainer.appendChild(characterDiv);
//   });
// }

// function calculatePagination() {
//   return getCharacters()
//     .then(allCharacters => {
//       let fullPage = [];
//       let charactersArray = [];
//       let characterCounter = 0;

//       allCharacters.forEach(character => {
//         fullPage.push(character);
//         characterCounter++;
//         if (characterCounter === ITEMSPERPAGE || character === allCharacters[allCharacters.length - 1]) {
//           charactersArray.push(fullPage);
//           fullPage = [];
//           characterCounter = 0;
//         }
//       });
//       return charactersArray;
//     });
// }

// function getCharacters() {
//   const PUBLIC_KEY = '1b61b8d83107cf2d50b0b8748f7baea5';
//   const PRIVATE_KEY = 'faad6053ae00ee3af208f0711ea63ea1d418546d';
//   const limit = 8; // Limitamos a 8 resultados por página


//   const baseURL = 'https://gateway.marvel.com/v1/public/';
//   const endpoint = 'characters';
//   const ts = new Date().getTime().toString();
//   const hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY);
//   const url = `${baseURL}${endpoint}?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`;


//   return fetch(url)
//     .then(response => response.ok ? response.json() : Promise.reject(new Error(`Error: ${response.status}`)))
//     .then(data => data.data.results)
//     .catch(error => console.error('Error: ', error));
// }

const publicKey = '1b61b8d83107cf2d50b0b8748f7baea5';
const privateKey = 'faad6053ae00ee3af208f0711ea63ea1d418546d';
// const baseURL = 'https://gateway.marvel.com:443/v1/public/characters';
// const baseURL = 'https://gateway.marvel.com:443/v1/public/comics';
const baseURL = 'https://gateway.marvel.com:443/v1/public/series';

const limit = 8;

const getMarvelCharacters = async (offset) => {
  const ts = Date.now();
  const hash = md5(ts + privateKey + publicKey);

  const response = await fetch(`${baseURL}?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=${limit}&offset=${offset}`);
  const data = await response.json();

  if (data.code !== 200 || data.data === undefined || data.data.results === undefined) {
    throw new Error('Error al obtener los personajes de Marvel.');
  }

  return data.data.results;
};

const displayCharacters = (characters) => {
  const charactersContainer = document.getElementById('characters');
  charactersContainer.innerHTML = '';

  characters.forEach(character => {
    const characterDiv = document.createElement('div');
    characterDiv.classList.add('character');

    const imageElem = document.createElement('img');
    imageElem.src = `${character.thumbnail.path}.${character.thumbnail.extension}`;
    imageElem.alt = character.name;

    const nameElem = document.createElement('p');
    nameElem.textContent = character.title;
    // const descriptionElem = document.createElement('p');
    // descriptionElem.textContent = character.description || 'Description not available';

    characterDiv.appendChild(imageElem);
    characterDiv.appendChild(nameElem);
    // characterDiv.appendChild(descriptionElem);

    charactersContainer.appendChild(characterDiv);
  });
};

const paginateCharacters = async (currentPage) => {
  const offset = (currentPage - 1) * limit;

  try {
    const characters = await getMarvelCharacters(offset);
    displayCharacters(characters);
  } catch (error) {
    console.error('Error al paginar los personajes:', error.message);
  }
};

let currentPage = 1;
const nextPageButton = document.getElementById('nextPage');
const prevPageButton = document.getElementById('prevPage');

nextPageButton.addEventListener('click', () => {
  currentPage++;
  paginateCharacters(currentPage);
});

prevPageButton.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    paginateCharacters(currentPage);
  }
});

// Cargar la primera página al cargar la página
paginateCharacters(currentPage);


// const publicKey = '1b61b8d83107cf2d50b0b8748f7baea5';
// const privateKey = 'faad6053ae00ee3af208f0711ea63ea1d418546d';
// const baseURL = 'https://gateway.marvel.com:443/v1/public/series';

// const limit = 8;

// const getMarvelCharacters = async (offset) => {
//   const ts = Date.now();
//   const hash = md5(ts + privateKey + publicKey);

//   const response = await fetch(`${baseURL}?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=${limit}&offset=${offset}`);
//   const data = await response.json();

//   if (data.code !== 200 || data.data === undefined || data.data.results === undefined) {
//     throw new Error('Error al obtener los personajes de Marvel.');
//   }

//   return data.data.results;
// };

// const displayCharacters = (characters) => {
//   const charactersContainer = document.getElementById('characters');
//   charactersContainer.innerHTML = '';

//   characters.forEach(character => {
//     const characterDiv = document.createElement('div');
//     characterDiv.classList.add('character');

//     const imageElem = document.createElement('img');
//     imageElem.src = `${character.thumbnail.path}.${character.thumbnail.extension}`;
//     imageElem.alt = character.name;

//     const nameElem = document.createElement('p');
//     nameElem.textContent = character.title;

//     characterDiv.appendChild(imageElem);
//     characterDiv.appendChild(nameElem);

//     charactersContainer.appendChild(characterDiv);
//   });
// };

// const paginateCharacters = async (currentPage) => {
//   const offset = (currentPage - 1) * limit;

//   try {
//     const characters = await getMarvelCharacters(offset);
//     displayCharacters(characters);
//   } catch (error) {
//     console.error('Error al paginar los personajes:', error.message);
//   }
// };

// let currentPage = 1;
// const nextPageButton = document.getElementById('nextPage');
// const prevPageButton = document.getElementById('prevPage');

// nextPageButton.addEventListener('click', () => {
//   currentPage++;
//   paginateCharacters(currentPage);
// });

// prevPageButton.addEventListener('click', () => {
//   if (currentPage > 1) {
//     currentPage--;
//     paginateCharacters(currentPage);
//   }
// });

// paginateCharacters(currentPage);


const publicKey = '1b61b8d83107cf2d50b0b8748f7baea5';
const privateKey = 'faad6053ae00ee3af208f0711ea63ea1d418546d';
const baseURL = 'https://gateway.marvel.com:443/v1/public/series';
const limit = 8;

const showLoader = () => {
  document.getElementById('loader').style.display = 'block';
};

const hideLoader = () => {
  document.getElementById('loader').style.display = 'none';
};

const getMarvelCharacters = async (offset) => {
  const ts = Date.now();
  const hash = md5(ts + privateKey + publicKey);

  showLoader();

  try {
    const response = await fetch(`${baseURL}?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=${limit}&offset=${offset}`);
    const data = await response.json();

    if (data.code !== 200 || data.data === undefined || data.data.results === undefined) {
      throw new Error('Error al obtener los personajes de Marvel.');
    }

    return data.data.results;
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    hideLoader();
  }
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

    characterDiv.appendChild(imageElem);
    characterDiv.appendChild(nameElem);

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

paginateCharacters(currentPage);

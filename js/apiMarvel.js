const md5 = require('md5');

const PUBLIC_KEY = '1b61b8d83107cf2d50b0b8748f7baea5';
const PRIVATE_KEY = 'faad6053ae00ee3af208f0711ea63ea1d418546d';

const baseURL = 'https://gateway.marvel.com/v1/public/';
const endpoint = 'characters';
const ts = new Date().getTime().toString();
const hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY);
const url = `${baseURL}${endpoint}?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`;

    fetch(url)
    .then(response => {
        // Verifica si la solicitud fue exitosa
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(`Error: ${response.status}`);
        }
    })
    .then(data => {
        const characters = data.data.results;
       console.log(characters)
        characters.forEach(character => {
            const imgSrc = `${character.thumbnail.path}.${character.thumbnail.extension}`;
            const imgElement = document.createElement('img');
            imgElement.src = imgSrc;
            document.body.appendChild(imgElement);
        });
        //  const characters = data.data.results;
        // characters.forEach(character => {
        //     console.log(`Cómics de ${character.name}:`);
        //     character.comics.items.forEach(comic => {
        //         console.log(comic.name);
        //     });
        //          console.log('---');
        // });
    })
    .catch(error => {
        console.error('Error:', error);
    });
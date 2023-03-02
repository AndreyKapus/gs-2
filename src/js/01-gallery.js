import { galleryItems } from './gallery-items.js';
const galleryEl = document.querySelector('.gallery');
console.log(galleryEl)

const renderGellery = () => {
    const pictures = galleryItems.map(({preview, original, description}) => {
     return `<div>
     <img src=${preview} alt=${description} class="gallery__image"/>
     </div>`
    }).join('')
    return pictures;
};
const galleryListMarkup = renderGellery(galleryItems)
galleryEl.insertAdjacentHTML('beforeend', galleryListMarkup)

// console.log(galleryItems);

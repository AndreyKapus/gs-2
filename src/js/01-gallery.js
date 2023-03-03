import { galleryItems } from './gallery-items.js';
const galleryEl = document.querySelector('.gallery');


const renderGellery = () => {
    const pictures = galleryItems.map(({preview, original, description}) => {
     return `<div class="gallery__item">
     <img src=${preview} alt=${description} data-source=${original} class="gallery__image"/>
     </div>`
    }).join('')
    return pictures;
};
const galleryListMarkup = renderGellery(galleryItems)
galleryEl.insertAdjacentHTML('beforeend', galleryListMarkup)

// console.log(galleryItems);

const onImageClick = (e) => {
    if(!e.target.classList.contains('gallery__image')) {
        return
    }
 
    const image = e.target.dataset.source

    const instance = basicLightbox.create(`
    <img src=${image} width="800" height="600">
`)
    instance.show()
};



const onGalleryItemClick = galleryEl.addEventListener('click', onImageClick)





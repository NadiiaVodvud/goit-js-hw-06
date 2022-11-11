const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const link = document.querySelector('link');
// const galleryStyle = [
//   '<style>.gallery {list-style: none; display: grid; gap: 10px; align-items: center; grid-template-columns: 1fr 1.7fr 1fr; } .gallery__picture { width: 100%; height: auto; border-radius: 5px; border-style: outset; opacity: 0.9; } .gallery__picture:hover, .gallery__picture:focus { opacity: 1; scale: 1.05; transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1), visibility 250ms cubic-bezier(0.4, 0, 0.2, 1), scale 250ms cubic-bezier(0.4, 0, 0.2, 1);} </style>',
// ].join('');

// link.insertAdjacentHTML('afterend', galleryStyle);

const list = document.querySelector('.gallery');

const cardGallery = images
  .map(
    image =>
      `<li class = "gallery__items"><img class = "gallery__picture" src = ${image.url} alt = ${image.alt} width = "300" height = "200"> </li>`
  )
  .join('');
// console.log(cardGallery);

list.insertAdjacentHTML('afterbegin', cardGallery);

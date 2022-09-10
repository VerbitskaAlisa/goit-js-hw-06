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


// const makeGalleryOfPictures = images => {
//   return images.map(({url, alt}) => {
//     const galleryItemEl = document.createElement('li');
//     const linkEl = document.createElement("img");
//     linkEl.src = url;
//     linkEl.alt = alt;
//     galleryItemEl.appendChild(linkEl);
//     return galleryItemEl;
//   })
// };

// const allImg = makeGalleryOfPictures(images);

// const galleryRef = document.querySelector(".gallery");
// galleryRef.append(...allImg);

// console.log(galleryRef);

const gallaryRef = document.querySelector(".gallery");

const itemsList = images.map(({url, alt}) => {
return `<li class="item"><img src="${url}" alt="${alt}" width="500"></img></li>`;
});

const markup = itemsList.join("");
gallaryRef.insertAdjacentHTML("beforeend", markup);

gallaryRef.style.cssText = "display: flex; justify-content: center; align-items: center"
const itemEL = document.querySelectorAll(".item");

itemEL.forEach(item => {
  item.style.marginRight = "50px"
  return item;
});
itemEL[2].style.marginRight = "0";





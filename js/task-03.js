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

const galleryEl = document.querySelector(".gallery");
galleryEl.style.display = "flex";
galleryEl.style.justifyContent = "space-between";
galleryEl.style.flexWrap = "wrap";
galleryEl.style.padding = "30px 30px";
galleryEl.style.maxWidth = "1360px";
galleryEl.style.listStyleType = "none";
galleryEl.style.alignItems = "stretch";

const createGallaryItem = ({ url, alt } = {}) => {
  return `<li>
  <img src=${url} alt=${alt} width="370">
</li>`;
};

const createGallaryList = images.map(image => {
  return createGallaryItem(image);
}).join("");

galleryEl.insertAdjacentHTML("beforeend", createGallaryList);

console.log(galleryEl);



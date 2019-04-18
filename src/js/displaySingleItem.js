import axios from 'axios';
import $ from 'jquery';

const api = axios.create({
    baseURL: `http://localhost:3000`,
  });

async function displaySingleItem(item, description, images) {
    console.log(`naziv proizvoda ${item.name}, cena ${item.price.toLocaleString(`sr-RS`)}, opis: ${description}`);
    $(`#description`).html(description);
}

async function getImages(id) {
    try {
        const response = await api.get(`/itemImages?id=${id}`);
        const images = response.data;
        //
        return images[0];
  } catch (e) {
    console.log(e);
  }
}

async function getDescription(id) {
    try {
        const response = await api.get(`/itemDescription?id=${id}`);
        const descriptions = response.data;
        const description = descriptions[0].text;
        return description;
  } catch (e) {
    console.log(e);
  }
}

async function getSingleItem(id) {
    const response = await api.get(`/items?id=${id}`);
    const item = await response.data;
    const description = await getDescription(item[0].descriptionId);
    const images = await getImages(item[0].imagesId);
    displaySingleItem(item[0], description, images);
  }

function getItemId(e) {
    if (e.target.classList.contains(`itemCart`) || e.target.classList.contains(`fa-shopping-cart`)) {
        const id = JSON.parse(sessionStorage.getItem(`item id`));
        getSingleItem(id);
        }
}

$(document).ready(() => {
    $(`#itemContainer`).click(getItemId);
});

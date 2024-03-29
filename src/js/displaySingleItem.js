/* eslint-disable consistent-return */

import axios from 'axios';
import $ from 'jquery';

const api = axios.create({
    baseURL: `http://localhost:3000`,
  });

async function displaySingleItem(item, description, images) {
  $(`#itemName`).text(item.name);
  $(`#itemPrice`).html(`${item.price.toLocaleString(`sr-RS`)} <span> RSD</span>`);
  $(`#itemDescription`).text(description);
  $(`#expandedImg`).attr({src: item.img1Url, alt: item.name});
  $(`#img1`).attr({src: images.imgUrl[0], alt: item.name});
  $(`#img2`).attr({src: images.imgUrl[1], alt: item.name});
  $(`#img3`).attr({src: images.imgUrl[2], alt: item.name});
  $(`#addToCartButton`).attr(`data-id`, item.id);

  function sizeFalse(size) {
    $(`.${size} input`).prop(`disabled`, true);
    $(`.${size} .number`).css(`color`, `#cdcdcd`);
    $(`.${size} .checkmark`).hover(() => {
      $(`.${size} .checkmark`).css(`background-color`, `#eee`);
      $(`.${size} .checkmark`).css(`cursor`, `not-allowed`);
      }, () => {
        $(`.${size} .checkmark`).css(`background-color`, `#eee`);
    });
  }
  function sizeTrue(size) {
    $(`.${size} input`).prop(`disabled`, false);
    $(`.${size} .number`).css(`color`, `#000`);
    $(`.${size} .checkmark`).hover(() => {
      $(`.${size} .checkmark`).css(`background-color`, `#818181`);
      $(`.${size} .checkmark`).css(`cursor`, `pointer`);
      }, () => {
        $(`.${size} .checkmark`).css(`background-color`, `#eee`);
    });
  }
  item.size37 === true ? sizeTrue(37) : sizeFalse(37);
  item.size38 === true ? sizeTrue(38) : sizeFalse(38);
  item.size39 === true ? sizeTrue(39) : sizeFalse(39);
  item.size40 === true ? sizeTrue(40) : sizeFalse(40);
  item.size41 === true ? sizeTrue(41) : sizeFalse(41);
  item.size42 === true ? sizeTrue(42) : sizeFalse(42);
}

async function getImages(id) {
  try {
      const response = await api.get(`/itemImages?id=${id}`);
      const images = response.data;
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

export { getSingleItem, api };

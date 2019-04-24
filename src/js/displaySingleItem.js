import axios from 'axios';
import $ from 'jquery';

const api = axios.create({
    baseURL: `http://localhost:3000`,
  });

async function displaySingleItem(item, description, images) {
  $(`#itemName`).text(item.name);
  $(`#itemPrice`).html(`${item.price.toLocaleString(`sr-RS`)} <span> RSD</span>`);
  $(`#itemDescription`).text(description);
  $(`#expandedImg`).attr(`src`, images.imgUrl[0]);
  $(`#img1`).attr(`src`, images.imgUrl[0]);
  $(`#img2`).attr(`src`, images.imgUrl[1]);
  $(`#img3`).attr(`src`, images.imgUrl[2]);
  $(`#addToCartButton`).attr(`data-id`, item.id);
  if (item.size37 !== true) {
    $(`.37 input`).prop(`disabled`, true);
    $(`.37 p`).css(`color`, `#cdcdcd`);
    $(`.37 span`).hover(function () {
      $(this).css(`background-color`, ` #eee`);
      $(this).css(`cursor`, `not-allowed`);
      }, function () {
      $(this).css(`background-color`, ` #eee`);
    });
  } else {
    $(`.37 input`).prop(`disabled`, false);
    $(`.37 p`).css(`color`, `#000`);
    $(`.37 span`).hover(function () {
      $(this).css(`background-color`, ` #818181`);
      $(this).css(`cursor`, `pointer`);
      }, function () {
      $(this).css(`background-color`, ` #eee`);
    });
  }

  if (item.size38 !== true) {
    $(`.38 input`).prop(`disabled`, true);
    $(`.38 p`).css(`color`, `#cdcdcd`);
    $(`.38 span`).hover(function () {
      $(this).css(`background-color`, ` #eee`);
      $(this).css(`cursor`, `not-allowed`);
      }, function () {
      $(this).css(`background-color`, ` #eee`);
    });
  } else {
    $(`.38 input`).prop(`disabled`, false);
    $(`.38 p`).css(`color`, `#000`);
    $(`.38 span`).hover(function () {
      $(this).css(`background-color`, ` #818181`);
      $(this).css(`cursor`, `pointer`);
      }, function () {
      $(this).css(`background-color`, ` #eee`);
    });
  }

  if (item.size39 !== true) {
    $(`.39 input`).prop(`disabled`, true);
    $(`.39 p`).css(`color`, `#cdcdcd`);
    $(`.39 span`).hover(function () {
      $(this).css(`background-color`, ` #eee`);
      $(this).css(`cursor`, `not-allowed`);
      }, function () {
      $(this).css(`background-color`, ` #eee`);
    });
  } else {
    $(`.39 input`).prop(`disabled`, false);
    $(`.39 p`).css(`color`, `#000`);
    $(`.39 span`).hover(function () {
      $(this).css(`background-color`, ` #818181`);
      $(this).css(`cursor`, `pointer`);
      }, function () {
      $(this).css(`background-color`, ` #eee`);
    });
  }

  if (item.size40 !== true) {
    $(`.40 input`).prop(`disabled`, true);
    $(`.40 p`).css(`color`, `#cdcdcd`);
    $(`.40 span`).hover(function () {
      $(this).css(`background-color`, ` #eee`);
      $(this).css(`cursor`, `not-allowed`);
      }, function () {
      $(this).css(`background-color`, ` #eee`);
    });
  } else {
    $(`.40 input`).prop(`disabled`, false);
    $(`.40 p`).css(`color`, `#000`);
    $(`.40 span`).hover(function () {
      $(this).css(`background-color`, ` #818181`);
      $(this).css(`cursor`, `pointer`);
      }, function () {
      $(this).css(`background-color`, ` #eee`);
    });
  }

  if (item.size41 !== true) {
    $(`.41 input`).prop(`disabled`, true);
    $(`.41 p`).css(`color`, `#cdcdcd`);
    $(`.41 span`).hover(function () {
      $(this).css(`background-color`, ` #eee`);
      $(this).css(`cursor`, `not-allowed`);
      }, function () { 
      $(this).css(`background-color`, ` #eee`);
    });
  } else {
    $(`.41 input`).prop(`disabled`, false);
    $(`.41 p`).css(`color`, `#000`);
    $(`.41 span`).hover(function () {
      $(this).css(`background-color`, ` #818181`);
      $(this).css(`cursor`, `pointer`);
      }, function () {
      $(this).css(`background-color`, ` #eee`);
    });
  }

  if (item.size42 !== true) {
    $(`.42 input`).prop(`disabled`, true);
    $(`.42 p`).css(`color`, `#cdcdcd`);
    $(`.42 span`).hover(function () {
      $(this).css(`background-color`, ` #eee`);
      $(this).css(`cursor`, `not-allowed`);
      }, function () {
      $(this).css(`background-color`, ` #eee`);
    });
  } else {
    $(`.42 input`).prop(`disabled`, false);
    $(`.42 p`).css(`color`, `#000`);
    $(`.42 span`).hover(function () {
      $(this).css(`background-color`, ` #818181`);
      $(this).css(`cursor`, `pointer`);
      }, function () {
      $(this).css(`background-color`, ` #eee`);
    });
  }
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

function getItemId(e) {
  if (e.target.classList.contains(`itemCart`) || e.target.classList.contains(`fa-shopping-cart`)) {
      const id = JSON.parse(sessionStorage.getItem(`item id`));
      getSingleItem(id);
      }
}


$(document).ready(() => {
    $(`#itemContainer`).click(getItemId);
    // $(`#addToCartButton`).click(addToCart);
});

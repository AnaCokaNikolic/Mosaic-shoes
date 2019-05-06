import $ from 'jquery';
import axios from 'axios';

import { getSingleItem } from './displaySingleItem';

const api = axios.create({
    baseURL: `http://localhost:3000`,
  });

function getItemId(e) {
    if (e.target.classList.contains(`itemCart`) || e.target.classList.contains(`fa-shopping-cart`)) {
        const id = e.target.attributes[1].value;
        getSingleItem(id);
    }
}

async function displayItems(item) {
    $(`#itemContainer`).append(` <div class="col-3 itemContainer" data-aos="zoom-in" data-aos-duration="1300">
                                <div class="item">
                                    <img src="${item.img1Url}" class="item-image" alt="${item.name}">
                                    <figcaption class="mask">
                                    <h4>${item.name} <span class="price"> ${item.price.toLocaleString(`sr-RS`)}</span></h4>
                                    </figcaption>
                                    <ul class="external">
                                    <li class=""><a class="itemCart" data-id=${item.id}><i class="fas fa-shopping-cart fa-lg" data-id=${item.id}></i></a></li>
                                    </ul>
                                </div>
                                </div>`);
    $(`#itemContainer`).click(getItemId);
}

async function getItems(category) {
    $(`#itemContainer`).children().remove();
    const path = (category === `all` ? `/items` : `/items?category=${category}`);
    const response = await api.get(`${path}`);
        const items = await response.data;
        for (const item of items) {
            displayItems(item);
        }
    }

export { getItems };

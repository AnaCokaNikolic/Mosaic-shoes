import $ from 'jquery';
import axios from 'axios';

const _api = axios.create({
    baseURL: `http://localhost:3000`,
  });

async function _render(item) {
$(`#itemContainer`).append(` <div class="col-3 container-thumb">
                            <div class="item">
                                <img src="${item.img1Url}" class="proizvod-thumb" alt="${item.name}">
                                <figcaption class="mask">
                                <h4>${item.name} <span class="price"> ${item.price.toLocaleString(`sr-RS`)}</span></h4>
                                </figcaption>
                                <ul class="external">
                                <li class=""><a href="#"><i class="fas fa-shopping-cart fa-lg"></i></a></li>
                                </ul>
                            </div>
                            </div>`);
}

async function displayItems() {
    const response = await _api.get(`/items`);
    const items = await response.data;
    for (const item of items) {
        _render(item);
    }
}
displayItems();

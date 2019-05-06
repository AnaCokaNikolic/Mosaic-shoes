import $ from 'jquery';
import { api } from './displaySingleItem';

function updateDB() {
    const items = JSON.parse(sessionStorage.getItem(`itemInfo`));
    items.forEach((item) => {
        const id = Number(item.itemId);
        if (item.size === `37`) {
            api.patch(`/items/${id}`, {
                size37: false,
            }).catch((error) => {
                console.log(error);
            });
        }
        if (item.size === `38`) {
            api.patch(`/items/${id}`, {
                size38: false,
            }).catch((error) => {
                console.log(error);
            });
        }
        if (item.size === `39`) {
            api.patch(`/items/${id}`, {
                size39: false,
            }).catch((error) => {
                console.log(error);
            });
        }
        if (item.size === `40`) {
            api.patch(`/items/${id}`, {
                size40: false,
            }).catch((error) => {
                console.log(error);
            });
        }
        if (item.size === `41`) {
            api.patch(`/items/${id}`, {
                size41: false,
            }).catch((error) => {
                console.log(error);
            });
        }
        if (item.size === `42`) {
            api.patch(`/items/${id}`, {
                size42: false,
            }).catch((error) => {
                console.log(error);
            });
        }
    });
}

function getOrderItems() {
const order = {
    items: JSON.parse(sessionStorage.getItem(`itemInfo`)),
    total: $(`#confirmationTotal`)[0].innerHTML,
    name: $(`#deliveryName`).val(),
    address: $(`#deliveryAddress`).val(),
    zipCode: $(`#deliveryZip`).val(),
    city: $(`#deliveryCity`).val(),
    country: $(`#deliveryCountry`).val(),
    phone: $(`#deliveryTel`).val(),
    paid: $(`#cash`)[0].checked ? `cash` : `card`,
};
updateDB();
return order;
}

function postOrder() {
    const order = getOrderItems();
    api.post(`/order`, order).catch((error) => {
        console.log(error);
    });
    }

export { postOrder };

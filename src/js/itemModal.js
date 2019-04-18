import $ from 'jquery';


$(`#itemContainer`).click((e) => {
    if (e.target.classList.contains(`itemCart`) || e.target.classList.contains(`fa-shopping-cart`)) {
        e.preventDefault();
        $(`#itemModal`).attr( `style`, `display: block;`);
    }
});

$(`.close`).click(() => {
    $(`#itemModal`).attr( `style`, `display: none;`);
});

$(window).click((e) => {
    if (e.target === $(`#itemModal`)[0]) {
        $(`#itemModal`).attr( `style`, `display: none;`);
    }
});

$(`.demo`).click((e) => {
   $(`#expandedImg`)[0].src = e.target.src;
});

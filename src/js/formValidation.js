import $ from 'jquery';

const regExIme = /^(([A-za-z]+[\s]{1}[A-za-z]+)|([A-Za-z]+))$/;
const regExEmail = /\S+@\S+\.\S+/;
const regExTel = /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?[\-\.\ \\\/]?(\d+))?$/;

$(`#sendButton`).click((e) => {
    e.preventDefault();
    if ($(`#formIme`).val().trim() === ``) {
        $(`#validationMessage`).html(``);
        $(`#validationMessage`).html(`<i class="fas fa-exclamation-circle"></i> Unesite ime i prezime`).show().fadeOut(5000);
        $(`#formIme`).focus();
    } else if (!regExIme.test($(`#formIme`).val().trim())) {
        $(`#validationMessage`).html(``);
        $(`#validationMessage`).html(`<i class="fas fa-exclamation-circle"></i> Unesite validno ime i prezime`).show().fadeOut(5000);
        $(`#formIme`).focus();
    } else if ($(`#formEmail`).val().trim() === ``) {
        $(`#validationMessage`).html(``);
        $(`#validationMessage`).html(`<i class="fas fa-exclamation-circle"></i> Unesite email`).show().fadeOut(5000);
        $(`#formEmail`).focus();
    } else if (!regExEmail.test($(`#formEmail`).val().trim())) {
        $(`#validationMessage`).html(``);
        $(`#validationMessage`).html(`<i class="fas fa-exclamation-circle"></i> Unesite validan email`).show().fadeOut(5000);
        $(`#formEmail`).focus();
    } else if ($(`#formTel`).val().trim() === ``) {
        $(`#validationMessage`).html(``);
        $(`#validationMessage`).html(`<i class="fas fa-exclamation-circle"></i> Unesite broj telefona`).show().fadeOut(5000);
        $(`#formTel`).focus();
    } else if (!regExTel.test($(`#formTel`).val().trim())) {
        $(`#validationMessage`).html(``);
        $(`#validationMessage`).html(`<i class="fas fa-exclamation-circle"></i> Unesite validan broj telefona`).show().fadeOut(5000);
        $(`#formTel`).focus();
    } else if ($(`#formPoruka`).val().trim() === ``) {
        $(`#validationMessage`).html(``);
        $(`#validationMessage`).html(`<i class="fas fa-exclamation-circle"></i> Unesite poruku`).show().fadeOut(5000);
        $(`#formPoruka`).focus();
    } else {
        // $(`#contactForm`).submit();
        $(`#contactForm`)[0].reset();
        $(`#validationMessage`).html(``);
        $(`#validationMessage`).html(`<i class="fas fa-check-circle"></i> Poruka je poslata. Hvala!`).show().fadeOut(7000);
    }
});

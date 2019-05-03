/* eslint-disable import/no-extraneous-dependencies */

import $ from 'jquery';

const regExIme = /^[A-ZŠĐŽĆČ][a-zšđčćž]{1,22}\s?([A-ZŠĐŽĆČ][a-zšđčćž]{1,22})?$/;
const regExEmail =  /\S+@\S+\.\S+/;
const regExTel = /^\d{3}\/(\d{3}-?\d{4}|\d{4}-?\d{3})$/;
const regExAddress = /[\w',-\\/.\s]/;
const regExZip = /^[1-9]\d{4}$/;
const regExCity = /[\w',-\\/.\s]/;
const regExCardNumber = /\d{4}-?\d{4}-?\d{4}-?\d{4}/;
const regExCardExp = /^((0[1-9])|(1[0-2]))\/(\d{2})$/;
const regExCardCvv = /^([0-9]{3,4})$/;
function formValidation(e) {
    e.preventDefault();
    if ($(`#formIme`).val().trim() === ``) {
        $(`.validationMessage`).html(``);
        $(`.validationMessage`).html(`<i class="fas fa-exclamation-circle"></i> Unesite ime i prezime`).show().fadeOut(4000);
        $(`#formIme`).focus();
    } else if (!regExIme.test($(`#formIme`).val().trim())) {
        $(`.validationMessage`).html(``);
        $(`.validationMessage`).html(`<i class="fas fa-exclamation-circle"></i> Unesite validno ime i prezime`).show().fadeOut(4000);
        $(`#formIme`).focus();
    } else if ($(`#formEmail`).val().trim() === ``) {
        $(`.validationMessage`).html(``);
        $(`.validationMessage`).html(`<i class="fas fa-exclamation-circle"></i> Unesite email`).show().fadeOut(4000);
        $(`#formEmail`).focus();
    } else if (!regExEmail.test($(`#formEmail`).val().trim())) {
        $(`.validationMessage`).html(``);
        $(`.validationMessage`).html(`<i class="fas fa-exclamation-circle"></i> Unesite validan email`).show().fadeOut(4000);
        $(`#formEmail`).focus();
    } else if ($(`#formTel`).val().trim() === ``) {
        $(`.validationMessage`).html(``);
        $(`.validationMessage`).html(`<i class="fas fa-exclamation-circle"></i> Unesite broj telefona`).show().fadeOut(4000);
        $(`#formTel`).focus();
    } else if (!regExTel.test($(`#formTel`).val().trim())) {
        $(`.validationMessage`).html(``);
        $(`.validationMessage`).html(`<i class="fas fa-exclamation-circle"></i> Unesite validan broj telefona (xxx/xxx-xxxx)`).show().fadeOut(4000);
        $(`#formTel`).focus();
    } else if ($(`#formPoruka`).val().trim() === ``) {
        $(`.validationMessage`).html(``);
        $(`.validationMessage`).html(`<i class="fas fa-exclamation-circle"></i> Unesite poruku`).show().fadeOut(4000);
        $(`#formPoruka`).focus();
    } else {
        $(`.validationMessage`).html(``);
        $(`.validationMessage`).html(`<i class="fas fa-check-circle"></i> Poruka je poslata. Hvala!`).show().fadeOut(7000);
        $(`#contactForm`)[0].reset();
    }
}

function confirmationFormValidation(e) {
    e.preventDefault();
    if ($(`#deliveryName`).val().trim() === ``) {
        $(`#confirmationMessage`).html(``);
        $(`#confirmationMessage`).html(`<i class="fas fa-exclamation-circle"></i> Unesite ime i prezime`).show().fadeOut(4000);
        $(`#deliveryName`).focus();
    } else if (!regExIme.test($(`#deliveryName`).val().trim())) {
        $(`#confirmationMessage`).html(``);
        $(`#confirmationMessage`).html(`<i class="fas fa-exclamation-circle"></i> Unesite validno ime i prezime`).show().fadeOut(4000);
        $(`#deliveryName`).focus();
    } else if ($(`#deliveryAddress`).val().trim() === ``) {
        $(`#confirmationMessage`).html(``);
        $(`#confirmationMessage`).html(`<i class="fas fa-exclamation-circle"></i> Unesite adresu`).show().fadeOut(4000);
        $(`#deliveryAddress`).focus();
    } else if (!regExAddress.test($(`#deliveryAddress`).val().trim())) {
        $(`#confirmationMessage`).html(``);
        $(`#confirmationMessage`).html(`<i class="fas fa-exclamation-circle"></i> Unesite validnu adresu`).show().fadeOut(4000);
        $(`#deliveryAddress`).focus();
    } else if ($(`#deliveryZip`).val().trim() === ``) {
        $(`#confirmationMessage`).html(``);
        $(`#confirmationMessage`).html(`<i class="fas fa-exclamation-circle"></i> Unesite poštanski broj`).show().fadeOut(4000);
        $(`#deliveryZip`).focus();
    } else if (!regExZip.test($(`#deliveryZip`).val().trim())) {
        $(`#confirmationMessage`).html(``);
        $(`#confirmationMessage`).html(`<i class="fas fa-exclamation-circle"></i> Unesite validan poštanski broj`).show().fadeOut(4000);
        $(`#deliveryZip`).focus();
    } else if ($(`#deliveryCity`).val().trim() === ``) {
        $(`#confirmationMessage`).html(``);
        $(`#confirmationMessage`).html(`<i class="fas fa-exclamation-circle"></i> Unesite mesto`).show().fadeOut(4000);
        $(`#deliveryCity`).focus();
    } else if (!regExCity.test($(`#deliveryCity`).val().trim())) {
        $(`#confirmationMessage`).html(``);
        $(`#confirmationMessage`).html(`<i class="fas fa-exclamation-circle"></i> Unesite validano mesto`).show().fadeOut(4000);
        $(`#deliveryCity`).focus();
    } else if ($(`#deliveryCountry`).val().trim() === ``) {
        $(`#confirmationMessage`).html(``);
        $(`#confirmationMessage`).html(`<i class="fas fa-exclamation-circle"></i> Unesite državu`).show().fadeOut(4000);
        $(`#deliveryCountry`).focus();
    } else if (!regExCity.test($(`#deliveryCountry`).val().trim())) {
        $(`#confirmationMessage`).html(``);
        $(`#confirmationMessage`).html(`<i class="fas fa-exclamation-circle"></i> Unesite validnu državu`).show().fadeOut(4000);
        $(`#deliveryCountry`).focus();
    } else if ($(`#deliveryTel`).val().trim() === ``) {
        $(`#confirmationMessage`).html(``);
        $(`#confirmationMessage`).html(`<i class="fas fa-exclamation-circle"></i> Unesite broj telefona`).show().fadeOut(4000);
        $(`#deliveryTel`).focus();
    } else if (!regExTel.test($(`#deliveryTel`).val().trim())) {
        $(`#confirmationMessage`).html(``);
        $(`#v`).html(`<i class="fas fa-exclamation-circle"></i> Unesite validan broj telefona (xxx/xxx-xxxx)`).show().fadeOut(4000);
        $(`#deliveryTel`).focus();
    } else if ($(`#card`).is(`:checked`)) {
        if ($(`#nameOnCard`).val().trim() === ``) {
            $(`#confirmationMessage`).html(``);
            $(`#confirmationMessage`).html(`<i class="fas fa-exclamation-circle"></i> Unesite ime i prezime`).show().fadeOut(4000);
            $(`#nameOnCard`).focus();
        } else if (!regExIme.test($(`#nameOnCard`).val().trim())) {
            $(`#confirmationMessage`).html(``);
            $(`#confirmationMessage`).html(`<i class="fas fa-exclamation-circle"></i> Unesite validno ime i prezime`).show().fadeOut(4000);
            $(`#nameOnCard`).focus();
        } else if ($(`#cardNumber`).val().trim() === ``) {
            $(`#confirmationMessage`).html(``);
            $(`#confirmationMessage`).html(`<i class="fas fa-exclamation-circle"></i> Unesite broj kartice`).show().fadeOut(4000);
            $(`#cardNumber`).focus();
        } else if (!regExCardNumber.test($(`#cardNumber`).val().trim())) {
            $(`#confirmationMessage`).html(``);
            $(`#confirmationMessage`).html(`<i class="fas fa-exclamation-circle"></i> Unesite validan broj kartice (xxxx-xxxx-xxxx-xxxx)`).show().fadeOut(4000);
            $(`#cardNumber`).focus();
        } else if ($(`#cardExp`).val().trim() === ``) {
            $(`#confirmationMessage`).html(``);
            $(`#confirmationMessage`).html(`<i class="fas fa-exclamation-circle"></i> Unesite datum isteka kartice`).show().fadeOut(4000);
            $(`#cardExp`).focus();
        } else if (!regExCardExp.test($(`#cardExp`).val().trim())) {
            $(`#confirmationMessage`).html(``);
            $(`#confirmationMessage`).html(`<i class="fas fa-exclamation-circle"></i> Unesite validan datum isteka kartice (MM/GG)`).show().fadeOut(4000);
            $(`#cardExp`).focus();
        } else if ($(`#cvvCard`).val().trim() === ``) {
            $(`#confirmationMessage`).html(``);
            $(`#confirmationMessage`).html(`<i class="fas fa-exclamation-circle"></i> Unesite CVV`).show().fadeOut(4000);
            $(`#cvvCard`).focus();
        } else if (!regExCardCvv.test($(`#cvvCard`).val().trim())) {
            $(`#confirmationMessage`).html(``);
            $(`#confirmationMessage`).html(`<i class="fas fa-exclamation-circle"></i> Unesite validan CVV (xxx ili xxxx)`).show().fadeOut(4000);
            $(`#cvvCard`).focus();
        } else {
            $(`#confirmationMessage`).html(``);
            $(`#confirmationMessage`).html(`<i class="fas fa-check-circle"></i> Vaša narudžbina je uspešna. Hvala!`).show().fadeOut(7000);
            $(`#confirmationForm`)[0].reset();
            $(`.cardInfo`).prop(`disabled`, true);
            $(`#confirmationCartItems`).children().remove();
            $(`#confirmationTotal`)[0].innerHTML = `0`;
            $(`#cartItems`).children().remove();
            $(`#total`)[0].innerHTML = `0`;
            $(`#itemCount`)[0].innerHTML = `0`;
            $(`#shopButton`).prop(`disabled`, true);
            $(`#itemCount`).hide();
        }
    } else {
        $(`#confirmationMessage`).html(``);
        $(`#confirmationMessage`).html(`<i class="fas fa-check-circle"></i> Vaša narudžbina je uspešna. Hvala!`).show().fadeOut(7000);
        $(`#confirmationForm`)[0].reset();
        $(`.cardInfo`).prop(`disabled`, true);
        $(`#confirmationCartItems`).children().remove();
        $(`#confirmationTotal`)[0].innerHTML = `0`;
        $(`#cartItems`).children().remove();
        $(`#total`)[0].innerHTML = `0`;
        $(`#itemCount`)[0].innerHTML = `0`;
        $(`#shopButton`).prop(`disabled`, true);
        $(`#itemCount`).hide();
    }
}

export { formValidation, confirmationFormValidation };

import $ from 'jquery';

const regExIme = /^[A-ZŠĐŽĆČ][a-zšđčćž]{1,11}\s?([A-ZŠĐŽĆČ][a-zšđčćž]{1,11})?$/;
const regExEmail =  /\S+@\S+\.\S+/;
const regExTel = /^\d{3}\/(\d{3}-?\d{4}|\d{4}-?\d{3})$/;

function formValidation(e) {
    e.preventDefault();
    if ($(`#formIme`).val().trim() === ``) {
        $(`#validationMessage`).html(``);
        $(`#validationMessage`).html(`<i class="fas fa-exclamation-circle"></i> Unesite ime i prezime`).show().fadeOut(4000);
        $(`#formIme`).focus();
    } else if (!regExIme.test($(`#formIme`).val().trim())) {
        $(`#validationMessage`).html(``);
        $(`#validationMessage`).html(`<i class="fas fa-exclamation-circle"></i> Unesite validno ime i prezime`).show().fadeOut(4000);
        $(`#formIme`).focus();
    } else if ($(`#formEmail`).val().trim() === ``) {
        $(`#validationMessage`).html(``);
        $(`#validationMessage`).html(`<i class="fas fa-exclamation-circle"></i> Unesite email`).show().fadeOut(4000);
        $(`#formEmail`).focus();
    } else if (!regExEmail.test($(`#formEmail`).val().trim())) {
        $(`#validationMessage`).html(``);
        $(`#validationMessage`).html(`<i class="fas fa-exclamation-circle"></i> Unesite validan email`).show().fadeOut(4000);
        $(`#formEmail`).focus();
    } else if ($(`#formTel`).val().trim() === ``) {
        $(`#validationMessage`).html(``);
        $(`#validationMessage`).html(`<i class="fas fa-exclamation-circle"></i> Unesite broj telefona`).show().fadeOut(4000);
        $(`#formTel`).focus();
    } else if (!regExTel.test($(`#formTel`).val().trim())) {
        $(`#validationMessage`).html(``);
        $(`#validationMessage`).html(`<i class="fas fa-exclamation-circle"></i> Unesite validan broj telefona (xxx/xxx-xxxx)`).show().fadeOut(4000);
        $(`#formTel`).focus();
    } else if ($(`#formPoruka`).val().trim() === ``) {
        $(`#validationMessage`).html(``);
        $(`#validationMessage`).html(`<i class="fas fa-exclamation-circle"></i> Unesite poruku`).show().fadeOut(4000);
        $(`#formPoruka`).focus();
    } else {
        // $(`#contactForm`).submit();
        $(`#contactForm`)[0].reset();
        $(`#validationMessage`).html(``);
        $(`#validationMessage`).html(`<i class="fas fa-check-circle"></i> Poruka je poslata. Hvala!`).show().fadeOut(7000);
    }
}

export { formValidation };

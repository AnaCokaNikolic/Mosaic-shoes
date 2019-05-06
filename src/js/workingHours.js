/* eslint-disable import/no-extraneous-dependencies */
import $ from 'jquery';

const d = new Date();
const dayOfWeek = d.getDay();
const hour = d.getHours();
$(`#workingHours`).attr(`title`, dayOfWeek !== 6 && dayOfWeek !== 0 && hour >= 9 && hour < 17 ? `Sada otvoreno!` : `Sada zatvoreno!`).css(`cursor`, `pointer`);

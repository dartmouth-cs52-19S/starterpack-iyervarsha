import $ from 'jquery';
import './style.scss';

let num = 0;
const printFunction = () => {
  num += 1;
  $('#main').html(`You've been on this page for ${num} seconds.`);
};

setInterval(printFunction, 1000);

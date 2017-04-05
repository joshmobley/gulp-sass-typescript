/*
** main.js
** @description: main entry point for javascript
*/
import * as $ from 'jquery';
import { Header } from './components/header';

$(document).ready(() => {

  let header = new Header;
  header.someMethod();

});

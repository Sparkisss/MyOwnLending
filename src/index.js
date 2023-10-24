import './index.html';
import './index.scss';
import "@babel/polyfill";
import { num, sum } from './modules/calc';


console.log(num(2, 4));
console.log(sum(2, 4));
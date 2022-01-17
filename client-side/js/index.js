import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Items from './components/Items';
import PopularItems from './components/PopularItems';
import apiHelpers from './api-helpers/apiHelpers';

const app = document.querySelector('#app');

buildPage();

function buildPage() {
  header();

}

function header() {
  const headerElem = document.querySelector('.header');
  headerElem.innerHTML = Header();
}

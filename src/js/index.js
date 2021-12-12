import './../scss/index.scss';
import Glide from '@glidejs/glide';

new Glide('.product-tile-list.glide', {
  type: 'carousel',
  perView: 4,
  breakpoints: {
    991: {
      perView: 2,
    },
  },
}).mount();

new Glide('.home-catalog-preview:nth-of-type(2) .product-tile-list.glide', {
  type: 'carousel',
  perView: 4,
  breakpoints: {
    991: {
      perView: 2,
    },
  },
}).mount();

new Glide('.home-catalog-preview:nth-of-type(4) .product-tile-list.glide', {
  type: 'carousel',
  perView: 4,
  breakpoints: {
    991: {
      perView: 2,
    },
  },
}).mount();

new Glide('.home-catalog-preview:nth-of-type(5) .product-tile-list.glide', {
  type: 'carousel',
  perView: 4,
  breakpoints: {
    991: {
      perView: 2,
    },
  },
}).mount();

import { ProductProps } from '../models/Props';

import ASTRA_Thumb from '../assets/astra-thumb.png';
import ERC_Thumb from '../assets/erc-thumb.png';

const Products: ProductProps[] = [
  {
    title: 'ASTRA Skincare',
    description:
      "ASTRA Skincare is a demo site created as as proof-of-concept to the advantages of using a custom React front-end with the power of Shopify's Admin for business management.",
    deployment: 'https://astra-skincare.com',
    repo: 'https://www.github.com/AtlasCreative/astra-skincare',
    releaseDate: 'Feb. 23, 2023'
  },
  {
    title: 'Elden Creator',
    description:
      'Elden Creator is a hobby project that I mostly developed as I was playing an Elden Ring Randomizer mod and became inspired by it.',
    deployment: 'https://eldencreator.com',
    repo: 'https://www.github.com/cjfritz9/elden-ring-randomizer',
    releaseDate: 'Mar. 3, 2023'
  }
];

export default Products;

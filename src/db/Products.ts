import { ProductProps } from '../models/Props';

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
    title: 'Personal Express Server',
    description:
      'Source code for my personal express server that I use to handle contact form emails and various other API calls from my projects.',
    deployment: 'https://github.com/cjfritz9/chat-gpt-express-server',
    repo: 'https://github.com/cjfritz9/chat-gpt-express-server',
    releaseDate: 'Mar. 18, 2023'
  },
  {
    title: 'Cat-GPT',
    description:
      'Cat-GPT was a fun and cute project that I completed to get some hands-on experience with OpenAI APIs, Google App Engine, and Google Cloud SQL.',
    deployment: 'https://cat-gpt3.netlify.app',
    repo: 'https://github.com/cjfritz9/chat-assistant',
    releaseDate: 'Apr. 1, 2023'
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

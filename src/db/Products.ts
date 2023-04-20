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
    title: 'Social Stack',
    description:
      'Social Stack is a social media clone website with a developer-focused theme. It was a collaboration between myself and 3 friends that I graduate from Full Stack Academy with.',
    deployment: 'https://social-stack-demo.netlify.app/',
    repo: 'https://github.com/Social-Stack/Social-Media-Stack',
    releaseDate: 'Dec. 6, 2022'
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
      'Cat-GPT was a fun and cute project that I completed to get some hands-on experience with OpenAI APIs, Google App Engine, Google Cloud SQL, and Mocha/Chai.',
    deployment: 'https://cat-gpt3.netlify.app',
    repo: 'https://github.com/cjfritz9/chat-assistant',
    releaseDate: 'Apr. 1, 2023'
  },
  {
    title: 'PokeStop',
    description:
      "PokeStop was my Capstone project that I collaborated on with 3 people in my class at Full Stack Academy. It is a full stack mock Pokemon TCG ecommerce store. I recently converted this project to use Firestore in order to take advantage of GCP's free tier.",
    deployment: 'https://eldencreator.com',
    repo: 'https://github.com/Graceshopper-Team-No-Grace/Trading-Card-Shopper',
    releaseDate: 'Oct. 17, 2022'
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

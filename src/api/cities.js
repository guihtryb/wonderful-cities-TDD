import SingaMain from '../images/main-singapore.jpg';

import CuritibaMain from '../images/main-curitiba.jpg';

const cities = [
  {
    cityName: 'Singapore',
    country: 'indonesia',
    cityMainImage: SingaMain,
    cityIntro1: 'Singapore is a city-state in maritime Southeast Asia and is the largest port in the region and one of the busiest in the world. Singapore first joined the Federation of Malaysia on its formation in 1963 but seceded to become an independent state on August 9, 1965.',
    cityIntro2: 'With a breath-taking architecture, Singapore is a well-planned city that shows how nature and buildings can evolve together, resulting in amazing views and high quality of life!',
    population: 5686000,
    faq: [
      {
        id: 0,
        title: 'When is the best time to visit',
        answer: 'a',
      },
      {
        id: 1,
        title: 'Which are the most visited places in',
        answer: 'b',
      },
      {
        id: 2,
        title: 'Could you give me interesting facts about',
        answer: 'c',
      },
    ],
  },
  {
    cityName: 'Curitiba',
    country: 'brazil',
    cityMainImage: CuritibaMain,
    cityIntro1: 'Located in southern Brazil, Curitiba, the capital of the state of Paraná, is an easily accessible city with many attractions and sights. With many green areas, tourism in the city is considered one of the best in the country!',
    cityIntro2: '',
    population: 1963726,
    faq: [
      {
        id: 3,
        title: 'When is the best time to visit',
        answer: 'd',
      },
      {
        id: 4,
        title: 'Which are the most visited places in',
        answer: 'e',
      },
      {
        id: 5,
        title: 'Could you give me interesting facts about',
        answer: 'f',
      },
    ],
  },
];
export default cities;

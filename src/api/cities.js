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
        answer: 'December to June. The months of February to April fall within Singapore`s dry season and is typically when the country has the least amount of rain, the lowest humidity, and the most sunshine. (www.thomascook.in)',
        tag: 'short',
      },
      {
        id: 1,
        title: 'Which are the most visited places in',
        answer: '1º Marina Bay Sands - 2º Gardens by the Bay - 3º Botanic Gardens - 4º Singapore Zoo - 5º Orchard Road',
        tag: 'ranking',
      },
      {
        id: 2,
        title: 'Could you give me interesting facts about',
        answer: '1º Singapore pioneered the first F1 night race. - 2º Singapore has waterfalls and beaches made by man. - 3º Singapore is one of the world`s greenest cities. - 4º Chewing gum is banned in Singapore - 5º After New Zealand, Singapore is the easiest place across the globe to do business',
        tag: 'ranking',
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
        answer: 'Best months: April and September - Hottest months: January e Febreuary - Coldest months: June and July - Driest months: July and August - Rainier months: October and March',
        tag: 'ranking',
      },
      {
        id: 4,
        title: 'Which are the most visited places in',
        answer: '1º Museu Oscar Niemeyer (MON). - 2º Ópera de Arame. - 3º Largo da Ordem - 4º Jardim Botânico - 5º Santa Felicidade',
        tag: 'ranking',
      },
      {
        id: 5,
        title: 'Could you give me interesting facts about',
        answer: '1º Curitiba is a word of Guarani origin: “kur yt yba” means “place full of pine trees” in the indigenous language. - 2º Curitiba was the capital of Brazil for three days. - 3º Cuririba is one of the most environmentally sustainable cities in Latin America. - 4º Curitiba has a neighborhood that pays homage to Italian cuisine, called Santa Felicidade. - 5º there are tunnel Subterraneans in some regions of the city, specifically in the Center of the Mercês district. These tunnels were used during the First and Second World War.',
        tag: 'ranking',
      },
    ],
  },
];
export default cities;

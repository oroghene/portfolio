export const projects = [
  {
    title: 'Landing Page',
    description: "Using React, I made a landing page for a typical online business.",
      image: '/images/landing-page.png',
      tags: ['HTML', 'CSS', 'JavaScript', 'React'],
    source: 'https://github.com/oroghene/landing-page',
    visit: 'https://landing-page-oroghene.herokuapp.com',
    id: 0,
  },
  {
    title: 'E-Commerce',
    description:"Using React for the front end and Stripe and Commercejs for the back end, I made an online shop. Commercejs send receipt emails to users who have completed orders and allows the store owner add and modify products. Stripe handles the payments securely.",
    image: '/images/e-commerce.png',
    tags: ['JavaScript', 'React', 'Commercejs', 'Stripe'],
    source: 'https://github.com/oroghene/e-commerce',
    visit: 'https://online-store-oroghene.herokuapp.com',
    id: 1,
  },
  {
    title: 'Covid 19 Statistics',
    description: "This website shows the important numbers to describe the ongoing pandemic. It also has a chart and can be filtered by country. Unfortunately, the API does not provide numbers for recovered patients.",
      image: '/images/covid-stats.png',
      tags: ['HTML', 'CSS', 'JavaScript', 'React.js', 'MaterialUI.', 'Chart-js'],
    source: 'https://github.com/oroghene/corona-tracker',
    visit: 'https://covid-19-stats-oroghene.netlify.app/',
    id: 2,
  },
  {
    title: 'Image Classification',
    description: "I used a pre-trained MobileNet architecture from TensorFlow.js to classify images which can be uploaded by the user locally from their device or via a url.",
    image: '/images/image-classification.png',
    tags: ['JavaScript', 'React.js', 'TensorFlow.js'],
    source: 'https://github.com/oroghene/image-classification',
    visit: 'https://image-classification-oroghene.herokuapp.com',
    id: 3,
  },
];

export const TimeLineData = [
  { year: 2017, text: 'Started my journey', },
  { year: 2018, text: 'Worked as a freelance developer', },
  { year: 2019, text: 'Founded JavaScript Mastery', },
  { year: 2020, text: 'Shared my projects with the world', },
  { year: 2021, text: 'Started my own platform', },
];
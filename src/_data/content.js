const header = 'Paul has an even better timeline.';
const footer = 'A footer goes here.';
const entries = [
  {
    id: 'intro',
    categories: ['intro'],
    color: 'green',
    faicon: 'dog',
    datetime: '2023-03-25 16:00',
    title: 'This is an introduction',
    image: {
      link: 'http://paulrissen.com',
      src: 'https://paulrissen.files.wordpress.com/2018/07/cropped-gt94pbbg_400x4001.jpg',
      alt: 'A placeholder image',
      caption: 'go to my site!',
    },
    body: "If this works, I'll be astounded.",
    links: [
      {
        href: 'https://en.wikipedia.org/wiki/Dog',
        linkText: 'Cat',
      },
    ],
  },
  {
    id: 'second',
    categories: ['work'],
    color: 'green',
    faicon: 'cat',
    datetime: '2020-01-01',
    title: 'A second entry',
    body: "Fingers crossed, here we go! Did this work? We are checking, we are checking.",
  },
];

// Page details
const pageTitle = 'Paul has a timeline'; // The title of the page that shows in the browser tab
const pageDescription = 'A super fancy timeline'; // The description of the page for search engines
const pageAuthor = 'Paul Rissen'; // Your name

// DON'T EDIT BELOW THIS LINE! --------------------------------------------------------------------
const getFilters = (entries) => {
  const filters = new Set();
  for (var i = 0; i < entries.length; i++) {
    var entry = entries[i];
    if (Object.prototype.hasOwnProperty.call(entry, 'categories')) {
      for (var j = 0; j < entry.categories.length; j++) {
        filters.add(entry.categories[j]);
      }
    }
  }
  var filtersArray = [...filters];
  filtersArray.sort();
  return filtersArray;
};

const addCategoriesStringsToEntries = (entries) => {
  for (const entry of entries) {
    if (Object.prototype.hasOwnProperty.call(entry, 'categories')) {
      entry.categoriesString = entry.categories.join(',');
    }
  }
  return entries;
};

module.exports = {
  header,
  footer,
  entries: addCategoriesStringsToEntries(entries),
  filters: getFilters(entries),
  head: {
    title: pageTitle,
    description: pageDescription,
    author: pageAuthor,
  },
};

const menu = [
  {
    title: 'Menu 1',
    soup: 'Minestrone',
    soupPrice: '2.85',
    salad: 'Greek',
    saladPrice: '4.50',
    lighterFare: 'Vegetable Biryani',
    lighterFarePrice: '5.00',
    entree: 'Breaded Chicken on a Bun',
    entreePrice: '6.00'
  },
  {
    title: 'Menu 2',
    soup: 'Red Lentil Dal',
    soupPrice: '3.95',
    salad: 'Julienne',
    saladPrice: '3.75',
    lighterFare: 'Madras Chicken Salad Wrap',
    lighterFarePrice: '5.95',
    entree: 'Fish & Chips',
    entreePrice: '6.50'
  },
  {
    title: 'Menu 3',
    soup: 'Spicy Squash & Pumpkin',
    soupPrice: '3.00',
    salad: 'Mediterranean',
    saladPrice: '3.95',
    lighterFare: 'Ham & Cheese Panini',
    lighterFarePrice: '5.25',
    entree: 'Butter Chicken with Rice Pilaf',
    entreePrice: '6.25'
  },
  {
    title: 'Menu 4',
    soup: 'Clam Chowder',
    soupPrice: '3.25',
    salad: 'Israeli Couscous & Feta',
    saladPrice: '4.75',
    lighterFare: 'Pulled Pork on a Bun',
    lighterFarePrice: '5.25',
    entree: 'Matar Paneer & Basmati Rice',
    entreePrice: '6.50'
  },
  {
    title: 'Menu 5',
    soup: 'Tomato',
    soupPrice: '2.95',
    salad: 'Caesar',
    saladPrice: '4.75',
    lighterFare: 'Burger & Fries',
    lighterFarePrice: '4.95',
    entree: 'Beef & Broccoli with Fried Rice',
    entreePrice: '5.95'
  }
]


const app = {
  data: menu,
  currentIndex: 0,
  init: () => {
    // Get Menu nav and set title to 1st item in data array
    
    // Display rest of menu items and prices
  },
  next: () => {
    // If user clicks on nav arrow right, then increment currentIndex
    
    // Display menu nav title
    // Display rest of menu items and prices
  },
  prev: () => {
    // If user clicks on nav arrow right, then decrement currentIndex
    
    // Display menu nav title
    // Display rest of menu items and prices
  }
}
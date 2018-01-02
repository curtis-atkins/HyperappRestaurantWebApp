const companyInfoData = {
  title: "PRIME BEEF STEAK",
  phone: "919 - 555 - 8004",
  region: "Durham, North Carolina",
  address1: "110 Parrish Street",
  address2: "Durham, NC 27701",
  email: "info@primebeefsteak.com"
}

const specialMenuData = [
  {
    title: "Super BBQ Grill No Smoke",
    ingredients: "Steak, Fried Eggs, Baked Potatoes, Vegetable Medley",
    price:"$25"
  },
  {
    title: "Queen Of Autumn",
    ingredients: "Warm Chicken Wings, Portabello Mushrooms, Fresh Mozzarella",
    price:"$42"
  },
  {
    title: "Royal Liver Fried",
    ingredients: "Grilled Beef Steak, Roasted Red Potatoes and Bell Peppers with Rosemary, Mushrooms, Famous Sauce, Tomatoes",
    price:"$30"
  }
]

const reviewsData = [
  {
    company: "Bravo TV",
    author: "- Chef Roblé Ali",
    photo: "\"/img/chef-roble2.jpg\"",
    credits: "Executive Chef at Roblé & Co., Streets, and regular contributor on ABC's \"The Chew\"",
    highlight: "Best steak experience in North Carolina!",
    review: "Hammock shabby chic distillery schlitz, blog venmo retro brooklyn tousled gochujang air plant food truck. Kombucha hammock post-ironic selfies yuccie, keytar beard lomo."
  },
  {
    company: "The Food Network",
    author: "- Rachael Ray",
    photo: "/img/rachael-Ray.jpg",
    credits: "The Rachael Ray Show, 30 Minute Meals, Rachael vs. Guy: Celebrity Cook-Off",
    highlight: "Fine dining with a healthy dose of southern hospitality!",
    review: "Hammock shabby chic distillery schlitz, blog venmo retro brooklyn tousled gochujang air plant food truck. Kombucha hammock post-ironic selfies yuccie, keytar beard lomo."
  },
  {
    company: "ABC",
    author: "- Chef Marcus Samuelsson",
    photo: "/img/marcus-samuelsson.jpg",
    credits: "The Taste, Chopped, Iron Chef America",
    highlight: "This place is where cuisine and culture collide!",
    review: "Hammock shabby chic distillery schlitz, blog venmo retro brooklyn tousled gochujang air plant food truck. Kombucha hammock post-ironic selfies yuccie, keytar beard lomo."
  },
  {
    company: "Viceland",
    author: "- Cat Cora",
    photo: "/img/cat-cora.jpg",
    credits: "Iron Chef USA, Cat Cora Enterprises",
    highlight: "One of the best steakhouses in the South!",
    review: "Hammock shabby chic distillery schlitz, blog venmo retro brooklyn tousled gochujang air plant food truck. Kombucha hammock post-ironic selfies yuccie, keytar beard lomo."
  },
  {
    company: "TV Guide Channel",
    author: "- Jamie Oliver",
    photo: "/img/jamie-oliver.jpg",
    credits: "Jamie's 15 Minute Meals, Save With Jamie, Jamie Does...",
    highlight: "Best steak experience in North Carolina!",
    review: "Hammock shabby chic distillery schlitz, blog venmo retro brooklyn tousled gochujang air plant food truck. Kombucha hammock post-ironic selfies yuccie, keytar beard lomo."
  }
]

const randomQuoteData = [
  {
    author: "-Hippocrates",
    quote: "Let Food Be Thy Medicine And Medicine Be Thy Food"
  },
  {
    author: "-Tiffany Derry",
    quote: "A Well Cooked Steak Is LOVE Made Edible"
  },
  {
    author: "-Ina Garten",
    quote: "Cooking Is One Of The Great Gifts You Can Give To Those You Love"
  },
  {
    author: "-Julia Child",
    quote: "People Who Love To Eat Are Always The Best People"
  },
  {
    author: "-James Beard",
    quote: "Food Is Our Common Ground, A Universal Experience"
  }
]



export const globalState = {
  count: 0,
  companyInfoData,
  specialMenuData,
  reviewsData,
  randomQuoteData,
  reviewStatus: {
    currentReview: 0
  }
}

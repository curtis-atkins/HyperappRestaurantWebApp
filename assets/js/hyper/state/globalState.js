const companyInfo = {
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




export const globalState = {
  count: 0,
  companyInfo,
  specialMenuData
}

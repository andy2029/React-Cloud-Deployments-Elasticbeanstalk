const SPECIALS_KEY = "specials";

// Initialise local storage "specials" with data, if the data is already set this function returns immediately.
function initSpecials() {
  // Stop if data is already initialised.
  if(localStorage.getItem(SPECIALS_KEY) !== null)
    return;

  // Specials data is hard-coded
  const specials = [
    {
        id: 1,
        name: "Organic Almonds 100g",
        original_price: "4",
        special_price: "2",
        image: "images/almond.jpg"
    },
    {
        id: 2,
        name: "Organic Dark Chocolate 100g",
        original_price: "8",
        special_price: "5",
        image: "images/darkchoc.jpg"
    },
    {
        id: 3,
        name: "Organic Flour 500g",
        original_price: "10",
        special_price: "6",
        image: "images/flour.jpg"
    },
    {
        id: 4,
        name: "Organic Brown Flaxseed 500g",
        original_price: "5",
        special_price: "3",
        image: "images/flaxseed.jpg"
    },
    {
        id: 5,
        name: "Organic Honey 400g",
        original_price: "15",
        special_price: "10",
        image: "images/honey.jpg"
    },
    {
        id: 6,
        name: "Organic Coconut Oil 300g",
        original_price: "6",
        special_price: "4.5",
        image: "images/coconutoil.jpg"
    }
  ];

  // Set data into local storage.
  localStorage.setItem(SPECIALS_KEY, JSON.stringify(specials));
}

function getSpecials() {
  // Extract specials data from local storage.
  const data = localStorage.getItem(SPECIALS_KEY);

  // Convert data to objects.
  return JSON.parse(data);
}

export {
  initSpecials,
  getSpecials,
}

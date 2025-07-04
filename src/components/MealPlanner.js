import React from 'react';
import { useState, useEffect } from 'react';
import './styles.css';
import Button from 'react-bootstrap/Button';


const MealPlanner = () => {

  const weightLossMeals =
    [
      {
        id: 1,
        name: "Pasta Linguini",
        healthScore: "560",
        image: "https://thumbnails.production.thenounproject.com/GEMb-ASNnt1x5jrMIEuGrwXZ5Uo=/fit-in/1000x1000/photos.production.thenounproject.com/photos/fca21341-4866-4768-b009-3fe44dcd4357.jpg"
      },
      {
        id:2,
        name: "Salad",
        healthScore: "730",
        image: "https://thumbnails.production.thenounproject.com/AsUmh_K8d7AA5CIGqPslLGpw35g=/fit-in/1000x1000/photos.production.thenounproject.com/photos/3e54213a-6389-481a-8842-8c3031a1a633.jpg"
      }
    ];

  const muscleGainMeals =
    [
      {
        id: 3,
        name: "Chicken Breast",
        healthScore: "980",
        image: "https://thumbnails.production.thenounproject.com/VgX0WRIsXuJXc9H6ADlVVLtFJVc=/fit-in/1000x1000/photos.production.thenounproject.com/photos/0K0A5198_3-2.jpg"
      },
      {
        id: 4,
        name: "Turkey",
        healthScore: "900",
        image: "https://thumbnails.production.thenounproject.com/OIdOSMhv0aWecMohbk_BStij1Og=/fit-in/1000x1000/photos.production.thenounproject.com/photos/thanksgiving_turkey_on_plate-scopio-486ede97-d0e4-4891-a1c0-0e31a6f2876b.jpg"
      }
    ];

  const overallMeals =
    [
      {
        id: 5,
        name: "Burger and Fries",
        healthScore: "260",
        image: "https://thumbnails.production.thenounproject.com/dtBFoc5svpWa1zkP3wKlDwYd_ME=/fit-in/1000x1000/photos.production.thenounproject.com/photos/95fe2035-38ad-4298-b82a-26b7ace22daa.jpg"
      },
      {
        id: 6,
        name: "Pad Thai",
        healthScore: "660",
        image: "https://thumbnails.production.thenounproject.com/COWIjGPrRNTG7NhplaoW3O_OseA=/fit-in/1000x1000/photos.production.thenounproject.com/photos/0K0A1357_3.jpg"
      },
      {
        id: 7,
        name: "Chicken and Rice",
        healthScore: "470",
        image: "https://thumbnails.production.thenounproject.com/trzx_TyQ2pZ3qBk8ZytDVQkf3B0=/fit-in/1000x1000/photos.production.thenounproject.com/photos/IMG_2687_3.jpg"
      }
    ];

  function getRandomMeal(meals) {
    return meals[Math.floor(Math.random() * meals.length)];
  }

  // Get user's goal from local storage
  function getLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  const userData = getLocalStorage('user');
  console.log(userData);

  // Choose meals based on user's goal
  let selectedMeals = [];
  if (userData && userData.goal) {
    switch (userData.goal.toLowerCase()) {
      case 'Weight Loss':
        selectedMeals = weightLossMeals;
        break;
      case 'Muscle Gain':
        selectedMeals = muscleGainMeals;
        break;
      default:
        selectedMeals = overallMeals;
    }
  } else {
    // If user data or goal is not available, use overall meals
    selectedMeals = overallMeals;
  }

  // Generate meals for the week
  const mealMonday = getRandomMeal(selectedMeals);
  const mealTuesday = getRandomMeal(selectedMeals);
  const mealWednesday = getRandomMeal(selectedMeals);
  const mealThursday = getRandomMeal(selectedMeals);
  const mealFriday = getRandomMeal(selectedMeals);

  return (<>
    <div className="specials">
      <h2>Meal Planner</h2>
      <p>Through thorough analysis by the Soil system, considering your dietary preferences, health factors, and other relevant information, we've arrived at the optimal food choice for you.</p>
      <div className="meal-plan">
        <h2>Weekly Meal Plan</h2>
        <div className="days">
          <h3>Monday</h3>
          <div className="cards">
            <div className="card" key={mealMonday.id}>
              <img className="product-image" src={mealMonday.image} alt={mealMonday.name} />
              <h4>{mealMonday.name}</h4>
              <div className="product-text">
                <p>Health Score: {mealMonday.healthScore}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="days">
          <h3>Tuesday</h3>
          <div className="cards">
            <div className="card" key={mealTuesday.id}>
              <img className="product-image" src={mealTuesday.image} alt={mealTuesday.name} />
              <h4>{mealTuesday.name}</h4>
              <div className="product-text">
                <p>Health Score: {mealTuesday.healthScore}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="days">
          <h3>Wednesday</h3>
          <div className="cards">
            <div className="card" key={mealWednesday.id}>
              <img className="product-image" src={mealWednesday.image} alt={mealWednesday.name} />
              <h4>{mealWednesday.name}</h4>
              <div className="product-text">
                <p>Health Score: {mealWednesday.healthScore}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="days">
          <h3>Thursday</h3>
          <div className="cards">
            <div className="card" key={mealThursday.id}>
              <img className="product-image" src={mealThursday.image} alt={mealThursday.name} />
              <h4>{mealThursday.name}</h4>
              <div className="product-text">
                <p>Health Score: {mealThursday.healthScore}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="days">
          <h3>Friday</h3>
          <div className="cards">
            <div className="card" key={mealFriday.id}>
              <img className="product-image" src={mealFriday.image} alt={mealFriday.name} />
              <h4>{mealFriday.name}</h4>
              <div className="product-text">
                <p>Health Score: {mealFriday.healthScore}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>)
}

export default MealPlanner;
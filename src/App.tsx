import { useState } from 'react';
import './App.css';
import RestaurantCard from './components/RestaurantCard';
import restaurants from './data/restaurants';

function App() {
  const [selectedRestaurant, setSelectedRestaurant] = useState<(typeof restaurants)[number] | null>(null);
  const [selectedCuisine, setSelectedCuisine] = useState("All");
  const [maxPrice, setMaxPrice] = useState(3);
  const [minRating, setMinRating] = useState(0);
  const [searchText, setSearchText] = useState("");

 const filteredRestaurants = restaurants.filter(restaurant =>
        (selectedCuisine === "All" ||
            restaurant.cuisine === selectedCuisine) &&
        restaurant.price <= maxPrice &&
        restaurant.rating >= minRating
    );

  function chooseRestaurant(){
    if (restaurants.length === 0) {
      setSelectedRestaurant(null);
      return;
    }

    const randomIndex = Math.floor(
      Math.random() * restaurants.length
    );

   setSelectedRestaurant(filteredRestaurants[randomIndex]);

  }

  return (
    <>
      <div>
      <h1>RESTAURANT PICKER</h1>
      <p>This app will randomly select a local restaurant based on your cravings</p>

      <div> {/* Cuisine Selector*/}
        <label htmlFor="cuisine">Cuisine: </label>

        <select 
          id="cuisine"
          value={selectedCuisine}
          onChange={event =>
              setSelectedCuisine(event.target.value)
          }
          >
          <option value="All">All Cuisines</option>
          <option value="Italian">Italian</option>
          <option value="Japanese">Japanese</option>
          <option value="Middle Eastern">Middle Eastern</option>
          <option value="American">American</option>
          </select>
        </div>

        <div> {/* Price Dropdown Menu */}
          <label htmlFor="price">Maximum Price: </label>
          <select
              id="price"
              value={maxPrice}
              onChange={event =>
                setMaxPrice(Number(event.target.value))
              }
              >
                <option value={1}>$</option>
                <option value={2}>$$</option>
                <option value={3}>$$$</option>
                <option value={4}>$$$$</option>
              </select>
        </div>

        <div> {/* Rating dropdown menu*/}
          <label htmlFor="rating">Minimum rating: </label>

          <select 
            id="rating"
            value={minRating}
            onChange={event =>
              setMinRating(Number(event.target.value))
            }
            >
              <option value={0}>Any Rating</option>
              <option value={1}>1.0</option>
              <option value={2}>2.0</option>
              <option value={3}>3.0</option>
              <option value={4}>4.0</option>
              <option value={5}>5.0</option>
            </select>
        </div>

        <p>
              Matching Restaurants: {filteredRestaurants.length}
        </p>

        <button onClick={chooseRestaurant}>
          Pick a Restaurant
        </button>

        {selectedRestaurant ? (
          <RestaurantCard restaurant={selectedRestaurant} />
        ) : (
          <p>{filteredRestaurants.length === 0
      ? "No restaurants match your filters."
      : "Click the button to find somewhere to eat!"}</p>
        )}

        <section>
          <h2>Matching Restaurants</h2>
          
          {filteredRestaurants.length > 0 ? (
            filteredRestaurants.map(restaurant => (
              <RestaurantCard
                  key={restaurant.id}
                  restaurant={restaurant}
                />
              ))
            ) : (
              <p>No restaurants match your filters.</p>
            )}
          </section>    
      
      </div>

      

    </>
  );
}

export default App

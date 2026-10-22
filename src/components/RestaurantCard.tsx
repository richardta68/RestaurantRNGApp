import type { Restaurant } from "../types/Restaurant";

interface RestaurantCardProps {
    restaurant: Restaurant;
}

function RestaurantCard({ restaurant }: RestaurantCardProps) {
    return (
        <div>
            <h2>{restaurant.name}</h2>
            <p>Cuisine: {restaurant.cuisine}</p>
            <p>Rating: {restaurant.rating}</p>
            <p>Address: {restaurant.address}</p>
        </div>
    )
}

export default RestaurantCard;
import type { Restaurant } from "../types/Restaurant";

interface RestaurantCardProps {
    restaurant: Restaurant;
    isFavourite?: boolean;
    onToggleFavourite?: (restaurantId: number) => void;
}

function RestaurantCard({ 
    restaurant,
    isFavourite = false,
    onToggleFavourite
 }: RestaurantCardProps) {
    return (
        <div>
            <h2>{restaurant.name}</h2>
            <p>Cuisine: {restaurant.cuisine}</p>
            <p>Rating: {restaurant.rating}</p>
            <p>Address: {restaurant.address}</p>

            {onToggleFavourite && (
                <button onClick={() => onToggleFavourite(restaurant.id)}
                >
                    {isFavourite ? "Remove from Favourites" : "Add to Favourites"}
                </button>
            )}

        </div>
    );
}

export default RestaurantCard;
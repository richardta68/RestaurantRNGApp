import type { Restaurant } from "../types/Restaurant";

const restaurants: Restaurant[] = [
    {
        id: 1,
        name: "Sample Italian Restaurant",
        cuisine: "Italian",
        rating: 4.5,
        price: 2,
        address: "Kingston, Ontario",
        distanceKm: 2.1,
        dietaryOptions: ["vegetarian"]
    },
    {
        id: 2,
        name: "Sample Japanese Restaurant",
        cuisine: "Japanese",
        rating: 5,
        price: 4,
        address: "Kingston, Ontario",
        distanceKm: 5,
        dietaryOptions: ["vegetarian", "glueten-free"]
    },

    {
        id: 3,
        name: "Sample Lebanese Restaurant",
        cuisine: "Middle Eastern",
        rating: 3.8,
        price: 2,
        address: "Kingston, Ontario",
        distanceKm: 1.3,
        dietaryOptions: ["vegetarian", "halal"]
    },

    {
        id: 4,
        name: "Sample Burger Restaurant",
        cuisine: "American",
        rating: 2.2,
        price: 1,
        address: "Kingston, Ontario",
        distanceKm: 0.5,
        dietaryOptions: []
    }
];

export default restaurants;
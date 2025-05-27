// Product data
const products = [
    {
        id: 1,
        name: "Rainbow Runners",
        description: "Colorful running shoes perfect for active kids who love to play outdoors.",
        price: 39.99,
        salePrice: 34.99,
        imageUrl: "https://images.pexels.com/photos/3261069/pexels-photo-3261069.jpeg?auto=compress&cs=tinysrgb&w=800",
        rating: 4.8,
        ageRange: "Ages 4-6",
        isPopular: true,
        isNew: false,
        onSale: true
    },
    {
        id: 2,
        name: "Princess Sparkles",
        description: "Glittery party shoes for special occasions with easy-to-use velcro straps.",
        price: 44.99,
        imageUrl: "https://images.pexels.com/photos/3738399/pexels-photo-3738399.jpeg?auto=compress&cs=tinysrgb&w=800",
        rating: 4.7,
        ageRange: "Ages 3-5",
        isPopular: true,
        isNew: true,
        onSale: false
    },
    {
        id: 3,
        name: "Adventure Boots",
        description: "Durable, waterproof boots for outdoor adventures and rainy days.",
        price: 49.99,
        salePrice: 39.99,
        imageUrl: "https://images.pexels.com/photos/267301/pexels-photo-267301.jpeg?auto=compress&cs=tinysrgb&w=800",
        rating: 4.9,
        ageRange: "Ages 6-8",
        isPopular: true,
        isNew: false,
        onSale: true
    },
    {
        id: 4,
        name: "Dino Stompers",
        description: "Fun dinosaur-themed shoes with light-up soles that activate with each step.",
        price: 42.99,
        imageUrl: "https://images.pexels.com/photos/15894641/pexels-photo-15894641/free-photo-of-close-up-of-shoes.jpeg?auto=compress&cs=tinysrgb&w=800",
        rating: 4.6,
        ageRange: "Ages 4-7",
        isPopular: false,
        isNew: true,
        onSale: false
    }
];

// Categories data
const categories = [
    {
        id: 1,
        name: "Sneakers",
        imageUrl: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800",
        color: "purple"
    },
    {
        id: 2,
        name: "Sandals",
        imageUrl: "https://images.pexels.com/photos/6499119/pexels-photo-6499119.jpeg?auto=compress&cs=tinysrgb&w=800",
        color: "teal"
    },
    {
        id: 3,
        name: "Boots",
        imageUrl: "https://images.pexels.com/photos/267301/pexels-photo-267301.jpeg?auto=compress&cs=tinysrgb&w=800",
        color: "yellow"
    },
    {
        id: 4,
        name: "Sports",
        imageUrl: "https://images.pexels.com/photos/3261069/pexels-photo-3261069.jpeg?auto=compress&cs=tinysrgb&w=800",
        color: "orange"
    },
    {
        id: 5,
        name: "Party Shoes",
        imageUrl: "https://images.pexels.com/photos/3738399/pexels-photo-3738399.jpeg?auto=compress&cs=tinysrgb&w=800",
        color: "pink"
    },
    {
        id: 6,
        name: "School Shoes",
        imageUrl: "https://images.pexels.com/photos/1570099/pexels-photo-1570099.jpeg?auto=compress&cs=tinysrgb&w=800",
        color: "green"
    }
];

// Collections data
const collections = [
    {
        id: 1,
        title: "Summer Essentials",
        description: "Colorful, breathable shoes perfect for summer adventures and beach days.",
        imageUrl: "https://images.pexels.com/photos/6499119/pexels-photo-6499119.jpeg?auto=compress&cs=tinysrgb&w=800",
        buttonText: "Shop Collection",
        bgColor: "teal"
    },
    {
        id: 2,
        title: "Back to School",
        description: "Durable, comfortable shoes designed to last the whole school year.",
        imageUrl: "https://images.pexels.com/photos/3401277/pexels-photo-3401277.jpeg?auto=compress&cs=tinysrgb&w=800",
        buttonText: "Get Ready",
        bgColor: "purple"
    },
    {
        id: 3,
        title: "Special Occasions",
        description: "Fancy shoes for birthdays, holidays, and special family celebrations.",
        imageUrl: "https://images.pexels.com/photos/3738399/pexels-photo-3738399.jpeg?auto=compress&cs=tinysrgb&w=800",
        buttonText: "Explore Now",
        bgColor: "pink"
    }
];
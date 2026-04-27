import type { Restaurant } from '../types';

export const mockResturants: Restaurant[] = [
  {
    id: '1',
    name: 'Campus Bistro',
    description: 'Fresh salads and hearty soups for a healthy lunch.',
    coordinates: [51.747, 19.452],
    address: 'Main Square, Building A',
    waitTime: 15,
    seatsAvailable: true,
    seatingCapacity: 50,
    currentCapacity: 35,
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=400',
    menu: [
      {
        id: 'm1',
        name: 'Quinoa Power Bowl',
        price: 12.5,
        calories: 450,
        allergens: ['Nut-Free', 'Gluten-Free', 'Vegan'],
        description: 'Organic quinoa, roasted chickpeas, kale, and lemon tahini dressing.'
      },
      {
        id: 'm2',
        name: 'Tomato Basil Soup',
        price: 6.0,
        calories: 220,
        allergens: ['Dairy-Free', 'Vegetarian'],
        description: 'Slow-cooked tomatoes with fresh basil and a hint of garlic.'
      }
    ],
    reviews: [
      {
        id: 'r1',
        userId: 'u1',
        userName: 'Alice Smith',
        rating: 5,
        comment: 'Best bowl on campus!',
        date: '2024-03-20'
      }
    ]
  },
  {
    id: '2',
    name: 'Tech Pizza',
    description: 'Quick slices and authentic Italian flavors.',
    coordinates: [51.749, 19.455],
    address: 'Engineering Wing, Level 1',
    waitTime: 5,
    seatsAvailable: false,
    seatingCapacity: 30,
    currentCapacity: 30,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400',
    menu: [
      {
        id: 'm3',
        name: 'Margherita Slice',
        price: 3.5,
        calories: 300,
        allergens: ['Vegetarian'],
        description: 'Classic mozzarella and tomato sauce on a thin crust.'
      },
      {
        id: 'm4',
        name: 'Pepperoni Feast',
        price: 4.5,
        calories: 420,
        allergens: [],
        description: 'Double pepperoni with a blend of four cheeses.'
      }
    ],
    reviews: []
  },
  {
    id: '3',
    name: 'Green Leaf Cafe',
    description: 'Eco-friendly cafe with a wide range of vegan options.',
    coordinates: [51.745, 19.450],
    address: 'Library Basement',
    waitTime: 20,
    seatsAvailable: true,
    seatingCapacity: 40,
    currentCapacity: 10,
    image: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&q=80&w=400',
    menu: [
      {
        id: 'm5',
        name: 'Avocado Toast',
        price: 8.5,
        calories: 350,
        allergens: ['Vegan', 'Dairy-Free'],
        description: 'Smashed avocado on sourdough with chili flakes.'
      }
    ],
    reviews: []
  }
];

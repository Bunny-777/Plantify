export interface BlogPost {
  id: number
  slug: string
  title: string
  excerpt: string
  content: string
  image: string
  author: string
  date: string
  category: string
  readTime: number
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    slug: "how-indoor-plants-improve-air-quality",
    title: "How Indoor Plants Improve Air Quality",
    excerpt:
      "Discover the science behind how plants naturally purify the air in your home and the best air-purifying plants to keep.",
    content: `Indoor plants are more than just decorative elements—they're natural air purifiers that can significantly improve the quality of air in your home.

## The Science Behind Plant Air Purification

Plants absorb carbon dioxide during photosynthesis and release oxygen, helping to increase oxygen levels in your home. But that's not all. Through a process called phytoremediation, plants can actually remove harmful substances from the air.

Research shows that common household plants can remove toxins like formaldehyde, benzene, and trichloroethylene from indoor air. Plants like Snake Plants, Pothos, and Peace Lilies are particularly effective at this.

## Best Air-Purifying Plants

- **Snake Plant**: Removes formaldehyde and xylene
- **Peace Lily**: Filters ammonia, benzene, and formaldehyde
- **Pothos**: Excellent for removing formaldehyde
- **Bamboo Palm**: Great for ammonia and formaldehyde removal

## How to Maximize Benefits

To get the most air-purifying benefits from your plants, consider these tips:

1. Place plants in areas where you spend the most time
2. Use larger plants for better results
3. Ensure proper plant care to keep them healthy
4. Combine multiple plants for enhanced air purification

Regular watering, adequate light, and proper care will ensure your plants remain healthy and continue to purify your air effectively.`,
    image: "/placeholder.svg?key=7d9j2",
    author: "Sarah Green",
    date: "2025-01-15",
    category: "Plant Care",
    readTime: 5,
  },
  {
    id: 2,
    slug: "top-5-low-maintenance-plants-for-apartments",
    title: "Top 5 Low-Maintenance Plants for Apartments",
    excerpt:
      "Perfect plants for small spaces and busy lifestyles. These hardy plants thrive with minimal care and attention.",
    content: `Living in an apartment doesn't mean you can't enjoy the benefits of indoor plants. Here are the top five low-maintenance plants that thrive in apartment environments.

## 1. Snake Plant (Sansevieria)

The Snake Plant is almost indestructible. It tolerates low light, irregular watering, and a wide range of temperatures. This plant actually prefers to dry out between waterings, making it perfect for forgetful plant parents.

## 2. Pothos

Pothos is incredibly forgiving and adapts well to various lighting conditions. It can grow in water or soil, making it versatile for any apartment setup. Water when the soil feels dry, and it will thrive.

## 3. ZZ Plant

The ZZ Plant is a champion of low-maintenance care. It handles low light and can go weeks without water. Its glossy leaves add an elegant touch to any apartment.

## 4. Spider Plant

Spider Plants are extremely adaptable and produce oxygen efficiently. They're great for beginners and require minimal care. They also produce cute baby plants that you can propagate!

## 5. Rubber Plant

Despite their tropical appearance, Rubber Plants are surprisingly low-maintenance. They prefer bright light but can adapt to moderate conditions. They grow tall, making them perfect for filling empty corners.

## General Care Tips

- Water sparingly in winter
- Use well-draining soil
- Clean leaves occasionally with a damp cloth
- Rotate your plants quarterly for even growth

With these five plants, you can create a green apartment sanctuary without breaking a sweat!`,
    image: "/placeholder.svg?key=8f2k4",
    author: "James Plant",
    date: "2025-01-10",
    category: "Beginner Tips",
    readTime: 4,
  },
  {
    id: 3,
    slug: "benefits-of-money-plant-at-home",
    title: "Benefits of Having a Money Plant at Home",
    excerpt: "Beyond the superstitions, discover the real benefits of the Money Plant for your home and well-being.",
    content: `The Money Plant (Pothos) has been a symbol of prosperity and good luck in many cultures for centuries. But beyond the superstitions, there are genuine benefits to having this beautiful plant in your home.

## Spiritual and Feng Shui Benefits

According to Feng Shui principles, the Money Plant attracts prosperity and positive energy. Placing it in the southeast corner of your home or office is believed to enhance wealth and abundance.

## Air Purification

The Money Plant is an excellent air purifier, effectively removing formaldehyde, benzene, and other harmful substances from the air.

## Low-Maintenance Care

The Money Plant thrives in various conditions with minimal care. It grows well in low to bright indirect light and requires watering only when the soil feels dry.

## Aesthetic Appeal

With its heart-shaped leaves and graceful trailing vines, the Money Plant adds a touch of elegance to any space. It looks beautiful in hanging baskets or trained on moss poles.

## Mental Health Benefits

Having plants like the Money Plant in your home has been shown to reduce stress, improve mood, and increase overall well-being. The act of caring for a plant can be meditative and rewarding.

## Growing Tips

- Keep soil consistently moist but not waterlogged
- Provide bright, indirect light for best growth
- Fertilize monthly during growing season
- Prune regularly to maintain shape

Invite the Money Plant into your home and enjoy both its practical benefits and the positive energy it brings.`,
    image: "/placeholder.svg?key=9g3l5",
    author: "Emma Green",
    date: "2025-01-05",
    category: "Plant Benefits",
    readTime: 4,
  },
  {
    id: 4,
    slug: "how-plants-reduce-stress-and-boost-mood",
    title: "How Plants Reduce Stress and Boost Mood",
    excerpt:
      "Explore the scientific evidence behind why plants improve mental health and create a calming environment.",
    content: `There's growing scientific evidence that indoor plants don't just look good—they're good for your mental health too. Discover how plants can reduce stress and boost your mood.

## The Science of Biophilia

Humans have an innate connection to nature called biophilia. Being around plants triggers this natural connection, reducing stress levels and promoting a sense of calm.

## Improved Air Quality, Better Health

Clean air from plants means better oxygen flow to your brain, improving concentration and reducing fatigue. Better air quality leads to better sleep and overall well-being.

## The Stress-Reducing Effect

Studies show that simply looking at plants can reduce blood pressure and heart rate. The presence of greenery in your space creates a calming effect that's impossible to ignore.

## Attention Restoration

Plants help restore mental attention and reduce mental fatigue. After spending time in a stressful environment, being around plants helps your mind recover.

## Connection and Purpose

Caring for plants gives us a sense of purpose and connection. This nurturing relationship with living things releases feel-good hormones and promotes emotional well-being.

## Creating a Plant-Rich Space

- Position plants at eye level in your workspace
- Create a dedicated plant corner in your bedroom
- Use plants in common areas for family stress relief
- Mix different plant types for visual interest

Transform your space into a green sanctuary and watch your stress levels plummet and your mood soar.`,
    image: "/placeholder.svg?key=0h4m6",
    author: "Dr. Michael Chen",
    date: "2024-12-28",
    category: "Wellness",
    readTime: 5,
  },
  {
    id: 5,
    slug: "tips-for-watering-your-succulents",
    title: "Tips for Watering Your Succulents",
    excerpt: "Master the art of succulent care with our comprehensive guide to proper watering techniques.",
    content: `Succulents are famous for their low-maintenance nature, but the most common mistake people make is overwatering. Here's how to water your succulents correctly.

## Understanding Succulent Water Needs

Succulents store water in their leaves and stems, so they don't need frequent watering. In fact, they prefer the "soak and dry" method, where you water thoroughly but infrequently.

## The Soak and Dry Method

1. Water thoroughly until it drains from the bottom
2. Let the soil dry out completely between waterings
3. In winter, reduce watering frequency further
4. Check soil before watering—if it's moist, wait longer

## Seasonal Watering Guide

**Spring and Summer**: Water every 2-3 weeks
**Fall**: Water every 3-4 weeks
**Winter**: Water sparingly, every 4-6 weeks or less

## Signs of Overwatering

- Soft, mushy leaves
- Root rot
- Wilting despite moist soil
- Yellow or translucent leaves

## Signs of Underwatering

- Shriveled leaves
- Brittle, thin stems
- General thinning of the plant

## Soil and Drainage

Use well-draining soil specifically designed for succulents. Add perlite or sand to regular potting soil if needed. Ensure pots have drainage holes to prevent water accumulation.

## Pro Tips

- Water at the soil level, not on the leaves
- Water in the morning to allow excess to evaporate
- Succulents in winter dormancy need even less water
- When in doubt, underwater rather than overwater

Master these watering techniques and your succulents will thrive beautifully!`,
    image: "/placeholder.svg?key=1i5n7",
    author: "Lisa Succulent",
    date: "2024-12-20",
    category: "Plant Care",
    readTime: 4,
  },
  {
    id: 6,
    slug: "creating-a-plant-wall-in-your-home",
    title: "Creating a Plant Wall in Your Home",
    excerpt:
      "Transform any wall into a living, breathing work of art with our guide to creating the perfect plant wall.",
    content: `A plant wall is a stunning way to bring nature into your home while making a bold design statement. Here's how to create a beautiful plant wall that thrives.

## Planning Your Plant Wall

First, assess your space:
- How much sunlight does the wall receive?
- What's the humidity level in the room?
- What's your maintenance capacity?
- What style fits your home?

## Choosing the Right Wall

- North-facing walls: Low light plants like Pothos, Snake Plant
- East-facing walls: Medium light plants
- South/West-facing walls: High light plants like Succulents
- Consider temperature and humidity near the wall

## Installation Options

**Floating Shelves**: Great for accessibility and flexibility
**Wall-Mounted Planters**: Space-saving and modern
**Hanging Baskets**: Perfect for trailing plants
**Living Wall Systems**: Professional but more investment

## Best Plants for Plant Walls

- **Trailing Plants**: Pothos, String of Pearls, Philodendron
- **Vertical Growers**: Monstera, Rubber Plant
- **Low Light Tolerant**: Snake Plant, ZZ Plant
- **Climbing Plants**: Ivy, Creeping Fig

## Maintenance Tips

- Water regularly but ensure proper drainage
- Clean leaves monthly to keep them vibrant
- Trim and prune to maintain shape
- Rotate plants occasionally for even growth

## Styling Your Plant Wall

- Mix different plant sizes and leaf shapes
- Vary the pot colors and materials
- Include some flowering plants for color
- Leave some breathing room—don't overcrowd

Create a plant wall that's not just beautiful but also healthy and thriving!`,
    image: "/placeholder.svg?key=2j6o8",
    author: "Design Team",
    date: "2024-12-15",
    category: "Design Tips",
    readTime: 5,
  },
]

//objects to hold reciep data (4 items)

const RecipeData = [
    {
      id:1,
      name: 'Chocolate Chip Cookies',
      image: 'data:image/jpeg;base64,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',
      ingredients: [
        '1 cup butter, softened',
        '1 cup white sugar',
        '1 cup packed brown sugar',
        '2 eggs',
        '2 teaspoons vanilla extract',
        '3 cups all-purpose flour',
        '1 teaspoon baking soda',
        '2 teaspoons hot water',
        '1/2 teaspoon salt',
        '2 cups semisweet chocolate chips',
      ],
      instructions: [
        'Preheat oven to 350 degrees F (175 degrees C).',
        'Cream together the butter, white sugar, and brown sugar until smooth.',
        'Dissolve baking soda in hot water. Add to batter along with salt.',
        'Stir in flour, chocolate chips, and nuts.',
        'Drop by large spoonfuls onto ungreased pans.',
        'Bake for about 10 minutes in the preheated oven, or until edges are nicely browned.',
        'Cool on wire racks.',
      ],
    },
    {
      id:2,
      name: 'Pasta with Tomato Sauce',
      image: 'data:image/jpeg;base64,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',
      ingredients: [
        '8 ounces pasta',
        '1 tablespoon olive oil',
        '1 small onion, finely chopped',
        '2 cloves garlic, minced',
        '1 can (14 ounces) crushed tomatoes',
        '1 teaspoon dried basil',
        '1 teaspoon dried oregano',
        'Salt and pepper to taste',
        'Grated Parmesan cheese, for serving',
      ],
      instructions: [
        'Cook pasta according to package instructions. Drain and set aside.',
        'In a large skillet, heat olive oil over medium heat.',
        'Add onion and garlic and cook until softened and fragrant, about 5 minutes.',
        'Stir in crushed tomatoes, basil, oregano, salt, and pepper.',
        'Simmer for 10 minutes, stirring occasionally.',
        'Add cooked pasta to the skillet and toss to coat with the sauce.',
        'Serve hot with grated Parmesan cheese.',
      ],
    },
    // Add more recipe objects if needed
  ];
  
  export default RecipeData;
  
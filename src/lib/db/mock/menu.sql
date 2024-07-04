-- Insert mock data into your table
INSERT INTO menu (name, price, image, description, category_id) VALUES
  -- Appetizers (category_id = 1)
  ('Garlic Bread', 5.99, 'garlic_bread.jpg', 'Classic garlic bread with melted butter and herbs.', 1),
  ('Fried Calamari', 12.99, 'fried_calamari.jpg', 'Tender calamari rings served with marinara sauce.', 1),
  ('Spinach Artichoke Dip', 9.99, 'spinach_artichoke_dip.jpg', 'Creamy dip with spinach, artichoke hearts, and melted cheese.', 1),
  ('Bruschetta', 7.99, 'bruschetta.jpg', 'Toasted bread topped with fresh tomatoes, basil, and balsamic glaze.', 1),
  ('Mozzarella Sticks', 7.99, 'mozzarella_sticks.jpg', 'Golden fried mozzarella sticks served with marinara sauce.', 1),
  ('Buffalo Wings', 10.99, 'buffalo_wings.jpg', 'Spicy chicken wings tossed in buffalo sauce.', 1),
  ('Onion Rings', 5.99, 'onion_rings.jpg', 'Crispy onion rings served with a dipping sauce.', 1),
  ('Nachos', 11.99, 'nachos.jpg', 'Crispy tortilla chips loaded with cheese, jalapenos, and your choice of toppings.', 1),

  -- Salads (category_id = 2)
  ('Caesar Salad', 8.99, 'caesar_salad.jpg', 'Crisp romaine lettuce, parmesan cheese, croutons, and Caesar dressing.', 2),
  ('Greek Salad', 9.99, 'greek_salad.jpg', 'Feta cheese, olives, tomatoes, cucumbers, and red onion.', 2),
  ('Caprese Salad', 7.99, 'caprese_salad.jpg', 'Fresh mozzarella, tomatoes, and basil drizzled with olive oil.', 2),
  ('House Salad', 6.99, 'house_salad.jpg', 'Mixed greens, tomatoes, cucumbers, carrots, and your choice of dressing.', 2),
  ('Chicken Caesar Salad', 12.99, 'chicken_caesar_salad.jpg', 'Grilled chicken added to the classic Caesar salad.', 2),
  ('Steak Salad', 14.99, 'steak_salad.jpg', 'Grilled steak served over mixed greens with your choice of toppings.', 2),
  ('Salmon Salad', 13.99, 'salmon_salad.jpg', 'Grilled salmon served over a bed of mixed greens with your choice of toppings.', 2),

  -- Soups (category_id = 3)
  ('Tomato Soup', 4.99, 'tomato_soup.jpg', 'Classic tomato soup with a hint of basil.', 3),
  ('French Onion Soup', 6.99, 'french_onion_soup.jpg', 'Caramelized onions simmered in beef broth topped with melted Gruyere cheese.', 3),
  ('Chicken Noodle Soup', 5.99, 'chicken_noodle_soup.jpg', 'Hearty chicken broth with noodles and vegetables.', 3),
  ('Chili', 6.99, 'chili.jpg', 'Spicy chili with ground beef, beans, and tomatoes.', 3),
  ('Soup of the Day', 5.99, 'soup_of_the_day.jpg', 'Ask your server for todays soup selection.', 3),

  -- Pasta (category_id = 4)
  ('Spaghetti and Meatballs', 12.99, 'spaghetti_and_meatballs.jpg', 'Classic spaghetti with marinara sauce and meatball.', 4),
  ('Lasagna', 13.99, 'lasagna.jpg', 'Layered pasta with meat sauce, cheese, and béchamel sauce.', 4),
  ('Fettuccine Alfredo', 14.99, 'fettuccine_alfredo.jpg', 'Creamy fettuccine pasta with Alfredo sauce and parmesan cheese.', 4),
  ('Chicken Parmesan', 15.99, 'chicken_parmesan.jpg', 'Breaded chicken cutlet topped with marinara sauce and mozzarella cheese.', 4),
  ('Shrimp Scampi', 16.99, 'shrimp_scampi.jpg', 'Sauteed shrimp with garlic, butter, white wine, and lemon.', 4),
  ('Pasta Primavera', 13.99, 'pasta_primavera.jpg', 'Pasta with seasonal vegetables and a light tomato sauce.', 4),

  -- Pizza (category_id = 5)
  ('Margherita Pizza', 10.99, 'margherita_pizza.jpg', 'Classic pizza with mozzarella cheese, tomato sauce, and fresh basil.', 5),
  ('Pepperoni Pizza', 11.99, 'pepperoni_pizza.jpg', 'Pizza with pepperoni, mozzarella cheese, and tomato sauce.', 5),
  ('Hawaiian Pizza', 12.99, 'hawaiian_pizza.jpg', 'Pizza with ham, pineapple, and mozzarella cheese.', 5),
  ('Meat Lovers Pizza', 14.99, 'meat_lovers_pizza.jpg', 'Pizza with a variety of meats, cheese, and tomato sauce.', 5),
  ('Vegetarian Pizza', 13.99, 'vegetarian_pizza.jpg', 'Pizza with a variety of vegetables, cheese, and tomato sauce.', 5),
  ('Supreme Pizza', 15.99, 'supreme_pizza.jpg', 'Pizza with a combination of meat, vegetables, and cheese.', 5),
  ('White Pizza', 12.99, 'white_pizza.jpg', 'Pizza with garlic, olive oil, ricotta cheese, and mozzarella cheese.', 5),

  -- Burgers (category_id = 6)
  ('Cheeseburger', 10.99, 'cheeseburger.jpg', 'Classic burger with beef patty, cheese, lettuce, tomato, and onion.', 6),
  ('Bacon Cheeseburger', 12.99, 'bacon_cheeseburger.jpg', 'Cheeseburger with crispy bacon added.', 6),
  ('Mushroom Swiss Burger', 11.99, 'mushroom_swiss_burger.jpg', 'Burger with sauteed mushrooms and melted Swiss cheese.', 6),
  ('Chicken Burger', 10.99, 'chicken_burger.jpg', 'Grilled chicken breast on a bun with lettuce, tomato, and onion.', 6),
  ('Black Bean Burger', 11.99, 'black_bean_burger.jpg', 'Vegetarian burger with black beans, spices, and cheese.', 6),
  ('Impossible Burger', 13.99, 'impossible_burger.jpg', 'Plant-based burger with a beefy flavor.', 6),

  -- Sandwiches (category_id = 7)
  ('BLT Sandwich', 9.99, 'blt_sandwich.jpg', 'Bacon, lettuce, and tomato sandwich on toasted bread.', 7),
  ('Grilled Cheese Sandwich', 6.99, 'grilled_cheese_sandwich.jpg', 'Melted cheese between two slices of toasted bread.', 7),
  ('Turkey Sandwich', 8.99, 'turkey_sandwich.jpg', 'Sliced turkey, lettuce, tomato, and mayo on your choice of bread.', 7),
  ('Ham and Swiss Sandwich', 9.99, 'ham_and_swiss_sandwich.jpg', 'Ham, Swiss cheese, lettuce, tomato, and mayo on your choice of bread.', 7),
  ('Roast Beef Sandwich', 10.99, 'roast_beef_sandwich.jpg', 'Thinly sliced roast beef, lettuce, tomato, and horseradish sauce on your choice of bread.', 7),
  ('Club Sandwich', 11.99, 'club_sandwich.jpg', 'Turkey, ham, bacon, lettuce, tomato, and mayo on toasted bread.', 7),

  -- Seafood (category_id = 8)
  ('Grilled Salmon', 18.99, 'grilled_salmon.jpg', 'Grilled salmon served with your choice of sides.', 8),
  ('Fried Fish and Chips', 14.99, 'fried_fish_and_chips.jpg', 'Fried fish served with crispy french fries.', 8),
  ('Shrimp Scampi', 16.99, 'shrimp_scampi.jpg', 'Sauteed shrimp with garlic, butter, white wine, and lemon.', 8),
  ('Lobster Roll', 19.99, 'lobster_roll.jpg', 'Fresh lobster meat served on a toasted bun.', 8),
  ('Seafood Pasta', 17.99, 'seafood_pasta.jpg', 'Pasta with shrimp, scallops, and mussels.', 8),

  -- Desserts (category_id = 9)
  ('Chocolate Cake', 6.99, 'chocolate_cake.jpg', 'Rich chocolate cake with chocolate frosting.', 9),
  ('Cheesecake', 7.99, 'cheesecake.jpg', 'Classic cheesecake with a graham cracker crust.', 9),
  ('Apple Pie', 5.99, 'apple_pie.jpg', 'Warm apple pie with a flaky crust.', 9),
  ('Ice Cream', 4.99, 'ice_cream.jpg', 'Your choice of ice cream flavors.', 9),
  ('Brownie Sundae', 7.99, 'brownie_sundae.jpg', 'Warm brownie topped with ice cream, whipped cream, and chocolate sauce.', 9),

  -- Sushi (category_id = 10)
  ('Spicy Tuna Roll', 12.99, 'spicy_tuna_roll.jpg', 'Tuna, avocado, and sriracha sauce.', 10),
  ('California Roll', 10.99, 'california_roll.jpg', 'Crab, avocado, and cucumber.', 10),
  ('Philadelphia Roll', 11.99, 'philadelphia_roll.jpg', 'Salmon, cream cheese, and avocado.', 10),
  ('Rainbow Roll', 14.99, 'rainbow_roll.jpg', 'Various types of fish, avocado, and cucumber.', 10),
  ('Eel Avocado Roll', 13.99, 'eel_avocado_roll.jpg', 'Eel, avocado, and cucumber.', 10),
  ('Spicy Salmon Roll', 12.99, 'spicy_salmon_roll.jpg', 'Salmon, avocado, and sriracha sauce.', 10),

  -- Drinks (category_id = 11)
  ('Coca-Cola', 2.99, 'coca_cola.jpg', 'Classic cola beverage.', 11),
  ('Diet Coke', 2.99, 'diet_coke.jpg', 'Sugar-free cola beverage.', 11),
  ('Sprite', 2.99, 'sprite.jpg', 'Lemon-lime soda.', 11),
  ('Orange Juice', 3.99, 'orange_juice.jpg', 'Freshly squeezed orange juice.', 11),
  ('Apple Juice', 3.99, 'apple_juice.jpg', 'Freshly squeezed apple juice.', 11),
  ('Coffee', 2.99, 'coffee.jpg', 'Hot coffee brewed fresh.', 11),
  ('Tea', 2.99, 'tea.jpg', 'Hot tea with various flavors.', 11),
  ('Water', 1.99, 'water.jpg', 'Bottled water.', 11)
-- Add more data as needed
;
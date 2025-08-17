'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Products", [{
      "title": "Savory Rice Cakes",
      "description": "Lightly salted rice cakes, perfect for a healthy snack.",
      "price": 2.5,
      "imageURL": "Room 1700"
    }, {
      "title": "Almond Flour Pizza Crust",
      "description": "Low-carb pizza crust made from almond flour, gluten-free.",
      "price": 7.99,
      "imageURL": "Suite 100"
    }, {
      "title": "Pineapple Teriyaki Chicken Mix",
      "description": "A perfect blend of pineapple and teriyaki for stir-fry.",
      "price": 6.99,
      "imageURL": "Suite 64"
    }, {
      "title": "Set of Decorative Storage Bins",
      "description": "Colorful bins to keep your space organized.",
      "price": 34.99,
      "imageURL": "19th Floor"
    }, {
      "title": "Portable Air Compressor",
      "description": "Compact air compressor for inflating tires and sports equipment.",
      "price": 44.99,
      "imageURL": "Suite 38"
    }, {
      "title": "Peach Mango Smoothie",
      "description": "A refreshing blend of peaches and mangoes for a delicious smoothie.",
      "price": 3.49,
      "imageURL": "Room 857"
    }, {
      "title": "Tomatillo Salsa",
      "description": "Tangy salsa made from tomatillos and peppers.",
      "price": 3.29,
      "imageURL": "Room 1840"
    }, {
      "title": "Cinnamon Sugar Mix",
      "description": "Sweet mixture of cinnamon and sugar for sprinkling.",
      "price": 1.49,
      "imageURL": "Suite 5"
    }, {
      "title": "Cat Scratching Post with Toys",
      "description": "Multi-level scratching post to keep your cat entertained.",
      "price": 44.99,
      "imageURL": "5th Floor"
    }, {
      "title": "Almond Flour Tortillas",
      "description": "Gluten-free tortillas made from almond flour, perfect for various wraps and meals.",
      "price": 4.99,
      "imageURL": "10th Floor"
    }, {
      "title": "Handmade Leather Journal",
      "description": "Beautiful leather-bound journal for writing and sketching.",
      "price": 39.99,
      "imageURL": "Apt 1808"
    }, {
      "title": "Pumpkin Pancake Mix",
      "description": "Easy-to-make pancake mix with pumpkin spice flavor.",
      "price": 4.19,
      "imageURL": "Apt 400"
    }, {
      "title": "Garlic Naan Bread",
      "description": "Soft and delicious garlic-infused flatbread, perfect for dipping.",
      "price": 3.99,
      "imageURL": "PO Box 23234"
    }, {
      "title": "Berries Medley",
      "description": "A mix of fresh raspberries, blueberries, and blackberries.",
      "price": 6.99,
      "imageURL": "PO Box 35992"
    }, {
      "title": "Cinnamon Roll Protein Bar",
      "description": "Soft and chewy bar packed with protein and cinnamon flavors.",
      "price": 2.99,
      "imageURL": "Room 1022"
    }, {
      "title": "Sweet Potato Fries",
      "description": "Crispy sweet potato fries, a delicious side dish.",
      "price": 3.99,
      "imageURL": "PO Box 61237"
    }, {
      "title": "Digital Photo Frame",
      "description": "Wi-Fi-enabled digital frame for displaying photos.",
      "price": 79.99,
      "imageURL": "3rd Floor"
    }, {
      "title": "Savory Oatmeal Cups",
      "description": "Savory oatmeal ready to eat, great for breakfast or a snack.",
      "price": 1.99,
      "imageURL": "Apt 1945"
    }, {
      "title": "Greek Feta Cheese",
      "description": "Creamy and crumbly cheese for salads and dishes.",
      "price": 4.99,
      "imageURL": "Suite 48"
    }, {
      "title": "Pumpkin Spice Granola",
      "description": "Crunchy granola with pumpkin spice flavor.",
      "price": 4.99,
      "imageURL": "Apt 721"
    }, {
      "title": "Electric Kettle with Temperature Control",
      "description": "Electric kettle that offers precise temperature settings.",
      "price": 49.99,
      "imageURL": "Apt 853"
    }, {
      "title": "Pet Food Storage Container",
      "description": "Airtight container to keep pet food fresh.",
      "price": 24.99,
      "imageURL": "12th Floor"
    }, {
      "title": "Frozen Broccoli",
      "description": "Nutrient-rich broccoli, easy to add to any meal.",
      "price": 2.49,
      "imageURL": "11th Floor"
    }, {
      "title": "Bamboo Charcoal Air Purifier Bags",
      "description": "Natural air purifiers to absorb odors and moisture.",
      "price": 12.99,
      "imageURL": "17th Floor"
    }, {
      "title": "Digital Drawing Tablet",
      "description": "Tablet for digital drawing and illustration work.",
      "price": 79.99,
      "imageURL": "PO Box 19184"
    }, {
      "title": "Fresh Cilantro",
      "description": "Bright and fragrant cilantro, great for garnishes.",
      "price": 1.49,
      "imageURL": "Suite 46"
    }, {
      "title": "Smart LED Light Strip",
      "description": "Customizable RGB LED light strip, perfect for mood lighting.",
      "price": 29.99,
      "imageURL": "Room 1697"
    }, {
      "title": "Car Phone Mount",
      "description": "Adjustable phone mount for car dashboard.",
      "price": 15.99,
      "imageURL": "7th Floor"
    }, {
      "title": "Cold Brew Coffee Concentrate",
      "description": "Rich and smooth cold brew coffee concentrate, just add water or milk.",
      "price": 7.99,
      "imageURL": "PO Box 200"
    }, {
      "title": "Home Office Chair",
      "description": "Ergonomic office chair with lumbar support and adjustable height.",
      "price": 199.99,
      "imageURL": "Room 689"
    }, {
      "title": "Active Racerback Tank",
      "description": "Lightweight and moisture-wicking racerback tank for workouts.",
      "price": 24.99,
      "imageURL": "14th Floor"
    }, {
      "title": "Maple Chipotle Glaze",
      "description": "A sweet and spicy glaze that's perfect for grilling or marinades.",
      "price": 3.49,
      "imageURL": "Suite 92"
    }, {
      "title": "Biodegradable Trash Bags",
      "description": "Eco-friendly trash bags that break down naturally.",
      "price": 12.99,
      "imageURL": "PO Box 9953"
    }, {
      "title": "Cajun Seasoning",
      "description": "Spicy seasoning mix for all your favorite dishes.",
      "price": 1.99,
      "imageURL": "Apt 113"
    }, {
      "title": "Stainless Steel BBQ Grill Set",
      "description": "Essential tools for outdoor barbecues including tongs and spatula.",
      "price": 49.99,
      "imageURL": "20th Floor"
    }, {
      "title": "Portable Bluetooth Keyboard",
      "description": "Compact keyboard for tablets and smartphones.",
      "price": 39.99,
      "imageURL": "PO Box 43944"
    }, {
      "title": "Linen Trousers",
      "description": "Breathable linen trousers perfect for hot weather.",
      "price": 44.99,
      "imageURL": "12th Floor"
    }, {
      "title": "Smart WiFi Plug",
      "description": "Control appliances remotely using your smartphone.",
      "price": 19.99,
      "imageURL": "Apt 587"
    }, {
      "title": "Almond Coconut Granola",
      "description": "Crunchy granola with almonds and coconut.",
      "price": 3.99,
      "imageURL": "20th Floor"
    }, {
      "title": "Organic Baby Spinach",
      "description": "Fresh baby spinach leaves, great for salads and smoothies.",
      "price": 2.99,
      "imageURL": "Suite 91"
    }, {
      "title": "Mashed Sweet Potatoes",
      "description": "Creamy mashed sweet potatoes with a hint of cinnamon.",
      "price": 3.99,
      "imageURL": "Room 400"
    }, {
      "title": "Adjustable Laptop Desk",
      "description": "Portable desk that can be adjusted for sitting or standing.",
      "price": 59.99,
      "imageURL": "PO Box 3062"
    }, {
      "title": "Cotton Sweatpants",
      "description": "Soft and breathable cotton sweatpants perfect for lounging or workouts.",
      "price": 29.99,
      "imageURL": "Suite 50"
    }, {
      "title": "Digital Kitchen Timer",
      "description": "Easy-to-read digital kitchen timer with alarms.",
      "price": 14.99,
      "imageURL": "Room 181"
    }, {
      "title": "Outdoor Folding Table",
      "description": "Lightweight and portable folding table for camping or picnics.",
      "price": 39.99,
      "imageURL": "Apt 508"
    }, {
      "title": "Eco-Friendly Beeswax Wraps",
      "description": "Reusable wraps for food storage, replacing plastic wraps.",
      "price": 14.99,
      "imageURL": "Suite 79"
    }, {
      "title": "Spicy Thai Chili Sauce",
      "description": "A sweet and spicy sauce for dipping or cooking.",
      "price": 3.29,
      "imageURL": "15th Floor"
    }, {
      "title": "Personal Security Alarm Keychain",
      "description": "Handy keychain that emits a loud alarm for personal safety.",
      "price": 10.99,
      "imageURL": "15th Floor"
    }, {
      "title": "Non-Stick Grill Mat",
      "description": "Reusable mat that prevents food from sticking to the grill.",
      "price": 19.99,
      "imageURL": "2nd Floor"
    }, {
      "title": "Classic Caesar Salad Kit",
      "description": "Everything you need for a fresh and delicious Caesar salad.",
      "price": 4.99,
      "imageURL": "PO Box 1503"
    }, {
      "title": "Nature Explorer Lens Kit",
      "description": "Magical lens kit for kids to explore the outdoors.",
      "price": 19.99,
      "imageURL": "Suite 31"
    }, {
      "title": "Organic Almond Flour",
      "description": "Finely ground almonds for baking or cooking",
      "price": 6.99,
      "imageURL": "Apt 984"
    }, {
      "title": "Almond Flour Pizza Crust",
      "description": "Low-carb pizza crust made from almond flour, gluten-free.",
      "price": 7.99,
      "imageURL": "Room 805"
    }, {
      "title": "Spicy Thai Chili Sauce",
      "description": "A sweet and spicy sauce for dipping or cooking.",
      "price": 3.29,
      "imageURL": "Suite 51"
    }, {
      "title": "Chickpea Salad",
      "description": "A ready-to-eat salad made with chickpeas and veggies.",
      "price": 5.49,
      "imageURL": "Suite 68"
    }, {
      "title": "Bluetooth Shower Speaker",
      "description": "Water-resistant Bluetooth speaker for showers.",
      "price": 24.99,
      "imageURL": "Suite 50"
    }, {
      "title": "Strawberry Banana Smoothie Pack",
      "description": "Frozen smoothie pack with strawberries and bananas.",
      "price": 4.99,
      "imageURL": "Apt 1445"
    }, {
      "title": "Car Diagnostic Scanner",
      "description": "Tool to check car engine codes and performance issues.",
      "price": 49.99,
      "imageURL": "4th Floor"
    }, {
      "title": "Cinnamon Roll Dough",
      "description": "Ready-to-bake cinnamon roll dough for easy breakfasts.",
      "price": 4.49,
      "imageURL": "Apt 861"
    }, {
      "title": "Children's Art Set",
      "description": "All-in-one art set for kids to unleash creativity.",
      "price": 34.99,
      "imageURL": "Room 697"
    }, {
      "title": "Foam Roller for Muscle Recovery",
      "description": "Use this foam roller for effective post-workout recovery.",
      "price": 29.99,
      "imageURL": "Apt 147"
    }, {
      "title": "Electric Meat Grinder",
      "description": "Powerful grinder for making sausage and burgers at home.",
      "price": 89.99,
      "imageURL": "Apt 83"
    }, {
      "title": "Ethical Wool Scarf",
      "description": "A warm and sustainable wool scarf for chilly days.",
      "price": 29.99,
      "imageURL": "PO Box 65159"
    }, {
      "title": "Salsa Verde",
      "description": "Tangy green salsa made with tomatillos, perfect for tacos.",
      "price": 3.49,
      "imageURL": "Apt 924"
    }, {
      "title": "Ice Cream Maker",
      "description": "Homemade ice cream maker for delicious desserts.",
      "price": 79.99,
      "imageURL": "Room 424"
    }, {
      "title": "Noise Cancelling Ear Muffs",
      "description": "Ear protection for shooting and industrial use.",
      "price": 24.99,
      "imageURL": "17th Floor"
    }, {
      "title": "Spaghetti Squash",
      "description": "Low-carb vegetable for pasta alternatives.",
      "price": 3.99,
      "imageURL": "Apt 824"
    }, {
      "title": "Homestyle Beef Stew",
      "description": "Hearty beef stew with vegetables, ready to heat and serve.",
      "price": 7.99,
      "imageURL": "Suite 87"
    }, {
      "title": "Crispy Onion Rings",
      "description": "Frozen onion rings, crispy and ready to bake.",
      "price": 4.29,
      "imageURL": "PO Box 23801"
    }, {
      "title": "Organic Tomato Ketchup",
      "description": "Classic ketchup made from organic tomatoes, no added sugar.",
      "price": 3.49,
      "imageURL": "20th Floor"
    }, {
      "title": "Flavored Popcorn Mix",
      "description": "Popcorn tossed with sweet or savory flavors for a tasty snack.",
      "price": 2.99,
      "imageURL": "Suite 56"
    }, {
      "title": "Heart-Shaped Baking Molds",
      "description": "Love-themed molds for creating desserts and treats.",
      "price": 10.99,
      "imageURL": "Suite 91"
    }, {
      "title": "Almond Flour Pizza Crust",
      "description": "Low-carb pizza crust made from almond flour, gluten-free.",
      "price": 7.99,
      "imageURL": "20th Floor"
    }, {
      "title": "Breathable Face Mask Set",
      "description": "Comfortable and reusable face masks in different styles.",
      "price": 14.99,
      "imageURL": "Apt 1048"
    }, {
      "title": "Maple Breakfast Sausage",
      "description": "Savory sausage links with a hint of maple flavor.",
      "price": 5.99,
      "imageURL": "Apt 1914"
    }, {
      "title": "Smart Scale",
      "description": "Wi-Fi smart scale for tracking weight and BMI.",
      "price": 59.99,
      "imageURL": "14th Floor"
    }, {
      "title": "Cinnamon Raisin Bread",
      "description": "Sweet bread with cinnamon and raisins, great for breakfast or snacks.",
      "price": 3.79,
      "imageURL": "Room 835"
    }, {
      "title": "Fire Roasted Salsa",
      "description": "Salsa made with fire-roasted tomatoes for an authentic flavor.",
      "price": 2.49,
      "imageURL": "Apt 551"
    }, {
      "title": "Canned Sardines",
      "description": "Savory sardines packed in olive oil.",
      "price": 3.29,
      "imageURL": "Room 1147"
    }, {
      "title": "Dog Car Seat Cover",
      "description": "Waterproof cover to protect car seats from pet hair and dirt.",
      "price": 39.99,
      "imageURL": "Suite 78"
    }, {
      "title": "Stainless Steel Straws",
      "description": "Set of reusable stainless steel straws for drinks.",
      "price": 12.99,
      "imageURL": "12th Floor"
    }, {
      "title": "Travel Yoga Mat",
      "description": "Lightweight yoga mat for practicing on the go.",
      "price": 34.99,
      "imageURL": "Suite 56"
    }, {
      "title": "Multicolored LED Strip Lights",
      "description": "Flexible LED lights for creative home lighting designs.",
      "price": 29.99,
      "imageURL": "3rd Floor"
    }, {
      "title": "Crispy Rice Treats",
      "description": "Classic marshmallow treats made with crispy rice.",
      "price": 3.5,
      "imageURL": "Room 1318"
    }, {
      "title": "Nutty Granola Clusters",
      "description": "Crunchy granola clusters mixed with nuts and honey.",
      "price": 2.49,
      "imageURL": "Suite 38"
    }, {
      "title": "Olive Oil",
      "description": "Extra virgin olive oil, ideal for cooking and salads.",
      "price": 7.99,
      "imageURL": "Apt 993"
    }, {
      "title": "Self-Inflating Camping Mattress",
      "description": "Comfortable camping mattress that inflates automatically.",
      "price": 49.99,
      "imageURL": "Apt 1620"
    }, {
      "title": "Flavored Popcorn Mix",
      "description": "Popcorn tossed with sweet or savory flavors for a tasty snack.",
      "price": 2.99,
      "imageURL": "PO Box 57954"
    }, {
      "title": "Coconut Water",
      "description": "Refreshing coconut water, perfect for hydration.",
      "price": 2.49,
      "imageURL": "11th Floor"
    }, {
      "title": "Bluetooth Car Adapter",
      "description": "Connect your phone to the car's audio system via Bluetooth.",
      "price": 24.99,
      "imageURL": "Room 1262"
    }, {
      "title": "Tomato Basil Soup",
      "description": "A classic soup combining tomatoes and basil, great with grilled cheese sandwiches.",
      "price": 3.49,
      "imageURL": "Room 1721"
    }, {
      "title": "Car Windshield Sun Shade",
      "description": "Protects car interior from sun damage and heat.",
      "price": 19.99,
      "imageURL": "Apt 1586"
    }, {
      "title": "Tea Set with Infuser",
      "description": "Elegant tea set that includes an infuser for brewing.",
      "price": 34.99,
      "imageURL": "Apt 1699"
    }, {
      "title": "Greek Feta Cheese",
      "description": "Creamy and crumbly cheese for salads and dishes.",
      "price": 4.99,
      "imageURL": "Apt 866"
    }, {
      "title": "Bluetooth Tracker",
      "description": "Smart tracker to locate keys or other items via app.",
      "price": 19.99,
      "imageURL": "Apt 681"
    }, {
      "title": "Whole Grain Hamburger Buns",
      "description": "Soft hamburger buns made with whole grains.",
      "price": 2.69,
      "imageURL": "20th Floor"
    }, {
      "title": "Coconut Lime Rice",
      "description": "Flavorful rice mixed with coconut and lime, a tropical side dish.",
      "price": 2.99,
      "imageURL": "Room 1065"
    }, {
      "title": "Sliced Avocado",
      "description": "Ready-to-eat avocado slices, perfect for tacos.",
      "price": 2.79,
      "imageURL": "Room 1063"
    }, {
      "title": "Pet Hair Vacuum Attachment",
      "description": "Special attachment for vacuum cleaners to remove pet hair easily.",
      "price": 14.99,
      "imageURL": "Room 148"
    }, {
      "title": "Pet Grooming Scissors",
      "description": "Quality scissors designed for easy pet grooming.",
      "price": 16.99,
      "imageURL": "8th Floor"
    }], {})
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

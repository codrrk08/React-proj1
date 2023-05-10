const menuItem= [
    {
        id: 1,
        image:"https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1021&q=80",
        name: "PavBhaji",
        category: "Breakfast",
        price: "50₹",
        description: "Pav bhaji (Marathi : पाव भाजी) is a street food dish from India consisting of a thick vegetable curry (bhaji) served with a soft bread roll (pav). ",
    },

    {
        id: 2,
        image:"https://images.pexels.com/photos/13063294/pexels-photo-13063294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Poha",
        category: "Breakfast",
        price: "40₹",
        description: "Poha, also known as pauwa, sira, chira, aval (அவல்) or avalakki-in Kannada language (ಅವಲಕ್ಕಿ), among many other names, is flattened rice originating from the Indian subcontinent.",
    },

    {
        id: 3,
        image:"https://images.pexels.com/photos/15797948/pexels-photo-15797948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Vermicelli",
        category: "Breakfast",
        price: "40₹",
        description: "Javein (Namkeen Seviyan) is a veg Breakfast dish. It is Shallow fried. Javein, also called Namkeen Seviyna, is a delicious breakfast option and is sometimes served as snack. ",
    },

    {
        id: 4,
        image:"https://images.unsplash.com/photo-1668236543090-82eba5ee5976?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        name: "Dosa",
        category: "Breakfast",
        price: "70₹",
        description: "A dosa, also called dosai, dosey or dosha is a thin pancake in South Indian cuisine made from a fermented batter of ground black lentils and rice. ",
    },

    {
        id: 5,
        image:"https://as2.ftcdn.net/v2/jpg/01/67/16/47/1000_F_167164733_ogLJN8aKo4yvXR8a7nWeewOq2wfbxQhb.jpg",
        name: "Chole Bhature",
        category: "Breakfast",
        price: "100₹",
        description: "Chole bhature (Hindi: छोले भटूरे) is a food dish popular in the Northern areas of the Indian subcontinent.It is a combination of chana masala (spicy white chickpeas) and bhatura/puri, a deep-fried bread made from maida.",
    },

    {
        id: 6,
        image:"https://static.toiimg.com/thumb/89721602.cms?imgsize=75354&width=800&height=800",
        name: "Kadhi",
        category: "Lunch",
        price: "70₹",
        description: "Kadhi, or karhi, is a popular dish mainly consumed in South Asia. It consists of a thick gravy or soup based on gram flour, and it may contain vegetable fritters called pakora, which include dahi for a sour taste. ",
    },
    {
        id: 7,
        image:"https://i0.wp.com/vegecravings.com/wp-content/uploads/2018/02/Mix-Veg-Recipe-Step-By-Step-Instructions.jpg?fit=2349%2C1944&quality=65&strip=all&ssl=1",
        name: "Mix Veg",
        category: "Lunch",
        price: "80₹",
        description: "Mix veg curry is made by cooking a mixture of vegetables together in a traditional Indian onion-tomato gravy.",
    },
    {
        id: 8,
        image:"https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Punjabi-Aloo-Matar-Recipe.jpg",
        name: "Aloo Matar",
        category: "Lunch",
        price: "60₹",
        description: "Aloo mutter is a vegetarian North Indian dish from the Indian subcontinent which is made from potatoes and peas in a mildly spiced creamy tomato based gravy.",
    },
    {
        id: 9,
        image:"https://images.pexels.com/photos/5410401/pexels-photo-5410401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Chicken Biryani / Veg Biryani",
        category: "Lunch",
        price: "100₹",
        description: "Biryani is a mixed rice dish originating among the Muslims of South Asia. ",
    },
    {
        id: 10,
        image:"https://madhurasrecipe.com/wp-content/uploads/2020/10/Dal-Fry-Marathi-Recipe.jpg",
        name: "Dal Fry",
        category: "Lunch",
        price: "70₹",
        description: "Dal Fry is a delicious and popular Indian lentil recipe that is made with tuvar dal (pigeon pea lentils), onions, tomatoes and spices. ",
    },
    {
        id: 11,
        image:"https://images.pexels.com/photos/9407171/pexels-photo-9407171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Roti",
        category: "Lunch",
        price: "70₹",
        description: "Roti is a round flatbread native to the Indian subcontinent.  ",
    },
    {
        id: 12,
        image:"https://images.unsplash.com/photo-1516684732162-798a0062be99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
        name: "Rice",
        category: "Lunch",
        price: "70₹",
        description: "Rice is the seed of the grass species Oryza sativa (Asian rice) or less commonly O. glaberrima (African rice). ",
    },
    {
        id: 13,
        image:"https://images.pexels.com/photos/13063309/pexels-photo-13063309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Pani Puri",
        category: "Snacks",
        price: "70₹",
        description: "Panipuri, fuchka, phuchka, gupchup, golgappa, or pani ke patashe is a type of snack originating in the Indian subcontinent, where it is an extremely common street food. ",
    },
    {
        id: 14,
        image:"https://images.pexels.com/photos/7146785/pexels-photo-7146785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Sweet Corn Salad",
        category: "Snacks",
        price: "70₹",
        description: "In this simple corn salad recipe, fresh sweet corn kernels are mixed with various fresh vegetables like tomato, onion, cucumber, etc, sprinkled with herbs ..."
    },
    {
        id: 15,
        image:"https://images.pexels.com/photos/14477873/pexels-photo-14477873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Samosa",
        category: "Snacks",
        price: "70₹",
        description: " A samosa or singara is a fried South Asian pastry with a savoury filling, including ingredients such as spiced potatoes, onions, and peas.",
    },
    {
        id: 16,
        image:"https://media.istockphoto.com/id/1307786779/photo/khaman-dhokla.jpg?b=1&s=612x612&w=0&k=20&c=49MxI6GI8QRbF9LhEE5oGAlS85YTYNTH5Z9umPknhEY=",
        name: "Dhokla",
        category: "Snacks",
        price: "70₹",
        description: "Dhokla is a savoury sponge dish that is native to the Indian state of Gujarat and parts of adjacent states, and is popular throughout the country. ",
    },
    {
        id: 17,
        image:"https://images.pexels.com/photos/3214161/pexels-photo-3214161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Pasta",
        category: "Snacks",
        price: "70₹",
        description: "Pasta is a type of food typically made from an unleavened dough of wheat flour mixed with water or eggs, and formed into sheets or other shapes, then cooked by boiling or baking",
    },
    {
        id: 18,
        image:"https://images.pexels.com/photos/6066050/pexels-photo-6066050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Chickpea Salad",
        category: "Snacks",
        price: "70₹",
        description: "Chickpea Salad loaded with crisp cucumbers, juicy tomatoes, creamy avocado, feta cheese and chickpeas or garbanzo beans.",
    },

    {
        id: 19,
        image:"https://butfirstchai.com/wp-content/uploads/2023/01/chicken-chettinad-gravy-2.jpg",
        name: "Chicken Chettinad",
        category: "Dinner",
        price: "70₹",
        description: "Chicken Chettinad or Chettinad chicken is a classic Indian recipe, from the cuisine of Chettinad, Tamil Nadu.",
    },
    {
        id: 20,
        image:"https://images.pexels.com/photos/8625813/pexels-photo-8625813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Egg Curry",
        category: "Dinner",
        price: "70₹",
        description: "Egg curry is a comforting Indian dish of curried eggs. It is basically made with hard boiled eggs, onions, tomatoes, whole & ground spices ",
    },
    {
        id: 21,
        image:"https://www.indianveggiedelight.com/wp-content/uploads/2019/05/chana-masala-recipe-featured.jpg",
        name: "Chana Masala",
        category: "Dinner",
        price: "70₹",
        description: "Chana masala, chole masala, or chole is a chickpea curry originating in the Indian subcontinent. It is a staple dish in North Indian cuisine. ",
    },
    {
        id: 22,
        image:"https://myfoodstory.com/wp-content/uploads/2021/09/karahi-chicken-kadai-chicken-1-500x500.jpg",
        name: "Kadhai Chicken",
        category: "Dinner",
        price: "70₹",
        description: "Kadai chicken is a delicious, spicy & flavorful dish made with chicken, onions, tomatoes, ginger, garlic & fresh ground spices",
    },
    {
        id: 23,
        image:"https://myfoodstory.com/wp-content/uploads/2021/10/Veg-Manchurian-FI-1.jpg",
        name: "Gobhi Manchurian",
        category: "Dinner",
        price: "70₹",
        description: " Manchurian is a class of Indian Chinese dish made by roughly chopping and deep-frying ingredients such as chicken, cauliflower, prawns, fish, mutton, and paneer, and then sautéeing them in a sauce flavored with soy sauce",
    },
    {
        id: 24,
        image:"https://rainbowplantlife.com/wp-content/uploads/2021/06/Dal-Makhani-edited-photos-5-of-6.jpg",
        name: "Dal Makhani",
        category: "Dinner",
        price: "70₹",
        description: "Dal makhani is a dish originating in Punjab, India. A relatively modern variation of traditional lentil dishes, it is made with urad dal and other pulses, and includes butter and cream. ",
    },
    {
        id: 25,
        image:"https://images.pexels.com/photos/9407171/pexels-photo-9407171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Roti",
        category: "Dinner",
        price: "70₹",
        description: "Roti is a round flatbread native to the Indian subcontinent.  ",
    },
    {
        id: 26,
        image:"https://images.unsplash.com/photo-1516684732162-798a0062be99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
        name: "Rice",
        category: "Dinner",
        price: "70₹",
        description: "Rice is the seed of the grass species Oryza sativa (Asian rice) or less commonly O. glaberrima (African rice). ",
    },
    {
        id: 27,
        image:"https://1.bp.blogspot.com/-GG2xQ4rLYj4/YG3Dw2G3GuI/AAAAAAAATIc/jcCDbMS6JpEIbXPnx-vlVy7bZjxk0FhTwCNcBGAsYHQ/s640/Puffed-Poori.jpg",
        name: "Puri",
        category: "Dinner",
        price: "70₹",
        description: "Puri is a deep-fried bread made from unleavened whole-wheat flour that originated in India. It is eaten for breakfast or as a snack or light meal. ",
    },
    {
        id: 27,
        image:"https://1.bp.blogspot.com/-GG2xQ4rLYj4/YG3Dw2G3GuI/AAAAAAAATIc/jcCDbMS6JpEIbXPnx-vlVy7bZjxk0FhTwCNcBGAsYHQ/s640/Puffed-Poori.jpg",
        name: "Dry fruits",
        category: "Evening",
        price: "70₹",
        description: "Puri is a deep-fried bread made from unleavened whole-wheat flour that originated in India. It is eaten for breakfast or as a snack or light meal. ",
    },


    
    

    
];

export default menuItem;

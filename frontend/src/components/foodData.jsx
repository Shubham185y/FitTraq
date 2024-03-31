// foodData.js
const foodData = [
  {
    "Category": "SNACK",
    "Description": "Panipuri",
    "StandardWeightPerItem": 100,
    "FoodType": "Snack",
    "Data": {
      "Carbohydrate": 20,
      "Fiber": 1,
      "Kilocalories": 80,
      "Protein": 2,
      "Fat": {
        "Polysaturated Fat": 0.2,
        "Saturated Fat": 0.1
      },
      "Major Minerals": {
        "Iron": 0.4,
        "Potassium": 50,
        "Sodium": 200,
        "Zinc": 0.3
      },
      "Vitamins": {
        "Vitamin A - IU": 100,
        "Vitamin A - RAE": 30,
        "Vitamin B12": 0,
        "Vitamin B6": 0.02,
        "Vitamin C": 10,
        "Vitamin E": 0.5,
        "Vitamin K": 1
      }
    }
  },
  {
    "Category": "SNACK",
    "Description": "Vadapav",
    "StandardWeightPerItem": 100,
    "FoodType": "Snack",
    "Data": {
      "Carbohydrate": 30,
      "Fiber": 2,
      "Kilocalories": 250,
      "Protein": 5,
      "Fat": {
        "Polysaturated Fat": 0.5,
        "Saturated Fat": 2.5
      },
      "Major Minerals": {
        "Iron": 0.8,
        "Potassium": 100,
        "Sodium": 300,
        "Zinc": 0.4
      },
      "Vitamins": {
        "Vitamin A - IU": 150,
        "Vitamin A - RAE": 40,
        "Vitamin B12": 0.1,
        "Vitamin B6": 0.03,
        "Vitamin C": 5,
        "Vitamin E": 1,
        "Vitamin K": 2
      }
    }
  },
  {
    "Category": "BREAKFAST",
    "Description": "Idli-Sambar",
    "StandardWeightPerItem": 100,
    "FoodType": "Breakfast",
    "Data": {
      "Carbohydrate": 25,
      "Fiber": 3,
      "Kilocalories": 150,
      "Protein": 4,
      "Fat": {
        "Polysaturated Fat": 0.4,
        "Saturated Fat": 0.2
      },
      "Major Minerals": {
        "Iron": 1.2,
        "Potassium": 120,
        "Sodium": 400,
        "Zinc": 0.6
      },
      "Vitamins": {
        "Vitamin A - IU": 200,
        "Vitamin A - RAE": 50,
        "Vitamin B12": 0.2,
        "Vitamin B6": 0.05,
        "Vitamin C": 8,
        "Vitamin E": 1.5,
        "Vitamin K": 3
      }
    }
  },
  {
    "Category": "LUNCH",
    "Description": "Dal-Chawal",
    "StandardWeightPerItem": 100,
    "FoodType": "Lunch",
    "Data": {
      "Carbohydrate": 40,
      "Fiber": 5,
      "Kilocalories": 300,
      "Protein": 10,
      "Fat": {
        "Polysaturated Fat": 1,
        "Saturated Fat": 0.5
      },
      "Major Minerals": {
        "Iron": 2,
        "Potassium": 200,
        "Sodium": 600,
        "Zinc": 1
      },
      "Vitamins": {
        "Vitamin A - IU": 300,
        "Vitamin A - RAE": 80,
        "Vitamin B12": 0.5,
        "Vitamin B6": 0.1,
        "Vitamin C": 15,
        "Vitamin E": 2,
        "Vitamin K": 5
      }
    }
  },
  {
    "Category": "DINNER",
    "Description": "Butter Chicken",
    "StandardWeightPerItem": 100,
    "FoodType": "Dinner",
    "Data": {
      "Carbohydrate": 15,
      "Fiber": 1,
      "Kilocalories": 400,
      "Protein": 20,
      "Fat": {
        "Polysaturated Fat": 2,
        "Saturated Fat": 10
      },
      "Major Minerals": {
        "Iron": 2.5,
        "Potassium": 250,
        "Sodium": 800,
        "Zinc": 1.5
      },
      "Vitamins": {
        "Vitamin A - IU": 400,
        "Vitamin A - RAE": 100,
        "Vitamin B12": 1,
        "Vitamin B6": 0.2,
        "Vitamin C": 20,
        "Vitamin E": 3,
        "Vitamin K": 8
      }
    }
  },
  {
    "Category": "SNACK",
    "Description": "Samosa",
    "StandardWeightPerItem": 100,
    "FoodType": "Snack",
    "Data": {
      "Carbohydrate": 35,
      "Fiber": 2,
      "Kilocalories": 200,
      "Protein": 6,
      "Fat": {
        "Polysaturated Fat": 0.8,
        "Saturated Fat": 4
      },
      "Major Minerals": {
        "Iron": 1,
        "Potassium": 150,
        "Sodium": 400,
        "Zinc": 1.2
      },
      "Vitamins": {
        "Vitamin A - IU": 250,
        "Vitamin A - RAE": 70,
        "Vitamin B12": 0.3,
        "Vitamin B6": 0.08,
        "Vitamin C": 10,
        "Vitamin E": 1.8,
        "Vitamin K": 4
      }
    }
  },
  {
    "Category": "BREAKFAST",
    "Description": "Poha",
    "StandardWeightPerItem": 100,
    "FoodType": "Breakfast",
    "Data": {
      "Carbohydrate": 30,
      "Fiber": 4,
      "Kilocalories": 250,
      "Protein": 5,
      "Fat": {
        "Polysaturated Fat": 0.5,
        "Saturated Fat": 2
      },
      "Major Minerals": {
        "Iron": 1.5,
        "Potassium": 100,
        "Sodium": 300,
        "Zinc": 0.8
      },
      "Vitamins": {
        "Vitamin A - IU": 300,
        "Vitamin A - RAE": 80,
        "Vitamin B12": 0.4,
        "Vitamin B6": 0.1,
        "Vitamin C": 10,
        "Vitamin E": 2,
        "Vitamin K": 4
      }
    }
  },
  {
    "Category": "LUNCH",
    "Description": "Rajma-Chawal",
    "StandardWeightPerItem": 100,
    "FoodType": "Lunch",
    "Data": {
      "Carbohydrate": 45,
      "Fiber": 6,
      "Kilocalories": 350,
      "Protein": 12,
      "Fat": {
        "Polysaturated Fat": 1.2,
        "Saturated Fat": 0.6
      },
      "Major Minerals": {
        "Iron": 2.2,
        "Potassium": 180,
        "Sodium": 500,
        "Zinc": 1.2
      },
      "Vitamins": {
        "Vitamin A - IU": 350,
        "Vitamin A - RAE": 90,
        "Vitamin B12": 0.6,
        "Vitamin B6": 0.12,
        "Vitamin C": 18,
        "Vitamin E": 2.5,
        "Vitamin K": 6
      }
    }
  },
  {
    "Category": "SNACK",
    "Description": "Bhel Puri",
    "StandardWeightPerItem": 100,
    "FoodType": "Snack",
    "Data": {
      "Carbohydrate": 25,
      "Fiber": 3,
      "Kilocalories": 180,
      "Protein": 4,
      "Fat": {
        "Polysaturated Fat": 0.3,
        "Saturated Fat": 1.5
      },
      "Major Minerals": {
        "Iron": 1.2,
        "Potassium": 80,
        "Sodium": 300,
        "Zinc": 0.5
      },
      "Vitamins": {
        "Vitamin A - IU": 250,
        "Vitamin A - RAE": 60,
        "Vitamin B12": 0.3,
        "Vitamin B6": 0.05,
        "Vitamin C": 15,
        "Vitamin E": 1.5,
        "Vitamin K": 4
      }
    }
  },
  {
    "Category": "DINNER",
    "Description": "Vegetable Biryani",
    "StandardWeightPerItem": 100,
    "FoodType": "Dinner",
    "Data": {
      "Carbohydrate": 50,
      "Fiber": 4,
      "Kilocalories": 400,
      "Protein": 8,
      "Fat": {
        "Polysaturated Fat": 1.5,
        "Saturated Fat": 2
      },
      "Major Minerals": {
        "Iron": 2.8,
        "Potassium": 220,
        "Sodium": 700,
        "Zinc": 1.8
      },
      "Vitamins": {
        "Vitamin A - IU": 350,
        "Vitamin A - RAE": 80,
        "Vitamin B12": 0.4,
        "Vitamin B6": 0.1,
        "Vitamin C": 20,
        "Vitamin E": 2.2,
        "Vitamin K": 5
      }
    }
  },
  {
    "Category": "FRUITS",
    "Description": "Apple",
    "StandardWeightPerItem": 100,
    "FoodType": "Snack",
    "Data": {
      "Carbohydrate": 14,
      "Fiber": 2,
      "Kilocalories": 52,
      "Protein": 0.3,
      "Fat": {
        "Polysaturated Fat": 0.02,
        "Saturated Fat": 0.03
      },
      "Major Minerals": {
        "Iron": 0.1,
        "Potassium": 107,
        "Sodium": 1,
        "Zinc": 0.05
      },
      "Vitamins": {
        "Vitamin A - IU": 54,
        "Vitamin A - RAE": 3,
        "Vitamin B12": 0,
        "Vitamin B6": 0.03,
        "Vitamin C": 0.5,
        "Vitamin E": 0.18,
        "Vitamin K": 2.2
      }
    }
  },
  {
    "Category": "VEGETABLES",
    "Description": "Broccoli",
    "StandardWeightPerItem": 100,
    "FoodType": "Lunch",
    "Data": {
      "Carbohydrate": 7,
      "Fiber": 2.6,
      "Kilocalories": 55,
      "Protein": 3.7,
      "Fat": {
        "Polysaturated Fat": 0.05,
        "Saturated Fat": 0.1
      },
      "Major Minerals": {
        "Iron": 0.7,
        "Potassium": 316,
        "Sodium": 33,
        "Zinc": 0.41
      },
      "Vitamins": {
        "Vitamin A - IU": 623,
        "Vitamin A - RAE": 31,
        "Vitamin B12": 0,
        "Vitamin B6": 0.14,
        "Vitamin C": 89,
        "Vitamin E": 0.78,
        "Vitamin K": 101
      }
    }
  },
  {
    "Category": "DAIRY",
    "Description": "Milk",
    "StandardWeightPerItem": 100,
    "FoodType": "Breakfast",
    "Data": {
      "Carbohydrate": 5,
      "Fiber": 0,
      "Kilocalories": 42,
      "Protein": 3.4,
      "Fat": {
        "Polysaturated Fat": 0.07,
        "Saturated Fat": 1.8
      },
      "Major Minerals": {
        "Iron": 0.3,
        "Potassium": 150,
        "Sodium": 50,
        "Zinc": 0.4
      },
      "Vitamins": {
        "Vitamin A - IU": 61,
        "Vitamin A - RAE": 17,
        "Vitamin B12": 1.1,
        "Vitamin B6": 0.05,
        "Vitamin C": 0,
        "Vitamin E": 0.1,
        "Vitamin K": 0.1
      }
    }
  },
  {
    "Category": "MEAT",
    "Description": "Chicken Breast",
    "StandardWeightPerItem": 100,
    "FoodType": "Dinner",
    "Data": {
      "Carbohydrate": 0,
      "Fiber": 0,
      "Kilocalories": 165,
      "Protein": 31,
      "Fat": {
        "Polysaturated Fat": 0.7,
        "Saturated Fat": 3.6
      },
      "Major Minerals": {
        "Iron": 0.6,
        "Potassium": 256,
        "Sodium": 74,
        "Zinc": 0.5
      },
      "Vitamins": {
        "Vitamin A - IU": 0,
        "Vitamin A - RAE": 6,
        "Vitamin B12": 0.3,
        "Vitamin B6": 0.7,
        "Vitamin C": 0,
        "Vitamin E": 0.2,
        "Vitamin K": 0.3
      }
    }
  },
  {
    "Category": "GRAINS",
    "Description": "Quinoa",
    "StandardWeightPerItem": 100,
    "FoodType": "Lunch",
    "Data": {
      "Carbohydrate": 21,
      "Fiber": 2.8,
      "Kilocalories": 120,
      "Protein": 4,
      "Fat": {
        "Polysaturated Fat": 0.3,
        "Saturated Fat": 1.2
      },
      "Major Minerals": {
        "Iron": 1.5,
        "Potassium": 172,
        "Sodium": 5,
        "Zinc": 1.1
      },
      "Vitamins": {
        "Vitamin A - IU": 0,
        "Vitamin A - RAE": 0,
        "Vitamin B12": 0,
        "Vitamin B6": 0.1,
        "Vitamin C": 0,
        "Vitamin E": 1.5,
        "Vitamin K": 0.5
      }
    }
  },
  {
    "Category": "SEAFOOD",
    "Description": "Salmon",
    "StandardWeightPerItem": 100,
    "FoodType": "Dinner",
    "Data": {
      "Carbohydrate": 0,
      "Fiber": 0,
      "Kilocalories": 206,
      "Protein": 22,
      "Fat": {
        "Polysaturated Fat": 3.2,
        "Saturated Fat": 4.4
      },
      "Major Minerals": {
        "Iron": 0.4,
        "Potassium": 363,
        "Sodium": 50,
        "Zinc": 0.6
      },
      "Vitamins": {
        "Vitamin A - IU": 50,
        "Vitamin A - RAE": 4,
        "Vitamin B12": 4.9,
        "Vitamin B6": 0.7,
        "Vitamin C": 0,
        "Vitamin E": 0.5,
        "Vitamin K": 0.1
      }
    }
  },
  {
    "Category": "BEVERAGES",
    "Description": "Green Tea",
    "StandardWeightPerItem": 100,
    "FoodType": "Beverage",
    "Data": {
      "Carbohydrate": 0,
      "Fiber": 0,
      "Kilocalories": 0,
      "Protein": 0,
      "Fat": {
        "Polysaturated Fat": 0,
        "Saturated Fat": 0
      },
      "Major Minerals": {
        "Iron": 0.02,
        "Potassium": 20,
        "Sodium": 2,
        "Zinc": 0.01
      },
      "Vitamins": {
        "Vitamin A - IU": 0,
        "Vitamin A - RAE": 0,
        "Vitamin B12": 0,
        "Vitamin B6": 0,
        "Vitamin C": 0,
        "Vitamin E": 0.1,
        "Vitamin K": 0
      }
    }
  },
  {
    "Category": "SNACK",
    "Description": "Almonds",
    "StandardWeightPerItem": 100,
    "FoodType": "Snack",
    "Data": {
      "Carbohydrate": 6,
      "Fiber": 3.5,
      "Kilocalories": 576,
      "Protein": 21,
      "Fat": {
        "Polysaturated Fat": 1.7,
        "Saturated Fat": 4.4
      },
      "Major Minerals": {
        "Iron": 3.7,
        "Potassium": 705,
        "Sodium": 1,
        "Zinc": 3.1
      },
      "Vitamins": {
        "Vitamin A - IU": 0,
        "Vitamin A - RAE": 0,
        "Vitamin B12": 0,
        "Vitamin B6": 0.1,
        "Vitamin C": 0,
        "Vitamin E": 7.3,
        "Vitamin K": 0.2
      }
    }
  },
  {
    "Category": "FRUITS",
    "Description": "Banana",
    "StandardWeightPerItem": 100,
    "FoodType": "Snack",
    "Data": {
      "Carbohydrate": 27,
      "Fiber": 3.1,
      "Kilocalories": 89,
      "Protein": 1.3,
      "Fat": {
        "Polysaturated Fat": 0.1,
        "Saturated Fat": 0.3
      },
      "Major Minerals": {
        "Iron": 0.3,
        "Potassium": 358,
        "Sodium": 1,
        "Zinc": 0.2
      },
      "Vitamins": {
        "Vitamin A - IU": 64,
        "Vitamin A - RAE": 3,
        "Vitamin B12": 0,
        "Vitamin B6": 0.4,
        "Vitamin C": 8.7,
        "Vitamin E": 0.1,
        "Vitamin K": 0.5
      }
    }
  },
  {
    "Category": "DAIRY",
    "Description": "Greek Yogurt",
    "StandardWeightPerItem": 100,
    "FoodType": "Breakfast",
    "Data": {
      "Carbohydrate": 3.6,
      "Fiber": 0,
      "Kilocalories": 59,
      "Protein": 10,
      "Fat": {
        "Polysaturated Fat": 0.2,
        "Saturated Fat": 0.4
      },
      "Major Minerals": {
        "Iron": 0.1,
        "Potassium": 141,
        "Sodium": 36,
        "Zinc": 0.6
      },
      "Vitamins": {
        "Vitamin A - IU": 14,
        "Vitamin A - RAE": 1,
        "Vitamin B12": 0.5,
        "Vitamin B6": 0.1,
        "Vitamin C": 0,
        "Vitamin E": 0.1,
        "Vitamin K": 0.2
      }
    }
  },
  {
    "Category": "SNACK",
    "Description": "Trail Mix",
    "StandardWeightPerItem": 100,
    "FoodType": "Snack",
    "Data": {
      "Carbohydrate": 34,
      "Fiber": 4,
      "Kilocalories": 480,
      "Protein": 14,
      "Fat": {
        "Polysaturated Fat": 2.4,
        "Saturated Fat": 3.6
      },
      "Major Minerals": {
        "Iron": 2.5,
        "Potassium": 405,
        "Sodium": 100,
        "Zinc": 2.1
      },
      "Vitamins": {
        "Vitamin A - IU": 0,
        "Vitamin A - RAE": 0,
        "Vitamin B12": 0,
        "Vitamin B6": 0.5,
        "Vitamin C": 1,
        "Vitamin E": 5.5,
        "Vitamin K": 3.5
      }
    }
  },
  {
    "Category": "VEGETABLES",
    "Description": "Carrots",
    "StandardWeightPerItem": 100,
    "FoodType": "Snack",
    "Data": {
      "Carbohydrate": 10,
      "Fiber": 2.8,
      "Kilocalories": 41,
      "Protein": 0.9,
      "Fat": {
        "Polysaturated Fat": 0.1,
        "Saturated Fat": 0.1
      },
      "Major Minerals": {
        "Iron": 0.2,
        "Potassium": 320,
        "Sodium": 69,
        "Zinc": 0.2
      },
      "Vitamins": {
        "Vitamin A - IU": 16706,
        "Vitamin A - RAE": 835,
        "Vitamin B12": 0,
        "Vitamin B6": 0.1,
        "Vitamin C": 6,
        "Vitamin E": 0.7,
        "Vitamin K": 13.2
      }
    }
  },
  {
    "Category": "GRAINS",
    "Description": "Brown Rice",
    "StandardWeightPerItem": 100,
    "FoodType": "Lunch",
    "Data": {
      "Carbohydrate": 23,
      "Fiber": 1.6,
      "Kilocalories": 111,
      "Protein": 2.6,
      "Fat": {
        "Polysaturated Fat": 0.4,
        "Saturated Fat": 0.4
      },
      "Major Minerals": {
        "Iron": 0.8,
        "Potassium": 43,
        "Sodium": 1,
        "Zinc": 0.7
      },
      "Vitamins": {
        "Vitamin A - IU": 0,
        "Vitamin A - RAE": 0,
        "Vitamin B12": 0,
        "Vitamin B6": 0.2,
        "Vitamin C": 0,
        "Vitamin E": 0.2,
        "Vitamin K": 1.8
      }
    }
  },
  {
    "Category": "FRUITS",
    "Description": "Grapes",
    "StandardWeightPerItem": 100,
    "FoodType": "Snack",
    "Data": {
      "Carbohydrate": 18,
      "Fiber": 0.9,
      "Kilocalories": 69,
      "Protein": 0.6,
      "Fat": {
        "Polysaturated Fat": 0.1,
        "Saturated Fat": 0.1
      },
      "Major Minerals": {
        "Iron": 0.3,
        "Potassium": 191,
        "Sodium": 2,
        "Zinc": 0.1
      },
      "Vitamins": {
        "Vitamin A - IU": 66,
        "Vitamin A - RAE": 3,
        "Vitamin B12": 0,
        "Vitamin B6": 0.1,
        "Vitamin C": 2,
        "Vitamin E": 0.2,
        "Vitamin K": 14
      }
    }
  },
  {
    "Category": "DAIRY",
    "Description": "Cheese",
    "StandardWeightPerItem": 100,
    "FoodType": "Snack",
    "Data": {
      "Carbohydrate": 1.3,
      "Fiber": 0,
      "Kilocalories": 402,
      "Protein": 25,
      "Fat": {
        "Polysaturated Fat": 0.1,
        "Saturated Fat": 18.5
      },
      "Major Minerals": {
        "Iron": 0.2,
        "Potassium": 27,
        "Sodium": 621,
        "Zinc": 3.1
      },
      "Vitamins": {
        "Vitamin A - IU": 950,
        "Vitamin A - RAE": 262,
        "Vitamin B12": 1.3,
        "Vitamin B6": 0.1,
        "Vitamin C": 0,
        "Vitamin E": 0.2,
        "Vitamin K": 2.4
      }
    }
  },
  {
    "Category": "BEVERAGES",
    "Description": "Orange Juice",
    "StandardWeightPerItem": 100,
    "FoodType": "Beverage",
    "Data": {
      "Carbohydrate": 8.2,
      "Fiber": 0.2,
      "Kilocalories": 45,
      "Protein": 0.7,
      "Fat": {
        "Polysaturated Fat": 0,
        "Saturated Fat": 0
      },
      "Major Minerals": {
        "Iron": 0.2,
        "Potassium": 200,
        "Sodium": 1,
        "Zinc": 0.1
      },
      "Vitamins": {
        "Vitamin A - IU": 0,
        "Vitamin A - RAE": 0,
        "Vitamin B12": 0,
        "Vitamin B6": 0.1,
        "Vitamin C": 50,
        "Vitamin E": 0.2,
        "Vitamin K": 0
      }
    }
  },
  
    
    
  
]



  export default foodData;
  
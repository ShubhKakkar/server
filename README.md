# Grocery Inventory Management System

This is a simple grocery inventory management system with a backend (Node.js with Express) for managing grocery items and a frontend (HTML/CSS/JavaScript) for visualization.

## How to Run

### Prerequisites

- Node.js and npm installed on your machine.

### Process

1. Clone this repository to your local machine:

   ```
   git clone https://github.com/your-username/grocery-inventory.git
   ```

2. Navigate to the project directory
   
    a. cd grocery-inventory
    b. npm install
    c. Create a configs folder in root directory
    d. Add a .env.local and a .env.prod file in it.
    e. Add PORT and DB_URI values in both of them.

        npm run dev // To run dev enviroment
        npm run start // To run prod enviroment
    

## APIs included
    1. Add Grocery Item
        URL: /store/add-product
        Method: POST
        Request Body: {
                        "name": "Example Item",
                        "price": "Price of Product in Number",
                        "image": "Image URL of product",
                        "stock": "Quantity of product in kgs"
                       }
        Response: {
            "message": "Item added successfully",
            "item": {
                "name": "Example Item",
                "quantity": 10
            }
        }
     2. Retrieve All Items
        URL: /store/get-all-products?limit=10&page=1
        Method: GET
        Response:
        [
                    {
                        "_id": "658fe5594b816f744fae8c85",
                        "name": "Potatoes",
                        "price": "10",
                        "image": "https://images.unsplash.com/photo-1603048719539-9ecb4aa395e3?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        "stock": 1,
                        "createdAt": "2023-12-30T09:39:37.230Z",
                        "updatedAt": "2023-12-30T09:40:30.915Z",
                        "__v": 0
                    },
                ]


# How to Test Endpoints
    To add a grocery item, fill out the form and click "Add Item." Check the console for server responses.
    To retrieve all items in the inventory, the list will be displayed below the form.

# Demo
    Link to Demo Video (Replace with the actual link to your demo video)
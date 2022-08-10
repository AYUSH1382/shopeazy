# Shopezy

Shopezy is a an E-commerce site where people can buy products online.


## Features
The E-commerce platform provides a wide range of features to both the client and the owner.


 
## Setup
### Installation
1. Install the `node.js`.
2. Install `MongoDB compass` for database.

### Connecting to MongoDB
1. Create an account on MongoDB Atlas.
2. Enter the mongodb connection link in `db.js` file.

### Payment gateway setup
1. Create an account on `Stripe`, a payment gateway site.
2. Enter the stripe key in the `checkout.js` file.

### How to run the project

1. Download the repository.
2. Open the project in VS Code (any editor one is comfortable with).
3. Open the terminal and navigate to the project directory.
4. Type `npm install`. This will get all the dependencies that required for the project.
5. Open two separate terminals.
6. In one terminal navigate to the client folder. Type `npm start`. This will start the frontend of the project.
7. In the next terminal stay in the project directory and type `nodemon server`. This will start the backend of the project.


## Description

This project includes two fronts, a customer’s side, and a store admin side. The functionalities of the two 
fronts respectively are:
The consumers side - Users can look at the various products available and filter them as well 
according to their needs. There is also an option to choose the quantity of the items. On doing so, the 
price of the commodity updates automatically. The customers can the add the item to their cart and 
proceed for checkout. Here they are showed their selected items again and prompted to pay. They can 
also remove any item they wish to omit.
The admin’s side - An alert of a new order is displayed once the booking is done, and all its details 
will be generated. This order can be kept track of and updated according to the discretion of the 
shopkeeper

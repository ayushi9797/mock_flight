# BACKEND MOCK

# Air Ticket Booking

![plane](https://user-images.githubusercontent.com/112810259/234212763-4d288e3e-cdbe-4323-b9d0-26ce5490ce94.jpeg)

# Database

- MONGODB

![mongo](https://user-images.githubusercontent.com/112810259/234212464-2585f09c-10a5-43f3-9bba-d07e7a9305e0.jpeg)

# Requirements

- Folow the MVC structure

- ![mvc](https://user-images.githubusercontent.com/112810259/234213154-60763da8-b5fe-4cdd-8291-b93c3c65dcea.png)

# User Routes

![user](https://user-images.githubusercontent.com/112810259/234217728-2b8ef8f6-6714-466d-86c6-0ffa88e50e37.png)

- User get routes


  ` http://localhost:8080/users`

- User able to register for flight booking
- This endpoint should allow users to register.

` http://localhost:8080/api/register`

- User can able to login for flight booking
- This endpoint should allow users to login.

  `http://localhost:8080/api/login`

# Flight Routes

![plane1](https://user-images.githubusercontent.com/112810259/234218005-4e95db14-6176-4605-b3bf-aa52ec300350.jpeg)

- CRUD routes

![crud](https://user-images.githubusercontent.com/112810259/234218251-b1c318f0-ab7d-4a47-b5a0-30b66a009ae1.jpg)


- This endpoint should allow users to add new flights to the system.


`http://localhost:8080/api/flights `

- This endpoint should return a list of all available flights.

`http://localhost:8080/api/flights`

- This endpoint should return the details of a specific flight identified by its ID.

` http://localhost:8080//api/flights/:id`

- This endpoint should allow users to update the details of a specific flight identified by its ID.

`http://localhost:8080//api/flights/:id `

- This endpoint should allow users to delete a specific flight identified by its ID.

`http://localhost:8080//api/flights/:id`

# Booking Routes

![booking](https://user-images.githubusercontent.com/112810259/234218420-ebc5441c-b223-46f0-afb5-ff797b667a7e.jpeg)

- This endpoint should allow the user to book flights.


`http://localhost:8080/api/booking`

- This point should list all the bookings so far with the user and flight details.

`http://localhost:8080/api/dashboard`


# Authentication

![auth](https://user-images.githubusercontent.com/112810259/234218573-c750b690-9eee-473e-95ac-1d090cb4004b.jpeg)

- For visiting flight booking page users need to first register and login
- Authentication is required

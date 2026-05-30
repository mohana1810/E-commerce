# E-Commerce Website

A responsive E-Commerce website built using **HTML, CSS, and JavaScript**, containerized using **Docker** and served through **Nginx**.

## Features

* User Registration and Login
* Product Search Functionality
* Shopping Cart Management
* Order Placement and Order History
* User Profile and Address Management
* Responsive User Interface
* Dockerized Deployment

## Tech Stack

* HTML5
* CSS3
* JavaScript (ES6)
* Docker
* Nginx

## Project Structure

```text
E-Commerce/
├── css/
│   └── style.css
├── js/
│   ├── auth.js
│   └── script.js
├── index.html
├── login.html
├── signup.html
├── profile.html
├── cart.html
├── orders.html
├── Dockerfile
└── README.md
```

## Run Using Docker

Build the Docker image:

```bash
docker build -t e-commerce .
```

Run the container:

```bash
docker run -d -p 8080:80 --name ecommerce-container e-commerce
```

Open the application:

```text
http://localhost:8080
```

## Docker Workflow

```text
Source Code
     ↓
Docker Build
     ↓
Docker Image
     ↓
Docker Container
     ↓
Nginx Web Server
     ↓
E-Commerce Website
```

## Future Improvements

* Jenkins CI/CD Pipeline
* Docker Hub Integration
* Backend API Integration
* Database Support
* Payment Gateway Integration

## Author

Mohana Jarajapu

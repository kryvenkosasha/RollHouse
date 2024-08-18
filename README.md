# Camper Rental App
## Project Overview
The Camper Rental App is a React-based web application that allows users to browse, filter, and book campers. The app provides detailed information about each camper, including its features, reviews, and availability. Users can also add campers to their favorites for later viewing.

## Features
### Browse Campers:
  View a list of available campers with basic information like price, location, and rating.
Filter Campers: Filter campers by equipment (e.g., kitchen, bathroom) and body type (e.g., van).
Add to Favorites: Save your favorite campers for later. Favorites are stored locally using localStorage.
View Details: Click on a camper to see more details in a modal, including features, reviews, and a photo gallery.
### Booking Form:
 Users can book a camper by filling out a form. The form includes validation to ensure correct input (e.g., booking date cannot be in the past).
### Responsive Design:
 The app is fully responsive and works well on both desktop and mobile devices.
## Technologies Used
### React:
 The front-end framework used to build the app.
### Redux Toolkit: 
For state management, including handling camper data, filters, and favorites.
### Formik & Yup:
 Used for form state management and validation in the booking form.
### Axios: 
For making HTTP requests to the mock API (using mockapi.io).
### React-Icons: 
For adding icons to the UI, such as the heart icon for favorites and stars for ratings.
### React-Slick:
 For implementing the image carousel in the camper detail modal.
### clsx: 
For conditionally applying CSS classes based on component state.
### CSS Modules: 
For creating isolated and modular styles for components.

## Installation
To run this project locally, follow these steps:

### Clone the repository:


git clone https://github.com/your-username/camper-rental-app.git
cd camper-rental-app

### Install dependencies:


npm install
npm start
The app will be available at http://localhost:3000.

## How to Use
### Browse Campers:
 On the home page, you can see a list of available campers. Scroll down and click "Load More" to see more campers.

### Filter Campers: 
Use the checkboxes to filter campers by equipment and body type. Click "Search" to apply the filters.

### Add to Favorites: 
Click on the heart icon on a camper to add it to your favorites. You can view your favorites later by clicking the "Favorites" button.

### View Details:
 Click on a camper card to open a modal with detailed information. Review the features, reviews, and camper gallery, or proceed to book the camper.

### Book a Camper:
 In the camper detail modal, fill out the booking form with your name, email, and booking date, then submit it to reserve the camper.

## API
The project uses a mock API hosted on mockapi.io to simulate fetching camper data. The data includes camper details, reviews, and other related information.


## Future Improvements
### User Authentication:
 Allow users to create accounts and save their favorite campers across sessions.
### Advanced Filtering:
 Add more filtering options such as price range and location radius.
### Enhanced Booking System:
 Integrate with a real booking API to allow users to view and manage their bookings.
### Page Optimization: 
Improve the loading and rendering of pages to ensure a faster and smoother user experience.
Better Styling: Enhance the design and styling of components to improve the visual user experience.
# Manglayatan University Website

Welcome to the Manglayatan University website project! This project is built with React and Vite, featuring a dynamic, responsive design for showcasing college information, events, and more.

## Features

- **Home Page**: Includes a welcome message with an image background, a carousel showcasing college highlights, and a section for posters.
- **Footer**: Contains contact information, developer details, and a responsive background color change based on scroll position.
- **Responsive Design**: The website is designed to be mobile-friendly and adaptive to various screen sizes.

## Project Structure

- `src/`
  - `components/`
    - `Carousel.jsx`: Component for the image carousel.
    - `Footer.jsx`: Component for the footer, including dynamic background color change on scroll.
    - `Posters.jsx`: Component for displaying posters.
  - `pages/`
    - `Home.jsx`: Main page component integrating `Carousel`, `Posters`, and other sections.
  - `App.jsx`: Main application component that sets up routing and renders the page components.
  - `index.jsx`: Entry point of the application.
  - `styles/`
    - `Footer.css`: CSS file for styling the `Footer` component.
    - `App.css`: Global CSS file for the application.

## Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/ekantverma/mu-conf-web.git
   cd mu-conf-web

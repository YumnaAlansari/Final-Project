# Art House management System 
<a name="readme-top"></a>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
          <li><a href="#Features">Features</a></li>
          <li><a href="#Code-Structure">Code Structure</a></li>
          <li><a href="#How-the-Application-Works">How the Application Works</a></li>
         </ul>
    </li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project


Welcome to the ArtHouse website, it is a complete website consisting of fronts and backgrounds. ArtHouse is a booking management system designed to help manage and capture data based on specific requirements.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

## Features

The ArtHouse website's provides the following features:
- Get requeste: You can get all the information you want in any services.
- Post requeste: You can add a field by entering all the information related to it.
- Put requeste: You can update any field in the services by entering all the information related to it based on the ID number.
- Delete requeste: You can delete any field based on the ID number.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Code_Structure

## Components
In ArtHouse application's, twaalf main services play a crucial role.

### Navigation component
Navigation component contain navogation bar.

### Social component
Social component contain social bar.

### Header component
Header component represent the home.

### Intro component
Intro component provide description about the site the home.

### Content component
Content component display the main services

### Cinema component
Cinema component contain the requests.

### Theatre component
Theatre component contain the requests.

### Music component
Music component contain the requests.

### Clients component
Clients component contain the customer feedback.

### Testimonials component
Testimonials component contain the Testimonials compaines.

### Not-found component
Not-found component apper when user go to wrong page.

## Services

### Content Services 
Have the http methods and thier API_URL:


## App routing 
App routing contain the requiered component and thier path 

<p align="right">(<a href="#readme-top">back to top</a>)</p>



# How the Application Works
After linking the program to the database and the server, the user can interact with the server to create specific requests such as get, put, patch, post or delete based on specific criteria, where the required data is fetched from the database directly.


### The code is organized into four main classes:
- The ArtHouse, Cinema, Music, and Theatre classes represent the core entities in the ArtHouse application's system. They contain attributes and methods to manage the system.
- The Repository: Which contains the basic functions that search for data in the database.
- The Controlller: Which manages matters between databases and the server, as it contains requests, endpoints, and calls to the functions that implement them.
- The Service: It is directly related to the controller, as it contains the logic and conditions that are performed when the function is called within the controller.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## UML

<img width="782" alt="ArtHouse Diagram" src="https://github.com/YumnaAlansari/ArtHouse/assets/120118771/8b925e28-6d75-4d2d-bb38-f62c78a25c62">

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## SQL script
USE ArtHouse;



INSERT INTO art_house  (id, name, duration) VALUES
    (1, 'The Shawshank Redemption', 120.5),
    (2, 'The Godfather', 90.75),
    (3, 'The Dark Knight', 180.25),
    (4, '12 Angry Men', 150.0),
    (5, 'Schindler List', 100.0),    
    (6, 'Euphoric Dreams', 4.30),
    (7, 'MOONLIGHT SERENADE BY GLENN MILLER', 3.50),
    (8, 'Whispering Meadows', 5.20),
    (9, 'Rhythm of the Stars', 4.15),
    (10, 'Soulful Reflections',4.40),
    (11, 'Hamlet', 180), 
    (12, 'A Midsummer Nights Dream', 120),
    (13, 'Romeo and Juliet', 150),
    (14, 'The Importance of Being Earnest', 90),
    (15, 'Macbeth', 160);

   
   INSERT INTO cinema  (id, director, number_of_actors , release_year, category) VALUES
    (1, 'Frank Darabont', 10, 1994, 'Drama'),
    (2, 'Francis Ford Coppola', 8, 1972, 'Crime'),
    (3, 'Christopher Nolan', 6, 2008, 'Action'),
    (4, 'Sidney Lumet', 12, 1975, 'Drama'),
    (5, 'Steven Spielberg', 5, 1993, 'Drama');
      
   INSERT INTO music  (id, genre, artist, release_year) VALUES
    (6, 'Electronic', 'DJ Harmony', 2022),
    (7, 'Pop', ' GLENN MILLER', 2019),
    (8, 'Ambient', 'Serene Harmony', 2021),
    (9, 'Pop', 'Stellar Beats', 2020),
    (10, 'R&B', 'Stellar Beats', 2018);

   INSERT INTO theatre  (id, play_wright , number_of_actors , category) VALUES
   (11, 'William Shakespeare', 10, 'Tragedy'),
   (12, 'William Shakespeare', 8, 'Comedy'),
   (13, 'William Shakespeare', 12, 'Tragedy'),
   (14, 'Oscar Wilde', 6, 'Comedy'),
   (15, 'William Shakespeare', 10, 'Tragedy');

<p align="right">(<a href="#readme-top">back to top</a>)</p>

# Art House application's System 
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
          <li><a href="#UML">UML</a></li>
          <li><a href="#Features">Features</a></li>
          <li><a href="#Code-Structure">Code Structure</a></li>
          <li><a href="#How-the-Application-Works">How the Application Works</a></li>
         </ul>
    </li>
 <li><a href="#usage">SQL script</a></li>
 
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project


Welcome to the ArtHouse application's Data and controller Layer, where I model complex relationships.Where cinema, music and theater all inherit from ArtHouse. Also I manage requests on the server. ArtHouse is an application for managing reservations designed to help manage and acquire data based in specific requirements. In this application, you'll explore how to model complex relationships in a data-driven environment, handle various requests actions, and interact with a MySQL database.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

## Features

The ArtHouse application's provides the following features:
- Get requeste: You can get all the information you want in any class in several ways.
- Post requeste: You can add a field by entering all the information related to it in any class.
- Put requeste: You can update any field in the Cinema or Music classes by entering all the information related to it based on the ID number.
- Patch requeste: You can modify the category property in the Theater class based on the ID number.
- Delete requeste: You can delete any field in any class based on the ID number.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Code_Structure

## Model
In ArtHouse application's, four main classes play a crucial role: ArtHouse, Cinema, Music, and Theater.

### ArtHouse Class
The ArtHouse class represents a super class in my application. It has the following attributes:

- id:A unique identifier 
- name: name of the child
- duration: Duration of the child
### Cinema Class
The Cinema class represents a child class. It includes:

- id: An auto-incremented unique identifier
- director: Name of the director
- numberOfActors: Cinema's number of actors 
- releaseYear: Cinema's releaseYear
- category: category Cinema's

### Music Class
The Music class represents a child class. It includes:

- id: An auto-incremented unique identifier
- genre: Music's genre
- artist: Music's artist
- releaseYear: Music's release year

### Theater Class
The Theater class represents a child class. It includes:

- id: An auto-incremented unique identifier
- playWright: Theater's play wright
- numberOfActors:  Theater's number of actors
- category:  Theater's category

## Repository

### Cinema Repository
Have three methods:
- findCinemaByDirector 
- findCinemaByReleaseYear
- findCinemaByCategory

### Music Repository
Have three methods:
- findMusicByGenre 
- findMusicByArtist 
- findMusicByReleaseYear

### Theatre Repository
Have three methods:
- findTheatreByPlayWright 
- findTheatreByNumberOfActors 
- findTheatreByCategory


## Controller 
There are two basic packages under the controller, the first for implementation and the second for interfaces:

### Interfaces 
THere are three interfaces (Cinema, Music and Theatre) displays the signature of all the methods used in the controller.

### Cinema Controller
I have five get requests under the cinema category:
- The first displays all the data in the database
- The second displays the data in the database based on the ID number
- The third displays the data in the database based on the name of the director
- The fourth displays the data in the database based on the year of release
- The fifth displays the data in the database based on the category

I also have:
- Post Request to add
- Put Request for modification based on the ID number
- Delete Request for deletion based on the ID number


### Music Controller
I have five get requests under the cinema category:
- The first displays all the data in the database
- The second displays the data in the database based on the ID number
- The third displays the data in the database based on the genre
- The fourth displays the data in the database based on the artist 
- The fifth displays the data in the database based on the year of release

I also have:
- Post Request to add
- Put Request for modification based on the ID number
- Delete Request for deletion based on the ID number


### Theatre Controller
I have five get requests under the cinema category:
- The first displays all the data in the database
- The second displays the data in the database based on the ID number
- The third displays the data in the database based on the play wright
- The fourth displays the data in the database based on the number of actors 
- The fifth displays the data in the database based on the category

I also have:
- Post Request to add
- Patch Request for modification the category based on the ID number
- Delete Request for deletion based on the ID number

### Theatre DTO 
To deal with patch category request

## Service
There are two basic packages under the Service, the first for implementation and the second for interfaces:

### CinemaService
Have 8 eight methods:
- getAllCinema
- getCinemaById
- getCinemaByDirector
- getCinemaByReleaseYear
- getCinemaByCategory
- addCinema
- updateMusicById


### MusicService
Have 8 eight methods:
- getAllMusic
- getMusicById
- getMusicByGenre
- getMusicByArtist
- getMusicByReleaseYear
- updateMusicById
- addMusic
- deleteById

### TheatreService
Have 8 eight methods:
- getAllTheatre
- getTheatreById
- getTheatreByPlayWright
- getTheatreByNumberOfActors
- getTheatreByCategory
- changeTheatreCategory
- addTheatre
- deleteTheatreById


## Interfaces 
THere are three interfaces (Cinema, Music and Theatre) displays the signature of all the methods used in the services.

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

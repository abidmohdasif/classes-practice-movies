// Define the Movie class
let index = document.getElementById("movie-info")
class Movie {
  #title;
  #cast;
  #description;
  #rating;
  constructor(title, cast, description, rating){
  this.#title = title
  this.#cast = cast
  this.#description = description
  this.#rating = rating
}
updateRating(newRating) {
  this.#rating = newRating;
  this.displayInfo();
}

displayInfo(){
  index.innerHTML = `Title: ${this.#title} <br> Cast: ${this.#cast} <br> Description: ${this.#description} <br> Rating: ${this.#rating}`
}

}
function updateMovieRating(movie, newRating) {
  movie.updateRating(newRating);
  movie.displayInfo();
}
// Create a class called Movie with private properties

// title, cast, description, rating

  // Method to update the rating of the movie

  // Method to display the movie's information


// Test your implementation


// Display the initial information of the movie
let movie1 = new Movie("Cars 3","Owen Wilson","follows Lightning McQueen as he struggles to keep up with a new generation of faster, technologically advanced racers", 9.8)
movie1.displayInfo()
// Update the rating of the movie
// Display the updated information of the movie
updateMovieRating(movie1, 10)
movie1.displayInfo()
k




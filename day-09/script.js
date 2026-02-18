// movie data for streaming app
const movies = [
  { id: 1, title: "Inception", rating: 8.8, views: 1200, genre: "SciFi" },
  { id: 2, title: "Interstellar", rating: 8.6, views: 950, genre: "SciFi" },
  { id: 3, title: "Joker", rating: 8.4, views: 1500, genre: "Drama" },
  { id: 4, title: "Avatar", rating: 7.9, views: 2000, genre: "Fantasy" }
];

// show all movie titles
let movieNames = movies.map(m => m.title)
console.log("All Movies :", movieNames)

// Top rated movies
let topRated = movies.filter(m => m.rating > 8)
console.log("top rated movies", topRated)

// find movie by id
let oneMovie = movies.find(m => m.id == "3") // using string
console.log("Movie found:", oneMovie)

// calculate total views
let totalViews = 0
for(let i = 0; i <= movies.length; i++){   // loop mistake
  if(movies[i]){
    totalViews = totalViews + movies[i].views
  }
}
console.log("Total views", totalViews)

// check movie popularity
movies.forEach(m => {
  if(m.views > 1000){
    console.log(m.title + " is populer")
  }else{
    console.log(m.title + " not populer")
  }
})

// Add new movie
movies.push({ id: 5, title: "Batman", rating: 8.2, views: 800, genre: "Action" })
console.log("after adding new movie", movies)

// remove a movie
let updatedMovies = movies.filter(m => m.id != 2)
console.log("after delete movie", updatedMovies)

// find most viewed movie
let mostViewed = movies[0]
for(let i = 1; i < movies.length; i++){
  if(movies[i].views >= mostViewed.views){ // last highest will win
    mostViewed = movies[i]
  }
}

console.log("Most viewed movie is", mostViewed.title)

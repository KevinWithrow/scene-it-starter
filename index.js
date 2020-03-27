
$(document).ready(function renderMovies () {
    // console.log("hey")
    //console.log(movieData.length)

    // $.getJSON('data.js').done(function(movieArray){
    //     console.log("output of movieArray:", movieArray)
    //     $('#card').html(
    //     movieArray.map(currentMovie).join(''))
    // })
    $(document).getElementById('#myForm').addEventListener('click', function(evt){
        evt.preventDefault();

         const moviesHTML = movieData.map(buildMovieHTML).join('')
        console.log(moviesHTML)

        $('#moviesContainer').html(moviesHTML)
    })
   
})

const movieHTML = $("#card").val()

function buildMovieHTML (currentMovie) {
    return `
    <div class="card">
        <img src="${currentMovie.Poster}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title" ">${currentMovie.Title};</h5>
        <p class="card-text">Movie release date: ${currentMovie.Year}"</p>
        <button type="button">Add</button>
        </div>
    </div>
      `
}

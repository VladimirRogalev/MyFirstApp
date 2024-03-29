
let numberOfFilms;
function start () {
    numberOfFilms = +prompt('How many films do you watch now?', '');
    
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many films do you watch now?', '');
    }
}

start ();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};





function rememberMyFilms () {
    for( let i = 0; i < 2; i++) {
        const a = prompt('One of the last movies you watched?', ''),
        b = prompt('How much would you rate it?','');
    
        if (a != null && b != null && a !='' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error')
            i--;
        }
        
    }
}
rememberMyFilms();

function detectPersonaLevel () {
    if(personalMovieDB.count < 10) {
        console.log("Watched quite a few films")
    } else if (personalMovieDB.count >= 10 || personalMovieDB.count < 30) {
    console.log('You are a classic viewer!');
    } else if ( personalMovieDB >= 30) {
        console.log('You are a movie buff!');
    } else {
        console.log('An error has occurred');
    }
}
detectPersonaLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    } 
}

showMyDB(personalMovieDB.privat);

function writeYourGenres () {
for (let i = 1; i <=3; i++) {
personalMovieDB.genres[i-1] = prompt (`Your favorite genre numbered ${i}`);;
}
}
writeYourGenres ();


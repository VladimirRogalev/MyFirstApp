


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start :function () {
        personalMovieDB.count = +prompt('How many films do you watch now?', '');
        
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many films do you watch now?', '');
        }
    },
    rememberMyFilms: function () {
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
    },
    detectPersonaLevel: function () {
        if(personalMovieDB.count < 10) {
            console.log("Watched quite a few films")
        } else if (personalMovieDB.count >= 10 || personalMovieDB.count < 30) {
        console.log('You are a classic viewer!');
        } else if ( personalMovieDB >= 30) {
            console.log('You are a movie buff!');
        } else {
            console.log('An error has occurred');
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        } 
    },
     toggleVisibleNyDB: function () {
if (personalMovieDB.privat) {
    personalMovieDB.privat = false;
} else {
    personalMovieDB.privat = true;
}
     },
    writeYourGenres: function () {
        for (let i = 1; i<2; i++) {
        // let genre = prompt (`Your favorite genre numbered ${i}`);
        // if (genre === '' || genre == null) {
        //     console.log('You entered incorrect data or did not enter it at all');
        //     i--;
        // } else {
        //     personalMovieDB.genres[i-1] = genre;
        // }
        let genres = prompt (`Insert your favorite genre `).toLowerCase();
        if (genres  === '' || genres == null) {
            console.log('You entered incorrect data or did not enter it at all');
            i--;
        }else {
            personalMovieDB.genres = genres.split(',');
            personalMovieDB.genres.sort();
        } 
    } 
        personalMovieDB.genres.forEach((item, i) => {
console.log(`Favorite genre ${i+1} - is ${item}`);
        });
    }
};










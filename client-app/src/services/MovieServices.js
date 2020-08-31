const movies=[]

export function getMovies(){
    return movies;
}

export function getMovie(id){
    return movies.find(m => m.id === id);
}

export function createMovie(movie){

}

export function editMovie(id){

}

export function deleteMovie(id){

}
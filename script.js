const btn=document.getElementById("serach-btn")
const movies_results=document.getElementById("movie-results")
function displayMovies(){
//     let spinner= document.getElementsByClassName("custom-spinning");
//    spinner.style.display="block";
    const apiKey=document.getElementById("apiKey").value;
    const movieTitle=document.getElementById("movieTitle").value;
    console.log(apiKey,movieTitle)
    if(apiKey=="" || movieTitle==""){
        showError("Both fieds are Required")
        console.log("Both fieds are Required")
        return;
    }
    let url=`https://www.omdbapi.com/?s=${movieTitle}&apikey=${apiKey}`;
    document.getElementById("custom-spinning").style.display="block";

    async function movieDetails(){
        try{

        let response=await fetch(url,{method:"GET"});
        let result=await response.json();
        addDataOnUI(result.Search)
        document.getElementById("custom-spinning").style.display="none";


        }
        catch(e){
            showError(e)
        }
        


    }
    movieDetails();
}

//     fetch(url)
//     .then(response=>response.json())
//     .then(data=>
//         // console.log(data)
//         addDataOnUI(data.Search);
//         document.getElementById("custom-spinning").style.display="none";

    

         
//         )

// }
function addDataOnUI(data){
    console.log(data[0])
    
    data.forEach((Element,index) => {
        document.getElementById("serach-btn").style.display="none";
        console.log("index")
        const imdb=document.createElement("div")
        imdb.className="imdb";
        imdb.innerHTML=`
        <div class="poster">
        <img src="${Element.Poster}" alt="wednesday">
        </div>
          
            <div class="index-title">
                        
            <p id="index">${index+1}<p>
            
            </div>

        <div class="year-imdbid">
        <p>${Element.Title}<p>
        <p> ${Element.Year}<p>
        <p>${Element.imdbID}</p>
         
        </div>
        <div class="type">
            <p>${Element.Type}</p>
            
        </div>
    `;
    movies_results.appendChild(imdb);
        
    });
    



}

function showError(message){
  document.getElementById("error-handling").innerText=message;
    
  
}
// Poster
// : 
// "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
// Title
// : 
// "The Avengers"
// Type
// : 
// "movie"
// Year
// : 
// "2012"
// imdbID
// : 
// "tt0848228"

btn.addEventListener("click",displayMovies)

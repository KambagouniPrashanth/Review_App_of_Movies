let endpoint=`http://www.omdbapi.com/?i=tt3896198&apikey=d6f8fa89`
let container=document.getElementById("container")

async function imdbDetails(){
    try{
        let response=await fetch(endpoint,{method:"GET"})
        let result=await response.json();
        console.log(result)
        for(let i=0;i<20;i++){
            addDataOnUI(result)
        }
        
        // console.log(result.Title)
        // console.log(result.Year)
        // console.log(result.Rated)
        // console.log(result.Released)
        // console.log(result.Ratings)
        
    }
    catch(e){
        console.log(e)
    }
   
}
imdbDetails()

function addDataOnUI(data){
    let imdb_container=document.createElement("div")
    imdb_container.className="imdb";
    imdb_container.id="imdb"
    
        imdb_container.innerHTML=`
        <div class="poster">
        <img src="${data.Poster}" alt="wednesday">
    </div>
    <div class="title">
        ${data.Title}
    </div>
    <div class="year">
    ${data.Released}
    </div>

    <div class="rating">

    <span>${data.Ratings[0].Value}</span>
    <span>${data.Ratings[0].Source}</span><br>
    <span>${data.Ratings[1].Value}</span>
    <span>${data.Ratings[1].Source}</span><br>
    <span>${data.Ratings[2].Value}</span>
    <span>${data.Ratings[2].Source}</span><br>
    
    
    </div>
    <div class="type">
    ${data.Type}
    
    </div>`
    container.appendChild(imdb_container)


    
  

}




const returnbutton=document.createElement("button")
const search = document.getElementById("searchbox");
const searchbtn = document.getElementById("search");
const area=document.querySelector(".area1")
const searchdiv=document.querySelector(".search1")
searchbtn.addEventListener("click",()=>{
    const value = search.value.trim(); // Trim whitespace
    console.log("Search value:", value);
      if (!value) {
    alert("Please enter a movie title.");
    return;
  }
  cleararea()
  fetch(`https://script.google.com/macros/s/AKfycbyJvOOUOfe-lx-zULThZbyCciUdfkoKVB4Ntz-8WLI3r2h8Z964fzAxshwjcJLZPGXRpA/exec?title=${value}`)
  .then(response=>{return response.json()})
  .then(result=>{
    const data=result.data
     if (!data || data.length === 0) {
        const msg = document.createElement("h1");
        msg.innerText = `No results found for "${value}". Please try a different title.`;
        msg.style.margin = "20px";
        msg.style.marginLeft="50px"
        msg.style.color = "white";
        msg.style.fontFamily = "Oswald";
        area.appendChild(msg);
        return;
      }
    data.forEach(item => {
      searchmovie(item)  
    });
  })
  .catch(error => {
  console.error("Fetch error:", error);

  
});
})
const cleararea=()=>{
    area.innerHTML=""
}
const searchmovie = (data) => {
   const searchdiv = document.querySelector(".search1");
   console.log('hello');
   
if (!searchdiv) {
    console.error("searchdiv not found in the DOM");
    
    return;
}
    

    searchdiv.style.marginLeft = "290px";

    const moviecard = document.createElement("div");
    moviecard.className = "searchcard";

    const img = document.createElement('img');
    const title = document.createElement('h1');
    const genre = document.createElement('p');
    const director = document.createElement('p');
    const star = document.createElement('p');
    const plot = document.createElement('p');
    const status = document.createElement('button');
    const textarea = document.createElement("div");

    textarea.className = "textarea";
    img.className = "searchimg";
    title.className = "moviename";
    genre.className = "des4";
    director.className = "des5";
    star.className = "des6";
    plot.className = "plot1";
    status.className = "status";

    title.innerText =data.Title;
    genre.innerText = `Genre:${data.Genre}`;
    director.innerText = data.Director;
    star.innerText = data.Starring;
    plot.innerText = data.plot; // You can update this to use a real value
    status.innerText = "Book";
    img.src = data.Image;

    textarea.appendChild(title);
    textarea.appendChild(genre);
    textarea.appendChild(director);
    textarea.appendChild(star);
    textarea.appendChild(plot);
    

    moviecard.appendChild(img);
    moviecard.appendChild(textarea);

    area.appendChild(moviecard);
    document.body.appendChild(area);
}




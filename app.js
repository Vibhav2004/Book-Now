const url="https://script.google.com/macros/s/AKfycbzKGCTCOoXx-Lr7tEii1IW568Mt8FiY1UXIPMMgbWNWRzmdOE0VxUs-6J-DwBq14of8Nw/exec"
const area= document.querySelector(".area")
const button=document.createElement("button")
const i=document.createElement("i")
  const selectedmovie = document.querySelector("#selectemovie");
    const heading = document.querySelector("#heading");
    const des1 = document.querySelector("#des1");
    const des2 = document.querySelector("#des2");
    const des3 = document.querySelector("#des3");
    let booknow = document.querySelector("#bookticket");
     let booknowval;
    
const cleardata=()=>{
    area.innerHTML="";
}
 const fetchdata=()=>{
    cleardata()
     fetch(url)
.then(response =>{ 
   
  return  response.json()
})
.then(reult => {
    const data = reult.data;

data.forEach(element => {
      displaydata(element,area)
     
});
        
})

  .catch(error => {
    console.error('Error:', error);
  });

 }
const categorywisefetch=(value)=>{
    cleardata()
    fetch(`https://script.google.com/macros/s/AKfycbyOgOlefLJDUS9LwzbhT9ftRV_a4T9Yze4MtqoEJpB-tCFjjGoh24ze9SmJcpFa3WWvKw/exec?category=${value}`)
    .then(respons=>{
        console.log(respons);
        
        return respons.json()
    })
    .then(result=>{
        const data=result.data
        data.forEach(datas=>{
            displaydata(datas)
            
            
        })
        
    })
    
   }
  

  
const displaydata=(element )=>{
    const moviecard=document.createElement("div")
   moviecard.className='card'
   moviecard.value=element.category
   console.log(moviecard.value);
   area.appendChild(moviecard)
   const img=document.createElement("img")
   img.className='img'
   img.src=element.Image
   moviecard.appendChild(img)
   const textbox=document.createElement("div")
   textbox.className='block'
   const heading=document.createElement("h3")
   heading.className='heading'
   heading.innerText=element.Title
   textbox.appendChild(heading)
   moviecard.appendChild(textbox)
   const para1=document.createElement("p")
   para1.className='description1' 
   para1.innerText=element.Genre
   textbox.appendChild(para1)
   const para2=document.createElement("p")
   para2.className='description2'
   para2.innerText=element.Director
   textbox.appendChild(para2)
   const para3=document.createElement("p")
   para3.className='description3'
   para3.innerText=element.Starring
   textbox.appendChild(para3)
   const button=document.createElement("button")
   button.className='view'
   button.innerText="view"
   button.value=element.Title
   let buttonval=button.value
   textbox.appendChild(button) 
    button.addEventListener("click",(moviecard)=>{
    console.log(button.value );
   fetchmovie(buttonval)
   
    
   })
   console.log(button.value);
   
}
const fetchmovie = (value) => {
  fetch(`https://script.google.com/macros/s/AKfycbwFbiIFmncWsOK2XItjJ2eU-WIQqFWji_qHPOi1zNLhq1E4gTVVc__SomGbKOJSpzwcPQ/exec?title=${(value)}`)
    .then(res => res.json())
    .then(result => {
      const data = result.data;
      console.log(data[0].Genre);
      selectedmovie.src=data[0].Image
      heading.innerText=data[0].Title
      des1.innerText=data[0].Genre
      des2.innerText=data[0].Director
      des3.innerText=data[0].Starring
      booknow.value=data[0].Title
booknowval =booknow.value
localStorage.setItem("selectedMovie", booknowval);
      booknow.addEventListener("click",()=>{
      console.log("hello world");
      //const alink=document.querySelector("#bookinghref")
      //alink.setAttribute("href", "booking.html");

     console.log("the booking value is ",booknowval);
     
        
      })
       moviebox(value)
     
    })
    .catch(err => {
      console.error("Fetch failed:", err);
    });
};







const moviebox = (buttonval) => {
    console.log(buttonval);
    
    
    const selected =  document.querySelector(".moviebox");
    
     // Clear previous content
    selected.style.visibility = "visible";
    

    document.body.classList.add("no-hover");
    document.body.style.overflow = "hidden";

  

    // Show elements
    des1.style.visibility = "visible";
    des2.style.visibility = "visible";
    des3.style.visibility = "visible";
    booknow.style.visibility = "visible";
    heading.style.visibility = "visible";
    selectedmovie.style.visibility = "visible";

    // Create a new cross button every time
    const crossBtn = document.createElement("i");
    crossBtn.className = "fa-solid fa-xmark";// Add Font Awesome classes
    crossBtn.classList.add("cross") 
    crossBtn.style.visibility="visible"
   

    crossBtn.style.fontSize = "24px";
    selected.appendChild(crossBtn);

    // Close button event
    crossBtn.addEventListener("click", () => {
        des1.style.visibility = "hidden";
        des2.style.visibility = "hidden";
        des3.style.visibility = "hidden";

        booknow.style.visibility = "hidden";
        heading.style.visibility = "hidden";
        selectedmovie.style.visibility = "hidden";
         crossBtn.style.visibility="hidden"
        selected.style.visibility = "hidden";
        
        document.body.classList.remove("no-hover");
        document.body.style.overflow = "auto";
    });
};

const returnbutton=document.createElement("button")
const search = document.getElementById("searchbox");
const searchbtn = document.getElementById("search");

searchbtn.addEventListener("click", () => {
  const value = search.value.trim(); // Trim whitespace
  console.log("Search value:", value);

  if (!value) {
    alert("Please enter a movie title.");
    return;
  }

  cleardata();

  fetch(`https://script.google.com/macros/s/AKfycbwFbiIFmncWsOK2XItjJ2eU-WIQqFWji_qHPOi1zNLhq1E4gTVVc__SomGbKOJSpzwcPQ/exec?title=${value}`)
    .then(response => response.json())
    .then(result => {
      const data = result.data;

     if (!Array.isArray(data) || data.length === 0) {
  const msg = document.createElement("h1");
  msg.innerText = `No result was found related to ${value}`;
  msg.style.margin = "20px";
  msg.style.color = "white";
  msg.style.fontFamily = "Oswald";

  returnbutton.className = "fa-solid fa-rotate-left";
  returnbutton.style.margin = "20px";
  returnbutton.style.width = "30px";
  returnbutton.style.backgroundColor = "#212121";
  returnbutton.style.border = "none";
  returnbutton.style.color = "white";

  returnbutton.addEventListener("click", () => {
    fetchdata();
  });

  area.appendChild(returnbutton);
  area.appendChild(msg);

  return ; // ⬅️ This is important
}


      console.log("First result title:", data[0].Title); // Optional

      data.forEach(item => {
        displaydata(item);
      });
    })
    .catch(err => {
      console.error("Error fetching movie data:", err);
    });
});













const button1=document.querySelectorAll("button")
  console.log(button);
  button1.forEach(but=>{
    but.addEventListener("click",()=>{
         if (but.value=="English") {
            let buttonvalue=but.value
            console.log("english movies");
           
           
            
            categorywisefetch(buttonvalue)
            
         }
         else if(but.value=="All"){
              fetchdata()
         }
         else if (but.value=="Hindi") {
             let buttonvalue=but.value
            console.log("Hindi movies");
            
            
            categorywisefetch(buttonvalue)
         }
         else if (but.value=="Anime") {
             let buttonvalue=but.value
            console.log("Anime movies");
            
            categorywisefetch(buttonvalue)
         }
    })
  })


   fetchdata()
   
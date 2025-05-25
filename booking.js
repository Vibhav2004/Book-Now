
const movieimg=document.querySelector("#bookingmovie")
const movieName = document.getElementById("moviename");
const genre = document.querySelector(".des7");
const director = document.querySelector(".des8");
const starring = document.querySelector(".des9");
const plot = document.querySelector(".plot2");
const firstname=document.querySelector("#firstname")
const lastname=document.querySelector("#lastname")
const pno=document.querySelector("#phonenumber")
const email=document.querySelector("#email")
console.log("input value",firstname.value);


const seatcard=document.querySelector(".seats")
const screen=document.createElement('div')

const closes=document.querySelector("#crosses")
let seatarray=[];
const detailsave=document.querySelector("#detailsave")
detailsave.addEventListener("click",(e)=>{
    e.preventDefault()
    console.log(firstname.value);
    console.log(lastname.value);
    console.log(pno.value);
    console.log(email.value);
    console.log(seatarray.map(seat => seat.value));
    console.log(selectedMovie);
localStorage.setItem("firstname", firstname.value);
localStorage.setItem("lastname", lastname.value);
localStorage.setItem("pno", pno.value);
localStorage.setItem("email", email.value);
localStorage.setItem("selectedSeats", JSON.stringify(seatarray.map(seat => seat.value))); // save as JSON string
localStorage.setItem("selectedMovie", selectedMovie);
     if(firstname.value==""&& lastname.value==""&&pno.value==""&&email.value==""){
        alert("Enter the detais")
     }
     else{
alert("Details has been saved")
     }
    
    
})


const reloadbut=document.createElement("div")
reloadbut.style.color="white"
reloadbut.style.width="40px"
reloadbut.style.height="40px"
reloadbut.style.marginTop="10px"
reloadbut.style.marginLeft="10px"
reloadbut.className="fa-solid fa-repeat"
reloadbut.addEventListener("click",()=>{

    location.reload()
})





    for (let i = 0; i < 77; i++) {
    const seat=document.createElement('div')
     seat.className="seat"
     seat.textContent=i+1
     seat.value=i+1
    
        const randomseat = Math.floor(Math.random()*1.7)
        
        if(randomseat){
            seat.style.backgroundColor="red"
            seat.name="taken"
           
        }else if(seat.value==1||seat.value==2||seat.value==3||seat.value==4||seat.value==5||seat.value==6||seat.value==7||seat.value==8||seat.value==9||seat.value==10||seat.value==11||seat.value==12){
            seat.style.backgroundColor="#e8db7d"
            
        }
        
    
     seatcard.appendChild(seat)
     seat.addEventListener("click",()=>{
        console.log(seat.value);
        
        
        if(seat.name!="taken"){
            seat.style.backgroundColor="#02ff35"
            seat.name="selected"
            seatarray.push({value:seat.value,name:seat.name})
        }
        else if(seat.name=="taken"){
            alert("The seat has already been taken")
        }
        console.log(seat.name);
        console.log(seatarray); 
        
     })
     
}

const selectedSeats=document.querySelector("#selectseats")
selectedSeats.addEventListener("click",(e)=>{
    e.preventDefault()
     seatcard.style.visibility = "visible";
    console.log("hello ");
    
    
})

screen.className="screen"
screen.textContent="Screen"
seatcard.appendChild(reloadbut)
seatcard.appendChild(screen)
closes.addEventListener("click", () => {
  seatcard.style.visibility = "hidden";
  console.log(seatarray);

  const seatselect = document.querySelector("#seatno");

  // Create a string from selected seat numbers
  const selectedSeats = seatarray.map(seat => seat.value).join(", ");

  seatselect.innerText = selectedSeats || "No seats selected";
  
  
});
const confirmbooking=document.querySelector("#confirmbooking")
confirmbooking.addEventListener("click",()=>{
    const alink=document.querySelector("#bookinghref")
      alink.setAttribute("href", "home.html");
      e.preventDefault()
      console.log(seatarray);
      
})



const selectedMovie = localStorage.getItem("selectedMovie");



if (selectedMovie) {
  console.log("Selected movie:", selectedMovie);

 fetch(`https://script.google.com/macros/s/AKfycbyJvOOUOfe-lx-zULThZbyCciUdfkoKVB4Ntz-8WLI3r2h8Z964fzAxshwjcJLZPGXRpA/exec?title=${selectedMovie}`)
    .then(response => response.json())
    .then(result => {
      const datas = result.data;
      console.log(datas);
      datas.forEach(element => {
        displaying(element) // element[0] is wrong — element is already one item
       
      });

     let flag=true // ✅   let flag=true
    if(flag){
        console.log("hello world");
        
        flag=false
    }
      
    });
}
const displaying=(element)=>{
 
    
     movieimg.src=element.Image
     movieName.innerText=element.Title
     genre.innerText=element.Genre
     director.innerText=element.Director
     starring.innerText=element.Starring
     plot.innerText=element.plot

}



localStorage.setItem("movievalue", selectedMovie);
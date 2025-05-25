const button=document.querySelector("#but")
const area=document.querySelector(".area")
const qoute=document.querySelector("#qoute")
const character=document.querySelector("#character")
button.addEventListener("click",()=>{
    console.log("hello world");
    randomnumber()   
})
const randomnumber=()=>{
    const value=Math.floor(Math.random()*103)
    console.log(value);
    fetchqoutes(value)
}
const fetchqoutes=(value)=>{
   
    console.log(value);
    fetch(`https://script.google.com/macros/s/AKfycbxv3oY-ZyajAvxSy8al00Q9pyOcWQ4Yc6bGZ1Zo9oT3JkGL4Sg3cfqoWa_BBDTEFzm36w/exec?sno=${value}`)
    .then(response=>{
        return response.json()
    })
    .then(result=>{
        const data=result.data
        data.forEach(element => {
            console.log(element.character);
            console.log(element.qoute);
            displayqoutes(element)
            
        });
    })
    .catch(error=>{
        console.error(error);
        
    })
    
}
const displayqoutes=(item)=>{
qoute.innerText=`" ${item.qoute} "`
character.innerText=`-${item.character}`
}
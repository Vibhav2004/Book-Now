const name=document.getElementsByName("username")
const phone=document.getElementsByName("phone")
const emailvalue=document.querySelector("#email")
const password=document.getElementsByName("password")


const loginsheeturl="https://script.google.com/macros/s/AKfycbz-MJq0eqD89FJ0A3CNU3-WdLGt0nK0wGkTtOBEc1rquMs5lAMfTzvoJIzXdkmTPYXVtA/exec"
const regbutton=document.querySelector("#regbut")
const form=document.forms['regform']


regbutton.addEventListener('click', e => {
  e.preventDefault();

  const valueemail = emailvalue.value;

  fetch(`https://script.google.com/macros/s/AKfycbxi8Y9N77yQIxjBsVUFVdklDf8kaIHrLPbZWVl20uno37pxWh8aSWRlL6k5hB70QtMFCA/exec?email=${valueemail}`)
    .then(response => response.json())
    .then(result => {
      const data = result.data;

      console.log("Full data received:", data);

      // ✅ Move emailExists OUTSIDE the loop
      let emailExists = false;

      data.forEach((element, index) => {
        if (element.email === valueemail) {
          console.log(`Password at index ${index}:`, element.password);
          alert("Email already in use");
          emailExists = true;
        }
      });

      if (!emailExists) {
        console.log("thank you sir");
        postdata(loginsheeturl);
         window.location.href = "login.html";
      }

    })
    .catch(error => console.error("Fetch error:", error));
});


const postdata=(loginsheeturl)=>{fetch(loginsheeturl,{method:'POST',body:new FormData(form)})
   .then(responses=>{alert("Thank you from logging in")})
   .catch(error=>{ alert(error)})
}
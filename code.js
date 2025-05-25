 const firstname = localStorage.getItem("firstname");
const lastname = localStorage.getItem("lastname");
const pno = localStorage.getItem("pno");
const email = localStorage.getItem("email");
const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats")); // convert back to array
const selectedMovie = localStorage.getItem("selectedMovie");
const finalHeading = document.getElementById("final");
const info1 = document.querySelector(".info1");
const info2 = document.querySelector(".info2");
const info3 = document.querySelector(".info3");
const info4 = document.querySelector(".info4");
const moviename = document.querySelector("#final");
const finalmovie=document.querySelector("#finalmovie")
const seats=document.querySelector(".seats")
fetch(`https://script.google.com/macros/s/AKfycbyJvOOUOfe-lx-zULThZbyCciUdfkoKVB4Ntz-8WLI3r2h8Z964fzAxshwjcJLZPGXRpA/exec?title=${selectedMovie}`)
.then(Response=>{
    return Response.json()
})
.then(result=>{
    const data=result.data
    finalmovie.src=data[0].Image
     
})
seats.innerHTML = ""; // clear any existing content first
for (let i = 0; i < selectedSeats.length; i++) {
    seats.innerHTML += selectedSeats[i] + ", ";
}
info1.innerText=firstname
info2.innerText=lastname
info3.innerText=pno
info4.innerText=email
moviename.innerText=selectedMovie

console.log(firstname, lastname, pno, email, selectedSeats, selectedMovie);
  const qrcodeContainer = document.getElementById("qrcode");
codegenrate.addEventListener("click", () => {

  qrcodeContainer.innerHTML = ""; // Clear previous QR code

  new QRCode(qrcodeContainer, {
    text: emailtosend.value,
    width: 180,
    height: 180,
  });
});

 const sendButton = document.querySelector(".tosend");

  sendButton.addEventListener("click", () => {
    const ticket = document.querySelector(".ticket");
    const poster = document.querySelector("#finalmovie");

    // Ensure image is loaded
    if (!poster.complete) {
      poster.onload = () => generatePDF(ticket,qrcodeContainer);
    } else {
      generatePDF(ticket,qrcodeContainer    );
    }
  });

  function generatePDF(ticketElement,qrcodeContainer) {
    // Optional: Clone and clean up ticket content before saving
    const clone = ticketElement.cloneNode(true);
    const codes=qrcodeContainer.cloneNode(true)
    // Remove inputs and buttons from clone
    clone.querySelectorAll('input, button').forEach(el => el.remove());

    // Optional: Apply PDF-specific styling
    clone.style.width = '820px';
    
    clone.style.fontSize = '14px';

    const opt = {
      marginLeft: 0.3,
      filename: 'movie_ticket.pdf',
      image: { type: 'jpeg', quality: 1 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        scrollY: 0,
      },
      jsPDF: {
        unit: 'in',
        format: 'a4',
        orientation: 'landscape',
      }
    };

    html2pdf().set(opt).from(clone).save();
    alert("Ticket has been Downloaded in your System")
  }




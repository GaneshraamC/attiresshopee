const form = document.querySelector('form');
function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "ganeshramc0703@gmail.com",
        Password : "8980283EB3CF0AD2757CDCE180D092564FF1",
        To : 'ganeshramc0703@gmail.com',
        From: "ganeshramc0703@gmail.com",
        Subject: "New Contact Enquiry Form",
        Body: "Name: " + document.getElementById("searchname").value +
            "<br> Mail ID: " + document.getElementById("email").value +
            "<br> Message: " + document.getElementById("Message").value
    }).then(
      message => {
        if (message == "OK"){
            Swal.fire({
                title: "Thank you for contacting us..!",
                text: "Message Sent Successfully!",
                icon: "success"
              });
        }
      }
    );
}

function checkInputs() {
    let isValid = true;
    const items = document.querySelectorAll(".item");

    for (const item of items) {
        if (item.value.trim() === "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
            isValid = false;
        } else {
            item.classList.remove("error");
            item.parentElement.classList.remove("error");
        }
    }

    // Additional check for the email field
    const emailField = document.getElementById("email");
    const emailValue = emailField.value.trim();

    if (emailValue === "") {
        emailField.classList.add("error");
        emailField.parentElement.classList.add("error");
        isValid = false;
    } else {
        emailField.classList.remove("error");
        emailField.parentElement.classList.remove("error");
    }

    return isValid;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (checkInputs()) {
        sendEmail();
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please fill out all the required fields!",
        });
    }
});


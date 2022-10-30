// function sendEmail () {
//     Email.send({
//         // SecureToken: "7affa0c8-e57a-4780-bcb0-28d62e45c30c",
//         Host : "smtp.elasticemail.com",
//         Username : "trustenableltd@gmail.com",
//         Password : "9C5095EAAEA56CADE82331D6799ED3A91F59",
//         To : 'trustenableltd@gmail.com',
//         From : document.getElementById ("email").value,
//         Subject : "New Contact Form Enquiry",
//         Body : "Name: " + document.getElementById ("name").value
//         + "<br> Email: " +document.getElementById ("email").value
//         + "<br> Message: " +document.getElementById ("message").value
//     }).then(
//       message => alert("message sent successfully")
//     );
// }
// sendEmail ();

var name = document.querySelector ("name");

function sendEmail () {
    if (name === 0);
    {
        alert ("enter correctly");
    }
}

 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyCqgPlQqmumhZgVZfL3FR2ZdPpR0iueijw",
    authDomain: "essaie2-bf951.firebaseapp.com",
    databaseURL: "https://essaie2-bf951.firebaseio.com/",
    projectId: "essaie2-bf951",
    storageBucket: "essaie2-bf951.appspot.com",
    messagingSenderId: "811442625500"
  };
  firebase.initializeApp(config);


// Reference messages collection

const dbRefObject = firebase.database().ref ().child ('object');


// Listen for form submit
const preObject = document.getElementById('contactForm').addEventListener('submit', submitForm);
// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}
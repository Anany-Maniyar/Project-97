window.alert("This Websithe is NOT MADE to be Published or used for official work. This werside is made for a Testing project.");

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyClrj4aDjR65al7u337s4PPSnDyoXpef9o",
  authDomain: "project-97-bc9b2.firebaseapp.com",
  databaseURL: "https://project-97-bc9b2-default-rtdb.firebaseio.com",
  projectId: "project-97-bc9b2",
  storageBucket: "project-97-bc9b2.appspot.com",
  messagingSenderId: "947138373732",
  appId: "1:947138373732:web:a00a393ab651a301c65771"
};

 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

function addUser()
{
    name=document.getElementById("name").value;
    password=document.getElementById("password").value;
    phone=document.getElementById("phone_no").value;
    email=document.getElementById("email").value;
    area=document.getElementById("area").value;
    pin_code=document.getElementById("pin_code").value;
    if(name==""){
      window.alert("Enter Your User Name");
    }
    else{
      if (password==""){
      window.alert("Enter Your Password");
      }
      else{
        if (phone==""){
          window.alert("Enter Your Phone. No.");
          }
          else{
            if (email==""){
              window.alert("Enter Your Email");
              }
              else{
                if (area==""){
                  window.alert("Enter Your Area");
                  }
                  else{
                    if (pin_code==""){
                      window.alert("Enter Your Pin Code");
                      }
                      else{
                        localStorage.setItem("name", name);
                        localStorage.setItem("phone_no", phone);
                        localStorage.setItem("email", email);
                        localStorage.setItem("area", area);
                        localStorage.setItem("pin_code", pin_code);
                        localStorage.setItem("password", password);
                        window.location = "home_page.html";
                        firebase.database().ref("/").child(name).update({
                          purpose : "adding user"
                      });
                      }
                  }
              }
          }
      }
    }
}


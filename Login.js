function addUser()
{
    
    name=document.getElementById("name").value;
    password=document.getElementById("password").value;
    if(name==""){
      window.alert("Enter Your User Name");
    }
    else{
      if (password==""){
      window.alert("Enter Your Password");
      }
      else{
        window.location = "home_page.html"
        localStorage.setItem("name", name);
    localStorage.setItem("password", password);
      }
    }
    
  }
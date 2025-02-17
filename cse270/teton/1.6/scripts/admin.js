async function login(username, password) {
    try{
    loginurl = `${userDataUrl}?username=${username}&password=${password}`
    const response = await fetch(loginurl);
    if (response.ok) {
        sessionStorage.setItem("username", username);
        showhidelogin();
    } else {
        const errormsg = document.querySelector(".errorMessage");        
        errormsg.innerText = "Invalid username and password.";
    }
    }
    catch (error){
      const errormsg = document.querySelector(".errorMessage");        
      errormsg.innerText = "Invalid username and password.";   
    }
  }

function checkcredentials(){
    login(document.querySelector("#username").value, document.querySelector("#password").value);
}

function showhidelogin(){
    const username = sessionStorage.getItem("username");
    if (username != null){
        document.querySelector(".login").style.display = 'none'
        document.querySelector(".displaydata").style.display = 'block'
        document.querySelector("#displayusername").innerText = username
    }
    else{
        document.querySelector(".login").style.display = 'block'
        document.querySelector(".displaydata").style.display = 'none'
        document.querySelector("#displayusername").innerText = ""
    }

}

function logout(){
    const username = sessionStorage.removeItem("username");
    showhidelogin()    
}

function featureFlag(){
    let admin_flag = localStorage.getItem("admin_flag")
    if (admin_flag != null && admin_flag.toUpperCase() == 'ENABLED'){
        document.querySelector(".admin-main").style.display = 'block'
        document.querySelector(".admin-disabled").style.display = 'none'
    }
}

// showhidelogin()
// featureFlag()
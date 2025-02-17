let url = new URL(window.location);
let params  = url.searchParams;

let confirmation = document.querySelector(".join-confirm");
let params_list = ['fname','lname','biztitle','email','cellphone','bizname','websiteURL','level','description','currentdate']    
let description_list = ['First Name:','Last Name:','Position Title:','E-mail:','Cellphone','Business Name:','Website URL:','Membership Level:','Business Description:','Join Date:']

let build_string = "<table>";
for (i=0; i < params_list.length; i++){
  build_string += `<tr><td class="right-justify">${description_list[i]}</td><td class="left-justify">${params.get(params_list[i])}</td></tr>`
}
build_string += "</table>"
confirmation.innerHTML = build_string

function x(){
  fetch("http://127.0.0.1:8000/users/ingest" + url.search);
}
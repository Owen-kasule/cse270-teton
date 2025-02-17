let url = new URL(window.location);
let params  = url.searchParams;
let form = document.querySelector("form")

for (const p of params) {            
  form.innerHTML+=`\n<input type="hidden" name="${p[0]}" value="${p[1]}">`
}

let cd = document.querySelector("#currentdate");

if (cd != null){
    cd.value = new Intl.DateTimeFormat("en-US").format(new Date())
}
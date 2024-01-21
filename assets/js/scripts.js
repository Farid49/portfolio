document.getElementById("moreinfo").addEventListener("click" , ()=>{
    document.querySelector("input.toggler").checked = true;
})

document.getElementById("year").innerHTML = new Date().getFullYear();

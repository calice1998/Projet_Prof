window.onload = () =>{
    var collapse = document.getElementById("collapse");
    var menu = document.getElementById("menu");

    if(collapse){
        collapse.addEventListener("click", ()=>{
            console.log("collapse");
            if( menu.style.display === "none"){
                menu.style.display = "block"
            }else{
                menu.style.display = "block"
            }
        })
    }
}
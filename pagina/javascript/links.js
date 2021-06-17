let mainMenu = document.getElementById(`logo`)
let webDev = document.getElementById(`web-dev`)
let gameDev = document.getElementById(`game-dev`)
let design = document.getElementById(`design`)

let mainSect = document.getElementById(`main-sect`)
let webDevSect = document.getElementById(`web-sect`)
let gameDevSect = document.getElementById(`game-sect`)
let designSect = document.getElementById(`design-sect`)


let title = document.getElementById(`title`)
let replaceTitle = document.querySelector(`#title h2`)

mainSect.style.display= "block"
webDevSect.style.display= "none"
gameDevSect.style.display= "none"
designSect.style.display= "none"

console.log(replaceTitle)

mainMenu.addEventListener("click", ()=>
{
    /*--------------
    |    titles     |
    ---------------*/

    title.style.display = "none"
    console.log("main")

    /*--------------
    |   sections    |
    ---------------*/

    mainSect.style.display= "block"
    webDevSect.style.display= "none"
    gameDevSect.style.display= "none"
    designSect.style.display= "none"




})




webDev.addEventListener("click", ()=>
{
    /*--------------
    |    titles     |
    ---------------*/

    title.setAttribute('style', 
    `
                display: block;
                background-color: #0078bd;
                color: #fff;
            `
    )

    replaceTitle.innerText = replaceTitle.innerText.replace( new RegExp(replaceTitle.innerText, "g"), "web development" )
    
    /*--------------
    |   sections    |
    ---------------*/


    mainSect.style.display= "none"
    webDevSect.style.display= "block"
    gameDevSect.style.display= "none"
    designSect.style.display= "none"
   
})





design.addEventListener("click", ()=>
{

    /*--------------
    |    titles     |
    ---------------*/

    title.setAttribute('style', 
    `
                display: block;
                background-color: #ffed29;
                color: #000000;
            `
    )
    replaceTitle.innerText = replaceTitle.innerText.replace( new RegExp(replaceTitle.innerText, "g"), "UI/UX and Design" )

    /*--------------
    |   sections    |
    ---------------*/
  
    mainSect.style.display= "none"
    webDevSect.style.display= "none"
    gameDevSect.style.display= "none"
    designSect.style.display= "block"
})




gameDev.addEventListener("click", ()=>
{
    /*--------------
    |    titles     |
    ---------------*/

    title.setAttribute('style', 
    `
                display: block;
                background-color: #e5620b;
                color: #fff;
            `
    )
    replaceTitle.innerText = replaceTitle.innerText.replace( new RegExp(replaceTitle.innerText, "g"), "Game development" )

    /*--------------
    |   sections    |
    ---------------*/


    mainSect.style.display= "none"
    webDevSect.style.display= "none"
    gameDevSect.style.display= "block"
    designSect.style.display= "none"
})


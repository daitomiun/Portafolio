let mainMenu = document.getElementById(`logo`)
let webDev = document.getElementById(`web-dev`)
let gameDev = document.getElementById(`game-dev`)
let design = document.getElementById(`design`)

let title = document.getElementById(`title`)
let replaceTitle = document.querySelector(`#title h2`)


console.log(replaceTitle)

mainMenu.addEventListener("click", ()=>
{
    title.style.display = "none"
    console.log("main")
})




webDev.addEventListener("click", ()=>
{
    title.setAttribute('style', 
    `
                display: block;
                background-color: #0078bd;
                color: #fff;
            `
    )

    replaceTitle.innerText = replaceTitle.innerText.replace( new RegExp(replaceTitle.innerText, "g"), "web development" )
    // replaceTitle.innerText = "web development" +
    // replaceTitle.innerText.replace(/</g,"&lt;") +
    //         "</pre>";

   
})





design.addEventListener("click", ()=>
{
    title.setAttribute('style', 
    `
                display: block;
                background-color: #ffed29;
                color: #000000;
            `
    )
    replaceTitle.innerText = replaceTitle.innerText.replace( new RegExp(replaceTitle.innerText, "g"), "UI/UX and Design" )

  
})




gameDev.addEventListener("click", ()=>
{
    title.setAttribute('style', 
    `
                display: block;
                background-color: #e5620b;
                color: #fff;
            `
    )
    replaceTitle.innerText = replaceTitle.innerText.replace( new RegExp(replaceTitle.innerText, "g"), "Game development" )

})


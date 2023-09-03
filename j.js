
 

let albums = [
    {
        title: "Thriller", 
        artist: "Michael Jackson", 
        year: 1982, 
        genre: "Pop"},

    {
        title: "Purple Rain", 
        artist: "Prince and The Revolution", 
        year: 1984, 
        genre: "Pop/Rock"},

    {
        title: "Born in the U.S.A.", 
        artist: "Bruce Springsteen", 
        year: 1984, 
        genre: "Rock"},

    {
        title: "Synchronicity", 
        artist: "The Police", 
        year: 1983, 
        genre: "New Wave"},

    {
        title: "Appetite for Destruction", 
        artist: "Guns N' Roses", 
        year: 1987, 
        genre: "Hard Rock"},

    {
        title: "Like a Virgin", 
        artist: "Madonna", 
        year: 1984, 
        genre: "Pop"},

    {
        title: "The Joshua Tree", 
        artist: "U2", 
        year: 1987, 
        genre: "Rock"},

    {
        title: "Graceland", 
        artist: "Paul Simon", 
        year: 1986, 
        genre: "World Music"},

    {
        title: "Rio", 
        artist: "Duran Duran", 
        year: 1982, 
        genre: "New Wave"},

    {
        title: "Brothers in Arms", 
        artist: "Dire Straits", 
        year: 1985, 
        genre:"Rock"
    }
];


// function countDown(seconds) {
//     //let seconds = 3

//     let div_countDown = document.createElement("div")
//     div_countDown.classList.add("div_countDown")
//     document.body.appendChild(div_countDown)

//     let h3 = document.createElement("h2")
//     h3.textContent = seconds
//     div_countDown.appendChild(h3)

//     let countDown = setInterval(() => {
//         console.log(seconds)
//         seconds--
//         h3.textContent = seconds
//         if (seconds < 0){
//             clearInterval(countDown)
//             document.body.removeChild(div_countDown)
//             document.body.removeChild(div_message)
//         }
//     }, 1000);
//  }


let box_container = document.querySelector(".box-container")

const btns = document.querySelectorAll(".btn")



btns.forEach((element) => {
    
    element.addEventListener("click", ()=>{

        if(element.textContent === "Yes!"){
            let div_message = document.createElement("div")
            div_message.classList.add("div_message")
            document.body.appendChild(div_message)

            let p = document.createElement("p")

            p.classList.add("p_message")
            p.textContent = "Awesome, you like good music"
            div_message.appendChild(p)


        //    countDown
            let seconds = 0

            // creating a div for the Count Down
            let div_countDown = document.createElement("div")
            div_countDown.classList.add("div_countDown")
            document.body.appendChild(div_countDown)
        
            // this goes inside the Count Down div to show the numbers
            let h3 = document.createElement("h3")
            h3.textContent = seconds
            div_countDown.appendChild(h3)
        
            // running timer
            let countDown = setInterval(() => {
                seconds--
                h3.textContent = seconds
                if (seconds < 0){
                    clearInterval(countDown)
                    document.body.removeChild(div_countDown)
                    document.body.removeChild(div_message)

                    // removing div class="box-container"
                    document.body.removeChild(box_container)
                    
                    // creating a div to show the Albums
                    let divData = document.createElement("div")
                    divData.classList.add("divData")
                    document.body.appendChild(divData)

                    let divDataList = []

                    // creating some kind of table
                    // showing album with it's own delete button
                    for (element of albums){

                        // container for each album and button
                        let divEachAlbum = document.createElement("div")
                        divEachAlbum.classList.add("divEachAlbum")

                        // album
                        let pData = document.createElement("p")
                        pData.textContent = `Name: ${element.title} --- Artist: ${element.artist} ... Year: ${element.year} ... Genre: ${element.genre} `
                        pData.classList.add("pData")

                        // button
                        let deleteButton = document.createElement("button")
                        deleteButton.classList.add("pData-button")
                        deleteButton.textContent = "delete album"

                        divEachAlbum.append(pData, deleteButton)
                        divData.append(divEachAlbum)
                        
                        // creating an Object with each iteration
                        const obj = 
                            {
                                paragraph: pData,
                                button: deleteButton
                            }
                        // adding the object to a list
                        divDataList.push(obj)
                    }

                    console.log(divData)

                    console.log(divDataList.length)
                    divDataList.forEach((element) => {
                        console.log(element)
                        console.log(element.button)
                        element.button.addEventListener("click", ()=>{
                            divData.remove(divEachAlbum)
                        })
                        console.log(divDataList.length)
                    })
                    


                }
            }, 1000);
        } 

        else {
            let div_message = document.createElement("div")
            div_message.classList.add("div_message")
            document.body.appendChild(div_message)

            let p = document.createElement("p")

            p.classList.add("p_message")
            p.textContent = "That's a Shame, you are missing out  my friend"
            div_message.appendChild(p)

            


            //    countDown
            let seconds = 3

            let div_countDown = document.createElement("div")
            div_countDown.classList.add("div_countDown")
            document.body.appendChild(div_countDown)
        
            let h3 = document.createElement("h3")
            h3.textContent = seconds
            div_countDown.appendChild(h3)
        
            let countDown = setInterval(() => {
                console.log(seconds)
                seconds--
                h3.textContent = seconds
                if (seconds < 0){
                    clearInterval(countDown)
                    document.body.removeChild(div_countDown)
                    document.body.removeChild(div_message)
                }
            }, 1000);
        }
    })

    }
);





// // testing
// let personas = 
// [
//     {
//     name: "Dany",
//     apellido: "Fojo"
//     },

//     {
//     name: "Nana",
//     apellido: "Bernal"
//     }
// ]
    

// personas.forEach((element) => {
//     console.log(element.name)
// })


// let a = document.getElementById("name")
// let aa = document.getElementById("apelli")
// let b = document.getElementById("b")

// b.addEventListener("click", ()=>{
//     const obj = {
//         name: a.value,
//         appellido: aa.value
//     }
//     personas.push(obj)
//     console.log(personas)

//     let divData = document.createElement("div")
//     divData.classList.add("divData")
//     document.body.appendChild(divData)
// })
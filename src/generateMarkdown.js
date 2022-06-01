
// need to pass argument data in order to use template literals on HTML document to access specific key name in answers of questions
function genHTML(data) {
    // need an empty array to store all my cards
    let cards = []

    for(let i = 0; i < data.length; i++) {
       if (data[i].getRole() === "Manager") {
           cards.push(managerCard(data[i]))
       } else if (data[i].getRole() === "Engineer") {
           cards.push(engineerCard(data[i]))
       } else if (data[i].getRole() === "Intern") {
           cards.push(internCard(data[i]))
       }
    }
   console.log(cards)

   return `<!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <link rel="Stylesheet" href="./Assets/style.css">
       <title>My Team</title>
   </head>
   <body>
    <header>
        <h1>My Team</h1>
    </header>

    <div class="allCards">

    ${cards.join('')}

    </div>
   
   </body>
   </html>`
}

// Need functions for each card to be created once selected by user

function managerCard(manager) {
    return `
    <div class="card">
    <div class="heading">
     <h2 id="name">${manager.getName()}</h2>
     <h2 id="title">${manager.getRole()}</h2>
    </div>
       <h5>ID: ${manager.getId()}</h5>
       <h5>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></h5>
       <h5>Office Number: ${manager.getOfficePhone()}</h5>
  </div>
    `
}

function engineerCard(engineer) {
    return `
    <div class="card">
    <div class="heading">
     <h2 id="name">${engineer.getName()}</h2>
     <h2 id="title">${engineer.getRole()}</h2>
    </div>
       <h5>ID: ${engineer.getId()}</h5>
       <h5>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></h5>
       <h5>Github: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></h5>
  </div>
    `
}

function internCard(intern) {
    return `
    <div class="card">
        <div class="heading">
         <h2 id="name">${intern.getName()}</h2>
         <h2 id="title">${intern.getRole()}</h2>
        </div>
           <h5>ID: ${intern.getId()}</h5>
           <h5>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></h5>
           <h5>School: ${intern.getSchool()}</h5>
      </div>
        `

}

module.exports = genHTML

// TODO; Need to write function that will generate HTML page with styling
// TODO: Email and GitHub inputs need top be links that open up a new tab


// need to pass argument data in order to use template literals on HTML document to access specific key name in answers of questions
function genHTML(data) {
   return `<!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <style>
           body {
               margin: 0;
           }
            header {
               display: flex;
               justify-content: center;
               color: black;
               font-size: 50px;
               background-color: violet;
               padding: 25px;
           }
       </style>
       <title>Document</title>
   </head>
   <body>
    <header>
        ${data.name}
    </header>
   
   </body>
   </html>`
}

// need to create function for Css sheet

// Need to create functions that will render new html sections for the generate html page
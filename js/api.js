/*esversion: 6*/

//==============================================================================================================
//==============================================================================================================
//Change according to your needs
const data = {
    "name" : "John Doe",
    "title" : [
        "Designer",
        "Front End",
        "ML Enthusiast"
    ],
    "links" : [
        "https://behance.net/",
        "https://codepen.io/",
        "https://linkedin.com/",
        "https://github.com/"
    ],
    "icons" : [
        "fab fa-behance-square",
        "fab fa-codepen",
        "fab fa-linkedin",
        "fab fa-github-square"
    ],
    "email" : "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=targetemail@email.com"
};

//===================================================================================================
//===================================================================================================


//Target DOM Elements to manipulate
const domHeadTitle = document.querySelector('head title');
const domName = document.querySelector('div.root main h1')
const domTitle = document.querySelectorAll('.desc span:not(.separator)');
const domLinks = document.querySelectorAll('.social-icons a');
const domIcons = document.querySelectorAll('.social-icons a i');
const domEmail = document.querySelector('footer a');

// //Fetch json file
//=================================================================
//DISCARDED: DOES NOT FETCH LOCAL FILES WHEN USED WITHOUT A SERVER
//=================================================================
// fetch('/data.json', {mode: 'no-cors'})
//     .then(
//         function (response) {
//             if (response.status !== 200) {
//                 //Show error if file is corrupted or not found
//                 console.log('Looks like there was a problem. Status Code: ' +
//                     response.status);
//                 return;
//             }

//             // Examine the text in the response
//             response.json().then(function (data) {
//                 // Add JSON to DOM
                
//             });
//         }
//     )
//     //Display error
//     .catch(function (err) {
//         console.log('Fetch Error :-S', err);
//     });

//Add JSON data to DOM
const domManipulation = (data) => {

    //Add Name
    domHeadTitle.innerText = data.name + " - " + data.title[0] + " | " + data.title[1] + " | " + data.title[2]
    domName.innerText = data.name;

    //Loop through titles
    for (var i = 0; i < domTitle.length; i++) {

        domTitle[i].innerText = data.title[i];
    }

    //Loop through profile links
    for (var i = 0; i < domLinks.length; i++) {

        domLinks[i].setAttribute('href', data.links[i]);
    }

    //Loop through fontawesome icon classes
    for(var i = 0; i < domIcons.length ; i++) {
        domIcons[i].setAttribute('class' , data.icons[i]);
    }

    //Add Email address
    domEmail.setAttribute('href', data.email);
};

domManipulation(data);
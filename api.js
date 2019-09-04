/*esversion: 6*/

//Target DOM Elements to manipulate
const domName = document.querySelector('div.root main h1')
const domTitle = document.querySelectorAll('.desc span:not(.separator)');
const domLinks = document.querySelectorAll('.social-icons a');
const domIcons = document.querySelectorAll('.social-icons a i');
const domEmail = document.querySelector('footer a');

//Fetch json file
fetch('./data.json')
    .then(
        function (response) {
            if (response.status !== 200) {
                //Show error if file is corrupted or not found
                console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                return;
            }

            // Examine the text in the response
            response.json().then(function (data) {
                // Add JSON to DOM
                domManipulation(data);
            });
        }
    )
    //Display error
    .catch(function (err) {
        console.log('Fetch Error :-S', err);
    });

//Add JSON data to DOM
const domManipulation = (data) => {

    //Add Name
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
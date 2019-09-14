# Minimis

Minimis is a minimal, efficiency focused portfolio template. It is intended to be used as a portal to four of your most important profiles on the internet that you would like a potential employer to see.

## Features

* Color customization with SASS
* Fully responsive design
* No extra prerequisites needed
* Localized API with JSON

## Getting Started

* Download and unzip the folder.
* Open the `api.js` file in the `js/` directory and add in your personal details,
```
{
    "name" : "John Doe", //Name
    "title" : [ //Job titles
        "Designer", //Current
        "Front End", //Aspiration
        "ML Enthusiast" //Hobby
    ],
    "links" : [ //links
        "https://behance.net/",
        "https://codepen.io/",
        "https://linkedin.com/",
        "https://github.com/"
    ],
    "icons" : [ //Font awesome classes
        "fab fa-behance-square",
        "fab fa-codepen",
        "fab fa-linkedin",
        "fab fa-github-square"
    ],
    "email" : "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=targetemail@email.com" //edit "targetemail@email.com"
}
```

### Prerequisites

* Code Editor (VSCode, Sublime Text, Atom, etc.)
* Font Awesome icons (Available in the template, can also be added as a cdn link)


## Versioning

Used [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/blazephoenix/minimis/tags). 

## Authors

* **Tanmay Naik** - *Initial work* - [Blazephoenix](https://github.com/blazephoenix)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


# Password Generator Challenge

## Table of contents
* [Description](#description)
* [Technologies](#technologies)
* [My Steps](#my-steps)
* [Results](#results)
* [Credit](#credit)

## Description
Create an application that an employee can use to generate a new, random password based on certain criteria. Create a responsove user interface that is clean, polished, and adapts to multiple screen sizes.
	
## Technologies
Project was updated using:
* VS Code
* HTML
* CSS
* JavaScript
* Terminal (Mac)
* Git
* GitHub

## My Steps
### STEP 1. 
* Cloned the starter code
* Created a GitHub Repository with a unique name 
* Pushed the files into the new Repo using Git
* Created a live link of my site in GitHub

### STEP 2.
* Created a blank array for finalPassword
* Created a function to get the password length and used window.prompt()
* Used if() statement to validate the chosen password length, if length was invalid ran the function again 
* Created function to get character types using window.confirm()
* Used if() statements to push chosen character types into the empty chosenCharacters[] array
* Used if() statement to validate that at least one character type was used, if not ran the function again 
* Created a function to generate the password when button was clicked and called above functions
* Created a function which used Math.random to generate random values
* Used for() loop to take those random values and iterate through the chosen characters types for the chosen length of the password
* Pushed the array of combined password into the empty finalPassword[] array
* Returned the final password using join("") to convert the array into a string

### STEP 3.
* Made various commits throughout process to save progress
* Tested functionality in GitHub pages


## Results

* https://github.com/etrenholm/password-challenge
* https://etrenholm.github.io/password-challenge

![mockup](./assets/images/horiseon-screenshot.jpg)

## Credit

Erica Trenholm: https://github.com/etrenholm

### ©️ February 2022

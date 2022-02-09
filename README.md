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
* Created a blank array for the final password
* Created <code>getLength</code> function and used <code>window.prompt()</code> to get the password length
* Used <code>if</code> statement to validate the chosen password length, if length was invalid ran the function again 
* Created <code>getCharacterTypes()</code> function and used <code>window.confirm()</code> to get character types
* Used <code>if</code> statements to push the confirmed character types into the empty <code>chosenCharacters[]</code> array
* Used <code>if</code> statement to validate that at least one character type was used, if not ran the function again 
* Created a <code>generatePassword()</code> function to generate the password when button was clicked and called <code>getLength()</code> and <code>getCharacterTypes()</code> functions
* Created a <code>makeRandom()</code> function which used <code>Math.random</code> to generate random values
* Used <code>for</code> loop to take those random values and iterate through the chosen characters types for the value equal to the chosen password length
* Pushed the array of combined password into the empty <code>finalPassword[]</code> array
* Used <code>join("")</code> to return the <code>finalPassword[]</code> array as a string

### STEP 3.
* Made various commits throughout process to save progress
* Tested functionality in GitHub pages


## Results

* https://github.com/etrenholm/password-challenge
* https://etrenholm.github.io/password-challenge

![mockup](images/PasswordGenerator.png)

## Credit

Erica Trenholm: https://github.com/etrenholm

### ©️ February 2022

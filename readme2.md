# passwordCreator

## USER STORY
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

## ACCEPTANCE CRITERA
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

## SCREENSHOTS
The Password Generator application displays a prompt asking the user to enter the password length.
![Prompt #1](./assets/images/PROMPT1.jpg)

The Password Generator application displays a prompt asking the user to choose if they want special characters.
![Confirm Box 1](./assets/images/PROMPT2.jpg)

The Password Generator application displays a prompt asking the user to choose if they want uppercase characters.
![Confirm Box 2](./assets/images/PROMPT3.jpg)

The Password Generator application displays a prompt asking the user to choose if they want lowercare characters.
![Confirm Box 3](./assets/images/PROMPT4.jpg)

The Password Generator application displays a prompt asking the user to choose if they want numeric characters.
![Confirm Box 4](./assets/images/PROMPT5.jpg)

The Password Generator application displays a unique password on the screen, based on user input.
![Final result](./assets/images/PASSWORD_GENERATED.jpg)

## MOCK-UP IMAGE
This is what the result should look like.
![Final result](./assets/images/mockup.png)

## DESIGNER NOTES
* This program uses prompts to gain user inputs.
* The user inputs are Boolean values.
* The 'For Loop' uses 'Math.Random' to create a random selection of each type of character, based on the user inputs. 
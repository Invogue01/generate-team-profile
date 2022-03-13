# generate-team-profile

## Project

 Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. 
## How to use

1. Please clone repo onto your machine
2. Change into cloned folder in terminal type: `cd generate-team-profile`
3. In terminal type: `npm install` to install all dependencies 
4. To run test type in terminal: `npm run test`
5. To run entire application in terminal type: `npm run start`

## User Story

```md
AS A manager
YOU WANT to generate a webpage that displays my team's basic info
SO THAT YOU have quick access to their emails and GitHub profiles
```

## Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Mock-Up

The following image shows a mock-up of the generated HTML’s appearance and functionality:

![HTML webpage titled “Your team Members” features three boxes listing employee names, titles, and other key info.](./images/code.png)

![](./images/ui.png)
## Video

[Browser based Video Walkthrough. Click Download/View Raw to display](./video/appVideo.webm)


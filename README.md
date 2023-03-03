# MyGovernment README
Here is a link to the website [MyGovernment](https://my-uk-government.herokuapp.com/home)

## What is this ReadME for?
This is the ReadMe for the website My Government UK. My Government UK is a website built using HTML, CSS and Python and the supporting framework Flask which pulls its data from a MongoDB database so that the databases' data can be viewed in a user-friendly way. The site's fundamental goal is to educate people on which Members of Parliament (MPs) currently make up the UK Government.

![Mockup](static/mockup/mockup.png)



## UX

### The Strategy Plane
* My inspiration for deciding to build this website came from the recent events in UK Politics. Since September 2022, the UK has had 3 different Prime Ministers (PMs) and with each change-over there have been dozens of sackings, re-appointments and new appointments of Cabinet Ministers - the team of the most senior ministers in the Government who are chosen by the Prime Minister to lead on specific policy areas such as Health, Transport, Foreign Affairs or Defence. With the vast number of changes in Government, I wanted to build a website where users can easily view who are currently the members of the cabinet who would be devising government policy on the most important areas that affects everyone's lives in the UK. Through increased awareness of who these individuals are, I aim to improve the accountability of those individuals and the overall government's outcome on the policies they have lead on.


#### Site Goals
* To provide users with an easy way of viewing the current UK Government and its members.
* To allow for users to create an account which will allow them to help them keep the website up-to-date by creating new records for any new additions to the Cabinet.
* To allow for registered users to edit existing records and also delete them too.
* To ensure that the site is fully accessible on desktop and touch screen devices.
* To ensure that the app is fully compliant with keyboard commands and screen readers.

#### User Stories
* As a user, I want to be able to view quickly who the current members of the cabinet are.
* As a user, I want to be able to view the cabinet members details, see a photo of them and know what positions they hold and also what constituency they represent.
* As a user, I want to be able to create an account so that I can help keep the database up to date, should there be any future changes to the cabinet.
* As a user I want to be able to use this site with my keyboard
* As a user I want to be able to use a screen reader to help use this site.

### The Scope Plane
Features Planned
* A page which displays all of the cabinet members on one page with their details and an accompanying photograph.
* Responsive Design allowing the user to correctly operate the site across a range of devices the user could potentially use such as Desktop, Laptop, Tablet and Mobile's.
* An account creation system which meets standard password and account protections such as minimum characters length.
* Be able to Create, Read, Update and Delete data on the database through the website and have these changes reflect instantly on the website (CRUD Functionality)
* The site should be fully accessible for keyboard users
* The site should be fully accessible for screen reader users

### The Structure Plane
User Story:

> As a user, I want to be able to view quickly who the current members of the cabinet are.

Acceptance Criteria:
* The user should be able to quickly find who the current cabinet members are with just a few clicks.

Implementation:
* The website home page will convey to the user what the purpose of the site is with a clear nav bar which allows for easy navigation acorss the websites pages.

User Story:

> As a user, I want to be able to view the cabinet members details, see a photo of them and know what positions they hold and also what constituency they represent.

Acceptance Criteria:
* The user should be able to easily view the various different cabinet members and their positions within the government as well as the constituency they represent within just a few clicks and scrolling. 

Implementation:
* This will be achieved by the data displayed on the cabinet page.

User Story:

> As a user, I want to be able to create an account so that I can help keep the database up to date, should there be any future changes to the cabinet.

Acceptance Criteria:
* Account creation and login is a feature and when a user is logged in, only then can they make changes to the database.

Implementation:
* It should be possible for a user to create an account which have some form of password controls like minimum lengths. Upon creating an account or logging in, the website should uncover additional functions to allow for CRUD functionality.

User Story:

> As a user I want to be able to use this site with my keyboard

Acceptance Criteria:
* It should be entirely possible for an individual utilising a keyboard only to be able to click navigate the site.

Implementation:
* The user will be able to navigate the site using only a keyboard. All buttons and images can be selected utilising both mouse clicks and "keydown" enter.

User Story:

> As a user I want to be able to use a screen reader to help use this site.

Acceptance Criteria:
* It should be entirely possible for an individual utilising a screen reader to easily utilise the site.

Implementation:
* The user will be able to navigate the site utilising a screen reader. 

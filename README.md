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
> As a user, I want to be able to view who the current members of the cabinet are.

Acceptance Criteria:
* The user should be able to quickly find who the current cabinet members are with just a few clicks.

Implementation:
* The website will contain a navbar on every page and for all screen-sizes allowing for navigation to the Cabinet page and other pages of the site.

User Story:
> As a user, I want to be able to view the cabinet members details, see a photo of them and know what positions they hold and also what constituency they represent.

Acceptance Criteria:
* Information on the Cabinet Members should be presented in a clear and legible way and localised to one area of the page

Implementation:
* A profile card containing the cabinet member's name, image, position and constituency. 

User Story:
> As a user, I want to be able to create an account so that I can help keep the database up to date, should there be any future changes to the cabinet.

Acceptance Criteria:
* Users should have the ability to create accounts and when logged in be able to make  make changes to the database.

Implementation:
* It should be possible for a user to create an account which have some form of password controls like minimum lengths. Upon creating an account or logging in, the website should uncover additional functions to allow for CRUD functionality.

User Story:
> As a user, I want to be able to use this site with only my keyboard

Acceptance Criteria:
* It should be entirely possible for an individual utilising only a keyboard to be able to experience the full features of the site and navigate around with ease.

Implementation:
* The user will be able to navigate the site using only a keyboard. All buttons and images can be selected utilising both mouse clicks and "keydown" enter.

### The Skeleton Plane
#### Wireframes
I utilised Balsamiq to produce my wireframes of how the app would appear across different devices.

Mobile Device Wireframes 
 
 ![Mobile Device Home](static/wireframes/wireframe-desktop-home.png)
 ![Mobile Device Cabinet](static/wireframes/wireframe-desktop-cabinet.png)

Tablet Device Wireframes

 ![Tablet Device Home](static/wireframes/wireframe-desktop-home.png)
 ![Tablet Device Cabinet](static/wireframes/wireframe-desktop-cabinet.png)

Desktop Device Wireframes
 ![Desktop Device Home](static/wireframes/wireframe-desktop-home.png)
 ![Desktop Device Cabinet](static/wireframes/wireframe-desktop-cabinet.png)

 ### The Surface Plane

#### Design 
##### Colour Scheme
The colour scheme I opted to use represent the colours of the union jack. The Hex codes for the 3 colour flag were: White: #FFFFFF.Red: #C8102E.Blue: #062469. There is some variation across the pages to reduce the opacity to improve readability. 

##### Typography
I used the  'Times New Roman', font for title 'The Cabinet' with 'Times & sans-serif;' as the fallback font in case for any reason the font isn't being imported into the site correctly. I found 'Times New Roman' gave this page title a historical feeling which is meant to covey the ancientness of The UK Cabinet which was first formed 1644.

I used the font 'Poppins', with 'sans-serif' as the fallback, for the Cabinet Members role title and also on the cabinet members profile card as I thought this font had a strong and important look relative to the other fonts used. The information characterised within this font are considered to be the key information on the cabinet members i.e. their role, bio, and recent voting records. 'Poppins' was obtained from Google Fonts.

I used the font 'Catamaran', with 'sans-serif' as the fallback, for the Cabinet Members' Name as when trialling different fonts between the Role Title ('Poppins') and Constituency ('Lora') this font looked neat and clear. I also used for the titles and text on the forms as it again gave a clear and tidy visual. On the Delete_Minister Form, the weight is increased in conjunction with the different coloured background to warn the user that this is the delete form to avoid accidental deletions of data. 'Catamaran' was obtained from Google Fonts.

I used the font 'lora', with 'sans-serif' as the fallback, for the cabinet members constituency as I felt this gave a softer and less prominent look than the fonts for their name and role. This is intentional as the constituency took less precedence over the cabinet position.  'Lora' was obtained from Google Fonts.

[Google Fonts](https://fonts.google.com/)

##### Imagery
The use of images are a key display feature of this website. I have used the MPs' official portrait photos that are freely accessible on [Parliament.UK](https://members.parliament.uk/member) in a 3x4 ratio. I had the issue of Rishi Sunak and Penny Mordaunt not having their official portrait available at this time on Parliament.UK so I used another portrait image for them which had a creative commons license.

For the Log In page, I have used a beautiful image of the Houses of Parliament at night with the River Thames in the foreground. This and 10 Downing Street are perhaps the most recognisable buildings in UK Politics so I felt it was fitting that it should be used here. I felt that this image compliments the dark colours used in the navbar and log of the website and overall creates a pretty looking log in page.

For the Sign up page, I have used a colourful image of the front door of 10 Downing Street. As already mentioned, this is a key building in UK Politics and it is also where The Cabinet meet and it is also the home of the Prime Minister and neighbour to the Chancellor (No11 Downing Street). Additionally, [Larry the Cat](https://en.wikipedia.org/wiki/Larry_(cat)) can be seen in the foreground of the image which is a subtle nod to the fact that Larry is officially the Chief Mouser to the Cabinet Office and has resided in Downing Street for longer than the last 5 Prime Ministers. Larry's presence alongside the colourful image is an invitation to the sites users to register an account with the website.

## Features
### UK Parliament API 
In addition to the information being displayed on the Cabinet.html page, I wanted to go a step further and provide some further details regarding the MPs. I found that there was an official free API for the UK Parliament which allowed me to request information on all the Cabinet Members. I decided to create a new page cabinet_member.html in order to display the details here. The code for this API functionality can be found in cabinet_member.js. When a user clicks on the portrait photo of a Cabinet Minister, that Cabinet Ministers unique page opens with all the information on the page pulled from the API. 

I found this API to be quite easy to use and I enjoyed working with it. 

[UK Parliament Members API](https://members-api.parliament.uk/index.html)


### Planned / Scrapped Features
I had further ideas for additional features for this application but, due to time constraints, these were not implemented.

I would have liked to have expanded the database to include additional cabinet attendees who are not deemed as Cabinet Ministers. Additionally, I would have liked to have added a filter option so that the user can show only a list of Cabinet members by a given condition - e.g. Age over 40, Ministers by Department, Gender etc.  

Further to this, I would have liked to expand the Cabinet_member.html page to obtain more details on the Cabinet Members from the API Calls. 

### Languages Used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [JavaScript](https://en.wikipedia.org/wiki/JavaScript)
-   [Python](https://en.wikipedia.org/wiki/Python_(programming_language))

### Frameworks, Libraries & Programs Used

-   [Materialize 1.0.0](https://materializecss.com/)
    - Materialize was used to assist with the responsiveness, styling and JavaScript components on the website
-   [Google Fonts:](https://fonts.google.com/)
    - Google fonts were used to import the 'Catamaran', 'Poppins' & 'Lora' - further details in Design > Typography section of this file.
-   [Font Awesome:](https://fontawesome.com/)
    - Font Awesome icons were used across the pages which acted as buttons to aid navigation for the user. The Font Awesome Icons themselves were also added for aesthetic and UX purposes.
-   [Flask:](https://flask.palletsprojects.com/en/2.2.x/)
    - The Flask framework was used to build this application and allowed for seamless templating and navigation across the apps various pages.
-   [MongoDB:](https://www.mongodb.com/)
    - The Non-Relational Database was hosted on MongoDB and its data is obtained through the use of PyMongo.

## Data Schema
  ### Users
  - username: String
  - password: String

  ### Cabinet 
  - first_name: String
  - last_name: String
  - role: String
  - constituency: String
  - profile_pic: String
  - no : Integer

## Testing 



### Validator Testing
* HTML
    *   [W3C Validator](https://validator.w3.org/nu/)
        * No major issues in HTML files.
* CSS
    *   [Jigsaw Validator](https://jigsaw.w3.org/css-validator/#validate_by_input)
        * No issues in CSS files.
* JavaScript
    *   [JSlint Validator](https://www.jslint.com/)
        * No major issues in JS files.
* Python
    *   [Python Validator] Pycodestyle in GitPod 
        * No issues issues in python files.


### Responsiveness
Vigorous testing was conducted throughout the development process to ensure that the site maintained responsiveness as more elements were added on. Using developer tools and adjusting screen dimensions, I have checked to ensure that all content displays clearly over a variety of screen sizes - primarily on the Mobile, Tablet and Monitors. As mentioned above, media queries were added to correct responsiveness failings from Materialize. 

### Known Bugs
- No known bugs at this time.

## Credits

#### Resources 
- Code Institute course material
- Code Institute Mentor
- [CodeInstitute-ReadME](https://github.com/Code-Institute-Solutions/SampleREADME)

#### Code
- In the app.py file, the code for Login, Registration and Log Out have been adapted for use from the CodeInstitute lessons which provide a walkthrough on how to create an account with the aid of Werkzeug. This is mentioned in the comments on this file on Lines 34, 60 & 89.

#### Media 
- [HeroImage:PrimeMinisterLizTrussResigns] https://www.flickr.com/photos/number10gov/52441645784/in/faves-196955694@N02/ Number 10 Flickr account
- [LogIn-Background] https://www.flickr.com/photos/97044050@N00/2706292588/ Maurice Flickr
- [SignUp-Background:LarrytheCatsitsunderUkraineFlowerArch] https://www.flickr.com/photos/number10gov/52308010218/in/photolist-2k3f4ae-2kAdvtn-2ifDpAY-MRHP1y-buuiMp-2nGbpXN-aVp57B-2nG4ZdS-pj2tNH-bgYUGT-2ihBerq-2kjHYFF-2qQgHL-2vQBzS-2nGhe49-2kjJvrK-2kjJvvx-2vHcXK-2ihAbcA-2keYMyc-2j4jdz-2ehhMp5-RBRbaB-bwDNEF-2mLwkdY-6bJP4R-wvdMjv-2jGShph-2dZkEuR-2fiAhrJ-2ehhMGQ-2ehhMyd-2ehhMuf-RBRb3T-2dZm37t-a21xic-2foejET-24LFpbn-Tf1Nfw-RBRb2R-RBRaZX-2ehh8SG-2ejA9UU-Tf2bi9-2foetba-2dZm38F-2jkSxhi-2jGRrTZ-2jGRsL5-8WMfFE Number 10 Flickr account
- [RishiSunakPortrait:OfficialportraitofRishiSunak] https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Official_portrait_of_Rishi_Sunak_crop_2.jpg/360px-Official_portrait_of_Rishi_Sunak_crop_2.jpg Chris McAndrew 
- [PennyMordauntPortrait:OfficialportraitofPennyMordaunt] Chris McAndrew 
- All other Cabinet Member Portraits were obtained from https://members.parliament.uk/members/Commons
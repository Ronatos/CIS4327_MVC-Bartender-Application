# CIS4327_MVC-Bartender-Application

## Usage

1. Run ```npm install``` to generate your package-lock.json
2. Run ```npm start``` to launch the app at localhost:3000
3. Select a drink on the menu and then press the Order button.
4. A log should appear in the server console, handling your POST request.
5. The bartender who also happens to be a backend developer will read the log and make the drink.

## Project Instructions

The  context  for  this  assignment  is  bar  patrons  ordering  a  cocktail  via  an  online  application,  and a bartender  preparing  cocktails  based  on  the  order  queue.  In  this  application,  bar  patrons  (customer users)  can  perform  actions  such  as  view the cocktail  menu,  and  place  an  order  for  a  cocktail  drink. Bartender (staff user) should be able to view the cocktail order queue and set them for pick up by server after it is prepared.

To implement this online bartender application using the MVC pattern, you will need a controller to 
handle cocktails order-related actions (create, edit, and view). You will need a model for handling 
data and logic related to cocktail orders. You will need views for displaying the cocktail menu and 
order queue.

The following provides an overview of how the user request is handled:

1. Index page that acts as a homepage for Bartender application from where patrons can access order 
option and from where bartenders can access order queue option.
2. A controller that receives the user request as an HTTP GET or POST request.
3. The controller examines the user request and calls the model asking it to return the cocktails bar 
menu.
4. The model is responsible for getting menu information from the database.
5. The controller will use the appropriate view to display cocktail menu data to the user.
6. The user reviews the menu and places an order for a cocktail drink.
7. The  controller  examines  user  request  and  the  parameters  and  calls  the  model  asking  it  to  store 
cocktail order information in the database.
8. When the bartender chooses the order queue option in the index page, the controller examines the 
user request and calls the model asking it to return the list of cocktail orders.
9. The model is responsible for getting cocktail order information from the database.
10. The controller will use the appropriate view to display cocktail orders to the user.

The purpose of this assignment is to help your team and mentor to assess each team member's skills, 
strengths, and weakness. Also, the purpose of this assignment is to enforce each team member to start 
interacting with your mentor in an attempt to solve this problem. Mentors will use this assignment to 
determine your learning curve and kind of assistance you need to excel in the senior project class.

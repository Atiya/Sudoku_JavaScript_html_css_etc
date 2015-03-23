Darren Moody
XML file use for Assignment 6
CS2550 - Dr. Brian Durney

I decided that I wanted to learn how to use an XML file and a JSON file better so I did both.

I inserted a list of players (using .xml) and a high scores list (using .json) into the "logInfo" div which is seen to the right of the sudoku puzzle on my gameGrid.html page.

JSON - I used my JSON file, highscores.json, to display a list of the high scores, or the fastest time a puzzle has been finished and the player's name who has that time. I used a JavaScript function that I called displayHighScoresJSON(). I used synchronous XMLHttpRequest to get the data from the XML file. I used the parse function like this: var name = JSON.parse(var.responseText); I then created innerHTML and used a <table> for a new div I created for the high scores list. 

XML - My XML file, playerlist.xml, contains a list of "Frequent Players", as I call them. This list is made up of the list of possible usernames found on the username and password web page that we linked to for assignment 5. I used a JavaScript function that I called displayXMLPlayers(), which is a function greatly inspired by the example written by Brian Durney and found at http://universe.tc.uvu.edu/cs2550/assignments/XML/addresses.js. I used synchronous XMLHttpRequest to get the data from the XML file. I then parsed through the data with a for loop which created innerHTML for a new div I created for the list. In displaying the list I used commas to separate the names so I just needed to add an if/else case to the for loop so that no comma was placed after the last name on the list.

BRIAN,

YOU MAY ALREADY KNOW ABOUT THIS.

NOTE ABOUT SYNCHRONOUS XMLHttpRequest();  :
I WAS RECEIVING THE FOLLOWING "WARNING" WHILE USING FIREFOX REFERRING TO THIS SPECIFIC LINE OF CODE:  request.open("GET", "playerlist.xml", false);

WARNING: Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help http://xhr.spec.whatwg.org/

I VISITED THE WEBSITE REFERRED TO IN THE WARNING AND FOUND THE FOLLOWING INFORMATION (QUOTE):

"Synchronous XMLHttpRequest outside of workers is in the process of being removed from the web platform as it has detrimental effects to the end user's experience. (This is a long process that takes many years.) Developers must not pass false for the async argument when the JavaScript global environment is a document environment. User agents are strongly encouraged to warn about such usage in developer tools and may experiment with throwing an InvalidAccessError exception when it occurs."

NO ALTERNATIVE WAS OFFERED AT THE SITE THAT I COULD SEE BUT I THOUGHT YOU MIGHT FIND THIS INTERESTING... AND, YOU PROBABLY ALREADY KNEW THIS.


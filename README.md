# Sudoku_JavaScript_html_css_etc
This is a Sudoku puzzle game that I created for a Web Programming class at UVU. There are five difficulty levels which, the harder the difficulty the more blank cells that the puzzle starts out with. My Sudoku puzzles are created with random numbers and a back-tracking algorithm. Generating our own puzzles was not required for the project, but I really wanted to make it work anyways. Having an infinite number of Sudoku puzzles to play through just makes it that much cooler :-D. This project uses some game features such as using Ajax for loading the puzzles, the player is able to check the board at any time for incorrect answers, a timer that tells how long the player has been working on the given puzzle, a high-scores list (fabricated) and a list of recent players using XMLHttpRequest and XML or JSON files, and also uses HTML5 Media features such as Audio Tags and Canvas functionalities for drawing simple graphics such as the title of the Screen "SUDOKU" floating in to the page from the top-right.. For this GitHub version I have deactivated the use of usernames and passwords checked through a server. This should be compatible with all major web browsers such as Firefox, Internet Explorer, and Chrome. If you download this and are attempting to try it out and run in to problems, try commenting out the lines of code in the .js files that use XMLHttpRequest as some latest browser versions have begun blocking these if they are coming from code "sidescripts" contained on your local hard drive. I think maybe I will comment these lines out anyways, just to make it easier for visitors to try out the game and see what I've created. To play Sudoku just download the entire folder on the "Download ZIP" link in the bottom right of the screen here. Open the folder containing all the files and open the file gameGrid.html and enjoy..

#Project Instructions
<html><head>
<meta name="viewport" content="width=device-width">
<style>
<td> {border: thin solid grey; padding: 3px;}
<table> {border-collapse: collapse;}
</style>
</head>

<body>
<center>
<h2>Project</h2>
</center>

<b>Due:</b> Friday, December 5, 2014<br>

<p>
The term project will be to use HTML, CSS, and JavaScript to implement a web application.
This page describes the project in terms of grid-based puzzles and games.
If you would like to make a different kind of web application for your project, you will
need to get approval from the instructor.
</p>

<p>
A point breakdown for the project is at <a href="#ScoreSummary">the end of
this page</a>.
</p>

<p>
As part of your first assignment you should select a grid-based puzzle
(e.g. Sudoku) or game (e.g., Battleship) that you will implement for
your project.
For simplicity I will use the term "game" to refer to games, puzzles, or
even math problems or science questions.
For each subsequent assignment you will improve the implementation of the game
and add features.
At the end of the term you will turn in the completed game.
Keep in mind that although each assignment adds to the game, finishing all of
the assignments is <b>not</b> enough to get a good grade on the project.
The assignments focus mostly on the user interface, and you will also need to
implement game logic that is not part of any assignment.
</p>

<p>
The main purpose of the assignments and project is to learn how to use
HTML, CSS, and JavaScript to create web applications.
You will learn how to generate HTML from JavaScript, work with user
input in the form of mouse clicks and text input, dynamically change
the style (CSS) of HTML elements, and load information from the server
without reloading the entire HTML document (Ajax).
Our projects will make use of HTML tables because there are many games
that make use of grids of one kind or another, but we will use the
same techniques that are used with other kinds of HTML elements and layouts.
</p>

<p>
There are many games from which you can choose, including classics like
chess and checkers, and relatively new games like Sudoku.
Here is a list of possibilities:
</p>

<table>
<tbody><tr valign="top"><td style="width: 10em; border: none;">
<ul>
<li>chess</li>
<li>checkers</li>
<li>crossword puzzles</li>
<li>word search</li>
</ul>
</td><td style="width: 10em; border: none;">
<ul>
<li>Battleship</li>
<li>Minesweeper</li>
<li>Sudoku</li>
<li>Concentration (matching game)</li>
</ul>
</td><td style="width: 10em; border: none;">
<ul>
<li>Othello/Reversi</li>
<li>adventure/dungeon game map</li>
<li>sliding tile puzzle</li>
<li>Black Box</li>
</ul>
</td></tr>
</tbody></table>

<p>
Two other possibilities for projects that are not games are an event calendar
and an expense tracker.
Like the games listed above, these applications make use of a grid and
therefore work well with the assignment specifications, which are written in
terms of grids.
</p>

<p>
Since there are many possibilities for games, I have written the assignment
specifications in general terms.
It is very important that you do every assignment, even if it doesn't seem
to fit your game very well.
For the final version of your game you can leave out elements that don't fit,
as long as you satisfy the project requirements listed at the end of this
page.
</p>

<p>
I am asking you to choose a project early in the term, before you get a
chance to see how JavaScript web applications work.
If you decide later that your project is too ambitious, or you find
something more interesting, you can change your project.
Just send me email to get my approval of your new project.
</p>

<p>
Assignments will focus primarily on the interface.
Over the course of the term you will need to write JavaScript code to
implement the logic for your game.
The JavaScript code for the game logic should be core JavaScript and
<i>not</i> make use of client-side JavaScript functions or refer directly
to web-page elements.
</p>

<p>
For the final project you will integrate code from the assignments with
the game logic code to make a complete, functional game.
Not every assignment will be relevant for every game, but you should do
the assignments in such a way that they fit into the overall game as well
as possible.
If you are not sure how an assignment relates to your game, talk to me.
</p>

<h3>Game functionality</h3>
<p>
<b>In order to earn full credit for the final project, you will need to
implement a playable game that includes reasonable functionality.</b>
For the game to be playable, it must include some kind of a challenge,
provide variety, must be reasonably easy to use (without lots of
alerts), and must contain some element of fun.
For projects that are not games (such as the event calendar or expense
tracker), think in terms of usefulness rather than playability and fun.
Ease of use is important for games and for other kinds of projects.
</p>

<p>
Here are some descriptions of game functionality that would be sufficient for
full credit:
</p>
<ul>
<li><b>
Battleship:
</b>
There is a computer player (game AI) that plays against a human
player.
Ships take up multiple grid squares, with each type of ship having a
different number of ships (aircraft carrier 5, battleship 4, etc.).
Ships are randomly placed by the program, or the player is allowed to
place ships.
Whether or not the ships are placed by the program, the program
ensures that all ships are within the bounds of the grid.
There are two grids, one for the player and one for the computer
player.
Hits and misses are marked on each grid.
The program notifies the player when a ship on either grid has been
sunk, and the program indicates when the game is over and which
player won.
The computer player (game AI) makes follow-up shots when it hits, so
that whenever it hits one of the player's ships it fires at adjacent
squares until it has sunk the ship. 
</li>
<br>
<li><b>
Sudoku:
</b>
Given numbers are in a different style than user-entered numbers, and
preferably given numbers cannot be changed.
The player can get feedback on incorrect numbers at any time.
There are multiple difficulty levels and multiple puzzles to choose
from in each difficulty level.
Puzzles are loaded using Ajax.
Your program does not have to generate new puzzles.
<!-- NOT A REQUIREMENT FOR SUMMER-->
There is a timer that tells how long the player has been working on
the puzzle.
<!--
and a list of high scores based on the time required to
complete the puzzle.
-->
Please put the solution to one puzzle on the game description page
or on the game grid so that I can easily test your game.
</li>

<br>
<li><b>
Concentration/Memory
</b>
The program displays the backs of the cards in the grid and lets the
player turn over two cards at a time.
If the cards match, the cards are left face-up and the computer
records the match (increasing the player's score).
If the cards don't match, the computer changes them back to face down
after giving the player a chance to see what they both are.
The card fronts and backs are images.
There is more than one deck of cards (card fronts) and the player can choose
which deck to use.
Each deck represents a theme or category, like animals, cars, food, etc.
There are different difficulty levels based on how many cards are in
the grid and the amount of time allowed.
The program only allows a fixed amount of time, and the score is the
number of matches found within that time period.
<!--
The program keeps track of high scores for each level of difficulty.
-->
</li>
<br>
<li><b>
Minesweeper
</b>
The program generates a different mine configuration for each game.
The player can flag squares in the grid as mines, and can also change
a square back to being unflagged.
Flagged squares should be indicated by an appropriate image, and revealed
mines should also be represented by images.
The program tells how many mines are in the grid and displays the
number of mines that have been flagged at any given time.
If a zero square is clicked, all adjacent zero squares (recursively)
are also revealed.
All non-zero squares adjacent to the revealed zero squares are also revealed.
The player can choose the size of the puzzle and the number of mines.
The program displays a message when the game is over (a mine is clicked, or all
non-mine squares have been revealed and all mine squares arecorrectly flagged).
</li>
<br>

<li><b>
Word Search:
</b>
There are multiple pre-generated puzzles to choose from, loaded using
Ajax.
There is a list of words to find in the puzzle.
The player can click on the start of a word and then the end of the
word.
The letters between the first click and the second click are highlighted.
If the selected word is in the list, the program checks it off in the
list.
If the selected word is not in the list, the program displays a
message with that information, and the highlighting is removed from
the letters.
<!-- NOT A REQUIREMENT FOR SUMMER-->
There is a timer that tells how long the player has been working on
the puzzle.
<!-- 
and a list of high scores based on the time required to
complete the puzzle.
-->
</li>
<br>

<li><b>
Chess or Checkers
</b>
For Chess and Checkers, your game should be set up for two human players.
Chess pieces should be represented by images.
Checkers should be represented by filled-in circles or images.
The program sets up the pieces on the board.
The program allows the user(s) to enter two player names and assign
each player a color.
The program alternates between players, allowing each to take a turn.
Only legal moves are allowed.
In checkers, kings should be easily distinguished from regular checkers
and they should be allowed to move (and jump) backward.
In chess, you don't have to handle castling, pawn promotion or
<i>en passant</i>, but you
do need to allow pawns to move two squares for their first move, and
only allow pawns to capture diagonally.
Your program does not have to detect check or checkmate.
For checkers, the program indicates when the game is over and which player
won.
</li>
<br>
<li><b>
Sliding tile puzzle
</b>
The player can choose from at least three different puzzles, and at
least one of the puzzles is an image (with each tile showing one part of
the image). 
When the player clicks on a tile adjacent to the hole, that tile is
moved into the hole.
Movement of tiles should be animated so that tiles move gradually into
their new position.
There is a timer that tells how long the player has been working on the puzzle.
There is a "new game" button that resets the timer and randomizes the puzzle.
<!--
, and the program keeps track of high scores based on
the timer.
-->
</li>
<br>
<li><b>
Event calendar
</b>
The calendar shows a grid representing the current month, with the days of the
week listed across the top and the day of the month displayed in each square.
Each square also shows a number that tells how many events have been created
for that day.
There is a button to move to the next month, and another button to move to the
previous month.
Clicking on a square changes the view to show a table of the events for the day.
Each event has a start time, a duration, a name, a place, and notes.
Above the table is the day of the year (like August 27, 2012)
There are two buttons on the day view.
One button returns to the month view and the other button allows the user to create
a new event for that day.
The event calendar should be initialized with sample data so that it's
easy to determine whether it has all of the required functionality.
</li>
<br>
<li><b>
Expense tracker
</b>
The expense tracker allows the user to define any number of categories of
expenses.
Each category has a name and a budgeted amount.
The display includes a button that the user can click to add a new category
and a button to add a new expense item.
Each expense item has a category, an amount, a date, a form of payment (check,
credit card, cash, etc.), and a description.
When the user creates a new expense item, the program displays the expense item
in the proper category, with expenses in the same category sorted by date.
The heading for each category tells the name of the category, the budgeted
amount, the total of all current expenses in the category, and the difference
between the total and the budgeted amount.
The table row for each expense item includes a button that can be clicked to
delete that item.
The expense tracker should be initialized with sample data so that it's
easy to determine whether it has all of the required functionality.
</li>
</ul>

<!--
<p>
Since summer term is only seven weeks long, I recommend that you use
one of the following games for your project: Battleship, Sudoku,
Concentration, or Minesweeper.
</p>
-->

<p>
It's especially important to keep your project simple if you don't
have previous experience with HTML and JavaScript, or if you don't
have much experience with programming in general.
If you want to do a game for which I have not described the game
functionality, please talk to me about what you plan to do for your project
and the game functionality.
</p>

<h3>Model and view</h3>
<p>
It's important to decide how you will store the information needed for your game.
For example, in the game of Battleship, you need to store information about where
ships are in the grid, the player's shots, the computer's shots, and so on.
That kind of game data is called the model.
In this class, we will be using JavaScript arrays and objects for the model.
You will need to decide what kind of arrays and objects you need, and how many.
</p>

<p>
The views for your game will be various HTML elements.
It's important to make the view independent of the model, so that the view can
be changed without changing the model.
</p>

<p>
The Model View Controller (MVC) design pattern is very commonly used
in software development.
One of the advantages of using MVC is that the same model can be used with many
different kinds of views.
For example, you could start out with a very simple view that uses lines of text to
show the locations of ships and shots in the grid.
Later, you could make a view to show images instead of characters.
You could use that view without making any changes to the model.
You could incorporate animation, video, audio, and renderings of 3D models into
the view also, and still not have to change the model.
We won't be studying MVC in this class, except for the basic idea of separating the
model from the view, but you should be aware that it is an important design pattern.
</p>

<h3>Project checkpoints</h3>
<p>
One assignment will be a project checkpoint that is worth 25 points more
than regular assignments.
The additional 25 points will be for demonstrating some part of the
game logic for your project.
</p>

<h3>HTML5</h3>
<p>
Choose one of the following features of HTML5 to use in your final
project: audio tags, video tags, canvas (drawing graphics with
JavaScript), or local storage.
Audio and video should be controlled by your JavaScript code, not by the
user.
<br>
NOTE: Using local storage to save login information (as in Assignment 5)
does <i>not</i> satisfy this requirement.
Along the same lines, simply storing a user or player name in local
storage does not satisfy this requirement either.
Your use of local storage should relate to your particular game.
</p>

<h3>XML or JSON</h3>
<p>
Your project should load XML or JSON game data using XMLHttpRequest.
You can use your work for Assignment 6 to satisfy this requirement, but
the log-in functionality for Assignment 5 does <i>not</i> satisfy this
requirement.
</p>

<h3>Notes</h3>

<ul><li>
For the project, please don't require a password to log in to your
game page.
</li><li>
Don't include the animation from the Assignment 4 unless it is relevant for
your game.
</li></ul>

<h3>Extra Credit</h3>

<p>
If you include two different HTML5 components in your project, I will
give you extra credit for the second component.
See the Points breakdown at the bottom of this page for the number of
points.
</p>

<p>
For purposes of extra credit, I consider audio and video to be the
same.
That means that if you use audio for one HTML5 component, the second
one needs to be local storage or canvas (not video).
</p>

<h3>Turning in the final project</h3>

<p>
See the top of this page or the course schedule for the due date of the final
project.
Submit a zip file with your project files in it by uploading it in Canvas.
<!--
Submit a zip file with your project files in it using the <b>Submit</b>
link on the <a href="../index.html">class page</a> on my server.
-->
</p>

<a name="ScoreSummary">
<h3>Score Summary</h3>
</a>

<p>
Here is the score summary for the project:<btr>
<table>
<tbody><tr><td style="text-align: right">
10
</td><td>
Documentation explaining how you implemented your game and
how it satisfies the remainder of the requirements.
The documentation should be in a file named <tt>documentation.html</tt>,
with a link to the documentation file on the project description page.
</td></tr>
<tr><td style="text-align: right">
20
</td><td>
Game grid that uses CSS and is generated by JavaScript
</td></tr>
<tr><td style="text-align: right">
20
</td><td>
User input in the form of text, select options, and/or buttons
</td></tr>
<tr><td style="text-align: right">
20
</td><td>
User input in the form of mouse clicks
</td></tr>
<tr><td style="text-align: right">
20
</td><td>
Dynamic modification of HTML using innerHTML or DOM functions
</td></tr>
<tr><td style="text-align: right">
20
</td><td>
Use of XMLHttpRequest to load JSON or XML game data that is displayed
on the grid page
</td></tr>
<tr><td style="text-align: right">
20
</td><td>
Incorporates HTML 5 audio tags, video tags, canvas, or local storage
</td></tr>
<tr><td style="text-align: right">
120
</td><td>
Game logic code
</td></tr>
<tr><td style="text-align: right">
20
</td><td>
<b>Extra Credit</b> Include a second HTML5 component.  If your first
HTML5 component is media (audio or video) then your second component
can't be a media component.
</td></tr>
<tr><td style="text-align: right">
250
</td><td>
TOTAL
</td></tr>
</tbody></table>
</btr></p>



</body></html>

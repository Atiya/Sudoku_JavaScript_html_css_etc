/* File Prologue:
 * Name:            Darren Moody
 * Class:           CS2550-001
 * Professor:       Dr. Brian Durney
 * Assignment:      Assignment 2,3,4,5,6, Final
 * File Name:       SudokuView.js
 * 
 * Description:     The View file for my Sudoku project in JavaScript
 * 
 * HTML, CSS, or images should be HERE in the VIEW part of your program
 * "For this assignment, don't worry about separating the controller from the view."
 * 
 */

//Initialize classesArray to keep track of how the elements are solved.
var classesArray = [];
for (var elem = 0; elem < 81; elem++)
{
    classesArray[elem] = "";
}

var time = 0;
var timer;
var selected;
var removed = false;
var gameGrid;

buildDOMSudokuGrid();

function UpdateTimer()
{
    var c_minutes = parseInt(time / 60);
    var c_seconds = CheckTime(parseInt(time % 60));
    document.getElementById("time").innerHTML = c_minutes + ':' + c_seconds;
    time++;
}

function CheckTime(i)
{
    if (i < 10)
        i = '0' + i;
    return i;
}

function resetTimer()
{
    stopTimer();
    document.getElementById("time").innerHTML = "";
    time = 0;
}

function startTimer()
{
    UpdateTimer();
    timer = setInterval(function() {
        UpdateTimer()
    }, 1000);
}

function stopTimer()
{
    clearInterval(timer);
}

function handleDiff(value)
{
    if (!removed)
    {
        var difficulty = document.getElementById("difficulty");
		var txtfld = document.getElementById("textfield");
		txtfld.style.color = "#00f";
		txtfld.value = "Difficulty = " + difficulty.options[difficulty.selectedIndex].text
		+ ", click a square to see possible answers.";
        difficulty.remove(0);
        removed = true;
    }
    game = MySudoku.Sudoku.generate();
    gameGrid = game.toArray();
    MySudoku.Sudoku.cull(game, value);
    LoadGame(game.toArray());
    clearKeypad();
    resetTimer();
    startTimer();
}

function populateKeypad(cell)
{
    var classList = cell.attr('class').split(/\s+/);
    var keypad = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    $.each(classList, function(index, name)
    {
        if (name != "empty")
        {
            $(".sudoku ." + name).each(function()
            {
                if ($(this).text() != "&nbsp;")
                {
                    remove(keypad, $(this).text());
                }
            });
        }
    });
    for (var i = 1; i <= 9; i++)
    {
        var key = $(".keypad #k" + i);
        key.html("&nbsp;");
		key.css('fontWeight', 'bold');
        if ($.inArray(i + "", keypad) != -1)
        {
            key.text(i);
        }
    }
}
;

function clearKeypad()
{
    for (var i = 1; i <= 9; i++)
    {
        var key = $(".keypad #k" + i);
        key.html("&nbsp;");
    }
}
;

function remove(arr, item)
{
    for (var i = arr.length; i--; )
    {
        if (arr[i] === item)
        {
            arr.splice(i, 1);
        }
    }
}
;

function checkBoard()
{
    for (var elem = 0; elem < 81; elem++)
    {
        if (document.getElementById("elem" + elem).innerHTML == "&nbsp;")
            return false;
    }
    return true;
}

function finishGame()
{
    var elem = document.getElementById("textfield");
	elem.style.color = "#00f";
    stopTimer();
    clearKeypad();
    elem.value = ("Congratulations! " 
	+ document.getElementById("difficulty").options[document.getElementById("difficulty").selectedIndex].text 
	+ " game finished in " + document.getElementById("time").innerHTML + " !");
	document.getElementById("win").play(); // This uses audio tags from bottom part of GameGrid.html
	/*var winner = new Audio("Cheering1.wav");
		winner.play();*/
}

var row;
var col;
$(".sudoku td div").click(function(event)
{
    var cell = $("#" + event.target.id);
    var cellPosition = document.getElementById("textfield");
	cellPosition.style.color = "#00f";
	var cellstr = "";
	cellstr += "This is the cell at "

    if (cell.hasClass("empty"))
    {
        if (selected)
        {
            if (selected.attr("id") == cell.attr("id"))
            {
                selected.css('background-color', 'white');
                clearKeypad();
                selected = null;
            }
            else
            {
                selected.css('background-color', 'white');
                cell.css('background-color', 'lightblue');
                selected = cell;
                populateKeypad(cell);
            }
        }
        else
        {
            cell.css('background-color', 'lightblue');
            selected = cell;
            populateKeypad(cell);
        }

        var cellNum;
        //var tempCol = null;
        for (var i = 0; i < 81; i++)
        {
            if (cell.attr("id") == $("#elem" + i))
            {
                cellNum = i;
            }
        }

        cellPosition.value = "This is the cell at " + cell.attr("class") + ". Choose a number possibility above!";
    }
    event.preventDefault();
});

$(".keypad td div").click(function(event)
{
    if (selected)
    {
        var key = $("#" + event.target.id);
        selected.html(key.html());
        selected.css('background-color', 'white');
        if (checkBoard())
            finishGame();
        clearKeypad();
        selected = null;
    }
});

$(".keypad td div").mouseleave(function(event)
{
    var cell = $("#" + event.target.id);
    cell.css('background-color', 'white');
    event.preventDefault();
});

$(".keypad td div").mouseenter(function(event)
{
    var cell = $("#" + event.target.id);
    if (cell.html() != "&nbsp;")
    {
        cell.css('background-color', 'yellow');
    }
    else
    {
        cell.css('background-color', 'white');
    }
    event.preventDefault();
});

$(".sudoku td div").mouseenter(function(event)
{
    var cell = $("#" + event.target.id);
    if (cell.html() == "&nbsp;")
    {
        if (selected == null)
        {
            cell.css('background-color', 'yellow');
        }
        else if (cell.attr("id") != selected.attr("id"))
        {
            cell.css('background-color', 'yellow');
        }
    }
    event.preventDefault();
});

$(".sudoku td div").mouseleave(function(event)
{
    var cell = $("#" + event.target.id);

    if (cell.html() == "&nbsp;")
    {
        if (selected == null)
        {
            cell.css('background-color', 'white');
        }
        else if (cell.attr("id") != selected.attr("id"))
        {
            cell.css('background-color', 'white');
        }
    }
    event.preventDefault();
});

$("#new_game").click(function(event)
{
    if (!removed)
        return;
    var reply = confirm("Do you really want a new game?");
    if (reply)
    {
        var game = MySudoku.Sudoku.generate(); 
        gameGrid = game.toArray();
        var difficulty = document.getElementById("difficulty");
        MySudoku.Sudoku.cull(game, difficulty.value);
        LoadGame(game.toArray());
        clearKeypad();
        resetTimer();
        startTimer();
    }
});

$("#check").click(function() {
	//var no = new Audio("OhNo.wav");
	//var yes = new Audio("Yes.wav");
    if (!removed)
        return;
    var reply = confirm("Do you really want me to check this game?");
    if (!reply)
        return;
	var counter = 0;
    var error = false;
    for (var e = 0; e < 81; e++) {
        var cell = $("#elem" + e);
        if (cell.html() != "&nbsp;")
            if (cell.html() != gameGrid[e]) {
                cell.css('background-color', 'red');
                error = true;
				counter = counter + 1;
				if (counter == 1)
				{
					document.getElementById("no").play(); // This uses audio tags from bottom part of gameGrid.html
					//no.play();
					var elem = document.getElementById("textfield");
					elem.style.color = "#ED2711";
					elem.value = ("Incorrect answers are highlighted in RED!");
					//elem.style.color = "#000000";
				}
            }
    }
	
    if (!error)
	{
		document.getElementById("yes").play(); // This uses HTML audio tags from bottom part of gameGrid.html
		//yes.play();
        alert("Answers are good so far!");
	}
	
    clearKeypad();
});

$("#clear").click(function(event) {
    if (!removed)
        return;

    var reply = confirm("Do you really want to clear your answers and start this game over?");
    if (reply) {
        for (var e = 0; e < 81; e++) {
            var elem = $("#elem" + e);
            if (elem.hasClass("empty")) {
                elem.html("&nbsp;");
                elem.css('background-color', 'white');
            }
        }

        resetTimer();
        startTimer();
    }
    clearKeypad();
    event.preventDefault();
});

$("#solve").click(function()
{
    if (!removed)
        return;
    var reply = confirm("Do you really want me to solve this game?");
    if (!reply)
        return;

    stopTimer();

    for (var e = 0; e < 81; e++)
    {
        var cell = $("#elem" + e);
        if (cell.hasClass("empty"))
            cell.css('background-color', 'white');
        cell.html(gameGrid[e]);
    }

    clearKeypad();
});


function buildDOMSudokuGrid()
{
    // Create "view" sudoku grid
    var HTML = '<table class="sudoku" style="table-layout:fixed;">\n';
    HTML += '<tbody class="s0" >\n';
    var elem = 0
    var s = 1;
    for (row = 0; row < 9; row++)
    {
        if (row == 3 || row == 6)
        {
            HTML += "</tbody>\n";
            HTML += '<tbody class="s' + s + '" >\n';
            s++;
        }

        HTML += '<tr class="r' + row + '">\n';
        for (col = 0; col < 9; col++)
        {
            var group;
            if (col >= 0 && col <= 2)
            {
                if (row >= 0 && row <= 2)
                    group = "g1"
                else if (row >= 3 && row <= 5)
                    group = "g2";
                else
                    group = "g3";
            }
            else if (col >= 3 && col <= 5)
            {
                if (row >= 0 && row <= 2)
                    group = "g4"
                else if (row >= 3 && row <= 5)
                    group = "g5";
                else
                    group = "g6";
            }
            else if (col >= 6)
            {
                if (row >= 0 && row <= 2)
                    group = "g7"
                else if (row >= 3 && row <= 5)
                    group = "g8";
                else
                    group = "g9";
            }
            HTML += '<td class="c' + col + '" ><div  class="col' + col + ' row' + row + ' ' 
			+ group + '" id="elem' + elem + '"><div></td>\n';
            elem++;
        }
        HTML += "</tr>\n";
    }
    HTML += "</tbody>\n";
    HTML += "</table>\n";
	document.getElementById("grid").innerHTML = HTML;
	var txtfld = document.getElementById("textfield");
		txtfld.style.color = "#00f";
		txtfld.value = "Welcome to Sudoku by Darren Moody! - Select difficulty to begin.";
    displayLogin();
}
;

function LoadGame(game)
{
    for (var i = 0; i < 81; i++)
    {
		var cell = document.getElementById("elem" + i);
        if (game[i] == 0)
        {
			cell.style.backgroundColor = "white";
			cell.style.color = "#000000";
			cell.style.fontWeight = "bold";
			cell.innerHTML = "&nbsp;";
			cell.classList.add("empty");
        }
        else
        {
			cell.innerHTML = game[i];
			cell.style.backgroundColor = "#EBEAE8";
			cell.style.color = "#00f";
			cell.style.fontWeight = "bold";
			cell.classList.remove("empty");
        }
    }
    selected = null;
	var difficulty = document.getElementById("difficulty");
		var txtfld = document.getElementById("textfield");
		txtfld.style.color = "#00f";
		txtfld.value = "Difficulty = " + difficulty.options[difficulty.selectedIndex].text
		+ ", click a square to see possible answers.";
}

var animImg, msPerFrame, moveDist, animDivWidth;
var botLeft;
var margin = 10;

// Starts 'Sudoku' image moving from right to left
function startMove() {
    animImg = document.getElementById("animImg");
    msPerFrame = 10;
    moveDist = 2;

    var animDiv = document.getElementById("animDiv");
    animDivWidth = ((animDiv.offsetWidth / 2) + 165); //Finds the center stopping point

    botLeft = 0;
    setTimeout(moveImg, msPerFrame);
}

// Does the image moving
function moveImg() {
    botLeft += moveDist;
    animImg.style.right = botLeft + "px";

    if (botLeft < animDivWidth - animImg.width - margin) {
        setTimeout(moveImg, msPerFrame);
    }
}

// Check to see if there is already a log-in cookie
function checkCookie() {
    if (document.cookie.indexOf("cs2550timestamp") == -1) {
        login();
    }
    else {
        window.open('gameGrid.html', 'Sudoku CS2550')
    }
}

// Prompts for user login
function login() {
    document.getElementById("login").innerHTML = "<div id='userlogin'>" +
            "<div id='close'>" +
            "<a href=''><img src='closeLogin.png' onclick='closeLogin()' onmouseover=\"this.src='changeHoverClose.png'\" onmouseout=\"this.src='closeLogin.png'\" border='0'/></a></div>" +
            "<center><h2>Login to Play</h2>" +
            "Username: <input type='text' id='username'/><br/>" +
            "Password: &nbsp;<input type='password' id='password' onkeypress='return enterPassword(event)' /><br/><br/>" +
            "<input type='button' value='Login'" +
            "onclick='loadSyncPost()' class='button'/>  <input type='button' value='Cancel' class='button' onclick='closeLogin()' />" +
            "</center></div>" +
            "<div id='cover' onclick='closeLogin()'></div>";
    document.getElementById("username").focus();
}

// Displays login information in the sudoku gameGrid page
function displayLogin() {
    var logDiv = document.getElementById("loginfo");
    logDiv.innerHTML = "<center>" +
            "<b>Welcome, " + getName() + "!</b><br/>" +
            "<b>Last login was: " + getDate() + "</b><br/>" + "<b>at " + getCookieTime() + "</b>" +
            "<br/><br/>" +
            "<input type='button' value='Back to Login' class='button' onclick='backtoLogin()'/><br/><br/>" +
            "<input type='button' value='Logout-clear login' class='button' onclick='logout()'/><br/><br/>" +
            "<div id='playersxml'></div>" +
            "<div id='highscores'></div>" +
            "</center>";
    //displayXMLPlayers(); // COMMENTING OUT FOR PLACEMENT ON GITHUB.COM
    //displayHighScoresJSON(); // COMMENTING OUT FOR PLACEMENT ON GITHUB.COM
    /*var elem = document.getElementById("textfield");
     elem.value = ("Welcome " + getName() + "! Last login was: " + getDate() + " at " + getCookieTime());*/
}
/* // COMMENTING OUT FOR PLACEMENT ON GITHUB.COM. MOST NEWER BROWSER VERSIONS WILL NOT ALLOW AN 
   // XMLHttpRequest COMING FROM A LOCAL FILE POSITION ON YOUR HARD DRIVE. COMMENTING THIS OUT WILL 
   // ENSURE THAT THE GAME WILL FUNCTION PROPERLY FOR ANYONE WHO WANTS TO GIVE IT A TRY, WITHOUT 
   // HAVING TO TWEAK THE SECURITY SETTINGS ON THEIR BROWSER, WHICH CAN BE A PAIN...
   
   
// Display player information from players.xml
function displayXMLPlayers() {
    // This code is inspired by the function getAddresses()
    // written by Dr. Brian Durney and found at
    // http://universe.tc.uvu.edu/cs2550/assignments/XML/addresses.js and 
    // a similar example can be found in Example 21-7 in 
    // JavaScript: The Definitive Guide by David Flanagan
    
    var request = new XMLHttpRequest();
    request.open("GET", "playerlist.xml", false);
    request.send(null);
    
    var xmldiv = document.getElementById("playersxml");
    var html = "";
    var playerxml = request.responseXML;
    var xmlrows = playerxml.getElementsByTagName("player");
    html = "<b style='color:#00f;'>Frequent Players:</b><br/>";
    for (var r = 0; r < xmlrows.length; r++) {
        var xmlrow = xmlrows[r];
        if(r == xmlrows.length-1){ // Will not add comma on last name...
            html+= xmlrow.getAttribute("name");
        }
        else{ 
            html += xmlrow.getAttribute("name") + ", ";
        }
    }
    xmldiv.innerHTML += html + "<br/><br/>";
}

// Uses .JSON file to display high scores list from the "frequent players" for one difficulty...
function displayHighScoresJSON() {
    var requestLocal = new XMLHttpRequest();
    
    requestLocal.open("GET", "highscores.json", false);
    requestLocal.setRequestHeader("Content-Type", "application/json");
    requestLocal.send();
    
    // Won't need this part, JSON is stored locally 
        //if(localRequest.status != 200) {
        //    alert("Request failed " + localRequest.status + ": " + localRequest.statusText);
        //    return;
        //}
    //
   var highScoresDiv = document.getElementById("highscores");
   var json = JSON.parse(requestLocal.responseText);
   
   highScoresDiv.innerHTML = "<b style='color:#00f;'>High Scores:</b><br/>";
   highScoresDiv.innerHTML += "<table>" +
           "<tr>" +
           "<td>Easy: " + json.Easy.name + "</td>" +
           "</tr>" +
           "<tr>" +
           "<td>" + json.Easy.minutes + " minutes</td><td>" + json.Easy.seconds + " seconds</td>" +
           "</tr>" + 
           "<tr>" +
           "<td>Medium: " + json.Medium.name + "</td>" +
           "</tr>" +
           "<tr>" +
           "<td>" + json.Medium.minutes + " minutes</td><td>" + json.Medium.seconds + " seconds</td>" +
           "</tr>" + 
           "<tr>" +
           "<td>Hard: " + json.Hard.name + "</td>" +
           "</tr>" +
           "<tr>" +
           "<td>" + json.Hard.minutes + " minutes</td><td>" + json.Hard.seconds + " seconds</td>" +
           "</tr>" + 
           "<tr>" +
           "<td>Very_Hard: " + json.Very_Hard.name + "</td>" +
           "</tr>" +
           "<tr>" +
           "<td>" + json.Very_Hard.minutes + " minutes</td><td>" + json.Very_Hard.seconds + " seconds</td>" +
           "</tr>" + 
           "<tr>" +
           "<td>Extra_Hard: " + json.Extra_Hard.name + "</td>" +
           "</tr>" +
           "<tr>" +
           "<td>" + json.Extra_Hard.minutes + " minutes</td><td>" + json.Extra_Hard.seconds + " seconds</td>" +
           "</tr>" + 
           "</table>";
   
}
*/
// Closes login pop up
function closeLogin() {
    document.body.removeChild(document.getElementById("login"));
    location.reload();
}
function backtoLogin()
{
    window.open('index.html', 'Sudoku CS2550');
}
// Can press enter to login
function enterPassword(evt) {
    evt = (evt) ? evt : event;
    var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode :
            ((evt.which) ? evt.which : 0));
    if (charCode == 13) {
        loadSyncPost();
    }
}

// Validates user login and brings user to game page
var wrong = false;
function loadSyncPost() {
    var name = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var data = "userName=" + name + "&password=" + password;
    var localRequest = new XMLHttpRequest();

    localRequest.open("POST", "http://universe.tc.uvu.edu/cs2550/assignments/PasswordCheck/check.php", false);
    localRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    localRequest.send(data);

    if (localRequest.status == 200) {
        var response = JSON.parse(localRequest.responseText);
        if (response["result"] == "valid") {
            window.open('gameGrid.html', 'Sudoku CS2550');
            document.cookie = "cs2550timestamp=" + response["userName"] + " " + response["timestamp"];
            closeLogin();
        }
        else {
            if (!wrong) {
                document.getElementById("userlogin").innerHTML += "<br/><center><span style='color:#952521'>Invalid username/password</span></center>";
                wrong = true;
            }
        }
    }
}

// PLEASE NOTE: Cookies are saved on a user's local storage of their computer
// Returns username of cookie
function getName() {
    var cookieArray = document.cookie.split(' ');
    return cookieArray[0].substring(16);
}

// Returns login date from cookie
function getDate() {
    var cookieArray = document.cookie.split(' ');
    return cookieArray[1];
}

// Returns login time from cookie
function getCookieTime() {
    var cookieArray = document.cookie.split(' ');
    return cookieArray[2];
}

// Resets/Clears user cookie and reloads page
function logout() {
    document.cookie = 'cs2550timestamp=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    window.open('gameGrid.html', 'Sudoku CS2550');
}
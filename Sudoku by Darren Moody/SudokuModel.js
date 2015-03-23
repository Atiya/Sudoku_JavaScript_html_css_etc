/* File Prologue:
 * Name:            Darren Moody
 * Class:           CS2550-001
 * Professor:       Dr. Brian Durney
 * Assignment:      Assignment 2,3,4,5,6, Final
 * File Name:       SudokuModel.js
 * 
 * Description:     The Model file for my Sudoku project in JavaScript
 * 
 * The Model should not contain any HTML, CSS, or images
 * Model includes state of the game, location of generated and userEntered nums
 * Creates and validates the correctness of the user's answers
 * Creates objects, or classes, that enable the data to be referenced from 
 * the view script. 
 *  
 * "For this assignment, don't worry about separating the controller from the view."
 * 
 */

// If a game is not already loaded...Create game objects (model)
if (!MySudoku)
    var MySudoku = {}; // Create object that can be passed to the view
MySudoku.Sudoku = {

    // Creates a new random puzzle using backtracking algorithm
    generate: function() {
        var grid = new MySudoku.sudoku.Grid();

        // Keep track of all numbers tried in every cell
        var cellNumbers = [];
        for (var i = 0; i < 81; i++) {
            cellNumbers[i] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        }

        for (var i = 0; i < 81; i++) {
            var good = false;
            var row = Math.floor(i / 9);
            var col = i - (row * 9);

            while (cellNumbers[i].length > 0) {
                //Get a random number to try
                var rnd = Math.floor(Math.random() * cellNumbers[i].length);
                var num = cellNumbers[i].splice(rnd, 1)[0];

                grid.setValue(col, row, num);
				// Check if the number will work with the puzzle generated so far
                if (!grid.cellConflicts(col, row)) {
                    good = true;
                    break;
                } else {
                    grid.setValue(col, row, 0);
                    good = false;
                    continue;
                }
            }

            //If a possible number was not found, backtrack
            if (!good) {
                //After backtracking we can try all numbers here again
                cellNumbers[i] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

                // The loop increments by one so step back by -2
                i -= 2;
            }
        }
        return grid;
    },
    
    // Randomly removes a certain number of answers from the board depending on difficulty
    cull: function(grid, amount) {
        var cells = [];
        for (var i = 0; i < 81; i++)
            cells.push(i);

        for (var i = 0; i < amount; i++) {
            var rnd = Math.floor(Math.random() * cells.length);
            var value = cells.splice(rnd, 1);
            var row = Math.floor(value / 9);
            var col = value - (row * 9);

            grid.setValue(col, row, 0);
        }
    }
};

MySudoku.sudoku = {}; // Create object that can be passed to the view

// Represents a sudoku grid
MySudoku.sudoku.Grid = function() {
    this.rows = [];
    for (var row = 0; row < 9; row++) {
        var cols = [];
        for (var col = 0; col < 9; col++)
            cols[col] = 0;

        this.rows[row] = cols;
    }
};

// Sudoku grid prototype object 
MySudoku.sudoku.Grid.prototype = {
    rows: [],
    
    getValue: function(col, row) {
        return this.rows[row][col];
    },
    
    setValue: function(column, row, value) {
        this.rows[row][column] = value;
    },
    
    cellConflicts: function(column, row) {
        var value = this.rows[row][column];

        if (value == 0)
            return false;

        for (var i = 0; i < 9; i++) {
            if (i != row && this.rows[i][column] == value) {
                return true;
            }

            if (i != column && this.rows[row][i] == value) {
                return true;
            }
        }
        // Everything is checked as valid except the 3x3 grid        
        return !this._miniGridValid(column, row);
    },
    
    // Checks the inner 3x3 grid for conflicts
    _miniGridValid: function(column, row) {
        //Determine 3x3 grid position
        var mgX = Math.floor(column / 3);
        var mgY = Math.floor(row / 3);

        var startCol = mgX * 3;
        var startRow = mgY * 3;

        var endCol = (mgX + 1) * 3;
        var endRow = (mgY + 1) * 3;

        var numbers = [];
        for (var r = startRow; r < endRow; r++) {
            for (var c = startCol; c < endCol; c++) {
                var value = this.rows[r][c];
                if (value == 0)
                    continue;

                if ($.inArray(value, numbers) != -1)
                    return false;
                numbers.push(value);
            }
        }
        return true;
    },
    
    // Creates string representing the grid data
    toString: function() {
        var str = '';
        for (var i = 0; i < 9; i++) {
            str += this.rows[i].join(' ') + "\r\n";
        }
        return str;
    },
    
    // Creates an array of the current sudoku puzzle
	// Called by handleDiff or new_game Click methods and passed to loadGame in "sudokuView.js"
    toArray: function() {
        var cells = [];
        for (var row = 0; row < 9; row++) {
            for (var col = 0; col < 9; col++)
                cells.push(this.rows[row][col]);
        }
        return cells;
    },
    
    // Uses array to fill the sudoku puzzle,  
    fromArray: function(cells) {
        if (cells.length != 81)
            throw new Error('Array length is not 81');

        for (var i = 0; i < 81; i++) {
            var row = Math.floor(i / 9);
            var col = i - (row * 9);

            this.rows[row][col] = cells[i];
        }
        return this;
    }
};

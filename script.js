// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// Set variables for the current day, the save button, and the current hour.

var today = dayjs().format('MMMM DD, YYYY');
var saveBtn = $('.saveBtn');
var hour = dayjs().hour();

$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?

// Function that saves the text for each time block to local storage when the save button is clicked

    function saveMessage() {
    saveBtn.on('click', function() {
      const key = $(this).parent().attr('id');
      const content = $(this).siblings('.description').val();
      localStorage.setItem(key, content);
    })
  }

    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?

// Function that uses a for loop to cycle through each time block and change the class based on the current hour.

    function setColor() {
      const timeBlocks = $('.time-block');
      for (let i = 0; i < timeBlocks.length; i++) {
        const itemElement = $(timeBlocks[i]);
        var itemHour = parseInt(timeBlocks[i].id);
        if (itemHour < hour) {
          itemElement.removeClass('future present').addClass('past');
        } else if (itemHour === hour) {
          itemElement.removeClass('past future').addClass('present');
        } else {
          itemElement.removeClass('past present').addClass('future');
        }
      }
    }
    
    
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //

    // Function that sets the value of the timeblocks from local storage.

    $('.time-block').each(function() {
      const key = $(this).attr('id');
      const content = localStorage.getItem(key);
      $(this).children('.description').val(content);
    });
    // TODO: Add code to display the current date in the header of the page.

    // Displays current date in the header.
    $('#currentDay').text('Today is ' + today);


    // Calls functions.
    saveMessage();
    setColor();
    

  });
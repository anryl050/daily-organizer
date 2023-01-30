// Self calling anonymous function that waits to execute the JS until all HTML and CSS elements are loaded. 
$(function () {

  // TODO: Add a listener for click events on the save button. This code should use the id in the containing time-block as a key to save the user input in local storage. 

  // added the "Save Button" event listener
  $(".saveBtn").on("click", function(){

    // Using "this" to reference the targeted parent/sibling elements within the DOM. This allows the application to know which save button is clicked (this button) rather than a generic reference to a saved button (such as document.QuerySelect(".saveBtn")).
    var timeSlot = $(this).siblings(".description").val();
    console.log(this);
    var textInput = $(this).parent().attr("id");

    // stores the key with the id for the time block (i.e. hour-9) and value with the input from the class description.
    localStorage.setItem(textInput, timeSlot);
  });
    
  
  // TODO: Add code to apply the past, present, or future class to each time block by comparing the id to the current hour. 
  // * HINTS: How can the id attribute of each time-block be used to conditionally add or remove the past, present, and future classes? How can Day.js be used to get the current hour in 24-hour time?
  
  
  // var time = dayjs().get('hour');
  // console.log(time);
  
  // $(document).ready(function() {
    
    
    
    //   if(time === 0){
      //     $(this).addClass("present");
      //   }
      //   if(time > 0){
        //     $(this).addClass("future");
        //   }
        //   if(time < 0){
          //     $(this).addClass("past");
          //   }
          // });
          
          
          //
  // TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements. 

  // Retrieve the stored values from local storage
  // $("#hour-9 .description") -> refers to the id(#hour-9 and class(.description). Due to referencing 2 different elements, the space is required between the 2.
  // Returns the current value (string) associated with the given key(i.e. hour-9).
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
          
  
  // TODO: Add code to display the current date in the header of the page.
  // creates the var with desired Day.js format (i.e. Sunday, January 29 2023)
  var today = dayjs().format("[Today is] dddd, MMMM D YYYY");  
  // check point
  console.log(today);
  // displays the curent date
  $("#currentDay").text(today);

});

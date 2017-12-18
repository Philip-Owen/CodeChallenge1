// Increments count for each newly created Div
var divNum = 1;

$(document).ready(onReady);

// Runs once DOM is ready
function onReady() {
  $('body').append('<button id="generate" type="button">Generate</button>');
  $('button').on('click', newDiv);
  $('body').on('click', '.swap', swapColor);
  $('body').on('click', '.delete', deleteDiv);
} // end onReady()

// Adds new divs to the page after button click
function newDiv() {
  var $div = $('<div class="red">');
  $div.append('<p>' + divNum + '</p>');
  $div.append('<button class="swap" type="button">Swap</button>');
  $div.append('<button class="delete" type="button">Delete</button>');
  $('body').append($div);
  divNum++;
} // end newDiv()

// Toggles the color of the divs on button click
function swapColor() {
  $(this).parent().toggleClass('yellow');
} // end swapColor()

// Deletes div on button click
function deleteDiv() {
  $(this).parent().remove();
} // deleteDiv()

/* 

  Events Handling 

  What are Events?

  Events are things that happen in the system that you are programming, which the system tells you about so that your code can respond or react to them. For example when a user clicks a button on a web page, that's an event that you might want to respond to by displaying some information

  How does it work?

  When an event happens, the system "fires" or produces a signal of some kind and it also provides a mechanism by which an action can be automatically taken - that is some code runs - when the event occurs.

  In the case of a browser events are fired inside of the browser window and these events tend to be attached to a specific item that resides in the window. These can be a single element, a set of elements or when the HTML document is loaded in the current tab or the entire browser window.


  Types of Events
   - The user can fill a form, hover over a link, select, clicks, over a certain element

   - The user presses a key on a keyboard

   - The user can resize or close the browser window

   - A web page finishes loading

   - A user submits a form

   - A video is played or paused

   - An error occurs

   So there are lots of events that can occur or that can be fired.


   How do you react to an Event

   To react to an event, you attach an event handler to it.

   So what is an event handler? - This is a block of codes - usually a JavaScript function, that you the programmer create - that runs when the event fires.
   
   When such a block of code is defined to run in response to an event, we call that "registering an event handler". Note: Event handlers are sometimes called event listeners. 
   
   These terminology are pretty much interchangeable, but strictly speaking they work together. 
   
   The event listener listens for an event happening and the handler is the code that is run in response to the event.
  
   Caveat: Web events are NOT part of the core JavaScript language. They are actually defined as part of the APIs built into the browser.

*/

/* 
  Example 

  Add an event handler to the button's "click" event, and the handler should react or respond to the event by setting the page background to a random color

*/

// Grab the button object from the DOM
const btn = document.querySelector("button");

// Define random number generator
function random(num) {
	return Math.floor(Math.random() * (num + 1));
}

/* 
  Add the event listener to the btn object. The structure of an event listener API
  element.addEventListener(event, callbackFn);
*/

btn.addEventListener("click", () => {
	const randomClr = `
    rgb(${random(255)}, ${random(255)}, ${random(255)})
  `;

	document.body.style.backgroundColor = randomClr;
});

/* 
	The Document Object Model (DOM)
	
	What is the DOM?

	The DOM is the data representation of the objects that comprise the structure and content of a document on the web. In this case we would be looking at how the DOM represents an HTML document in memory and how to use Web APIs to manipulate and create web content and applications.

	The DOM is a programming interface for web documents e.g HTML documents. It models a web page so that programs can change the structure (HTML), style (CSS), and Content

	The DOM models or represents the document nodes and objects.

	The nodes are entries in the tree structure and they represent elements (identified as HTML, HEAD, META, BODY and so on) and others represented as text or "content" known as leaf nodes.

	The different types of Nodes
	1. Root Node
	2. Child Node
	3. Descendant Node
	4. Parent Node
	5. Sibling Node
*/

/* 
	Importance of the DOM in Web Development 

	The DOM is crucial in web development because it serves as an interface that allows dynamic and interactive manipulation of a web page using programming languages like JavaScript

	1. Dynamic Content Update - The DOM allows developers to dynamically update, add or remove content on a web page in response to user interactions or events

	2. Interactivity - Developers can create interactive features such as form validation, image sliders, or real-time updates making websites more engaging for users

	3. Cross-Browser Compatibility - The DOM provides a standardized way to interact with HTML documents ensuring cross browser compatibility. So you can write code that works consistently across different browsers

	4. Responsive User Interfaces - Web applications use the DOM create responsive user interfaces, that adapt to user actions without a page refresh 

	5. The DOM is essential for AJAX ( Asynchronous JavaScript and XML) operations which allows web pages to fetch and send data asynchronously without reloading the entire page

	6. Events Handling - Developers can use the DOM to manage events, such as clicks, keyboard presses, or form submissions, enabling them to respond to user actions and create dynamic behavior

	7. Structured Representation - The DOM represents HTML documents as a structured tree of objects, makes it easy for developers to navigate and manipulate different elements and attributes programmatically.

*/

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
Adding an Event Listener 

To add the event listener to an HTML element object. You use the addEventListener method. 
 
The structure of an event listener API is
element.addEventListener(event, callbackFn);

This takes two parameters

- The event to listen to

- The function to call when the event happens
 
Example
Add an event handler to the button's "click" event, and the handler should react or respond to the event by setting the page background to a random color
*/

// Grab the button object from the DOM
const btn = document.querySelector("button");

// Define random number generator
function random(num) {
	return Math.floor(Math.random() * (num + 1));
}

btn.addEventListener("click", () => {
	const randomClr = `
    rgb(${random(255)}, ${random(255)}, ${random(255)})
  `;

	document.body.style.backgroundColor = randomClr;
});

/* Note the callback function or event handler can be a named function. So the above code can be refactored like this */

function changeBackground() {
	const randomClr = `
    rgb(${random(255)}, ${random(255)}, ${random(255)})
  `;

	document.body.style.backgroundColor = randomClr;
}

btn.addEventListener("focus", changeBackground);

/* 
  Listening for other events.

  There are other events that can be fired by DOM elements, such as 
  - focus - this is fired when element is focussed
  - blur - this is fired when the element is unfocussed
  - dbclick - this fired when the element is double clicked
  - mouseover - this is fired the mouse pointer hovers over an element
  - mouseout - this is fired when the mouse pointer moves off the element.
  
  There are also other events that are specific to certain elements. For instance the play event for the video and audio elements
*/

/* 

Removing Event Listeners 

If you have added an Event listener using addEventListener(), you can again remove it using the removeEventListener().

The removeEventListener takes the same parameters as the addEventListener() method
removeEventListener(event, eventHandler);

For example You can remove the event listener for the button element like so
*/

btn.removeEventListener("focus", changeBackground);

/* 
  Caveat - the removeEventListener only works for named callback functions. Therefore it will not work for anonymous functions
*/

/* 
  Removing Event Listeners with anonymous functions.

  To remove an event listener with an anonymous callback function created by the addEventListener(), you have to pass a third parameter to the addEventListener()

  - Third parameter is an AbortSignal of a controller object to the addEventListener()

  - Once the Abort Signal has been passed you can the call the abort() method on the controller owning the AbortSignal

  For example
*/
const controller = new AbortController();

btn.addEventListener(
	"click",
	() => {
		const randomClr = `
    rgb(${random(255)}, ${random(255)}, ${random(255)})
  `;

		document.body.style.backgroundColor = randomClr;
	},
	{ signal: controller.signal }
);

controller.abort();

/* 
  Notes:
  - If you are working on small application with few event listeners it's Ok not to manually remove event listeners

  - However if your application is complex and manges a lot event listeners then it   is advisable to manually remove event listeners when not needed to improve performance of your application. In that using named callback functions is recommended to keep your code clean and easier to debug. 
*/

/* 
  Adding multiple listeners for a single event

  You can add multiple event listeners for a single event using the construct below for example

  element.addEventListener(event, functionA);
  element.addEventListener(event, functionB);
  element.addEventListener(event, functionC);

*/

btn.addEventListener("click", changeButtonColor);

function changeButtonColor() {
	btn.style.backgroundColor = "#b0b0b0";
}

/* 
  Assignment Event Handling 

  Create two input form text fields for 
  1) Full Name 
  2) Email

  Add an event listener to both fields such that they add a green border to the input field when focused and when the field loses focus sets the border to grey. Use a border of 2px;

  Tip: 
  - Remember that in Javascript CSS properties are written in camelCase.
  - Use the style property of the DOM element to set the CSS styles of the element in JavaScript.

*/

const fullName = document.querySelector("#full-name");
const email = document.querySelector("#email");

/*
//Attempt 1
fullName.addEventListener("focus", () => {
	fullName.style.outline = "none";
	fullName.style.border = "2px solid green";
});
fullName.addEventListener("blur", () => {
	fullName.style.border = "2px solid grey";
});

email.addEventListener("focus", () => {
	email.style.outline = "none";
	email.style.border = "2px solid green";
});
email.addEventListener("blur", () => {
	email.style.border = "2px solid grey";
}); */

function addListenersTo(elm) {
	for (let i = 0; i < elm.length; i++) {
		elm[i].addEventListener("focus", () => {
			elm[i].style.outline = "none";
			elm[i].style.border = "2px solid red";
		});
		elm[i].addEventListener("blur", () => {
			elm[i].style.border = "2px solid grey";
		});
	}
}
addListenersTo([fullName, email]);
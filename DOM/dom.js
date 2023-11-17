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
  Adding multiple event listeners for a single event

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

//Attempt 1
/* fullName.addEventListener("focus", () => {
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
});
 */
function addListenersTo(elm) {
	for (let i = 0; i < elm.length; i++) {
		elm[i].addEventListener("focus", () => {
			elm[i].style.outline = "none";
			elm[i].style.border = "2px solid green";
		});
		elm[i].addEventListener("blur", () => {
			elm[i].style.border = "2px solid grey";
		});
	}
}
addListenersTo([fullName, email]);

/* 

Adding the same event listener to multiple elements 

There are two main strategies to achieve this;
- 1. Query all elements from DOM and attach an event listener to them 

- 2. Take advantage of event bubbling by attaching an event listener to a common parent element

Both strategies have their advantages and disadvantages

- The first strategy is more intuitive and straightforward, however it consumes more code and memory

- The second strategy is more efficient and flexible, but it requires more logic and careful handling of edge cases.

*/

// Example of strategy 1

const myLinks = document.querySelectorAll(".link");
console.log(myLinks); //-> A Node list object

// Loop through the Node List using the forEach() method which takes a callback function
myLinks.forEach(function (link) {
	link.addEventListener("click", function () {
		console.log("You clicked a link");
	});
});

// Example of Strategy 2

/*
  The second strategy is to use Event Delegation, which is a technique that takes advantage of Even Bubbling.

  What is Event Bubbling
  
  Event Bubbling is the natural behavior of how events are propagated up the DOM hierarchy from the target element that triggered or fired the event to its parent elements and further to the root of the document.

  - Knowing the above fact, we can take advantage of this behavior to add an event listener to a common parent element of the target element that fired the event, such as the root element or the body element of the document.

  - Then inside of the event listener function on the common parent element we can use the event.target property to check which child element actually triggered the event and then perform your logic based on that information.
*/

/* For example if you have three buttons with different IDs, we can add a click event listener to the document and check which button was clicked.*/

document.addEventListener("click", function (event) {
	switch (event.target.id) {
		case "btn1":
			console.log("You clicked Button 1");
			break;
		case "btn2":
			console.log("You clicked Button 2");
			break;
		case "btn3":
			console.log("You clicked Button 3");
			break;

		default:
			// Do nothing if none of the button is clicked
			break;
	}
});

/* 

  Stopping Event Propagation (Bubbling) 

  Event bubbling can be convenient when you want to handle events on multiple levels of the DOM hierarchy.

  However in some cases you might want to stop the propagation of events bubbling further up the hierarchy.

  This can be done using the event.stopPropagation() within the event handler
*/

document.getElementById("btn3").addEventListener("click", function (event) {
	console.log("Child Button Clicked");
	event.stopPropagation(); //-> this stops the bubbling of the event
});

/* 
  Notes

  - Event Propagation is particularly useful when dealing with dynamic or generated content where you don't know beforehand how many elements will fire events or need event handlers or when they will be created.

  - Therefore you can add an event listener to a parent container you know will always be available and present in the DOM.

  - However please note that it is crucial to avoid or minimize the use of global event listeners on the document or window objects. 

  - It is more efficient to add event listeners to specific elements or containers whenever possible to improve performance and reduce unintended side effects.

  - Warning!!! Remember to remove event listeners when they are no longer needed especially when dealing with long-lived or single page applications. Failure to do this may lead to memory leaks.
*/

/*
  Traversing the DOM 

  - There are some powerful fundamental DOM methods that allow JavaScript to dynamically create, access, remove and control HTML elements.

*/

// Creating Elements
function createTable() {
	// 1. create the <table> element and a <tbody> using the createElement()
	const tbl = document.createElement("table");
	const tblBody = document.createElement("tbody");

	// 2. Creating the table cells
	for (let row = 0; row < 2; row++) {
		// Create table rows
		const tblRow = document.createElement("tr");
		// 3. Create and Append Elements to the DOM
		for (let cell = 0; cell < 2; cell++) {
			// Create a <td>
			const tblCell = document.createElement("td");
			// Create the text node (Content inside the cell)
			const cellTxt = document.createTextNode(`cell ${row}, ${cell}`);

			// - append the textNode(content) to the cell
			tblCell.appendChild(cellTxt);

			// - append the cell(<td>) to the row(<tr>)
			tblRow.appendChild(tblCell);
		}

		// - append the row(<tr>) to the body(<tbody>)
		tblBody.appendChild(tblRow);

		// - finally append the table body(<tbody>) to the table element(<table>)
		tbl.appendChild(tblBody);
	}

	// Step 4 attach table to the DOM
	const tblSection = document.getElementById("tbl");
	tblSection.appendChild(tbl);
	tbl.setAttribute("border", "1");
}

createTable();

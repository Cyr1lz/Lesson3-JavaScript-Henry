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

btn.addEventListener("click", () => {
	const randomClr = `
    rgb(${random(255)}, ${random(255)}, ${random(255)})
  `;

	document.body.style.backgroundColor = randomClr;
});

/* Note the callback function or event handler can be a named function. So the above code can be refactored like this */

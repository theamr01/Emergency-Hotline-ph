1. The difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll is -
   a. getElementById selects an element using an unique id and returns a single element. It is fast.
   b. getElementsByClassName selects elements based on class name and returns a live html collection.
   c. querySelector selects the first element that matches the css selector
   d. querySelectorAll selects all the elements that matches the css selector

2. A new element is created using document.createElement() method. And we can insert it in dom by appendChild(), prepend() etc.
3. Event bubbling is mechanism where an event start from the target and propagates upward through its parent elements in the dom hierarchy. In simple word, when an event occurs om child, it also triggers event handlers on its ancestors.
4. Event delegation is a technique where a single event listener is attached to a parent instead of multiple child elements. It's useful because it-
   a. improves performance by reducing the number of event listeners
   b. works for dynamically added elements
   c. simplifies code

5. preventDefault() : prevents the default action of an element from occuring.
   stopPropagation() : prevents the event from propagating up to the dom tree.

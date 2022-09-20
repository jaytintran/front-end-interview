
**What is the difference between a promise and a callback?**
Callbacks are functions passed as arguments into other functions to make sure mandatory variables are available within the callback-function's scope
Promises are placeholder objects for data that's available in the future.

**What is a closure?**
- A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). Inner functions have the access to its outer function's variable and data. The purpose is to give you access to an outer function's scope from an inner function.

**Explain `this` in JavaScript**
- In JavaScript, the `this` keyword refers to an object.
- Which object depends on how `this` is being invoked (used or called).
- The `this` keyword refers to different objects depending on how it is used:
    - In an object method, this refers to the object.
    - Alone, this refers to the global object.
    - In a function, this refers to the global object.
    - In a function, in strict mode, this is undefined.
    - In an event, this refers to the element that received the event.
    - Methods like call(), apply(), and bind() can refer this to any object.

**Explain the CSS box model**
The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content

**Explain the CSS position methods**
- The position property specifies the type of positioning method used for an element (static, relative, fixed, absolute or sticky).
- `static`: is not affected by the top, bottom, left, and right properties. An element with this poisition is not positioned in any special way; it is always positioned according to the normal flow of the page.
- `relative`: an element with thid position is positioned relative to its normal position. Setting the top, right, bottom, and left properties of a relatively-positioned element will cause it to be adjusted away from its normal position. Other content will not be adjusted to fit into any gap left by the element.
- `fixed`: An element with this position is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. The top, right, bottom, and left properties are used to position the element. It does not leave a gap in the page where it would normally have been located.
- `absolute`: an element with this position is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed). However; if an absolute positioned element has no positioned ancestors, it uses the document body, and moves along with page scrolling.
- `sticky`: an element with position is positioned based on the user's scroll position. A sticky element toggles between relative and fixed, depending on the scroll position. It is positioned relative until a given offset position is met in the viewport - then it "sticks" in place (like position:fixed).

**What problem does React Virtual DOM solve?**
- Current day websites require lots of DOM manipulation.
- Why are most, other JavaScripts frameworks slow? JavaScript frameworks update the DOM much more than they have to.
- For example, you have a list than contains 10 items. You check off the first item. Most JavaScript frameworks would rebuild the entire list. That is 10 times more work than necessary. Virtual DOM only updates what is necessary.
- Virtual DOM solves the issue of slowness with efficient updating.

**What is Virtual DOM?**
- In react, for every DOM object, there is a corresponding Virtual DOM object.
- It is a representation of a DOM object. A lightweight copy.
- A virtual DOM object has the same properties as a real DOM object.
- The difference is that it lacks the power to directly change what’s on the screen.
- Manipulating the actual DOM is slow. Manipulating the virtual DOM is much faster.
- For example, manipulating the virtual DOM is like editing a blueprint, and manipulating an actual DOM is like moving rooms in an actual house.

**How does Virtual DOM work?**
- Once the virtual DOM is updated, React compares the virtual DOM with a virtual DOM snapshot that was taken right before the update.
- By comparing the new virtual DOM with a pre-update version, React figures out exactly which virtual DOM objects have changed. This is called “diffing”.
- React will only those objects on the real DOM
# React Trelloyes

## Components Structure
* __Index.js__ (stateless)
    * __STORE.js__ (static object)
    * __App.js__ (statefull) - gets the _"STORE"_ from the __Index.js__
        * __List.js__ (stateless) - gets the _"key"_ and  the _"header"_ and  the _"cards"_ and from the __App.js__
            * __Card.js__ (stateless) - gets the _"key"_ and  the _"title"_ and  the _"content"_ and from the __List.js__

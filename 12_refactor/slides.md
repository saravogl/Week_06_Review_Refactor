#FEWD - Review and Refactor 

###Matt Soria

---


##Agenda

*	Refactor
*	This Keyword

---

##Refactor

*	Making code more efficient without changing functionality.

---

##Refactor

The process of rewriting code without changing functionality
*	To reduce or eliminate redundancy
*	Make code easier to read
*	Make code more maintainable

---

##CSS Refactor

*	Remove inline styling
*	Replace repeated styles with classes
*	Rename classes/ids for readability
*	Organize CSS
*	Group by section
*	Order by precedence (tag selectors at top, id selectors at bottom)
*	Create classes for large CSS changes in JS
*	Remove unnecessary css

---

##JS Refactor

*	Use functions
*	Use variables
*	Use arrays
*	Combine jQuery selectors

---

##Keyword: "This"

jQuery: “this” refers to the selected object

---


##Topic

How about this code?

```
$(“p”).on(“click”,function(e){
    $(this).fadeOut(500);
});
```

Rule of thumb (ROT): If I don’t know what thing will be acted on, then I should consider using “this”
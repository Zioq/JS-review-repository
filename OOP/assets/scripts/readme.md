Object Oriented Programming

- It’s kind of a working with (real-life) Entities in you code.
- Object → We use object to group data together in the end.

E.g.

1. ProductList → Renders a list of products which were fetched from a server (DB)
    1. It probably also has a property or a couple of properties which help use store that loaded product. → Link to `#2 object(Product)`
    2. Object hold rendering + fetching logic.
    
2. Product → Another single object which reflects a single product. (Renders details about a product and allows addition to cart)
    1. This object be responsible for rendering the details about single product and maybe it also renders a button and it holds the logic to add a product to a cart → Link to `#3 object(ShoppingCart)`
    2. Object hold rendering + cart-adding logic

1. ShoppingCart
    1. Renders cart products and total and allows user to order them.
    2. Object holds rendering + ordering (server communication) logic.


## Classes & Instances

Classes → Allow use to build objects in an easier way or to build objects based on some blueprint to be precise.

- Object → “The things you work with in code”
    - Objects are also called `instances` of classes.(= based on classes)
    - Classes-based creation is an alternative to using object literals.
- Classes → “Blueprints for objects (theoretical definition)”
    - Define how objects look like, which properties and methods they have.
    - Classes make creation of multiple, similar objects much easier.


For class naming: The convention is to start that name with a capital character.

Constructor in class: Through constructor in class, you can assign the arguments values as a class’s property value;

(But if you don’t want to assign the value right away when create a object, you should create fields for it to save the data later in case.)


### Class Fields (vs properties)
```
class MOVIE {
	title = 'DEFAULT' // (Public) Class Field
	constructor(title) {
		this.title = title // (Public) Class property
	}
}
```
A field becomes a property when we create an object based on the class

### Static Properties, Fields & Methods

- Static Field / Property / Method 
⭐️  Defined with `static` key word.
⭐️ Only accessible on class itself without instantiation(i.e not on instance), which means you don’t need to use the new keyword to create an object based on that class.
⭐️  Typically used in helper class, global configuration etc.
- Instance Field / Property / Method
⭐️  Defined without static keyword.
⭐️ Only accessible on instances (= objects) based on class.
⭐️ Typically used for core, re-usable logic.

### When to use Classes

- When we have to use object literals ({…})
    - Great for general data grouping, objects which you only create once with same structure.
    - Quick & easy to create, no overhead.
    
- When we have to use classes.
    - Great when you re-create the same type of object over and over again.(Re-create the same type of object with the same structure and the same attached logic over and over again.)
    - More overhead initially but easy ‘object duplication’ thereafter.
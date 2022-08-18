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
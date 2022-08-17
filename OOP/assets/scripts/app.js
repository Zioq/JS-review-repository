/* Object: The things you work with in code  = `Instances` of classes(=based on classes) )*/
/* Class: `Blueprint` for objects(theoretical definition) -> Define how objects looks like, which properties and methods they have. */

/* Convention is to start class name with a capitcal character */
class Product {
	// Set the fields -> every field will be translated to a property in the object
	// title = 'DEFAULT'; -> We can remvoe these fields because of contractor.
	// imgUrl;
	// description;
	// price;

	constructor(title, image, desc, price) {
		this.title = title;
		this.imgUrl = image;
		this.description = desc;
		this.price = price;
	}
}

class ShoppingCart {
	items = [];

	add_product(product) {
		this.items.push(product);
		this.total_output.innerHTML = `<h2>Total: \$${1}</h2>`;
	}


	render() {
		const cartEl = document.createElement('section');
		cartEl.innerHTML = `
			<h2>Total: \$${0}</h2>
			<button>Order Now!</button>
		`;
		cartEl.className = 'cart';
		this.total_output = cartEl.querySelector('h2');
		return cartEl;
	}
}

class ProductItem {
	constructor(product) {
		this.product = product;
	}

	add_to_cart() {
		App.add_product_to_cart(this.product);
	}

	render() {
		const prod_el = document.createElement('li');
			prod_el.className = `product-item`;
			prod_el.innerHTML =`
				<div>
					<img src=${this.product.imgUrl} alt=${this.product.title}> 
					<div class='project-item__content'>
						<h2>${this.product.title}</h2>
						<h3>\$${this.product.price}</h3>
						<p><${this.product.description}/p>
						<button>Add to Cart</button>
					</div>
				</div> `;

		const product_add_btn = prod_el.querySelector('button');
		product_add_btn.addEventListener('click', this.add_to_cart.bind(this));
		
		return prod_el;
	}
}

class ProdctList {
	products = [
		new Product('A', 'iamge_link_a', 'This is A', 10.99),
		new Product('B', 'iamge_link_b', 'This is B', 15.99),
		new Product('C', 'iamge_link_c', 'This is C', 20.99)
	];

	constructor() {}

	render() {
		
		const prod_list = document.createElement('ul');

		prod_list.className = 'product-list';

		for (const prod of this.products) {
			const productItem = new ProductItem(prod);
			const prodEl = productItem.render();
			prod_list.append(prodEl);
		}

		return prod_list;
	}

}

class Shop {

	render() {
		const renderHook = document.getElementById('app');

		this.cart = new ShoppingCart();
		const cart_element = this.cart.render();

		const product_list = new ProdctList();
		const product_list_element = product_list.render();
		
		renderHook.append(cart_element);
		renderHook.append(product_list_element);
	}
}

class App {
	static cart;

	static init() {
		const shop = new Shop();
		shop.render();
		this.cart = shop.cart();
	}

	static add_product_to_cart(product){
		this.cart.add_product(product)
	}
}

App.init();
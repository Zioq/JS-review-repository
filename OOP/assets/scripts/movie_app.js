/* Review OOP Self code */

class Movie {
	// This Movie class is for just gouping data together.
	constructor(title, running_time, price) {
		this.title = title;
		this.running_time = running_time;
		this.price = price;
	}
}


class ShoppingCart {
	items = [];
	total_out_put = '';

	set cart_item(value) {
		this.items = value;
		this.total_out_put.innerHTML = `<h2>Total : \$${this.total_price.toFixed(2)}</h2>`;
	}

	get total_price () {
		const sum = this.items.reduce((prev_value, current) => {
			prev_value + current.price
		}, 0)

		return sum;
	}

	add_movie(movie) {
		const updated_movie_items = [...this.items];
		updated_movie_items.push(movie);
		this.cart_item = updated_movie_items; // Setter pass the value by assigning it.
	}

	render() {
		const cart_element = document.createElement('section');
		cart_element.innerHTML = `
			<button>Order Now1</button>
		`;
		cart_element.className = 'cart';
		this.total_out_put = cart_element.querySelector('h2');

		return cart_element;
	}
}

class MovieItem {
	// Class for rendering single movie.

	// Becuase we already have in movie class what we need. So we can accept overall movie object
	constructor(movie) {
		// adds a new 'movie' property to the eventually created objects.
		this.movie = movie;
	}

	// Make anohter method for add_movie action which is called in the single movie item
	add_to_cart() {
		// Now we can user class staitc method for it.
		App.add_movie_to_cart(this.movie);
	}

	// Have a logic to render a single movie item.
	render() {
		const movie_li = document.createElement('li');
		movie_li.className = 'movie_item';
		movie_li.innerHTML = `
			<div>
				<div class="movie_item_content">
					<h2>${this.movie.title}</h2>
					<h3>${this.movie.running_time}</h3>
					<h3>${this.movie.price}</h3>
					<button class="add_btn">Add to cart</button>
				</div>
			</div>
		`;

		const add_movie_btn = movie_li.querySelector('.add_btn');
		/* If this.add_to_cart doesn't bind this, it will not work properly. 
			this.add_to_cart now called on `addEventListeer` not a whole class.
		*/
		// add_movie_btn.addEventListener('click', this.add_to_cart); 

		add_movie_btn.addEventListener('click', this.add_to_cart.bind(this));


		return movie_li;
	}
}



class MovieList {
	movies = [
		new Movie('A', '180', '19.99'),
		new Movie('B', '150', '15.50'),
		new Movie('C', '140', '17.00'),
	];

	constructor() {}

	render() {

		const movie_ul = document.createElement('ul');
		movie_ul.className = 'movie_list';

		for (const movie of this.movies) {
			const movie_item = new MovieItem(movie);
			movie_li = movie_item.render();
			movie_ul.append(movie_li);
		}

		return movie_ul;
	}
}

class Teather {

	cart = '';

	render() {

		const rendeerHook = document.getElementById('app');

		this.cart = new ShoppingCart();
		const cart_element = this.cart.render();

		const movie_list = new MovieList();
		const movie_list_element = movie_list.render();

		rendeerHook.append(cart_element);
		rendeerHook.append(movie_list_element);
	}
}


class App  {

	static cart;

	static init() {
		const theater = new Teather();
		theater.render();
		this.cart = theater.cart;
	}

	static add_movie_to_cart(movie) {
		this.cart.add_movie(movie);
	}
}

// This will execute init method directly on the class itself without new keyword.
App.init();

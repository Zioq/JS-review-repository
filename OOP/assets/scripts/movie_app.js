/* Review OOP Self code */

class Movie {
	// This Movie class is for just gouping data together.
	constructor(title, running_time, price) {
		this.title = title;
		this.running_time = running_time;
		this.price = price;
	}
}


class MovieItem {
	// Class for rendering single movie.

	// Becuase we already have in movie class what we need. So we can accept overall movie object
	constructor(movie) {
		// adds a new 'movie' property to the eventually created objects.
		this.movie = movie;
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
	}
}

const movie_list = new MovieList();
movie_list.render();
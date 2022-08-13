const add_movie_btn = document.getElementById('add-movie-btn');
const search_btn = document.getElementById('search-btn');

const movies = [];

const rander_movies = (filter = '') => {
	// set the filter as default argument -> by default, this will be emtpy string if we don't pass any more specific value
	
	const movie_list = document.getElementById('movie-list');

	if (movies.length === 0) {
		movie_list.classList.remove('visible');
	} else {
		movie_list.classList.add('visible');
	}

	movie_list.innerHTML = '';

	// Before rendering the movies, if filter has value, then set the filter.
	// If the `filter` is falsy, then get all movies, or set filtered movie.
	// `filter` function & `includes` function.
	const filtered_movies = !filter ?  movies : movies.filter(movie => movie.info.title.inlcudes(filter));

	filtered_movies.forEach((movie) => {
		const movie_element = document.createElement('li');
		
		//check the proerty in the object. -> Check key value using a `in`
		if( !('info' in movie) ) return; // Or you can use undefined. if(movie.info === undefined)

		// Destructuring Object -> use `{ }` when declare variable.
		const { info, ...other_props } = movie; // You have to enter a key name here which exists in object.
		console.log(other_props) // log other left properties.
		// const { title: movie_title } = info; // Destructure object's key value on new name.

		/* This destructuring object is useful if you use the same property over and over again in multiple places. */

		const movie_title = movie.formatting_title(); // call funciton in the object.

		let { formatting_title }  = movie; 

		let text = movie_title + ' - ';
		//let text_2 = formatting_title() + '-' // This will return error. Because here `this` means window browser object.
		// use bind() to preconfigure which argumenta a function takes.
		// formatting_title = formatting_title.bind(movie); // To use `bind` needs to new varaible to save.
		let text_2 = formatting_title.call(movie) + ' - ';  // `call` instead goes ahead and execute the funciton right away.

		for (const key in info) {
			//JS recognizes key as string
			if( key != 'title' )  {
				text = text_2 + `${key}: ${info[key]}`;
			}	
 		}
		movie_element.textContent = text;
		movie_list.append(movie_element);
	})
}

const add_movie_handler = () => {

	// Select inputs in here because really need them anywhere else.
	const title = document.getElementById('title').value;
	const extra_name = document.getElementById('extra-name').value.toLowerCase();
	const extra_value = document.getElementById('extra-value').value.toLowerCase();

	if (title.trim() === '' || extra_name === '' || extra_value === '') {
		return;
	}
	
	// Set up the obejct
	const new_movie = {
		info: {
			title, // you could omit the value name and the column if key == value
			[extra_name] : extra_value
		},
		id: Math.random().toString(),
		formatting_title() {
			// Remember, `this` does not automatically refer to the object that surrounds it.
			// Instead, it referes to who or what was responsible for calling this funciton.
			console.log(this);
			return this.info.title.toUpperCase();
		}
	};
	movies.push(new_movie);
	rander_movies();
}

const search_movie_handler = () => {
	// first read user input
	const filter_val = document.getElementById('filter-title').value;
	// passt the value into the render function
	rander_movies(filter_val);

}

//Don't execute it as a function, just point at the name of the function instead. So JS calls that function for us
add_movie_btn.addEventListener('click', add_movie_handler);
search_btn.addEventListener('click', search_movie_handler);
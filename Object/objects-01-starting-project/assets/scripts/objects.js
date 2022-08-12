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
		let text = movie.info.title + ' - ';
		for (const key in movie.info) {
			//JS recognizes key as string
			if( key != 'title' )  {
				text = text + `${key}: ${movie.info[key]}`;
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
		id: Math.random()
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
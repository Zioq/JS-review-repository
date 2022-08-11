const add_movie_btn = document.getElementById('add-movie-btn');
const search_btn = document.getElementById('search-btn');

const movies = [];

const rander_movies = (filter = '') => {
	const movie_list = document.getElementById('movie-list');

	if (movies.length === 0) {
		movie_list.classList.remove('visible');
	} else {
		movie_list.classList.add('visible');
	}

	movie_list.innerHTML = '';

	const filtered_movies = !filter ?  movies : movies.filter(movie => movie.includs)

	movies.forEach((movie) => {
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

const search_moviel_title = () => {
	const filter_input_value = document.getElementById('filter-title').value;
	rander_movies(filter_input_value);
}

//Don't execute it as a function, just point at the name of the function instead. So JS calls that function for us
add_movie_btn.addEventListener('click', add_movie_handler);
search_btn.addEventListener('click', search_moviel_title);
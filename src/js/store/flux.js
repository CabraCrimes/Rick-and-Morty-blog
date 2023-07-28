const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			character: [],

			location: [],

			episode: [],

			nextCharacterURL: "https://rickandmortyapi.com/api/character/?page=1",
			nextLocationURL: "https://rickandmortyapi.com/api/location/?page=1",
			nextEpisodeURL: "https://rickandmortyapi.com/api/episode/?page=1",

			favourite: []
		},
		
		actions: {
			 getCharacter: async () => {
				 	const response = await fetch(getStore().nextCharacterURL)
					const data = await response.json();
					setStore({character: [...getStore().character, ...data.results], nextCharacterURL: data.info.next })
			 },
			 getLocation: async () => {
					const response = await fetch(getStore().nextLocationURL)
					const data = await response.json();
					setStore({location: [...getStore().location, ...data.results], nextLocationURL: data.info.next })
			},

			getEpisode: async () => {
					const response = await fetch(getStore().nextEpisodeURL)
					const data = await response.json();
					setStore({episode: [...getStore().episode, ...data.results], nextEpisodeURL: data.info.next })
			},	

			setFavorites: (newFav) => {
				const favourites = getStore().favourite;
				if (!favourites.includes(newFav)){
					setStore({favourite : [...getStore().favourite, newFav]})}
					else{
						setStore({favourite : favourites.filter((oldFav) => oldFav != newFav)})
					}
			}

			
		}

	};
};

export default getState;

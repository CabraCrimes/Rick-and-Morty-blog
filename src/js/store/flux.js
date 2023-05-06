const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			character: [],

			location: [],

			episode: [],

			nextCharacterURL: "https://rickandmortyapi.com/api/character/?page=1",
			nextLocationURL: "",
			nextEpisodeURL: "",

			favourite: []
		},
		
		actions: {
			 getCharacter: async () => {
				 	const response = await fetch(getStore().nextCharacterURL)
					const data = await response.json();
					setStore({character: [...getStore().character, ...data.results], nextCharacterURL: data.info.next })
			 },
			 getLocation: async () => {
					const response = await fetch("https://rickandmortyapi.com/api/location")
					const data = await response.json();
					setStore({location: data.results})
			},

			getEpisode: async () => {
					const response = await fetch("https://rickandmortyapi.com/api/episode")
					const data = await response.json();
					setStore({episode: data.results})
			},	

			setFavorites: (newFav) => {
				const favourites = getStore().favourite;
				if (!favourites.includes(newFav)){
					setStore({favourite : [...getStore().favourite, newFav]})}
					else{
						setStore({favourite : favourites.filter((oldFav)=> oldFav != newFav)})
					}
			}

			
		}

	};
};

export default getState;

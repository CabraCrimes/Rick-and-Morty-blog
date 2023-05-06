const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			character: [],

			location: [],

			episode: [],

			favourite: []
		},
		
		actions: {
			 getCharacter: async () => {
				 	const response = await fetch("https://rickandmortyapi.com/api/character")
					const data = await response.json();
					setStore({character: data.results})
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

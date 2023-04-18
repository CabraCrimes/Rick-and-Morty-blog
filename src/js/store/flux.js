const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			character: [],

			location: [],

			episode: [],
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
			}
		}

	};
};

export default getState;

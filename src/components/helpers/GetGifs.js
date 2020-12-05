export const getGifs = async (search) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(search)}&limit=5&api_key=GWNk3X9haJt175PEAQqLdgLCsTT4gsZ4`;
    const response = await fetch(url);
    const {
        data
    } = await response.json();

    const gifs = data.map(({
        id,
        title,
        images
    }) => {
        return {
            id,
            title,
            url: images.downsized_medium.url
        };
    });

    return gifs;
};
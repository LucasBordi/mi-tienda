

export async function getData(category) {
    const response = await fetch(
        'https://api.mercadolibre.com/sites/MLA/search?q=${category}');
    const data = await response.json();
    console.log(data);
    return data.results;
    }
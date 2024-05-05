const fetchProducts = async (query) => {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
    // ^ Aqui você precisa chamar a função fetch e passar a URL como argumento

    if (!response.ok) {
        throw new Error('Erro ao buscar produtos');
    }

    const data = await response.json();
    return data.results;
}

export default fetchProducts;

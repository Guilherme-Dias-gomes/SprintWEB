

const apiURL = ("https://viacep.com.br/ws/" + cep + "/json/", {
    method: 'GET',
    headers: {
        'Accept': 'application/json',


    },
})

fetch(apiURL)
.then(response => {
    if (!response.ok) {
        throw new Error("Não foi possível buscar od dados.")
    }
    return response.json();
})
.then(data => {
    console.log(data)
})
.catch(error => {
    console.log(error)
});
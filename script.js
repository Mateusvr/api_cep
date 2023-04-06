const findEstados = () => {
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            let estados = "";
            json.forEach(estado =>estados = estados +  `<option value ="${estado.sigla}">${estado.nome}</option>`);

            // console.log(estados)
            let uf = document.getElementById('uf')
            uf.innerHTML = estados
        })
}
 findEstados()

const findByCep = (input) => {
    console.log(input.value)
    fetch(`https://viacep.com.br/ws/${input.value}/json/`)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            let logradouro = document.getElementById('logradouro')
            logradouro.value = json.logradouro
            uf.value = json.uf
        }
        )
}
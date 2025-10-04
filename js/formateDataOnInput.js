const inputPrice = document.getElementById('price');

if(inputPrice){
    inputPrice.addEventListener('input', function(){
        // Obter o valor atual removendo qualquer caractere que não seja número
        let valuePrice = this.value.replace(/[^\d]/g, '')

        // Adicionar os separadores de milhares
        let formatedPrice = (valuePrice.slice(0, -2).replace(/\B(?=(\d{3})+(?!\d))/g, ' '))+ '' + valuePrice.slice(-2)

        // Adicionar a vírgula em até dois dígitos so houver centavos 
        if(formatedPrice.length > 2){
            formatedPrice = formatedPrice.slice(0, -2)+ ',' + formatedPrice.slice(-2)
        }

        this.value = formatedPrice
    })
}
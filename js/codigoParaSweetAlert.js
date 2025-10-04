// window.alert('Carregou')

function exclusionConfirmation(event, formId) {

    event.preventDefault()

    Swal.fire({
        title: 'Tem certeza?',
        text: 'Você não poderá desfazer isso!',
        icon: 'warning',

        showCancelButton: true,
        cancelButtonColor: '#0d6efd',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#dc3545',
        confirmButtonText: 'Excluir',
    }).then((result) => {
        if (result.isConfirmed) {
            document.getElementById(`formDelete${formId}`).submit()
        }
    })
}
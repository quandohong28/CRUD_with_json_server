const fetch = () => {
    fetch('http://locahost:3000/users')
    .then(response => response.json())
    .then(data => console.log(data)
    )
}

const render = () => {

}

const tableBody = document.querySelector('.table-body')

const tableRow = document.querySelector('.table-row')

const editButtons = document.querySelector('.edit-button')

editButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log('edit button clicked')
    })
})

const deleteButtonS = document.querySelector('.delete-button')
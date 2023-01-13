// Build a form with a title and a body input 
    // when pressing submit the form should make a post request to 
    // https://jsonplaceholder.typicode.com/posts
    // console.log the response
    // the API should respond with your title and body and an id: 101

$(document).ready(() => {
    $('#myForm').submit((event) => {
        event.preventDefault()
        const formData = {
            title: $('#title').val(),
            body: $('#body').val()
        }
        
        $.post(
            'https://jsonplaceholder.typicode.com/posts',
            formData,
            (data) => {console.log(data)}
        )

        $('#myForm').trigger('reset')
    })
})
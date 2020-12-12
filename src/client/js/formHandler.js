function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value;
    // checkForName(formText)

    console.log("::: Form Submitted :::")
    console.log(formText)
    Client.langProcessor('/nlp', formText)
}

export { handleSubmit }

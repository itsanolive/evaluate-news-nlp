// Function to call api fetch with data from input
const langProcessor = async (url, data) => {
    console.log(url, ' ', data);
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    // .then(res => res.json())
    .then(res => res.text())
    .then(text => console.log(text))
    // .then(function (res) {
    //     document.getElementById('results').innerHTML = res.message
    // })
}

export { langProcessor }

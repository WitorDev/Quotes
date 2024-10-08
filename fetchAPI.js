const quoteAuthor = document.querySelector("#quote-author")
const quoteBody = document.querySelector("#quote-body")
const quoteCategory = document.querySelector("#quote-category")
const reloadBtn = document.querySelector("a").style

// Hide reload button when loading
reloadBtn.display = "none"


// Fetch quotes

async function fetchQuote() {
    const url = "https://api.api-ninjas.com/v1/quotes"
    const APIKey = "Nvy/zTb9Whwf1KL9iNiPkQ==V4Aa3t9JRHV4KJxK"

    const response = await fetch(url, {
        headers: {
            'X-Api-Key': APIKey
        }
    })
    const data = await response.json()

    displayQuote(data)
}

// Display quotes

function displayQuote(quote) {
    if(JSON.stringify(quote).length > 200) {
        quoteAuthor.innerText = "Choosing Quote..."

        fetchQuote()
    } else {
        console.log(quote)

        quoteAuthor.innerText = `${quote[0].author}`
        quoteBody.innerText = `${quote[0].quote}`
        quoteCategory.innerText = `${quote[0].category}`

        reloadBtn.display = "block"
    }
}

fetchQuote()
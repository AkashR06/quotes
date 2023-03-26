getQuotes();
async function getQuotes(){
    try{
        let response = await fetch('https://dummyjson.com/quotes/random');
        let data = await response.json();
        console.log(data)
    } catch (error) {
        console.log(error.message)
    }
}
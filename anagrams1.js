const btn = document.getElementById("findButton")
const arrayAnagrams = document.querySelector(".mainDiv")

let count = 0
function getAnagramsOf(word){
    //limpando a lista para armazenar os anagramas
    arrayAnagrams.innerHTML=""
    let novaPalavra = alphabetize(word)
        //modificando as letras do argumento da função para minúsculas, em ordem alfabética
        //e cortando eventuais espaços do início ou do fim da palavra.
        function alphabetize(a){
           return a.toLowerCase().split("").sort().join("").trim()
        }
        
    //percorrendo array completo de palavras
    for(let i = 0; i < palavras.length; i++){
        let aux = palavras[i].toLowerCase().split("").sort().join("").trim()
        if(novaPalavra === aux){
            let tagP = document.createElement("p")
            tagP.innerText = palavras[i]
            arrayAnagrams.appendChild(tagP)
        }
    }
    console.log(arrayAnagrams)
    return arrayAnagrams
}


btn.addEventListener("click", function(){

    let typedText = document.getElementById("input").value
    getAnagramsOf(typedText)

})
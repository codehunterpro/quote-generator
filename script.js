// get quote function
const generateBtn = document.querySelector('#new-quote');
const quoteText = document.querySelector('#quote');
const quoteAuthor = document.querySelector('#author');
const tweetBtn = document.querySelector('.twitter-button');
const loader = document.querySelector('.loader');
const quoteContainer = document.querySelector('.quote-container');


const getQuote = async function () {



  const APIurl =
    "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";

  try {
    loading()
    const response = await fetch(APIurl);
    const data = await response.json();
    // passing data to quote generator function
    quoteText.innerHTML =quoteAuthor.innerHTML= '';
    quoteText.innerHTML = data.quoteText;
    quoteAuthor.innerHTML = data.quoteAuthor;
   
 
  complete();
  } catch (error) {
    complete()
    console.log("Whoops!, no quote found :) ", error);
    quoteContainer.innerHTML = `Something Went Wrong :)`;
    
  }
};

const tweetQuote = function(){
  const text = quoteText.innerHTML;
  const author = quoteAuthor.innerHTML;

  console.log(text);
  console.log(author);
  const url = `https://twitter.com/intent/tweet?text=${quoteText.innerHTML} - ${quoteAuthor.innerHTML}`;
  window.open(url,  '_blank')
  
};

const loading = function(){
  loader.hidden = false;
  quoteContainer.hidden = true;
};

const complete = function(){
  if(!loader.hidden){
    quoteContainer.hidden = false;
    loader.hidden = true;
  }
}

generateBtn.addEventListener('click', getQuote);
tweetBtn.addEventListener('click',tweetQuote);

//on load 
getQuote();

  





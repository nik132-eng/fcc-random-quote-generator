import React from 'react'

const Quote = ({quote, author}) => {
  console.log("🚀 ~ Quote ~ quote:", quote)
  return (
    <div id='quote-box'>
        <div>
            <div id="text">{quote}</div>
            <div id="author">-{author}</div>
        </div>
        <div>
            <div><a href="twitter.com/intent/tweet" id="tweet-quote"></a></div>
            <div id="new-quote"></div>
        </div>
    </div>
  )
}

export default Quote
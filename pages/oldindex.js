import React, { useState } from 'react'


// Without destructuring.

//const state = useState("")
// return <div>
// <input onChange={(e) => state[1](e.target.value)} type="text" placeholder="enter some text" />
// <p>{state[0]}</p>
// <p>{state[0]}</p>
// </div>
// }


const InputElement = () => {
    // setInputText updates state and that update is reflected in inputText
    const [inputText, setInputText] = useState(""); //useState gets an initial state which here is a string. An array is returned with a read only variable (inputText) which can be set with the second variable which is a function. Naming is free.
    const [historyList, setHistoryList] = useState([])
    return <div>
        <input onChange={(e) => {
            setInputText(e.target.value);
            setHistoryList([...historyList, e.target.value]);
        }
        } type="text" placeholder="enter some text" />
        <p>{inputText}</p>
        <hr/><br/>
        <ul>
            {
                historyList.map(rec => {
                    return <div>{rec}</div>
                })
            }
        </ul>
    </div>
}

export default InputElement;
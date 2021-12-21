import Styles from "./screen.module.css"


const parseInput = event => {
    event.preventDefault()
    let val = event.target.terminal.value + "\n ";
    console.log(val)
    event.target.terminal.value = val + " \n";
    event.target.textArea.value += "\n " + val
    console.log(val);
}

let currentInput;
const getInput = e => {
    currentInput = e.target.terminal.value;
}




export default function TerminalScreen(){
    
    return(
        <div className={Styles.container}>
            <h1>Hello Termux</h1>
            {/* to do:
                create cursor that blinks
                find a way to take in input
                find a way to diplay the typed input even after the \n
                find a way to run code when a \n is encountered

            */}
            <form 
                onSubmit={parseInput}
                
            >
                <input 
                    className={Styles.hiddenInputBox}
                    name="terminal" 
                    type="text"
                    autoFocus
                    defaultValue="guest@w3ndo.dev:~$ "
                />

                <textarea 
                    className={Styles.terminal}
                    name="textArea"
                    defaultValue={currentInput}
                    contentEditable="false"
                />
            </form>
        </div>
    )
}
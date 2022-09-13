import BeautifullScreen from "./BeautifulScreen";
import Number from "./AmazingNumberButton";
import GreatOperation from "./GreatOperationButton";
import Equal from "./MagnificientEqualButton";
import "../css/calculator.css"
import { useState } from "react";


export default function Calculator(){
    const number =[7,8,9,4,5,6,1,2,3,0,'.','C'];
    const bouton=['+','-','*','/'];
    let [screen, setScreen]=useState('0');
     function Onclick(e){        
        let lol= e.target.innerText
        switch (lol){
            case "+":
            case "-":
            case "*":
            case "/":
                setScreen(screen+lol)
                break
            case "=":
                setScreen(eval(screen))
                break
            case ".":
                setScreen()
                break
            case "C":
                setScreen("0")
                break
            default:
                if (screen.length === 1 && screen ==="0")
                {
                    setScreen(lol)
                }
                else                
                {
                    setScreen(screen+lol)
                }
        }
     }
    return(
        <div>
            

            <div className="screen">
                <BeautifullScreen value={screen}/>
            </div>
            <div className="corp">
                <div className="number">{
                number.map((number) =>
                <Number key={number}  bouton={number} handleClick={Onclick}/>
                    )
                  
            }
                </div>
                <div className='touche'>
                    <div className='numer'>{
                    bouton.map((bouton)=><GreatOperation key={bouton} bouton={bouton} handleClick={Onclick}/>)
                    }
                    </div>
                    <div className="equal">
                        
                    <Equal bouton="=" handleClick={Onclick}/>
                    </div>
                </div>
                

                
            </div>
        </div>
    )
}

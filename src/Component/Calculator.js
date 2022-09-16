import BeautifullScreen from "./BeautifulScreen";
import Number from "./AmazingNumberButton";
import GreatOperation from "./GreatOperationButton";
import Equal from "./MagnificientEqualButton";
import "../css/calculator.css"
import { useEffect, useState } from "react";
import ItSOverNineThousand from "./ItSOverNineThousand";


export default function Calculator(){
    const number =[7,8,9,4,5,6,1,2,3,0,'.','C'];
    const bouton=['+','-','*','/','SAVE'];
    let [screen, setScreen]=useState('0');
    let [Over,setOver]=useState(false)
    const [save,setSave]=useState(false)
    const[result,setResult]=useState([])
    useEffect(()=>{
        async function look(){
            let cherche= await fetch('http://localhost/calculator-9000/src/service/traitement.php?sort=affiche')
            let response=await cherche.json() 
            setResult(response)
        }
        look()
    },[save])
    useEffect(()=>{
        if(save===true){
            async function write(){
                let form=new FormData();
                form.append('calcul',localStorage.getItem('opera'))
                form.append('result',screen)
                let inscrire=await fetch('http://localhost/calculator-9000/src/service/traitement.php?sort=ecrire', {
                    method:"POST",
                    body:form

                })
               
            }
            write();
        }
    })
   
     function Onclick(e){        
        let lol= e.target.innerText
        switch (lol){
            case "+":
            case "-":
            case "*":
            case "/":
                setSave(false)
                if(typeof screen==="string"){
                    if(screen.slice(-1) ==="+"||screen.slice(-1) ==="-"||screen.slice(-1) ==='*'||screen.slice(-1) ==='/'){
                        if(screen.slice(0,-1)!==""){
                           let soul=screen.slice(0,-1)
                            setScreen(soul+lol)
                        }
                    }else{
                        setScreen(screen+lol)
                    }
                }else{
                    setScreen(screen+lol)
                }
                break
            case "=":
                localStorage.setItem('opera',screen)
                setScreen(eval(screen))
                eval(screen) >= 9000 ? setOver(true) : setOver(false) 
                break
            case ".":
                setSave(false)
                if(screen.includes('.')){
                    setScreen(screen)
                }else{
                    setScreen(screen+lol)
                }
                break
            case "C":
                setScreen("0")
                setOver(false)
                setSave(false)
                break
            case "SAVE":
                setSave(true)
                break
            default:
                setSave(false)
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
        <div className="box">
            
            <div>
               {
                Over===true && <ItSOverNineThousand/>
               }
            </div>
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
            <div>
                <h3>Resultat enregistré</h3>
                    <div className="result">
                        {
                        result.length>0&&result.map((res,index)=><p key={index}>{res.ope}={res.result}</p>)
                        }
                    </div>
                </div>
        </div>
    )
}

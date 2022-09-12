import BeautifullScreen from "./BeautifulScreen";
import Number from "./AmazingNumberButton";
import GreatOperation from "./GreatOperationButton";
import Equal from "./MagnificientEqualButton";
import "../css/calculator.css"
const number =[7,8,9,4,5,6,1,2,3,0,'.'];
const bouton=['+','-','*','/'];

export default function Calculator(){
    return(
        <div>
            

            <div className="screen">
                <BeautifullScreen/>
            </div>
            <div className="corp">
                <div className="number">{
                number.map((number) =>
                <Number key={number} number={number}/>
                    )
                  
            }
                </div>
                <div className='touche'>
                    <div className='numer'>{
                    bouton.map((bouton)=><GreatOperation key={bouton} bouton={bouton}/>)
                    }
                    </div>
                    <div className="equal">
                        
                    <Equal equal="="/>
                    </div>
                </div>
                

                
            </div>
        </div>
    )
}

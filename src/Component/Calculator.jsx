import BeautifullScreen from "./BeautifulScreen";
import Number from "./AmazingNumberButton";
import GreatOperation from "./GreatOperationButton";
import Equal from "./MagnificientEqualButton";
import "../css/calculator.css"
export default function Calculator(){
    return(
        <div>
            <div className="screen">
                <BeautifullScreen/>
            </div>
            <div className="corp">
                <Number/>
                <div className='touche'>
                    <GreatOperation/>
                    <Equal/>

                </div>
            </div>
        </div>
    )
}

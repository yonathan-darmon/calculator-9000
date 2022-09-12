import BeautifullScreen from "./BeautifulScreen";
import Number from "./AmazingNumberButton";
import GreatOperation from "./GreatOperationButton";
import "../css/calculator.css"
export default function Calculator(){
    return(
        <div>
            <div className="screen">
                <BeautifullScreen/>
            </div>
            <div className="corp">
                <Number/>
                <GreatOperation/>
            </div>
        </div>
    )
}

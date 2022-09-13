import '../css/greatop.css'
export default function GreatOperation(props){

    return(
        <button onClick={(e)=>props.handleClick(e)}>{props.bouton}</button>
    )
}
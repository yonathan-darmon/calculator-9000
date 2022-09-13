import '../css/equal.css'

export default function Equal(props){
    return(
       <button  onClick={(e)=>props.handleClick(e)}>{props.bouton}</button>
    )
}

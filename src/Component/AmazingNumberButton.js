import '../css/amazing.css'
function Number(props){
    return(
        <button  onClick={(e)=>props.handleClick(e)} >{props.bouton}</button>
    
    )
}
export default Number
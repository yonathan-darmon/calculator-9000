import '../css/greatop.css'
export default function GreatOperation(){
    const bouton=['+','-','*','/'];
    return(
    <div className='bouton'>
    {
        bouton.map ((bouton) =>
         <button key={bouton}>{bouton}</button>
         )
        }
    </div>
    )
}
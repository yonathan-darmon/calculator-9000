import '../css/amazing.css'
function Number(props){
    const number =[7,8,9,4,5,6,1,2,3,0,'.']
    return(
        <div className='number'>{
        number.map ((number) =>
         <button key={number}>{number}</button>
         )
        }</div>
    )
}
export default Number
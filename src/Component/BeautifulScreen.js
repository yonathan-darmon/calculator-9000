import '../css/beautifullscreen.css'
function BeautifullScreen(props){
return (
<div className="affichage">
<input type="text" value={props.value} readOnly>

</input>
</div>
);
}

export default BeautifullScreen
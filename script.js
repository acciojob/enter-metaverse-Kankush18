//your JS code here. If required.
document.getElementById('enterBtn').addEventListener('click',(e)=>{
	e.preventDefault();
	let contentElement=document.getElementById('status');
	contentElement.innerHTML="<h1>Entered Metaverse</h1>";
});
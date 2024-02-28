//your JS code here. If required.
document.querySelector('button').addEventListener('click',(e)=>{
	e.preventDefault();
	let content=document.getElementsByClassName('content')[0];
	content.innerText='Entered the Metaverse';
})
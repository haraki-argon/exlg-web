function openNightMode(){
	document.querySelector("body").className+=" night";
	// document.querySelector("html").classList.add("night");
	var nlist=document.querySelector("body").childNodes;
	for(var i=0;i<nlist.length;i++){
		nlist[i].className+=" night";
	}
}
// window.onload=function(){
// 	var d = new Date();
// 	var nowhour = d.getHours();
// 	if(nowhour>=10||nowhour<=6){
// 		openNightMode();
// 	}
// }
$(document).ready(function(){
	var d = new Date();
	var nowhour = d.getHours();
	if(nowhour>=22||nowhour<=6){
		openNightMode();
	}
	var baop=localStorage.getItem("extendluoguopenba");
	if(baop=="1"){
		try{
			document.querySelector("p.maker-infor a").className+=" minstdfx";
		}
		catch{
			document.querySelector("p.maker-info a").className+=" minstdfx";
		}
	}
});

function minstdfx(open){
	//appear 0 disappear 1
	localStorage.setItem("extendluoguopenba",open);
}
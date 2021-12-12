function openNightMode(){
	document.querySelector("body").className+=" night";
	// document.querySelector("html").classList.add("night");
	var nlist=document.querySelector("body").childNodes;
	for(var i=0;i<nlist.length;i++){
		nlist[i].className+=" night";
	}
}
$(document).ready(function(){
	var d = new Date();
	var nowhour = d.getHours();
	var nowmon = d.getMonth();
	var nowday = d.getDate();
	if(nowhour>=22||nowhour<=6){
		openNightMode();
	}
	if(nowmon==11&&nowday==13){
		document.querySelector("html").className+=" pray";
	}
	if(nowmon==1&&nowday==22){
		document.querySelector(".bgimg").className+=" fascinated";
	}
	if(nowmon==2){
		document.querySelector(".bgimg").className+=" sakural";
	}
	if(nowmon==8){
		document.querySelector(".bgimg").className+=" fallal";
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
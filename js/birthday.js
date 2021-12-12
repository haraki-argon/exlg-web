$(document).ready(function(){
	var birth =[[0,0],[5,7],[8,17],[0,0],[0,0],[0,0],[12,6],[8,10],[11,10],[0,0],[0,0],[0,0],[1,2],[4,21],[1,16],[0,0]]
	var da = new Date();
	var nmon = da.getMonth();
	var nday = da.getDate();
	
	// console.log(nmon+" "+nday);
	var tep=document.querySelectorAll(".cul li");
	var ter=document.querySelectorAll(".cul li a");
	var ten=document.querySelectorAll(".cul li a p");
	var flag=1;
	for(var i=1;i<birth.length;i++){
		// console.log(birth[i][0]+" "+birth[i][1]);
		if(nmon+1==birth[i][0]&&nday==birth[i][1]){
			tep[i-1].className="cheer";
			ter[i-1].title="祝 "+ten[i-1].innerText+" 生日快乐！";
			flag=0;
			
		}
	}
	if(flag==0)document.querySelector(".bgimg").className+=" birthal";
});
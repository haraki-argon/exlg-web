function fx(){
	var minfx=document.querySelector(".content button");
	var stdfx=document.querySelectorAll(".content input");
	var afx=stdfx[0].value,bfx=stdfx[1].value,cfx=stdfx[2].value;
	if(minfx.innerText=="激活！"){
		minfx.innerText="再点一次确认！";
		return;
	}
	window.location.href="https://service-cmrlfv7t-1305163805.sh.apigw.tencentcs.com/release/"+bfx+"/"+afx+"/"+cfx+"/";
}
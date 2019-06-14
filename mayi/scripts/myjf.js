var one=document.getElementById('option');
var ooo=one.getElementsByTagName('li');
var pk=document.getElementById('subfield-top');
var ok=document.getElementById('subfield-center');
var ck=document.getElementById('subfield-buttom');
// console.log(ooo[1]);
// var i=0;
// var b=0
// for(i=0;i<3;i++){
// ooo[i].onclick=function (){
// 	for(b=0;b<3;b++)
// 		ooo[i].style.color="white";
// 		ooo[i].style.borderRight="none";
// }
// 	this.style.color="deepskyblue";
// 	this.style.borderRight="2px solid deepskyblue";
// 	this.style.position="relative";
// 	this.style.left="2px";
// }
// var oBox=document.getElementById('content');
// var aLi=oBox.getElementsByTagName('li');

// 	for(var i=0;i<4;i++)
// 	{
// 		aLi[i].index=i;
// 		aLi[i].onclick=function()
// 		{
// 			for(var j=0;j<4;j++)
// 			{
// 				aLi[j].id="";
// 			}
// 			aLi[this.index].id="active";
// 			return false;
// 		}
// 	}


ooo[0].onclick=function (){
	ooo[0].style.color="deepskyblue";
	ooo[0].style.borderRight="2px solid deepskyblue";
	ooo[0].style.position="relative";
	ooo[0].style.left="2px";
	ooo[1].style.color="white";
	ooo[1].style.borderRight="none";
	ooo[2].style.color="white";
	ooo[2].style.borderRight="none";
	pk.style.display="block";
	ok.style.display="none";
	ck.style.display="none";
}
ooo[1].onclick=function (){
	ooo[1].style.color="deepskyblue";
	ooo[1].style.borderRight="2px solid deepskyblue";
	ooo[1].style.position="relative";
	ooo[1].style.left="2px";
	ooo[0].style.color="white";
	ooo[0].style.borderRight="none";
	ooo[2].style.color="white";
	ooo[2].style.borderRight="none";
	pk.style.display="none";
	ck.style.display="none";
	ok.style.display="block";
}
ooo[2].onclick=function (){
	ooo[1].style.color="white";
	ooo[1].style.borderRight="none";
	ooo[0].style.color="white";
	ooo[0].style.borderRight="none";
	ooo[2].style.color="deepskyblue";
	ooo[2].style.borderRight="2px solid deepskyblue";
	ooo[2].style.position="relative";
	ooo[2].style.left="2px";
	pk.style.display="none";
	ok.style.display="none";
	ck.style.display="block";
}

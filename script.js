/* INIT BLOCK */
let currentProgress=0;

$("#btn1").on('click',{val: 1}, addValue);
$("#btn3").on('click',{val: 3}, addValue);
$("#btn7").on('click',{val: 7}, addValue);

/* CLICK BUTTONS BLOCK */
function addValue(event){
	currentProgress+=event.data.val;
	let strCurrentProgressValue=currentProgress+"%";
	$(".progress-bar").css({width: strCurrentProgressValue});
	$(".progress-bar").text(strCurrentProgressValue);
}
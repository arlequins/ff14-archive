$('.btn.btn-default.mine').click(function(){
	var collapse_content_selector = $(this).attr('href');					
			
	//make the collapse content to be shown or hide
	var toggle_switch = $(this);
	$(collapse_content_selector).toggle(function(){
	  if($(this).css('display')=='none'){
						//change the button label to be 'Show'
		toggle_switch.html('펼치기');
	  }else{
						//change the button label to be 'Hide'
		toggle_switch.html('줄이기');
	  }
	});
});



function open_treasure() {
	document.getElementById("treasure").style.display = "block";
    document.getElementById("open_treasure").innerHTML = "숨기기";
}
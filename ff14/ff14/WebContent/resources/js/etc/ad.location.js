       var mode = 1;
       function adLocate() {
            if ($(window).width() >= 992) {
                old_mode = mode;
                mode = 1;
                if (old_mode != mode) 
				$("#ad_3").append($("#movead2"));
			     document.getElementById("ad_3").style.display = "block";
				 document.getElementById("ad_4").style.display = "none";
			} else {
                old_mode = mode;
                mode = 0;
                if (old_mode != mode) 
					$("#ad_3").append($("#movead2"));
			     document.getElementById("ad_3").style.display = "none";
			     document.getElementById("ad_4").style.display = "block";
			}
       }
       window.onresize = function() { adLocate() };
       $('document').ready(adLocate());
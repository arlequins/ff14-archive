var mode3 = 1;
       function adLocate3() {
            if ($(window).width() >= 992) {
                old_mode3 = mode3;
                mode3 = 1;
                if (old_mode3 != mode3) $("#item_ads1").append($("#movead3"));
			     document.getElementById("item_ads1").style.display = "block";
				 document.getElementById("item_ads2").style.display = "none";
			} else {
                old_mode3 = mode3;
                mode3 = 0;
                if (old_mode != mode3) $("#item_ads1").append($("#movead3"));
			     document.getElementById("item_ads1").style.display = "none";
			     document.getElementById("item_ads2").style.display = "block";
			}
       }
          window.onresize = function() { adLocate3() };
       $('document').ready(adLocate3());

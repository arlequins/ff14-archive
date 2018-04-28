       var modepa = 1;
       function paLocate() {
            if ($(window).width() >= 992) {
                old_modepa = modepa;
                modepa = 1;
                if (old_modepa != modepa) 
				$("#pa_1").append($("#movepa1"));
			     document.getElementById("pa_1").style.display = "block";
				 document.getElementById("pa_2").style.display = "none";
				$("#pa_3").append($("#movepa2"));
			     document.getElementById("pa_3").style.display = "block";
				 document.getElementById("pa_4").style.display = "none";
				$("#pa_5").append($("#movepa3"));
			     document.getElementById("pa_5").style.display = "block";
				 document.getElementById("pa_6").style.display = "none";
				 document.getElementById("pa_10").style.display = "none";
				 document.getElementById("pa_11").style.display = "none";
				 document.getElementById("pa_12").style.display = "none";
				 document.getElementById("pa_13").style.display = "block";
				 document.getElementById("pa_14").style.display = "block";
				 document.getElementById("pa_15").style.display = "block";
				$("#pa_13").append($("#movepa5"));
				$("#pa_14").append($("#movepa6"));
				$("#pa_15").append($("#movepa7"));
			} else {
                old_modepa = modepa;
                modepa = 0;
                if (old_modepa != modepa) 
				$("#pa_2").append($("#movepa1"));
			     document.getElementById("pa_1").style.display = "none";
			     document.getElementById("pa_2").style.display = "block";
				$("#pa_4").append($("#movepa2"));
			     document.getElementById("pa_3").style.display = "none";
			     document.getElementById("pa_4").style.display = "block";
				$("#pa_6").append($("#movepa3"));
			     document.getElementById("pa_5").style.display = "none";
			     document.getElementById("pa_6").style.display = "block";
			     document.getElementById("pa_10").style.display = "block";
			     document.getElementById("pa_11").style.display = "block";
			     document.getElementById("pa_12").style.display = "block";
				 document.getElementById("pa_13").style.display = "none";
				 document.getElementById("pa_14").style.display = "none";
				 document.getElementById("pa_15").style.display = "none";
				$("#pa_10").append($("#movepa5"));
				$("#pa_11").append($("#movepa6"));
				$("#pa_12").append($("#movepa7"));
			}
       }
       window.onresize = function() { paLocate() };
       $('document').ready(paLocate());
function switchBg(checked){
	if (checked === "file"){
		document.getElementById("bgfile").disabled=false;
		document.getElementById("bgdata").disabled=true;
		$("input[name='bgpreset']").attr("disabled","disabled");
	} else if (checked === "data"){
		document.getElementById("bgdata").disabled=false;
		$("input[name='bgpreset']").attr("disabled","disabled");
		document.getElementById("bgfile").disabled=true;
	} else if (checked === "preset"){
		$("input[name='bgpreset']").attr("disabled",false);
		document.getElementById("bgdata").disabled=true;
		document.getElementById("bgfile").disabled=true;
	}
}
function switchBw(checked){
	if (checked === "bwgsm"){
		document.getElementById("bwfile").disabled=true;
		document.getElementById("GSM").disabled=false;
	} else {
		document.getElementById("bwfile").disabled=false;
		document.getElementById("GSM").disabled=true;
	}
}
function switchgenome(checked){
	if (checked === "hg19" || checked==="hg38"){
		document.getElementById("meth2").disabled = true;
		document.getElementById("hmc2").disabled = true;
		document.getElementById("meth1").disabled = false;
		document.getElementById("hmc1").disabled = false;
	} else {
		document.getElementById("meth1").disabled = true;
		document.getElementById("hmc1").disabled = true;
		document.getElementById("meth2").disabled = false;
		document.getElementById("hmc2").disabled = false;
	}
}
	
function check_ratio(id){
	return document.getElementById(id).checked;	
}

function validate_required(value,alerttxt){
	if (value==null||value==""){
		alert(alerttxt);return false;
	} else {return true}
}

function session_on_the_run(){
	var temp= $.get("/GsmPlot/sessionrun");
	console.log(temp);
	return temp.session
}

function validate_form(){
	//if (check_ratio("bwgsm")){
	//	var gsmvalue = document.forms["submit_form"]["GSM"].value;
	//	if (validate_required(gsmvalue,"Please input GSM code!")==false){ return false;}	
	//}
	if (check_ratio("bgmanualgene")){
		if (validate_required(document.forms["submit_form"]["bgdata"].value,"Please input gene list!")==false){ return false;}}
	if (!(is_integer("before")&&is_integer("after")&&is_integer("binsize")&&is_integer("scale"))){
		alert("Please enter integer in plot setting!");
		return false;
	}
	if (session_on_the_run()){
		alert("Only one running process for one user!");
		return false;
	}
	var f = document.getElementById("bwfile").value;
	var gsmcontent = document.getElementById("GSM").value;
	alert(f);
	alert(gsmcontent);
	if (f==="" && gsmcontent===""){
		alert("No input files. Either enter GSM id or set up uploading file.");
		return false;
	}
	$("input#Process").after('<div class="spinner"></div><p>Uploading files. Please wait and don\'t refresh or close the page.</p>');
	//window.removeEventListener("beforeunload",destroy_session);
	return true;
}

function is_integer(idname){
	obj=$("input#"+idname).val();
	if (obj!=null && obj!=""){
		return !isNaN(obj);
	}
	return false 
}
		
function put_placeholder(id,ph){
	$('#'+id).val(ph);
	$('#'+id).focus(function(){
		if ($(this).val() == ph) {
			$(this).val('');
		}
	});
	if (id==="bgdata"){
	$('#'+id).blur(function(){
		if ($(this).val() == ''){
			$(this).val(ph);
		}
	});}
}


/**
 * Created by HAO on 2017/3/1.
 * Brief   :
 * Version :
 */

function clickLoginBtnFunc(){
//	alert("clickLoginBtn");
	
	document.querySelector(".cont_forms").className = "cont_forms cont_forms_active_login";
	document.querySelector(".cont_form_login").style.display = "block";
	document.querySelector(".cont_form_sign_up").style.opacity = "0";	//隐藏注册信息界面
	
	setTimeout(function(){
		document.querySelector(".cont_form_login").style.opacity = "1";	//显示登录信息界面
	}, 400);
	
	setTimeout(function(){
		document.querySelector(".cont_form_sign_up").style.display = "none";
	}, 200);
}

function clickRegisterBtnFunc(){
//	alert("clickRegisterBtn");
	
	document.querySelector(".cont_forms").className = "cont_forms cont_forms_active_sign_up";
	document.querySelector(".cont_form_sign_up").style.display = "block";
	document.querySelector(".cont_form_login").style.opacity = "0";
	
	setTimeout(function(){
		document.querySelector(".cont_form_sign_up").style.opacity = "1";
	}, 100);
	
	setTimeout(function(){
		document.querySelector(".cont_form_login").style.display = "none";
	}, 400);
}

function clickLoginSignUpFunc(){
	alert("clickLoginSignUpFunc");
	document.querySelector(".cont_forms").className = "cont_forms";
	document.querySelector(".cont_form_sign_up").style.opacity = "0";
	document.querySelector(".cont_form_login").style.opacity = "0";
	
	setTimeout(function(){
		document.querySelector(".cont_form_sign_up").style.display = "none";
		document.querySelector(".cont_form_login").style.display = "none";
	}, 500);
}





function openAccount()
{
	var bankName=document.getElementById("selectlist").value;
	var personName=document.getElementById("name").value;
	var phoneNumber=document.getElementById("pno").value;
	var dob=document.getElementById("dob").value;
	var genderMale=document.getElementById("male").checked;
	var genderFemale=document.getElementById("female").checked;

	if (genderMale==true)
	{
	}
	if (genderFemale==true)
	{	
	}
	
	var currentDate= new Date();
	var currentDateString = currentDate.toString();
	year=(parseInt(currentDate.getFullYear())-(parseInt(dob.slice(0,4))));
	month=(parseInt(currentDate.getMonth()+1)-(parseInt(dob.slice(5,7))));
	day=(parseInt(currentDate.getDate())-(parseInt(dob.slice(8,10))));
	console.log(currentDate.getDate()+"----"+dob.slice(8,10));	
	if (day<0)
	{
		month=month-1;
		day=day+30;
	}

	if(month<0)
	{
		year=year-1;
		month=month+12;	
	}
	var age="age is:"+year+" "+month+" "+day+"";
	bankValidation(bankName,personName,phoneNumber,dob,genderMale,genderFemale);
	clear();
}

var year;
var month;
var day;
function bankValidation(selectbank,name,mobile,dob,male,female)
{
	var status=true;
	if(selectbank=="")
	{
		document.getElementById("selectlist").style.borderColor="red";
		document.getElementById("selectlisterror").style.color="red";
		document.getElementById("selectlisterror").innerHTML="Please Select Bank Name !";
		status=false;
	}else
	{
		document.getElementById("selectlist").style.bordercolor="";
		document.getElementById("selectlisterror").innerHTML="";
		document.getElementById("selectlisterror").style.color="";

	}
	if(name=="")
	{
		document.getElementById("name").style.borderColor="red";
		document.getElementById("nameerror").style.color="red";
		document.getElementById("nameerror").innerHTML="Please Enter Your Name !";
		status=false;
	}else
	{
		document.getElementById("name").style.bordercolor="";
		document.getElementById("nameerror").innerHTML="";
		document.getElementById("nameerror").style.color="";

	}
	if((mobile=="")||(isNaN(mobile)||(mobile.length!=10)))
	{
		document.getElementById("pno").style.borderColor="red";
		document.getElementById("pnoerror").style.color="red";
		document.getElementById("pnoerror1").style.color="red";
		document.getElementById("pnoerror").innerHTML="Please Enter Your Phone Number !";
		document.getElementById("pnoerror1").innerHTML="Please Enter 10 Digit Number !";
		status=false;
	}else
	{
		document.getElementById("pno").style.borderColor="";
		document.getElementById("pnoerror").style.color="";
		document.getElementById("pnoerror1").style.color="";
		document.getElementById("pnoerror").innerHTML="";
		document.getElementById("pnoerror1").innerHTML="";
	}
	if(dob=="")
	{
		document.getElementById("dob").style.borderColor="red";
		document.getElementById("doberror").style.color="red";
		document.getElementById("doberror").innerHTML="Please Select Your Date Of Birth !";

		status=false;
	}else
	{
		var msg;
		if(year>18)
			{
			msg=" ";
			}else 
			{
			msg="your age less then 18";
			}	
			console.log(msg);
		document.getElementById("dob").style.bordercolor="";
		document.getElementById("doberror").innerHTML=msg;
		document.getElementById("doberror").style.color="";
	}
	if((male==false)&&(female==false))
	{
		document.getElementById("male").style.borderColor="red";
		document.getElementById("female").style.borderColor="red";
		document.getElementById("gendererror").style.color="red";
		document.getElementById("gendererror").style.color="red";
		document.getElementById("gendererror").innerHTML="Whai Is Your Gender !"
	}else
	{
		document.getElementById("gendererror").innerHTML=""
		document.getElementById("male").style.borderColor="";
		document.getElementById("female").style.borderColor="";
		document.getElementById("gendererror").style.color="";
		document.getElementById("gendererror").style.color="";
	}
	return status;
}

function clear()
{
	document.getElementById("selectlist").value="";
	document.getElementById("selectlisterror").value="";

	document.getElementById("name").value="";
	document.getElementById("nameerror").value="";

	document.getElementById("pno").value="";
	document.getElementById("pnoerror").value="";
	document.getElementById("pnoerror1").value="";

	document.getElementById("dob").value="";
	document.getElementById("doberror").value="";

	document.getElementById("gendererror").value="";
	document.getElementById("male").checked="";
	document.getElementById("female").checked="";

}

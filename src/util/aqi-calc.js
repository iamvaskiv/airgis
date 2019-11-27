export function AQICategory(AQIndex){
	var AQI=parseFloat(AQIndex)
	var AQICategory;
	if (AQI<=50){
		AQICategory="Good";
	}
	else if (AQI>50 && AQI<=100){
		AQICategory="Moderate";
	}
	else if (AQI>100 && AQI<=150){
		AQICategory="Unhealthy for Sensitive Groups";
	}
	else if (AQI>150 && AQI<=200){
		AQICategory="Unhealthy";
	}
	else if (AQI>200 && AQI<=300){
		AQICategory="Very Unhealthy";
	}
	else if (AQI>300 && AQI<=400){
		AQICategory="Hazardous";
	}
	else if (AQI>400 && AQI<=500){
		AQICategory="Hazardous";
	}
	else{
		AQICategory="Out of Range";
	}
	return AQICategory;
}

function Linear(AQIhigh, AQIlow, Conchigh, Conclow, Concentration){
	var linear;
	var Conc=parseFloat(Concentration);
  	var a;
	a=((Conc-Conclow)/(Conchigh-Conclow))*(AQIhigh-AQIlow)+AQIlow;
	linear=Math.round(a);
  	return linear;
}

export function AQIPM25(Concentration)
{
  var Conc=parseFloat(Concentration);
  var c;
  var AQI;
  c=(Math.round(10*Conc))/10;
  if (c>=0 && c<15.5)
    {
      AQI=Linear(50,0,15.4,0,c);
    }
  else if (c>=15.5 && c<35.5)
    {
      AQI=Linear(100,51,35.4,15.5,c);
    }
  else if (c>=35.5 && c<65.5)
    {
      AQI=Linear(150,101,65.4,35.5,c);
    }
  else if (c>=65.5 && c<150.5)
    {
      AQI=Linear(200,151,150.4,65.5,c);
    }
  else if (c>=150.5 && c<250.5)
    {
      AQI=Linear(300,201,250.4,150.5,c);
    }
  else if (c>=250.5 && c<350.5)
    {
      AQI=Linear(400,301,350.4,250.5,c);
    }
  else if (c>=350.5 && c<500.5)
    {
      AQI=Linear(500,401,500.4,350.5,c);
    }
  else
    {
      AQI="Out of Range";
    }
  return AQI;
}
//line63
function AQIPM10(Concentration)
{
  var Conc=parseFloat(Concentration);
  var c;
  var AQI;
  c=Math.round(Conc);
  if (c>=0 && c<55)
    {
      AQI=Linear(50,0,54,0,c);
    }
  else if (c>=55 && c<155)
    {
      AQI=Linear(100,51,154,55,c);
    }
  else if (c>=155 && c<255)
    {
      AQI=Linear(150,101,254,155,c);
    }
  else if (c>=255 && c<355)
    {
      AQI=Linear(200,151,354,255,c);
    }
  else if (c>=355 && c<425)
    {
      AQI=Linear(300,201,424,355,c);
    }
  else if (c>=425 && c<505)
    {
      AQI=Linear(400,301,504,425,c);
    }
  else if (c>=505 && c<605)
    {
      AQI=Linear(500,401,604,505,c);
    }
  else
    {
      AQI="Out of Range";
    }
  return AQI;
}
//line104
function AQICO(Concentration)
{
  var Conc=parseFloat(Concentration);
  var c;
  var AQI;
  c=(Math.round(10*Conc))/10;
  if (c>=0 && c<4.5)
    {
      AQI=Linear(50,0,4.4,0,c);
    }
  else if (c>=4.5 && c<9.5)
    {
      AQI=Linear(100,51,9.4,4.5,c);
    }
  else if (c>=9.5 && c<12.5)
    {
      AQI=Linear(150,101,12.4,9.5,c);
    }
  else if (c>=12.5 && c<15.5)
    {
      AQI=Linear(200,151,15.4,12.5,c);
    }
  else if (c>=15.5 && c<30.5)
    {
      AQI=Linear(300,201,30.4,15.5,c);
    }
  else if (c>=30.5 && c<40.5)
    {
      AQI=Linear(400,301,40.4,30.5,c);
    }
  else if (c>=40.5 && c<50.5)
    {
      AQI=Linear(500,401,50.4,40.5,c);
    }
  else
    {
      AQI="Out of Range";
    }
  return AQI;
}
//line145
function AQISO2(Concentration)
{
  var Conc=parseFloat(Concentration);
  var c;
  var AQI;
  c=(Math.round(Conc))/1000;
  if (c>=0 && c<.035)
    {
      AQI=Linear(50,0,.034,0,c);
    }
  else if (c>=.035 && c<.145)
    {
      AQI=Linear(100,51,.144,.035,c);
    }
  else if (c>=.145 && c<.225)
    {
      AQI=Linear(150,101,.224,.145,c);
    }
  else if (c>=.225 && c<.305)
    {
      AQI=Linear(200,151,.304,.225,c);
    }
  else if (c>=.305 && c<.605)
    {
      AQI=Linear(300,201,.604,.305,c);
    }
  else if (c>=.605 && c<.805)
    {
      AQI=Linear(400,301,.804,.605,c);
    }
  else if (c>=.805 && c<1.005)
    {    
      AQI=Linear(500,401,1.004,.805,c);
    }
  else
    {
      AQI="Out of Range";
    }
  return AQI;
}
//line186
function AQIOzone8hr(Concentration)
{
  var Conc=parseFloat(Concentration);
  var c;
  var AQI;
  c=(Math.round(Conc))/1000;
  if (c>=0 && c<.060)
    {
      AQI=Linear(50,0,0.059,0,c);
    }
  else if (c>=.060 && c<.076)
    {
      AQI=Linear(100,51,.075,.060,c);
    }
  else if (c>=.076 && c<.096)
    {
      AQI=Linear(150,101,.095,.076,c);
    }
  else if (c>=.096 && c<.116)
    {
      AQI=Linear(200,151,.115,.096,c);
    }
  else if (c>=.116 && c<.375)
    {
      AQI=Linear(300,201,.374,.116,c);
    }
  else
    {
      AQI="Out of Range";
    }
  return AQI;
}
//line219
function AQIOzone1hr(Concentration)
{
  var Conc=parseFloat(Concentration);
  var c;
  var AQI;
  c=(Math.round(Conc))/1000;
  if (c>=.125 && c<.165)
    {
      AQI=Linear(150,101,.164,.125,c);
    }
  else if (c>=.165 && c<.205)
    {
      AQI=Linear(200,151,.204,.165,c);
    }
  else if (c>=.205 && c<.405)
    {
      AQI=Linear(300,201,.404,.205,c);
    }
  else if (c>=.405 && c<.505)
    {
      AQI=Linear(400,301,.504,.405,c);
    }
  else if (c>=.505 && c<.605)
    {
      AQI=Linear(500,401,.604,.505,c);
    }
  else
    {
      AQI="Out of Range";
    }
  return AQI;
}
//252
function AQINO2(Concentration)
{
  var Conc=parseFloat(Concentration);
  var c;
  var AQI;
  c=(Math.round(Conc/10))/100;
  if (c>=.65 && c<1.25)
    {
      AQI=Linear(300,201,1.24,.65,c);
    }
  else if (c>=1.25 && c<1.65)
    {
      AQI=Linear(400,301,1.64,1.25,c);
    }
  else if (c>=1.65 && c<2.05)
    {
      AQI=Linear(500,401,2.04,1.65,c);
    }
  else
    {
      AQI="Out of Range";
    }
  return AQI;
}

// function AQICalcCToA(form)
// {
//   var b;
//   document.form.inputbox.style.textAlign="center";
//   document.form.inputbox.style.backgroundColor="white";
//   if (document.form.pollutant.selectedIndex == '0')
//     {
//       alert("You have not selected a pollutant.");	
//     }
//   if (document.form.pollutant.selectedIndex == '1')
//     {
//       b=AQIPM25(document.form.inputbox.value);	
//     }
//   else if (document.form.pollutant.selectedIndex == '2')
//     {
//       b=AQIPM10(document.form.inputbox.value);	
//     }
//   else if (document.form.pollutant.selectedIndex == '3')
//     {
//       b=AQICO(document.form.inputbox.value);	
//     }
//   else if (document.form.pollutant.selectedIndex == '4')
//     {
//       b=AQISO2(document.form.inputbox.value);	
//     }
//   else if (document.form.pollutant.selectedIndex == '5')
//     {
//       b=AQIOzone8hr(document.form.inputbox.value);	
//     }
//   else if (document.form.pollutant.selectedIndex == '6')
//     {
//       b=AQIOzone1hr(document.form.inputbox.value);	
//     }
//   else if (document.form.pollutant.selectedIndex == '7')
//     {
//       b=AQINO2(document.form.inputbox.value);	
//     }
//   if (b == "Out of Range"){
// 		setOutofRange();
//     }
//   else{
//       document.form.outputbox1.value=b;
//       document.form.outputbox2.value=AQICategory(b);
//     }
// 	document.form.outputbox1.style.textAlign="center";
// 	document.form.outputbox2.style.textAlign="center";
// 	document.form.TextSensitive.style.textAlign="center";
// 	document.form.HealthEffects.style.textAlign="center";
// 	document.form.Cautionary.style.textAlign="center";
// 	if (document.form.outputbox2.value == 'Good'){
// 		Good();
// 	}
// 	else if (document.form.outputbox2.value == 'Moderate'){
// 		Moderate();
// 	}
// 	else if (document.form.outputbox2.value == 'Unhealthy for Sensitive Groups'){
// 		UnhealthyForSensitiveGroups();
// 	}
// 	else if (document.form.outputbox2.value == 'Unhealthy'){
// 		Unhealthy();
// 	}
// 	else if (document.form.outputbox2.value == 'Very Unhealthy'){
// 		VeryUnhealthy();
// 	}
// 	else if (document.form.outputbox2.value == 'Hazardous'){
// 		Hazardous();
// 	}  
// 	else{
// 		clearAll();
// 	}
//   return true;
// }

// function InvLinear(AQIhigh, AQIlow, Conchigh, Conclow, a){
// 	var AQIhigh;
// 	var AQIlow;
// 	var Conchigh;
// 	var Conclow;
// 	var a;
// 	var c;
// 	c=((a-AQIlow)/(AQIhigh-AQIlow))*(Conchigh-Conclow)+Conclow;
// 	return c;
// }
// function ConcPM25(a){
// 	if (a>=0 && a<=50){
// 		ConcCalc=InvLinear(50,0,15.4,0,a);
// 	}
// 	else if (a>50 && a<=100){
// 		ConcCalc=InvLinear(100,51,35.4,15.5,a);
// 	}
// 	else if (a>100 && a<=150){
// 		ConcCalc=InvLinear(150,101,65.4,35.5,a);
// 	}
// 	else if (a>150 && a<=200){
// 		ConcCalc=InvLinear(200,151,150.4,65.5,a);
// 	}
// 	else if (a>200 && a<=300){
// 		ConcCalc=InvLinear(300,201,250.4,150.5,a);
// 	}
// 	else if (a>300 && a<=400){
// 		ConcCalc=InvLinear(400,301,350.4,250.5,a);
// 	}
// 	else if (a>400 && a<=500){
// 		ConcCalc=InvLinear(500,401,500.4,350.5,a);
// 	}
// 	else{
// 		ConcCalc="Out of Range";
// 	}
// 	return ConcCalc;
// }

// function ConcPM10(a){
// 	if (a>=0 && a<=50){
// 		ConcCalc=InvLinear(50,0,54,0,a);
// 	}
// 	else if (a>50 && a<=100)	{
// 		ConcCalc=InvLinear(100,51,154,55,a);
// 	}
// 	else if (a>100 && a<=150){
// 		ConcCalc=InvLinear(150,101,254,155,a);
// 	}
// 	else if (a>150 && a<=200){
// 		ConcCalc=InvLinear(200,151,354,255,a);
// 	}
// 	else if (a>200 && a<=300){
// 		ConcCalc=InvLinear(300,201,424,355,a);
// 	}
// 	else if (a>300 && a<=400){
// 		ConcCalc=InvLinear(400,301,504,425,a);
// 	}
// 	else if (a>400 && a<=500){
// 		ConcCalc=InvLinear(500,401,604,505,a);
// 	}
// 	else{
// 		ConcCalc="Out of Range";
// 	}
// 	return ConcCalc;
// }

// function ConcCO(a){
// 	if (a>=0 && a<=50){
// 		ConcCalc=InvLinear(50,0,4.4,0,a);
// 	}
// 	else if (a>50 && a<=100){
// 		ConcCalc=InvLinear(100,51,9.4,4.5,a);
// 	}
// 	else if (a>100 && a<=150){
// 		ConcCalc=InvLinear(150,101,12.4,9.5,a);
// 	}
// 	else if (a>150 && a<=200){
// 		ConcCalc=InvLinear(200,151,15.4,12.5,a);
// 	}
// 	else if (a>200 && a<=300){
// 		ConcCalc=InvLinear(300,201,30.4,15.5,a);
// 	}
// 	else if (a>300 && a<=400){
// 		ConcCalc=InvLinear(400,301,40.4,30.5,a);
// 	}
// 	else if (a>400 && a<=500){
// 		ConcCalc=InvLinear(500,401,50.4,40.5,a);
// 	}
// 	else{
// 		ConcCalc="Out of Range";
// 	}
// 	return ConcCalc;
// }
// function ConcSO2(a){
// 	if (a>=0 && a<=50){
// 		ConcCalc=InvLinear(50,0,34,0,a);
// 	}
// 	else if (a>50 && a<=100){
// 		ConcCalc=InvLinear(100,51,144,35,a);
// 	}
// 	else if (a>100 && a<=150){
// 		ConcCalc=InvLinear(150,101,224,145,a);
// 	}
// 	else if (a>150 && a<=200){
// 		ConcCalc=InvLinear(200,151,304,225,a);
// 	}
// 	else if (a>200 && a<=300){
// 		ConcCalc=InvLinear(300,201,604,305,a);
// 	}
// 	else if (a>300 && a<=400){
// 		ConcCalc=InvLinear(400,301,804,605,a);
// 	}
// 	else if (a>400 && a<=500){
// 		ConcCalc=InvLinear(500,401,1004,805,a);
// 	}
// 	else{
// 		ConcCalc="Out of Range";
// 	}
// 	return ConcCalc;
// }
// function ConcOzone8hr(a){
// 	if (a>=0 && a<=50){
// 		ConcCalc=InvLinear(50,0,59,0,a);
// 	}
// 	else if (a>50 && a<=100){	
// 		ConcCalc=InvLinear(100,51,75,60,a);
// 	}
// 	else if (a>100 && a<=150){	
// 		ConcCalc=InvLinear(150,101,95,76,a);
// 	}
// 	else if (a>150 && a<=200){
// 		ConcCalc=InvLinear(200,151,115,96,a);
// 	}
// 	else if (a>200 && a<=300){
// 		ConcCalc=InvLinear(300,201,374,116,a);
// 	}
// 	else if (a>300 && a<=400){
// 		ConcCalc=InvLinear(400,301,504,405,a);
// 	}
// 	else if (a>400 && a<=500){
// 		ConcCalc=InvLinear(500,401,604,505,a);
// 	}
// 	else{
// 		ConcCalc="Out of Range";
// 	}
// 	return ConcCalc;
// }

// function ConcOzone1hr(a){
// 	if (a>100 && a<=150){
// 		ConcCalc=InvLinear(150,101,164,125,a);
// 	}
// 	else if (a>150 && a<=200){
// 		ConcCalc=InvLinear(200,151,204,165,a);
// 	}
// 	else if (a>200 && a<=300){
// 		ConcCalc=InvLinear(300,201,404,205,a);
// 	}
// 	else if (a>300 && a<=400){
// 		ConcCalc=InvLinear(400,301,504,405,a);
// 	}
// 	else if (a>400 && a<=500){
// 		ConcCalc=InvLinear(500,401,604,505,a);
// 	}
// 	else{
// 		ConcCalc="Out of Range";
// 	}
// 	return ConcCalc;
// }

// /*function ConcNO2(a)
// {
// if (a>200 && a<=300)
// {
// ConcCalc=InvLinear(300,201,1240,650,a);
// }
// else if (a>300 && a<=400)
// {
// ConcCalc=InvLinear(400,301,1640,1250,a);
// }
// else if (a>400 && a<=500)
// {
// ConcCalc=InvLinear(500,401,2040,1650,a);
// }
// else
// {
// ConcCalc="Out of Range";
// }
// return ConcCalc;
// }*/


// function AQICalcAToC(form){
// 	var b;
// 	var c;
	
// 	document.form.inputbox.style.textAlign="center";
// 	document.form.inputbox.style.backgroundColor="white";
	
// 	if (document.form.pollutant.selectedIndex == '0'){
// 	alert("You have not selected a pollutant.")
// 	}
// 	if (document.form.pollutant.selectedIndex == '1'){
// 		b=Math.floor(document.form.inputbox.value);
// 		if (b < 0 || b>500){		
// 			b= "Out of Range";
// 		}
// 		else{
// 			c=Math.floor(10*ConcPM25(b))/10;
// 		}  		
// 	}
// 	else if (document.form.pollutant.selectedIndex == '2'){
// 		b=Math.floor(document.form.inputbox.value);
// 		if (b < 0 || b>500){		
// 			b= "Out of Range";
// 		}
// 		else{
// 			c=Math.floor(ConcPM10(b));
// 		}  		
// 	}
// 	else if (document.form.pollutant.selectedIndex == '3'){
// 		b=Math.floor(document.form.inputbox.value);
// 		if (b < 0 || b>500){		
// 			b= "Out of Range";
// 		} 
// 		else{
// 			c=Math.floor(10*ConcCO(b))/10;	
// 		} 		
// 	}
// 	else if (document.form.pollutant.selectedIndex == '4'){
// 		b=Math.floor(document.form.inputbox.value);
// 		if (b<0 || b>500){		
// 			b= "Out of Range";
// 		}
// 		else{
// 			c=Math.floor(ConcSO2(b));
// 		}  		
// 	}
// 	else if (document.form.pollutant.selectedIndex == '5'){
// 		b=Math.floor(document.form.inputbox.value);	
// 		if (b<0 || b>500){		
// 			b= "Out of Range";
// 		}
// 		else{
// 			c=Math.floor(ConcOzone8hr(b));
// 		} 
// 	}
// 	else if (document.form.pollutant.selectedIndex == '6'){
// 		b=Math.floor(document.form.inputbox.value);
// 		if (b<=100 || b>500){		
// 			b= "Out of Range";
// 		}
// 		else{
// 			c=Math.floor(ConcOzone1hr(b));	
// 		} 
// 	}
// 	else if (document.form.pollutant.selectedIndex == '7'){
// 		b=Math.floor(document.form.inputbox.value);
// 		if (b<= 200 || b>500){		
// 			b= "Out of Range"
// 		}
// 		else{
// 			c=10*(Math.floor(ConcNO2(b)/10));
// 		}
// 	}
// 	if (b == "Out of Range"){
// 		setOutofRange();
// 	}
// 	else{
// 		document.form.outputbox1.value=c;
// 		document.form.outputbox2.value=AQICategory(b);
// 	}
// 	document.form.outputbox1.style.textAlign="center";
// 	document.form.outputbox2.style.textAlign="center";
// 	document.form.TextSensitive.style.textAlign="center";
// 	document.form.HealthEffects.style.textAlign="center";
// 	document.form.Cautionary.style.textAlign="center";
	
// 	if (document.form.outputbox2.value == 'Good'){
// 		Good();
// 	}
// 	else if (document.form.outputbox2.value == 'Moderate'){
// 		Moderate();
// 	}
// 	else if (document.form.outputbox2.value == 'Unhealthy for Sensitive Groups'){
// 		UnhealthyForSensitiveGroups();
// 	}
// 	else if (document.form.outputbox2.value == 'Unhealthy'){
// 		Unhealthy();
// 	}
// 	else if (document.form.outputbox2.value == 'Very Unhealthy'){
// 		VeryUnhealthy();
// 	}
// 	else if (document.form.outputbox2.value == 'Hazardous'){
// 		Hazardous();
// 	}
// 	else{
// 		clearAll();
// 	}
	
// 	return true;
// }
// function Good(){
// 	document.form.outputbox2.style.backgroundColor="#00e000";
// 	document.form.outputbox2.style.color="black";
// 	document.form.HealthEffects.value="None";
// 	document.form.Cautionary.value="None";
// 	if (document.form.pollutant.selectedIndex == '1'){
// 		document.form.TextSensitive.value="People with respiratory or heart disease, the elderly and children are the groups most at risk.";
// 	}
// 	else if (document.form.pollutant.selectedIndex == '2'){
// 		document.form.TextSensitive.value="People with respiratory disease are the group most at risk.";
// 	}
// 	else if (document.form.pollutant.selectedIndex == '3'){
// 		document.form.TextSensitive.value="People with heart disease are the group most at risk.";
// 	}
// 	else if (document.form.pollutant.selectedIndex == '4'){
// 		document.form.TextSensitive.value="People with asthma are the group most at risk.";
// 	}
// 	else if (document.form.pollutant.selectedIndex == '5' || form.pollutant.selectedIndex == '6'){
// 		document.form.TextSensitive.value="Children and people with asthma are the groups most at risk.";
// 	}
// }
// function Moderate(){
// 	document.form.outputbox2.style.backgroundColor="#ffff00";
// 	document.form.outputbox2.style.color="black";
// 	if (document.form.pollutant.selectedIndex == '1'){
// 		document.form.TextSensitive.value="People with respiratory or heart disease, the elderly and children are the groups most at risk.";
// 		document.form.HealthEffects.value="Respiratory symptoms possible in unusually sensitive individuals, possible aggravation of heart or lung disease in people with cardiopulmonary disease and older adults.";
// 		document.form.Cautionary.value="Unusually sensitive people should consider reducing prolonged or heavy exertion.";	
// 	}
// 	else if (document.form.pollutant.selectedIndex == '2'){
// 		document.form.TextSensitive.value="People with respiratory disease are the group most at risk.";
// 		document.form.HealthEffects.value="Respiratory symptoms possible in unusually sensitive individuals, possible aggravation of heart or lung disease in people with cardiopulmonary disease and older adults.";
// 		document.form.Cautionary.value="Unusually sensitive people should consider reducing prolonged or heavy exertion.";	
// 	}
// 	else if (document.form.pollutant.selectedIndex == '3'){
// 		document.form.TextSensitive.value="People with heart disease are the group most at risk.";
// 		document.form.HealthEffects.value="None";
// 		document.form.Cautionary.value="None";	
// 	}
// 	else if (document.form.pollutant.selectedIndex == '4'){
// 		document.form.TextSensitive.value="People with asthma are the group most at risk.";
// 		document.form.HealthEffects.value="None";
// 		document.form.Cautionary.value="None";	
// 	}
// 	else if (document.form.pollutant.selectedIndex == '5' || form.pollutant.selectedIndex == '6'){
// 		document.form.TextSensitive.value="Children and people with asthma are the groups most at risk.";
// 		if (document.form.pollutant.selectedIndex == '5'){
// 			document.form.HealthEffects.value="Unusually sensitive individuals may experience respiratory symptoms.";
// 			document.form.Cautionary.value="Unusually sensitive people should consider reducing prolonged or heavy outdoor exertion.";
// 		}
// 	}
// }
// function UnhealthyForSensitiveGroups(){
// 	document.form.outputbox2.style.backgroundColor="#ff7600";
// 	document.form.outputbox2.style.color="black";
// 	if (document.form.pollutant.selectedIndex == '1'){
// 		document.form.TextSensitive.value="People with respiratory or heart disease, the elderly and children are the groups most at risk.";
// 		document.form.HealthEffects.value="Increasing likelihood of respiratory symptoms in sensitive individuals, aggravation of heart or lung disease and premature mortality in people with cardiopulmonary disease and older adults.";
// 		document.form.Cautionary.value="People with heart or lung disease, older adults, and children should reduce prolonged or heavy exertion.";
// 	}
// 	else if (document.form.pollutant.selectedIndex == '2'){
// 		document.form.TextSensitive.value="People with respiratory disease are the group most at risk.";
// 		document.form.HealthEffects.value="Increasing likelihood of respiratory symptoms in sensitive individuals, aggravation of heart or lung disease and premature mortality in people with cardiopulmonary disease and older adults.";
// 		document.form.Cautionary.value="People with heart or lung disease, older adults, and children should reduce prolonged or heavy exertion.";
// 	}
// 	else if (document.form.pollutant.selectedIndex == '3'){
// 		document.form.TextSensitive.value="People with heart disease are the group most at risk.";
// 		document.form.HealthEffects.value="Increasing likelihood of reduced exercise tolerance due to increased cardiovascular symptoms, such as chest pain, in people with cardiovascular disease.";
// 		document.form.Cautionary.value="People with heart disease, such as angina, should limit heavy exertion and avoid sources of CO, such as heavy traffic.";
// 	}
// 	else if (document.form.pollutant.selectedIndex == '4'){
// 		document.form.TextSensitive.value="People with asthma are the group most at risk.";
// 		document.form.HealthEffects.value="Increasing likelihood of respiratory symptoms, such as chest tightness and breathing discomfort, in people with asthma.";
// 		document.form.Cautionary.value="People with asthma should consider limiting outdoor exertion.";
// 	}
// 	else if (document.form.pollutant.selectedIndex == '5' || form.pollutant.selectedIndex == '6'){
// 		document.form.HealthEffects.value="Increasing likelihood of respiratory symptoms and breathing discomfort in active children and adults and people with respiratory disease, such as asthma.";
// 		document.form.TextSensitive.value="Children and people with asthma are the groups most at risk.";
// 		if (document.form.pollutant.selectedIndex == '5'){
// 			document.form.Cautionary.value="Active children and adults, and people with respiratory disease, such as asthma, should reduce prolonged or heavy outdoor exertion.";
// 		}
// 		else if (document.form.pollutant.selectedIndex == '6'){
// 			document.form.Cautionary.value="Active children and adults, and people with respiratory disease, such as asthma, should reduce prolonged or heavy outdoor exertion.";
// 		}
// 	}
// }
// function Unhealthy(){
// 	document.form.outputbox2.style.backgroundColor="#ff0000";
// 	document.form.outputbox2.style.color="black";
// 	if (document.form.pollutant.selectedIndex == '1'){
// 		document.form.TextSensitive.value="People with respiratory or heart disease, the elderly and children are the groups most at risk.";
// 		document.form.HealthEffects.value="Increased aggravation of heart or lung disease and premature mortality in people with cardiopulmonary disease and older adults; increased respiratory effects in general population.";
// 		document.form.Cautionary.value="People with heart or lung disease, older adults, and children should avoid prolonged or heavy exertion; everyone else should reduce prolonged or heavy exertion.";
// 	}
// 	else if (document.form.pollutant.selectedIndex == '2'){
// 		document.form.TextSensitive.value="People with respiratory disease are the group most at risk.";
// 		document.form.HealthEffects.value="Increased aggravation of heart or lung disease and premature mortality in people with cardiopulmonary disease and older adults; increased respiratory effects in general population";
// 		document.form.Cautionary.value="People with heart or lung disease, older adults, and children should avoid prolonged or heavy exertion; everyone else should reduce prolonged or heavy exertion.";
// 	}
// 	else if (document.form.pollutant.selectedIndex == '3'){
// 		document.form.TextSensitive.value="People with heart disease are the group most at risk.";
// 		document.form.HealthEffects.value="Reduced exercise tolerance due to increased cardiovascular symptoms, such as chest pain, in people with cardiovascular disease.";
// 		document.form.Cautionary.value="People with heart disease, such as angina, should limit moderate exertion and avoid sources of CO, such as heavy traffic.";
// 	}
// 	else if (document.form.pollutant.selectedIndex == '4'){
// 		document.form.TextSensitive.value="People with asthma are the group most at risk.";
// 		document.form.HealthEffects.value="Increased respiratory symptoms, such as chest tightness and wheezing in people with asthma; possible aggravation of heart or lung disease.";
// 		document.form.Cautionary.value="Children, asthmatics, and people with heart or lung disease should limit outdoor exertion.";
// 	}
// 	else if (document.form.pollutant.selectedIndex == '5' || form.pollutant.selectedIndex == '6'){
// 		document.form.TextSensitive.value="Children and people with asthma are the groups most at risk.";
// 		document.form.HealthEffects.value="Greater likelihood of respiratory symptoms and breathing difficulty in active children and adults and people with respiratory disease, such as asthma; possible respiratory effects in general population.";
// 		if (document.form.pollutant.selectedIndex == '5'){		
// 			document.form.Cautionary.value="Active children and adults, and people with respiratory disease, such as asthma, should avoid prolonged or heavy outdoor exertion; everyone else, especially children, should reduce prolonged or heavy outdoor exertion.";
// 		}
// 		else if (document.form.pollutant.selectedIndex == '6'){
// 			document.form.Cautionary.value="Active children and adults, and people with respiratory disease, such as asthma, should avoid prolonged or heavy outdoor exertion; everyone else, especially children, should reduce prolonged or heavy outdoor exertion.";
// 		}	
// 	}
// }
// function VeryUnhealthy(){
// 	document.form.outputbox2.style.backgroundColor="#990049";
// 	document.form.outputbox2.style.color="#ffffff";
// 	if (document.form.pollutant.selectedIndex == '1'){
// 		document.form.TextSensitive.value="People with respiratory or heart disease, the elderly and children are the groups most at risk.";
// 		document.form.HealthEffects.value="Significant aggravation of heart or lung disease and premature mortality in people with  cardiopulmonary disease and older adults; significant increase in respiratory effects in general population.";
// 		document.form.Cautionary.value="People with heart or lung disease, older adults, and children should avoid all physical activity outdoors. Everyone else should avoid prolonged or heavy exertion.";
// 	}
// 	else if (document.form.pollutant.selectedIndex == '2'){
// 		document.form.TextSensitive.value="People with respiratory disease are the group most at risk.";
// 		document.form.HealthEffects.value="Significant aggravation of heart or lung disease and premature mortality in people with  cardiopulmonary disease and older adults; significant increase in respiratory effects in general population.";
// 		document.form.Cautionary.value="People with heart or lung disease, older adults, and children should avoid all physical activity outdoors. Everyone else should avoid prolonged or heavy exertion.";
// 	}
// 	else if (document.form.pollutant.selectedIndex == '3'){
// 		document.form.TextSensitive.value="People with heart disease are the group most at risk.";
// 		document.form.HealthEffects.value="Significant aggravation of cardiovascular symptoms, such as chest pain, in people with cardiovascular disease.";
// 		document.form.Cautionary.value="People with heart disease, such as angina, should avoid exertion and sources of CO, such as heavy traffic.";
// 	}
// 	else if (document.form.pollutant.selectedIndex == '4'){
// 		document.form.TextSensitive.value="People with asthma are the group most at risk.";
// 		document.form.HealthEffects.value="Significant increase in respiratory symptoms, such as wheezing and shortness of breath, in people with asthma; aggravation of heart or lung disease.";
// 		document.form.Cautionary.value="Children, asthmatics, and people with heart or lung disease should avoid outdoor exertion; everyone else should reduce outdoor exertion.";
// 	}
// 	else if (document.form.pollutant.selectedIndex == '5' || document.form.pollutant.selectedIndex == '6'){
// 		document.form.TextSensitive.value="Children and people with asthma are the groups most at risk.";
// 		document.form.HealthEffects.value="Increasingly severe symptoms and impaired breathing likely in active children and adults and people with respiratory disease, such as asthma; increasing likelihood of respiratory effects in general population.";	
// 		document.form.Cautionary.value="Active children and adults, and people with respiratory disease, such as asthma, should avoid all outdoor exertion; everyone else, especially children, should reduce outdoor exertion.";
// 	}
// 	else if (document.form.pollutant.selectedIndex == '7'){
// 		document.form.TextSensitive.value="Children and people with respiratory disease are the groups most at risk.";
// 		document.form.HealthEffects.value="Increasing likelihood of respiratory symptoms and breathing discomfort in children and people with respiratory disease, such as asthma.";	
// 		document.form.Cautionary.value="Children and people with respiratory disease, such as asthma, should limit heavy outdoor exertion.";
// 	}
// }
// function Hazardous(){
// 	document.form.outputbox2.style.backgroundColor="#7E0023";
// 	document.form.outputbox2.style.color="#ffffff";
// 	if (document.form.pollutant.selectedIndex == '1'){
// 		document.form.TextSensitive.value="People with respiratory or heart disease, the elderly and children are the groups most at risk.";
// 		document.form.HealthEffects.value="Serious aggravation of heart or lung disease and premature mortality in people with  cardiopulmonary disease and older adults; serious risk of respiratory effects in general population.";
// 		document.form.Cautionary.value="Everyone should avoid all physical activity outdoors; people with heart or lung disease, older adults, and children should remain indoors and keep activity levels low.";
// 	}
// 	else if (document.form.pollutant.selectedIndex == '2'){
// 		document.form.TextSensitive.value="People with respiratory disease are the group most at risk.";
// 		document.form.HealthEffects.value="Serious aggravation of heart or lung disease and premature mortality in people with  cardiopulmonary disease and older adults; serious risk of respiratory effects in general population.";
// 		document.form.Cautionary.value="Everyone should avoid all physical activity outdoors; people with heart or lung disease, older adults, and children should remain indoors and keep activity levels low.";
// 	}
// 	else if (document.form.pollutant.selectedIndex == '3'){
// 		document.form.TextSensitive.value="People with heart disease are the group most at risk.";
// 		document.form.HealthEffects.value="Serious aggravation of cardiovascular symptoms, such as chest pain, in people with heart disease; impairment of strenuous activities in general population.";
// 		document.form.Cautionary.value="People with heart disease, such as angina, should avoid exertion and sources of CO, such as heavy traffic; everyone else should limit heavy exertion";
// 	}
// 	else if (document.form.pollutant.selectedIndex == '4'){
// 		document.form.TextSensitive.value="People with asthma are the group most at risk.";
// 		document.form.HealthEffects.value="Severe respiratory symptoms, such as wheezing and shortness of breath, in people with asthma; increased aggravation of heart or lung disease; possible respiratory effects in general population.";
// 		document.form.Cautionary.value="Children, asthmatics, and people with heart or lung disease should remain indoors; everyone else should avoid outdoor exertion.";
// 	}
// 	else if (document.form.pollutant.selectedIndex == '5' || document.form.pollutant.selectedIndex == '6'){
// 		document.form.TextSensitive.value="Children and people with asthma are the groups most at risk.";
// 		document.form.HealthEffects.value="Severe respiratory effects and impaired breathing likely in active children and adults and people with respiratory disease, such as asthma; increasingly severe respiratory effects likely in general population.";	
// 		document.form.Cautionary.value="Everyone should avoid all outdoor exertion.";
// 	}
// 	else if (document.form.pollutant.selectedIndex == '7'){
// 		document.form.TextSensitive.value="Children and people with respiratory disease are the groups most at risk.";
// 		document.form.HealthEffects.value="Greater likelihood of respiratory symptoms and breathing difficulty in children and people with respiratory disease, such as asthma.";	
// 		document.form.Cautionary.value="Children and people with respiratory disease, such as asthma, should limit moderate or heavy outdoor exertion.";
// 	}
// }
// function setOutofRange(){
// 	alert("The Air Quality Index you've entered is out of range.  Please check your number.");
// 	document.form.inputbox.value=" ";
// 	document.form.outputbox1.value=" ";
// 	document.form.outputbox2.value=" ";
// 	document.form.TextSensitive.value="";
// 	document.form.HealthEffects.value="";
// 	document.form.Cautionary.value="";
	
// }
// function clearAll(){
//     document.form.outputbox2.style.backgroundColor="#ffffff";
//     document.form.outputbox2.style.color="black";
//     document.form.TextSensitive.value="";
//     document.form.HealthEffects.value="";
//     document.form.Cautionary.value="";
// }
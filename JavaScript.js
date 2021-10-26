var $ = document;
var cm = $.getElementById("height");
var kilog = $.getElementById("weight");
var warning = $.getElementById("warning") 

////////////////////////////////

var noticeBmi = $.getElementById("noticeBmi");
var explanation = $.getElementById("explanation");
var advice = $.getElementById("advice");


function resultFunc(){

    //---------- به دست آوردن حاصل بی ام آی
    var cmeter = parseInt(cm.value);
    var meter = cmeter/100;
    var powmeter = Math.pow(meter,2);
    var kg = parseInt(kilog.value) ;
    var result = kg / powmeter;
    result = result.toFixed(2);

    //-------------- نمایش حاصل  در سایت

    noticeBmi.innerHTML = "BMI" + " شما " + result + " است.";

    if(result<18.5){
        explanation.innerHTML = " شما دچار کمبود وزن شدید هستید."
        advice.innerHTML = "به پزشک مراجعه کنید و در مورد کاهش وزنتان با او صحبت کنید. در صورتی که مشکل خاصی در بدنتان وجود نداشت میتوانید با مراجعه به یک متخصص تغذیه وزن خود را تا حد ایده آل افزایش دهید. "
        warning.innerHTML = "";
    }
    else if(18.6<result && result<24.9){
        explanation.innerHTML = "شما در بازده وزن سالم قرار دارید و وزنتان ایده آل است."
        advice.innerHTML = "شما میتوانید با حفظ رژیم غذایی و سبک زندگی سالم و ورزش ٬ وزن خود را در این محدوده حفظ کنید."
        warning.innerHTML = "";
    }
    else if(25<=result && result<29.9){
        explanation.innerHTML = "شما دچار اضافه وزن هستید.";
        advice.innerHTML = " شما باید به یه پزشک متخصص مراجعه کنید و درباره ی اضافه وزن خود  درمانی را به شکل دارویی یا رژیم یا ... آغاز کنید."
        warning.innerHTML = "";
    }
    else if(30<=result && result<34.9){
        explanation.innerHTML = "شما چاق هستید.";
        advice.innerHTML = "شما باید با مراجعه به پزشک یک دوره درمانی را آغاز کنید. در این بازه ی وزنی ریسک به خطر افتادن سلامتی افزایش میابد."
        warning.innerHTML = "";
    }
    else if(result>35){
        explanation.innerHTML = "شما دچار چاقی مفرط هستید.";
        advice.innerHTML = "شما در بازه ی وزنی خطرناکی قرار دارید. احتمال ابتلا به بیماری های زیادی در این بازه ی وزنی وجود دارد. هر چه سریع تر به پزشک مراجعه کنید و درمان را آغاز کنید."
        warning.innerHTML = "";
    }
    else{
        noticeBmi.innerHTML = "";
    }
    if(cmeter<140){
        warning.innerHTML = "مطمئنی قدت رو درست وارد کردی؟!؟"
        noticeBmi.innerHTML = "";
        explanation.innerHTML = "";
        advice.innerHTML = "";
    }
    else if(kg < 40 ){
        warning.innerHTML = "مطئنی وزنت رو درست وارد کردی؟!؟"
        noticeBmi.innerHTML = "";
        explanation.innerHTML = "";
        advice.innerHTML = "";
    }

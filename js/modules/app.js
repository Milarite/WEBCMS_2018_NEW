angular.module('starter', [ 'starter.controllers','starter.services','starter.directives','firebase','720kb.datepicker','wingify.timePicker']).run(function($rootScope)
{

 let role = localStorage.getItem("role");
 let lang =  localStorage.getItem("lang") == "AR" ? {

NationalNumber : "الرقم الوطني",

     Name:"الإسم",
     DateOfBirth: "تاريخ الميلاد" ,
     Password: "كلمة المرور",
     PasswordConfirmation: "تأكيد الرقم السري",
     city:"المدينة",
     Year:"السنة",
     PhoneNumber:" رقم الهاتف",
     Campaign:"الشعار الإنتخابي",
     addCandidate:"إضافة مرشح",
     viewCandidates:"عرض المرشحين",
     adminPanel:"لوحة التحكم",
     addJudjment:"إضافة لجنة تحكيم",
     settings:"الإعدادات",
     logout:"تسجيل الخروج",
     VotingAppCMS:"Voting App CMS",
     thisfieldisrequired :"يجب ثعبئة الحقل",
     address:"عنوان",
     CandidateName:"إسم المرشح",
     NumberOfVotes:"عدد الأصوات",
     Operations:"العمليات",
     UserName:"إسم المستخدم",
     IsOptional:"اختياري",
     Threshold:"النسبة",
     SelectDate:"إختيار التاريخ",
     SelectTime:"إختيار الوقت",
     Save:"حفظ",
     Arabic:"عربي"



 }
  : { 
     NationalNumber : "National Number",
     Name:"Name",
     DateOfBirth: "Date Of Birth" ,
     Password: "Password",
     PasswordConfirmation: "Password Confirmation",
     city:"City",
     Year:"Year",
     PhoneNumber:"Phone Number",
     Campaign:"Campaign",
     viewCandidates:"View candidate",
     adminPanel:"Admin panel",
     addCandidate:"Add candidate",
     addJudjment:"Add Judjment",
     settings:"Settings",
     logout:"Logout",
     VotingAppCMS:"Voting App CMS",
     thisfieldisrequired :"this field is required",
     address:"address",
     CandidateName:"Candidate Name",
     Id:"Id",
     NumberOfVotes:"Number of Votes",
     Operations:"Operations",
     UserName:"UserName",
     IsOptional:"Is Optional",
     Threshold:"Threshold",
     SelectDate:"Select Date",
     SelectTime:"Select Time",
     Save:"Save",
     Arabic:"Arabic"
    




}


 $rootScope.lang  = lang;

 if(role != undefined){
     
     if(role == "candidate"){
         $rootScope.candidate_items = true;
     }
     else if(role == "judgment"){
         $rootScope.judgment_items = true;
     }
     else{
         $rootScope.judgment_items = false;
         $rootScope.candidate_items=false;
         $rootScope.admin_items = true;
     }
 }

 
})
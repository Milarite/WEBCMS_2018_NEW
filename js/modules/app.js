angular.module('starter', [ 'starter.controllers','starter.services','starter.directives','firebase','720kb.datepicker','wingify.timePicker']).run(function($rootScope)
{

 let role = localStorage.getItem("role");

 let lang =  localStorage.getItem("ar") ? {

NationalNumber : "الرقم الوطني",







 } : { 
     NationalNumber : "National Number",
     Name:"Name",
     DateOfBirth: "Date Of Birth" ,
     Password: "Password",
     PasswordConfirmation: "Password Confirmation",
     city:"City",
     Year:"Year",
     PhoneNumber:"Phone Number",
     Campaign:"Campaign",
     addCandidate:"Add Candidate",
     viewCandidates:"View candidate",
     adminPanel:"Admin panel",
     addCandidate:"Add candidate",
     addJudjment:"Add Judjment",
     settings:"Settings",
     logout:"Logout",
     VotingAppCMS:"Voting App CMS",




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
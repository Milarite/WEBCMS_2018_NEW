angular.module('starter', [ 'starter.controllers','starter.services','starter.directives','firebase','720kb.datepicker','wingify.timePicker']).run(function($rootScope)
{

 let role = localStorage.getItem("role");

 let lang =  localStorage.getItem("ar") ? {

NationalNumber : "الرقم الوطني"






 } : { NationalNumber : "National Number"}

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
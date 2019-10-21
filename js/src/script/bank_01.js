// bank_01.js

(function($){

  const gnb          = $('#gnb');
  const gnbUl        = gnb.find('ul');
  const gnbDl        = gnb.find('dl');
  const gnbDd        = gnb.find('dd');
  const gnbDt        = gnb.find('dt');
  const gnbTitleLink = gnbDt.children('a');
  const gnblistLink  = gnbDd.children('a');
  
 gnbUl.on('mouseenter',function(e){
  e.preventDefault();
 gnbDd.stop().slideDown();
 });
 
 gnbDl.on('mouseleave',function(e){
  e.preventDefault();
 gnbDd.stop().slideUp();
 });

 gnbTitleLink.on('focus', function(e){
   e.preventDefault();
   gnbDd.stop().slideDown();
 });
 
 gnbTitleLink.eq(-1).on('blur',function(e){
  e.preventDefault();
  gnbDd.stop().slideUp();

 });


})(jQuery);
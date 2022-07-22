<?php
  $to  = '<admin@leadprofit.agency>' . ', ';
  $to  .= '<anmolvos@icloud.com>';
  

  $subject = "Резюме с сайта lead.profit";


  $resume = $_REQUEST["resume"];

  $message = 'Ссылка на резюме: <b>'.$resume.'</b>';

  $headers  = "Content-type: text/html; charset=utf-8 \r\n";
  $headers .= "From: От кого письмо <infosite@voskresensky.com>\r\n";
  $headers .= "Reply-To: infosite@voskresensky.com\r\n";

  mail($to, $subject, $message, $headers);
  
 
  header ('Location: thanks.html'); 
?>

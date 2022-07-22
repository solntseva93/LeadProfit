<?php
  $to  = '<admin@leadprofit.agency>' . ', ';
  $to  .= '<zabolotniy.evgeniy@gmail.com>' . ', ';
  $to  .= '<anmolvos@icloud.com>';
  

  $subject = "Заявка с сайта lead.profit";


  $firstname = $_REQUEST["firstname"];
  $email = $_REQUEST["email"];
  $phone = $_REQUEST["phone"]; 

  $message = 'Имя: <b>'.$firstname.'</b>';
  $message .= '<br>Email: <b>'.$email.'</b>';
  $message .= '<br>Телефон: <b>'.$phone.'</b>';

  $headers  = "Content-type: text/html; charset=utf-8 \r\n";
  $headers .= "From: От кого письмо <infosite@voskresensky.com>\r\n";
  $headers .= "Reply-To: infosite@voskresensky.com\r\n";

  mail($to, $subject, $message, $headers);
  
 
  header ('Location: thanks.html'); 
?>

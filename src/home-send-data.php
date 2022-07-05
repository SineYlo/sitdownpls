<?php

$formName = 'Имя: '.$_POST['callbackFormNameField']." \n\n | ";
$formPhone = 'Телефон: '.$_POST['callbackFormPhoneField']." \n\n | ";
$formEmail = 'Почта: '.$_POST['callbackFormEmailField']." \n\n";

$formName = htmlspecialchars($formName);
$formPhone = htmlspecialchars($formPhone);
$formEmail = htmlspecialchars($formEmail);

$formName = urldecode($formName);
$formPhone = urldecode($formPhone);
$formEmail = urldecode($formEmail);

$AllInOne = $formName.$formPhone.$formEmail;
$to = 'vavshhik01@mail.ru';
$headers = "From: SineYlo <contact@sineylo-dev.ru>\nReply-to:contact@sineylo-dev.ru\nContent-Type: text/html; charset=\"utf-8\"\n";
mail($to, 'Обратный звонок', $AllInOne, $headers);

?>

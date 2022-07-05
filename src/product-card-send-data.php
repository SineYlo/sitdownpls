<?php

$formName = 'Имя: '.$_POST['buyProductFormNameField']." \n\n | ";
$formPhone = 'Телефон: '.$_POST['buyProductFormPhoneField']." \n\n";

$formName = htmlspecialchars($formName);
$formPhone = htmlspecialchars($formPhone);

$formName = urldecode($formName);
$formPhone = urldecode($formPhone);

$AllInOne = $formName.$formPhone;
$to = 'vavshhik01@mail.ru';
$headers = "From: SineYlo <contact@sineylo-dev.ru>\nReply-to:contact@sineylo-dev.ru\nContent-Type: text/html; charset=\"utf-8\"\n";
mail($to, 'Обратный звонок', $AllInOne, $headers);

?>

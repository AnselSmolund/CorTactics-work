<?php
if(isset($_POST["message"])) {
    $recipient="anssmolund@gmail.com";
    $subject="CorTactics inquiry";
    $sender=$_POST["sender-name"];
    $senderEmail=$_POST["sender-email"];
    $message=$_POST["main-message"];

    mail($recipient, $subject, $message, "From: $sender<$senderEmail>");
}
?>
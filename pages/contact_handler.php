<?php 
$name= $_POST['name'];
$visitor_email= $_POST['email'];
$msg= $_POST['message'];
$email_from='fromMyWebsite';
$email_subject= $_POST['subject'];
$email_body="Name: $name.\n".
		"Email: $visitor_email.\n".
		"Message: $msg.\n";
$to= "bilashism@gmail.com";
$headers = "From: $email_from \r\n";
$headers = "Reply-To: $visitor_email \r\n";

mail($to,$email_subject,$email_body,$headers);
header("Location: ../index.html");
?>
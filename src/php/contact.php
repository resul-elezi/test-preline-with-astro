<?php
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
  http_response_code(405);
  exit;
}

// Honeypot check
if (!empty($_POST["website"])) {
  http_response_code(403);
  exit;
}


$name = trim($_POST["name"] ?? "");
$email = trim($_POST["email"] ?? "");
$company = trim($_POST["company"] ?? "");
$phone = trim($_POST["phone"] ?? "");
$message = trim($_POST["message"] ?? "");


if (!$name || !$email || !$message) {
  http_response_code(400);
  exit;
}


$to = "info@yourdomain.com";
$subject = "Kontaktformular Nachricht";
$body = "Name: $name\nEmail: $email\nCompany: $company\nPhone: $phone\n\nMessage:\n$message";
$headers = "From: $email";


mail($to, $subject, $body, $headers);

http_response_code(200);
echo "OK";
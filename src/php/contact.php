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

// Read fields
$name = trim($_POST["name"] ?? "");
$email = trim($_POST["email"] ?? "");
$company = trim($_POST["company"] ?? "");
$phone = trim($_POST["phone"] ?? "");
$message = trim($_POST["message"] ?? "");

// Check required fields
if (!$name || !$email || !$message) {
  http_response_code(400);
  exit;
}

// Prepare email
$to = "info@yourdomain.com"; // <-- Use your email here
$subject = "Contact form Message";
$body = "Name: $name\nEmail: $email\nCompany: $company\nPhone: $phone\n\nMessage:\n$message";
$headers = "From: $email";

// Send Mail
mail($to, $subject, $body, $headers);

http_response_code(200);
echo "OK";
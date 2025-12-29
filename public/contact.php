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

// Dummy output: log everything into one text file
// $log_entry = "===== " . date('Y-m-d H:i:s') . " =====\n";
// $log_entry .= "Name: $name\n";
// $log_entry .= "Email: $email\n";
// $log_entry .= "Company: $company\n";
// $log_entry .= "Phone: $phone\n";
// $log_entry .= "Message:\n$message\n\n";

// Create or attach file
// file_put_contents("mail_log.txt", $log_entry, FILE_APPEND);

// Prepare email
$to = "info@yourdomain.com"; // <-- Use your email here
$subject = "Contact form Message";
$body = "Name: $name\nEmail: $email\nCompany: $company\nPhone: $phone\n\nMessage:\n$message";
$headers = "From: $email";

// Send Mail
mail($to, $subject, $body, $headers);

http_response_code(200);
echo "OK";
'use strict';

const form = document.getElementById("contact-form");
const status = document.getElementById("status");

form.addEventListener("submit", async (e) => {
  e.preventDefault(); // Verhindert Reload

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  status.textContent = "Sending...";
  status.className = "text-gray-500";

  const formData = new FormData(form);

  try {
    const response = await fetch("/contact.php", {
      method: "POST",
      body: formData
    });

    if (!response.ok) throw new Error();

    form.reset();
    status.textContent = "Message sent successfully ✅";
    status.className = "text-green-600";
  } catch (err) {
    status.textContent = "Error. Please try again ❌";
    status.className = "text-red-600";
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  const form = document.getElementById('consultation-form');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const name = formData.get('name')?.toString().trim() || 'Visitor';
      const phone = formData.get('phone')?.toString().trim() || 'Not provided';
      const email = formData.get('email')?.toString().trim() || 'Not provided';
      const service = formData.get('service')?.toString().trim() || 'Not selected';
      const message = formData.get('message')?.toString().trim() || 'No additional details provided';

      const whatsappText = encodeURIComponent(
`📌 New Consultation Request

👤 Name: ${name}

📞 Phone: ${phone}

📧 Email: ${email}

⚖️ Service: ${service}

📝 Message:
${message}`
);Email: ${encodeURIComponent(email)}%0AService: ${encodeURIComponent(service)}%0AMessage: ${encodeURIComponent(message)}`;
      window.open(`https://wa.me/918218647951?text=${whatsappText}`, '_blank', 'noopener,noreferrer');
      form.reset();
    });
  }
});
const btn = document.getElementById("galleryBtn");
const gallery = document.getElementById("moreGallery");

btn.addEventListener("click", function () {
    if (gallery.style.display === "block") {
        gallery.style.display = "none";
        btn.innerHTML = "View More Photos";
    } else {
        gallery.style.display = "block";
        btn.innerHTML = "Show Less";
    }
});

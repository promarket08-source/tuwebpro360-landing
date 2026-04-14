// Sistema de Captura de Leads - EP360
// Este script envía los datos del formulario a la API de Vercel

const EP360_API = '/api/leads';

async function submitLead(formData) {
  try {
    const data = {
      nombre: formData.get('name') || formData.get('nombre'),
      whatsapp: formData.get('whatsapp'),
      email: formData.get('email'),
      negocio: formData.get('business') || formData.get('negocio'),
      mensaje: formData.get('message') || formData.get('mensaje'),
      pagina: window.location.href,
      origen: 'landing_principal'
    };

    if (!data.nombre || !data.whatsapp) {
      showNotification('Nombre y WhatsApp son requeridos', 'error');
      return false;
    }

    const response = await fetch(EP360_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (result.success) {
      showNotification('¡Gracias! Te contactaremos pronto.', 'success');
      return true;
    } else {
      showNotification(result.error || 'Error al enviar', 'error');
      return false;
    }
  } catch (error) {
    console.error('Error:', error);
    showNotification('Error de conexión', 'error');
    return false;
  }
}

function showNotification(message, type = 'info') {
  const existing = document.querySelector('.ep360-notification');
  if (existing) existing.remove();

  const notification = document.createElement('div');
  notification.className = `ep360-notification fixed top-20 right-4 z-50 px-6 py-4 rounded-lg shadow-2xl ${
    type === 'success' ? 'bg-green-600' : type === 'error' ? 'bg-red-600' : 'bg-indigo-600'
  }`;
  notification.innerHTML = `
    <div class="flex items-center gap-3">
      <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
      <span>${message}</span>
      <button onclick="this.parentElement.parentElement.remove()" class="ml-4 text-white/80 hover:text-white">
        <i class="fas fa-times"></i>
      </button>
    </div>
  `;
  document.body.appendChild(notification);
  setTimeout(() => notification.remove(), 5000);
}

document.addEventListener('DOMContentLoaded', function() {
  const forms = document.querySelectorAll('form[id="contactForm"]');
  forms.forEach(form => {
    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      const formData = new FormData(form);
      const success = await submitLead(formData);
      if (success) {
        form.reset();
      }
    });
  });
});

window.submitLead = submitLead;
window.showEP360Notification = showNotification;
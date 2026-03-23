const swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
 
document.getElementById('start-subscription').addEventListener('click', () => {
  const isSubscribed = localStorage.getItem('assinaturaFeita');
  if (isSubscribed === 'true') {
    const desejaCancelar = confirm('Você já é assinante. Deseja cancelar a assinatura?');
    if (desejaCancelar) {
      localStorage.removeItem('assinaturaFeita');
      alert('Assinatura cancelada.');
    }
  } else {
    // Redireciona para o formulário
    window.location.href = 'premium.html'; // Página onde está seu formulário
  }
});


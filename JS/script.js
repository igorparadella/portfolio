document.getElementById('form-contato').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Aqui você poderia integrar com um serviço de envio de email
    document.getElementById('mensagem-sucesso').classList.remove('d-none');
    this.reset();
  });
  
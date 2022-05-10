const checkAgreement = document.getElementById('agreement');
const btnSubmit = document.getElementById('submit-btn');

function agreementCheck() {
  if (checkAgreement.checked) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
}
agreementCheck();
checkAgreement.addEventListener('click', agreementCheck);

const botaoDeLogin = document.querySelector('#login');
botaoDeLogin.addEventListener('click', () => {
  const email = document.querySelector('#email');
  const senha = document.querySelector('#senha');
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
});

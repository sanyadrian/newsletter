const form = document.querySelector('form')
const container1 = document.querySelector('.newsletter-cta')
const container2 = document.querySelector('.newsletter-cta-2')
const dismiss = document.querySelector('.dismiss')
const emailInput = document.querySelector('#email')
const successMessageEmail = document.querySelector('.newsletter-cta-2 p strong')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const email = emailInput.value
  successMessageEmail.textContent = email
  container1.classList.add('hide')
  container2.classList.remove('hide')
})
dismiss.addEventListener('click', (e) => {
  container2.classList.add('hide')
  container1.classList.remove('hide')
})

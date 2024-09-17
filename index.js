const form = document.querySelector('form')
const container1 = document.querySelector('.newsletter-cta')
const container2 = document.querySelector('.newsletter-cta-2')
const dismiss = document.querySelector('.dismiss')
const emailInput = document.querySelector('#email')
const errorSpan = document.querySelector('.error')
const successMessageEmail = document.querySelector('.newsletter-cta-2 p strong')
function isValidEmail (email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailPattern.test(email)
}
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const email = emailInput.value.trim()
  if (!email || !isValidEmail(email)) {
    errorSpan.textContent = 'Email address required'
    errorSpan.style.display = 'block'
    emailInput.classList.add('invalid')
  } else {
    successMessageEmail.textContent = email
    errorSpan.style.display = 'none'
    container1.classList.add('hide')
    container2.classList.remove('hide')
  }
})
dismiss.addEventListener('click', (e) => {
  container2.classList.add('hide')
  container1.classList.remove('hide')
})

const cookie = document.querySelector('.cookie_box')
const cookieX = document.querySelector('.cookie_close')
const footerYear = document.querySelector('.footer__year')

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}
handleCurrentYear()

const closecookie = () => {
	cookie.style.display = 'none'
}
cookieX.addEventListener('click', closecookie)

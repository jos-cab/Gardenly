const email = document.getElementById("email");
const comment = document.getElementById("comment");
const captcha = document.getElementsByClassName("g-recaptcha")[0];

const resetEmailBorderColor = () => (email.style.borderColor = "#dee2e6");
const resetCommentBorderColor = () => (comment.style.borderColor = "#dee2e6");

email.addEventListener("input", resetEmailBorderColor);
comment.addEventListener("input", resetCommentBorderColor);

function validateForm() {
	let emailValidated = validateEmail(email);
	let commentValidated = validateComment(comment);
	let captchaValidated = validateCaptcha();

	// validate from last to first so the error message will be the first in order
	if (!captchaValidated) {
		error.innerHTML = "click captcha box";
	}

	if (!commentValidated) {
		comment.style.borderColor = "#e16464";
		error.innerHTML = "Comment can not be empty";
	}

	if (!emailValidated) {
		email.style.borderColor = "#e16464";
		error.innerHTML = "Email format: name@example.com";
	}

	return captchaValidated && emailValidated && commentValidated;
}

function validateCaptcha() {
	return grecaptcha.getResponse() === "" ? false : true;
}

function validateEmail(email) {
	let emailRegex = /^\w+(\+[1-9]\d*)?@[a-z]+\.[a-z]+/;
	return emailRegex.test(email.value);
}

function validateComment(comment) {
	return comment.value !== "";
}

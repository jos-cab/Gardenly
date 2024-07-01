const email = document.getElementById("email");
const comment = document.getElementById("comment");

const resetEmailBorderColor = () => (email.style.borderColor = "#dee2e6");
const resetCommentBorderColor = () => (comment.style.borderColor = "#dee2e6");

email.addEventListener("input", resetEmailBorderColor);
comment.addEventListener("input", resetCommentBorderColor);

function validateForm() {
	let emailValidated = validateEmail(email);
	let commentValidated = validateComment(comment);

	// validate from last to first so the error message will be the first in order
	if (!commentValidated) {
		comment.style.borderColor = "#e16464";
		error.innerHTML = "Comment can not be empty";
	}

	if (!emailValidated) {
		email.style.borderColor = "#e16464";
		error.innerHTML = "Email format: name@example.com";
	}

	document.getElementById("contact-form").submit();
	return emailValidated && commentValidated;
}

function validateEmail(email) {
	let emailRegex = /^\w+(\+[1-9]\d*)?@[a-z]+\.[a-z]+/;
	return emailRegex.test(email.value);
}

function validateComment(comment) {
	return comment.value !== "";
}

const forms = [...document.querySelectorAll(".signup")];
const inputs = [...document.querySelectorAll(".signup__input")];
const errors = [...document.querySelectorAll(".signup__error")];

forms.forEach((e, i) => {
	e.addEventListener("submit", (event) => {
		event.preventDefault();
		const formData = new FormData(forms[i]);
		const email = formData.get("email");
		const regex = /^\w+@\w+.\w+$/i;
		if (regex.test(email)) {
			forms[i].reset();
		} else {
			errors[i].removeAttribute("hidden");
			inputs[i].classList.add("signup__input--invalid");
		}
	});
});

inputs.forEach((e, i) => {
	e.addEventListener("keydown", () => {
		if (!errors[i].getAttribute("hidden")) {
			errors[i].setAttribute("hidden", true);
			inputs[i].classList.remove("signup__input--invalid");
		}
	});
});

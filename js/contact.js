const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    alert("تم إرسال الرسالة بنجاح ✅");

    form.reset();

});
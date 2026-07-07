// =========================================================
// ملف الجافاسكريبت الخاص بموقع سبورتس لودج
// كل الفانكشنز هنا بسيطة وخاصة بالتفاعلات البصرية بس
// =========================================================


// ---------------------------------------------------------
// 1) اختيار الرياضة في الصفحة الرئيسية (كارت الرياضة)
// لما اليوزر يدوس على رياضة، نضيف له كلاس "active"
// ونشيله من باقي الكروت عشان يظهر واحد مختار فقط
// ---------------------------------------------------------
const categoryCards = document.querySelectorAll('.category-card');

categoryCards.forEach(function (card) {
    card.addEventListener('click', function () {

        // نشيل كلاس active من كل الكروت
        categoryCards.forEach(function (item) {
            item.classList.remove('active');
        });

        // نضيف كلاس active على الكارت اللي تم الضغط عليه
        card.classList.add('active');
    });
});


// ---------------------------------------------------------
// 2) تغيير الصورة الرئيسية عن طريق الصور المصغرة (المعرض)
// في صفحة تفاصيل الملعب
// ---------------------------------------------------------
const mainImage = document.getElementById('main-field-image');
const thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach(function (thumb) {
    thumb.addEventListener('click', function () {

        // لو في صورة رئيسية، نغير مصدرها بمصدر الصورة المصغرة
        if (mainImage) {
            mainImage.src = thumb.src;
        }

        // نشيل الكلاس active من كل الصور المصغرة
        thumbnails.forEach(function (item) {
            item.classList.remove('active');
        });

        // نضيف الكلاس active على الصورة اللي تم الضغط عليها
        thumb.classList.add('active');
    });
});


// ---------------------------------------------------------
// 3) اختيار التاريخ في صندوق الحجز
// ---------------------------------------------------------
const dateButtons = document.querySelectorAll('.date-btn');

dateButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {

        dateButtons.forEach(function (item) {
            item.classList.remove('active');
        });

        btn.classList.add('active');
    });
});


// ---------------------------------------------------------
// 4) اختيار الوقت في صندوق الحجز
// ---------------------------------------------------------
const timeButtons = document.querySelectorAll('.time-btn');

timeButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {

        timeButtons.forEach(function (item) {
            item.classList.remove('active');
        });

        btn.classList.add('active');
    });
});


// ---------------------------------------------------------
// 5) زر "تأكيد الحجز"
// نتأكد إن اليوزر اختار وقت الأول، وبعدين نظهر له رسالة تأكيد
// ---------------------------------------------------------
const bookNowBtn = document.querySelector('.book-now-btn');

if (bookNowBtn) {
    bookNowBtn.addEventListener('click', function () {

        // نجيب الوقت المختار حالياً (لو موجود)
        const selectedTime = document.querySelector('.time-btn.active');

        if (!selectedTime) {
            alert('من فضلك اختر الوقت المناسب أولاً');
            return;
        }

        alert('تم تأكيد حجزك بنجاح في الساعة ' + selectedTime.textContent);
    });
}


// ---------------------------------------------------------
// 6) زر "بحث" في الصفحة الرئيسية
// بسيطة جداً: بس بتاخد اليوزر لقسم الملاعب الموصى بها
// ---------------------------------------------------------
const searchBtn = document.querySelector('.search-btn');

if (searchBtn) {
    searchBtn.addEventListener('click', function () {
        const fieldsSection = document.getElementById('fields');

        if (fieldsSection) {
            fieldsSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

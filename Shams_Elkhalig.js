// تغيير خلفية الناف بار عند التمرير
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = '#002244';
        navbar.style.height = '70px';
    } else {
        navbar.style.background = '#003366';
        navbar.style.height = '80px';
    }
});

// القائمة الجانبية للموبايل
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    // تبديل الكلاس لظهور القائمة
    nav.classList.toggle('nav-active');

    // أنيميشن أيقونة البيرجر
    burger.classList.toggle('toggle');
});

// إغلاق القائمة عند الضغط على أي رابط
const navLinks = document.querySelectorAll('.nav-links li');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('nav-active');
        burger.classList.remove('toggle');
    });
});

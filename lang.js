const translations = {
  en: {
    hero_title: "Welcome to Agewell",
    hero_subtitle: "Compassionate Care for the Elderly",
    btn_contact: "Get in Touch",
    about_title: "About Us",
    about_text: "At Agewell, we provide high-quality, loving care for seniors...",
    services_title: "Our Services",
    service_1: "24/7 Nursing Support",
    service_2: "Personalized Care Plans",
    service_3: "Rehabilitation Programs",
    service_4: "Daily Activities & Events",
    gallery_title: "Our Facilities",
    contact_title: "Contact Us",
    btn_send: "Send Message",
  },
  ua: {
    hero_title: "Ласкаво просимо до Agewell",
    hero_subtitle: "Дбайливий догляд за людьми похилого віку",
    btn_contact: "Зв'язатися",
    about_title: "Про нас",
    about_text: "У Agewell ми надаємо якісний і турботливий догляд літнім людям...",
    services_title: "Наші послуги",
    service_1: "Цілодобова медична підтримка",
    service_2: "Індивідуальні плани догляду",
    service_3: "Програми реабілітації",
    service_4: "Щоденні активності та події",
    gallery_title: "Наші умови",
    contact_title: "Зв'язок з нами",
    btn_send: "Надіслати повідомлення",
  },
};

function setLanguage(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key] || key;
  });
}

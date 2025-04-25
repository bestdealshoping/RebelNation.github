// lang.js
const translations = {
  fr: {
    nav_home: "Accueil",
    nav_portfolio: "Portfolio",
    nav_testimonials: "Témoignages",
    nav_contact: "Contact",
    slogan: "Votre satisfaction c'est notre obligation",
    intro_title: "Bienvenue chez Rebel Nation Graphic Design",
    intro_text: "Le studio créatif qui transforme vos idées en visuels puissants. Logos, flyers, marketing, tout y passe !",
    about_title: "Qui sommes-nous ?",
    about_text: "Rebel Nation Graphic Design est une entreprise spécialisée dans la conception graphique innovante et impactante...",
    mission_title: "Notre mission",
    mission_text: "Offrir des solutions graphiques de qualité professionnelle qui captivent l'attention...",
    why_choose_title: "Pourquoi nous choisir ?",
    why_choose_1: "Un style unique et moderne adapté à chaque client.",
    why_choose_2: "Une équipe créative, réactive et passionnée.",
    why_choose_3: "Des délais respectés et un accompagnement personnalisé.",
    why_choose_4: "Un excellent rapport qualité/prix.",
    services_title: "Nos services :",
    service_ad: "Design publicitaire",
    service_logo: "Création de logo",
    service_3dlogo: "Logo 3D",
    service_flyer: "Flyers",
    service_brochure: "Brochures",
    service_social: "Posts réseaux sociaux",
    service_tshirt: "T-shirts",
    service_marketing: "Matériel marketing"
  },
  ht: {
    nav_home: "Paj Dakèy",
    nav_portfolio: "Travay nou yo",
    nav_testimonials: "Temwayaj",
    nav_contact: "Kontak",
    slogan: "Satisfaksyon ou se obligasyon nou",
    intro_title: "Byenveni nan Rebel Nation Graphic Design",
    intro_text: "Atelye kreyatif ki transfòme lide ou an imaj pisan. Logos, flyers, maketin, tout ladan l!",
    about_title: "Kiyès nou ye?",
    about_text: "Rebel Nation Graphic Design se yon konpayi ki espesyalize nan konsepsyon grafik inovatè ak efikas...",
    mission_title: "Misyon nou",
    mission_text: "Nou ofri solisyon grafik pwofesyonèl ki atire atansyon epi mete imaj ou an valè...",
    why_choose_title: "Poukisa chwazi nou?",
    why_choose_1: "Yon stil modèn e pèsonalize.",
    why_choose_2: "Yon ekip kreyatif e pasyone.",
    why_choose_3: "Nou respekte delè ak sipò kliyan pwofon.",
    why_choose_4: "Bon jan kalite pou bon pri.",
    services_title: "Sèvis nou yo :",
    service_ad: "Design piblisite",
    service_logo: "Kreyasyon logo",
    service_3dlogo: "Logo 3D",
    service_flyer: "Flyers",
    service_brochure: "Brochures",
    service_social: "Post sou rezo sosyal",
    service_tshirt: "T-shirts",
    service_marketing: "Materyèl maketin"
  },
  en: {
    nav_home: "Home",
    nav_portfolio: "Portfolio",
    nav_testimonials: "Testimonials",
    nav_contact: "Contact",
    slogan: "Your satisfaction is our obligation",
    intro_title: "Welcome to Rebel Nation Graphic Design",
    intro_text: "The creative studio that turns your ideas into powerful visuals. Logos, flyers, marketing—you name it!",
    about_title: "About us",
    about_text: "Rebel Nation Graphic Design is a company specializing in innovative and impactful graphic design...",
    mission_title: "Our Mission",
    mission_text: "To provide professional graphic solutions that captivate attention and elevate your brand...",
    why_choose_title: "Why choose us?",
    why_choose_1: "A unique and modern style tailored to each client.",
    why_choose_2: "A creative, passionate and responsive team.",
    why_choose_3: "Timely delivery and personalized support.",
    why_choose_4: "Excellent value for money.",
    services_title: "Our services:",
    service_ad: "Advertising design",
    service_logo: "Logo creation",
    service_3dlogo: "3D Logos",
    service_flyer: "Flyers",
    service_brochure: "Brochures",
    service_social: "Social media posts",
    service_tshirt: "T-shirts",
    service_marketing: "Marketing materials"
  }
};

const switcher = document.getElementById('language-switcher');
switcher.addEventListener('change', switchLanguage);

function switchLanguage() {
  const lang = switcher.value;
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  switchLanguage();
});

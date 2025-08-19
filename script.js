 const translations = {
      en: {
        title: "Shorok Label",
        navAbout: "About Us",
        navArtists: "Our Artists",
        navTracks: "Tracks",
        navContact: "Contact",
        aboutTitle: "About Shorok Label",
        aboutText: "Shorok Label is a premium music distribution company delivering tracks to major streaming platforms with professional cover art. We empower artists to share their music globally with ease and quality.",
        artistsTitle: "Our Artists",
        tracksTitle: "Our Latest Tracks",
        contactTitle: "Contact Us",
        contactEmail: "Email: <a href='mailto:info@shoroklabel.com' style='color:#f0c040;'>info@shoroklabel.com</a>",
        contactPhone: "Phone: <a href='tel:+201098944533' style='color:#f0c040;'>+20 109 894 4533</a>",
        footerText: "&copy; 2025 Shorok Label. All rights reserved.",
        langBtn: "عربي"
      },
      ar: {
        title: "شروق ليبل",
        navAbout: "من نحن",
        navArtists: "فنانونا",
        navTracks: "الأغاني",
        navContact: "اتصل بنا",
        aboutTitle: "عن شروق ليبل",
        aboutText: "شروق ليبل هي شركة توزيع موسيقي متميزة تقوم بإيصال الأغاني إلى منصات البث الكبرى مع تصميمات غلاف احترافية. نحن نمكّن الفنانين من مشاركة موسيقاهم عالميًا بسهولة وجودة.",
        artistsTitle: "فنانونا",
        tracksTitle: "أحدث أغانيْنا",
        contactTitle: "اتصل بنا",
        contactEmail: "البريد الإلكتروني: <a href='mailto:info@shoroklabel.com' style='color:#f0c040;'>info@shoroklabel.com</a>",
        contactPhone: "الهاتف: <a href='tel:+201098944533' style='color:#f0c040;'>+1 234 567 890</a>",
        footerText: "&copy; 2025 شروق ليبل. جميع الحقوق محفوظة.",
        langBtn: "English"
      }
    };

    let currentLang = 'en';
    function toggleLanguage() {
      currentLang = currentLang === 'en' ? 'ar' : 'en';
      const t = translations[currentLang];
      document.getElementById('title').innerHTML = t.title;
      document.getElementById('nav-about').innerHTML = t.navAbout;
      document.getElementById('nav-artists').innerHTML = t.navArtists;
      document.getElementById('nav-tracks').innerHTML = t.navTracks;
      document.getElementById('nav-contact').innerHTML = t.navContact;
      document.getElementById('about-title').innerHTML = t.aboutTitle;
      document.getElementById('about-text').innerHTML = t.aboutText;
      document.getElementById('artists-title').innerHTML = t.artistsTitle;
      document.getElementById('tracks-title').innerHTML = t.tracksTitle;
      document.getElementById('contact-title').innerHTML = t.contactTitle;
      document.getElementById('contact-email').innerHTML = t.contactEmail;
      document.getElementById('contact-phone').innerHTML = t.contactPhone;
      document.getElementById('footer-text').innerHTML = t.footerText;
      document.getElementById('lang-btn').innerHTML = t.langBtn;
      document.body.style.direction = currentLang === 'ar' ? 'rtl' : 'ltr';
    }
    document.getElementById("get-started-btn").addEventListener("click", function() {
  window.location.href = "signup.html";
});

document.getElementById("sign-in-btn").addEventListener("click", function() {
  window.location.href = "login.html"; 
});

  const switchEl = document.getElementById('billingSwitch');
  const amounts = document.querySelectorAll('.amount');

  function updatePrices() {
    const yearly = switchEl.checked;
    amounts.forEach(el => {
      const price = yearly ? el.dataset.yearly : el.dataset.monthly;
      el.textContent = price;
    });
    // تحديث /mo -> /yr لو حابب
    document.querySelectorAll('.per').forEach(p => p.textContent = yearly ? '/yr' : '/mo');
  }
  switchEl?.addEventListener('change', updatePrices);
  updatePrices(); // set initial state



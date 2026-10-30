/* Kannada is the default language. The visitor can switch to English. */
(() => {
  const translations = {
    "meta[name='description']": {
      kn: "ಹಿರಿಯೂರು ಶ್ರೀ ಬನಶಂಕರಿ ದೇವಸ್ಥಾನದ ಟ್ರಸ್ಟ್ (ರಿ.) — ದೇವಸ್ಥಾನದ ಮಾಹಿತಿ, ಪೂಜೆ, ಸೇವೆಗಳು, ಉತ್ಸವಗಳು ಮತ್ತು ಸಂಪರ್ಕ.",
      en: "Hiriyuru Shri Banashankari Temple Trust (Regd.) — temple information, poojas, services, festivals and contact details."
    },
    "title": {
      kn: "ಹಿರಿಯೂರು ಶ್ರೀ ಬನಶಂಕರಿ ದೇವಸ್ಥಾನದ ಟ್ರಸ್ಟ್ (ರಿ.)",
      en: "Hiriyuru Shri Banashankari Temple Trust (Regd.)"
    },
    ".announcement span:first-child": { kn: "॥ ಓಂ ಶ್ರೀ ಬನಶಂಕರಿಯೇ ನಮಃ ॥", en: "॥ Om Shri Banashankari Namah ॥" },
    ".announcement span:last-child": { kn: "ಭಕ್ತಿ • ಸಂಸ್ಕೃತಿ • ಸೇವೆ", en: "Devotion • Culture • Service" },
    ".brand-name strong": { kn: "ಹಿರಿಯೂರು ಶ್ರೀ ಬನಶಂಕರಿ", en: "Hiriyuru Shri Banashankari" },
    ".brand-name small": { kn: "ದೇವಸ್ಥಾನದ ಟ್ರಸ್ಟ್ (ರಿ.)", en: "Temple Trust (Regd.)" },
    ".nav a[href='#home']": { kn: "ಮುಖಪುಟ", en: "Home" },
    ".nav a[href='#about']": { kn: "ದೇವಸ್ಥಾನದ ಬಗ್ಗೆ", en: "About Temple" },
    ".nav a[href='#timings']": { kn: "ದರ್ಶನ ಸಮಯ", en: "Darshan Timings" },
    ".nav a[href='#events']": { kn: "ಕಾರ್ಯಕ್ರಮಗಳು", en: "Events" },
    ".nav a[href='#sevas']": { kn: "ಪೂಜೆ ಮತ್ತು ಸೇವೆಗಳು", en: "Pooja & Sevas" },
    ".nav a[href='#gallery']": { kn: "ಚಿತ್ರಸಂಗ್ರಹ", en: "Gallery" },
    ".nav a[href='#contact']": { kn: "ಸಂಪರ್ಕ", en: "Contact" },

    ".hero .eyebrow": { kn: "✦ ಅಮ್ಮನವರ ದಿವ್ಯ ಸನ್ನಿಧಿ ✦", en: "✦ The Divine Presence of Goddess Banashankari ✦" },
    ".hero h1": {
      kn: "ಹಿರಿಯೂರು ಶ್ರೀ ಬನಶಂಕರಿ<br><em>ದೇವಸ್ಥಾನದ ಟ್ರಸ್ಟ್ (ರಿ.)</em>",
      en: "Hiriyuru Shri Banashankari<br><em>Temple Trust (Regd.)</em>"
    },
    ".hero-content > p": {
      kn: "ಶ್ರೀ ಬನಶಂಕರಿ ಅಮ್ಮನವರ ಕೃಪೆ ಎಲ್ಲರ ಮೇಲಿರಲಿ. ಭಕ್ತಿ, ಪರಂಪರೆ ಮತ್ತು ಸೇವೆಯ ಮೂಲಕ ನಮ್ಮ ಧಾರ್ಮಿಕ ಸಂಸ್ಕೃತಿಯನ್ನು ಉಳಿಸಿ ಬೆಳೆಸೋಣ.",
      en: "May the blessings of Shri Banashankari Amma be upon everyone. Let us preserve and nurture our spiritual heritage through devotion, tradition and service."
    },
    ".hero-buttons .btn-primary": { kn: "ದೇವಸ್ಥಾನದ ಬಗ್ಗೆ ತಿಳಿಯಿರಿ", en: "Discover the Temple" },
    ".hero-buttons .btn-outline": { kn: "ದಾರಿ ಕಂಡುಕೊಳ್ಳಿ ↗", en: "Get Directions ↗" },
    ".hero-bottom": { kn: "ಲೋಕಾಃ ಸಮಸ್ತಾಃ ಸುಖಿನೋ ಭವಂತು", en: "May all beings everywhere be happy" },

    ".quick-links > a:nth-child(1) strong": { kn: "ಕಾರ್ಯಕ್ರಮಗಳು", en: "Events" },
    ".quick-links > a:nth-child(1) small": { kn: "ಉತ್ಸವ ಮತ್ತು ಪ್ರಕಟಣೆಗಳು", en: "Festivals & Announcements" },
    ".quick-links > a:nth-child(2) strong": { kn: "ಪೂಜೆ ಮತ್ತು ಸೇವೆಗಳು", en: "Pooja & Sevas" },
    ".quick-links > a:nth-child(2) small": { kn: "ಧಾರ್ಮಿಕ ಸೇವೆಗಳ ಮಾಹಿತಿ", en: "Details of Religious Services" },
    ".quick-links > a:nth-child(3) strong": { kn: "ಚಿತ್ರಸಂಗ್ರಹ", en: "Photo Gallery" },
    ".quick-links > a:nth-child(3) small": { kn: "ದೇವಸ್ಥಾನದ ದಿವ್ಯ ಕ್ಷಣಗಳು", en: "Divine Moments at the Temple" },

    ".about .section-heading .eyebrow": { kn: "ನಮ್ಮ ದೇವಸ್ಥಾನ", en: "Our Temple" },
    ".about .section-heading h2": { kn: "ಭಕ್ತಿ ಮತ್ತು ಪರಂಪರೆಯ ಪವಿತ್ರ ತಾಣ", en: "A Sacred Place of Devotion and Tradition" },
    ".about .section-heading p": {
      kn: "ನಮ್ಮ ದೇವಸ್ಥಾನದ ಇತಿಹಾಸ, ದೇವಿಯ ಮಹಿಮೆ ಮತ್ತು ಟ್ರಸ್ಟ್‌ನ ಸೇವಾ ಚಟುವಟಿಕೆಗಳ ಅಧಿಕೃತ ಮಾಹಿತಿಯನ್ನು ಇಲ್ಲಿ ಹಂಚಿಕೊಳ್ಳಲಾಗುತ್ತದೆ.",
      en: "Official information about the temple's history, the glory of the Goddess and the Trust's service activities is shared here."
    },
    ".mini-label": { kn: "ನಮ್ಮ ಪರಿಚಯ", en: "About Us" },
    ".about-copy h3": { kn: "ಹಿರಿಯೂರು ಶ್ರೀ ಬನಶಂಕರಿ ದೇವಸ್ಥಾನದ ಟ್ರಸ್ಟ್ (ರಿ.)", en: "Hiriyuru Shri Banashankari Temple Trust (Regd.)" },
    ".about-copy p:nth-of-type(1)": {
      kn: "ಭಕ್ತರಿಗೆ ದೇವಸ್ಥಾನದ ಮಾಹಿತಿ, ಪೂಜೆ ಮತ್ತು ಸೇವೆಗಳ ವಿವರ, ಮುಂಬರುವ ಧಾರ್ಮಿಕ ಕಾರ್ಯಕ್ರಮಗಳು ಹಾಗೂ ಪ್ರಮುಖ ಪ್ರಕಟಣೆಗಳನ್ನು ಒಂದೇ ಸ್ಥಳದಲ್ಲಿ ಒದಗಿಸುವುದು ಈ ಜಾಲತಾಣದ ಉದ್ದೇಶ.",
      en: "This website aims to provide devotees with temple information, details of poojas and services, upcoming religious events and important announcements in one place."
    },
    ".about-copy p:nth-of-type(2)": {
      kn: "ದೇವಸ್ಥಾನದ ನೈಜ ಇತಿಹಾಸ ಮತ್ತು ಪರಂಪರೆಯ ವಿವರಗಳನ್ನು ಟ್ರಸ್ಟ್ ದೃಢಪಡಿಸಿದ ನಂತರ ಇಲ್ಲಿ ಪ್ರಕಟಿಸಲಾಗುತ್ತದೆ.",
      en: "Details about the temple's history and traditions will be published here after confirmation by the Trust."
    },
    ".about-copy .text-link": { kn: "ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ →", en: "Contact Us →" },

    ".timings-header .section-badge": { kn: "✦ ದೈನಂದಿನ ವೇಳಾಪಟ್ಟಿ ✦", en: "✦ Daily Schedule ✦" },
    ".timings-header h2": { kn: "ದೇವಸ್ಥಾನದ ದರ್ಶನ ಮತ್ತು ಪೂಜಾ ಸಮಯ", en: "Temple Darshan and Pooja Timings" },
    ".timings-header p": {
      kn: "ಪ್ರತಿದಿನದ ದರ್ಶನ, ಅಭಿಷೇಕ, ಮಹಾಮಂಗಳಾರತಿ ಹಾಗೂ ವಿಶೇಷ ರಾಹುಕಾಲ ಪೂಜೆಯ ಸಮಯದ ವಿವರಗಳು.",
      en: "Daily darshan, abhisheka, Maha Mangalarati and special Rahukala pooja timings."
    },
    ".timing-card:first-child .timing-tag": { kn: "ಪ್ರತಿದಿನ (ಸೋಮವಾರ – ಭಾನುವಾರ)", en: "Every Day (Monday – Sunday)" },
    ".timing-card:first-child h3": { kn: "ನಿತ್ಯ ದರ್ಶನ ಮತ್ತು ಪೂಜಾ ಸಮಯ", en: "Daily Darshan and Pooja Timings" },
    ".timing-list li:nth-child(1) strong": { kn: "ಬೆಳಗಿನ ದರ್ಶನ ಸಮಯ", en: "Morning Darshan" },
    ".timing-list li:nth-child(1) small": { kn: "ದೇವಸ್ಥಾನ ತೆರೆಯುವ ಸಮಯ", en: "Temple Opening Time" },
    "#time-morning": { kn: "ಬೆಳಿಗ್ಗೆ 7:00 – ಮಧ್ಯಾಹ್ನ 1:00", en: "7:00 AM – 1:00 PM" },
    ".timing-list li:nth-child(2) strong": { kn: "ಅಭಿಷೇಕ ಮತ್ತು ಅಲಂಕಾರ ಪೂಜೆ", en: "Abhisheka and Alankara Pooja" },
    ".timing-list li:nth-child(2) small": { kn: "ನಿತ್ಯ ಅಭಿಷೇಕ ಸೇವೆ", en: "Daily Abhisheka Service" },
    "#time-abhisheka": { kn: "ಬೆಳಿಗ್ಗೆ 7:30 – 9:30", en: "7:30 AM – 9:30 AM" },
    ".timing-list li:nth-child(3) strong": { kn: "ಮಧ್ಯಾಹ್ನ ಮಹಾಮಂಗಳಾರತಿ", en: "Afternoon Maha Mangalarati" },
    ".timing-list li:nth-child(3) small": { kn: "ಮಹಾನೈವೇದ್ಯ ಮತ್ತು ಆರತಿ", en: "Maha Naivedya and Aarti" },
    "#time-noon-arathi": { kn: "ಮಧ್ಯಾಹ್ನ 12:30", en: "12:30 PM" },
    ".timing-list li:nth-child(4) strong": { kn: "ಸಂಜೆಯ ದರ್ಶನ ಸಮಯ", en: "Evening Darshan" },
    ".timing-list li:nth-child(4) small": { kn: "ಸಂಜೆ ಪೂಜೆ ಮತ್ತು ದರ್ಶನ", en: "Evening Pooja and Darshan" },
    "#time-evening": { kn: "ಸಂಜೆ 4:30 – ರಾತ್ರಿ 8:30", en: "4:30 PM – 8:30 PM" },
    ".timing-list li:nth-child(5) strong": { kn: "ರಾತ್ರಿ ಮಹಾಮಂಗಳಾರತಿ", en: "Night Maha Mangalarati" },
    ".timing-list li:nth-child(5) small": { kn: "ಸಂಜೆ ವಿಶೇಷ ಆರತಿ", en: "Special Evening Aarti" },
    "#time-night-arathi": { kn: "ರಾತ್ರಿ 7:30", en: "7:30 PM" },
    ".rahukala-card .timing-tag": { kn: "ಅಮ್ಮನವರ ವಿಶೇಷ ಸೇವೆ", en: "Special Service to the Goddess" },
    ".rahukala-card h3": { kn: "ರಾಹುಕಾಲ ನಿಂಬೆ ದೀಪ ಪೂಜೆ", en: "Rahukala Lemon Lamp Pooja" },
    ".rahukala-desc": {
      kn: "ಶ್ರೀ ಬನಶಂಕರಿ ಅಮ್ಮನವರಿಗೆ ಮಂಗಳವಾರ, ಶುಕ್ರವಾರ ಮತ್ತು ಭಾನುವಾರದ ರಾಹುಕಾಲದಲ್ಲಿ ನಿಂಬೆ ಹಣ್ಣಿನ ದೀಪ ಹಚ್ಚಿ ವಿಶೇಷ ಪೂಜೆ ಸಲ್ಲಿಸುವುದು ಅತ್ಯಂತ ಶ್ರೇಷ್ಠವಾಗಿದೆ.",
      en: "Offering a special pooja to Shri Banashankari Amma by lighting lemon lamps during Rahukala on Tuesdays, Fridays and Sundays is considered auspicious."
    },
    ".rahukala-list li:nth-child(1) strong": { kn: "ಮಂಗಳವಾರ (Tuesday)", en: "Tuesday" },
    ".rahukala-list li:nth-child(1) small": { kn: "ಮಧ್ಯಾಹ್ನ ರಾಹುಕಾಲ ವಿಶೇಷ ಪೂಜೆ", en: "Afternoon Rahukala Special Pooja" },
    "#rahu-tue": { kn: "ಮಧ್ಯಾಹ್ನ 3:00 – 4:30", en: "3:00 PM – 4:30 PM" },
    ".rahukala-list li:nth-child(2) strong": { kn: "ಶುಕ್ರವಾರ (Friday)", en: "Friday" },
    ".rahukala-list li:nth-child(2) small": { kn: "ಬೆಳಗಿನ ರಾಹುಕಾಲ ವಿಶೇಷ ಪೂಜೆ", en: "Morning Rahukala Special Pooja" },
    "#rahu-fri": { kn: "ಬೆಳಿಗ್ಗೆ 10:30 – 12:00", en: "10:30 AM – 12:00 PM" },
    ".rahukala-list li:nth-child(3) strong": { kn: "ಭಾನುವಾರ (Sunday)", en: "Sunday" },
    ".rahukala-list li:nth-child(3) small": { kn: "ಸಂಜೆ ರಾಹುಕಾಲ ವಿಶೇಷ ಪೂಜೆ", en: "Evening Rahukala Special Pooja" },
    "#rahu-sun": { kn: "ಸಂಜೆ 4:30 – 6:00", en: "4:30 PM – 6:00 PM" },
    "#special-day-note small": {
      kn: "ಹುಣ್ಣಿಮೆ, ಅಮಾವಾಸ್ಯೆ ಹಾಗೂ ಹಬ್ಬದ ದಿನಗಳಲ್ಲಿ ದೇವಸ್ಥಾನವು ವಿಶೇಷ ಸಮಯದಲ್ಲಿ ತೆರೆದಿರುತ್ತದೆ.",
      en: "On full moon, new moon and festival days, the temple may remain open at special timings."
    },

    ".events .section-heading .eyebrow": { kn: "ದೇವಿಯ ಸೇವೆಯಲ್ಲಿ", en: "In the Service of the Goddess" },
    ".events .section-heading h2": { kn: "ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ಉತ್ಸವಗಳು", en: "Events and Festivals" },
    ".events .section-heading p": {
      kn: "ವಿಶೇಷ ಪೂಜೆಗಳು, ವಾರ್ಷಿಕ ಉತ್ಸವಗಳು ಮತ್ತು ಸಮುದಾಯ ಕಾರ್ಯಕ್ರಮಗಳ ಪ್ರಕಟಣೆಗಳನ್ನು ಇಲ್ಲಿ ವೀಕ್ಷಿಸಿ.",
      en: "View announcements about special poojas, annual festivals and community events here."
    },
    ".event-card:nth-child(1) .event-tag": { kn: "ಪ್ರಕಟಣೆ", en: "Announcement" },
    ".event-card:nth-child(1) h3": { kn: "ಮುಂದಿನ ಧಾರ್ಮಿಕ ಕಾರ್ಯಕ್ರಮ", en: "Upcoming Religious Event" },
    ".event-card:nth-child(1) p": {
      kn: "ಕಾರ್ಯಕ್ರಮದ ಹೆಸರು, ದಿನಾಂಕ ಮತ್ತು ಸಮಯವನ್ನು ಟ್ರಸ್ಟ್ ದೃಢಪಡಿಸಿದ ನಂತರ ಇಲ್ಲಿ ಪ್ರಕಟಿಸಲಾಗುತ್ತದೆ.",
      en: "The event name, date and time will be published here after confirmation by the Trust."
    },
    ".event-card:nth-child(1) .event-date": { kn: "ದಿನಾಂಕ ಮತ್ತು ಸಮಯ ಶೀಘ್ರದಲ್ಲೇ", en: "Date and time to be announced" },
    ".event-card:nth-child(2) .event-tag": { kn: "ಪೂಜೆ", en: "Pooja" },
    ".event-card:nth-child(2) h3": { kn: "ವಿಶೇಷ ಪೂಜೆಗಳು", en: "Special Poojas" },
    ".event-card:nth-child(2) p": { kn: "ವಿಶೇಷ ಪೂಜೆಗಳ ಮಾಹಿತಿ ಮತ್ತು ಭಾಗವಹಿಸುವ ವಿಧಾನವನ್ನು ಇಲ್ಲಿ ನೀಡಲಾಗುತ್ತದೆ.", en: "Information about special poojas and how to participate will be provided here." },
    ".event-card:nth-child(2) .event-date": { kn: "ವಿವರಗಳು ಶೀಘ್ರದಲ್ಲೇ", en: "Details coming soon" },
    ".event-card:nth-child(3) .event-tag": { kn: "ಉತ್ಸವ", en: "Festival" },
    ".event-card:nth-child(3) h3": { kn: "ವಾರ್ಷಿಕ ಉತ್ಸವಗಳು", en: "Annual Festivals" },
    ".event-card:nth-child(3) p": { kn: "ದೇವಸ್ಥಾನದ ಉತ್ಸವಗಳು ಮತ್ತು ಆಚರಣೆಗಳ ವೇಳಾಪಟ್ಟಿಯನ್ನು ಇಲ್ಲಿ ಪ್ರಕಟಿಸಲಾಗುತ್ತದೆ.", en: "The schedule of temple festivals and celebrations will be published here." },
    ".event-card:nth-child(3) .event-date": { kn: "ವಿವರಗಳು ಶೀಘ್ರದಲ್ಲೇ", en: "Details coming soon" },

    ".sevas .section-heading .eyebrow": { kn: "ಭಕ್ತಿಪೂರ್ವಕ ಸೇವೆ", en: "Devotional Services" },
    ".sevas .section-heading h2": { kn: "ಪೂಜೆ ಮತ್ತು ಸೇವೆಗಳು", en: "Pooja and Services" },
    ".sevas .section-heading p": { kn: "ದೇವಸ್ಥಾನದಲ್ಲಿ ಲಭ್ಯವಿರುವ ಸೇವೆಗಳ ಅಧಿಕೃತ ಪಟ್ಟಿಯನ್ನು ಟ್ರಸ್ಟ್ ದೃಢಪಡಿಸಿದ ನಂತರ ಇಲ್ಲಿ ಸೇರಿಸಬಹುದು.", en: "The official list of services available at the temple can be added here after confirmation by the Trust." },
    ".seva-card:nth-child(1) h3": { kn: "ಅರ್ಚನೆ", en: "Archana" },
    ".seva-card:nth-child(1) p": { kn: "ಅರ್ಚನೆಗೆ ಸಂಬಂಧಿಸಿದ ವಿವರಗಳು ಮತ್ತು ಸಮಯವನ್ನು ದೃಢಪಡಿಸಲಾಗುತ್ತದೆ.", en: "Archana details and timings will be confirmed." },
    ".seva-card:nth-child(2) h3": { kn: "ವಿಶೇಷ ಪೂಜೆ", en: "Special Pooja" },
    ".seva-card:nth-child(2) p": { kn: "ವಿಶೇಷ ಪೂಜೆಗಳ ವಿಧಾನ ಮತ್ತು ಸೇವಾ ವಿವರಗಳು ಶೀಘ್ರದಲ್ಲೇ.", en: "Details of special pooja procedures and services will be shared soon." },
    ".seva-card:nth-child(3) h3": { kn: "ಅಭಿಷೇಕ", en: "Abhisheka" },
    ".seva-card:nth-child(3) p": { kn: "ಅಭಿಷೇಕ ಸೇವೆಯ ಲಭ್ಯತೆ ಮತ್ತು ಸಮಯವನ್ನು ದೇವಸ್ಥಾನದಲ್ಲಿ ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.", en: "Please confirm the availability and timings of Abhisheka service at the temple." },
    ".seva-card:nth-child(4) h3": { kn: "ಭಕ್ತರ ಸೇವೆ", en: "Devotee Services" },
    ".seva-card:nth-child(4) p": { kn: "ಟ್ರಸ್ಟ್‌ನ ಸೇವಾ ಚಟುವಟಿಕೆಗಳ ಕುರಿತು ಮಾಹಿತಿ ಇಲ್ಲಿ ಪ್ರಕಟಿಸಲಾಗುತ್ತದೆ.", en: "Information about the Trust's service activities will be published here." },
    ".disclaimer": { kn: "ಸೂಚನೆ: ಮೇಲಿನವು ಮಾದರಿ ವಿಭಾಗಗಳು ಮಾತ್ರ. ದೇವಸ್ಥಾನದಲ್ಲಿ ಲಭ್ಯವಿರುವ ಸೇವೆಗಳನ್ನು ದೃಢಪಡಿಸಿದ ನಂತರ ಅಂತಿಮಗೊಳಿಸಬೇಕು.", en: "Note: The above are sample sections only. They should be finalized after confirming the services actually available at the temple." },

    ".gallery .section-heading .eyebrow": { kn: "ದಿವ್ಯ ದರ್ಶನ", en: "Divine Darshan" },
    ".gallery .section-heading h2": { kn: "ಚಿತ್ರಸಂಗ್ರಹ", en: "Photo Gallery" },
    ".gallery .section-heading p": { kn: "ದೇವಿಯ ಅಲಂಕಾರ, ದೇವಸ್ಥಾನ, ಪೂಜೆ ಮತ್ತು ಉತ್ಸವಗಳ ನೈಜ ಚಿತ್ರಗಳನ್ನು ಇಲ್ಲಿ ಸೇರಿಸಲಾಗುತ್ತದೆ.", en: "Photos of the Goddess's alankara, the temple, poojas and festivals will be displayed here." },
    ".instagram-eyebrow": { kn: "ನಮ್ಮನ್ನು Instagram ನಲ್ಲಿ ಹಿಂಬಾಲಿಸಿ", en: "Follow Us on Instagram" },
    ".instagram-gallery-info h3": { kn: "@hiriyurubanashankariamma", en: "@hiriyurubanashankariamma" },
    ".instagram-gallery-info p": { kn: "ಅಮ್ಮನವರ ದರ್ಶನ, ವಿಶೇಷ ಅಲಂಕಾರ ಮತ್ತು ಉತ್ಸವಗಳ ಚಿತ್ರಗಳನ್ನು ವೀಕ್ಷಿಸಿ.", en: "View photos of Amma's darshan, special decorations and festivals." },
    ".instagram-follow-btn": { kn: "Instagram ನಲ್ಲಿ Follow ಮಾಡಿ ↗", en: "Follow on Instagram ↗" },
    ".instagram-qr-wrap span": { kn: "ಸ್ಕ್ಯಾನ್ ಮಾಡಿ Follow ಮಾಡಿ", en: "Scan to Follow" },
    ".video-heading .eyebrow": { kn: "ವೀಡಿಯೊ ದರ್ಶನ", en: "Video Darshan" },
    ".video-heading h2": { kn: "ದೇವಸ್ಥಾನದ ವೀಡಿಯೊಗಳು", en: "Temple Videos" },
    ".video-heading p": { kn: "ದೇವಸ್ಥಾನ ಮತ್ತು ಉತ್ಸವಗಳ ವೀಡಿಯೊಗಳನ್ನು ಇಲ್ಲಿ ವೀಕ್ಷಿಸಬಹುದು.", en: "Watch videos of the temple and its festivals here." },
    ".video-card:nth-child(1) p": { kn: "ದೇವಸ್ಥಾನದ ವೀಡಿಯೊ ೧", en: "Temple Video 1" },
    ".video-card:nth-child(2) p": { kn: "ದೇವಸ್ಥಾನದ ವೀಡಿಯೊ ೨", en: "Temple Video 2" },
    ".video-card:nth-child(3) p": { kn: "ದೇವಸ್ಥಾನದ ವೀಡಿಯೊ ೩", en: "Temple Video 3" },

    ".contact-band .eyebrow": { kn: "ನಿಮ್ಮನ್ನು ಸ್ವಾಗತಿಸುತ್ತೇವೆ", en: "You Are Welcome" },
    ".contact-band h2": { kn: "ದೇವಿಯ ದರ್ಶನಕ್ಕೆ ಬನ್ನಿ", en: "Come for the Goddess's Darshan" },
    ".contact-band p": { kn: "ದರ್ಶನದ ಸಮಯವನ್ನು ಖಚಿತಪಡಿಸಲು ಅಥವಾ ದೇವಸ್ಥಾನದ ಕುರಿತು ವಿಚಾರಿಸಲು ಸಂಪರ್ಕಿಸಿ.", en: "Contact us to confirm darshan timings or to enquire about the temple." },
    ".contact-actions .btn-light": { kn: "☎ +91 9113994100", en: "☎ +91 9113994100" },
    ".contact-actions .btn-gold": { kn: "Google Maps ↗", en: "Google Maps ↗" },

    ".footer-brand strong": { kn: "ಹಿರಿಯೂರು ಶ್ರೀ ಬನಶಂಕರಿ", en: "Hiriyuru Shri Banashankari" },
    ".footer-brand small": { kn: "ದೇವಸ್ಥಾನದ ಟ್ರಸ್ಟ್ (ರಿ.)", en: "Temple Trust (Regd.)" },
    ".footer-top > p": { kn: "ಭಕ್ತಿ • ಸಂಸ್ಕೃತಿ • ಸೇವೆ", en: "Devotion • Culture • Service" },
    ".footer-bottom span:first-child": { kn: "© <span id=\"year\">{year}</span> ಹಿರಿಯೂರು ಶ್ರೀ ಬನಶಂಕರಿ ದೇವಸ್ಥಾನದ ಟ್ರಸ್ಟ್ (ರಿ.)", en: "© <span id=\"year\">{year}</span> Hiriyuru Shri Banashankari Temple Trust (Regd.)" },
    ".footer-bottom a": { kn: "ಮೇಲಕ್ಕೆ ↑", en: "Back to Top ↑" },
    ".footer-instagram": { kn: "@hiriyurubanashankariamma · Follow", en: "@hiriyurubanashankariamma · Follow" },

    ".committee-section .section-heading .eyebrow": { kn: "ನಮ್ಮ ಆಡಳಿತ ಮಂಡಳಿ", en: "Our Management Committee" },
    ".committee-section .section-heading h2": { kn: "ದೇವಸ್ಥಾನದ ಆಡಳಿತ ಮಂಡಳಿ", en: "Temple Management Committee" },
    ".committee-section .section-heading p": { kn: "ಹಿರಿಯೂರು ಶ್ರೀ ಬನಶಂಕರಿ ದೇವಸ್ಥಾನದ ಟ್ರಸ್ಟ್‌ನ ಪದಾಧಿಕಾರಿಗಳು.", en: "Office bearers of Hiriyuru Shri Banashankari Temple Trust." },
    ".committee-card:nth-child(1) .committee-role": { kn: "ಅಧ್ಯಕ್ಷರು", en: "President" },
    ".committee-card:nth-child(1) h3": { kn: "ವಿ. ಧನರಾಜ್", en: "V. Dhanaraj" },
    ".committee-card:nth-child(2) .committee-role": { kn: "ಉಪಾಧ್ಯಕ್ಷರು", en: "Vice President" },
    ".committee-card:nth-child(2) h3": { kn: "ಆರ್. ಚಂದ್ರಶೇಖರ್", en: "R. Chandrashekhar" },
    ".committee-card:nth-child(3) .committee-role": { kn: "ಕಾರ್ಯದರ್ಶಿ", en: "Secretary" },
    ".committee-card:nth-child(3) h3": { kn: "ಟಿ.ಜಿ. ಶಿವಶಂಕರ್", en: "T.G. Shivashankar" },
    ".committee-card:nth-child(4) .committee-role": { kn: "ಖಜಾಂಚಿ", en: "Treasurer" },
    ".committee-card:nth-child(4) h3": { kn: "ಬೆಳ್ಳುಳ್ಳಿ ಎಂ. ದೇವರಾಜು", en: "Bellulli M. Devaraju" },

    "#donate .section-heading .eyebrow": { kn: "ಅಮ್ಮನವರ ಸೇವೆಗೆ ನಿಮ್ಮ ಕಾಣಿಕೆ", en: "Support the Temple" },
    "#donate .section-heading h2": { kn: "ದೇವಸ್ಥಾನಕ್ಕೆ ದೇಣಿಗೆ", en: "Make a Temple Donation" },
    "#donate .section-heading p": { kn: "ನಿಮ್ಮ ಕಾಣಿಕೆಯು ದೇವಸ್ಥಾನದ ಪೂಜೆಗಳು, ಧಾರ್ಮಿಕ ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ಸೇವಾ ಚಟುವಟಿಕೆಗಳಿಗೆ ಸಹಕಾರಿಯಾಗುತ್ತದೆ.", en: "Your contribution supports temple poojas, religious events and community service activities." },
    ".donation-trust-name": { kn: "ಹಿರಿಯೂರು ಶ್ರೀ ಬನಶಂಕರಿ ದೇವಸ್ಥಾನದ ಟ್ರಸ್ಟ್ (ರಿ.)", en: "Hiriyuru Shri Banashankari Temple Trust (Regd.)" },
    ".donation-copy h3": { kn: "ಭಕ್ತಿಯಿಂದ ಸಲ್ಲಿಸುವ ಪ್ರತಿಯೊಂದು ಕಾಣಿಕೆಯೂ ಅಮೂಲ್ಯ", en: "Every offering made with devotion matters" },
    ".donation-copy > p": { kn: "ಕೆಳಗಿನ Indian Bank QR ಕೋಡ್ ಅನ್ನು ಸ್ಕ್ಯಾನ್ ಮಾಡಿ ಅಥವಾ UPI ಮೂಲಕ ಕಾಣಿಕೆ ಸಲ್ಲಿಸಿ. ಪಾವತಿ ಮಾಡುವ ಮೊದಲು ಫಲಾನುಭವಿಯ ಹೆಸರು ಪರಿಶೀಲಿಸಿ.", en: "Scan the Indian Bank QR code below or pay using UPI. Please verify the beneficiary name before making payment." },
    "label[for='donorName']": { kn: "ದಾನಿಗಳ ಹೆಸರು", en: "Donor name" },
    "label[for='donorPhone']": { kn: "ಮೊಬೈಲ್ ಸಂಖ್ಯೆ", en: "Mobile number" },
    "label[for='donationAmount']": { kn: "ದೇಣಿಗೆ ಮೊತ್ತ (₹)", en: "Donation amount (₹)" },
    "#donationPayBtn": { kn: "ದೇಣಿಗೆ ಪಾವತಿಸಿ ↗", en: "Donate Now ↗" },
    "#donationStatus": { kn: "ಪಾವತಿ ಪೂರ್ಣಗೊಳಿಸಿದ ನಂತರ ನಿಮ್ಮ ಪಾವತಿ ದೃಢೀಕರಣದ ಆಧಾರದ ಮೇಲೆ ರಸೀದಿ ನೀಡಲಾಗುತ್ತದೆ.", en: "A receipt will be issued based on confirmed payment status after the payment is completed." },
    "#upiPayLink": { kn: "UPI ಆಪ್ ಮೂಲಕ ಪಾವತಿಸಿ ↗", en: "Pay using UPI app ↗" },
    ".donation-bank-details span:last-child": { kn: "ಫಲಾನುಭವಿ: HIRIYUR SRI BANASHANKARI TEMPLE TRUST", en: "Beneficiary: HIRIYUR SRI BANASHANKARI TEMPLE TRUST" },
    ".donation-consent span": { kn: "ನನ್ನ ದೇಣಿಗೆ ರಸೀದಿಯನ್ನು ಈ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಗೆ WhatsApp ಮೂಲಕ ಕಳುಹಿಸಲು ನಾನು ಒಪ್ಪುತ್ತೇನೆ.", en: "I agree to receive my donation receipt on this mobile number through WhatsApp." },
    ".donation-qr-card > small": { kn: "QR ಸ್ಕ್ಯಾನ್ ಮಾಡುವಾಗ ಅಥವಾ UPI ಪಾವತಿ ಮಾಡುವಾಗ ಫಲಾನುಭವಿಯ ಹೆಸರನ್ನು ಪರಿಶೀಲಿಸಿ.", en: "Please check the beneficiary name before confirming the QR or UPI payment." },
    ".nav a[href='#donate']": { kn: "ದೇಣಿಗೆ", en: "Donate" }
  };

  function setLanguage(language) {
    const lang = language === "en" ? "en" : "kn";

    Object.entries(translations).forEach(([selector, values]) => {
      const element = document.querySelector(selector);
      if (!element) return;
      let value = values[lang];
      if (value.includes("{year}")) {
        const year = document.getElementById("year")?.textContent || new Date().getFullYear();
        value = value.replace("{year}", year);
      }
      element.innerHTML = value;
    });


    document.querySelectorAll("[data-placeholder-kn][data-placeholder-en]").forEach((input) => {
      input.placeholder = lang === "en" ? input.dataset.placeholderEn : input.dataset.placeholderKn;
    });

    document.documentElement.lang = lang;
    const toggle = document.getElementById("languageToggle");
    if (toggle) {
      toggle.setAttribute("aria-pressed", String(lang === "en"));
      toggle.setAttribute(
        "aria-label",
        lang === "en" ? "Switch website language to Kannada" : "Switch website language to English"
      );
    }
    try { localStorage.setItem("templeSiteLanguage", lang); } catch (error) {}
  }

  document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("languageToggle");
    let savedLanguage = "kn";
    try { savedLanguage = localStorage.getItem("templeSiteLanguage") || "kn"; } catch (error) {}
    setLanguage(savedLanguage);

    if (toggle) {
      toggle.addEventListener("click", () => {
        const current = document.documentElement.lang === "en" ? "en" : "kn";
        setLanguage(current === "kn" ? "en" : "kn");
      });
    }
  });
})();

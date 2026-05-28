import React from "react";

const clients = [
  "Stellantis",
  "Yanfeng",
  "Permobil",
  "Treetown Tech",
  "NIAR",
  "Ewellix",
  "MC3 Michigan",
  "Inteva Products",
  "Oxbow Machine",
  "Krauss Maffei",
  "Tesla",
];

const companyLogos = [
  {
    src: '/309621119_544389664357296_6973776572190225174_n.jpg',
    alt: 'Treetown Tech',
    name: 'Treetown Tech'
  },
  {
    src: '/KM.jpg',
    alt: 'KM',
    name: 'KM'
  },
  {
    src: 'https://www.stellantis.com/content/dam/stellantis-corporate/assets/stell-logo-blue.svg',
    alt: 'Stellantis',
    name: 'Stellantis'
  },
  {
    src: 'https://www.yanfeng.com/sites/default/files/YF_logo_AI_8.png',
    alt: 'Yanfeng',
    name: 'Yanfeng'
  },
  {
    src: 'https://www.permobil.com/icons/Permobil_logo.svg',
    alt: 'Permobil',
    name: 'Permobil'
  },

  {
    src: 'https://www.wichita.edu/industry_and_defense/NIAR/images/Official-NIAR-Logo-White-Text.png',
    alt: 'NIAR',
    name: 'NIAR'
  },
  {
    src: 'https://medias.schaeffler.us/_ui/responsive/theme-alpha/images/schaeffler-logo.svg',
    alt: 'Ewellix',
    name: 'Ewellix'
  },
  {
    src: 'https://i0.wp.com/www.intevaproducts.com/wp-content/uploads/2025/06/inteva-black-logo.png?fit=1200%2C247&ssl=1',
    alt: 'Inteva',
    name: 'DMS'
  },
  {
    src: 'https://mc3michigan.org/wp-content/uploads/elementor/thumbs/MC3-logo-RGB_color-r7i41gnob0sdvueqvzhbww3eruhur0caityonkyfoi.png',
    alt: 'MC3',
    name: 'MC3 Michigan'
  },
  {
    src: 'https://www.oxbow-machine.com/assets/oxbow_logo.svg',
    alt: 'Oxbow Machine',
    name: 'Oxbow Machine'
  },
  {
    src: '/KM.jpg',
    alt: 'Krauss Maffei',
    name: 'Krauss Maffei'
  },
  {
    src: '/tesla.png',
    alt: 'Tesla',
    name: 'Tesla'
  }
];

const Companies = () => {
  // Duplicate the list to create a seamless looping marquee
  const items = [...companyLogos, ...companyLogos];

  return (
    <section
      id="clients"
      className="border-b border-black overflow-hidden"
      style={{ borderBottomWidth: "1.5px" }}
    >
      {/* Header */}
      <div
        className="flex justify-between items-baseline border-b border-[var(--rule)]"
        style={{ padding: "32px 36px 24px" }}
      >
        <span className="section-eyebrow">Trusted by industry leaders</span>
        <span className="text-[11px] text-[#ccc]">
          Automotive · Manufacturing · Defense
        </span>
      </div>

      {/* Logo marquee */}
      <div className="overflow-hidden" style={{ padding: "28px 0" }}>
        <div className="logos-track">
          {items.map((item, i) => (
            <div
              key={`${item.name}-${i}`}
              className="px-[44px] flex items-center justify-center min-w-[140px]  transition-opacity"
              // style={{ filter: "grayscale(1)" }}
            >
              {/* <span className="text-[14px] font-medium text-black tracking-[0.02em] whitespace-nowrap">
                {item.name}
              </span> */}
              <img src={item.src} alt={item.name} className="w-[150px] h-[100px] object-contain rounded-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;

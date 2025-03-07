import React from "react";
import footerData from "../data/footerData";

const Footer = () => {
  return (
    <section className="py-8 md:py-32 px-4 md:px-20 bg-[#F9F5F6]">
      <div className="container">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
            <div className="col-span-2 mb-8 lg:mb-0">
              <div className="flex items-center gap-2 lg:justify-start">
                <a href={footerData.logo.url}>
                  <img
                    src={footerData.logo.src}
                    alt={footerData.logo.alt}
                    title={footerData.logo.title}
                    className="h-10"
                  />
                </a>
                <p className="text-xl font-semibold">{footerData.logo.title}</p>
              </div>
              <p className="mt-4 font-bold">{footerData.tagline}</p>
            </div>
            {footerData.menuItems.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="space-y-4 text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-primary"
                    >
                      <a href={link.url}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
            <p>{footerData.copyright}</p>
            <ul className="flex gap-4">
              {footerData.bottomLinks.map((link, linkIdx) => (
                <li key={linkIdx} className="underline hover:text-primary">
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;

import { Helmet } from "react-helmet-async";
import { useLanguage } from "../../context/LanguageContext";

const SEO = () => {
  const { lang } = useLanguage();

  const seoData = {
    en: {
      title: "IT Services SA | Empowering Saudi Startups & SMEs | Vision 2030",
      description: "Your trusted partner in digital transformation. Comprehensive IT solutions from foundational infrastructure to cutting-edge AI and Cloud technologies in Saudi Arabia.",
      keywords: "IT services Saudi Arabia, digital transformation, cloud solutions Saudi Arabia, AI business solutions, startup IT infrastructure, managed IT support Riyadh, software development Saudi Arabia, Vision 2030",
      ogTitle: "IT Services SA | Digital Transformation for Startups & SMEs",
      ogDescription: "Scale your business with tailored IT infrastructure, support, cloud, and AI solutions aligned with Saudi Vision 2030.",
    },
    ar: {
      title: "خدمات تقنية المعلومات SA | تمكين الشركات السعودية الناشئة والصغيرة والمتوسطة | رؤية 2030",
      description: "شريكك الموثوق في التحول الرقمي. حلول تقنية معلومات متكاملة تبدأ من البنية التحتية الأساسية وصولاً إلى تقنيات الذكاء الاصطناعي والسحابية المتقدمة في المملكة العربية السعودية.",
      keywords: "خدمات تقنية المعلومات السعودية, التحول الرقمي, الحلول السحابية السعودية, حلول الذكاء الاصطناعي للشركات, البنية التحتية لتقنية المعلومات, الدعم الفني المدار الرياض, تطوير البرمجيات, رؤية 2030",
      ogTitle: "خدمات تقنية المعلومات SA | التحول الرقمي للشركات الناشئة والصغيرة",
      ogDescription: "طوّر أعمالك بحلول البنية التحتية، الدعم الفني، الخدمات السحابية، والذكاء الاصطناعي المتوافقة مع رؤية السعودية 2030.",
    }
  };

  const currentSeo = seoData[lang] || seoData.ar;
  const siteUrl = "https://itservices-sa.com";
  const ogImageUrl = `${siteUrl}/og-image.png`;

  // Structured Data (JSON-LD) for Local Business/Organization and WebSite
  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    "name": "IT Services SA",
    "alternateName": "خدمات تقنية المعلومات SA",
    "url": siteUrl,
    "logo": `${siteUrl}/favicon.svg`,
    "image": ogImageUrl,
    "description": lang === "en" ? seoData.en.description : seoData.ar.description,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "SA",
      "addressRegion": "Riyadh",
      "addressLocality": "Riyadh"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+966-0-XXX-XXXX-XXX",
      "contactType": "customer service",
      "email": "contact@itservices-sa.com",
      "availableLanguage": ["Arabic", "English"]
    }
  };

  const schemaWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    "name": "IT Services SA",
    "url": siteUrl,
    "publisher": {
      "@id": `${siteUrl}/#organization`
    },
    "inLanguage": ["ar", "en"]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{currentSeo.title}</title>
      <meta name="description" content={currentSeo.description} />
      <meta name="keywords" content={currentSeo.keywords} />
      <meta name="author" content="IT Services SA" />
      <meta name="robots" content="index, follow" />

      {/* Language / Canonical Link */}
      <link rel="canonical" href={siteUrl} />
      <link rel="alternate" href={`${siteUrl}/?lang=ar`} hrefLang="ar" />
      <link rel="alternate" href={`${siteUrl}/?lang=en`} hrefLang="en" />
      <link rel="alternate" href={siteUrl} hrefLang="x-default" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={currentSeo.ogTitle} />
      <meta property="og:description" content={currentSeo.ogDescription} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:locale" content={lang === "ar" ? "ar_SA" : "en_US"} />
      <meta property="og:locale:alternate" content={lang === "ar" ? "en_US" : "ar_SA"} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content={currentSeo.ogTitle} />
      <meta name="twitter:description" content={currentSeo.ogDescription} />
      <meta name="twitter:image" content={ogImageUrl} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrg)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(schemaWebsite)}
      </script>
    </Helmet>
  );
};

export default SEO;

import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          deal: "save up to  30% to 40% off",
          dealText: "OMG! JUST LOOK AT THE GREAT DEALS!",
          shopByCategory: "SHOP BY CATEGORY",
          Home: "HOME",
          Shop: "SHOP",
          Product: "PRODUCT",
          features: "FEATURES",
          Pages: "PAGES",
          blog: "BLOG",
          shopping: "Shopping",
          cart: "Cart",
          "All Category": "All Category",
          "Download app": "Download app",
          "free shipping on order over $99": "free shipping on order over $99",
          item: "item",
          wishlist: "wishlist",
        },
      },
      es: {
        translations: {
          deal: "ahorre hasta 30% a 40% de descuento",
          dealText: "¡DIOS MIO! ¡SOLO MIRE LAS GRANDES OFERTAS!",
          shopByCategory: "COMPRA POR CATEGORÍA",
          Home: "hogar",
          Shop: "tienda",
          Product: "producto",
          features: "caracteristicas",
          Pages: "paginas",
          blog: "Blog",
          shopping: "compras",
          cart: "carro",
          "All Category": "Toda la categoría",
          "Download app": "Descargar app",
          "free shipping on order over $99": "envío gratis en pedidos superiores a $ 99",
          item: "articulo",
          wishlist: "lista de deseos",
        },
      },
      ar: {
        translations: {
          deal: "وفر حتى 30٪ إلى 40٪",
          dealText: "يا الهي! انظروا فقط إلى العروض الرائعة!",
          shopByCategory: "تسوق حسب الاقسام",
          Home: "الصفحة الرئيسية",
          Shop: "متجر",
          Product: "المنتج",
          features: "الميزات",
          Pages: "الصفحات",
          blog: "مدونة",
          shopping: "التسوق",
          cart: "عربة التسوق",
          "All Category": "جميع الفئات",
          "Download app": "تنزيل aap",
          "free shipping on order over $99": "شحن مجاني عند الطلب بأكثر من 99 دولارًا",
          item: "بند",
          wishlist: "قائمة الرغبات",
        },
      },
    },
    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

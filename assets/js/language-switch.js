document.addEventListener('DOMContentLoaded', function () {

    const languageToggle = document.getElementById('language-toggle');
    const translatableElements = document.querySelectorAll('.language-change');

    const translations = {
        en: {
            nav_home: `<i class="uil uil-house-user nav__icon"></i>Home`,
            nav_about: `<i class="uil uil-fire  nav__icon"></i>About Us`,
            nav_products:`<i class="uil uil-tag-alt nav__icon"></i>Our Products`,
            nav_distributors:`<i class="uil uil-store nav__icon language-change"></i>Distributors`,
            nav_contact:`<i class="uil uil-message   nav__icon"></i>Contact`,
            home_title: "Premium Quality",
            home_subtitle: "Mesquite Charcoal",
            home_description: "Created with the top standars to asure a long lasting "+
                            "burning time with blazing heat, you just found it!",
            home_button: `Get in touch!<i class="uil uil-message button__icon"></i>`,
            home_scroll: "Scroll down",
            
            about_title:"Our Story",
            about_subtitle:"A region with history, tradition and connection",
            about_description: "Northeastern Mexico and the southern United States are united by their "+
                              "livestock heritage, the culture of grilled cuisine, and the quality of their "+
                              "natural resources.<br>These shared roots give us the tradition of barbecue."+
                              "<br>For generations, these lands have preserved the heart of the art of "+
                              "using this charcoal-grilling technique for meat, serving as the origin of "+
                              "family gatherings and various celebrations. This is where we were born "+
                              "as FUEGO DE MESQUITE.",
            about_num1:"Tons <br> Sold",
            about_num2:"Years of <br> Market Experience",
            about_num3:"States <br> Presence",
            
            values_mission:"Our Mission",
            values_vision:"Our Vision",
            values_mis_desc:"Our mission is to deliver the highest quality charcoal that enhances "+
                        "every grilling and cooking experience. We are dedicated to maintaining rigorous "+
                        "quality standards, fostering international partnerships, and ensuring customer "+
                        "satisfaction through reliable exports and superior product performance. We strive "+
                        "to inspire a global community of charcoal enthusiasts by delivering excellence "+
                        "in every bag.",
            values_vis_desc:"To be the leading global provider of premium charcoal, recognized for exceptional "+
                        "quality, sustainable practices, and unparalleled customer experiences, fueling memorable "+
                        "moments around the world.",
            
            products_title: "Products",
            products_subtitle: "Our best for you",
            
            distributors_title: "Wanna work with us?",
            distributors_subtitle: "Get in touch with us and become a distributor, we will be happy to work side by side",
            distributors_button: `Contact Us <i class="uil uil-message distributors__icon button__icon"></i>`,

            contact_title:"Contact Us",
            contact_subtitle:"Get in touch",
            contact_call:"Call Us",
            contact_address:"Where we at?",
            contact_name:"Name",
            contact_subject:"Subject",
            contact_message:"Message",
            contact_button:`Send Message <i class="uil uil-message button__icon"></i>`,

            footer_subtitle:"Premium Charcoal",
            footer_products:"Products",
            footer_distributors:"Distributors",
            footer_contact:"Contact",
            FLAG: "/assets/img/flagus.gif"
        },
        es: {
            nav_home: `<i class="uil uil-house-user nav__icon"></i>Inicio`,
            nav_about: `<i class="uil uil-fire  nav__icon"></i>Nosotros`,
            nav_products:`<i class="uil uil-tag-alt nav__icon"></i>Productos`,
            nav_distributors:`<i class="uil uil-store nav__icon language-change"></i>Distribuidores`,
            nav_contact:`<i class="uil uil-message   nav__icon"></i>Contacto`,
            home_title: "Calidad Premium",
            home_subtitle: "Carbon de Mezquite",
            home_description: "Creado con los más altos estándares para asegurar un tiempo de combustión duradero con un calor intenso, ¡lo acabas de encontrar!",
            home_button: `Contactanos!<i class="uil uil-message button__icon"></i>`,
            home_scroll: "Continua abajo",
            
            about_title:"Nuestra Historia",
            about_subtitle: "Una región con historia, tradición y conexión",
            about_description: "El noreste de México y el sur de Estados Unidos están unidos por su legado en la ganadería, la cultura de la gastronomía cocinada a "+
                            "la parrilla, y la calidad de sus recursos naturales.<br>Estas raíces compartidas nos dan la tradición del asado.<br>Por generaciones, "+
                            "estas tierras han guardado el corazón del arte de utilizar esta técnica de cocción en la carne, al carbón, como centro de origen de "+
                            "momentos familiares y celebraciones diversas. Es aquí donde nacimos como FUEGO DE MESQUITE.",
            about_num1: "Toneladas <br> Vendidas",
            about_num2: "Años <br> En el Mercado",
            about_num3: "Estados <br> con Presencia",

            values_mission:"Mision",
            values_vision:"Vision",
            values_mis_desc:"Nuestra misión es ofrecer carbón de la más alta calidad que "+
                        "mejore cada experiencia de asado y cocción. Nos comprometemos "+
                        "a mantener estándares rigurosos de calidad, fomentar alianzas "+
                        "internacionales y garantizar la satisfacción del cliente a través "+
                        "de exportaciones confiables y un rendimiento superior del producto. "+
                        "Buscamos inspirar a una comunidad global de entusiastas del carbón "+
                        "brindando excelencia en cada saco.",
            values_vis_desc:"Ser el proveedor líder global de carbón de alta calidad, reconocido "+
                            "por su excelencia, prácticas sostenibles y experiencias inigualables "+
                            "para el cliente, encendiendo momentos memorables en todo el mundo.",
            
            products_title: "Productos",
            products_subtitle: "Lo mejor para ti",
            
            distributors_title: "Quieres trabajar con nosotros?",
            distributors_subtitle: "Acercate a nosotros y vuelvete un distribuidor, estaremos felices de trabajar contigo",
            distributors_button: `Contactanos<i class="uil uil-message distributors__icon button__icon"></i>`,
            
            contact_title:"Contactanos",
            contact_subtitle:"Acercate a nosotros",
            contact_call:"LLamanos",
            contact_address:"Donde Estamos?",
            contact_name:"Nombre",
            contact_subject:"Asunto",
            contact_message:"Mensaje",
            contact_button:`Enviar Mensaje <i class="uil uil-message button__icon"></i>`,

            footer_subtitle:"Carbon Premium",
            footer_products:"Productos",
            footer_distributors:"Distribuidores",
            footer_contact:"Contacto", 
            FLAG: "/assets/img/flagmx.gif"
     
        }
    };

    let currentLanguage = localStorage.getItem('language') || 'en';

    function updateLanguage() {
      //change flag image depending on language
        document.getElementById("flag-language").src = translations[currentLanguage]["FLAG"];
      // Update all elements with the class `.language-change`
        translatableElements.forEach(element => {
            const key = element.id; // Use the `id` as the key for the translations object
            if (translations[currentLanguage][key]) {
                element.innerHTML = translations[currentLanguage][key];
            }
        });

        // Update the products
        generateProducts(currentLanguage);

        // Save the current language to localStorage
        localStorage.setItem('language', currentLanguage);
    }

    languageToggle.addEventListener('click', function () {
        // Toggle between English and Spanish
        currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
        updateLanguage();
    });

    // Initial language update
    updateLanguage();
});

function generateProducts(currentLanguage) {
    const container = document.getElementById('products-wrapper');
    container.innerHTML = ''; // Clear current content
  
    const products = currentLanguage === 'es' ? productsEs : productsEn;
  
    let productHTML = ""

    products.forEach(product => {
       productHTML += `
        <div class="products__content grid swiper-slide">
          <img src="${product.image}" alt="${product.title}" class="products__img">
          <div class="products__data">
            <h3 class="products__title">${product.title}</h3>
            <p class="products__description">${product.description}</p>
          </div>
        </div>
      `;
    });
    container.innerHTML = productHTML;

    swiperProducts.update();
  }


//for dynamic data
// Product data in English
const productsEn = [
    {
      title: "The Tradition",
      description: "The classic package size for those BBQs with the family and friends.",
      image: "assets/img/producto1.png"
    },
    {
      title: "The Batch",
      description: "Through the whole day, a bigger package ideal for smoked meats.",
      image: "assets/img/producto2.png"
    },
    {
        title: "The Long Lasting",
        description: "Keep burning with this big sized charcoal supply, great for businesses or bbq enthusiast who wants to keep cooking.",
        image: "assets/img/producto2.png"
    }
  ];
  
  // Product data in Spanish
  const productsEs = [
    {
      title: "La Tradición",
      description: "El tamaño clásico para esas parrilladas con amigos.",
      image: "assets/img/producto1.png"
    },
    {
      title: "La Reserva",
      description: "Para todo el día, un paquete más grande, ideal para ahumar carnes.",
      image: "assets/img/producto2.png"
    },
    {
        title: "La Gran Durabilidad",
        description: "Sigue cocinando por mucho tiempo con esta gran provision de carbon, ideal para negocios.",
        image: "assets/img/producto2.png"
    }
  ];



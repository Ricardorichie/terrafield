import Hero from "@/components/Hero"; // Import the Hero component
import AboutSection from "@/components/AboutSection"; // Import the AboutSection component
import WhatWeDoSection from "@/components/WhatWeDoSection"; // Import the WhatWeDoSection component
import FeaturedProductsSection from "@/components/FeaturedProductsSection"; // Import the FeaturedProductsSection component
import WhyChooseTerraFieldSection from "@/components/WhyChooseTerraFieldSection"; // Import the WhyChooseTerraFieldSection component
import TestimonialsPartnersSection from "@/components/TestimonialsPartnersSection"; // Import the TestimonialsPartnersSection component
import NewsletterSignupSection from "@/components/NewsletterSignupSection"; // Import the NewsletterSignupSection component

export default function Home() {
  return (
    <main>
      <Hero /> {/* Add the Hero component here */}
      <AboutSection /> {/* Add the AboutSection component here */}
      <WhatWeDoSection /> {/* Add the WhatWeDoSection component here */}
      <FeaturedProductsSection /> {/* Add the FeaturedProductsSection component here */}
      <WhyChooseTerraFieldSection /> {/* Add the WhyChooseTerraFieldSection component here */}
      <TestimonialsPartnersSection /> {/* Add the TestimonialsPartnersSection component here */}
      <NewsletterSignupSection /> {/* Add the NewsletterSignupSection component here */}
    </main>
  );
}

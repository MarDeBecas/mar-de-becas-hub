import aliadosImage from "@/assets/aliados.png";
import logoAiesec from "@/assets/logo-aiesec.png";
import logoIise from "@/assets/logo-iise.png";
import logoStudiesPlanet from "@/assets/logo-studies-planet.png";
import logoBluestudies from "@/assets/logo-bluestudies.png";
import logoHeytani from "@/assets/logo-heytani.jpg";
import logoBecarioCorazon from "@/assets/logo-becario-corazon.png";
import logoEnc from "@/assets/logo-enc.jpg";
import logoCreateLatam from "@/assets/logo-create-latam.jpg";
import logoYo from "@/assets/logo-yo.png";
import logoRedInternacional from "@/assets/logo-red-internacional.jpg";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const partnerLogos = [
  { src: logoAiesec, alt: "AIESEC" },
  { src: logoIise, alt: "IISE UNSA" },
  { src: logoStudiesPlanet, alt: "Studies Planet" },
  { src: logoBluestudies, alt: "Blue Studies International" },
  { src: logoHeytani, alt: "Hey Tani" },
  { src: logoBecarioCorazon, alt: "Becario Corazón" },
  { src: logoEnc, alt: "English Networking Club" },
  { src: logoCreateLatam, alt: "Create Latam" },
  { src: logoYo, alt: "Yo" },
  { src: logoRedInternacional, alt: "Red Internacional" },
];

export function TrustSection() {
  return (
    <section className="pt-4 pb-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            Alianzas
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Confían en nosotros
          </h2>
        </div>
        
        {/* Logo Carousel */}
        <div className="w-full px-4 md:px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {partnerLogos.map((logo, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/3 md:basis-1/5 lg:basis-1/6">
                  <div className="flex items-center justify-center h-24 p-2 bg-white rounded-lg shadow-sm">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-h-16 w-auto object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4" />
            <CarouselNext className="hidden md:flex -right-4" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

import aliadosImage from "@/assets/aliados.png";

export function TrustSection() {
  return (
    <section className="py-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            Alianzas
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Confían en nosotros
          </h2>
        </div>
        <div className="flex justify-center">
          <img 
            src={aliadosImage} 
            alt="Organizaciones aliadas de Mar de Becas" 
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}

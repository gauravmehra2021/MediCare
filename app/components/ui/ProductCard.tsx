interface ProductCardProps {
  name: string;
  category: string;
  description: string;
  dosage: string;
  imageUrl: string;
}

export function ProductCard({ name, category, description, dosage, imageUrl }: ProductCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
      <div className="h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs mb-2">
          {category}
        </div>
        <h3 className="font-semibold mb-2">{name}</h3>
        <p className="text-sm text-muted-foreground mb-3">{description}</p>
        <div className="text-sm text-accent border-t border-border pt-3">
          <strong>Dosage:</strong> {dosage}
        </div>
      </div>
    </div>
  );
}

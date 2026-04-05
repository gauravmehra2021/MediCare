interface ProductCardProps {
  name: string;
  category: string;
  description: string;
  imageUrl: string;
}

export function ProductCard({ name, category, description, imageUrl }: ProductCardProps) {
  return (
    <div className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">

      {/* Image Section */}
      <div className="h-60 flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 p-6">
        <img
          src={imageUrl}
          alt={name}
          className="max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-5">

        <span className="inline-block text-xs font-medium px-3 py-1 bg-blue-100 text-blue-600 rounded-full mb-3">
          {category}
        </span>

        <h3 className="text-lg font-semibold text-gray-800 mb-1">
          {name}
        </h3>

        <p className="text-sm text-gray-500">
          {description}
        </p>

      </div>
    </div>
  );
}
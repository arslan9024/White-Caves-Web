import { Property } from '../../types/property.types';
import { PropertyCard } from './PropertyCard';

interface PropertyGridProps {
  properties: Property[];
}

export const PropertyGrid = ({ properties }: PropertyGridProps) => {
  return (
    <section id="properties" className="px-6 lg:px-12 py-20 max-w-7xl mx-auto w-full">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs uppercase tracking-widest text-[#EF4444] font-semibold">
          Curated Portfolios
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight mt-2">
          Featured Prime Residences
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-3">
          Hand-picked luxury villas, branded off-plan residences, and penthouses validated by Dubai Land Department standards.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((prop) => (
          <PropertyCard key={prop.id} property={prop} />
        ))}
      </div>
    </section>
  );
};

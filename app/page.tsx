
"use client"

import { Search } from 'lucide-react';
import { useState } from 'react';
import { Header } from './components/ui/Header';
import { ProductCard } from './components/ui/ProductCard';
import { ContactSection } from './components/ui/ContactSection';

// Category to image mapping
const categoryImages: Record<string, string> = {
  'Pain Relief': 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400',
  'Antibiotics': 'https://images.unsplash.com/photo-1584308878768-57d3387b1882?w=400',
  'Allergy': 'https://images.unsplash.com/photo-1590982680247-9a91517b4ac0?w=400',
  'Gastric': 'https://images.unsplash.com/photo-1731942717333-d01fb8304f4a?w=400',
  'Diabetes': 'https://images.unsplash.com/photo-1761361414308-b1b683d1f33a?w=400',
  'Cardiovascular': 'https://images.unsplash.com/photo-1758345680670-20a895a2dba3?w=400',
  'Respiratory': 'https://images.unsplash.com/photo-1646392206581-2527b1cae5cb?w=400',
  'Endocrine': 'https://images.unsplash.com/photo-1740592755707-5df1c19af6bc?w=400',
  'Supplements': 'https://images.unsplash.com/photo-1729949127879-2d6556e2aee8?w=400',
  'Neurological': 'https://images.unsplash.com/photo-1631980839413-ca0cfaec582d?w=400',
  'Mental Health': 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400',
  'Sleep Aid': 'https://images.unsplash.com/photo-1590982680247-9a91517b4ac0?w=400',
  'Corticosteroids': 'https://images.unsplash.com/photo-1731942717333-d01fb8304f4a?w=400',
  'Topical': 'https://images.unsplash.com/photo-1584308878768-57d3387b1882?w=400',
  'Antiviral': 'https://images.unsplash.com/photo-1761361414308-b1b683d1f33a?w=400',
  'Anticoagulants': 'https://images.unsplash.com/photo-1758345680670-20a895a2dba3?w=400',
};

const products = [
  { name: 'Paracetamol 500mg', category: 'Pain Relief', description: 'Effective pain and fever relief', dosage: '1-2 tablets every 4-6 hours' },
  { name: 'Ibuprofen 400mg', category: 'Pain Relief', description: 'Anti-inflammatory pain reliever', dosage: '1 tablet every 6-8 hours' },
  { name: 'Amoxicillin 500mg', category: 'Antibiotics', description: 'Broad-spectrum antibiotic', dosage: '1 capsule every 8 hours' },
  { name: 'Cetirizine 10mg', category: 'Allergy', description: 'Antihistamine for allergies', dosage: '1 tablet daily' },
  { name: 'Omeprazole 20mg', category: 'Gastric', description: 'Proton pump inhibitor for acid reflux', dosage: '1 capsule daily before meals' },
  { name: 'Metformin 500mg', category: 'Diabetes', description: 'Blood sugar control medication', dosage: '1-2 tablets with meals' },
  { name: 'Amlodipine 5mg', category: 'Cardiovascular', description: 'Blood pressure management', dosage: '1 tablet daily' },
  { name: 'Atorvastatin 10mg', category: 'Cardiovascular', description: 'Cholesterol-lowering medication', dosage: '1 tablet daily at bedtime' },
  { name: 'Azithromycin 250mg', category: 'Antibiotics', description: 'Macrolide antibiotic', dosage: '1-2 tablets daily as prescribed' },
  { name: 'Ciprofloxacin 500mg', category: 'Antibiotics', description: 'Fluoroquinolone antibiotic', dosage: '1 tablet every 12 hours' },
  { name: 'Salbutamol Inhaler', category: 'Respiratory', description: 'Quick relief for asthma', dosage: '1-2 puffs as needed' },
  { name: 'Montelukast 10mg', category: 'Respiratory', description: 'Asthma and allergy prevention', dosage: '1 tablet daily at bedtime' },
  { name: 'Loratadine 10mg', category: 'Allergy', description: 'Non-drowsy antihistamine', dosage: '1 tablet daily' },
  { name: 'Ranitidine 150mg', category: 'Gastric', description: 'H2 blocker for heartburn', dosage: '1 tablet twice daily' },
  { name: 'Pantoprazole 40mg', category: 'Gastric', description: 'Proton pump inhibitor', dosage: '1 tablet daily before breakfast' },
  { name: 'Simvastatin 20mg', category: 'Cardiovascular', description: 'Cholesterol management', dosage: '1 tablet daily in the evening' },
  { name: 'Losartan 50mg', category: 'Cardiovascular', description: 'Blood pressure medication', dosage: '1 tablet daily' },
  { name: 'Aspirin 75mg', category: 'Cardiovascular', description: 'Low-dose antiplatelet therapy', dosage: '1 tablet daily' },
  { name: 'Clopidogrel 75mg', category: 'Cardiovascular', description: 'Antiplatelet medication', dosage: '1 tablet daily' },
  { name: 'Levothyroxine 50mcg', category: 'Endocrine', description: 'Thyroid hormone replacement', dosage: '1 tablet daily on empty stomach' },
  { name: 'Vitamin D3 1000IU', category: 'Supplements', description: 'Bone health support', dosage: '1 capsule daily' },
  { name: 'Calcium Carbonate 500mg', category: 'Supplements', description: 'Calcium supplementation', dosage: '1-2 tablets daily with food' },
  { name: 'Multivitamin', category: 'Supplements', description: 'Complete daily vitamin formula', dosage: '1 tablet daily' },
  { name: 'Omega-3 Fish Oil', category: 'Supplements', description: 'Heart and brain health support', dosage: '1-2 capsules daily' },
  { name: 'Folic Acid 5mg', category: 'Supplements', description: 'Essential B vitamin', dosage: '1 tablet daily' },
  { name: 'Iron Sulfate 200mg', category: 'Supplements', description: 'Iron deficiency treatment', dosage: '1 tablet daily' },
  { name: 'Vitamin B12 1000mcg', category: 'Supplements', description: 'Energy and nerve health', dosage: '1 tablet daily' },
  { name: 'Diclofenac 50mg', category: 'Pain Relief', description: 'Anti-inflammatory pain relief', dosage: '1 tablet 2-3 times daily' },
  { name: 'Tramadol 50mg', category: 'Pain Relief', description: 'Moderate to severe pain relief', dosage: '1-2 tablets every 6 hours as needed' },
  { name: 'Codeine 30mg', category: 'Pain Relief', description: 'Pain and cough suppressant', dosage: 'As prescribed by physician' },
  { name: 'Gabapentin 300mg', category: 'Neurological', description: 'Nerve pain management', dosage: '1 capsule 2-3 times daily' },
  { name: 'Pregabalin 75mg', category: 'Neurological', description: 'Neuropathic pain relief', dosage: '1 capsule twice daily' },
  { name: 'Fluoxetine 20mg', category: 'Mental Health', description: 'Antidepressant medication', dosage: '1 capsule daily in the morning' },
  { name: 'Sertraline 50mg', category: 'Mental Health', description: 'SSRI antidepressant', dosage: '1 tablet daily' },
  { name: 'Escitalopram 10mg', category: 'Mental Health', description: 'Anxiety and depression treatment', dosage: '1 tablet daily' },
  { name: 'Alprazolam 0.5mg', category: 'Mental Health', description: 'Anxiety management', dosage: 'As prescribed by physician' },
  { name: 'Clonazepam 0.5mg', category: 'Mental Health', description: 'Anxiety and seizure management', dosage: 'As prescribed by physician' },
  { name: 'Zolpidem 10mg', category: 'Sleep Aid', description: 'Short-term insomnia treatment', dosage: '1 tablet at bedtime' },
  { name: 'Melatonin 3mg', category: 'Sleep Aid', description: 'Natural sleep support', dosage: '1-2 tablets 30 minutes before bedtime' },
  { name: 'Prednisone 5mg', category: 'Corticosteroids', description: 'Anti-inflammatory steroid', dosage: 'As prescribed by physician' },
  { name: 'Hydrocortisone Cream 1%', category: 'Topical', description: 'Skin inflammation relief', dosage: 'Apply thin layer 2-3 times daily' },
  { name: 'Clotrimazole Cream 1%', category: 'Topical', description: 'Antifungal treatment', dosage: 'Apply twice daily for 2-4 weeks' },
  { name: 'Mupirocin Ointment 2%', category: 'Topical', description: 'Bacterial skin infection treatment', dosage: 'Apply 3 times daily' },
  { name: 'Betamethasone Cream', category: 'Topical', description: 'Potent anti-inflammatory cream', dosage: 'Apply thin layer once or twice daily' },
  { name: 'Acyclovir 400mg', category: 'Antiviral', description: 'Herpes virus treatment', dosage: '1 tablet 3-5 times daily' },
  { name: 'Oseltamivir 75mg', category: 'Antiviral', description: 'Influenza treatment', dosage: '1 capsule twice daily for 5 days' },
  { name: 'Doxycycline 100mg', category: 'Antibiotics', description: 'Tetracycline antibiotic', dosage: '1 tablet twice daily' },
  { name: 'Clarithromycin 250mg', category: 'Antibiotics', description: 'Macrolide antibiotic', dosage: '1 tablet twice daily' },
  { name: 'Metronidazole 400mg', category: 'Antibiotics', description: 'Anaerobic bacterial infections', dosage: '1 tablet 2-3 times daily' },
  { name: 'Cephalexin 500mg', category: 'Antibiotics', description: 'Cephalosporin antibiotic', dosage: '1 capsule every 6-8 hours' },
  { name: 'Levofloxacin 500mg', category: 'Antibiotics', description: 'Broad-spectrum fluoroquinolone', dosage: '1 tablet daily' },
  { name: 'Insulin Glargine', category: 'Diabetes', description: 'Long-acting basal insulin', dosage: 'As prescribed - subcutaneous injection' },
  { name: 'Gliclazide 80mg', category: 'Diabetes', description: 'Oral diabetes medication', dosage: '1-2 tablets daily with breakfast' },
  { name: 'Sitagliptin 100mg', category: 'Diabetes', description: 'DPP-4 inhibitor for type 2 diabetes', dosage: '1 tablet daily' },
  { name: 'Warfarin 5mg', category: 'Anticoagulants', description: 'Blood thinner', dosage: 'As prescribed - requires regular monitoring' },
];

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-primary/10 via-accent/5 to-transparent py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-primary">Quality Healthcare Products</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Your trusted partner in pharmaceutical solutions. Browse our comprehensive range of medications and healthcare products.
          </p>
          <button
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
          >
            Browse Products
          </button>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-8">Our Products</h2>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-input-background focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={index}
                name={product.name}
                category={product.category}
                description={product.description}
                dosage={product.dosage}
                imageUrl={categoryImages[product.category]}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No products found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg mb-2">&copy; 2026 MediCare Plus. All rights reserved.</p>
          <p className="text-sm opacity-90">
            This is a marketing catalog. Always consult with a healthcare professional before using any medication.
          </p>
        </div>
      </footer>
    </div>
  );
}
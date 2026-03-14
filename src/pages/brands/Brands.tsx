import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { Container } from '../../components/common/Container';
import { Typography } from '../../components/common/Typography';
import { COLORS } from '../../constants/theme';
import { Link, useParams } from 'react-router';
import { ArrowRight, ChevronLeft, ChevronDown } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { Button } from '../../components/common/Button';
import { FAQSection } from '../../components/sections/FAQSection';
import { BRAND_DATA } from '../../data/brands';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Hero } from '../../components/sections/Hero';
import { ProductCard } from '../../components/shop/common/ProductCard';

// Mock product data for the detail view
const MOCK_BRAND_PRODUCTS = [
  { id: '1', name: 'Reserve Collection 2021', price: 189.00, image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80', inStock: true },
  { id: '2', name: 'Classic Blend', price: 119.00, salePrice: 99.00, image: 'https://images.unsplash.com/photo-1559563362-c667ba5f5480?auto=format&fit=crop&q=80', inStock: true },
  { id: '3', name: 'Limited Edition', price: 450.00, image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80', inStock: true },
  { id: '4', name: 'Vintage Selection', price: 320.00, image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80', inStock: true },
];

/**
 * Brands Page Component
 * 
 * Handles both the Brand Listing (Overview) and Single Brand Detail View based on the URL parameter `id`.
 * 
 * - If `id` is present: Renders the Brand Detail view (Hero, About, Product Grid, FAQ).
 * - If `id` is missing: Renders the Brand Overview (Tabs for categories, Grid of brands).
 */
export const Brands: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // --- DETAIL VIEW ---
  if (id) {
    const brand = BRAND_DATA.find(b => b.id === id);

    if (!brand) {
      return (
        <Layout>
          <Container variant="content" className="py-20 text-center">
            <Typography variant="h2">Brand not found</Typography>
            <Link to="/brands" className="text-[#8B0000] hover:underline mt-4 inline-block">
              Return to all brands
            </Link>
          </Container>
        </Layout>
      );
    }

    return (
      <Layout>
        {/* Hero with Arrow Down */}
        <div className="relative h-[80vh] min-h-[600px] w-full bg-gray-900">
           <ImageWithFallback 
              src={brand.image} 
              alt={brand.name} 
              className="w-full h-full object-cover opacity-60"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
           
           <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <div className="animate-fade-in-up">
                <Typography variant="caption" color={COLORS.gold} className="uppercase tracking-[0.2em] mb-4 text-lg font-bold">
                   {brand.category}
                </Typography>
                <Typography variant="h1" color={COLORS.white} className="mb-6 text-6xl md:text-8xl font-serif drop-shadow-lg">
                   {brand.name}
                </Typography>
                <p className="text-white/90 text-xl max-w-2xl leading-relaxed font-light mx-auto drop-shadow-md">
                   {brand.desc}
                </p>
              </div>
           </div>

           {/* Arrow Down */}
           <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
              <a href="#brand-content" className="text-white hover:text-[#DAA520] transition-colors p-2 block">
                 <ChevronDown size={40} />
              </a>
           </div>
        </div>

        {/* Content */}
        <div id="brand-content">
          <Container variant="site" className="py-20">
             <div className="text-center max-w-4xl mx-auto mb-20">
                <Typography variant="h2" className="mb-6 text-[#2C1810]">About {brand.name}</Typography>
                <div className="w-24 h-1 bg-[#DAA520] mx-auto mb-8"></div>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                   Experience the unique character and exceptional quality of {brand.name}. Crafted with passion and expertise, it represents the pinnacle of our {brand.category.toLowerCase()} portfolio. 
                   Our commitment to excellence ensures that every bottle tells a story of heritage, innovation, and taste.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                   Whether you are celebrating a special occasion or enjoying a quiet evening, {brand.name} is the perfect companion.
                </p>
             </div>

             {/* Mock Product Grid for this Brand */}
             <div className="mb-20">
                <Typography variant="h3" className="mb-10 text-center text-[#2C1810] uppercase tracking-widest">
                  Our {brand.name} Collection
                </Typography>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                   {MOCK_BRAND_PRODUCTS.map((product, index) => (
                      <ProductCard 
                        key={index} 
                        product={{...product, brand: brand.name}} 
                      />
                   ))}
                </div>
             </div>
             
             <div className="flex justify-center gap-6">
                <Link to="/brands">
                   <Button variant="outline" className="flex items-center gap-2 border-[#2C1810] text-[#2C1810] hover:bg-[#2C1810] hover:text-white uppercase tracking-widest px-8">
                      <ChevronLeft size={16} /> All Brands
                   </Button>
                </Link>
                <Link to={`/shop/search?q=${encodeURIComponent(brand.name)}`}>
                   <Button className="bg-[#8B0000] hover:bg-[#600000] text-white border-none uppercase tracking-widest px-8 shadow-lg">
                      Shop Full Range
                   </Button>
                </Link>
             </div>
          </Container>
        </div>
        
        <FAQSection items={[
          { question: `Where is ${brand.name} produced?`, answer: `${brand.name} is produced at our world-class facilities in Paarl, utilizing grapes and ingredients from the finest regions of the Western Cape.` },
          { question: "Is this product suitable for vegans?", answer: "Many of our wines and spirits are vegan-friendly. Please check the back label or specific product page on our shop for detailed information." },
          { question: "Can I visit the cellar?", answer: "Yes! Visit the KWV Emporium or Cathedral Cellar in Paarl to experience our rich history and taste our award-winning products." }
        ]} />
      </Layout>
    );
  }

  // --- LIST VIEW ---
  const categories = ['Wine', 'Spirits', 'Ready to Drink', 'Non-alcoholic'];

  return (
    <Layout>
      <Hero 
        title="OUR BRANDS"
        subtitle="KWV enjoys a worldwide reputation for its brands that consistently deliver exceptional enjoyment. We are proud to offer you our portfolio!"
        imageSrc="https://images.unsplash.com/photo-1638012858969-fac36ad2ea32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
        height="medium"
        overlayColor="rgba(0,0,0,0.5)"
      />

      <div className="bg-[#f9f9f9] min-h-screen">
        <Container variant="site" className="py-12">
          
          <Tabs defaultValue="Wine" className="w-full flex flex-col items-center">
            <TabsList className="bg-transparent mb-12 flex-wrap h-auto gap-4 justify-center">
               {categories.map((category) => (
                 <TabsTrigger 
                    key={category} 
                    value={category}
                    className="
                      data-[state=active]:bg-[#DAA520] 
                      data-[state=active]:text-white 
                      data-[state=active]:shadow-md
                      bg-white
                      text-[#2C1810]
                      border border-[#E5E5E5]
                      uppercase 
                      tracking-widest 
                      font-bold 
                      px-8 
                      py-4 
                      rounded-none
                      min-w-[150px]
                      transition-all
                      hover:bg-[#f0f0f0]
                    "
                 >
                    {category === 'Ready to Drink' ? 'Ready to Drink' : category.toUpperCase()}
                 </TabsTrigger>
               ))}
            </TabsList>

            {categories.map((category) => (
               <TabsContent key={category} value={category} className="w-full animate-fade-in">
                  <div className="text-center max-w-4xl mx-auto mb-16">
                     <p className="text-gray-600 text-lg leading-relaxed">
                       {category === 'Wine' && "Our wine brands include trusted favourites such as the KWV Classic Collection (our core range), Roodeberg (an iconic South African brand launched in 1949), Laborie (wines of distinction) and Cathedral Cellar (a premium product within our celebrated portfolio)."}
                       {category === 'Spirits' && "Brands in our spirits category include popular choices such as Cruxland Gin, Ponchos, Wild Africa and Sally Williams Cream Liqueur. Cruxland Gin brings together the rare Kalahari truffle and nine Southern African botanicals."}
                       {category === 'Ready to Drink' && "Our ready-to-drink brands range consists of Hooch, CIAO and KWV Brandy and Cola. Hooch – with its brightly coloured beverages – has outlasted countless fads and trends since 1997."}
                       {category === 'Non-alcoholic' && "Finally, we have two non-alcoholic brands, namely Fruit Lagoon Cocktail Base and Annabelle Cuvee Rosé Non-Alcoholic Sparkling Wine."}
                     </p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                     {BRAND_DATA.filter(b => b.category === category).map((brand) => (
                        <Link to={`/brands/${brand.id}`} key={brand.id} className="group block h-full">
                           <div className="bg-white p-8 h-full flex flex-col items-center justify-center hover:shadow-xl transition-shadow border border-gray-100 min-h-[250px] relative">
                              <div className="w-40 h-40 mb-6 relative grayscale group-hover:grayscale-0 transition-all duration-500">
                                 {/* Using image as logo placeholder since we don't have actual logos */}
                                 <ImageWithFallback 
                                    src={brand.image}
                                    alt={`${brand.name} logo`}
                                    className="w-full h-full object-contain mix-blend-multiply opacity-80 group-hover:opacity-100"
                                 />
                              </div>
                              <Typography variant="h4" className="text-center text-[#2C1810] uppercase tracking-widest text-sm font-bold group-hover:text-[#DAA520] transition-colors">
                                 {brand.name}
                              </Typography>
                              
                              {/* Hover underline effect */}
                              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#DAA520] group-hover:w-full transition-all duration-300" />
                           </div>
                        </Link>
                     ))}
                     {BRAND_DATA.filter(b => b.category === category).length === 0 && (
                        <div className="col-span-full text-center py-20 text-gray-400">
                           <Typography variant="body">No brands found in this category.</Typography>
                        </div>
                     )}
                  </div>
               </TabsContent>
            ))}
          </Tabs>

        </Container>
      </div>

      <FAQSection items={[
        { question: "Where can I buy these brands?", answer: "All our brands are available in our online shop, as well as at leading retailers nationwide." },
        { question: "Do you offer tastings?", answer: "Yes, visit our Emporium in Paarl to taste a wide selection of our wines and spirits." },
        { question: "Are these brands exported?", answer: "KWV exports to over 100 markets globally. Check our Global Distribution page for more details." }
      ]} />
    </Layout>
  );
};
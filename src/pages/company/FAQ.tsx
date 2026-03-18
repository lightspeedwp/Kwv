import React, { useState } from 'react';
import { Layout } from '../../components/layout/Layout';
import { Container } from '../../components/common/Container';
import { Typography } from '../../components/common/Typography';
import { Hero } from '../../components/sections/Hero';
import { Button } from '../../components/common/Button';
import { Newsletter } from '../../components/sections/Newsletter';
import { useNavigate } from 'react-router';
import { ChevronDown, Search, HelpCircle, Phone, Mail } from 'lucide-react';
import { farmStory } from '../../data/farmStory';
import { FAQ_CATEGORIES, type FAQItem, type FAQCategory } from '../../data/faqData';

export const FAQ: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('about');
  const [openQuestions, setOpenQuestions] = useState<Set<string>>(new Set());
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const toggleQuestion = (categoryId: string, questionIndex: number) => {
    const key = `${categoryId}-${questionIndex}`;
    const newOpenQuestions = new Set(openQuestions);
    if (newOpenQuestions.has(key)) {
      newOpenQuestions.delete(key);
    } else {
      newOpenQuestions.add(key);
    }
    setOpenQuestions(newOpenQuestions);
  };

  const isQuestionOpen = (categoryId: string, questionIndex: number) => {
    return openQuestions.has(`${categoryId}-${questionIndex}`);
  };

  // Filter questions based on search
  const getFilteredCategories = () => {
    if (!searchTerm) {
      return FAQ_CATEGORIES;
    }
    
    return FAQ_CATEGORIES.map(category => ({
      ...category,
      questions: category.questions.filter(q => 
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })).filter(category => category.questions.length > 0);
  };

  const filteredCategories = getFilteredCategories();
  const activeCategories = searchTerm ? filteredCategories : FAQ_CATEGORIES.filter(c => c.id === activeCategory);

  return (
    <Layout>
      <Hero 
        title="Frequently Asked Questions"
        subtitle="Your Questions Answered"
        description="Everything you need to know about visiting our farm, tasting our wines, and becoming part of the Handcrafted Wines family."
        imageSrc="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
        imageAlt="Family vineyard at sunset"
        height="sm"
        overlay="dark"
        primaryCTA={{ text: "Contact Us", href: "/contact" }}
        secondaryCTA={{ text: "Visit the Farm", href: "/experiences" }}
      />

      {/* Search Bar */}
      <section className="py-8 bg-[var(--twb-color-bg-secondary)] border-b border-[var(--twb-border-primary)]">
        <Container variant="content">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--twb-color-text-muted)]" size={20} />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-[var(--twb-border-primary)] bg-white dark:bg-[var(--twb-color-bg-primary)] text-[var(--twb-color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--twb-color-gold)] rounded-lg"
            />
          </div>
        </Container>
      </section>

      {/* Category Navigation */}
      {!searchTerm && (
        <section className="py-6 bg-white dark:bg-[var(--twb-color-bg-primary)] border-b border-[var(--twb-border-primary)] sticky top-0 z-10">
          <Container variant="wide">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {FAQ_CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-all flex items-center gap-2 ${
                    activeCategory === category.id
                      ? 'bg-[var(--twb-color-plum)] text-white'
                      : 'bg-[var(--twb-color-bg-secondary)] text-[var(--twb-color-text-primary)] hover:bg-[var(--twb-color-bg-tertiary)]'
                  }`}
                >
                  <span>{category.icon}</span>
                  <span className="text-sm font-semibold">{category.title}</span>
                </button>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* FAQ Content */}
      <section className="py-20 bg-[var(--twb-color-bg-primary)]">
        <Container variant="content">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-16">
              <HelpCircle size={64} className="mx-auto text-[var(--twb-color-text-muted)] mb-6" />
              <Typography variant="h3" className="mb-4">
                No results found
              </Typography>
              <Typography variant="body" className="text-[var(--twb-color-text-muted)] mb-8">
                We couldn't find any FAQs matching "{searchTerm}". Try a different search term or contact us directly.
              </Typography>
              <Button onClick={() => setSearchTerm('')}>
                Clear Search
              </Button>
            </div>
          ) : (
            activeCategories.map((category) => (
              <div key={category.id} className="mb-12 last:mb-0">
                {searchTerm && (
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">{category.icon}</span>
                    <Typography variant="h2">
                      {category.title}
                    </Typography>
                  </div>
                )}

                <div className="space-y-4">
                  {category.questions.map((item, index) => {
                    const isOpen = isQuestionOpen(category.id, index);
                    return (
                      <div
                        key={index}
                        className="bg-white dark:bg-[var(--twb-color-bg-secondary)] border border-[var(--twb-border-primary)] rounded-lg overflow-hidden"
                      >
                        <button
                          onClick={() => toggleQuestion(category.id, index)}
                          className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-[var(--twb-color-bg-tertiary)] transition-colors"
                        >
                          <Typography variant="h4" className="pr-4">
                            {item.question}
                          </Typography>
                          <ChevronDown
                            size={24}
                            className={`flex-shrink-0 transition-transform text-[var(--twb-color-plum)] ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-6 pt-2">
                            <Typography variant="body" className="text-[var(--twb-color-text-muted)] leading-relaxed">
                              {item.answer}
                            </Typography>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-[var(--twb-color-bg-secondary)]">
        <Container variant="content">
          <div className="text-center">
            <Typography variant="h2" className="mb-4">
              Still Have Questions?
            </Typography>
            <Typography variant="body" className="text-[var(--twb-color-text-muted)] mb-8 max-w-2xl mx-auto">
              We're here to help! Whether you have a question about our wines, want to book a visit, or need event planning assistance, our family is always happy to chat.
            </Typography>

            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
              <a
                href={`tel:${farmStory.contact.phone}`}
                className="flex items-center gap-4 p-6 bg-white dark:bg-[var(--twb-color-bg-primary)] border border-[var(--twb-border-primary)] rounded-lg hover:border-[var(--twb-color-gold)] transition-colors"
              >
                <div className="w-12 h-12 bg-[var(--twb-color-plum)] rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-white" />
                </div>
                <div className="text-left">
                  <Typography variant="h4" className="mb-1">
                    Call Us
                  </Typography>
                  <Typography variant="body" className="text-[var(--twb-color-plum)]">
                    {farmStory.contact.phone}
                  </Typography>
                </div>
              </a>

              <a
                href={`mailto:${farmStory.contact.email}`}
                className="flex items-center gap-4 p-6 bg-white dark:bg-[var(--twb-color-bg-primary)] border border-[var(--twb-border-primary)] rounded-lg hover:border-[var(--twb-color-gold)] transition-colors"
              >
                <div className="w-12 h-12 bg-[var(--twb-color-plum)] rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-white" />
                </div>
                <div className="text-left">
                  <Typography variant="h4" className="mb-1">
                    Email Us
                  </Typography>
                  <Typography variant="body" className="text-[var(--twb-color-plum)]">
                    {farmStory.contact.email}
                  </Typography>
                </div>
              </a>
            </div>

            <Button onClick={() => navigate('/contact')} size="lg">
              Visit Our Contact Page
            </Button>
          </div>
        </Container>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-[var(--twb-color-bg-primary)]">
        <Container variant="content">
          <div className="text-center mb-12">
            <Typography variant="h2" className="mb-4">
              Stay in the Loop
            </Typography>
            <Typography variant="body" className="text-[var(--twb-color-text-muted)] max-w-2xl mx-auto">
              Join our mailing list for harvest updates, new release announcements, and exclusive offers from the farm.
            </Typography>
          </div>
          <Newsletter />
        </Container>
      </section>
    </Layout>
  );
};
import React, { useState } from 'react';
import { Hero } from '../../components/sections/Hero';
import { Container } from '../../components/common/Container';
import { Typography } from '../../components/common/Typography';
import { Button } from '../../components/common/Button';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { HandDrawnTextInput } from '../../components/forms/HandDrawnTextInput';
import { HandDrawnTextarea } from '../../components/forms/HandDrawnTextarea';
import { PaperTexture } from '../../components/decorative/PaperTexture';
import { BrushStrokeBorder } from '../../components/decorative/BrushStrokeBorder';
import { Facebook, Instagram, Mail, Phone, MapPin, Clock, CheckCircle, Wine, Calendar, Users } from 'lucide-react';
import { useNavigate } from 'react-router';
import { farmStory } from '../../data/farmStory';

/**
 * Contact Page
 * 
 * Primary contact page for Handcrafted Wines family farm.
 * Personal, approachable contact experience with family hospitality.
 * 
 * Features:
 * - Contact form with hand-drawn aesthetic
 * - 4 contact sections (Farm Office, Tasting Room, Wine Club, Events)
 * - Operating hours and directions
 * - Social media links
 * - Interactive map with GPS coordinates
 * - Success state after form submission
 * - Family voice throughout
 * 
 * @package HandcraftedWines
 * @version 2.0
 */

const CONTACT_SECTIONS = [
  {
    icon: Mail,
    title: "Farm Office",
    subtitle: "General Inquiries",
    description: "For general questions, online orders, or just to say hello",
    contacts: [
      { label: "Email", value: farmStory.contact.email, type: "email" },
      { label: "Phone", value: farmStory.contact.phone, type: "phone" },
      { label: "Hours", value: "Mon-Fri: 9am-5pm", type: "text" }
    ]
  },
  {
    icon: Wine,
    title: "Tasting Room & Tours",
    subtitle: "Visit & Experience",
    description: "Book a tasting, farm tour, or cellar visit",
    contacts: [
      { label: "Email", value: "tastings@handcraftedwines.co.za", type: "email" },
      { label: "Phone", value: farmStory.contact.phone, type: "phone" },
      { label: "WhatsApp", value: farmStory.contact.whatsapp, type: "phone" },
      { label: "Hours", value: "Daily: 10am-4pm (Closed Sundays in winter)", type: "text" }
    ]
  },
  {
    icon: Users,
    title: "The Wine Box",
    subtitle: "Wine Club Membership",
    description: "Join our wine club or manage your membership",
    contacts: [
      { label: "Email", value: "winebox@handcraftedwines.co.za", type: "email" },
      { label: "Phone", value: farmStory.contact.phone, type: "phone" },
      { label: "Hours", value: "Mon-Fri: 9am-5pm", type: "text" }
    ]
  },
  {
    icon: Calendar,
    title: "Events & Weddings",
    subtitle: "Private Functions",
    description: "Weddings, corporate events, and private celebrations",
    contacts: [
      { label: "Email", value: "events@handcraftedwines.co.za", type: "email" },
      { label: "Phone", value: farmStory.contact.phone, type: "phone" },
      { label: "Hours", value: "By appointment", type: "text" }
    ]
  }
];

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Reset after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      <Hero 
        title="Get In Touch"
        subtitle="We'd Love to Hear From You"
        description="Whether you're planning a visit, have a question about our wines, or want to join our wine club, we're here to help. Our family farm is open to visitors, and we welcome your inquiries."
        imageSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
        imageAlt="Paarl Mountain and vineyard landscape"
        height="md"
        overlay="dark"
        primaryCTA={{ text: "Book a Visit", href: "/experiences" }}
        secondaryCTA={{ text: "Call Us Now", href: `tel:${farmStory.contact.phone}` }}
      />

      {/* Contact Sections Grid */}
      <section className="py-20 bg-[var(--twb-color-bg-primary)]">
        <Container variant="wide">
          <div className="text-center mb-16">
            <Typography variant="h2" className="mb-4">
              How Can We Help?
            </Typography>
            <Typography variant="body-large" className="text-[var(--twb-color-text-muted)] max-w-2xl mx-auto">
              Choose the best way to reach us based on your needs
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CONTACT_SECTIONS.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-[var(--twb-color-bg-secondary)] p-8 border border-[var(--twb-border-primary)] hover:border-[var(--twb-color-gold)] transition-all"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-[var(--twb-color-plum)] rounded-full flex items-center justify-center flex-shrink-0">
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <div>
                      <Typography variant="h3" className="mb-1">
                        {section.title}
                      </Typography>
                      <Typography variant="caption" className="text-[var(--twb-color-gold)] uppercase tracking-wider">
                        {section.subtitle}
                      </Typography>
                    </div>
                  </div>

                  <Typography variant="body" className="text-[var(--twb-color-text-muted)] mb-6">
                    {section.description}
                  </Typography>

                  <div className="space-y-3">
                    {section.contacts.map((contact, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="font-semibold text-[var(--twb-color-text-primary)] min-w-[90px] text-sm">
                          {contact.label}:
                        </span>
                        {contact.type === 'email' ? (
                          <a
                            href={`mailto:${contact.value}`}
                            className="text-[var(--twb-color-plum)] hover:text-[var(--twb-color-gold)] transition-colors text-sm underline"
                          >
                            {contact.value}
                          </a>
                        ) : contact.type === 'phone' ? (
                          <a
                            href={`tel:${contact.value}`}
                            className="text-[var(--twb-color-plum)] hover:text-[var(--twb-color-gold)] transition-colors text-sm underline"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <span className="text-[var(--twb-color-text-muted)] text-sm">
                            {contact.value}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Contact Form + Location */}
      <section className="py-20 bg-[var(--twb-color-bg-secondary)]">
        <Container variant="wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div className="relative bg-white dark:bg-[var(--twb-color-bg-primary)] p-8 md:p-10 rounded-[var(--twb-radius-organic-md)] h-fit">
              {/* Hand-drawn border */}
              <BrushStrokeBorder 
                variant="wine-label" 
                color="var(--twb-color-plum)" 
                opacity={0.25}
                strokeWidth={1.5}
              />
              
              {/* Paper texture */}
              <PaperTexture intensity="subtle" opacity={0.03} />
              
              <Typography variant="h3" className="relative z-10 mb-2">
                Send Us a Message
              </Typography>
              <Typography variant="body" className="relative z-10 text-[var(--twb-color-text-muted)] mb-8">
                Fill out the form below and we'll get back to you within 24 hours
              </Typography>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                  <HandDrawnTextInput
                    id="name"
                    name="name"
                    label="Your Name"
                    placeholder="e.g., Sarah Williams"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />

                  <HandDrawnTextInput
                    id="email"
                    name="email"
                    type="email"
                    label="Email Address"
                    placeholder="e.g., sarah@example.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />

                  <HandDrawnTextInput
                    id="phone"
                    name="phone"
                    type="tel"
                    label="Phone Number (Optional)"
                    placeholder="e.g., +27 82 123 4567"
                    value={formData.phone}
                    onChange={handleChange}
                  />

                  <div>
                    <label 
                      htmlFor="subject" 
                      className="block text-sm font-semibold text-[var(--twb-color-text-primary)] mb-2"
                    >
                      What's This About?
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[var(--twb-border-primary)] bg-white dark:bg-[var(--twb-color-bg-secondary)] text-[var(--twb-color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--twb-color-gold)] rounded-[var(--twb-radius-organic-sm)]"
                    >
                      <option value="">Select a topic...</option>
                      <option value="visit">Book a Tasting or Tour</option>
                      <option value="wine-club">Wine Club Inquiry</option>
                      <option value="events">Wedding or Event Inquiry</option>
                      <option value="order">Online Order Question</option>
                      <option value="wholesale">Wholesale Inquiry</option>
                      <option value="other">General Question</option>
                    </select>
                  </div>

                  <HandDrawnTextarea
                    id="message"
                    name="message"
                    label="Your Message"
                    placeholder="Tell us how we can help..."
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                  />

                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              ) : (
                <div className="relative z-10 text-center py-12">
                  <CheckCircle size={64} className="text-[var(--twb-color-gold)] mx-auto mb-6" />
                  <Typography variant="h3" className="mb-4">
                    Thank You!
                  </Typography>
                  <Typography variant="body" className="text-[var(--twb-color-text-muted)] mb-6">
                    We've received your message and will get back to you within 24 hours. We look forward to connecting with you!
                  </Typography>
                  <Button
                    variant="outline"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              )}
            </div>

            {/* Location & Directions */}
            <div className="space-y-8">
              <div>
                <Typography variant="h3" className="mb-6">
                  Visit Our Farm
                </Typography>
                
                <div className="bg-white dark:bg-[var(--twb-color-bg-primary)] p-8 border border-[var(--twb-border-primary)] space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin size={24} className="text-[var(--twb-color-plum)] flex-shrink-0 mt-1" />
                    <div>
                      <Typography variant="h4" className="mb-2">
                        Our Address
                      </Typography>
                      <Typography variant="body" className="text-[var(--twb-color-text-muted)]">
                        Handcrafted Wines<br />
                        {farmStory.location.address.street}<br />
                        {farmStory.location.address.city}, {farmStory.location.address.postalCode}<br />
                        {farmStory.location.address.country}
                      </Typography>
                      <Typography variant="caption" className="text-[var(--twb-color-text-muted)] mt-2 block">
                        GPS: {farmStory.location.coordinates.lat}, {farmStory.location.coordinates.lng}
                      </Typography>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock size={24} className="text-[var(--twb-color-plum)] flex-shrink-0 mt-1" />
                    <div>
                      <Typography variant="h4" className="mb-2">
                        Tasting Room Hours
                      </Typography>
                      <div className="space-y-1 text-sm text-[var(--twb-color-text-muted)]">
                        <p><strong>Monday-Saturday:</strong> 10am - 4pm</p>
                        <p><strong>Sunday (Summer):</strong> 10am - 2pm</p>
                        <p><strong>Sunday (Winter):</strong> Closed</p>
                        <p className="text-[var(--twb-color-gold)] mt-2">
                          Public holidays: Please call ahead
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-[var(--twb-border-primary)]">
                    <Typography variant="h4" className="mb-4">
                      Directions
                    </Typography>
                    <Typography variant="body" className="text-[var(--twb-color-text-muted)] text-sm mb-4">
                      <strong>From Cape Town (60km):</strong> Take N1 North towards Paarl. Take Exit 47 (Paarl/Wellington). Turn right onto Main Road. Continue for 3km, then turn left onto Paarl Mountain Road. We're 2km up the mountain on the right.
                    </Typography>
                    <Typography variant="body" className="text-[var(--twb-color-text-muted)] text-sm">
                      <strong>Parking:</strong> Free parking available on-site. Look for our hand-painted sign at the entrance.
                    </Typography>
                  </div>

                  <div className="pt-6 border-t border-[var(--twb-border-primary)]">
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => window.open(`https://www.google.com/maps?q=${farmStory.location.coordinates.lat},${farmStory.location.coordinates.lng}`, '_blank')}
                    >
                      <MapPin size={18} className="mr-2" />
                      Open in Google Maps
                    </Button>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-[var(--twb-color-plum)] p-8 text-white">
                <Typography variant="h4" className="mb-4 text-white">
                  Follow Our Journey
                </Typography>
                <Typography variant="body" className="text-white/90 mb-6">
                  See what's happening on the farm, harvest updates, and family stories
                </Typography>
                <div className="flex gap-4">
                  <a
                    href="https://facebook.com/handcraftedwines"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="https://instagram.com/handcraftedwines"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href={`mailto:${farmStory.contact.email}`}
                    className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all"
                    aria-label="Email"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-20 bg-[var(--twb-color-bg-primary)]">
        <Container variant="content">
          <div className="text-center mb-12">
            <Typography variant="h3" className="mb-4">
              Frequently Asked Questions
            </Typography>
            <Typography variant="body" className="text-[var(--twb-color-text-muted)]">
              Quick answers to common questions
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-[var(--twb-color-bg-secondary)] p-6 border border-[var(--twb-border-primary)]">
              <Typography variant="h4" className="mb-3">
                Do I need to book in advance?
              </Typography>
              <Typography variant="body" className="text-[var(--twb-color-text-muted)] text-sm mb-4">
                Walk-ins are welcome for tastings, but we recommend booking ahead for tours and groups of 6+. Weddings and events require advance booking.
              </Typography>
              <Button variant="outline" size="sm" onClick={() => navigate('/experiences')}>
                Book a Visit
              </Button>
            </div>

            <div className="bg-white dark:bg-[var(--twb-color-bg-secondary)] p-6 border border-[var(--twb-border-primary)]">
              <Typography variant="h4" className="mb-3">
                Can I buy wine directly from the farm?
              </Typography>
              <Typography variant="body" className="text-[var(--twb-color-text-muted)] text-sm mb-4">
                Absolutely! Our Tasting Room has all our wines, spirits, and cheese available for purchase. We also ship nationwide.
              </Typography>
              <Button variant="outline" size="sm" onClick={() => navigate('/shop')}>
                Shop Online
              </Button>
            </div>

            <div className="bg-white dark:bg-[var(--twb-color-bg-secondary)] p-6 border border-[var(--twb-border-primary)]">
              <Typography variant="h4" className="mb-3">
                Is the farm child-friendly?
              </Typography>
              <Typography variant="body" className="text-[var(--twb-color-text-muted)] text-sm mb-4">
                Yes! Children are welcome. We have outdoor space for them to explore, and kids love visiting our goat dairy.
              </Typography>
            </div>

            <div className="bg-white dark:bg-[var(--twb-color-bg-secondary)] p-6 border border-[var(--twb-border-primary)]">
              <Typography variant="h4" className="mb-3">
                Do you offer wheelchair access?
              </Typography>
              <Typography variant="body" className="text-[var(--twb-color-text-muted)] text-sm mb-4">
                Our Tasting Room and main areas are wheelchair accessible. Some parts of the farm tour involve uneven terrain—please call ahead so we can accommodate.
              </Typography>
            </div>
          </div>

          <div className="text-center mt-12">
            <Typography variant="body" className="text-[var(--twb-color-text-muted)] mb-6">
              Still have questions?
            </Typography>
            <Button onClick={() => navigate('/faq')}>
              View All FAQs
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
};
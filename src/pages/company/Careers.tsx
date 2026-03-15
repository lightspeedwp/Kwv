/**
 * Careers Page
 * 
 * Displays career opportunities, company culture, and testimonials.
 * All content uses warm, family-oriented Handcrafted Wines voice and tone.
 * 
 * Features:
 * - Hero with CTA to jobs
 * - Company culture description
 * - Employee testimonials
 * - Active job listings with links to detail pages
 * - Photo grid
 * - WCAG AA compliant
 * 
 * @package HandcraftedWines
 * @version 1.0
 */

import React from 'react';
import { useNavigate, Link } from 'react-router';
import { Container } from '../../components/common/Container';
import { Typography } from '../../components/common/Typography';
import { Layout } from '../../components/layout/Layout';
import { Button } from '../../components/common/Button';
import { Hero } from '../../components/sections/Hero';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { Card, CardContent } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { getActiveJobs } from '../../data/jobs';
import { MapPin, Briefcase, Clock, ArrowRight } from 'lucide-react';

// Images
const gridImages = [
  "https://images.unsplash.com/photo-1646342029867-34f6ecb10161?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0d28lMjBwZW9wbGUlMjB2aW5leWFyZCUyMHN0YWZmfGVufDF8fHx8MTc2NTExNDQ4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1664176604116-2b61ceb1d7ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5lcnklMjBjZWxsYXIlMjB3b3JrZXIlMjBtYWNoaW5lcnl8ZW58MXx8fHwxNzY1MTE0NDg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1572021335469-31706a17aaef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB0ZWFtJTIwaGFwcHl8ZW58MXx8fHwxNzY1MTE0NDkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1741119337221-2651dbd51b74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbnRpc3QlMjBsYWIlMjB3aW5lfGVufDF8fHx8MTc2NTExNDQ5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
];

// Testimonials with Handcrafted Wines voice
const testimonials = [
  {
    quote: "I've been with Handcrafted Wines for almost 10 years, and the opportunities for growth are incredible. This isn't just a job—it's a passion that I get to live every day.",
    author: "Sarah, Winemaker"
  },
  {
    quote: "Handcrafted Wines isn't just a company, it's a family. We genuinely care about each other and the wine we make together. That sense of connection makes all the difference.",
    author: "Thabo, Tasting Room Host"
  },
  {
    quote: "They gave me an opportunity to study further while working. I'm currently studying viticulture part-time, and the team has been incredibly supportive of my growth.",
    author: "Lerato, Vineyard Assistant"
  },
  {
    quote: "I love working here because the people are so welcoming, motivating, and willing to help. We're all eager to learn from each other. It's a really special place.",
    author: "Marco, Marketing Coordinator"
  },
  {
    quote: "The location in the Cape Winelands is absolutely stunning. I get to work on a beautiful family farm surrounded by mountains and vineyards. It's honestly a dream come true.",
    author: "Emma, Cheesemaker"
  }
];

export const Careers: React.FC = () => {
  const navigate = useNavigate();
  const activeJobs = getActiveJobs();

  const scrollToJobs = () => {
    document.getElementById('jobs-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-ZA', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <Layout>
      {/* SEO Meta Tags */}
      <title>Careers at Handcrafted Wines - Join Our Family</title>
      <meta name="description" content="Join our passionate team at Handcrafted Wines. We're a family-owned boutique wine farm in Paarl, offering meaningful careers in winemaking, hospitality, cheesemaking, and more." />

      <Hero 
        title="Join Our Family"
        subtitle="Build a career you're passionate about at a family wine farm where every day matters."
        height="large"
        primaryAction={{
            label: "View Open Positions",
            onClick: scrollToJobs
        }}
        secondaryAction={{
            label: "Get in Touch",
            onClick: () => navigate('/contact')
        }}
      />

      {/* About Working Here */}
      <section className="py-16 md:py-24 bg-[var(--twb-color-bg-primary)]">
        <Container variant="content">
          <div className="text-center mb-12">
            <Typography variant="overline" className="mb-4 text-[var(--twb-color-text-secondary)]">
              Careers at Handcrafted Wines
            </Typography>
            
            <Typography variant="h2" className="mb-8">
              Work Where Passion Meets Purpose
            </Typography>

            <div className="space-y-6 text-left max-w-3xl mx-auto">
              <Typography variant="bodyLarge" className="text-[var(--twb-color-text-secondary)]">
                Handcrafted Wines is a multi-generational family farm nestled against Paarl Mountain. For over 100 years, we've been handcrafting award-winning wines, craft spirits, and artisan cheese—and we're looking for people who want to be part of that legacy.
              </Typography>

              <Typography variant="body" className="text-[var(--twb-color-text-secondary)]">
                We're a small, passionate team where everyone plays a meaningful role. Whether you're working in our vineyard, our cellar, our dairy, or our tasting room, your contribution matters.
              </Typography>

              <Typography variant="body" className="text-[var(--twb-color-text-secondary)]">
                We believe in growing our people alongside our vines. If you're eager to learn, willing to work hard, and want to be part of something special, you'll fit right in here.
              </Typography>
            </div>
          </div>

          <div className="text-center mb-12">
            <Button 
              variant="primary"
              size="lg"
              onClick={scrollToJobs}
            >
              View Current Openings
              <ArrowRight className="size-4 ml-2" />
            </Button>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gridImages.map((src, index) => (
              <div key={index} className="aspect-square bg-[var(--twb-color-bg-secondary)] overflow-hidden rounded-[var(--twb-radius-card)]">
                <ImageWithFallback 
                  src={src} 
                  alt={`Team member ${index + 1}`} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-[var(--twb-color-bg-secondary)]">
        <Container variant="content">
          <div className="text-center mb-12">
            <Typography variant="h2" className="mb-4">
              Why Our Team Loves Working Here
            </Typography>
            <Typography variant="body" className="text-[var(--twb-color-text-secondary)]">
              Don't just take our word for it—hear from the people who make Handcrafted Wines special.
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((item, index) => (
              <Card key={index} variant="default">
                <CardContent className="p-6">
                  <Typography variant="body" className="italic mb-4 text-[var(--twb-color-text-secondary)]">
                    "{item.quote}"
                  </Typography>
                  <Typography variant="caption" className="font-semibold text-[var(--twb-color-plum)]">
                    {item.author}
                  </Typography>
                </CardContent>
              </Card>
            ))}</div>
        </Container>
      </section>

      {/* Jobs Section */}
      <section id="jobs-section" className="py-16 md:py-24 bg-[var(--twb-color-bg-primary)]">
        <Container variant="content">
          <div className="text-center mb-12">
            <Typography variant="h2" className="mb-4">
              Open Positions
            </Typography>
            <Typography variant="body" className="text-[var(--twb-color-text-secondary)]">
              {activeJobs.length > 0 
                ? `We currently have ${activeJobs.length} ${activeJobs.length === 1 ? 'position' : 'positions'} available. Click any role to learn more and apply.`
                : "We don't have any open positions right now, but we're always looking for talented people. Send us your CV at careers@handcraftedwines.co.za and we'll keep you in mind."
              }
            </Typography>
          </div>

          {activeJobs.length > 0 ? (
            <div className="space-y-4">
              {activeJobs.map((job) => (
                <Link
                  key={job.id}
                  to={`/careers/${job.id}`}
                  className="block"
                >
                  <Card variant="interactive" className="hover:border-[var(--twb-color-plum)] transition-colors">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Typography variant="h4">
                              {job.title}
                            </Typography>
                            <Badge variant="default">{job.department}</Badge>
                          </div>
                          <Typography variant="body" className="text-[var(--twb-color-text-secondary)] mb-3">
                            {job.summary}
                          </Typography>
                          <div className="flex flex-wrap gap-4 text-sm">
                            <div className="flex items-center gap-2 text-[var(--twb-color-text-secondary)]">
                              <MapPin className="size-4" aria-hidden="true" />
                              <span>{job.location}</span>
                            </div>
                            <div className="flex items-center gap-2 text-[var(--twb-color-text-secondary)]">
                              <Briefcase className="size-4" aria-hidden="true" />
                              <span>{job.type}</span>
                            </div>
                            <div className="flex items-center gap-2 text-[var(--twb-color-text-secondary)]">
                              <Clock className="size-4" aria-hidden="true" />
                              <span>Closes: {formatDate(job.closingDate)}</span>
                            </div>
                          </div>
                        </div>
                        <div className="shrink-0">
                          <Button variant="primary">
                            View Details
                            <ArrowRight className="size-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <Card variant="default">
              <CardContent className="p-12 text-center">
                <Typography variant="h3" className="mb-4">
                  No Current Openings
                </Typography>
                <Typography variant="body" className="mb-6 text-[var(--twb-color-text-secondary)]">
                  We're not actively hiring right now, but we're always on the lookout for talented, passionate people. Send us your CV and we'll keep you in mind for future opportunities.
                </Typography>
                <Button 
                  variant="primary"
                  onClick={() => {
                    window.location.href = 'mailto:careers@handcraftedwines.co.za?subject=General Application';
                  }}
                >
                  Send Us Your CV
                </Button>
              </CardContent>
            </Card>
          )}

          {activeJobs.length > 0 && (
            <div className="mt-12 text-center">
              <Typography variant="body" className="mb-4 text-[var(--twb-color-text-secondary)]">
                Don't see the right role? Send us your CV anyway—we're always looking for great people.
              </Typography>
              <Button 
                variant="outline"
                onClick={() => {
                  window.location.href = 'mailto:careers@handcraftedwines.co.za?subject=General Application';
                }}
              >
                Send General Application
              </Button>
            </div>
          )}
        </Container>
      </section>
    </Layout>
  );
};

export default Careers;

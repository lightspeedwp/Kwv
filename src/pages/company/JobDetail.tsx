/**
 * Job Detail Page
 * 
 * Individual job posting page with full details and application.
 * Uses warm, family-oriented voice and tone.
 * 
 * Features:
 * - Full job description
 * - Responsibilities and requirements
 * - Perks and benefits
 * - Application CTA
 * - Breadcrumbs navigation
 * - Related jobs
 * - WCAG AA compliant
 * 
 * @package HandcraftedWines
 * @version 1.0
 */

import React, { useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router';
import { Container } from '../../components/common/Container';
import { Typography } from '../../components/common/Typography';
import { Layout } from '../../components/layout/Layout';
import { Button } from '../../components/common/Button';
import { Card, CardContent } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { getJobById, jobs } from '../../data/jobs';
import { 
  MapPin, 
  Clock, 
  Briefcase, 
  Calendar,
  ArrowLeft,
  Mail,
  CheckCircle2,
  Award
} from 'lucide-react';

export const JobDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const job = useMemo(() => {
    if (!id) return undefined;
    return getJobById(id);
  }, [id]);

  // Related jobs (same department, exclude current)
  const relatedJobs = useMemo(() => {
    if (!job) return [];
    return jobs
      .filter(j => j.department === job.department && j.id !== job.id)
      .slice(0, 3);
  }, [job]);

  // Format dates
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-ZA', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  if (!job) {
    return (
      <Layout>
        <section className="bg-[var(--twb-color-bg-primary)] py-20 min-h-[60vh] flex items-center justify-center">
          <Container variant="content">
            <div className="text-center">
              <Typography variant="h1" className="mb-4">Job Not Found</Typography>
              <Typography variant="body" className="mb-8 text-[var(--twb-color-text-secondary)]">
                Sorry, we couldn't find that job posting. It may have been filled or removed.
              </Typography>
              <Button variant="primary" onClick={() => navigate('/careers')}>
                <ArrowLeft className="size-4 mr-2" />
                Back to Careers
              </Button>
            </div>
          </Container>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* SEO Meta Tags */}
      <title>{job.title} - Careers at Handcrafted Wines</title>
      <meta name="description" content={job.summary} />

      {/* Breadcrumbs */}
      <section className="bg-[var(--twb-color-bg-secondary)] py-4 border-b border-[var(--twb-color-border-primary)]">
        <Container variant="content">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <Link to="/" className="text-[var(--twb-color-text-secondary)] hover:text-[var(--twb-color-plum)]">
                  Home
                </Link>
              </li>
              <li className="text-[var(--twb-color-text-secondary)]">/</li>
              <li>
                <Link to="/careers" className="text-[var(--twb-color-text-secondary)] hover:text-[var(--twb-color-plum)]">
                  Careers
                </Link>
              </li>
              <li className="text-[var(--twb-color-text-secondary)]">/</li>
              <li className="text-[var(--twb-color-text-primary)] font-semibold">{job.title}</li>
            </ol>
          </nav>
        </Container>
      </section>

      {/* Job Header */}
      <section className="bg-[var(--twb-color-bg-primary)] py-12">
        <Container variant="content">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/careers')}
            className="mb-6"
          >
            <ArrowLeft className="size-4 mr-2" />
            Back to All Jobs
          </Button>

          <div className="mb-6">
            <Badge variant="default" className="mb-4">
              {job.department}
            </Badge>
            <Typography variant="h1" className="mb-4">
              {job.title}
            </Typography>
            <Typography variant="bodyLarge" className="text-[var(--twb-color-text-secondary)] mb-6">
              {job.summary}
            </Typography>
          </div>

          {/* Job Meta */}
          <div className="flex flex-wrap gap-6 mb-8">
            <div className="flex items-center gap-2">
              <MapPin className="size-5 text-[var(--twb-color-vine)]" aria-hidden="true" />
              <Typography variant="body">{job.location}</Typography>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="size-5 text-[var(--twb-color-vine)]" aria-hidden="true" />
              <Typography variant="body">{job.type}</Typography>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="size-5 text-[var(--twb-color-vine)]" aria-hidden="true" />
              <Typography variant="body">Posted: {formatDate(job.postedDate)}</Typography>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="size-5 text-[var(--twb-color-vine)]" aria-hidden="true" />
              <Typography variant="body">Closes: {formatDate(job.closingDate)}</Typography>
            </div>
          </div>

          {/* Apply CTA */}
          <Button 
            variant="primary" 
            size="lg"
            onClick={() => {
              const subject = `Application: ${job.title}`;
              const body = `Hi there,\n\nI'm interested in applying for the ${job.title} position at Handcrafted Wines.\n\nPlease find my CV and cover letter attached.\n\nBest regards`;
              window.location.href = `mailto:careers@handcraftedwines.co.za?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            }}
          >
            <Mail className="size-5 mr-2" />
            Apply for This Position
          </Button>
        </Container>
      </section>

      {/* Job Details */}
      <section className="bg-[var(--twb-color-bg-secondary)] py-16">
        <Container variant="content">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About the Role */}
              <Card variant="default">
                <CardContent className="p-6">
                  <Typography variant="h3" className="mb-4">About the Role</Typography>
                  <div className="space-y-4">
                    {job.description.map((paragraph, index) => (
                      <Typography key={index} variant="body" className="text-[var(--twb-color-text-secondary)]">
                        {paragraph}
                      </Typography>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Responsibilities */}
              <Card variant="default">
                <CardContent className="p-6">
                  <Typography variant="h3" className="mb-4">What You'll Do</Typography>
                  <ul className="space-y-3">
                    {job.responsibilities.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="size-5 text-[var(--twb-color-vine)] shrink-0 mt-0.5" aria-hidden="true" />
                        <Typography variant="body" className="text-[var(--twb-color-text-secondary)]">
                          {item}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Requirements */}
              <Card variant="default">
                <CardContent className="p-6">
                  <Typography variant="h3" className="mb-4">What We're Looking For</Typography>
                  <ul className="space-y-3">
                    {job.requirements.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="size-5 text-[var(--twb-color-plum)] shrink-0 mt-0.5" aria-hidden="true" />
                        <Typography variant="body" className="text-[var(--twb-color-text-secondary)]">
                          {item}
                        </Typography>
                      </li>
                    ))}
                  </ul>

                  {job.niceToHave && job.niceToHave.length > 0 && (
                    <>
                      <Typography variant="h4" className="mt-6 mb-3">Nice to Have (But Not Required)</Typography>
                      <ul className="space-y-3">
                        {job.niceToHave.map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <Award className="size-5 text-[var(--twb-color-gold)] shrink-0 mt-0.5" aria-hidden="true" />
                            <Typography variant="body" className="text-[var(--twb-color-text-secondary)]">
                              {item}
                            </Typography>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </CardContent>
              </Card>

              {/* Perks */}
              <Card variant="default" className="border-l-4 border-[var(--twb-color-vine)]">
                <CardContent className="p-6">
                  <Typography variant="h3" className="mb-4">Why You'll Love Working Here</Typography>
                  <ul className="space-y-3">
                    {job.perks.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="size-5 text-[var(--twb-color-vine)] shrink-0 mt-0.5" aria-hidden="true" />
                        <Typography variant="body" className="text-[var(--twb-color-text-secondary)]">
                          {item}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Apply Section */}
              <Card variant="elevated">
                <CardContent className="p-6 text-center">
                  <Typography variant="h3" className="mb-3">Ready to Join Our Team?</Typography>
                  <Typography variant="body" className="mb-6 text-[var(--twb-color-text-secondary)]">
                    Send us your CV and a short cover letter telling us why you'd be a great fit.
                  </Typography>
                  <Button 
                    variant="primary" 
                    size="lg"
                    onClick={() => {
                      const subject = `Application: ${job.title}`;
                      const body = `Hi there,\n\nI'm interested in applying for the ${job.title} position at Handcrafted Wines.\n\nPlease find my CV and cover letter attached.\n\nBest regards`;
                      window.location.href = `mailto:careers@handcraftedwines.co.za?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                    }}
                  >
                    <Mail className="size-5 mr-2" />
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Quick Facts */}
                <Card variant="default">
                  <CardContent className="p-6">
                    <Typography variant="h4" className="mb-4">Quick Facts</Typography>
                    <div className="space-y-3">
                      <div>
                        <Typography variant="caption" className="text-[var(--twb-color-text-secondary)] block mb-1">
                          Department
                        </Typography>
                        <Typography variant="body" className="font-semibold">
                          {job.department}
                        </Typography>
                      </div>
                      <div>
                        <Typography variant="caption" className="text-[var(--twb-color-text-secondary)] block mb-1">
                          Location
                        </Typography>
                        <Typography variant="body" className="font-semibold">
                          {job.location}
                        </Typography>
                      </div>
                      <div>
                        <Typography variant="caption" className="text-[var(--twb-color-text-secondary)] block mb-1">
                          Employment Type
                        </Typography>
                        <Typography variant="body" className="font-semibold">
                          {job.type}
                        </Typography>
                      </div>
                      <div>
                        <Typography variant="caption" className="text-[var(--twb-color-text-secondary)] block mb-1">
                          Application Deadline
                        </Typography>
                        <Typography variant="body" className="font-semibold">
                          {formatDate(job.closingDate)}
                        </Typography>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Contact */}
                <Card variant="default">
                  <CardContent className="p-6">
                    <Typography variant="h4" className="mb-4">Questions?</Typography>
                    <Typography variant="body" className="mb-4 text-[var(--twb-color-text-secondary)]">
                      Feel free to reach out if you have any questions about this position.
                    </Typography>
                    <a 
                      href="mailto:careers@handcraftedwines.co.za"
                      className="flex items-center gap-2 text-[var(--twb-color-plum)] hover:underline"
                    >
                      <Mail className="size-4" />
                      <Typography variant="body">careers@handcraftedwines.co.za</Typography>
                    </a>
                  </CardContent>
                </Card>

                {/* Related Jobs */}
                {relatedJobs.length > 0 && (
                  <Card variant="default">
                    <CardContent className="p-6">
                      <Typography variant="h4" className="mb-4">Other {job.department} Jobs</Typography>
                      <div className="space-y-3">
                        {relatedJobs.map((relatedJob) => (
                          <Link
                            key={relatedJob.id}
                            to={`/careers/${relatedJob.id}`}
                            className="block p-3 rounded-[var(--twb-radius-sm)] bg-[var(--twb-color-bg-secondary)] hover:bg-[var(--twb-color-bg-tertiary)] transition-colors"
                          >
                            <Typography variant="body" className="font-semibold mb-1">
                              {relatedJob.title}
                            </Typography>
                            <Typography variant="caption" className="text-[var(--twb-color-text-secondary)]">
                              {relatedJob.type} • {relatedJob.location}
                            </Typography>
                          </Link>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default JobDetail;

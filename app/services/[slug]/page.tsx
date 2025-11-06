import { Fragment, ReactNode } from 'react';
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';
import LoadingSpinner from '@/app/components/common/LoadingSpinner';
import HeroSection from '@/app/components/layout/HeroSection';
import { Header1, Header5, Body3 } from '@/app/components/common/typography';
import type { SubscriptionPlan } from '@/app/components/layout/SubscriptionPlansLegacy';
import type { ScrollStep } from '@/app/components/layout/Howitworks';
import type { FAQItem } from '@/app/components/layout/FAQsSection';

// Create a minimal loading placeholder to reduce CLS
const SectionLoader = () => <div className="min-h-[200px] flex items-center justify-center"><LoadingSpinner size="small" className="opacity-60" /></div>;

// Configure loading priorities
// 1. Critical Path: Hero section (loaded normally)
// 2. Near Critical: Subscription plans (just below fold, with ssr: true for SEO)
// 3. Progressive Loading: Below-fold content (with ssr: false)

// Near Critical: components just below the fold (with ssr: true for SEO)
const SubscriptionPlans = dynamic(
    () => import('@/app/components/layout/SubscriptionPlansLegacy'),
    { loading: () => <SectionLoader />, ssr: true }
);

// Lazy load plan sections component (client component for interactivity)
const PlanSectionsList = dynamic(
    () => import('./components/PlanSectionsList'),
    { loading: () => <SectionLoader />, ssr: false }
);

// Components that should load only when in viewport (below fold)
const Howitworks = dynamic(
    () => import('@/app/components/layout/Howitworks'),
    { loading: () => <SectionLoader />, ssr: false }
);

const FAQsSection = dynamic(
    () => import('@/app/components/layout/FAQsSection'),
    { loading: () => <SectionLoader />, ssr: false }
);

const HomeClinicalInfo = dynamic(
    () => import('@/app/components/HomeClinicalInfo'),
    { loading: () => <SectionLoader />, ssr: false }
);

const HomeGetStarted = dynamic(
    () => import('@/app/components/HomeGetStarted'),
    { loading: () => <SectionLoader />, ssr: false }
);
import {
    Shield,
    TrendingUp,
    Sparkles,
    ClipboardList,
    CreditCard,
    MessageSquare,
    Package,
    CheckCircle
} from 'lucide-react';
import servicesContent from '@/app/services/servicesContent.json';

const iconComponents = {
    Shield,
    TrendingUp,
    Sparkles,
    ClipboardList,
    CreditCard,
    MessageSquare,
    Package
} as const;

type IconName = keyof typeof iconComponents;

interface PlanSection {
    subtitle: string;
    heading: string;
    description: string;
    pricing: number;
    features: string[];
    imageSrc: string;
    imageAlt: string;
    imagePosition: 'left' | 'right';
    ctaText: string;
    ctaLink: string;
    backgroundColor: string;
    reverseOnMobile: boolean;
    gradientFalse: boolean;
}

interface ServiceContent {
    hero: {
        titleLines?: string[];
        title?: string;
        description: string;
        imageSrc?: string;
        imageAlt?: string;
        primaryButton: {
            text: string;
            href: string;
        };
        secondaryButton?: {
            text: string;
            href: string;
        };
        overlay?: {
            title: string;
            items: string[];
        };
    };
    planSections?: PlanSection[];
    subscription: {
        title?: string;
        subtitle?: string;
        plans: Array<{
            id: string;
            name: string;
            badge: string;
            description: string;
            pricing: {
                monthly: number;
            };
            features: string[];
            icon?: IconName;
            popular?: boolean;
            buttonText: string;
            buttonLink: string;
        }>;
    };
    howItWorks: {
        heading?: string;
        subheading?: string;
        introText?: string;
        steps: Array<{
            id: number;
            title: string;
            subtitle: string;
            description: string;
            benefits: string[];
            imageSrc: string;
            imageAlt: string;
            icon?: IconName;
            buttonText: string;
            buttonLink: string;
        }>;
    };
    faqs?: {
        eyebrow?: string;
        title?: string;
        description?: string;
        items: FAQItem[];
    };
}

const typedServicesContent = servicesContent as Record<string, ServiceContent>;

function getIcon(name?: string): ReactNode {
    if (!name) {
        return null;
    }

    const IconComponent = iconComponents[name as IconName];

    if (!IconComponent) {
        return null;
    }

    return <IconComponent className="w-6 h-6" />;
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
    const slug = params.slug.toLowerCase();
    const service = typedServicesContent[slug];

    if (!service) {
        notFound();
    }

    const { hero, planSections, subscription, howItWorks, faqs } = service;
    const heroTitleLines = hero.titleLines ?? [];

    const heroTitle = heroTitleLines.length ? (
        <Header1 className="text-white font-semibold">
            {heroTitleLines.map((line, index) => (
                <Fragment key={line}>
                    {line}
                    {index < heroTitleLines.length - 1 && <br />}
                </Fragment>
            ))}
        </Header1>
    ) : (
        hero.title || ''
    );

    const overlayContent = hero.overlay ? (
        <div className="absolute bottom-6 left-6 right-6 bg-white rounded-xl p-4 shadow-lg">
            <Header5 className="text-brand-dark !font-medium">{hero.overlay.title}</Header5>
            <div className="grid grid-cols-2 gap-4 pt-4">
                {hero.overlay.items.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1" />
                        <Body3>{item}</Body3>
                    </div>
                ))}
            </div>
        </div>
    ) : undefined;

    const subscriptionPlans: SubscriptionPlan[] = subscription.plans.map((plan) => ({
        id: plan.id,
        name: plan.name,
        badge: plan.badge,
        description: plan.description,
        pricing: plan.pricing,
        features: plan.features,
        icon: getIcon(plan.icon),
        popular: plan.popular,
        buttonText: plan.buttonText,
        buttonLink: plan.buttonLink
    }));

    const steps: ScrollStep[] = howItWorks.steps.map((step) => ({
        ...step,
        icon: getIcon(step.icon)
    }));

    const faqItems = faqs?.items ?? [];

    return (
        <div className="pt-20">
            <HeroSection
                title={heroTitle}
                description={hero.description}
                primaryButtonText={hero.primaryButton.text}
                primaryButtonHref={hero.primaryButton.href}
                secondaryButtonText={hero.secondaryButton?.text}
                secondaryButtonHref={hero.secondaryButton?.href}
                showSecondaryButton={Boolean(hero.secondaryButton)}
                imageSrc={hero.imageSrc}
                imageAlt={hero.imageAlt}
                overlayContent={overlayContent}
            />

            {/* Subscription Plan Explanation Sections - Lazy Loaded */}
            {planSections && planSections.length > 0 && (
                <PlanSectionsList planSections={planSections} />
            )}

            <SubscriptionPlans
                title={subscription.title}
                subtitle={subscription.subtitle}
                plans={subscriptionPlans}
            />

            <Howitworks
                id="how-it-works"
                heading={howItWorks.heading}
                subheading={howItWorks.subheading}
                introText={howItWorks.introText}
                steps={steps}
                bgColor="bg-brand-light"
                showServiceHowItWorks
            />

            <HomeClinicalInfo />
            {faqItems.length > 0 && (
                <FAQsSection
                    backgroundColor="bg-white"
                    eyebrow={faqs?.eyebrow}
                    title={faqs?.title}
                    description={faqs?.description}
                    faqs={faqItems}
                />
            )}
            <HomeGetStarted />
        </div>
    );
}


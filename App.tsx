import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  ChevronRight,
  Clock3,
  Dumbbell,
  HeartHandshake,
  Mail,
  MapPin,
  Menu,
  Phone,
  Salad,
  ShieldCheck,
  Star,
  Users,
  X,
} from "lucide-react";

type PageKey =
  | "home"
  | "semi-private-personal-training"
  | "sports-performance-training"
  | "nutrition-coaching"
  | "in-house-physical-therapy"
  | "stretch-therapy"
  | "success-stories"
  | "about-us"
  | "blog"
  | "schedule"
  | "store"
  | "contact"
  | "start-here";

function Button({
  children,
  className = "",
  variant,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "outline" | string;
  onClick?: () => void;
}) {
  const base =
    "inline-flex items-center justify-center rounded-2xl transition font-semibold";
  const style =
    variant === "outline"
      ? "border border-white/15 bg-transparent text-white hover:bg-white/5"
      : "bg-red-600 text-white hover:bg-red-500";

  return (
    <button onClick={onClick} className={`${base} ${style} ${className}`}>
      {children}
    </button>
  );
}

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}

function CardContent({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}

const sitePhotos = {
  hero:
    "https://resultsbydesignfitness.com/wp-content/uploads/2024/10/RXD-7631-adult-woman-working-out-with-coach-500x500.webp",
  training:
    "https://resultsbydesignfitness.com/wp-content/uploads/2024/10/RXD-0205-adult-man-working-out-500x500.webp",
  smile:
    "https://resultsbydesignfitness.com/wp-content/uploads/2024/10/RXD-7740-blonde-adult-woman-smiling-500x500.webp",
  fallback:
    "https://resultsbydesignfitness.com/wp-content/uploads/2024/10/RXD-7631-adult-woman-working-out-with-coach-500x500.webp",
};

const testimonialData = [
  {
    name: "Tony Vick",
    quote:
      "I now feel comfortable in my clothes and I also I’ve gained muscle that I’ve never had in my entire life.",
  },
  {
    name: "Terri Sparks",
    quote:
      "The big result that I’ve achieved is gaining strength and hopefully staying healthy to be around longer for my grandkids and kids.",
  },
  {
    name: "Sean Lohman",
    quote:
      "First time I will have been in the 180s since probably about 20 maybe 15 years.",
  },
  {
    name: "Cindy Curtsinger",
    quote:
      "I would say that it is worth it. It is an investment in your own health.",
  },
  {
    name: "Mandy Spalding",
    quote:
      "The coaches take into consideration that I’ve been in a car accident, so we focused on what I could do. We had a very good transition.",
  },
  {
    name: "The Ledfords",
    quote:
      "My favorite thing about RxD is the community, the accountability and how good we make each other feel.",
  },
];

const blogPosts = [
  {
    title: "5 Fitness Mistakes That Hold Back Adults Over 40",
    date: "March 3, 2026",
    excerpt:
      "A practical look at the habits and assumptions that keep adults stuck and what to do instead.",
  },
  {
    title: "From Stiff to Stronger With Stretch Therapy",
    date: "February 2, 2026",
    excerpt:
      "How assisted stretch sessions help adults move better, recover faster, and feel more confident.",
  },
  {
    title: "Why Adults Need Strength Training More Than They Think",
    date: "December 4, 2025",
    excerpt:
      "Strength is about confidence, independence, resilience, and protecting the quality of your life.",
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-1 text-red-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" />
      ))}
    </div>
  );
}

function SectionTitle({
  eyebrow,
  title,
  body,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <div className="text-xs font-semibold uppercase tracking-[0.28em] text-red-500">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">
        {title}
      </h2>
      {body ? <p className="mt-5 text-lg leading-8 text-zinc-400">{body}</p> : null}
    </div>
  );
}

function SiteHeader({
  page,
  navigate,
}: {
  page: PageKey;
  navigate: (p: PageKey) => void;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const navButton = (label: string, key: PageKey) => (
    <button
      onClick={() => {
        navigate(key);
        setMobileOpen(false);
      }}
      className={`transition hover:text-white ${
        page === key ? "text-white" : "text-zinc-300"
      }`}
    >
      {label}
    </button>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <button onClick={() => navigate("home")} className="text-left">
          <div className="text-lg font-semibold tracking-wide">RESULTS BY DESIGN</div>
          <div className="text-[11px] uppercase tracking-[0.28em] text-zinc-400">
            Louisville Personal Training
          </div>
        </button>

        <nav className="hidden items-center gap-7 text-sm lg:flex">
          <div className="relative group">
            <button className="flex items-center gap-1 text-zinc-300 transition hover:text-white">
              Fitness Programs <ChevronDown className="h-4 w-4" />
            </button>
            <div className="invisible absolute left-0 top-full z-40 mt-3 w-80 rounded-2xl border border-white/10 bg-zinc-950 p-3 opacity-0 shadow-2xl transition group-hover:visible group-hover:opacity-100">
              <div className="grid gap-2 text-left text-sm text-zinc-200">
                <button
                  onClick={() => navigate("semi-private-personal-training")}
                  className="rounded-xl px-3 py-2 text-left hover:bg-white/5"
                >
                  Semi Private Personal Training
                </button>
                <button
                  onClick={() => navigate("sports-performance-training")}
                  className="rounded-xl px-3 py-2 text-left hover:bg-white/5"
                >
                  Sports Performance Training
                </button>
                <button
                  onClick={() => navigate("nutrition-coaching")}
                  className="rounded-xl px-3 py-2 text-left hover:bg-white/5"
                >
                  Nutrition Coaching
                </button>
                <button
                  onClick={() => navigate("in-house-physical-therapy")}
                  className="rounded-xl px-3 py-2 text-left hover:bg-white/5"
                >
                  In-House Physical Therapy
                </button>
                <button
                  onClick={() => navigate("stretch-therapy")}
                  className="rounded-xl px-3 py-2 text-left hover:bg-white/5"
                >
                  Stretch Therapy
                </button>
              </div>
            </div>
          </div>

          {navButton("Success Stories", "success-stories")}

          <div className="relative group">
            <button className="flex items-center gap-1 text-zinc-300 transition hover:text-white">
              About <ChevronDown className="h-4 w-4" />
            </button>
            <div className="invisible absolute left-0 top-full z-40 mt-3 w-56 rounded-2xl border border-white/10 bg-zinc-950 p-3 opacity-0 shadow-2xl transition group-hover:visible group-hover:opacity-100">
              <div className="grid gap-2 text-left text-sm text-zinc-200">
                <button
                  onClick={() => navigate("about-us")}
                  className="rounded-xl px-3 py-2 text-left hover:bg-white/5"
                >
                  About Us
                </button>
                <button
                  onClick={() => navigate("blog")}
                  className="rounded-xl px-3 py-2 text-left hover:bg-white/5"
                >
                  Our Blog
                </button>
              </div>
            </div>
          </div>

          {navButton("Schedule", "schedule")}
          {navButton("Store", "store")}
          {navButton("Contact", "contact")}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            onClick={() => navigate("start-here")}
            className="hidden px-5 py-2.5 text-sm sm:inline-flex"
          >
            Start Here
          </Button>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-white/10 px-6 py-4 lg:hidden">
          <div className="grid gap-3 text-sm">
            <button
              onClick={() => setProgramsOpen((v) => !v)}
              className="flex items-center justify-between rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-left text-zinc-200"
            >
              Fitness Programs{" "}
              <ChevronDown
                className={`h-4 w-4 transition ${programsOpen ? "rotate-180" : ""}`}
              />
            </button>
            {programsOpen ? (
              <div className="grid gap-2 pl-3">
                {[
                  ["Semi Private Personal Training", "semi-private-personal-training"],
                  ["Sports Performance Training", "sports-performance-training"],
                  ["Nutrition Coaching", "nutrition-coaching"],
                  ["In-House Physical Therapy", "in-house-physical-therapy"],
                  ["Stretch Therapy", "stretch-therapy"],
                ].map(([label, key]) => (
                  <button
                    key={key}
                    onClick={() => {
                      navigate(key as PageKey);
                      setMobileOpen(false);
                    }}
                    className="rounded-xl border border-white/10 bg-black px-4 py-3 text-left text-zinc-300"
                  >
                    {label}
                  </button>
                ))}
              </div>
            ) : null}

            <button
              onClick={() => navigate("success-stories")}
              className="rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-left text-zinc-200"
            >
              Success Stories
            </button>

            <button
              onClick={() => setAboutOpen((v) => !v)}
              className="flex items-center justify-between rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-left text-zinc-200"
            >
              About{" "}
              <ChevronDown
                className={`h-4 w-4 transition ${aboutOpen ? "rotate-180" : ""}`}
              />
            </button>
            {aboutOpen ? (
              <div className="grid gap-2 pl-3">
                <button
                  onClick={() => {
                    navigate("about-us");
                    setMobileOpen(false);
                  }}
                  className="rounded-xl border border-white/10 bg-black px-4 py-3 text-left text-zinc-300"
                >
                  About Us
                </button>
                <button
                  onClick={() => {
                    navigate("blog");
                    setMobileOpen(false);
                  }}
                  className="rounded-xl border border-white/10 bg-black px-4 py-3 text-left text-zinc-300"
                >
                  Our Blog
                </button>
              </div>
            ) : null}

            <button
              onClick={() => navigate("schedule")}
              className="rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-left text-zinc-200"
            >
              Schedule
            </button>
            <button
              onClick={() => navigate("store")}
              className="rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-left text-zinc-200"
            >
              Store
            </button>
            <button
              onClick={() => navigate("contact")}
              className="rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-left text-zinc-200"
            >
              Contact
            </button>
            <button
              onClick={() => navigate("start-here")}
              className="rounded-xl bg-red-600 px-4 py-3 text-left font-semibold text-white"
            >
              Start Here
            </button>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function HomePage({ navigate }: { navigate: (p: PageKey) => void }) {
  return (
    <>
      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:py-24 lg:grid-cols-2">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-red-500">
              Personal Training Fitness for Adults 40+
            </div>
            <h1 className="mt-4 text-5xl font-semibold leading-tight md:text-7xl">
              Build Strength. Burn Fat. Increase Energy.
            </h1>
            <div className="mt-5 text-2xl font-semibold text-zinc-200 md:text-3xl">
              Louisville&apos;s Premier Personal Training Gym
            </div>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              Results by Design Fitness helps busy adults over 40 build strength,
              improve energy, and move better with personalized coaching, supportive
              accountability, and a clear plan built around real life.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                onClick={() => navigate("start-here")}
                className="px-7 py-6 text-base"
              >
                Start Here
              </Button>
              <Button
                onClick={() => navigate("contact")}
                variant="outline"
                className="px-7 py-6 text-base"
              >
                Request More Information
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 overflow-hidden rounded-[2rem] border border-white/10">
              <img
                src={sitePhotos.hero}
                alt="Adults training with a coach at Results by Design Fitness"
                className="h-[340px] w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-[1.75rem] border border-white/10">
              <img
                src={sitePhotos.training}
                alt="Adult man working out at Results by Design Fitness"
                className="h-[200px] w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-[1.75rem] border border-white/10">
              <img
                src={sitePhotos.smile}
                alt="Adult woman smiling at Results by Design Fitness"
                className="h-[200px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950/60 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            eyebrow="RxD: Personalized Fitness for Busy Adults Over 40"
            title="Revitalize Your Strength, Energy, and Wellness with a Customized Plan"
            body="At Results by Design Fitness, we’ve been transforming lives since 2010 by removing the confusion and overwhelm often associated with traditional gyms and intense workout studios. Say goodbye to packed classes, high-impact movements that strain your joints, and uncertainty about whether your workout fits your needs. Here, you’re not just a face in the crowd. You’re part of a supportive and motivating community."
          />
          <div className="mt-8 text-center">
            <Button
              onClick={() => navigate("start-here")}
              className="px-7 py-6 text-base"
            >
              Start Here
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            eyebrow="Experience the RxD Difference"
            title="Personalized coaching in a supportive environment"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {[
              [
                "Personalized Fitness",
                "Every session is tailored to you, working in a small group with your personal coach.",
              ],
              [
                "A Welcoming Community",
                "We make sure everyone knows your name so you feel comfortable, accepted, and supported.",
              ],
              [
                "Start at Your Own Pace",
                "Whether you’re new to fitness or hitting a plateau, your program matches your current level.",
              ],
              [
                "A Holistic Approach",
                "We look beyond exercise and pay attention to nutrition, lifestyle habits, and sleep.",
              ],
              [
                "Guidance Every Step of the Way",
                "Just show up and we’ll handle the rest. You’re never left guessing what to do.",
              ],
            ].map(([title, text]) => (
              <Card
                key={title}
                className="rounded-[2rem] border border-white/10 bg-zinc-950 text-zinc-100 shadow-none"
              >
                <CardContent className="p-7">
                  <div className="text-xl font-semibold">{title}</div>
                  <p className="mt-3 leading-7 text-zinc-400">{text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            eyebrow="Let&apos;s Get You Moving"
            title="We make it really simple."
            body="We’re dedicated to helping you achieve real, lasting results in a welcoming and motivating environment."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              [
                Clock3,
                "We Build a Plan for You",
                "When you join the Results by Design family, we craft a program tailored to your fitness level, any injuries, and your specific goals.",
              ],
              [
                ShieldCheck,
                "Achieve Results Guaranteed",
                "You’ve chosen us for a reason, and we stand by our program with a money back guarantee because your results matter.",
              ],
              [
                Users,
                "Support at Every Step",
                "From day one, your coach helps you feel confident, clear, and supported in the process.",
              ],
            ].map(([Icon, title, text], idx) => {
              const Cmp = Icon as any;
              return (
                <Card
                  key={idx}
                  className="rounded-[2rem] border border-white/10 bg-black text-zinc-100 shadow-none"
                >
                  <CardContent className="p-7">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600/15 text-red-500">
                      <Cmp className="h-5 w-5" />
                    </div>
                    <div className="mt-5 text-2xl font-semibold">{title}</div>
                    <p className="mt-3 leading-7 text-zinc-400">{text}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Button
              onClick={() => navigate("start-here")}
              className="px-8 py-6 text-base"
            >
              Ready to Start Your Journey?
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            eyebrow="RxD: Your Fitness Evolution"
            title="Personalized Training, Proven Results, Lifelong Transformation"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {testimonialData.map((item) => (
              <Card
                key={item.name}
                className="rounded-[2rem] border border-white/10 bg-zinc-950 text-zinc-100 shadow-none"
              >
                <CardContent className="p-8">
                  <Stars />
                  <div className="mt-5 text-2xl font-semibold">{item.name}</div>
                  <p className="mt-4 leading-8 text-zinc-300">“{item.quote}”</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button
              onClick={() => navigate("success-stories")}
              variant="outline"
              className="px-8 py-6 text-base"
            >
              Read More Reviews
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-red-600 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="text-sm font-semibold uppercase tracking-[0.28em] text-red-100">
            Louisville&apos;s Only Personal Training Gym for People Over 40
          </div>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-6xl">
            Join Our Fitness Community Today
          </h2>
          <p className="mt-6 text-lg leading-8 text-red-50 md:text-xl">
            If you want a plan, a coach, and a place that meets you where you are,
            let’s get the conversation started.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              onClick={() => navigate("start-here")}
              className="bg-black px-8 py-6 text-base text-white hover:bg-zinc-900"
            >
              Start Here
            </Button>
            <Button
              onClick={() => navigate("contact")}
              variant="outline"
              className="border-white/30 px-8 py-6 text-base"
            >
              Request More Information
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

function StandardPage({
  eyebrow,
  title,
  body,
  image,
  children,
  ctaLabel,
  onCta,
}: {
  eyebrow: string;
  title: string;
  body: string;
  image?: string;
  children?: React.ReactNode;
  ctaLabel?: string;
  onCta?: () => void;
}) {
  return (
    <>
      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:py-24 lg:grid-cols-2">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-red-500">
              {eyebrow}
            </div>
            <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">{body}</p>
            {ctaLabel && onCta ? (
              <Button onClick={onCta} className="mt-8 px-7 py-6 text-base">
                {ctaLabel}
              </Button>
            ) : null}
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-white/10">
            <img
              src={image || sitePhotos.fallback}
              alt={title}
              className="h-[420px] w-full object-cover"
            />
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">{children}</div>
      </section>
    </>
  );
}

function ProgramCards({
  items,
}: {
  items: { icon: any; title: string; text: string }[];
}) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <Card
            key={item.title}
            className="rounded-[2rem] border border-white/10 bg-zinc-950 text-zinc-100 shadow-none"
          >
            <CardContent className="p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600/15 text-red-500">
                <Icon className="h-5 w-5" />
              </div>
              <div className="mt-5 text-2xl font-semibold">{item.title}</div>
              <p className="mt-3 leading-7 text-zinc-400">{item.text}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

function SemiPrivatePage({ navigate }: { navigate: (p: PageKey) => void }) {
  return (
    <StandardPage
      eyebrow="Semi Private Personal Training"
      title="Personalized fitness for busy adults over 40."
      body="Every session is tailored to you inside a supportive small group environment where a coach guides the process, watches form, and helps you build steady progress."
      image={sitePhotos.hero}
      ctaLabel="Start Here"
      onCta={() => navigate("start-here")}
    >
      <ProgramCards
        items={[
          {
            icon: Dumbbell,
            title: "Personalized Coaching",
            text: "A coach guides every session and adjusts based on your fitness level, goals, and history.",
          },
          {
            icon: Users,
            title: "Supportive Small Group Setting",
            text: "You get the energy of a community without getting lost in a giant class.",
          },
          {
            icon: ShieldCheck,
            title: "Clear Progression",
            text: "Workouts are structured so you know what you are doing and why it matters.",
          },
        ]}
      />
    </StandardPage>
  );
}

function SportsPerformancePage() {
  return (
    <StandardPage
      eyebrow="Sports Performance Training"
      title="Athletic development built on movement quality, strength, and long term growth."
      body="Sports Performance at RxD helps young athletes build a stronger foundation with training that supports speed, coordination, confidence, and resilience."
      image={sitePhotos.training}
    >
      <ProgramCards
        items={[
          {
            icon: Dumbbell,
            title: "Strength Development",
            text: "Build athletic strength with sound technique and smart progressions.",
          },
          {
            icon: Users,
            title: "Coach Led Sessions",
            text: "Athletes are taught, corrected, and supported throughout training.",
          },
          {
            icon: ShieldCheck,
            title: "Long Term Approach",
            text: "Training focuses on development, not just running kids into the ground.",
          },
        ]}
      />
    </StandardPage>
  );
}

function NutritionPage({ navigate }: { navigate: (p: PageKey) => void }) {
  return (
    <StandardPage
      eyebrow="Nutrition Coaching"
      title="Better nutrition habits without extremes."
      body="Nutrition coaching at RxD helps you create realistic, sustainable habits that support fat loss, better energy, improved recovery, and a stronger relationship with food."
      image={sitePhotos.smile}
      ctaLabel="Contact Us"
      onCta={() => navigate("contact")}
    >
      <ProgramCards
        items={[
          {
            icon: Salad,
            title: "Habit Based Coaching",
            text: "Build better routines that fit your lifestyle instead of chasing another strict plan.",
          },
          {
            icon: ShieldCheck,
            title: "Sustainable Results",
            text: "The goal is consistency, not burnout.",
          },
          {
            icon: Users,
            title: "Support and Accountability",
            text: "Coaching helps you stay on track and make progress that lasts.",
          },
        ]}
      />
    </StandardPage>
  );
}

function PhysicalTherapyPage() {
  return (
    <StandardPage
      eyebrow="In-House Physical Therapy"
      title="Physical therapy support connected to the same coaching ecosystem."
      body="In-House Physical Therapy is part of the broader support system surrounding RxD members. It helps bridge the gap between pain, recovery, and getting back to moving with confidence."
      image={sitePhotos.training}
    >
      <div className="rounded-[2rem] border border-white/10 bg-zinc-950 p-8 text-zinc-300">
        <div className="text-2xl font-semibold text-white">
          Connected care for better outcomes
        </div>
        <p className="mt-4 leading-8 text-zinc-400">
          This page is included in the clone structure because it appears in the
          current site navigation. In the final WordPress rebuild, this can link out
          to your PT system or become a branded landing page that routes into
          Foundations PT & Wellness.
        </p>
      </div>
    </StandardPage>
  );
}

function StretchTherapyPage({ navigate }: { navigate: (p: PageKey) => void }) {
  return (
    <StandardPage
      eyebrow="Stretch Therapy"
      title="Assisted stretch sessions designed to help your body move and feel better."
      body="Stretch Therapy at RxD is a guided one on one service that helps reduce stiffness, improve mobility, ease tension, and create a lower friction first step for adults who want help before jumping into full training."
      image={sitePhotos.smile}
      ctaLabel="Book a Consultation"
      onCta={() => navigate("start-here")}
    >
      <ProgramCards
        items={[
          {
            icon: HeartHandshake,
            title: "Assisted Stretching",
            text: "We guide the session and help you relax into the stretch more safely and effectively.",
          },
          {
            icon: ShieldCheck,
            title: "Mobility Focused",
            text: "Sessions are designed to improve range of motion and reduce tension in common problem areas.",
          },
          {
            icon: Users,
            title: "A Comfortable First Step",
            text: "Great for adults who feel stiff, sore, or not yet ready for a full training program.",
          },
        ]}
      />
    </StandardPage>
  );
}

function SuccessStoriesPage() {
  return (
    <StandardPage
      eyebrow="Success Stories"
      title="Real people. Real change. Real trust."
      body="These stories show what happens when adults get the right coaching, the right environment, and a plan built around their real life."
      image={sitePhotos.hero}
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {testimonialData.map((item) => (
          <Card
            key={item.name}
            className="rounded-[2rem] border border-white/10 bg-zinc-950 text-zinc-100 shadow-none"
          >
            <CardContent className="p-8">
              <Stars />
              <div className="mt-5 text-2xl font-semibold">{item.name}</div>
              <p className="mt-4 leading-8 text-zinc-300">“{item.quote}”</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </StandardPage>
  );
}

function AboutPage() {
  return (
    <StandardPage
      eyebrow="About Us"
      title="A coaching driven gym built to help adults feel stronger, healthier, and more confident."
      body="Results by Design Fitness was built to give adults a better option than crowded classes, confusing workouts, and generic programs. Our focus is personalized coaching, accountability, community, and real results."
      image={sitePhotos.training}
    >
      <ProgramCards
        items={[
          {
            icon: ShieldCheck,
            title: "Results Guaranteed",
            text: "We believe in our process and want people to feel good about taking the first step.",
          },
          {
            icon: Users,
            title: "Accountability and Community",
            text: "Support matters. Members are known, encouraged, and held to a higher standard in a positive way.",
          },
          {
            icon: Dumbbell,
            title: "Elite Coaching",
            text: "Our team helps people cut through the noise and focus on what truly works.",
          },
        ]}
      />
    </StandardPage>
  );
}

function BlogPage() {
  return (
    <StandardPage
      eyebrow="Our Blog"
      title="Fitness tips, expert advice, and practical guidance for adults who want to live better."
      body="The RxD blog is where educational content, motivation, and wellness ideas come together to support your journey."
      image={sitePhotos.training}
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {blogPosts.map((post) => (
          <Card
            key={post.title}
            className="rounded-[2rem] border border-white/10 bg-zinc-950 text-zinc-100 shadow-none"
          >
            <CardContent className="p-7">
              <div className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                {post.date}
              </div>
              <div className="mt-3 text-2xl font-semibold leading-tight">
                {post.title}
              </div>
              <p className="mt-4 leading-7 text-zinc-400">{post.excerpt}</p>
              <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">
                Read More <ChevronRight className="h-4 w-4" />
              </button>
            </CardContent>
          </Card>
        ))}
      </div>
    </StandardPage>
  );
}

function SchedulePage() {
  return (
    <StandardPage
      eyebrow="Schedule"
      title="View available class and session times."
      body="The current site links this page from the main navigation. In the final WordPress clone, this can connect directly to your booking or schedule system while keeping the branded page wrapper."
      image={sitePhotos.smile}
    >
      <div className="rounded-[2rem] border border-white/10 bg-zinc-950 p-8 text-center">
        <div className="text-2xl font-semibold">Schedule Placeholder</div>
        <p className="mx-auto mt-4 max-w-2xl leading-8 text-zinc-400">
          This placeholder is here so the cloned site structure is complete. The live
          rebuild can embed or link your real schedule tool.
        </p>
      </div>
    </StandardPage>
  );
}

function StorePage() {
  return (
    <StandardPage
      eyebrow="Store"
      title="Supplements, products, and resources connected to the RxD experience."
      body="The current site links out to a store. In the WordPress rebuild, this can remain an external link or become a branded storefront landing page."
      image={sitePhotos.training}
    >
      <div className="rounded-[2rem] border border-white/10 bg-zinc-950 p-8 text-center">
        <div className="text-2xl font-semibold">Store Placeholder</div>
        <p className="mx-auto mt-4 max-w-2xl leading-8 text-zinc-400">
          Use this page as a placeholder during the clone process, then decide whether
          to keep the external Shopify link or create a branded bridge page.
        </p>
      </div>
    </StandardPage>
  );
}

function ContactPage() {
  return (
    <StandardPage
      eyebrow="Contact"
      title="Get in touch with Results by Design Fitness."
      body="If you’re interested in transforming your fitness journey, the team at Results by Design Fitness is ready to help. Reach out and let us guide you to the right next step."
      image={sitePhotos.smile}
    >
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <Card className="rounded-[2rem] border border-white/10 bg-zinc-950 text-zinc-100 shadow-none">
          <CardContent className="p-8">
            <div className="text-2xl font-semibold">Contact Information</div>
            <div className="mt-6 space-y-4 text-zinc-300">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-red-500" /> 1920 Stanley Gault
                Pkwy #103, Louisville, KY 40223
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-red-500" /> 502-586-5544
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-red-500" /> info@resultsbydesignfitness.com
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="rounded-[2rem] border border-white/10 bg-black text-zinc-100 shadow-none">
          <CardContent className="p-8">
            <div className="text-2xl font-semibold">
              Fill out the form and one of our coaches will be in touch
            </div>
            <div className="mt-6 grid gap-4">
              {["First Name", "Last Name", "Email Address", "Phone Number"].map(
                (label) => (
                  <div key={label}>
                    <div className="mb-2 text-sm text-zinc-400">{label}</div>
                    <div className="h-12 rounded-xl border border-white/10 bg-zinc-950" />
                  </div>
                )
              )}
              <div>
                <div className="mb-2 text-sm text-zinc-400">Message</div>
                <div className="h-32 rounded-xl border border-white/10 bg-zinc-950" />
              </div>
              <Button className="mt-2 px-6 py-6 text-base">Submit</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </StandardPage>
  );
}

function StartHerePage() {
  return (
    <StandardPage
      eyebrow="Start Here"
      title="Take the first step toward a stronger, healthier version of you."
      body="The current site uses this as the primary conversion path. In the WordPress rebuild, this can become your lead capture or intro offer page tied directly into your preferred booking system."
      image={sitePhotos.hero}
    >
      <div className="grid gap-6 md:grid-cols-3">
        {[
          [Clock3, "Step 1", "Tell us a little about yourself and what you want help with."],
          [Users, "Step 2", "Meet with a coach who listens, assesses, and helps you find the right path."],
          [ShieldCheck, "Step 3", "Leave with clarity, confidence, and a better starting point."],
        ].map(([Icon, title, text], idx) => {
          const Cmp = Icon as any;
          return (
            <Card
              key={idx}
              className="rounded-[2rem] border border-white/10 bg-zinc-950 text-zinc-100 shadow-none"
            >
              <CardContent className="p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600/15 text-red-500">
                  <Cmp className="h-5 w-5" />
                </div>
                <div className="mt-5 text-2xl font-semibold">{title}</div>
                <p className="mt-3 leading-7 text-zinc-400">{text}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </StandardPage>
  );
}

function SiteFooter({ navigate }: { navigate: (p: PageKey) => void }) {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <button
            onClick={() => navigate("home")}
            className="text-left text-lg font-semibold tracking-wide"
          >
            RESULTS BY DESIGN FITNESS
          </button>
          <p className="mt-4 max-w-xl leading-7 text-zinc-400">
            Louisville personal training for adults who want to build strength,
            improve mobility, and feel supported every step of the way.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
            Quick Links
          </div>
          <div className="mt-4 space-y-3 text-zinc-400">
            <button onClick={() => navigate("home")} className="block hover:text-white">
              Home
            </button>
            <button
              onClick={() => navigate("about-us")}
              className="block hover:text-white"
            >
              About Us
            </button>
            <button onClick={() => navigate("blog")} className="block hover:text-white">
              Blog
            </button>
            <button
              onClick={() => navigate("success-stories")}
              className="block hover:text-white"
            >
              Success Stories
            </button>
            <button
              onClick={() => navigate("schedule")}
              className="block hover:text-white"
            >
              Schedule
            </button>
            <button
              onClick={() => navigate("contact")}
              className="block hover:text-white"
            >
              Contact Us
            </button>
          </div>
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
            Programs
          </div>
          <div className="mt-4 space-y-3 text-zinc-400">
            <button
              onClick={() => navigate("semi-private-personal-training")}
              className="block hover:text-white"
            >
              Semi Private Personal Training
            </button>
            <button
              onClick={() => navigate("sports-performance-training")}
              className="block hover:text-white"
            >
              Sports Performance Training
            </button>
            <button
              onClick={() => navigate("nutrition-coaching")}
              className="block hover:text-white"
            >
              Nutrition Coaching
            </button>
            <button
              onClick={() => navigate("stretch-therapy")}
              className="block hover:text-white"
            >
              Stretch Therapy
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-10 md:grid-cols-3">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
              Location
            </div>
            <div className="mt-4 flex items-start gap-3 text-zinc-300">
              <MapPin className="mt-1 h-4 w-4 text-red-500" /> 1920 Stanley Gault
              Pkwy #103, Louisville, KY 40223
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
              Get In Touch
            </div>
            <div className="mt-4 space-y-3 text-zinc-300">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-red-500" /> 502-586-5544
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-red-500" /> info@resultsbydesignfitness.com
              </div>
            </div>
          </div>
          <div className="flex items-end text-sm text-zinc-500">
            © 2026 Results by Design Fitness
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function RxDCurrentSiteClone() {
  const [page, setPage] = useState<PageKey>("home");

  const navigate = (next: PageKey) => {
    setPage(next);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const pageTitle = useMemo(() => {
    const map: Record<PageKey, string> = {
      home: "Home",
      "semi-private-personal-training": "Semi Private Personal Training",
      "sports-performance-training": "Sports Performance Training",
      "nutrition-coaching": "Nutrition Coaching",
      "in-house-physical-therapy": "In-House Physical Therapy",
      "stretch-therapy": "Stretch Therapy",
      "success-stories": "Success Stories",
      "about-us": "About Us",
      blog: "Our Blog",
      schedule: "Schedule",
      store: "Store",
      contact: "Contact",
      "start-here": "Start Here",
    };
    return map[page];
  }, [page]);

  const renderPage = () => {
    switch (page) {
      case "home":
        return <HomePage navigate={navigate} />;
      case "semi-private-personal-training":
        return <SemiPrivatePage navigate={navigate} />;
      case "sports-performance-training":
        return <SportsPerformancePage />;
      case "nutrition-coaching":
        return <NutritionPage navigate={navigate} />;
      case "in-house-physical-therapy":
        return <PhysicalTherapyPage />;
      case "stretch-therapy":
        return <StretchTherapyPage navigate={navigate} />;
      case "success-stories":
        return <SuccessStoriesPage />;
      case "about-us":
        return <AboutPage />;
      case "blog":
        return <BlogPage />;
      case "schedule":
        return <SchedulePage />;
      case "store":
        return <StorePage />;
      case "contact":
        return <ContactPage />;
      case "start-here":
        return <StartHerePage />;
      default:
        return <HomePage navigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <SiteHeader page={page} navigate={navigate} />

      <div className="border-b border-white/5 bg-zinc-950/50 px-6 py-3 text-center text-xs uppercase tracking-[0.25em] text-zinc-500">
        Current Site Clone Preview • {pageTitle}
      </div>

      <AnimatePresence mode="wait">
        <motion.main
          key={page}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.22 }}
        >
          {renderPage()}
        </motion.main>
      </AnimatePresence>

      <SiteFooter navigate={navigate} />
    </div>
  );
}

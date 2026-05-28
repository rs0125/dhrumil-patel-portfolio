import Image from 'next/image';

const services = [
  {
    title: 'Minimally Invasive Spine Surgery',
    desc: 'Advanced keyhole spine procedures for faster recovery and minimal tissue damage.',
  },
  {
    title: 'Degenerative Spine Disorders',
    desc: 'Comprehensive treatment for slip disc, lumbar canal stenosis, cervical spondylosis, and chronic back pain.',
  },
  {
    title: 'Spine Trauma',
    desc: 'Emergency and definitive management of spinal fractures and traumatic spinal cord injuries.',
  },
  {
    title: 'Spinal Deformity Correction',
    desc: 'Specialized management of scoliosis, kyphosis, and adult deformity correction surgery.',
  },
  {
    title: 'Tumor & Infection',
    desc: 'Treatment for spinal tumors, tuberculosis spine, pyogenic infections, and metastatic disease.',
  },
  {
    title: 'Pediatric Spine Disorders',
    desc: 'Dedicated care for congenital and pediatric spine pathologies.',
  },
];

const expertise = [
  'Cervical Disc Disease',
  'Lumbar Canal Stenosis',
  'Slip Disc / Sciatica',
  'Spinal Fractures',
  'Scoliosis & Kyphosis',
  'Spinal Tumors',
  'Spine Infections',
  'Revision Spine Surgery',
];

const testimonials = [
  {
    name: 'Lumbar Canal Stenosis Patient',
    review:
      'Excellent guidance and surgical care. My walking ability improved significantly after surgery.',
  },
  {
    name: 'Cervical Myelopathy Patient',
    review:
      'Very professional and approachable doctor. Explained every detail before surgery.',
  },
  {
    name: 'Spine Trauma Patient',
    review:
      'Received timely treatment and rehabilitation guidance after my accident.',
  },
];

function LogoMark() {
  return (
    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-white">
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          d="M12 2v6m0 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0 6v8a4 4 0 0 1-4 4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function ShieldIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3 4 6v6c0 4.5 3.2 8.4 8 9 4.8-.6 8-4.5 8-9V6l-8-3Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TrendIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="m4 17 6-6 4 4 6-8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 7h6v6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="m12 2 3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2Z" />
    </svg>
  );
}

export default function SpineSurgeonWebsite() {
  return (
    <div className="min-h-screen text-ink">
      {/* HERO — full-width */}
      <section className="relative overflow-hidden bg-surface">
        {/* Decorative blue blob behind portrait */}
        <div
          className="pointer-events-none absolute -top-12 right-[22%] hidden lg:block"
          aria-hidden
        >
          <div className="h-64 w-64 rounded-[40%_60%_55%_45%/55%_45%_60%_40%] bg-gradient-to-br from-accent to-[#7aa6ff] opacity-90 blur-[1px]" />
        </div>

        {/* Nav */}
        <header className="relative z-10 mx-auto flex max-w-[1400px] items-center justify-between gap-3 px-5 sm:px-8 lg:px-12 pt-6 sm:pt-8">
          <div className="flex items-center gap-3">
            <LogoMark />
            <span className="text-[18px] font-semibold tracking-tight">
              Dr. Dhrumil
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-[14px] text-muted">
            <a href="#about" className="hover:text-ink transition">About</a>
            <a href="#services" className="hover:text-ink transition">Services</a>
            <a href="#contact" className="hover:text-ink transition">Contact</a>
          </nav>
          <a
            href="#contact"
            className="btn-primary"
          >
            Book Appointment
          </a>
        </header>

        <div className="relative z-10 mx-auto grid max-w-[1400px] gap-8 px-5 sm:px-8 lg:px-12 pt-10 sm:pt-14 lg:pt-16 pb-10 sm:pb-14 lg:grid-cols-12 lg:gap-10 lg:items-center">
            {/* Left: copy */}
            <div className="lg:col-span-7">
              <span className="pill pill-dot mb-5">Consult Available</span>

              <h1 className="display text-[40px] sm:text-[60px] lg:text-[82px] leading-[1.02]">
                Your Spine,
                <br />
                Our Top Priority
              </h1>

              <p className="mt-5 max-w-xl text-[15px] sm:text-[16px] text-muted">
                Consult with a fellowship-trained spine surgeon. Expert care for
                slip disc, sciatica, scoliosis, trauma, and complex spinal
                disorders — diagnosis to recovery.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" className="btn-primary">
                  Book Appointment
                </a>
                <a href="#services" className="btn-outline">
                  View Services
                </a>
              </div>

              {/* Stats */}
              <div className="mt-8 flex flex-wrap gap-x-10 gap-y-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface2 text-ink2">
                    <ShieldIcon />
                  </span>
                  <div>
                    <p className="display text-[22px] leading-none">98.5%</p>
                    <p className="text-[13px] text-muted mt-1">Patient Satisfaction</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface2 text-ink2">
                    <TrendIcon />
                  </span>
                  <div>
                    <p className="display text-[22px] leading-none">500+</p>
                    <p className="text-[13px] text-muted mt-1">Spine Procedures</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: portrait + floating chips */}
            <div className="relative lg:col-span-5">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl lg:max-w-none">
                <Image
                  src="https://images.unsplash.com/photo-1612531386530-97286d97c2d2?q=80&w=1887&auto=format&fit=crop"
                  alt="Dr. Dhrumil Patel — Spine Surgeon"
                  fill
                  sizes="(min-width: 1024px) 32rem, (min-width: 640px) 24rem, 100vw"
                  className="object-cover"
                  priority
                />
              </div>

              {/* 24/7 chip */}
              <div className="absolute left-2 top-6 sm:left-4 sm:top-10">
                <span className="floating-chip">24/7 Available</span>
              </div>

              {/* Rating chip */}
              <div className="absolute -left-2 bottom-16 sm:left-4 sm:bottom-24">
                <span className="floating-chip">
                  <span className="flex h-7 w-7 items-center justify-center rounded-md bg-accent text-white">
                    <StarIcon />
                  </span>
                  <span className="flex flex-col leading-tight">
                    <span className="font-semibold text-[14px]">4.9</span>
                    <span className="text-[11px] text-muted">Based on 2.5k Reviews</span>
                  </span>
                </span>
              </div>
            </div>
          </div>

      </section>

      {/* Body sections — full-width on white, flowing */}
      <div className="bg-surface">
        {/* ABOUT */}
        <section id="about" className="border-t border-hairline">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 py-16 sm:py-24">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <span className="pill mb-5">About</span>
                <h2 className="display text-[32px] sm:text-[44px] lg:text-[52px]">
                  Personalized &amp; evidence-based spine care.
                </h2>
                <p className="mt-6 text-[16px] sm:text-[17px] text-muted max-w-md leading-relaxed">
                  Dr. Dhrumil Patel is an orthopedic spine surgeon focused on
                  delivering advanced and patient-centric care for all
                  spine-related conditions — combining modern techniques with a
                  commitment to restore mobility, relieve pain, and improve
                  quality of life.
                </p>
              </div>

              <div className="lg:col-span-7">
                <p className="text-[13px] font-semibold uppercase tracking-wider text-muted mb-5">
                  Areas of expertise
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {expertise.map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-2xl bg-surface2 px-5 py-4"
                    >
                      <span className="text-[15px] text-ink2">{item}</span>
                      <span className="text-[12px] font-semibold text-accent">Spine</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="border-t border-hairline">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 py-16 sm:py-24">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-10">
              <div>
                <span className="pill mb-5">Services</span>
                <h2 className="display text-[32px] sm:text-[44px] lg:text-[52px] max-w-2xl">
                  Comprehensive spine treatment.
                </h2>
              </div>
              <p className="text-muted text-[16px] max-w-sm">
                Specialized management for the complete range of spinal
                disorders using modern surgical and non-surgical techniques.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="rounded-2xl bg-surface2 p-7 transition hover:bg-white hover:shadow-[0_10px_40px_rgba(15,23,42,0.06)]"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path
                        d="M12 4v16M4 12h16"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <h3 className="display text-[22px] sm:text-[24px] mb-3 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-[15px] text-muted leading-relaxed">
                    {service.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="border-t border-hairline">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 py-16 sm:py-24">
            <div className="mb-10">
              <span className="pill mb-5">Patient Voices</span>
              <h2 className="display text-[32px] sm:text-[44px] lg:text-[52px] max-w-3xl">
                Trusted care, patient-focused outcomes.
              </h2>
            </div>

            <div className="grid gap-3 md:grid-cols-3">
              {testimonials.map((item) => (
                <figure
                  key={item.name}
                  className="rounded-2xl bg-surface2 p-7"
                >
                  <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-accent text-white">
                    <span className="text-[20px] leading-none">&ldquo;</span>
                  </div>
                  <blockquote className="text-[16px] text-ink2 leading-relaxed mb-6">
                    {item.review}
                  </blockquote>
                  <figcaption className="text-[13px] font-semibold text-muted">
                    — {item.name}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="border-t border-hairline bg-surface2">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 py-16 sm:py-24">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-6">
                <span className="pill mb-5 bg-white">Contact</span>
                <h2 className="display text-[32px] sm:text-[44px] lg:text-[52px] mb-5">
                  Schedule your spine consultation.
                </h2>
                <p className="text-[16px] text-muted mb-10 max-w-md leading-relaxed">
                  For appointments, second opinions, and advanced spine
                  treatment consultations.
                </p>

                <dl className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 rounded-2xl bg-white px-6 py-5">
                    <dt className="text-[12px] font-semibold uppercase tracking-wider text-muted w-20 shrink-0">Phone</dt>
                    <dd className="text-[16px] font-medium">+91 XXXXX XXXXX</dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 rounded-2xl bg-white px-6 py-5">
                    <dt className="text-[12px] font-semibold uppercase tracking-wider text-muted w-20 shrink-0">Email</dt>
                    <dd className="text-[16px] font-medium break-all">
                      <a
                        href="mailto:drdhrumilspine@gmail.com"
                        className="hover:text-accent transition"
                      >
                        drdhrumilspine@gmail.com
                      </a>
                    </dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 rounded-2xl bg-white px-6 py-5">
                    <dt className="text-[12px] font-semibold uppercase tracking-wider text-muted w-20 shrink-0">Place</dt>
                    <dd className="text-[16px] font-medium">Kolkata, India</dd>
                  </div>
                </dl>
              </div>

              <div className="lg:col-span-6">
                <form className="rounded-2xl bg-white p-7 sm:p-9 border border-hairline">
                  <p className="text-[13px] font-semibold uppercase tracking-wider text-muted mb-6">
                    Request appointment
                  </p>

                  <div className="space-y-4">
                    <label className="block">
                      <span className="text-[13px] font-semibold text-ink2">Name</span>
                      <input
                        type="text"
                        className="mt-2 w-full rounded-full bg-surface2 border border-transparent px-5 py-3 text-[15px] outline-none focus:border-accent focus:bg-white"
                        placeholder="Your full name"
                      />
                    </label>
                    <label className="block">
                      <span className="text-[13px] font-semibold text-ink2">Phone</span>
                      <input
                        type="tel"
                        className="mt-2 w-full rounded-full bg-surface2 border border-transparent px-5 py-3 text-[15px] outline-none focus:border-accent focus:bg-white"
                        placeholder="+91"
                      />
                    </label>
                    <label className="block">
                      <span className="text-[13px] font-semibold text-ink2">Concern</span>
                      <textarea
                        rows={3}
                        className="mt-2 w-full rounded-2xl bg-surface2 border border-transparent px-5 py-3 text-[15px] outline-none focus:border-accent focus:bg-white resize-none"
                        placeholder="Briefly describe your condition"
                      />
                    </label>
                  </div>

                  <button
                    type="button"
                    className="btn-primary mt-6 w-full"
                  >
                    Send Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-hairline">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-[13px] text-muted">
            <p>© 2026 Dr. Dhrumil Patel</p>
            <p>Orthopedic Spine Surgeon · Kolkata</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

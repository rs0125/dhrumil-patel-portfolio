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
  'Osteoporotic Fractures',
  'Chronic Back Pain',
];

const conditions = [
  'Neck Pain',
  'Back Pain',
  'Sciatica',
  'Disc Prolapse',
  'Spinal Trauma',
  'Scoliosis',
  'Spinal TB',
  'Spinal Tumors',
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

function pad(n: number) {
  return n.toString().padStart(2, '0');
}

export default function SpineSurgeonWebsite() {
  return (
    <div className="paper min-h-screen text-ink">
      <div>

      {/* Top masthead — print-style index bar */}
      <header className="paper border-b border-ink/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-3">
          <nav className="hidden md:flex items-center gap-6 label-caps text-ink/70">
            <a href="#about" className="hover:text-ink transition">About</a>
            <a href="#services" className="hover:text-ink transition">Services</a>
            <a href="#conditions" className="hover:text-ink transition">Conditions</a>
            <a href="#contact" className="hover:text-ink transition">Contact</a>
          </nav>
          <a
            href="#contact"
            className="label-caps text-[12px] sm:text-[14px] border border-ink/70 px-3 py-1.5 sm:py-2 hover:bg-ink hover:text-paper transition ml-auto"
          >
            Book →
          </a>
        </div>
      </header>

      {/* Hero — paper layout with retained blue accent and image */}
      <section className="paper border-b border-ink/20 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-20 lg:py-24">
          <div className="grid gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-12 lg:items-start">
            {/* Intro copy — appears above the portrait on mobile, left column on desktop. */}
            <div className="text-center lg:text-left lg:col-span-7 lg:row-start-1 lg:col-start-1">
              <p className="label-caps text-accent mb-4 sm:mb-6 text-[12px] sm:text-[14px]">
                Fellowship Trained · Orthopedic Spine
              </p>

              <h1 className="display text-[40px] leading-[1.05] sm:text-[64px] lg:text-[88px] tracking-tight mb-5 sm:mb-6">
                Dr. Dhrumil
                <br />
                Patel<span className="text-accent">.</span>
              </h1>

              <div className="hairline mb-5 sm:mb-6 mx-auto lg:mx-0" />

              <p className="text-[15px] sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 text-ink/80">
                Dedicated spine specialist providing comprehensive care for the
                entire spectrum of spinal disorders — from neck pain and slip
                disc to complex deformity correction and minimally invasive
                spine surgery.
              </p>
            </div>

            {/* Image — kept, framed as a printed plate. Spans both rows on desktop. */}
            <div className="lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:row-span-2">
              <figure className="border border-ink/40 p-2 sm:p-3 paper-dark max-w-sm mx-auto lg:max-w-none">
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1612531386530-97286d97c2d2?q=80&w=1887&auto=format&fit=crop"
                    alt="Dr. Dhrumil Patel — Spine Surgeon"
                    fill
                    sizes="(min-width: 1024px) 32rem, (min-width: 640px) 24rem, 100vw"
                    className="object-cover brightness-95 contrast-[1.05]"
                    priority
                  />
                </div>
                <figcaption className="mt-2 sm:mt-3 flex items-center justify-end label-caps text-ink/60 text-[11px] sm:text-[14px]">
                  <span>Spine Surgeon</span>
                </figcaption>
              </figure>
            </div>

            {/* CTAs + stats — appear after the portrait on mobile, below the intro on desktop. */}
            <div className="text-center lg:text-left lg:col-span-7 lg:col-start-1 lg:row-start-2">
              <div className="flex flex-col sm:flex-row gap-3 sm:justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="label-caps bg-ink text-paper px-5 py-3 hover:bg-accent hover:text-paper transition text-center"
                >
                  Book Appointment →
                </a>
                <a
                  href="#services"
                  className="label-caps border border-ink/70 px-5 py-3 hover:bg-ink hover:text-paper transition text-center"
                >
                  View Services
                </a>
              </div>

              {/* Stat row — typographic, no cards */}
              <div className="mt-8 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-6">
                <div className="text-center lg:text-left">
                  <p className="label-caps text-ink/60 mb-1 sm:mb-2 text-[11px] sm:text-[14px]">Procedures</p>
                  <p className="display text-2xl sm:text-4xl">500+</p>
                </div>
                <div className="text-center lg:text-left">
                  <p className="label-caps text-ink/60 mb-1 sm:mb-2 text-[11px] sm:text-[14px]">Technique</p>
                  <p className="display text-2xl sm:text-4xl">MIS</p>
                </div>
                <div className="text-center lg:text-left">
                  <p className="label-caps text-ink/60 mb-1 sm:mb-2 text-[11px] sm:text-[14px]">Focus</p>
                  <p className="display text-2xl sm:text-4xl">Spine</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="paper-dark border-b border-ink/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-5">
              <p className="label-caps text-accent mb-3 sm:mb-4 text-[12px] sm:text-[14px]">§ About</p>
              <h2 className="display text-[28px] sm:text-4xl lg:text-5xl mb-5 sm:mb-6">
                Personalized &amp; evidence-based spine care.
              </h2>
              <div className="hairline-soft mb-5 sm:mb-6" />
              <p className="text-[15px] sm:text-lg leading-relaxed text-ink/80">
                Dr. Dhrumil Patel is an orthopedic spine surgeon focused on
                delivering advanced and patient-centric care for all
                spine-related conditions. With training in modern spinal
                techniques and academic involvement in spine surgery, the goal
                is to restore mobility, relieve pain, and improve quality of
                life.
              </p>
            </div>

            <div className="lg:col-span-7">
              <p className="label-caps text-ink/60 mb-3 sm:mb-4 text-[12px] sm:text-[14px]">Areas of expertise</p>
              <ul className="divide-y divide-ink/20 border-t border-b border-ink/20">
                {expertise.map((item, i) => (
                  <li
                    key={item}
                    className="flex items-center justify-between py-2.5 sm:py-3"
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <span className="marker text-ink/50 w-7 sm:w-8 text-[12px] sm:text-[14px]">{pad(i + 1)}</span>
                      <span className="text-[15px] sm:text-lg">{item}</span>
                    </div>
                    <span className="text-accent label-caps hidden sm:inline">
                      Spine
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="paper border-b border-ink/20 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 sm:gap-4 mb-8 sm:mb-10">
            <div>
              <p className="label-caps text-accent mb-2 sm:mb-3 text-[12px] sm:text-[14px]">§ Services</p>
              <h2 className="display text-[28px] sm:text-4xl lg:text-5xl max-w-2xl">
                Comprehensive spine treatment.
              </h2>
            </div>
            <p className="text-ink/70 text-[15px] sm:text-base max-w-md">
              Specialized management for the complete range of spinal disorders
              using modern surgical and non-surgical techniques.
            </p>
          </div>

          <div className="hairline mb-0" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="border-b border-ink/20 sm:border-r p-5 sm:p-8 last:border-r-0 sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0 group"
              >
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <span className="marker text-ink/50 text-[12px] sm:text-[14px]">{pad(index + 1)}</span>
                  <span className="label-caps text-ink/50 group-hover:text-accent transition text-[12px] sm:text-[14px]">
                    Service
                  </span>
                </div>
                <h3 className="display text-xl sm:text-[28px] mb-3 sm:mb-4 leading-tight">
                  {service.title}
                </h3>
                <p className="text-ink/75 text-[15px] sm:text-base leading-relaxed">
                  {service.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section id="conditions" className="paper-dark border-b border-ink/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 grid lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <p className="label-caps text-accent mb-3 sm:mb-4 text-[12px] sm:text-[14px]">§ Conditions Treated</p>
            <h2 className="display text-[28px] sm:text-4xl lg:text-5xl mb-5 sm:mb-6">
              Full spectrum spine care.
            </h2>
            <div className="hairline-soft mb-5 sm:mb-6" />
            <p className="text-[15px] sm:text-lg leading-relaxed text-ink/80">
              Diagnosis and treatment for degenerative, traumatic, infectious,
              tumorous, and deformity-related spinal disorders.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 border-l border-t border-ink/20">
              {conditions.map((item, i) => (
                <div
                  key={item}
                  className="border-r border-b border-ink/20 p-3.5 sm:p-6 flex items-baseline justify-between gap-2"
                >
                  <span className="text-[14px] sm:text-lg">{item}</span>
                  <span className="marker text-ink/40 text-[11px] sm:text-[14px]">{pad(i + 1)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="paper border-b border-ink/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <div className="mb-8 sm:mb-10">
            <p className="label-caps text-accent mb-2 sm:mb-3 text-[12px] sm:text-[14px]">§ Patient Voices</p>
            <h2 className="display text-[28px] sm:text-4xl lg:text-5xl max-w-3xl">
              Trusted care, patient-focused outcomes.
            </h2>
          </div>

          <div className="hairline mb-0" />

          <div className="grid md:grid-cols-3">
            {testimonials.map((item, i) => (
              <figure
                key={item.name}
                className="border-b border-ink/20 md:border-r last:border-r-0 p-5 sm:p-8"
              >
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <span className="marker text-ink/50 text-[12px] sm:text-[14px]">{pad(i + 1)}</span>
                  <span className="display text-3xl sm:text-4xl text-accent leading-none">
                    “
                  </span>
                </div>
                <blockquote className="text-ink/80 text-[15px] sm:text-lg leading-relaxed mb-5 sm:mb-6">
                  {item.review}
                </blockquote>
                <figcaption className="label-caps text-ink/70 text-[12px] sm:text-[14px]">
                  — {item.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="paper-dark border-b border-ink/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 items-start">
            <div className="lg:col-span-6">
              <p className="label-caps text-accent mb-3 sm:mb-4 text-[12px] sm:text-[14px]">§ Contact</p>
              <h2 className="display text-[28px] sm:text-4xl lg:text-5xl mb-5 sm:mb-6">
                Schedule your spine consultation.
              </h2>
              <div className="hairline-soft mb-5 sm:mb-6" />
              <p className="text-[15px] sm:text-lg text-ink/80 leading-relaxed mb-6 sm:mb-8">
                For appointments, second opinions, and advanced spine treatment
                consultations.
              </p>

              <dl className="space-y-3 sm:space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
                  <dt className="label-caps text-ink/60 w-20 sm:w-24 shrink-0 text-[12px] sm:text-[14px]">Phone</dt>
                  <dd className="text-[16px] sm:text-xl">+91 XXXXX XXXXX</dd>
                </div>
                <div className="hairline-soft" />
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
                  <dt className="label-caps text-ink/60 w-20 sm:w-24 shrink-0 text-[12px] sm:text-[14px]">Email</dt>
                  <dd className="text-[16px] sm:text-xl break-all">
                    <a
                      href="mailto:drdhrumilspine@gmail.com"
                      className="hover:text-accent transition"
                    >
                      drdhrumilspine@gmail.com
                    </a>
                  </dd>
                </div>
                <div className="hairline-soft" />
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
                  <dt className="label-caps text-ink/60 w-20 sm:w-24 shrink-0 text-[12px] sm:text-[14px]">Place</dt>
                  <dd className="text-[16px] sm:text-xl">Kolkata, India</dd>
                </div>
              </dl>
            </div>

            <div className="lg:col-span-6">
              <form className="border border-ink/30 p-5 sm:p-8 paper">
                <p className="label-caps text-ink/60 mb-5 sm:mb-6 text-[12px] sm:text-[14px]">Request appointment</p>

                <div className="space-y-4 sm:space-y-5">
                  <label className="block">
                    <span className="label-caps text-ink/60 text-[12px] sm:text-[14px]">Name</span>
                    <input
                      type="text"
                      className="mt-2 w-full bg-transparent border-b border-ink/30 focus:border-accent outline-none py-2 text-[16px]"
                      placeholder="Your full name"
                    />
                  </label>
                  <label className="block">
                    <span className="label-caps text-ink/60 text-[12px] sm:text-[14px]">Phone</span>
                    <input
                      type="tel"
                      className="mt-2 w-full bg-transparent border-b border-ink/30 focus:border-accent outline-none py-2 text-[16px]"
                      placeholder="+91"
                    />
                  </label>
                  <label className="block">
                    <span className="label-caps text-ink/60 text-[12px] sm:text-[14px]">Concern</span>
                    <textarea
                      rows={3}
                      className="mt-2 w-full bg-transparent border-b border-ink/30 focus:border-accent outline-none py-2 text-[16px] resize-none"
                      placeholder="Briefly describe your condition"
                    />
                  </label>
                </div>

                <button
                  type="button"
                  className="label-caps mt-6 sm:mt-8 w-full bg-ink text-paper py-3 hover:bg-accent hover:text-paper transition"
                >
                  Send Request →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3 label-caps text-ink/60 text-[11px] sm:text-[14px] text-center sm:text-left">
          <p>© 2026 Dr. Dhrumil Patel</p>
          <p>Orthopedic Spine Surgeon · Kolkata</p>
        </div>
      </footer>
      </div>
    </div>
  );
}

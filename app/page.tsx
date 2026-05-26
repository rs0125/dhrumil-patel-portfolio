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

export default function SpineSurgeonWebsite() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div>
            <div className="inline-flex items-center rounded-full border border-blue-300/30 bg-white/10 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm mb-4 sm:mb-6 backdrop-blur">
              Fellowship Trained Orthopedic Spine Surgeon
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 sm:mb-6">
              Dr. Dhrumil Patel
            </h1>

            <p className="text-xl sm:text-2xl text-blue-100 mb-3 sm:mb-4">
              Orthopedic Spine Surgeon
            </p>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mb-6 sm:mb-8">
              Dedicated spine specialist providing comprehensive care for the entire spectrum of spinal disorders — from neck pain and slip disc to complex deformity correction and minimally invasive spine surgery.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <a
                href="#contact"
                className="bg-white text-slate-900 px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition-transform text-center"
              >
                Book Appointment
              </a>

              <a
                href="#services"
                className="border border-white/40 px-6 py-3 rounded-2xl font-semibold hover:bg-white/10 transition text-center"
              >
                View Services
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl sm:rounded-[2rem] p-4 sm:p-6 shadow-2xl border border-white/10 w-full max-w-md">
              <div className="relative h-72 sm:h-96 lg:h-[420px] w-full overflow-hidden rounded-2xl sm:rounded-[1.5rem]">
                <Image
                  src="https://images.unsplash.com/photo-1612531386530-97286d97c2d2?q=80&w=1887&auto=format&fit=crop"
                  alt="Spine Surgeon"
                  fill
                  sizes="(min-width: 1024px) 28rem, 100vw"
                  className="object-cover"
                  priority
                />
              </div>

              <div className="mt-4 sm:mt-6 grid grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-white/10 rounded-2xl p-3 sm:p-4 text-center">
                  <p className="text-2xl sm:text-3xl font-bold">500+</p>
                  <p className="text-xs sm:text-sm text-slate-200">Spine Procedures</p>
                </div>

                <div className="bg-white/10 rounded-2xl p-3 sm:p-4 text-center">
                  <p className="text-2xl sm:text-3xl font-bold">Advanced</p>
                  <p className="text-xs sm:text-sm text-slate-200">MIS Techniques</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="relative h-72 sm:h-96 lg:h-[500px] w-full overflow-hidden rounded-3xl sm:rounded-[2rem] shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1887&auto=format&fit=crop"
              alt="Spine Consultation"
              fill
              sizes="(min-width: 1024px) 40rem, 100vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="uppercase tracking-[0.25em] sm:tracking-[0.3em] text-xs sm:text-sm text-blue-700 font-semibold mb-3 sm:mb-4">
              About Doctor
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
              Personalized & Evidence-Based Spine Care
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-5 sm:mb-6">
              Dr. Dhrumil Patel is an orthopedic spine surgeon focused on delivering advanced and patient-centric care for all spine-related conditions. With training in modern spinal techniques and academic involvement in spine surgery, the goal is to restore mobility, relieve pain, and improve quality of life.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {expertise.map((item) => (
                <div
                  key={item}
                  className="bg-white rounded-2xl p-3 sm:p-4 shadow-sm border border-slate-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-blue-700 shrink-0" />
                    <p className="font-medium text-sm sm:text-base">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-14 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <p className="uppercase tracking-[0.25em] sm:tracking-[0.3em] text-xs sm:text-sm text-blue-700 font-semibold mb-3 sm:mb-4">
              Services
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">
              Comprehensive Spine Treatment
            </h2>

            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
              Specialized management for the complete range of spinal disorders using modern surgical and non-surgical techniques.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-slate-50 border border-slate-100 rounded-3xl sm:rounded-[2rem] p-6 sm:p-8 hover:shadow-2xl hover:-translate-y-1 transition-all"
              >
                <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-blue-700 text-white flex items-center justify-center text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                  {index + 1}
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-blue-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.25em] sm:tracking-[0.3em] text-xs sm:text-sm text-blue-200 font-semibold mb-3 sm:mb-4">
              Conditions Treated
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
              Full Spectrum Spine Care
            </h2>

            <p className="text-slate-200 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
              Diagnosis and treatment for degenerative, traumatic, infectious, tumorous, and deformity-related spinal disorders.
            </p>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {conditions.map((item) => (
                <div
                  key={item}
                  className="bg-white/10 backdrop-blur rounded-2xl px-3 py-3 sm:px-4 sm:py-4 border border-white/10 text-sm sm:text-base"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-72 sm:h-96 lg:h-[500px] w-full overflow-hidden rounded-3xl sm:rounded-[2rem] shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1516549655669-df83a0774514?q=80&w=1974&auto=format&fit=crop"
              alt="Spine Anatomy"
              fill
              sizes="(min-width: 1024px) 40rem, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">
              Patient Testimonials
            </h2>

            <p className="text-gray-600 text-base sm:text-lg">
              Trusted care with patient-focused outcomes.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="bg-white rounded-3xl sm:rounded-[2rem] p-6 sm:p-8 shadow-md border border-slate-100"
              >
                <div className="text-4xl sm:text-5xl text-blue-700 mb-3 sm:mb-4 leading-none">“</div>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
                  {item.review}
                </p>
                <div>
                  <p className="font-semibold text-base sm:text-lg">{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-14 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-slate-900 to-blue-900 rounded-3xl sm:rounded-[3rem] p-6 sm:p-10 md:p-16 text-white shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            <div>
              <p className="uppercase tracking-[0.25em] sm:tracking-[0.3em] text-xs sm:text-sm text-blue-200 font-semibold mb-3 sm:mb-4">
                Contact
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
                Schedule Your Spine Consultation
              </h2>

              <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
                For appointments, second opinions, and advanced spine treatment consultations.
              </p>
            </div>

            <div className="bg-white text-slate-900 rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 shadow-xl">
              <div className="space-y-5 sm:space-y-6">
                <div>
                  <p className="text-xs sm:text-sm uppercase tracking-wider text-gray-500 mb-1">
                    Phone
                  </p>
                  <p className="text-lg sm:text-xl font-semibold break-words">+91 XXXXX XXXXX</p>
                </div>

                <div>
                  <p className="text-xs sm:text-sm uppercase tracking-wider text-gray-500 mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:drdhrumilspine@gmail.com"
                    className="text-lg sm:text-xl font-semibold hover:text-blue-700 transition break-all"
                  >
                    drdhrumilspine@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-xs sm:text-sm uppercase tracking-wider text-gray-500 mb-1">
                    Location
                  </p>
                  <p className="text-lg sm:text-xl font-semibold">Kolkata, India</p>
                </div>

                <button
                  type="button"
                  className="w-full bg-blue-700 text-white py-3 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg hover:opacity-90 transition"
                >
                  Request Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-6 sm:py-8 px-4 sm:px-6 text-center text-sm sm:text-base">
        <p>© 2026 Dr. Dhrumil Patel | Orthopedic Spine Surgeon</p>
      </footer>
    </div>
  );
}

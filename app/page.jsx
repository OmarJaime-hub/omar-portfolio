import { MapPin, Phone, Mail, ExternalLink, Award, Shield, Briefcase, Download } from "lucide-react";

export default function OmarJaimeResumePortfolio() {
  const experiences = [
    {
      company: "U.S. Army",
      role: "Mortuary Affairs Specialist",
      years: "Feb. 2019 – Feb. 2023",
      location: "Fort Lee, VA",
      logo: "/images/army-logo.png",
      points: [
        "Managed logistics and coordination for mortuary affairs operations.",
        "Maintained strict safety, sanitation, and operational standards.",
        "Supported military operations in high-pressure environments.",
        "Collaborated with soldiers and leadership to improve operational efficiency.",
        "Handled inventory management, accountability, and equipment operations."
      ]
    },
    {
      company: "U.S. Marine Corps Reserves",
      role: "Light Armored Vehicle Crewman / Infantry Rifleman",
      years: "Jan. 2012 – Dec. 2019",
      location: "Camp Pendleton, CA – Fort Worth, TX",
      logo: "/images/usmc-logo.jpg",
      points: [
        "Supported military training exercises and field readiness operations.",
        "Operated and maintained military vehicles, weapons systems, communications equipment, and training support equipment.",
        "Provided instructional and operational support during training exercises.",
        "Conducted troubleshooting, inspections, and preventative maintenance.",
        "Awarded the Navy Achievement Medal for leadership and operational excellence."
      ]
    },
    {
      company: "Everett Toyota",
      role: "Car Salesman",
      years: "Jan. 2016 – Jan. 2019",
      location: "Mount Pleasant, TX",
      logo: "/images/everett-logo.png",
      points: [
        "Built strong customer relationships and exceeded sales goals.",
        "Negotiated contracts and guided customers through purchasing decisions.",
        "Delivered exceptional customer service and product education."
      ]
    }
  ];

  const education = [
    "Basic Leaders Course – Fort Bragg, NC",
    "Mortuary Affairs Course – Fort Lee, VA",
    "Instructor Operators Course – Camp Pendleton, CA",
    "Combat Lifesavers Course – Camp Pendleton, CA"
  ];

  const skills = [
    "Training Operations",
    "Range Coordination",
    "Operational Readiness",
    "Logistics Support",
    "Inventory Management",
    "Operational Safety Standards",
    "Leadership",
    "Team Coordination",
    "Equipment Maintenance",
    "Mission Planning"
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-950 via-stone-950 to-red-950 text-white overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-900/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-700/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-stone-800/30 rounded-full blur-3xl" />
      </div>

      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-10 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="uppercase tracking-[0.3em] text-yellow-500 text-sm mb-4">
                U.S. Army & Marine Veteran
              </p>

              <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
                Omar <span className="text-yellow-500">Jaime</span>
              </h1>

              <p className="text-slate-200 text-lg leading-relaxed mb-8">
                Military professional with 12+ years of experience supporting training operations,
                logistics, range coordination, operational readiness, and instructional support in
                high-pressure environments.
              </p>

              <div className="flex flex-wrap gap-4 text-sm">
                <ContactPill icon={<MapPin size={16} />} text="Sumrall, MS" />
                <ContactPill icon={<Phone size={16} />} text="(903) 767-8926" />
                <ContactPill icon={<Mail size={16} />} text="Omar.jaime@icloud.com" />
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-red-800/30 blur-3xl rounded-full" />
                <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 w-full max-w-sm shadow-2xl">
                  <div className="text-center">
                    <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-3xl border border-yellow-600/30 bg-black/20">
                      <Shield className="h-12 w-12 text-yellow-500" />
                    </div>

                    <h2 className="text-2xl font-bold mb-2">Mission Ready</h2>

                    <p className="text-slate-300 text-sm leading-relaxed">
                      Experienced in military operations, training support, leadership,
                      logistics, and mission execution.
                    </p>

                    <a
                      href="mailto:Omar.jaime@icloud.com"
                      className="mt-6 inline-flex items-center gap-2 rounded-full bg-yellow-600 px-5 py-3 text-sm font-semibold text-black transition hover:bg-yellow-500"
                    >
                      Contact Omar <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 pb-20 max-w-7xl mx-auto">
        <div className="mb-10">
          <h2 className="text-4xl font-bold mb-2">Professional Experience</h2>
          <div className="w-24 h-1 bg-yellow-600 rounded-full" />
        </div>

        <div className="space-y-10">
          {experiences.map((job, index) => (
            <div
              key={job.company}
              className="group backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-700 hover:scale-[1.01] shadow-2xl"
            >
              <div className="grid lg:grid-cols-4 gap-8">
                <div>
                  <div className="mb-4">
                    <img
                      src={job.logo}
                      alt={`${job.company} logo`}
                      className="h-24 w-24 object-contain rounded-2xl bg-white p-2 shadow-xl"
                    />
                  </div>

                  <h3 className="text-2xl font-bold mb-2">{job.company}</h3>
                  <p className="text-yellow-500 font-medium mb-2">{job.role}</p>
                  <p className="text-slate-300 text-sm">{job.years}</p>
                  <p className="text-slate-400 text-sm mt-1">{job.location}</p>
                </div>

                <div className="lg:col-span-3">
                  <div className="grid gap-4">
                    {job.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-start gap-3 bg-black/10 rounded-2xl p-4 border border-white/10"
                      >
                        <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2 shrink-0" />
                        <p className="text-slate-200 leading-relaxed">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 px-6 pb-20 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
            <div className="mb-6 flex items-center gap-3">
              <Briefcase className="text-yellow-500" />
              <h2 className="text-3xl font-bold">Core Skills</h2>
            </div>

            <div className="flex flex-wrap gap-4">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="bg-red-950/30 border border-yellow-600/30 rounded-full px-5 py-3 text-stone-100 backdrop-blur-md"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
            <div className="mb-6 flex items-center gap-3">
              <Award className="text-yellow-500" />
              <h2 className="text-3xl font-bold">Military Training & Education</h2>
            </div>

            <div className="space-y-4">
              {education.map((item) => (
                <div
                  key={item}
                  className="bg-black/10 border border-white/10 rounded-2xl p-4"
                >
                  <p className="text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 px-6 pb-12 max-w-7xl mx-auto">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 text-center shadow-2xl">
          <h2 className="text-3xl font-bold mb-4">Ready for the Next Mission</h2>

          <p className="text-slate-300 max-w-3xl mx-auto leading-relaxed mb-6">
            Bringing military discipline, leadership, operational readiness,
            and mission-focused execution into civilian workforce opportunities.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <ContactPill icon={<Phone size={16} />} text="(903) 767-8926" />
            <ContactPill icon={<Mail size={16} />} text="Omar.jaime@icloud.com" />
            <ContactPill icon={<MapPin size={16} />} text="Sumrall, MS" />
          </div>
        </div>
      </footer>
    </main>
  );
}

function ContactPill({ icon, text }) {
  return (
    <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 backdrop-blur-md">
      {icon}
      <span>{text}</span>
    </div>
  );
}

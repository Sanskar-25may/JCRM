import React from 'react';
import Image from 'next/image';
import { client, projectId } from '@/lib/sanity/client';
import { allTeamMembersQuery } from '@/lib/sanity/queries';
import { urlFor } from '@/lib/sanity/image';

export const revalidate = 60;

export default async function OurTeam() {
  let members = [];
  const isSanityConfigured = projectId && projectId !== "jcrm-project-id";

  if (isSanityConfigured) {
    try {
      members = await client.fetch(allTeamMembersQuery);
    } catch (err) {
      console.error("Failed to fetch team members from Sanity, using mock fallback:", err);
    }
  }

  // Fallback
  const activeMembers = members && members.length > 0
    ? members.map((m: any) => ({
        name: m.name,
        role: m.role,
        bio: m.bio || '',
        imgUrl: m.image ? urlFor(m.image).width(300).height(250).url() : 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80',
        socials: m.socials || {}
      }))
    : [
        {
          name: 'Yogendra Singh',
          role: 'Founder & Director',
          imgUrl: 'https://res.cloudinary.com/dcd2rjd1x/image/upload/v1783926278/jcrm/profile/wujkoqgrbnaxd3xteoca.jpg',
          bio: 'Yogendra leads the strategic direction of JCRM Technologies, driving ERP deployment architectures and corporate alliances across India.',
          socials: {}
        },
        {
          name: 'Samantha Ray',
          role: 'Co-Founder & Chief HR Officer',
          imgUrl: 'https://jcrm.in/uploads/profile/1770543699_858dc4b8834b55529273.jpeg',
          bio: 'Samantha manages our hiring partner network, matching trained candidates to prospective companies and handling organizational recruitment.',
          socials: {}
        },
        {
          name: 'Dr. Sarah Connor',
          role: 'Principal AI Mentor',
          imgUrl: 'https://jcrm.in/uploads/profile/1779200699_343fb3c993abc88328a5.jpeg',
          bio: 'Sarah leads our machine learning training tracks, focusing on neural network optimizations, PyTorch model flows, and prompt design.',
          socials: {}
        },
        {
          name: 'Alex Mercer',
          role: 'Lead Developer & Frontend Mentor',
          imgUrl: 'https://res.cloudinary.com/dcd2rjd1x/image/upload/v1779995273/jcrm/profile/gcy2wmbjaiscaqyajc0q.jpg',
          bio: 'Alex guides frontend trainees, sharing his deep knowledge of React component lifecycles, CSS modules, and Next.js SSR implementations.',
          socials: {}
        },
      ];

  return (
    <div className="pt-24 font-sans bg-transparent">
      {/* Header Banner */}
      <section className="py-20 text-center">
        <div className="container-custom">
          <h1 className="text-4xl lg:text-5xl font-black text-[#051937] tracking-tight">
            Meet Our <span className="bg-gradient-to-r from-[#0066ff] to-[#38bdf8] bg-clip-text text-transparent">Principal Team</span>
          </h1>
          <p className="text-sm text-slate-500 mt-3.5 max-w-xl mx-auto leading-relaxed">
            Architects, engineers, and mentors committed to business automation and developer training.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 bg-white/30 backdrop-blur-sm border-t border-slate-200/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {activeMembers.map((member: any) => (
              <div key={member.name} className="glass card-hover rounded-[24px] overflow-hidden border border-slate-200/30 flex flex-col">
                <div className="relative w-full h-[250px] border-b border-slate-200/20">
                  <Image
                    src={member.imgUrl}
                    alt={member.name}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-left flex flex-col flex-1 justify-start">
                  <h4 className="text-base font-bold text-[#051937] mb-0.5">{member.name}</h4>
                  <span className="text-[10px] font-bold text-[#0066ff] uppercase tracking-wider block mb-3">{member.role}</span>
                  <p className="text-xs text-[#0a2e5c]/85 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

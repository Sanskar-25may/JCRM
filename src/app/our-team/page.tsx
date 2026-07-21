import React from 'react';
import Image from 'next/image';
import { client, projectId } from '@/lib/sanity/client';
import { allTeamMembersQuery } from '@/lib/sanity/queries';
import { urlFor } from '@/lib/sanity/image';
import styles from './ourteam.module.css';

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
    <div className={styles.teamPage}>
      {/* Header Banner */}
      <section className={styles.banner}>
        <div className={styles.container}>
          <h1 className="reveal">Meet Our Team</h1>
          <p className="reveal delay-1">Architects, engineers, and mentors committed to business and career transformation</p>
        </div>
      </section>

      {/* Team Grid */}
      <section className={styles.teamList}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {activeMembers.map((member: any, idx: number) => (
              <div key={member.name} className={`${styles.card} reveal`} style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className={`${styles.imgWrapper} relative w-full h-[250px]`}>
                  <Image
                    src={member.imgUrl}
                    alt={member.name}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover"
                  />
                </div>
                <div className={styles.info}>
                  <h4 className="text-base font-bold text-[#051937] mb-1">{member.name}</h4>
                  <span className={styles.role}>{member.role}</span>
                  <p className={styles.bio}>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

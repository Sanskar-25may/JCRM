'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './ourteam.module.css';

interface TeamMember {
  id: string;
  name: string;
  department: string;
  city: string;
  experience: string;
  skills: string[];
  imgUrl: string;
  bio: string;
  linkedin?: string;
}

export default function OurTeam() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchCriterion, setSearchCriterion] = useState<'all' | 'name' | 'city' | 'skills' | 'experience' | 'department'>('all');
  const [selectedDept, setSelectedDept] = useState('All');
  const [activeMember, setActiveMember] = useState<TeamMember | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Lock body scroll when member modal is open
  useEffect(() => {
    if (!activeMember) return;
    const origOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = origOverflow;
    };
  }, [activeMember]);

  const teamMembers: TeamMember[] = [
    {
      id: 'm-1',
      name: 'Nisha Kumari',
      department: 'Other',
      city: 'Delhi',
      experience: '2 Years',
      skills: ['Operations', 'Project Coordination', 'Agile'],
      imgUrl: 'https://res.cloudinary.com/dcd2rjd1x/image/upload/v1782721421/jcrm/profile/xwi5bw1s4xsnnt1uttf0.jpg',
      bio: 'Nisha manages cross-departmental operations and project workflow alignment at JCRM Technologies.',
      linkedin: 'https://linkedin.com',
    },
    {
      id: 'm-2',
      name: 'Yamini',
      department: 'Sales & Marketing',
      city: 'Noida',
      experience: '3 Years',
      skills: ['Enterprise Sales', 'CRM Systems', 'Lead Generation'],
      imgUrl: 'https://res.cloudinary.com/dcd2rjd1x/image/upload/v1782722321/jcrm/profile/lfqcp7b7ersuto8ird3m.jpg',
      bio: 'Yamini specializes in enterprise client acquisition and strategic marketing for JCRM ERP solutions.',
      linkedin: 'https://linkedin.com',
    },
    {
      id: 'm-3',
      name: 'Prajwal S R',
      department: 'Backend Developer',
      city: 'Bengaluru',
      experience: '4 Years',
      skills: ['Node.js', 'Python', 'PostgreSQL', 'REST API'],
      imgUrl: 'https://res.cloudinary.com/dcd2rjd1x/image/upload/v1779995273/jcrm/profile/gcy2wmbjaiscaqyajc0q.jpg',
      bio: 'Prajwal crafts scalable backend services, microservices, and database architecture for enterprise ERP clients.',
      linkedin: 'https://linkedin.com',
    },
    {
      id: 'm-4',
      name: 'Priyanka Srivastava',
      department: 'Human Resource',
      city: 'Lucknow',
      experience: '5 Years',
      skills: ['Talent Acquisition', 'Placement Assistance', 'HR Policy'],
      imgUrl: 'https://res.cloudinary.com/dcd2rjd1x/image/upload/v1783926278/jcrm/profile/wujkoqgrbnaxd3xteoca.jpg',
      bio: 'Priyanka leads our HR operations and placement assistance network, placing talent in top companies.',
      linkedin: 'https://linkedin.com',
    },
    {
      id: 'm-5',
      name: 'Shwati Singh',
      department: 'DevOps Engineer',
      city: 'Gurugram',
      experience: '3 Years',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
      imgUrl: 'https://jcrm.in/uploads/profile/1770543699_858dc4b8834b55529273.jpeg',
      bio: 'Shwati optimizes cloud deployment pipelines, container orchestration, and server reliability.',
      linkedin: 'https://linkedin.com',
    },
    {
      id: 'm-6',
      name: 'Satyam Upadhyay',
      department: 'Full Stack Engineer',
      city: 'Varanasi',
      experience: '4 Years',
      skills: ['React', 'Next.js', 'TypeScript', 'Node.js'],
      imgUrl: 'https://jcrm.in/uploads/profile/1779200699_343fb3c993abc88328a5.jpeg',
      bio: 'Satyam builds modern web applications and frontend dashboards with high performance UI.',
      linkedin: 'https://linkedin.com',
    },
    {
      id: 'm-7',
      name: 'Adityaraj Dwivedi',
      department: 'AI & ML Specialist',
      city: 'Kanpur',
      experience: '3 Years',
      skills: ['Python', 'PyTorch', 'FastAPI', 'MLOps'],
      imgUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      bio: 'Adityaraj develops machine learning models and predictive analytics engines integrated into JCRM software.',
      linkedin: 'https://linkedin.com',
    },
    {
      id: 'm-8',
      name: 'Vanshika Srivastava',
      department: 'UI/UX Designer',
      city: 'Delhi NCR',
      experience: '2 Years',
      skills: ['Figma', 'Glassmorphism', 'Design Systems', 'User Research'],
      imgUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80',
      bio: 'Vanshika designs intuitive, modern glassmorphic interfaces and user journeys across JCRM products.',
      linkedin: 'https://linkedin.com',
    },
  ];

  const departments = [
    'All',
    'Sales & Marketing',
    'Backend Developer',
    'Human Resource',
    'DevOps Engineer',
    'Full Stack Engineer',
    'AI & ML Specialist',
    'UI/UX Designer',
    'Other',
  ];

  // Smart Search & Filter Logic based on selected search criterion
  const filteredMembers = teamMembers.filter((m) => {
    // 1. Department Chip Check
    if (selectedDept !== 'All' && m.department.toLowerCase() !== selectedDept.toLowerCase()) {
      return false;
    }

    // 2. Query Check
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase().trim();

    if (searchCriterion === 'name') return m.name.toLowerCase().includes(q);
    if (searchCriterion === 'city') return m.city.toLowerCase().includes(q);
    if (searchCriterion === 'skills') return m.skills.some((s) => s.toLowerCase().includes(q));
    if (searchCriterion === 'experience') return m.experience.toLowerCase().includes(q);
    if (searchCriterion === 'department') return m.department.toLowerCase().includes(q);

    // Default 'all' - Smart Universal Search across all fields
    return (
      m.name.toLowerCase().includes(q) ||
      m.city.toLowerCase().includes(q) ||
      m.department.toLowerCase().includes(q) ||
      m.experience.toLowerCase().includes(q) ||
      m.skills.some((s) => s.toLowerCase().includes(q))
    );
  });

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        {/* Signature Glassmorphism Outer Pane Matching Homepage */}
        <div className={styles.glassPane}>
          {/* Header */}
          <div className={styles.header}>
            <h1 className={styles.title}>
              Our Dedicated <span className={styles.titleHighlight}>Team</span>
            </h1>
            <p className={styles.subtitle}>
              Meet the talented professionals, software engineers, sales leaders, and HR specialists driving innovation at JCRM.
            </p>
          </div>

          {/* Smart Universal Search Controls Bar */}
          <div className={styles.searchControlsBox}>
            <div className={styles.searchBarRow}>
              {/* Single Glass Input */}
              <div className={styles.searchInputWrapper}>
                <i className="fa-solid fa-magnifying-glass" />
                <input
                  type="text"
                  placeholder={`Search by ${searchCriterion === 'all' ? 'Name, City, Skills, Role...' : searchCriterion}...`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={styles.searchInput}
                />
              </div>

              {/* Criterion Switcher Toggle */}
              <div className={styles.criterionToggle}>
                <span className={styles.criterionLabel}>
                  <i className="fa-solid fa-filter me-1" /> Search By:
                </span>
                <select
                  value={searchCriterion}
                  onChange={(e) => setSearchCriterion(e.target.value as any)}
                  className={styles.criterionSelect}
                >
                  <option value="all">All Fields (Universal)</option>
                  <option value="name">Name</option>
                  <option value="city">City</option>
                  <option value="skills">Skills</option>
                  <option value="experience">Experience</option>
                  <option value="department">Department (Role)</option>
                </select>
              </div>
            </div>

            {/* Department Quick Filter Chips */}
            <div className={styles.deptChipsRow}>
              {departments.map((dept) => (
                <button
                  key={dept}
                  className={`${styles.deptChip} ${selectedDept === dept ? styles.activeDeptChip : ''}`}
                  onClick={() => setSelectedDept(dept)}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Results Summary */}
          <div className={styles.resultsSummary}>
            Showing <span className={styles.highlightCount}>{filteredMembers.length}</span> team members
          </div>

          {/* 4-Column Team Member Cards Grid (Matching User Screenshot Layout) */}
          <div className={styles.grid}>
            {filteredMembers.map((member) => (
              <div key={member.id} className={styles.card}>
                {/* Photo Frame Container */}
                <div className={styles.imgFrame}>
                  <img
                    src={member.imgUrl}
                    alt={member.name}
                    className={styles.profileImg}
                    onError={(e) => {
                      e.currentTarget.src =
                        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80';
                    }}
                  />
                </div>

                {/* Role Badge matching screenshot */}
                <div className={styles.deptBadge}>
                  • {member.department}
                </div>

                {/* Name */}
                <h3 className={styles.memberName}>{member.name}</h3>

                {/* Profile Button */}
                <button
                  type="button"
                  className={styles.profileBtn}
                  onClick={() => setActiveMember(member)}
                >
                  Profile
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Member Profile Modal Portal */}
      {activeMember &&
        isMounted &&
        createPortal(
          <div className={styles.modalBackdrop} onClick={() => setActiveMember(null)}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button
                className={styles.closeModalBtn}
                onClick={() => setActiveMember(null)}
                aria-label="Close profile modal"
              >
                <i className="fa-solid fa-xmark" />
              </button>

              <img src={activeMember.imgUrl} alt={activeMember.name} className={styles.modalPhoto} />

              <h2 className={styles.modalName}>{activeMember.name}</h2>
              <div className={styles.modalRole}>{activeMember.department}</div>

              <div className={styles.metaGrid}>
                <div className={styles.metaCard}>
                  <span className={styles.metaLabel}>City</span>
                  <span className={styles.metaVal}>{activeMember.city}</span>
                </div>
                <div className={styles.metaCard}>
                  <span className={styles.metaLabel}>Experience</span>
                  <span className={styles.metaVal}>{activeMember.experience}</span>
                </div>
              </div>

              <div className={styles.skillsContainer}>
                {activeMember.skills.map((skill) => (
                  <span key={skill} className={styles.skillPill}>
                    {skill}
                  </span>
                ))}
              </div>

              <p className={styles.modalBio}>{activeMember.bio}</p>

              <div className={styles.modalSocials}>
                {activeMember.linkedin && (
                  <a
                    href={activeMember.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialBtn}
                  >
                    <i className="fa-brands fa-linkedin" />
                    <span>LinkedIn Profile</span>
                  </a>
                )}
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}

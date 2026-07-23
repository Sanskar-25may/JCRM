'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './ourteam.module.css';

interface TeamMember {
  id: string;
  name: string;
  department: string;
  phoneMasked: string;
  emailMasked: string;
  city: string;
  state: string;
  education: string;
  college: string;
  experience: string;
  skills: string;
  imgUrl: string;
  bio: string;
}

export default function OurTeam() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchCriterion, setSearchCriterion] = useState<
    'all' | 'name' | 'city' | 'skills' | 'experience' | 'department'
  >('all');
  const [selectedDept, setSelectedDept] = useState('All');
  const [activeMember, setActiveMember] = useState<TeamMember | null>(null);

  // Smart Scheduling Hire Modal State
  const [hireCandidate, setHireCandidate] = useState<TeamMember | null>(null);
  const [scheduleForm, setScheduleForm] = useState({
    name: '',
    mobile: '',
    email: '',
    hiringType: 'Select',
    interviewDate: '',
    timeSlot: 'Select',
  });
  const [scheduleSubmitted, setScheduleSubmitted] = useState(false);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Lock body scroll when either profile modal or schedule modal is open
  useEffect(() => {
    if (!activeMember && !hireCandidate) return;
    const origOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = origOverflow;
    };
  }, [activeMember, hireCandidate]);

  const handleScheduleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!hireCandidate) return;

    // Formatted WhatsApp message for JCRM Hiring Desk
    const textMsg = `Hello JCRM Technologies! I would like to hire/interview candidate: ${hireCandidate.name} (${hireCandidate.department}).%0A%0AClient Details:%0A- Name: ${scheduleForm.name}%0A- Mobile: ${scheduleForm.mobile}%0A- Email: ${scheduleForm.email}%0A- Hiring Type: ${scheduleForm.hiringType}%0A- Proposed Date: ${scheduleForm.interviewDate}%0A- Time Slot: ${scheduleForm.timeSlot}`;

    // Open WhatsApp Web/App directly
    window.open(`https://wa.me/918310531309?text=${textMsg}`, '_blank');
    setScheduleSubmitted(true);
  };

  const teamMembers: TeamMember[] = [
    {
      id: 'm-1',
      name: 'Nisha Kumari',
      department: 'Other',
      phoneMasked: 'xxxxxx9748',
      emailMasked: 'byxxxxxxxxxx@gmail.com',
      city: 'Bhabhua',
      state: 'Bihar',
      education: 'Physics',
      college: 'G.B.college',
      experience: 'Fresher',
      skills: 'No skills',
      imgUrl: 'https://res.cloudinary.com/dcd2rjd1x/image/upload/v1782721421/jcrm/profile/xwi5bw1s4xsnnt1uttf0.jpg',
      bio: 'I studied at araa university.',
    },
    {
      id: 'm-2',
      name: 'Yamini',
      department: 'Sales & Marketing',
      phoneMasked: 'xxxxxx2805',
      emailMasked: 'doxxxxxxxxxx@gmail.com',
      city: 'South West Delhi',
      state: 'Delhi',
      education: 'Sociology',
      college: 'Miranda house university',
      experience: '1–3 Years',
      skills: 'Teaching, B2B Sales, Lead Generation, Client Communication, Cold Calling, Sociology, MS Office',
      imgUrl: 'https://res.cloudinary.com/dcd2rjd1x/image/upload/v1782722321/jcrm/profile/lfqcp7b7ersuto8ird3m.jpg',
      bio: "I have around one year of experience in B2B sales and business development, including lead generation and client communication. I hold a Bachelor's degree from Motilal Nehru College, Delhi University, and I am currently pursuing my Master's in Sociology (MSO) from IGNOU. I am hardworking, a quick learner, and comfortable working in both teaching and sales oriented roles.",
    },
    {
      id: 'm-3',
      name: 'Chahat Bajaj',
      department: 'Sales & Marketing',
      phoneMasked: 'xxxxxx6270',
      emailMasked: 'baxxxxxxxxxx@gmail.com',
      city: 'Delhi NCR',
      state: 'Delhi',
      education: 'Business Administration',
      college: 'Delhi University',
      experience: '1–3 Years',
      skills: 'Sales & Business Development * CRM Management * Lead Generation * Client Relationship Management * Customer Support * Communication Skills * MS Excel * Basic Forex & Algorithmic Trading Knowledge',
      imgUrl: 'https://res.cloudinary.com/dcd2rjd1x/image/upload/v1779995273/jcrm/profile/gcy2wmbjaiscaqyajc0q.jpg',
      bio: 'I have worked in sales and genuinely enjoy communicating with people and building strong customer relationships. I am a quick learner, confident, and goal-oriented person who likes taking on new challenges. I am currently looking for a sales opportunity where I can apply my experience, improve my skills, and grow with the organization while delivering the best results.',
    },
    {
      id: 'm-4',
      name: 'Prajwal S R',
      department: 'Backend Developer',
      phoneMasked: 'xxxxxx4412',
      emailMasked: 'prxxxxxxxxxx@gmail.com',
      city: 'Bengaluru',
      state: 'Karnataka',
      education: 'Computer Science & Engineering',
      college: 'VTU Technological University',
      experience: '3–5 Years',
      skills: 'Node.js, Express.js, Python, PostgreSQL, Microservices, REST APIs, Redis, Docker, System Design',
      imgUrl: 'https://res.cloudinary.com/dcd2rjd1x/image/upload/v1783926278/jcrm/profile/wujkoqgrbnaxd3xteoca.jpg',
      bio: 'Experienced backend software developer specializing in scalable cloud architectures, high-concurrency database queries, and microservice APIs for enterprise ERP software suites.',
    },
    {
      id: 'm-5',
      name: 'Priyanka Srivastava',
      department: 'Human Resource',
      phoneMasked: 'xxxxxx1980',
      emailMasked: 'prxxxxxxxxxx@gmail.com',
      city: 'Lucknow',
      state: 'Uttar Pradesh',
      education: 'Human Resource Management (MBA)',
      college: 'Lucknow University',
      experience: '3–5 Years',
      skills: 'Talent Acquisition, Campus Recruitment, Employee Relations, Placement Cell Coordination, HR Auditing',
      imgUrl: 'https://jcrm.in/uploads/profile/1770543699_858dc4b8834b55529273.jpeg',
      bio: 'HR professional leading talent acquisition programs, corporate hiring partner tie-ups, and student placement assistance at JCRM Technologies.',
    },
    {
      id: 'm-6',
      name: 'Shwati Singh',
      department: 'DevOps Engineer',
      phoneMasked: 'xxxxxx8820',
      emailMasked: 'shxxxxxxxxxx@gmail.com',
      city: 'Gurugram',
      state: 'Haryana',
      education: 'Information Technology',
      college: 'MDU University',
      experience: '1–3 Years',
      skills: 'AWS Cloud Services, Docker Containerization, Kubernetes Pod Orchestration, CI/CD GitHub Actions, Terraform',
      imgUrl: 'https://jcrm.in/uploads/profile/1779200699_343fb3c993abc88328a5.jpeg',
      bio: 'Cloud DevOps engineer experienced in automated integration pipelines, server hardening, infrastructure as code, and cluster reliability.',
    },
    {
      id: 'm-7',
      name: 'Satyam Upadhyay',
      department: 'Full Stack Engineer',
      phoneMasked: 'xxxxxx5193',
      emailMasked: 'saxxxxxxxxxx@gmail.com',
      city: 'Varanasi',
      state: 'Uttar Pradesh',
      education: 'Software Engineering',
      college: 'BHU Institute of Tech',
      experience: '3–5 Years',
      skills: 'React.js, Next.js App Router, TypeScript, Tailwind CSS, Node.js, GraphQL, PostgreSQL, Vercel',
      imgUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      bio: 'Full stack developer building high-performance web applications, responsive user interfaces, and serverless backend API integrations.',
    },
    {
      id: 'm-8',
      name: 'Vanshika Srivastava',
      department: 'UI/UX Designer',
      phoneMasked: 'xxxxxx3390',
      emailMasked: 'vaxxxxxxxxxx@gmail.com',
      city: 'Noida',
      state: 'Uttar Pradesh',
      education: 'Visual Communication & Design',
      college: 'Amity School of Design',
      experience: '1–3 Years',
      skills: 'Figma, Glassmorphic UI Systems, Prototyping, User Experience Mapping, Micro-animations, Wireframing',
      imgUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80',
      bio: 'UI/UX product designer creating elegant, glassmorphism design systems and interactive digital experiences for web apps.',
    },
  ];

  const departments = [
    'All',
    'Sales & Marketing',
    'Backend Developer',
    'Human Resource',
    'DevOps Engineer',
    'Full Stack Engineer',
    'UI/UX Designer',
    'Other',
  ];

  // Search & Filter Logic
  const filteredMembers = teamMembers.filter((m) => {
    if (selectedDept !== 'All' && m.department.toLowerCase() !== selectedDept.toLowerCase()) {
      return false;
    }

    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase().trim();

    if (searchCriterion === 'name') return m.name.toLowerCase().includes(q);
    if (searchCriterion === 'city') return m.city.toLowerCase().includes(q);
    if (searchCriterion === 'skills') return m.skills.toLowerCase().includes(q);
    if (searchCriterion === 'experience') return m.experience.toLowerCase().includes(q);
    if (searchCriterion === 'department') return m.department.toLowerCase().includes(q);

    return (
      m.name.toLowerCase().includes(q) ||
      m.city.toLowerCase().includes(q) ||
      m.department.toLowerCase().includes(q) ||
      m.experience.toLowerCase().includes(q) ||
      m.skills.toLowerCase().includes(q)
    );
  });

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        {/* Signature Glassmorphism Outer Section Pane */}
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

          {/* 4-Column Team Member Cards Grid */}
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

      {/* 1. Member Detail Profile Modal Portal */}
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

              {/* Left Column: Photo & Encrypted Contact Box */}
              <div className={styles.modalLeftCol}>
                <div className={styles.modalPhotoFrame}>
                  <img
                    src={activeMember.imgUrl}
                    alt={activeMember.name}
                    className={styles.modalPhoto}
                  />
                </div>

                <div className={styles.modalDeptBadge}>{activeMember.department}</div>
                <h2 className={styles.modalNameTitle}>
                  <span>{activeMember.name}</span>
                  <i className={`fa-solid fa-circle-check ${styles.verifiedCheck}`} title="Verified Member" />
                </h2>

                {/* Encrypted Contact Details Table */}
                <div className={styles.encryptedContactTable}>
                  <div className={styles.contactRow}>
                    <span className={styles.contactLabel}>Phone:</span>
                    <span className={styles.contactValEncrypted}>{activeMember.phoneMasked}</span>
                  </div>
                  <div className={styles.contactRow}>
                    <span className={styles.contactLabel}>Email:</span>
                    <span className={styles.contactValEncrypted}>{activeMember.emailMasked}</span>
                  </div>
                  <div className={styles.contactRow}>
                    <span className={styles.contactLabel}>City:</span>
                    <span className={styles.contactValEncrypted}>{activeMember.city}</span>
                  </div>
                  <div className={styles.contactRow}>
                    <span className={styles.contactLabel}>State:</span>
                    <span className={styles.contactValEncrypted}>{activeMember.state}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Personal Info & Hire Now */}
              <div className={styles.modalRightCol}>
                <h3 className={styles.personalInfoTitle}>Personal Info</h3>
                <p className={styles.personalBioText}>{activeMember.bio}</p>

                <hr className={styles.divider} />

                <div className={styles.detailsTable}>
                  <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Education:</span>
                    <span className={styles.detailVal}>{activeMember.education}</span>
                  </div>
                  <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>College:</span>
                    <span className={styles.detailVal}>{activeMember.college}</span>
                  </div>
                  <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Experience:</span>
                    <span className={styles.detailVal}>{activeMember.experience}</span>
                  </div>
                  <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Skills:</span>
                    <span className={styles.detailVal}>{activeMember.skills}</span>
                  </div>
                </div>

                {/* Red Hire Now CTA Button - Opens Scheduling Modal Directly */}
                <button
                  type="button"
                  className={styles.hireNowBtn}
                  onClick={() => {
                    const candidate = activeMember;
                    setActiveMember(null);
                    setHireCandidate(candidate);
                    setScheduleSubmitted(false);
                  }}
                >
                  Hire Now
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}

      {/* 2. Elevated Glassmorphism Scheduling Hire Form Modal */}
      {hireCandidate &&
        isMounted &&
        createPortal(
          <div className={styles.modalBackdrop} onClick={() => setHireCandidate(null)}>
            <div className={styles.scheduleModalContent} onClick={(e) => e.stopPropagation()}>
              {/* Royal Blue Gradient Header Bar */}
              <div className={styles.scheduleHeader}>
                <h3 className={styles.scheduleTitle}>
                  <i className="fa-regular fa-calendar-check" />
                  <span>Scheduling With {hireCandidate.name}</span>
                </h3>
                <button
                  className={styles.scheduleCloseBtn}
                  onClick={() => setHireCandidate(null)}
                  aria-label="Close scheduling modal"
                >
                  <i className="fa-solid fa-xmark" />
                </button>
              </div>

              {/* Form Body */}
              <div className={styles.scheduleFormBody}>
                {!scheduleSubmitted ? (
                  <form onSubmit={handleScheduleSubmit}>
                    <div className={styles.scheduleFormGrid}>
                      <div className={styles.scheduleFormGroup}>
                        <label className={styles.scheduleLabel}>Name</label>
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          value={scheduleForm.name}
                          onChange={(e) =>
                            setScheduleForm((prev) => ({ ...prev, name: e.target.value }))
                          }
                          className={styles.scheduleInput}
                        />
                      </div>

                      <div className={styles.scheduleFormGroup}>
                        <label className={styles.scheduleLabel}>Mobile</label>
                        <input
                          type="tel"
                          required
                          placeholder="Your Mobile Number"
                          value={scheduleForm.mobile}
                          onChange={(e) =>
                            setScheduleForm((prev) => ({ ...prev, mobile: e.target.value }))
                          }
                          className={styles.scheduleInput}
                        />
                      </div>

                      <div className={styles.scheduleFormGroup}>
                        <label className={styles.scheduleLabel}>Email</label>
                        <input
                          type="email"
                          required
                          placeholder="Your Work Email"
                          value={scheduleForm.email}
                          onChange={(e) =>
                            setScheduleForm((prev) => ({ ...prev, email: e.target.value }))
                          }
                          className={styles.scheduleInput}
                        />
                      </div>

                      <div className={styles.scheduleFormGroup}>
                        <label className={styles.scheduleLabel}>Hiring Type</label>
                        <select
                          value={scheduleForm.hiringType}
                          onChange={(e) =>
                            setScheduleForm((prev) => ({ ...prev, hiringType: e.target.value }))
                          }
                          className={styles.scheduleSelect}
                        >
                          <option value="Select">Select</option>
                          <option value="Hourly">Hourly</option>
                          <option value="Weekly">Weekly</option>
                          <option value="Monthly">Monthly</option>
                          <option value="Full Time">Full Time</option>
                        </select>
                      </div>

                      <div className={styles.scheduleFormGroup}>
                        <label className={styles.scheduleLabel}>Interview Date</label>
                        <input
                          type="date"
                          required
                          value={scheduleForm.interviewDate}
                          onChange={(e) =>
                            setScheduleForm((prev) => ({ ...prev, interviewDate: e.target.value }))
                          }
                          className={styles.scheduleInput}
                        />
                      </div>

                      <div className={styles.scheduleFormGroup}>
                        <label className={styles.scheduleLabel}>Interview Time Slot</label>
                        <select
                          value={scheduleForm.timeSlot}
                          onChange={(e) =>
                            setScheduleForm((prev) => ({ ...prev, timeSlot: e.target.value }))
                          }
                          className={styles.scheduleSelect}
                        >
                          <option value="Select">Select</option>
                          <option value="6:00 PM – 6:30 PM">6:00 PM – 6:30 PM</option>
                          <option value="6:30 PM – 7:00 PM">6:30 PM – 7:00 PM</option>
                          <option value="7:00 PM – 7:30 PM">7:00 PM – 7:30 PM</option>
                          <option value="7:30 PM – 8:00 PM">7:30 PM – 8:00 PM</option>
                          <option value="8:00 PM – 8:30 PM">8:00 PM – 8:30 PM</option>
                          <option value="8:30 PM – 9:00 PM">8:30 PM – 9:00 PM</option>
                        </select>
                      </div>
                    </div>

                    <div className={styles.scheduleActionRow}>
                      <button type="submit" className={styles.whatsappBtn}>
                        <i className="fa-brands fa-whatsapp" />
                        <span>Send to WhatsApp</span>
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className={styles.scheduleSuccess}>
                    <i className={`fa-solid fa-circle-check ${styles.scheduleSuccessIcon}`} />
                    <h4 className={styles.scheduleSuccessTitle}>
                      Interview Request Submitted!
                    </h4>
                    <p className={styles.scheduleSuccessText}>
                      Your interview booking for <strong>{hireCandidate.name}</strong> on{' '}
                      <strong>{scheduleForm.interviewDate}</strong> ({scheduleForm.timeSlot}) has been sent to JCRM Hiring Desk via WhatsApp. Our team will verify and confirm your slot.
                    </p>
                    <button
                      type="button"
                      className={styles.whatsappBtn}
                      onClick={() => setHireCandidate(null)}
                    >
                      Done
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}

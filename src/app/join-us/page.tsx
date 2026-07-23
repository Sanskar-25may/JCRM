'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { locationData } from './locationData';
import styles from './joinus.module.css';

export default function JoinUs() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    dob: '',
    country: '',
    state: '',
    city: '',
    pinCode: '',
    department: '',
    skills: '',
    college: '',
    courseMajor: '',
    experienceLevel: 'Student (Intern)',
    aboutYourself: '',
    agreeTerms: false,
  });

  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [photoError, setPhotoError] = useState<string | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Departments list matching all JCRM courses
  const departments = [
    'Frontend Development',
    'Backend Development',
    'Full Stack Development',
    'AI & Machine Learning',
    'Data Science',
    'Cyber Security',
    'Forensic Science',
    'Cloud & DevOps',
    'QA Automation',
    'Digital Marketing',
    'Gen AI',
    'Personality Development',
  ];

  // Countries list
  const countries = Object.keys(locationData);

  // States list based on selected Country
  const states = formData.country ? Object.keys(locationData[formData.country] || {}) : [];

  // Cities list based on selected State
  const cities =
    formData.country && formData.state
      ? locationData[formData.country]?.[formData.state] || []
      : [];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? (target as HTMLInputElement).checked : target.value;
    const name = target.name;

    // Reset interlinked dependent fields when parent location dropdown changes
    if (name === 'country') {
      setFormData((prev) => ({
        ...prev,
        country: value as string,
        state: '',
        city: '',
      }));
    } else if (name === 'state') {
      setFormData((prev) => ({
        ...prev,
        state: value as string,
        city: '',
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Photo Validation (Min 50KB size limit)
  const validateAndSetPhoto = (file: File) => {
    const minSizeBytes = 50 * 1024; // 50 KB
    const maxSizeBytes = 5 * 1024 * 1024; // 5 MB

    if (file.size < minSizeBytes) {
      setPhotoError('Photo size is too small. Please upload a photo of at least 50 KB.');
      setPhotoFile(null);
      setPhotoPreview(null);
      return;
    }

    if (file.size > maxSizeBytes) {
      setPhotoError('Photo size exceeds 5 MB. Please select a smaller image.');
      setPhotoFile(null);
      setPhotoPreview(null);
      return;
    }

    setPhotoError(null);
    setPhotoFile(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPhotoPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      validateAndSetPhoto(e.target.files[0]);
    }
  };

  // Drag & Drop Handlers
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith('image/')) {
        validateAndSetPhoto(file);
      } else {
        setPhotoError('Please drop a valid image file (JPG, PNG, WEBP).');
      }
    }
  };

  const handleRemovePhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPhotoFile(null);
    setPhotoPreview(null);
    setPhotoError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.agreeTerms) {
      alert('Please agree to the Terms & Conditions before submitting.');
      return;
    }

    // Simulate backend payload processing
    console.log('Submitted Application Data:', {
      ...formData,
      photoName: photoFile ? photoFile.name : null,
      photoSizeKb: photoFile ? (photoFile.size / 1024).toFixed(2) + ' KB' : null,
    });

    setIsSubmitted(true);
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        <div className={styles.formCard}>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className={styles.formGrid}>
              <div className={styles.formHeader}>
                <h1 className={styles.formTitle}>Talent Enrollment Form</h1>
                <p className={styles.formSubtitle}>
                  Fill in your details below to apply for JCRM internship, training programs, or career opportunities.
                </p>
              </div>

              {/* Row 1: Full Name & Phone Number */}
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="Enter full name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={styles.input}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={styles.input}
                  />
                </div>
              </div>

              {/* Row 2: Email Address & Date of Birth */}
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter email address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={styles.input}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Date of Birth</label>
                  <input
                    type="date"
                    name="dob"
                    required
                    value={formData.dob}
                    onChange={handleInputChange}
                    className={styles.input}
                  />
                </div>
              </div>

              {/* Row 3: Country & State */}
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Country</label>
                  <select
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleInputChange}
                    className={styles.select}
                  >
                    <option value="">Select Country</option>
                    {countries.map((cntry) => (
                      <option key={cntry} value={cntry}>
                        {cntry}
                      </option>
                    ))}
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>State</label>
                  <select
                    name="state"
                    required
                    disabled={!formData.country}
                    value={formData.state}
                    onChange={handleInputChange}
                    className={styles.select}
                  >
                    <option value="">Select State</option>
                    {states.map((st) => (
                      <option key={st} value={st}>
                        {st}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 4: City & Pin Code */}
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>City</label>
                  <select
                    name="city"
                    required
                    disabled={!formData.state}
                    value={formData.city}
                    onChange={handleInputChange}
                    className={styles.select}
                  >
                    <option value="">Select City</option>
                    {cities.map((cty) => (
                      <option key={cty} value={cty}>
                        {cty}
                      </option>
                    ))}
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Pin Code</label>
                  <input
                    type="text"
                    name="pinCode"
                    required
                    placeholder="Enter pin code"
                    value={formData.pinCode}
                    onChange={handleInputChange}
                    className={styles.input}
                  />
                </div>
              </div>

              {/* Row 5: Department & Skills */}
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Department</label>
                  <select
                    name="department"
                    required
                    value={formData.department}
                    onChange={handleInputChange}
                    className={styles.select}
                  >
                    <option value="">Select Department</option>
                    {departments.map((dept) => (
                      <option key={dept} value={dept}>
                        {dept}
                      </option>
                    ))}
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Skills</label>
                  <input
                    type="text"
                    name="skills"
                    placeholder="e.g. React, Node.js, Python, AWS"
                    value={formData.skills}
                    onChange={handleInputChange}
                    className={styles.input}
                  />
                </div>
              </div>

              {/* Row 6: College / University & Course / Major */}
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>College / University</label>
                  <input
                    type="text"
                    name="college"
                    placeholder="Enter college or university name"
                    value={formData.college}
                    onChange={handleInputChange}
                    className={styles.input}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Course / Major</label>
                  <input
                    type="text"
                    name="courseMajor"
                    placeholder="e.g. B.Tech Computer Science / MCA"
                    value={formData.courseMajor}
                    onChange={handleInputChange}
                    className={styles.input}
                  />
                </div>
              </div>

              {/* Row 7: Experience Level */}
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Experience Level</label>
                  <select
                    name="experienceLevel"
                    value={formData.experienceLevel}
                    onChange={handleInputChange}
                    className={styles.select}
                  >
                    <option value="Student (Intern)">Student (Intern)</option>
                    <option value="Fresh Graduate">Fresh Graduate</option>
                    <option value="1-2 Years Experience">1-2 Years Experience</option>
                    <option value="3+ Years Experience">3+ Years Experience</option>
                  </select>
                </div>
              </div>

              <hr className={styles.divider} />

              {/* Row 8: Drag & Drop Profile Photo */}
              <div className={styles.formGroupFull}>
                <label className={styles.label}>Profile Photo</label>
                <input
                  type="file"
                  ref={fileInputRef}
                  accept="image/*"
                  onChange={handleFileSelect}
                  className={styles.hiddenFileInput}
                />

                {!photoFile ? (
                  <div
                    className={`${styles.photoDropZone} ${isDragOver ? styles.dragOver : ''}`}
                    onClick={() => fileInputRef.current?.click()}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                  >
                    <i className={`fa-solid fa-cloud-arrow-up ${styles.photoDropIcon}`} />
                    <span className={styles.photoDropText}>
                      Drag & Drop your profile photo here or click to browse
                    </span>
                    <span className={styles.photoDropSub}>
                      Minimum size: 50 KB • Format: JPG, PNG, WEBP
                    </span>
                  </div>
                ) : (
                  <div className={styles.previewContainer}>
                    {photoPreview && (
                      <img
                        src={photoPreview}
                        alt="Profile preview"
                        className={styles.previewThumb}
                      />
                    )}
                    <div className={styles.previewInfo}>
                      <span className={styles.previewName}>{photoFile.name}</span>
                      <span className={styles.previewSize}>
                        {(photoFile.size / 1024).toFixed(1)} KB
                      </span>
                    </div>
                    <button
                      type="button"
                      className={styles.removePhotoBtn}
                      onClick={handleRemovePhoto}
                      title="Remove photo"
                    >
                      <i className="fa-solid fa-xmark" />
                    </button>
                  </div>
                )}

                {photoError && <p className={styles.errorMsg}>{photoError}</p>}
              </div>

              {/* Row 9: About Yourself */}
              <div className={styles.formGroupFull}>
                <label className={styles.label}>About Yourself</label>
                <textarea
                  name="aboutYourself"
                  rows={4}
                  placeholder="Briefly introduce yourself, your career goals, and why you want to join JCRM Technologies..."
                  value={formData.aboutYourself}
                  onChange={handleInputChange}
                  className={styles.textarea}
                />
              </div>

              {/* Row 10: Terms Checkbox */}
              <div className={styles.checkboxGroup}>
                <input
                  type="checkbox"
                  id="agreeTerms"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleInputChange}
                  className={styles.checkbox}
                  required
                />
                <label htmlFor="agreeTerms" className={styles.termsLabel}>
                  I agree to the{' '}
                  <Link href="/terms" className={styles.termsLink} target="_blank">
                    Terms &amp; Conditions
                  </Link>
                </label>
              </div>

              {/* Row 11: Submit Button */}
              <div className={styles.submitBtnBox}>
                <button type="submit" className={styles.submitBtn}>
                  <i className="fa-solid fa-paper-plane" />
                  <span>Submit Application</span>
                </button>
              </div>
            </form>
          ) : (
            <div className={styles.successCard}>
              <i className={`fa-solid fa-circle-check ${styles.successIcon}`} />
              <h2 className={styles.successTitle}>Application Submitted Successfully!</h2>
              <p className={styles.successText}>
                Thank you <strong>{formData.fullName}</strong> for applying to JCRM Technologies for the{' '}
                <strong>{formData.department}</strong> department. Our recruitment coordinators will review your details and contact you via email at <strong>{formData.email}</strong> or phone within 1-3 working days.
              </p>
              <button
                className={styles.resetBtn}
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    fullName: '',
                    phone: '',
                    email: '',
                    dob: '',
                    country: '',
                    state: '',
                    city: '',
                    pinCode: '',
                    department: '',
                    skills: '',
                    college: '',
                    courseMajor: '',
                    experienceLevel: 'Student (Intern)',
                    aboutYourself: '',
                    agreeTerms: false,
                  });
                  setPhotoFile(null);
                  setPhotoPreview(null);
                }}
              >
                Submit Another Application
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

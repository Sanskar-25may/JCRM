'use client';

import React from 'react';
import AnimatedCounter from '../shared/AnimatedCounter';

interface SiteStatsData {
  erpDeployments?: number;
  industryModules?: number;
  clientSatisfaction?: number;
  supportHours?: number;
}

interface StatsCounterProps {
  stats?: SiteStatsData;
}

export default function StatsCounter({ stats }: StatsCounterProps) {
  const deployments = stats?.erpDeployments ?? 50;
  const modules = stats?.industryModules ?? 10;
  const satisfaction = stats?.clientSatisfaction ?? 98;
  const support = stats?.supportHours ?? 240;

  const statItems = [
    { value: deployments, label: 'ERP Deployments', suffix: '+' },
    { value: modules, label: 'Industry Modules', suffix: '+' },
    { value: satisfaction, label: 'Client Satisfaction', suffix: '%' },
    { value: support, label: 'Hours Support', suffix: '+' },
  ];

  return (
    <section className="py-12 border-y border-primary/5 bg-[#f8fafc]/30">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {statItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-extrabold text-[#0066ff] flex items-center justify-center">
                <AnimatedCounter value={item.value} suffix={item.suffix} />
              </span>
              <span className="text-xs md:text-sm font-semibold text-[#0a2e5c]/70 uppercase tracking-wider mt-1.5">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

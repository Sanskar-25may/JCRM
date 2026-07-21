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
    <section className="py-8">
      <div className="container-custom">
        <div className="glass p-10 md:p-12 shadow-xl shadow-primary/5 border border-slate-200/40 rounded-[28px] grid grid-cols-2 md:grid-cols-4 gap-8">
          {statItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-2">
              <span className="text-4xl md:text-5xl font-extrabold text-[#0066ff] flex items-center justify-center bg-gradient-to-r from-[#0066ff] to-[#38bdf8] bg-clip-text text-transparent heading-font">
                <AnimatedCounter value={item.value} suffix={item.suffix} />
              </span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

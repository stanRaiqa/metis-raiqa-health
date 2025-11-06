import React from 'react';

export default function PatientJoinLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="patient-join-layout">
      {/* No header */}
      <main>{children}</main>
      {/* No footer */}
    </div>
  );
} 
"use client";

import { useState, useEffect } from "react";
import React from "react";

interface SpecialTrack {
  title: string;
  program: string;
  number: number;
}

const SpecialTracks: SpecialTrack[] = [
  // Your SpecialTracks data here
];

const ProgramDetails: React.FC = () => {
  const [selectedProgram, setSelectedProgram] = useState<SpecialTrack>(
    SpecialTracks[0]
  );


  return (
    <div>{selectedProgram ? selectedProgram.title : "No program selected"}</div>
  );
};

export default ProgramDetails;

// /app/campus/page.tsx

import React from "react";
import CampusReimagined from "./CampusReimagined";

const CampusPage: React.FC = () => {
  const campusAreas = [
    { 
      name: "Canteen", //up
      previewImage: "/canteen-preview.png", 
      fullImage: "/canteen-full.png" 
    },
    { 
      name: "Recharge Area", //down
      previewImage: "/recharge-area-preview.png", 
      fullImage: "/recharge-area-full.png" 
    },
    { 
      name: "Eco-Stewardship Hub", //left
      previewImage: "/eco-stewardship-hub-preview.png", 
      fullImage: "/eco-stewardship-hub-full.png" 
    },
    { 
      name: "Student Lounge", //right
      previewImage: "/student-lounge-preview.png", 
      fullImage: "/student-lounge-full.png" 
    } 
  ];

  return (
    <div className={'flex pt-16'}>
      <CampusReimagined areas={campusAreas} />
    </div>
  );
};

export default CampusPage;

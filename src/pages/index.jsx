import React from "react";
import { useOutletContext } from "react-router-dom";
import Navbar from "components/Navbar/Index";

function Index() {
  const avatar =
    "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";

  const dataOS = [
    {
      title: "Kredit Konsumer",
      date: "12/Mei/2023",
      os: "23,938",
      gs: "20,900",
      percentage: 200.01,
      color: "cardInfo",
    },
    {
      title: "Kredit Ritel",
      date: "12/Mei/2023",
      os: "3,938",
      gs: "2,900",
      percentage: 190.01,
      color: "cardWarning",
    },
    {
      title: "Kredit KPR & KKB",
      date: "12/Mei/2023",
      os: "190,938",
      gs: "192,900",
      percentage: 99.01,
      color: "cardDanger",
    },
    {
      title: "Kredit UMKM",
      date: "12/Mei/2023",
      os: "2,938",
      gs: "2,900",
      percentage: 100.01,
      color: "cardSuccess",
    },
    {
      title: "Kredit Komersial",
      date: "12/Mei/2023",
      os: "23,938",
      gs: "20,900",
      percentage: 200.01,
      color: "cardLime",
    },
    {
      title: "Kredit BPR & LKM",
      date: "12/Mei/2023",
      os: "3,938",
      gs: "10,900",
      percentage: 210.01,
      color: "cardDanger",
    },
  ];

  const [sidebarToggle] = useOutletContext();
  return (
      <main className="h-full">
        <Navbar toggle={sidebarToggle} />

        {/* Main Content */}
        <div className="mainCard">
          <p className="mt-2">This is the main page!</p>
        </div>
      </main>
  );
}

export default Index;
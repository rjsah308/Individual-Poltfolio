import React from 'react';
import CompanyCard from '../../components/CompanyCard/CompanyCard';
import Profile from "../../components/Profile/Profile";

export const metadata = {
  title: 'Portfolio - Projects',
  description: 'The projects page of my portfolio.',
}

const companies = [
  {
    name: "BlackJack",
    logo:"/poker.png",
    description: "Create a blackjack card game in Java",
    link: "https://github.com/rjsah308/BlackJack",
  },
  {
    name: "DessertShop",
    logo:"/DessertShop.png",
    description: "Implement a program to purchase items from a dessert shop and print a receipt.",
    link: "https://github.com/rjsah308/DesertShop",
  },
  {
    name: "DataStructure",
    logo:"/DataStructure.jpg",
    description: "Learn about data structure and understand algorithms in Java",
    link: "https://github.com/rjsah308/DesertShop",
  }
];

export default function Projects() {
  return (
    <main className="company-display">
      <Profile
        title="My College Projects"
        content="During my associate's degree at Ensign College, I was able to work on projects through various computer programs. Below are some of the programs I used throughout my college career."
      />
      {companies.map((company, index) => (
        <CompanyCard
          key={index}
          name={company.name}
          logo ={company.logo}
          description={company.description}
          link={company.link}
        />
      ))}
    </main>
  );
}

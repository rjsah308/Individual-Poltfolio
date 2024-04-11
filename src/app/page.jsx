import React from "react";
import ArticleCard from "../components/Article Card/ArticleCard.jsx";
import SkillsWidget from "../components/SkillsWidget/SkillsWidget";
import WorkWidget from "../components/WorkWidget/WorkWidget";
import Widget from "../components/Widget/Widget";
import Profile from "../components/Profile/Profile";

export const metadata = {
  title: "Portfolio",
  description: "Home page of my portfolio.",
};

const articles = [
  {
    date: "Nov 15, 2021",
    title: "Everything you need to know about React",
    content:
      "The ability to build stuff in React is one of the hottest skills to have today in software engineering. There is a lot of demand for React developers among startups as well as MNCs.",
    link: "https://medium.com/the-research-nest/everything-you-need-to-know-about-react-ab24da4275ea",
  },
  {
    date: "Sep 2, 2020",
    title: "The Missing Introduction to React",
    content:
      "React is the world’s most popular JavaScript framework, but it’s not cool because it’s popular. It’s popular because it’s cool. Most React introductions jump right into showing you examples of how to use React, and skip the “why”.",
    link: "https://medium.com/javascript-scene/the-missing-introduction-to-react-62837cb2fd76",
  },
];

const skillsData = {
  title: "Skills",
  content: "Here are my skills.",
  skills: [
    { name: "Java", proficiency: 100 },
    { name: "React", proficiency: 50 },
    { name: "JavaScript", proficiency: 80 },
  ],
};

export default function Home() {
  return (
    <div>
      <Profile
        title="Software Engineer"
        // content="As a software engineer, I thrive on innovation, problem-solving, and continuous learning. With a solid foundation in HTML, CSS, and JavaScript, I specialize in crafting dynamic and user-friendly web applications. My experience at Spotify and Microsoft has honed my skills in collaborating with cross-functional teams to deliver high-quality software solutions. As a father, I am driven by the desire to create a better world through technology, leaving a positive impact for future generations. As a believer, I find inspiration in the power of technology to connect people and transform lives. Let's embark on this journey of creation together."
      />
      <div className={"articles"}>
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            date={article.date}
            title={article.title}
            content={article.content}
            link={article.link}
          />
        ))}
      </div>
      <WorkWidget
        title="Work Experience"
        content="Here is a list of my work experiences."
        experiences={[
          {
            logo: "/Military.png",
            organization: "Military",
            jobTitle: "signal corpsman ",
            startYear: 2020,
            endYear: 2022,
          },
          {
            logo: "/Cloth.png",
            organization: "Refined 902",
            jobTitle: "Merchandiser",
            startYear: 2022,
            endYear: 2022,
          },
        ]}
      />
      <SkillsWidget {...skillsData} />
      <Widget
        title={"Stay up to date"}
        content={"Get notified when I publish something new, and unsubscribe at any time."}
      />
    </div>
  );
}

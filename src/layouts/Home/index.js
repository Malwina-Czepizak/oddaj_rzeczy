import React from 'react';
import HomeHeader from "./HomeHeader";
import HomeStatistics from "./HomeStatistics";
import HomeAbout from "./HomeAbout";
import HomeInstruction from "./HomeInstruction";
import HomeCollabsList from "./HomeCollabsList";
import ContactForm from "../../components/ContactForm";

function Home() {
    return (
        <div className="home__page">
            <HomeHeader />
            <HomeStatistics />
            <HomeInstruction />
            <HomeAbout />
            <HomeCollabsList />
            <ContactForm />
        </div>
    );
}

export default Home;
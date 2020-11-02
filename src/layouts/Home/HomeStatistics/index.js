import React from 'react';
import "./HomeStatistics.scss";

function HomeStatistics() {
    return (
        <summary className="home__statistics">
            <div className="home__statistics__container">
                <h2>10</h2>
                <h3>ODDANYCH WORKÓW</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
            <div className="home__statistics__container">
                <h2>5</h2>
                <h3>WSPARTYCH ORGANIZACJI</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
            <div className="home__statistics__container">
                <h2>7</h2>
                <h3>ZORGANIZOWANY ZBIÓREK</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
        </summary>
    );
}

export default HomeStatistics;
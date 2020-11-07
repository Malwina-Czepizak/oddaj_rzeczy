import React, {useEffect, useState} from 'react';
import "./HomeCollabsList.scss";
import decorator from "../../../assets/Decoration.svg";

function HomeCollabsList() {
    const [data, setData] = useState(false);
    const [dataName, setDataName] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:3000/collaboration`)
            .then(response => response.json())
            .then(response => {
                setData(response);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const handleClick = (index) => {
        setDataName(index);
    }

    return (
        <section name="collabs" className="home__collabs">
            <div className="home__collabs__text__container">
                <h2>Komu pomagamy?</h2>
                <img src={decorator} alt="decoration"/>
                <div className="home__collabs__btn__container">
                    <button onClick={()=>handleClick(0)}>Fundacjom</button>
                    <button onClick={()=>handleClick(1)}>Organizacjom pozarządowym</button>
                    <button onClick={()=>handleClick(2)}>Lokalnym zbiórkom</button>
                </div>
                {data &&
                <p>{data[dataName].desc}</p>
                }
            </div>
            <div className="home__collabs__organizations">
                 <ul>
                     {data &&
                     data[dataName].items.map((data, i) =>
                        <li key={i}>
                            <span>{data.header}</span>
                            <span>{data.subheader}</span>
                            <span>{data.desc}</span>
                        </li>)
                     }
                 </ul>
            </div>
        </section>
    );
}

export default HomeCollabsList;
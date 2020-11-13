import React, {useEffect, useState} from 'react';
import "./HomeCollabsList.scss";
import decorator from "../../../assets/Decoration.svg";

function HomeCollabsList() {
    const [data, setData] = useState(false);
    const [dataIndex, setDataIndex] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [paginationButtons, setPaginationButtons] = useState([]);
    const [showPaginationButtons, setShowPaginationButtons] = useState(false);
    const [currentData, setCurrentData] = useState(false);

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
        setDataIndex(index);
        setCurrentPage(1);
    }

    const handlePageClick = (e, i) => {
        setCurrentPage(i);
    }

    useEffect(() => {
        const dataPerPage = 3;
        const indexOfLast = currentPage * dataPerPage;
        const indexOfFirst = indexOfLast - dataPerPage;
        if (data) {
            setCurrentData(data[dataIndex].items.slice(indexOfFirst, indexOfLast));

            const pageNumbers = [];
            for (let i = 1; i <= Math.ceil(data[dataIndex].items.length/dataPerPage); i++) {
                pageNumbers.push(<li key={i} className="page" onClick={e => handlePageClick(e, i)}> {i} </li>);
            }
            setPaginationButtons(pageNumbers);
        }
    }, [data, currentPage, dataIndex]);

    useEffect(() => {
        if (paginationButtons.length === 1) {
            setShowPaginationButtons(false);
        } else {
            setShowPaginationButtons(true);
        }
    }, [dataIndex, paginationButtons]);

    return (
        <section name="collabs" className="home__collabs" id="collabs">
            <div className="home__collabs__text__container">
                <h2>Komu pomagamy?</h2>
                <img src={decorator} alt="decoration"/>
                <div className="home__collabs__btn__container">
                    <button onClick={() => handleClick(0)}>Fundacjom</button>
                    <button onClick={() => handleClick(1)}>Organizacjom pozarządowym</button>
                    <button onClick={() => handleClick(2)}>Lokalnym zbiórkom</button>
                </div>
                {data &&
                <p>{data[dataIndex].desc}</p>
                }
            </div>
            <div className="home__collabs__organizations">
                 <ul>
                     {currentData &&
                     currentData.map((data, i) =>
                        <li key={i} className="home__collabs__item">
                            <p className="home__collabs__name">
                                {data.header} <br />
                                <span className="home__collabs__subheader">{data.subheader}</span>
                            </p>
                            <p className="home__collabs__desc">{data.desc}</p>
                        </li>)
                     }
                 </ul>
                 <ul className="home__collabs__pages">
                     {showPaginationButtons &&
                     paginationButtons}
                 </ul>
            </div>
        </section>
    );
}

export default HomeCollabsList;
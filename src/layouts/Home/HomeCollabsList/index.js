import React, {useEffect, useState} from 'react';
import "./HomeCollabsList.scss";
import decorator from "../../../assets/Decoration.svg";

function HomeCollabsList() {
    const [data, setData] = useState(false);
    const [dataIndex, setDataIndex] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [paginationButtons, setPaginationButtons] = useState([]);
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
                pageNumbers.push(<li key={i} onClick={e => handlePageClick(e, i)}> {i} </li>);
            }
            setPaginationButtons(pageNumbers);
        }

    }, [data, currentPage, dataIndex]);


    return (
        <section name="collabs" className="home__collabs">
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
                        <li key={i}>
                            <span>{data.header}</span>
                            <span>{data.subheader}</span>
                            <span>{data.desc}</span>
                        </li>)
                     }
                 </ul>
                 <ul>
                     {paginationButtons}
                 </ul>
            </div>
        </section>
    );
}

export default HomeCollabsList;
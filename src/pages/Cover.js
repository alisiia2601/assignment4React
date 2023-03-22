import styles from "./Cover.module.css";
import {useState, useEffect} from "react";

const Cover = () => {

  const [planets, setPlanets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://swapi.dev/api/planets/?page=${currentPage}`);
      const data = await response.json();
      setPlanets(planets => [...planets, ...data.results]);
      setTotalPages(Math.ceil(data.count / 10));
    }

    fetchData();
  }, [currentPage]);

  const handlePrevPlanetsPage = () => {
    setCurrentPage(currentPage => Math.max(currentPage - 1, 1));
  };

  const handleNextPlanetsPage = () => {
    setCurrentPage(currentPage => Math.min(currentPage + 1, totalPages));
  };

  const handleFetchMore = () => {
    setCurrentPage(currentPage => currentPage + 1);
  };

  return (
    <div className={styles.cover}>
      <div className={styles.cardsAPI}>
      <div className={styles.cardscontainer}>
        <div className={styles.cards}>
          {planets.map(planet => (
            <div className={styles.card} key={planet.name}>
              <h2>{planet.name}</h2>
              <p>Population: {planet.population}</p>
              <p>Climate: {planet.climate}</p>
            </div>
          ))}
        </div>
      </div>
      
      {currentPage < totalPages && <button onClick={handleFetchMore}>Fetch More</button>}
      </div>
      
      
      
      <div className={styles.groupParent}>
        <img className={styles.groupChild} alt="" src="/group-288827.svg" />
        <div className={styles.symbolAc}>
          <div className={styles.symbolAc1}>AC</div>
        </div>
      </div>
      <div className={styles.groupContainer}>
        <img className={styles.groupItem} alt="" src="/group-2888271.svg" />
        <div className={styles.symbolAc}>
          <div className={styles.symbolAc1}>AC</div>
        </div>
      </div>
      <div className={styles.groupDiv}>
        <img className={styles.groupItem} alt="" src="/group-2888272.svg" />
        <div className={styles.symbolAc}>
          <div className={styles.symbolAc1}>AC</div>
        </div>
      </div>
      <div className={styles.groupParent1}>
        <img className={styles.groupIcon} alt="" src="/group-2888273.svg" />
        <div className={styles.symbolAc6}>
          <div className={styles.symbolAc1}>AC</div>
        </div>
      </div>
      <div className={styles.groupParent2}>
        <img className={styles.groupChild1} alt="" src="/group-2888274.svg" />
        <div className={styles.symbolAc}>
          <div className={styles.symbolAc1}>AC</div>
        </div>
      </div>
      <div className={styles.groupParent3}>
        <img className={styles.groupChild} alt="" src="/group-2888275.svg" />
        <div className={styles.symbolAc}>
          <div className={styles.symbolAc1}>AC</div>
        </div>
      </div>
      <div className={styles.groupParent4}>
        <img className={styles.groupItem} alt="" src="/group-2888276.svg" />
        <div className={styles.symbolAc}>
          <div className={styles.symbolAc1}>AC</div>
        </div>
      </div>
      <div className={styles.groupParent5}>
        <img className={styles.groupItem} alt="" src="/group-2888277.svg" />
        <div className={styles.symbolAc}>
          <div className={styles.symbolAc1}>AC</div>
        </div>
      </div>
      <div className={styles.groupParent6}>
        <img className={styles.groupIcon} alt="" src="/group-2888278.svg" />
        <div className={styles.symbolAc6}>
          <div className={styles.symbolAc1}>AC</div>
        </div>
      </div>
      <div className={styles.groupParent7}>
        <img className={styles.groupChild1} alt="" src="/group-2888279.svg" />
        <div className={styles.symbolAc}>
          <div className={styles.symbolAc1}>AC</div>
        </div>
      </div>
      <div className={styles.groupParent8}>
        <img className={styles.groupChild7} alt="" src="/group-28882710.svg" />
        <div className={styles.symbolAc}>
          <div className={styles.symbolAc1}>AC</div>
        </div>
      </div>
      <div className={styles.groupParent9}>
        <img className={styles.groupChild8} alt="" src="/group-28882711.svg" />
        <div className={styles.symbolAc}>
          <div className={styles.symbolAc1}>AC</div>
        </div>
      </div>
      <div className={styles.groupParent10}>
        <img className={styles.groupChild8} alt="" src="/group-28882712.svg" />
        <div className={styles.symbolAc}>
          <div className={styles.symbolAc1}>AC</div>
        </div>
      </div>
      <div className={styles.groupParent11}>
        <img className={styles.groupChild10} alt="" src="/group-28882713.svg" />
        <div className={styles.symbolAc6}>
          <div className={styles.symbolAc1}>AC</div>
        </div>
      </div>
      <div className={styles.groupParent12}>
        <img className={styles.groupChild11} alt="" src="/group-28882714.svg" />
        <div className={styles.symbolAc}>
          <div className={styles.symbolAc1}>AC</div>
        </div>
      </div>
      <div className={styles.groupParent13}>
        <img className={styles.groupChild12} alt="" src="/group-28882715.svg" />
        <div className={styles.symbolAc30}>
          <div className={styles.symbolAc1}>AC</div>
        </div>
      </div>
      <div className={styles.groupParent14}>
        <img className={styles.groupChild13} alt="" src="/group-28882716.svg" />
        <div className={styles.symbolAc}>
          <div className={styles.symbolAc1}>AC</div>
        </div>
      </div>
      <div className={styles.groupParent15}>
        <img className={styles.groupChild13} alt="" src="/group-28882717.svg" />
        <div className={styles.symbolAc30}>
          <div className={styles.symbolAc1}>AC</div>
        </div>
      </div>
      <div className={styles.groupParent16}>
        <img className={styles.groupChild15} alt="" src="/group-28882718.svg" />
        <div className={styles.symbolAc36}>
          <div className={styles.symbolAc1}>AC</div>
        </div>
      </div>
      <div className={styles.groupParent17}>
        <img className={styles.groupChild16} alt="" src="/group-28882719.svg" />
        <div className={styles.symbolAc30}>
          <div className={styles.symbolAc1}>AC</div>
        </div>
      </div>
      <div className={styles.groupParent18}>
        <img className={styles.groupChild17} alt="" src="/group-28882720.svg" />
        <div className={styles.symbolAc}>
          <div className={styles.symbolAc1}>AC</div>
        </div>
      </div>
      <div className={styles.groupParent19}>
        <img className={styles.groupChild18} alt="" src="/group-28882721.svg" />
        <div className={styles.symbolAc30}>
          <div className={styles.symbolAc1}>AC</div>
        </div>
      </div>
      <div className={styles.groupParent20}>
        <img className={styles.groupChild18} alt="" src="/group-28882722.svg" />
        <div className={styles.symbolAc30}>
          <div className={styles.symbolAc1}>AC</div>
        </div>
      </div>
      <div className={styles.groupParent21}>
        <img className={styles.groupChild20} alt="" src="/group-28882723.svg" />
        <div className={styles.symbolAc36}>
          <div className={styles.symbolAc1}>AC</div>
        </div>
      </div>
      <div className={styles.groupParent22}>
        <img className={styles.groupChild21} alt="" src="/group-28882724.svg" />
        <div className={styles.symbolAc30}>
          <div className={styles.symbolAc1}>AC</div>
        </div>
      </div>
      <div className={styles.groupParent23}>
        <img className={styles.groupChild22} alt="" src="/group-28882725.svg" />
        <div className={styles.symbolAc}>
          <div className={styles.symbolAc1}>AC</div>
        </div>
      </div>
      <div className={styles.groupParent24}>
        <img className={styles.groupChild23} alt="" src="/group-28882726.svg" />
        <div className={styles.symbolAc}>
          <div className={styles.symbolAc1}>AC</div>
        </div>
      </div>
      <div className={styles.groupParent25}>
        <img className={styles.groupChild23} alt="" src="/group-28882727.svg" />
        <div className={styles.symbolAc}>
          <div className={styles.symbolAc1}>AC</div>
        </div>
      </div>
      <div className={styles.groupParent26}>
        <img className={styles.groupChild25} alt="" src="/group-28882728.svg" />
        <div className={styles.symbolAc6}>
          <div className={styles.symbolAc1}>AC</div>
        </div>
      </div>
      <div className={styles.groupParent27}>
        <img className={styles.groupChild26} alt="" src="/group-28882729.svg" />
        <div className={styles.symbolAc}>
          <div className={styles.symbolAc1}>AC</div>
        </div>
      </div>
    </div>
  );
};

export default Cover;

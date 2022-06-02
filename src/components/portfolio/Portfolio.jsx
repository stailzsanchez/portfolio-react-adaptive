import "./Portfolio.css";

import BUSINESS_CLOSURES from "../../assets/portfolio/business_closures.png";
import CAR_SHARING from "../../assets/portfolio/car_sharing.png";
import KROKODIL from "../../assets/portfolio/krokodil2.jpg";
import POSTS_TABLE from "../../assets/portfolio/postsTable2.png";
import ORDERS_MAP from "../../assets/portfolio/orders_map.png";
import CATS from "../../assets/portfolio/cats.png";
import USER_CONTACTS from "../../assets/portfolio/user_contacts.png";
import RN_TODO from "../../assets/portfolio/rn_todo.jpg";
import React from "react";

const Portfolio = () => {
  const portfolioList = [
    {
      title: "Game guess the word (krokodil)",
      linkProject: "https://github.com/stailzgit/krokodil",
      linkDemo: "https://stailzgit.github.io/krokodil/",
      img: KROKODIL,
    },
    {
      title: "Table posts",
      linkProject: "https://github.com/stailzgit/posts_table",
      linkDemo: "https://stailzgit.github.io/posts_table",
      img: POSTS_TABLE,
    },
    {
      title: "Orders map",
      linkProject: "https://github.com/stailzgit/orders_map",
      linkDemo: "https://stailzgit.github.io/orders_map/",
      img: ORDERS_MAP,
    },
    {
      title: "Orders map",
      linkProject: "https://github.com/stailzgit/cats",
      linkDemo: "https://stailzgit.github.io/cats/",
      img: CATS,
    },
    {
      title: "User contacts",
      linkProject: "https://github.com/stailzgit/user_contacts",
      linkDemo: "https://stailzgit.github.io/user_contacts",
      img: USER_CONTACTS,
    },
    {
      title: "Car sharing adaptive lending",
      linkProject: "https://github.com/stailzgit/car_sharing",
      linkDemo: "https://stailzgit.github.io/car_sharing/",
      img: CAR_SHARING,
    },
    {
      title: "Business clousures lending",
      linkProject: "https://github.com/stailzgit/business_closures",
      linkDemo: "https://stailzgit.github.io/business_closures/",
      img: BUSINESS_CLOSURES,
    },
    {
      title: "Todolist App React Native",
      linkProject: "https://github.com/stailzgit/rn_todolist",
      linkDemo: "https://expo.dev/@stailzsanchez/todoList",
      img: RN_TODO,
    },
  ];
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {portfolioList.map((item, itemKey) => (
          <article key={itemKey} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={item.img} alt="" />
            </div>

            <h3>{item.title}</h3>

            <div className="portfolio__item-cta">
              <a href={item.linkProject} className="btn" target="_blank">
                Github
              </a>
              <a
                href={item.linkDemo}
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

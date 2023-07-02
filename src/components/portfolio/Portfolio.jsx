import "./Portfolio.css";
import React from "react";

import BUSINESS_CLOSURES from "../../assets/portfolio/business_closures.png";
import CAR_SHARING from "../../assets/portfolio/car_sharing2.png";
import KROKODIL from "../../assets/portfolio/krokodil2.jpg";
import SHOPIFY from "../../assets/portfolio/shopify2.png";
import DASHBOARD from "../../assets/portfolio/dashboard.png";
import CAT_FOOD from "../../assets/portfolio/cat-food.png";
import TICKETS from "../../assets/portfolio/tickets.png";
import POSTS_TABLE from "../../assets/portfolio/postsTable2.png";
import FORM_VALIDATION from "../../assets/portfolio/form_validation_feedback.png";
import ORDERS_MAP from "../../assets/portfolio/orders_map.png";
import CATS from "../../assets/portfolio/cats.png";
import USER_CONTACTS from "../../assets/portfolio/user_contacts2.png";
import RN_TODO from "../../assets/portfolio/rn_todo2.jpg";

const Portfolio = () => {
  const portfolioList = [
    {
      title: "Game guess the word",
      used: "react, typeScript, redux-toolkit",
      linkProject: "https://github.com/stailzgit/krokodil",
      linkDemo: "https://stailzgit.github.io/krokodil/",
      img: KROKODIL,
    },
    {
      title: "Table posts",
      used: "react, typescript, hooks, Antd",
      linkProject: "https://github.com/stailzgit/posts_table",
      linkDemo: "https://stailzgit.github.io/posts_table",
      img: POSTS_TABLE,
    },
    {
      title: "User contacts",
      used: "react, typescript, redux, antd",
      linkProject: "https://github.com/stailzgit/user_contacts",
      linkDemo: "https://stailzgit.github.io/user_contacts",
      img: USER_CONTACTS,
    },
    {
      title: "Orders map",
      used: "react, leaflet, antd",
      linkProject: "https://github.com/stailzgit/orders_map",
      linkDemo: "https://stailzgit.github.io/orders_map/",
      img: ORDERS_MAP,
    },

    {
      title: "Shopify",
      used: "react, typescript, sass",
      linkProject: "https://github.com/stailzgit/shopify",
      linkDemo: "https://stailzgit.github.io/shopify",
      img: SHOPIFY,
    },
    {
      title: "Tickets",
      used: "react, javascript",
      linkProject: "https://github.com/stailzgit/tickets",
      linkDemo: "https://stailzgit.github.io/tickets",
      img: TICKETS,
    },
    {
      title: "Cats",
      used: "react, typescript, redux",
      linkProject: "https://github.com/stailzgit/cats",
      linkDemo: "https://stailzgit.github.io/cats/",
      img: CATS,
    },
    {
      title: "Todolist react-native",
      used: "react-native, redux",
      linkProject: "https://github.com/stailzgit/rn_todolist",
      linkDemo: "https://expo.dev/@stailzsanchez/todoList",
      img: RN_TODO,
    },
    {
      title: "Cat food",
      used: "react, javascript",
      linkProject: "https://github.com/stailzgit/cat_food",
      linkDemo: "https://stailzgit.github.io/cat_food",
      img: CAT_FOOD,
    },
    {
      title: "Dashboard",
      used: "react, typescript, graphql, react-chartjs-2",
      linkProject: "https://github.com/stailzgit/dashboard",
      linkDemo: "https://stailzgit.github.io/dashboard",
      img: DASHBOARD,
    },
    {
      title: "Form validation feedback",
      used: "react, typescript, custom hooks",
      linkProject: "https://github.com/stailzgit/validation_form_feedback",
      linkDemo: "https://stailzgit.github.io/validation_form_feedback/",
      img: FORM_VALIDATION,
    },

    {
      title: "Car sharing lending",
      used: "html, css",
      linkProject: "https://github.com/stailzgit/car_sharing",
      linkDemo: "https://stailzgit.github.io/car_sharing/",
      img: CAR_SHARING,
    },
    {
      title: "Business clousures lending",
      used: "html, css",
      linkProject: "https://github.com/stailzgit/business_closures",
      linkDemo: "https://stailzgit.github.io/business_closures/",
      img: BUSINESS_CLOSURES,
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
            <span>{item.used}</span>

            <div className="portfolio__item-cta">
              <a
                href={item.linkProject}
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                href={item.linkDemo}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
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

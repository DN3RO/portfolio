import React, { useEffect } from 'react';
import { useAppContext } from "../appContext";
import { useSelector } from "react-redux";
import {
  selectError,
  selectIsLoading,
} from "../pages/allProjectsSlice";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
// Icons
import { Icon } from "@iconify/react";
// Components
import { Button, Col, Container, Row } from "react-bootstrap";
import { Title, Loading } from "./globalStyledComponents";
import blogData from '../blog_data.json';
import StyledArticleCard from './StyledArticleCard';

export default function Articles() {
  const [allProjects, setAllProjects] = React.useState([]);
  const [mainProjects, setMainProjects] = React.useState([]);
  const { theme } = useAppContext();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const parseDate = (dateStr) => {
    const [day, month, year] = dateStr.split('/');
    return new Date(`20${year}`, month - 1, day); // Adjust this if the year needs to be parsed differently
  };

  useEffect(() => {
    // Log original data
    console.log("Original blogData:", blogData);

    // Sort the blogData by date in descending order
    const sortedData = [...blogData].sort((a, b) => {
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);

      // Log each date conversion
      console.log(`Parsing dates: ${a.date} -> ${dateA}, ${b.date} -> ${dateB}`);

      return dateB - dateA;
    });

    // Log sorted data
    console.log("Sorted blogData:", sortedData);

    setAllProjects(sortedData);
    setMainProjects(sortedData.slice(0, 3));
  }, []);

  return (
    <Element name={"Articles"} id="Articles">
      <section className="section">
        <Container>
          <Container className="d-flex">
            <Title>
              <h2>Articles</h2>
              <div className="underline"></div>
            </Title>
          </Container>
          {isLoading && (
            <Container className="d-flex">
              <Loading />
            </Container>
          )}
          {error && <h2 className="text-center">{error}</h2>}        
          {mainProjects.length !== 0 && (
            <>
              <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
                {mainProjects.map(function ({
                  id,
                  image,
                  name,
                  description,
                  url,
                  date,
                  time,
                  soon,
                }) {
                  return (
                    <Col key={id}>
                      <StyledArticleCard
                        id={id}
                        image={image}
                        name={name}
                        description={description}
                        date={date}
                        time={time}
                        url={url}
                        soon={soon}
                      />
                    </Col>
                  );
                })}
              </Row>
              {allProjects.length > 3 && (
                <Container className="text-center mt-5">
                  <Link to="/All-Articles">
                    <Button
                      size="lg"
                      variant={
                        theme === "light" ? "outline-dark" : "outline-light"
                      }
                    >
                      All <Icon icon="ph:article-ny-times-light" /> Articles
                    </Button>
                  </Link>
                </Container>
              )}
            </>
          )}
        </Container>
      </section>
    </Element>
  );
}

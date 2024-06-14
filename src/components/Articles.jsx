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

  useEffect(() => {
    setAllProjects(blogData);
    setMainProjects([...blogData.slice(0, 3)]);
  },[]);

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
                }) {
                  return (
                    <Col key={id}>
                      <StyledArticleCard
                        id={id}
                        image={image}
                        name={name}
                        description={description}
                        url={url}
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
                      All <Icon icon="icomoon-free:github" /> Articles
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

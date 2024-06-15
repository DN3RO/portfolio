import React from "react";
import { useSelector } from "react-redux";
import { selectData as homeData } from "./homeSlice";
import styled from "styled-components";
// Icons
import { Icon } from "@iconify/react";
// Components
import {
  Col,
  Container,
  FormControl,
  InputGroup,
  Pagination,
  Row,
} from "react-bootstrap";
import {
  BackToTop,
  Title,
} from "../components/globalStyledComponents";
import Footer from "../components/Footer";
import blogData from '../blog_data.json';
import StyledArticleCard from "../components/StyledArticleCard";
import Article from "../components/Article";

const StyledSection = styled.section`
  min-height: calc(100vh - var(--min-footer-height) - var(--nav-height));

  .input-group {
    max-width: 90vw;
  }

  .row {
    min-height: var(--card-height);
  }

  @media screen and (min-width: 800px) {
    .input-group {
      width: 75%;
    }
  }
`;

export default function AllArticles() {
  const [currentArticle, setCurrentArticle] = React.useState(null);
  const [searchInput, setSearchInput] = React.useState("");
  const [filteredResults, setFilteredResults] = React.useState([]);
  const [pageItems, setPageItems] = React.useState([]);
  const [activePage, setActivePage] = React.useState(1);
  const { name } = useSelector(homeData);

  React.useEffect(
    function () {
      document.title = `${name} | All Articles`;
    },
    [name]
  );

  React.useEffect(
    function () {
      if (searchInput !== "") {
        const filteredData = blogData.filter((item) => {
          return item.name.toLowerCase().includes(searchInput.toLowerCase());
        });
        const tempPageItems = [];
        for (
          let number = 1;
          number <= Math.ceil(filteredData.length / 6);
          number++
        ) {
          tempPageItems.push(
            <Pagination.Item
              key={number}
              active={number === activePage}
              onClick={() => setActivePage(number)}
            >
              {number}
            </Pagination.Item>
          );
          setPageItems([...tempPageItems]);
        }
        if (activePage === 1) {
          setFilteredResults(filteredData.slice(0, 6));
        } else {
          setFilteredResults(
            filteredData.slice((activePage - 1) * 6, (activePage - 1) * 6 + 6)
          );
        }
      } else {
        const tempPageItems = [];
        for (let number = 1; number <= Math.ceil(blogData.length / 6); number++) {
          tempPageItems.push(
            <Pagination.Item
              key={number}
              active={number === activePage}
              onClick={() => setActivePage(number)}
            >
              {number}
            </Pagination.Item>
          );
          setPageItems([...tempPageItems]);
        }
        if (activePage === 1) {
          setFilteredResults(blogData.slice(0, 6));
        } else {
          setFilteredResults(
            blogData.slice((activePage - 1) * 6, (activePage - 1) * 6 + 6)
          );
        }
      }
    },
    [searchInput, blogData, pageItems.length, activePage]
  );

  React.useEffect(
    function () {
      // Anytime the search input changes set the active page back to 1
      setActivePage(1);
    },
    [searchInput]
  );

  if(currentArticle){
    return <Article id={currentArticle}/>;
  }else{
    return (
      <>
        <main>
          <StyledSection className="d-flex flex-column justify-content-center">
            <Container className="d-flex">
              <Title>
                <h2>
                  All <Icon icon="ant-design:read-outlined" /> Articles
                </h2>
                <div className="underline"></div>
              </Title>
            </Container>
            <Container>
              <InputGroup className="mx-auto mb-3">
                <InputGroup.Text id="search">
                  <Icon icon="ic:round-search" />
                </InputGroup.Text>
                <FormControl
                  placeholder="Article name"
                  aria-label="Search articles"
                  aria-describedby="search"
                  onChange={(e) => setSearchInput(e.currentTarget.value)}
                />
              </InputGroup>
              <Row
                xs={1}
                md={2}
                lg={3}
                className="g-4 justify-content-center row"
              >
                {searchInput.length > 0
                  ? filteredResults.map(function ({
                      id,
                      image,
                      name,
                      description,
                      date,
                      soon,
                    }) {
                      return (
                        <Col key={id}>
                          <StyledArticleCard
                            image={image}
                            name={name}
                            description={description}
                            id={id}
                            date={date}
                            soon={soon} // Pass 'soon' prop
                          />
                        </Col>
                      );
                    })
                  : filteredResults.map(function ({
                      id,
                      image,
                      name,
                      description,
                      date,
                      time,
                      soon,
                    }) {
                      return (
                        <Col key={id}>
                          <StyledArticleCard
                            image={image}
                            name={name}
                            description={description}
                            id={id}
                            date={date}
                            time={time}
                            soon={soon}
                          />
                        </Col>
                      );
                    })}
              </Row>
              <Container className="d-flex justify-content-center mt-4">
                {pageItems.length <= 2 ? (
                  <Pagination size="lg" className="mb-4">
                    {pageItems}
                  </Pagination>
                ) : (
                  <Pagination className="mb-5">
                    <Pagination.Prev
                      onClick={() =>
                        activePage === 1
                          ? setActivePage(pageItems.length)
                          : setActivePage(activePage - 1)
                      }
                    />
                    {pageItems[0]}
                    <Pagination.Ellipsis />
                    <Pagination.Item active={true}>
                      {activePage}
                    </Pagination.Item>
                    <Pagination.Ellipsis />
                    {pageItems[pageItems.length - 1]}
                    <Pagination.Next
                      onClick={() =>
                        activePage === pageItems.length
                          ? setActivePage(1)
                          : setActivePage(activePage + 1)
                      }
                    />
                  </Pagination>
                )}
              </Container>
            </Container>
          </StyledSection>
        </main>
        <BackToTop home={"Home"} />
        <Footer />
      </>
    );
  }
}

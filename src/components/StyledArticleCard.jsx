import React from 'react';
import styled from "styled-components";
// Icons
import { Icon } from "@iconify/react";
// Media
import GH from "../images/read.svg";
// Components
import { Card } from "react-bootstrap";

const StyledCardComponent = styled.div`
  .card {
    color: ${({ theme }) => theme.color};
    background: ${({ theme }) => (theme.name === "light" ? "" : "#797B7B")};
    box-shadow: ${({ theme }) =>
      theme.name === "light"
        ? "0 3px 10px rgb(0 0 0 / 0.2)"
        : "0 3px 10px rgb(255 255 255 / 0.2)"};

    .card-link {
      text-decoration: none;
      font-size: 1.5rem;
      color: ${({ theme }) => theme.color};

      &:hover {
        color: var(--primary);
      }
    }

    .card-footer {
      border-top: var(--border);
      background: ${({ theme }) => (theme.name === "light" ? "" : "#404040")};
    }
  }
`;

export default function StyledArticleCard({ image, name, description, id, date, soon }) {
  return (
    <StyledCardComponent>
      <Card>
        <Card.Img
          variant="top"
          src={image ? image : GH}
          alt={name}
          className="mx-auto"
        />
        <Card.Body className="overflow-auto text-center">
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>{date}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-center">
          {soon ? (
            <Card.Link href="#" style={{ color: 'gray', pointerEvents: 'none' }}>
              Coming Soon
            </Card.Link>
          ) : (
            <Card.Link href={`/portfolio#/article/${id}`}>
              {"Read Article "}
              <Icon icon="ant-design:read-outlined" />
            </Card.Link>
          )}
        </Card.Footer>
      </Card>
    </StyledCardComponent>
  );
}
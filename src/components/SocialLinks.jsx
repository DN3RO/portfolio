import React from 'react';
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import styled from "styled-components";
// Data
import { BugCrowd } from "../data";
// Icons
import { Icon } from '@iconify/react';

const StyledSocialLinks = styled.div`
  a {
    margin: 0 1rem;
  }
`;

export default function SocialLinks() {
  const { blog, html_url } = useSelector(selectData);
  const linkdin = "https://www.linkedin.com/in/nir-jacob-saias/";

  return (
    <StyledSocialLinks>
      <a
        href={linkdin}
        aria-label="Check out my LinkedIn profile."
        className="link-icons"
      >
        <Icon icon="bi:linkedin" />
      </a>
      <a
        href={html_url}
        aria-label="Check out my GitHub profile."
        className="link-icons"
      >
        <Icon icon="icomoon-free:github" />
      </a>
      {blog && (
        <a href={blog} aria-label="Check out my BugCrowd profile." className="link-icons">
          {BugCrowd}
        </a>
      )}
    </StyledSocialLinks>
  );
}

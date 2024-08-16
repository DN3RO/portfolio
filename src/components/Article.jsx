import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import blogData from '../blog_data.json';


async function readHTMLFile(filePath) {
  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error('Failed to fetch HTML file');
    }
    return await response.text();
  } catch (err) {
    console.error('Error reading HTML file:', err);
    return ''; // Return an empty string or handle error as needed
  }
}

const Article = () => {
  const { id } = useParams();
  const [htmlContent, setHtmlContent] = useState('');
  
  const articleData = blogData.find(article => article.id.toString() === id)

  useEffect(() => {
    async function fetchHTMLContent() {
      try {
        const htmlFilePath = process.env.PUBLIC_URL + `/articles/${id}.html`;
        const content = await readHTMLFile(htmlFilePath);

        setHtmlContent(content);
      } catch (error) {
        console.error('Error fetching HTML content:', error);
        setHtmlContent('');
      }
    }

    fetchHTMLContent();
  }, [id]);

  return (
    <div className='p-5'>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
};

export default Article;

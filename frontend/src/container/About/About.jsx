import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './About.css';
import { urlFor, client } from '../../client';
import { AppWrap} from '../../Wrapper';

const About = () => {
  const [abouts, setAbouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
      .then((data) => {
        setAbouts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const handleResumeRedirect = () => {
    window.open("https://drive.google.com/file/d/1qZ9shiQXk6i5gV1oBNvGj1ux7L0Bjx0T/view?usp=sharing", "_blank");
  };

  return (
    <>
      <h2 className="head-text">I Know that <span>Good Development</span> <br />means <span>Good Business</span></h2>
      <span><button
            type="button"
            className="portfolio-button"
            onClick={handleResumeRedirect}
          >
            View Resume
          </button></span>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            {about.imgUrl && (
              <img src={resolveImageURL(about.imgUrl)} alt={about.title} />
            )}
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(About, 'about');

const resolveImageURL = (imgUrl) => {
  try {
    return urlFor(imgUrl).url();
  } catch (error) {
    console.error('Error resolving image URL:', error);
    return '';
  }
};


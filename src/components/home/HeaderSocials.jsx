import React from 'react';

const socialLinks = [
  {
    id: 1,
    icon: 'fa-brands fa-linkedin',
    link: 'https://www.linkedin.com/in/priyansh-pal-0b1006263',
  },
  {
    id: 2,
    icon: 'fa-brands fa-medium',
    link: 'https://medium.com/@priyanshpal28',
  },
  {
    id: 3,
    icon: 'fa-brands fa-hackerrank',
    link: 'https://www.hackerrank.com/profile/priyanshpal28',
  },
  {
    id: 4,
    icon: 'fa-brands fa-l',
    link: 'https://leetcode.com/u/dopaminechillzz/',
  },
  {
    id: 5,
    icon: 'fa-brands fa-github',
    link: 'https://github.com/dopaminechillzz',
  },
];

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      {socialLinks.map((link) => (
        <a
          key={link.id}
          href={link.link}
          className="home__social-link"
          target="_blank"
        >
          <i className={link.icon}></i>
        </a>
      ))}
    </div>
  );
};

export default HeaderSocials;

'use client';
import React from 'react';
import Masonry from 'react-masonry-css';
import DisplayProject from './DisplayProject';
import styles from './ProjectsGrid.module.css';
import { Project } from '@/project';

interface ProjectsGridProps {
  projects: Project[];
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={styles.myMasonryGrid}
      columnClassName={styles.myMasonryGridColumn}
    >
      {projects.map((project, idx) => (
        <DisplayProject
          key={idx}
          title={project.title}
          description={project.description}
          image={project.image}
          link={project.link}
        />
      ))}
    </Masonry>
  );
};

export default ProjectsGrid;

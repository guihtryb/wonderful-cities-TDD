import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DefinitionDescription from '../DefinitionDescription/DefinitionDescription';
import DefinitionTitle from '../DefinitionTitle/DefinitionTitle';

export default function DefinitionListItem({ title, answer, tag }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div
      data-aos="fade-right"
      data-aos-duration="1050"
    >
      <DefinitionTitle
        title={title}
        onClick={handleOpen}
        open={open}
      />
      <DefinitionDescription
        tag={tag}
        description={answer}
        open={open}
      />
    </div>
  );
}

DefinitionListItem.propTypes = {
  title: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};

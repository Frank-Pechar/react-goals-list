import React from 'react';

import './CourseGoalItem.css';

const CourseGoalItem = (props) => {
  // const [deleteText, setDeleteText] = useState('');

  // deleteHandler points to deleteItemHandler in App Component
  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    // create li item for each goal props.children = goal.text
    <li className="goal-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default CourseGoalItem;

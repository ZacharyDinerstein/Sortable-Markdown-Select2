// src/plugins/init_sortable.js
import Sortable from 'sortablejs';

const initSortable = () => {
  const list = document.querySelector('#results-container');
  Sortable.create(list, {
    ghostClass: "ghost",
    animation: 350,
    onEnd: (event) => {
      // alert(`${event.oldIndex} moved to ${event.newIndex}`);
    }
  });
};

export { initSortable };

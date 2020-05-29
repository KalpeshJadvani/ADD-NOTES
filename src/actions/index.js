export const ADD_NOTE = 'ADD_NOTE';
export const CURRENT_TAB = 'CURRENT_TAB';

export const addNote = (data) => {
  return {
    type: 'ADD_NOTE',
    payload: data,
  };
};

export const curentTab = (tab) => {
  return {
    type: 'CURRENT_TAB',
    payload: tab,
  };
};

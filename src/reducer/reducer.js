const truthReducer = (state = { truth: [] }, action) => {
  switch (action.type) {
    case 'PUSH':
      const newState = { ...state };
      newState.push(action.value);
      return {
        ...newState,
      };
  }
};

export default truthReducer;

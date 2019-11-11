const diditReducer = (state = [], action) => {
    switch (action.type) {
      case "ADD_DIDIT":
        return state.concat([action.data]);
      case "EDIT_DIDIT":
        return state.map(didit =>
          didit.id === action.id ? { ...didit, editing: !didit.editing } : didit
        );
      case "DELETE_DIDIT":
        return state.filter(didit => didit.id !== action.id);
      case "CHECK_DIDIT":
        return state.map(didit =>
          didit.id === action.id
            ? { ...didit, isChecked: !didit.isChecked }
            : didit
        );
      case "UPDATE_DIDIT":
        return state.map(didit => {
          if (didit.id === action.id) {
            return {
              ...didit,
              title: action.data.newTitle,
              note: action.data.newNote,
              editing: !didit.editing
            };
          } else return didit;
        });
      default:
        return state;
    }
  };
  
  export default diditReducer;
  
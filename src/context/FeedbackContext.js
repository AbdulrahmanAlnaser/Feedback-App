/*
This code is used to create a context in React called FeedbackContext,
which allows you to share data between components without having to pass 
props directly through the component tree.
*/
import { v4 as uuidv4 } from "uuid";
import { createContext, useContext, useState } from "react";

const FeedbackContext = createContext();
/*
This line creates a new context called FeedbackContext. Contexts in React are used to share data across 
the component tree without having to pass props manually at every level
*/

export const FeedbackProvider = ({ children }) => {
  /*
This defines a new component called FeedbackProvider. This component uses the special children prop,
which represents any child components that will be passed inside this provider.
*/
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This is feedback item 1",
      rating: 10,
    },
    {
      id: 2,
      text: "This is feedback item 2",
      rating: 8,
    },
    {
      id: 3,
      text: "This is feedback item 2",
      rating: 5,
    },
  ]);
  /*
Here, useState is used to create a local state variable called feedback, 
which contains an array of items representing feedback. This state is 
private to the FeedbackProvider component and is not accessible outside of it. 
The setFeedback function is also provided to update this state when needed.
*/

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  // Add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  // Delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // Update feedback item
  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };

  //Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
  /*
This part uses FeedbackContext.Provider to provide the feedback data to 
any child components (children) inside the component tree. Any component 
within FeedbackProvider can access this data using FeedbackContext.
*/
};

export default FeedbackContext;

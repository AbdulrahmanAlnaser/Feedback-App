import PropTypes from 'prop-types';

export default function Header({
     text = "Feedback UI", 
     bgColor = "rgba(0,0,0,0.4)", 
     textColor = "#ff6a95" })
     {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

// Type checking for props
Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

/*
this is the old way to do that 

export default function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };

  Header.defaultProps = {
  text: "Feedback UI", // this value will view if no text send by header so take this default value
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a95",
};
*/

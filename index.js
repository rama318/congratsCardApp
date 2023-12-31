const element = (
  <div className="background-page">
    <h1 className="heading">Congratulations</h1>
    <div className="card-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="image-1"
      />
      <h1 className="heading-2">Kiran V</h1>
      <p className="para-1">
        Vishnu Institute Of Computer Education and Technology Bhimavaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="image-2"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

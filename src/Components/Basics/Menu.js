import React from "react";

const Menu = ({ menuData }) => {
  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((item) => {
          return (
            <>
              <div className="card-container" key={item.id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">
                      {item.id}
                    </span>
                    <span className="card-author subtle">{item.category}</span>
                    <h2 className="card-title">{item.name}</h2>
                    <span
                      className="card=description subtle"
                      style={{
                        color: "grey",
                        fontWeight: "bold",
                        fontSize: "17px",
                        fontStyle: "italic",
                      }}
                    >
                      {item.description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={item.image} alt="images" className="card-media" />
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};
export default Menu;

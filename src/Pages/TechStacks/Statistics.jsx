import React from "react";

// import "../../App.css";
const Statistics = () => {
  return (
    // streak
    <div>
      <h3>My Statistics</h3>
      <div>
        <a href="https://github.com/mdzubair599">
          <img
            height="200px"
            width="100%"
            // height="100%"
            align="left"
            src="https://github-readme-streak-stats.herokuapp.com/?user=mdzubair599"  alt="ad"
          />
        </a>
        <a href="https://github.com/mdzubair599">
            <img
              height="200px"
              width="100%"
              // height="100%"
              align="left"
              src="https://github-readme-stats.vercel.app/api?username=mdzubair599&count_private=true&show_icons=true" alt="ad"
            />
          </a>
      </div>
      <div className="staticsdiv">
        <div >
          <a href="https://github.com/mdzubair599">
            <img
            //   height="200px"
              width="400px"
            //   border="1px solid red"
              // height="100%"
              align="center"
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=mdzubair599" alt="ad"
            />
          </a>
        </div>
        
        <div>
          
        </div>
        
      </div>
    </div>
  );
};

export default Statistics;
// // import React from 'react';
// const App = () => {
//   return (
//     <div>
//       Hello everyone
//       </div>
//   )
// };
// export default App;
// import React from "react";

// const Header = () => {
//   return (
//     <header>
//       <h1>My Website</h1>
//     </header>
//   );
// };

// const Navigation = () => {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <a href="#">Home</a>
//         </li>
//         <li>
//           <a href="#">About</a>
//         </li>
//         <li>
//           <a href="#">Contact</a>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// const Input = () => {
//   return <input type="text" name="input" />;
// };

// const Button = () => {
//   return <button>Click me</button>;
// };

// const Footer = () => {
//   return (
//     <footer>
//       <p>&copy; 2021 My Website</p>

//     </footer>
//   );
// };

// const MyName = ()=> {
//   return <h5>Risshi Kudeshia</h5>;
// };

// const App = () => {
//   return (
//     <div>
//       <Header />
//       <Navigation />
//       <Input />
//       <Button />
//       <p>Hello everyone</p>
//       <MyName/>
//       <Footer />
//     </div>
//   );
// };

// export default App;

import React from "react";
import Restaurant from "./Components/Basics/Restaurant.js";

 export function About() {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
};

export function Contact() {
  return (
    <div>
      <h1>Contact</h1>
    </div>
  );
};

 export const App = () => {
  return (
    <>
      <Restaurant />;
    </>
  );
};

export default App;

import React from "react" 
// Define a class-based React component called "Nav"
export default class Nav extends React.Component {
    render() {
      return (
        // Render a navigation bar
        <nav>
            <h1>HeartArrowed♥</h1>
            <ul>
                <li>Home</li>
                <li>My Account</li>
                <li>Contact</li>
            </ul>
        </nav>
      )
    }
}
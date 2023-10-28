import React from "react"
// Define a Form class that extends the React.Component class
export default class Form extends React.Component {
    render() {
      return (
        <div className="login-form">
            <form>
                <div>
                <label htmlFor="username">
                    <input id="username" type="text" placeholder="Username" name="userName" />  {/* Input field for entering a username */}
                </label>
                </div>
                <div>
                <label htmlFor="password">
                    <input id="password" type="text" placeholder="Password" name="passWord"  /> {/* Input field for entering a password */}
                </label>
                </div>
                <div>
                    <h3>Log in</h3>
                </div>
            </form> 
        </div>
    
      )
    }
}
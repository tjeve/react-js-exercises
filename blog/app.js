let Header = (props) => {
    return <span><h1>{props.name}</h1> <h5>a blog by {props.author}</h5></span>
}

//You can pass props as an argument for the function and then attach properties to it
// then call them in them when you're rendering them
let Article = (props) => {
    return <span>
                <h3>Article Title</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Ut pulvinar eget nibh quis consectetur. Sed lacinia accumsan est, 
                    in cursus lacus. Praesent nec leo fermentum, congue dolor sed, 
                    posuere erat. Aliquam erat volutpat. Curabitur eu vulputate elit, 
                    vel dapibus odio. Nam quis sem eget eros tempus suscipit. Phasellus 
                    ornare vestibulum mauris eget molestie. Pellentesque at nulla ex.</p>
        </span>
}
let Footer = (props) => {
    return <ul>
        <li>Contact: {props.name}</li>
        <li>Phone: {props.phone}</li>
        <li>Email: {props.email}</li>
    </ul>
}

let Blog = () => {
    return <span><Header name="Bored Blogging" author="Terrence Eve" /><Article name="Terrence"/>
    <Footer name="Terrence Eveline" phone="(555)555-555" email="tijaye@gmail.com"/></span>
}


ReactDOM.render(<Blog />, document.getElementById('root')) //<Blog /> is JSX syntax for calling the function that is Blog()
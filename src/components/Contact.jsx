import User from "./User"
import UserClass from "./UserClassComp"

const Contact =() => {
    return (
        <div>
            <h1>Contact Page</h1>
            <User method={"fuctionalComponent"}/>
            <UserClass method={"classComponent"} />
        </div>
    )
}

export default Contact
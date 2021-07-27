import "./style.scss";

const index = ({ addNewItem }) => {
    return (
        <form className="todo-form">
            <input type="text" className="todo-form__input-type" name="title" placeholder="Enter your task..." />
            <button type="submit" className="todo-form__button-type"> + </button>
        </form>
    )
}

export default index

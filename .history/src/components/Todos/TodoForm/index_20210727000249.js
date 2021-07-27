import "./style.scss";

const index = (props) => {
    const { addNewItem } = props;
    return (
        <form className="todo-form">
            <input type="text" className="todo-form__input-type" placeholder="Enter your task..." />
            <button type="submit" className="todo-form__button-type"> + </button>
        </form>
    )
}

export default index

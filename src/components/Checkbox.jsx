import React from 'react';
// Вариант компонента без состояния
function Checkbox(props) {
    return (
        <button className="checkbox icon" onClick={props.onChange}>
            <i className="material-icons">{ props.checked ? 'check_box' : 'check_box_outline_blank' }</i>
        </button>
    );
}


// Данное свойство нужно для статичных компонентов без состояния
Checkbox.propTypes = {
    checked: React.PropTypes.bool.isRequired,
    onChange: React.PropTypes.func.isRequired
};




export default Checkbox;
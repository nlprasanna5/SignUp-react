import './registerStyle.css';

function RegisterButton(props){
    return(
        <button type="submit" className='register-button'>{props.name}</button>
    )
}

export default RegisterButton;
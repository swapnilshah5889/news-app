import {Button} from '@mui/material';

const InputButton = ({buttonText, onButtonClick, buttonVariant="contained"}) => {

    return (
        <Button
            variant={buttonVariant}
            onClick={onButtonClick}
        >{buttonText}</Button>
    );
}

export default InputButton;
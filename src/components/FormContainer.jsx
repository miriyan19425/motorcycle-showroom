import Form from './Form';
import Button from './Button';
import styles from './FormContainer.module.css';

function FormContainer(){
    return (
        <div className={styles.formContainer}>
            <Form />
            <Button />
        </div>
    );
}

export default FormContainer;

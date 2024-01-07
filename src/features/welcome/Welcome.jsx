import style from './welcome.module.css';

export const Welcome = ({handleActiveCanvas}) => {
    return (
                <button onClick={handleActiveCanvas} className={style.btn} type="button">
                    GO
                </button>
    )
}

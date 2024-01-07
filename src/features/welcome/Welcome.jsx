import style from './welcome.module.css';

export const Welcome = ({handleActiveCanvas}) => {
    return (
        <div className={style.container}>
            <div>
                <button onClick={handleActiveCanvas} className={style.btn} type="button">
                    GO
                </button>
            </div>

        </div>
    )
}

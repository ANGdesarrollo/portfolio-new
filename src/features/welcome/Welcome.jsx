import style from './welcome.module.css';

export const Welcome = ({handleActiveCanvas}) => {
    return (
        <div className={style.container}>
            <button className={style.btn} type="button">
                <strong>SPACE</strong>
                <div id={style.containerStars}>
                    <div id={style.stars}></div>
                </div>

                <div id={style.glow}>
                    <div className={style.circle}></div>
                    <div className={style.circle}></div>
                </div>
            </button>
        </div>
    )
}

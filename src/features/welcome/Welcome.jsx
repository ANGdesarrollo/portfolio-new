import style from './welcome.module.css';
export const Welcome = ({handleActiveCanvas}) => {
        return(
            <div onClick={handleActiveCanvas} className={style.container}>
                Welcome to my portfolio
            </div>
        )
}

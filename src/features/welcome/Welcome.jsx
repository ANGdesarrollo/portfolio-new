import './welcome.css';

export const Welcome = ({handleActiveCanvas}) => {
    return (
        <div className="welcome-container">
            <div>
                <button onClick={handleActiveCanvas} className="btn" type="button">
                    GO
                </button>
            </div>

        </div>
    )
}

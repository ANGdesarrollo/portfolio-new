import './welcome.css';

export const Welcome = ({handleActiveCanvas}) => {
    return (
        <div className="welcome-container">
            <div>
                <button onClick={handleActiveCanvas} className="btn" type="button">
                    <strong>GO</strong>
                    <div id="container-stars">
                        <div id="stars"></div>
                    </div>

                    <div id="glow">
                        <div className="circle"></div>
                        <div className="circle"></div>
                    </div>
                </button>
            </div>

        </div>
    )
}

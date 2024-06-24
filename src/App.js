import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: {
                fullName: 'EL LOCO',
                bio: 'Developpeur Full Stack depuis 3 annees et grand passionne de la technologie.',
                imgSrc: 'https://i0.wp.com/www.netione.systems/wp-content/uploads/2023/05/developpeur-fullstack-netione-scaled.jpg?fit=2560%2C1707&ssl=1',
                profession: 'Developer Full Stack & Design'
            },
            show: false,
            elapsedTime: 0
        };
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState(prevState => ({
                elapsedTime: prevState.elapsedTime + 1
            }));
        }, 1000); // Mettre à jour toutes les secondes
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    toggleProfile = () => {
        this.setState(prevState => ({
            show: !prevState.show
        }));
    }

    render() {
        const { fullName, bio, imgSrc, profession } = this.state.person;
        const { show, elapsedTime } = this.state;

        return (
            <div className="App">
                <button onClick={this.toggleProfile}>
                    {show ? 'Hide Profile' : 'Voir le profil'}
                </button>
                {show && (
                    <div>
                        <h2>{fullName}</h2>
                        <p>{bio}</p>
                        <p>Profession: {profession}</p>
                        <img 
                            src={imgSrc} 
                            alt={fullName} 
                            style={{ maxWidth: '100%', height: 'auto' }} 
                        />
                    </div>
                )}
                <p>Temps écoulé depuis le montage : {elapsedTime} secondes</p>
            </div>
        );
    }
}

export default App;

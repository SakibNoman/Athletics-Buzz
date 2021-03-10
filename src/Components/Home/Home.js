import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import TeamCard from '../TeamCard/TeamCard';
import './Home.css';

const Home = () => {
    const [leagueList, setLeagueList] = useState([]);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
            .then(res => res.json())
            .then(data => setLeagueList(data.leagues.slice(0, 15)))
    }, [])
    return (
        <div className="main" >
            <Container>
                <div className="row">
                    {
                        leagueList.map(each => <TeamCard key={each.idLeague} idLeague={each.idLeague} ></TeamCard>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Home;
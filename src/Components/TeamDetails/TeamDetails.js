import { faBaseballBall, faClosedCaptioning, faFlagCheckered, faMars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';

const TeamDetails = () => {
    const [league, setLeague] = useState({})
    const { leagueId, leagueName } = useParams();
    const { strGender, strSport, strCountry, dateFirstEvent } = league;
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`)
            .then(res => res.json())
            .then(data => setLeague(data.leagues[0]))
    }, [leagueId])
    console.log(league);
    return (
        <Container className="d-flex bg-dark rounded text-white p-3" >
            <div>
                <h5>{leagueName}</h5>
                <p> <FontAwesomeIcon className="mr-2" icon={faClosedCaptioning} /> Founded: {dateFirstEvent}</p>
                <p> <FontAwesomeIcon className="mr-2" icon={faFlagCheckered} /> Country: {strCountry}</p>
                <p> <FontAwesomeIcon className="mr-2" icon={faBaseballBall} /> Sport type: {strSport}</p>
                <p> <FontAwesomeIcon className="mr-2" icon={faMars} /> Gender: {strGender}</p>
            </div>
            <div>

            </div>
        </Container>
    );
};

export default TeamDetails;
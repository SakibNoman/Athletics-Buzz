import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './TeamCard.css';

const TeamCard = (props) => {

    //destructuring props
    const { idLeague } = props;

    //useState hook for each league information
    const [league, setLeague] = useState({});

    //destructuring data from league object
    const { strLeague, strBadge, strSport } = league;

    //useEffect hook to load details information
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
            .then(res => res.json())
            .then(data => setLeague(data.leagues[0]))
    }, [idLeague])

    return (
        <div className="col-xl-4 col-lg-6 col-sm-12 col-12 p-3 d-flex justify-content-center " >
            <Card as={Link} to={"/league/" + idLeague + "/" + strLeague} className="p-2 league-card" style={{ textDecoration: "none", color: "inherit" }}>
                <Card.Img className="w-50 mx-auto " variant="top" src={strBadge} />
                <Card.Body className="d-flex flex-column justify-content-center " >
                    <Card.Title className="text-center" >{strLeague}</Card.Title>
                    <Card.Text className="text-center" > Sports type: {strSport} </Card.Text>
                    <Button as={Link} to={"/league/" + idLeague + "/" + strLeague} className="w-50 mx-auto " variant="primary">Explore <FontAwesomeIcon className="ml-2" icon={faArrowRight} /> </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default TeamCard;
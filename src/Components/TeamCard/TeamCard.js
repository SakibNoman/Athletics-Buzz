import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TeamCard = (props) => {
    const { idLeague } = props;
    const [league, setLeague] = useState({});
    const { strLeague, strBadge, strSport, strGender } = league;

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
            .then(res => res.json())
            .then(data => setLeague(data.leagues[0]))
    }, [idLeague])

    return (
        <div className="col-md-4 p-3 " >
            <Card className="p-2" style={{ width: '23rem' }}>
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
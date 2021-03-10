import { faFacebook, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { faBaseballBall, faClosedCaptioning, faFlagCheckered, faMars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import femaleImage from '../../images/female-min.png';
import maleImage from '../../images/male-min.png';
import maleFemale from '../../images/maleFemale.jpg';

const TeamDetails = () => {
    const [league, setLeague] = useState({})
    const { leagueId, leagueName } = useParams();
    const { strGender, strSport, strCountry, intFormedYear, strDescriptionEN } = league;
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`)
            .then(res => res.json())
            .then(data => setLeague(data.leagues[0]))
    }, [leagueId])

    //Conditionally rendering male or female banner
    let genderImage = ""
    if (strGender === "Male") {
        genderImage = maleImage;
    }
    if (strGender === "Female") {
        genderImage = femaleImage;
    }
    if (strGender === "Mixed") {
        genderImage = maleFemale;
    }

    return (
        <>
            <Container className="bg-dark rounded text-white" >
                <div className="row p-3 ">
                    <div className=" d-flex flex-column justify-content-center col-md-6" >
                        <h5 className="mb-4 font-weight-bold" >{leagueName}</h5>
                        <p> <FontAwesomeIcon className="mr-2" icon={faClosedCaptioning} /> Founded: {intFormedYear}</p>
                        <p> <FontAwesomeIcon className="mr-2" icon={faFlagCheckered} /> Country: {strCountry}</p>
                        <p> <FontAwesomeIcon className="mr-2" icon={faBaseballBall} /> Sport type: {strSport}</p>
                        <p> <FontAwesomeIcon className="mr-2" icon={faMars} /> Gender: {strGender}</p>
                    </div>
                    <div class="text-right col-md-6 " >
                        {
                            <img className="img-fluid rounded" src={genderImage} alt="" />
                        }
                    </div>
                </div>
            </Container>
            <Container>
                <div>
                    <p>{strDescriptionEN}</p>
                </div>
            </Container>
            <Container>
                <div>
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faTwitterSquare} />
                    <FontAwesomeIcon icon={faYoutubeSquare} />
                </div>
            </Container>
        </>
    );
};

export default TeamDetails;
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBaseballBall, faClosedCaptioning, faFlagCheckered, faMars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import femaleImage from '../../images/female-min.png';
import maleImage from '../../images/male-min.png';
import maleFemale from '../../images/maleFemale.jpg';
import './TeamDetails.css';

const TeamDetails = () => {

    //useState hook for storing league details
    const [league, setLeague] = useState({})

    //destructuring parameter
    const { leagueId, leagueName } = useParams();

    //destructuring data from league object
    const { strGender, strSport, strCountry, intFormedYear, strDescriptionEN, strTwitter, strYoutube, strFacebook } = league;

    //useEffect hook to load json data
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
        <div className="detailsBody">

            {/* information card */}
            <div className=" p-4 " >
                <Container className="info-card rounded text-white" >
                    <div className="row p-3 ">

                        {/* text info */}
                        <div className=" d-flex flex-column justify-content-center col-md-6" >
                            <h5 className="mb-4 font-weight-bold" >{leagueName}</h5>
                            <p> <FontAwesomeIcon className="mr-2" icon={faClosedCaptioning} /> Founded: {intFormedYear}</p>
                            <p> <FontAwesomeIcon className="mr-2" icon={faFlagCheckered} /> Country: {strCountry}</p>
                            <p> <FontAwesomeIcon className="mr-2" icon={faBaseballBall} /> Sport type: {strSport}</p>
                            <p> <FontAwesomeIcon className="mr-2" icon={faMars} /> Gender: {strGender}</p>
                        </div>
                        {/* conditionally rendered image */}
                        <div className="text-right col-md-6 " >
                            {
                                <img className="img-fluid rounded" src={genderImage} alt="" />
                            }
                        </div>
                    </div>
                </Container>
            </div>

            {/* Description */}
            <Container>
                <div className="text-white py-4" >
                    <p>{strDescriptionEN}</p>
                </div>
            </Container>

            {/* Social Links */}
            <Container className="pb-1" >
                <div className="d-flex justify-content-center" >
                    <a href={"https://" + strFacebook} ><FontAwesomeIcon className="icon fa-2x" color="Dodgerblue" icon={faFacebook} /></a>
                    <a href={"https://" + strTwitter}><FontAwesomeIcon className="icon fa-2x" color="Dodgerblue" icon={faTwitter} /></a>
                    <a href={"https://" + strYoutube}><FontAwesomeIcon className="icon fa-2x" color="red" icon={faYoutube} /></a>
                </div>
            </Container>
        </div>
    );
};

export default TeamDetails;
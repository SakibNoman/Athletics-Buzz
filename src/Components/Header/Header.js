import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import background from '../../images/home-background.jpg';
import './Header.css';

const Header = () => {

    const [logo, setLogo] = useState("");
    const { league, leagueId } = useParams();
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`)
            .then(res => res.json())
            .then(data => setLogo(data.leagues[0].strBadge))
    }, [leagueId])
    let el = "";
    if (league === "league") {
        el = <img className="app-name league-image" src={logo} alt="" ></img>;
    }
    else {
        el = <p className="app-name" >Athletics Buzz</p>
    }

    return (
        <div>
            {el}
            <img className='w-100 back-img ' src={background} alt="" />
        </div>
    );
};

export default Header;
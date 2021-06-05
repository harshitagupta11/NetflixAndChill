import React from 'react';
import './Banner.css'
function Banner(props) {
    const truncate=(string,n)=>{
        return string?.length>n?string.substr(0,n-1)+'...':string;
    }
    return (
        <header className="banner"
        style={{
            backgroundSize:"cover",
            backgroundImage:`url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png')`,
            backgroundPosition:"center center"
        }}
        >
        <div className="banner_contents">
            <h1 className="banner_title">Movie Name</h1>    
            <div className="banner_buttons">
                <button>
                    Play
                </button>
                <button>
                    My List
                </button>
            </div>
            <h1 className="banner_description">
                {truncate('This is Movie overview.This is Movie overview.This is Movie overview.This is Movie overview.This is Movie overview.This is Movie overview.This is Movie overview.This is Movie overview.This is Movie overview.This is Movie overview.This is Movie overview.This is Movie overview.This is Movie overview.This is Movie overview.This is Movie overview.This is Movie overview.This is Movie overview.This is Movie overview.',200)}
                
            </h1>
        </div>   
        <div className="banner--fadeBottom"/>
        </header>
    );
}

export default Banner;
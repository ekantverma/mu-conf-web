import './Posters.css';

const Posters = () => {
    return (
        <div className="conf-main">
            <div className="conf-detail">
                <div className='conf-text'>
                <h1 className='cong-high-top'>2<sup>nd</sup> National Conference</h1>
                <h1>On</h1>
                <h1 className='cong-high'>Advances in Computing Applications</h1>
                <h1>NAAC-2024</h1>
                <h1 className='cong-high'>April 2<sup>th</sup>-8<sup>th</sup> 2024</h1>
                </div>
                <div className='conf-img'>
                    <img src='https://www.mangalayatan.in/wp-content/uploads/2022/07/Picture-387.jpg' alt=''></img>
                </div>
            </div>
            <div className="conf-img conf-imgs">
                <img className='poster-img' src='' alt=''></img>
                <img className='poster-img' src='' alt=''></img>
                <img className='poster-img' src='' alt=''></img>
                <img className='poster-img' src='' alt=''></img>
            </div>
            <div className="conf-footer"></div>
        </div>
    );
}

export default Posters;

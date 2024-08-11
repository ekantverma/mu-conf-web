import './Posters.css';
import photo from '../assets/photo-1508780709619-79562169bc64.avif';
import photo2 from '../assets/photo_2024-08-11_09-31-23.jpg';
import photo3 from '../assets/200be61c91c9fb5d42a07d60ebe7a5d2.jpeg'
import photo4 from '../assets/30704935_165090757539266_1082462840993873920_n.jpg'


const Posters = () => {
    return (
        <><div><div className="conf-main">
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
        </div>
            <div className='org-names'>
                <div className='wal-img'>
                    <img src={photo} alt=''></img>
                </div>
                <div className='org-text'>
                    <h1 className='org'>Organised By</h1>
                    <h1 className='org-dep'>Department of Computer Applications</h1>
                    <h2 className='org-fac'>Faculty of Engineering & Sciences</h2>
                    <h1 className='org-clg'>Mangalayatan University</h1>
                </div>
            </div>
            {/* <div className='sup-names'></div> */}
            <div className="conf-footer">
                <div className="sponsors">
                    <h2>Supported By</h2>
                    <div className="sponsor-logos">
                        <div className="sponsor">
                            <img src={photo2} alt="Sponsor 1" />
                            {/* <p>Sponsor Name 1</p> */}
                        </div>
                        <div className="sponsor">
                            <img src={photo3} alt="Sponsor 2" />
                            {/* <p>Sponsor Name 2</p> */}
                        </div>
                        <div className="sponsor">
                            <img src={photo4} alt="Sponsor 3" />
                            {/* <p>Sponsor Name 3</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="conf-img conf-imgs">
                <img className='poster-img' src='' alt=''></img>
                <img className='poster-img' src='' alt=''></img>
                <img className='poster-img' src='' alt=''></img>
                <img className='poster-img' src='' alt=''></img>
        </div></>
    );
}

export default Posters;

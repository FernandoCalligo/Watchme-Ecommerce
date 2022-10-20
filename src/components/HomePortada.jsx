import React from 'react';

const HomePortada = () => {
    return (
        <>
            <div className="watchmeport">
                <img src="https://firebasestorage.googleapis.com/v0/b/watchme-3e199.appspot.com/o/WatchMe!.png?alt=media&token=6ab0dcee-f74d-4208-818c-5acda79174dc" alt="WatchMe!" className='portada' />
                <div className="textcont">
                    <h1 className="animate__animated animate__backInUp portTitle">WatchMe!</h1>
                    <span className="animate__animated animate__backInUp portDesc">Lentes y Relojes</span>
                </div>
            </div>
        </>
    );
}

export default HomePortada;

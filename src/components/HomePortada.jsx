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
                <div className="arrowcont">
                    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="65" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                        <path className='arrowWithe' d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                    </svg>
                </div>
            </div>
        </>
    );
}

export default HomePortada;

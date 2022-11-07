import React, { useRef, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import data from '../data.json'

const Planet = () => {

    const { name } = useParams()
    const planet = data.find(planet => planet.name == name)
    const [info, setInfo] = useState('overview')

    const selectInfo = (e) => {
        let ref = e.target.textContent
        if (ref.includes('surface') || ref.includes('03')) {
            ref = 'geology'
        } else if (ref.includes('structure') || ref.includes('02')) {
            ref = 'structure'
        } else if (ref.includes('overview') || ref.includes('01')) {
            ref = 'overview'
        }
        setInfo(ref)
    }

    const displayPlanet = () => {
        if (planet) {
            const { images, geology, overview, radius, revolution, rotation, structure, temperature } = planet
            const planetImg = require(`../assets/${images.planet}`)
            const internalImg = require(`../assets/${images.internal}`)
            const geologyImg = require(`../assets/${images.geology}`)
            return (
                <section className='planet-section'>
                    <div className='mobile-planet-btns'>
                        <button onClick={selectInfo} className={ info == 'overview' ? `${name} active` : `${name}` }>
                            overview
                        </button>
                        <button onClick={selectInfo} className={ info == 'structure' ? `${name} active` : `${name}` }>
                            structure
                        </button>
                        <button onClick={selectInfo} className={ info == 'geology' ? `${name} active` : `${name}` }>
                            surface
                        </button>
                    </div>
                    <div className='planet-content'>
                        <div className='planet-img' >
                            <img src={ info == 'overview'
                                        ? planetImg
                                        : info == 'structure'
                                            ? internalImg
                                            : info == 'geology'
                                                ? planetImg
                                                : null
                                    } 
                                alt={name} 
                            />
                            { info == 'geology'
                                ?   <img className='geology-img' src={geologyImg} alt='surface' />
                                : null
                            }
                        </div>
                        <div className='planet-info'>
                            <div>
                                <h1>
                                    {name}
                                </h1>
                                <br />
                                <p>
                                    { info == 'overview'
                                        ? overview.content
                                        : info == 'structure'
                                            ? structure.content
                                            : info == 'geology'
                                                ? geology.content
                                                : null
                                    }
                                </p>
                                <br />
                                <h6>
                                    Source: 
                                    <a href={info == 'overview'
                                        ? overview.source
                                        : info == 'structure'
                                            ? structure.source
                                            : info == 'geology'
                                                ? geology.source
                                                : null
                                        } 
                                        target="_blank">Wikipedia
                                    </a>
                                </h6>
                            </div>
                            <div className='planet-btns'>
                                <button onClick={selectInfo} className={ info == 'overview' ? `${name} active` : `${name}` }>
                                    <span>01</span> <h2>overview</h2>
                                </button>
                                <button onClick={selectInfo} className={ info == 'structure' ? `${name} active` : `${name}` }>
                                    <span>02</span> <h2>internal structure</h2>
                                </button>
                                <button onClick={selectInfo} className={ info == 'geology' ? `${name} active` : `${name}` }>
                                    <span>03</span> <h2>surface geology</h2>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='planet-stats'>
                        <div className='stat'>
                            <h6>rotation time</h6>
                            <h2>{rotation}</h2>
                        </div>
                        <div className='stat'>
                            <h6>revolution time</h6>
                            <h2>{revolution}</h2>
                        </div>
                        <div className='stat'>
                            <h6>radius</h6>
                            <h2>{radius}</h2>
                        </div>
                        <div className='stat'>
                            <h6>average temp</h6>
                            <h2>{temperature}</h2>
                        </div>
                    </div>
                </section>
            )
        } else {
            return (
                <Navigate to='/earth' />
            )
        }
    }

    return (
        <>
            { displayPlanet() }
        </>
    )
}

export default Planet
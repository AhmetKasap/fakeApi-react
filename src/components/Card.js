import React, { Component } from 'react'

export default class Card extends Component {
    
    render() {
        return (
            this.props.info.map(data => {
                return (
                    <div className="col-lg-4 my-2">
                        <div className="card bg-dark">
                            <button className="btn btn-outline-primary  btn-lg " data-bs-toggle="collapse" href={"#".concat(data.name)} aria-expanded="false" >{data.name}</button>
                            <div className="card-body collapse" id={data.name}>
                                <h5 className="card-title card-title-style"> {data.meaning} </h5>
                                <h6 className='card-text card-example-style text-center mt-4'> Örnekler</h6>

                                <div className='card-footer'>
                                    <p className="card-text card-text-style">1. {data.examples1} </p>
                                    <p className="card-text card-text-style">2. {data.examples2} </p>
                                    <p className="card-text card-text-style">3. {data.examples3} </p>
                                </div>

                            </div>
                        </div>
                    </div>
                );
            })

        );


    }
}

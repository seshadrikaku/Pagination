import React, { useEffect, useState } from 'react'
import './home.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Color = () => {
    const [data, setData] = useState([]);
    const [visibleData, setVisibleData] = useState([])
    const [indexNumber, setIndexNumber] = useState(0)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setData(data)
                setVisibleData(data.slice(indexNumber, indexNumber + 10))
            })
    }, [indexNumber])

    const seePrevious = (e) => {
        e.preventDefault()
        const preData = visibleData.slice(indexNumber - 10, indexNumber)
        setVisibleData(preData)
        setIndexNumber(indexNumber - 10)
    }

    const seeMore = (e) => {
        e.preventDefault()
        const nextData = visibleData.slice(indexNumber + 10, indexNumber + 10)
        setVisibleData(nextData);
        setIndexNumber(indexNumber + 10)
    }
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <h2 className='page text-center '>Pagination</h2>
                    {
                        visibleData.map((item) => {
                            return (
                                <>
                                    <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6'>
                                        <div className='car  py-4 my-1 px-2 mt-4 shadow ' style={{ height: "250px" }}>
                                            <p className='name px-2 mt-3 '> <b>Name : </b> {item.name}</p>
                                            <p className='email px-2'><b>Email : </b>  {item.email}</p>
                                            <p className='comment px-2'><b>Comments : </b> {item.body}</p>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
                <div className='col-12 mt-5'>
                    <form className='d-flex mb-5'>
                        <div className='mx-auto'>
                            {indexNumber >= 10 && (
                                <button className='btn btn-outline-primary  my-2' onClick={seePrevious}><ArrowBackIosIcon /><ArrowBackIosIcon /></button>
                            )}
                        </div>
                        <div className='mx-auto'>
                            <button className='btn btn-outline-primary my-2' onClick={seeMore}><ArrowForwardIosIcon /><ArrowForwardIosIcon /> </button>
                        </div>
                    </form>
                </div>
               
            </div>

        </>
    )
}

export default Color
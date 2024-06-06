import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Home() {
    const [value, setValue] = useState('');

    const navigate = useNavigate();

    // Handle Join Room Function 
    const handleJoinRoom = useCallback(() => {
        if (!value) {
            return alert('Please Enter Room Id')
        }
        if (value.length<3) {
            return alert('Please Enter atleast 3 number')
        }
        navigate(`/room/${value}`);
    })

    return (
        <>
            <div className='flex justify-center items-center h-screen bg-gray-900'>

                {/* Main Div  */}
                <div className="main-div">

                    {/* Input And Button  */}
                    <div className="input bg-gray-950 px-5 py-6 rounded-xl border border-gray-600 shadow-md ">

                        {/* Video Calling Image  */}
                        <div className="flex justify-center mb-8">

                            {/* Image Tag  */}
                            <img
                                className='w-20 border rounded-full border-gray-600'
                                src="https://cdn-icons-png.flaticon.com/128/11104/11104179.png" 
                                alt="img"
                            />
                        </div>

                        {/* Input Tag */}
                        <input
                            type="text"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            className='bg-gray-950  rounded-lg border
                            border-gray-600 py-2 px-2 outline-none w-80 lg:w-96 text-lg text-white mb-5'
                            placeholder='Enter any 3 number or character'/>

                        {/* Br Tag */}
                        <br />

                        {/* Button Tag */}
                        <button
                            type='button'
                            onClick={handleJoinRoom}
                            className='  text-gray-300  font-bold px-8 py-2 rounded-lg w-full'
                        >
                            Join Room
                        </button>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Home
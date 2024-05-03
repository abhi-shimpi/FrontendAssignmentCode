import React from 'react'

function ShimmerForLogin() {
    return (
        <div className='flex justify-center flex-wrap p-10 gap-4'>
            <div className="shimmer-card-login md:w-full">
                <span className="loader-element"></span>
            </div>
        </div>
    )
}

export default ShimmerForLogin;
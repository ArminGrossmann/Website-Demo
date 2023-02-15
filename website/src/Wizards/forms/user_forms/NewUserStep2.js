import React from 'react'

export default function NewUserStep2() {
    return (
        <div className="w-full">
            <div className="p-4">
                <div className="flex items-center">
                    <div className="flex items-center text-gray-600 relative">
                        <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2  border-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user-plus ">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                <circle cx="8.5" cy="7" r="4"></circle>
                                <line x1="20" y1="8" x2="20" y2="14"></line>
                                <line x1="23" y1="11" x2="17" y2="11"></line>
                            </svg>
                        </div>
                        <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-600">Contact</div>
                    </div>

                    <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-600"></div>

                    <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-600"></div>
                    <div className="flex items-center text-white relative">
                        <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 bg-gray-600 border-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-database ">
                                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                            </svg>
                        </div>
                        <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">Confirm</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

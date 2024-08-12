import React from 'react'
import { CloudUpload } from 'lucide-react'
import Button from '../../components/Button'
import useNotification from '../../hooks/useNotification'
import { useNavigate } from 'react-router-dom'

import { addEvent } from '../../store/reducers/events'

const AddEvent = () => {
    const navigate = useNavigate()

    const { showNotification } = useNotification()
    const [isMulti, setIsMulti] = React.useState<boolean>(false)
    const [eventData, setEventData] = React.useState({
        title: "",
        value: "",
        percent: "",
        avatar: "",
    })
    const handleApplyEvent = () => {
        if (!eventData.title || !eventData.value || !eventData.percent || !eventData.avatar) {
            showNotification("Incorrect Input Data!", "error")
        } else {
            // TODO  addEvent(eventData.title,eventData.percent,eventData.value,eventData.percent)
            console.log(eventData)
            showNotification("Successfully!", "success")
        }
    }
    return (
        <div className="mx-40 my-20">
            <p className="text-5xl font-bold">Add Events</p>
            <hr />
            {/* <div className="flex flex-col font-semibold justify-between border-2 border-red-800 pt-8 pb-4"> */}
                <div className="flex flex-col px-[30vw] justify-between border-2 border-red-800 pt-8 pb-4 font-semibold">
                    <label className='flex  pb-2 text-lg font-semibold text-gray-900 '>
                        Event Title
                    </label>
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <input
                                id="title"
                                name="title"
                                type="text"
                                placeholder="Input title here ..."
                                autoComplete="title"
                                onChange={(e) => setEventData({ ...eventData, title: e.target.value })}
                                className="flex w-full border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 text-md"
                            />
                        </div>
                
                    <label className='flex pl-[28vw] pb-2 text-lg font-semibold text-gray-900 '>
                        Value
                    </label>
                    <div className='flex pl-[30vw]'>
                        <div className="flex w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <input
                                id="value"
                                name="value"
                                type="text"
                                placeholder="Input title here ..."
                                autoComplete="value"
                                onChange={(e) => { setEventData({ ...eventData, value: e.target.value }) }}
                                className="flex w-full border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 text-md"
                            />
                        </div>
                    </div>
               
                    <label className='flex pl-[28vw] pb-2 text-lg font-semibold text-gray-900 '>
                        Percent
                    </label>
                    <div className='flex pl-[30vw]'>
                        <div className="flex w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <input
                                id="percent"
                                name="percent"
                                type="text"
                                placeholder="Input Field here ..."
                                autoComplete="percent"
                                onChange={(e) => { setEventData({ ...eventData, percent: e.target.value }) }}
                                className="flex border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 text-md"
                            />
                        </div>
                    </div>
          
                    <label className='flex pl-[28vw] pb-2 text-lg font-semibold text-gray-900 '>
                        Avatar
                    </label>
                    <div className='flex pl-[30vw] pb-4'>
                        <div className="flex w-full items-center pl-2 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <CloudUpload />
                            <input
                                id="avatarInput"
                                name="avatar"
                                type="file"
                                placeholder="Input Field here ..."
                                onChange={(e) => { setEventData({ ...eventData, avatar: e.target.value }) }}
                                className="flex border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 text-md"
                            />
                        </div>
                    </div>
                
                    <label className='flex pl-[28vw] pb-2 font-semibold text-gray-900 '>
                        Which method you to choose?
                    </label>
                    <div className='flex flex-col gap-1 pl-[30vw]'>
                        <div className="flex w-full gap-2 pl-2 rounded-md shadow-sm sm:max-w-md">
                            <input
                                id="singleRadio"
                                name="title"
                                type="radio"
                                defaultChecked
                                onChange={() => setIsMulti(false)}
                            />
                            <label htmlFor="title" className="flex font-semibold text-gray-900 ">
                                Single
                            </label>
                        </div>

                        <div className="flex w-full gap-2 pl-2 rounded-md shadow-sm sm:max-w-md">
                            <input
                                id="multiRadio"
                                name="title"
                                type="radio"
                                onChange={() => setIsMulti(true)}
                            />
                            <label htmlFor="title" className="flex font-semibold text-gray-900 ">
                                Multiple
                            </label>
                        </div>
                    {/* </div> */}
                </div>
                {isMulti == true
                    ? (
                        <div className="flex flex-col font-semibold">
                            <label className='flex pl-[28vw] pb-2 text-lg font-semibold text-gray-900 '>
                                Extra Value
                            </label>
                            <div className='flex pl-[30vw]'>
                                <div className="flex w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input
                                        id="value"
                                        name="value"
                                        type="text"
                                        placeholder="Input title here ..."
                                        autoComplete="value"
                                        onChange={(e) => { setEventData({ ...eventData, value: e.target.value }) }}
                                        className="flex border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 text-md"
                                    />
                                </div>
                            </div>
                        </div>

                    )
                    : "Single"}
            </div>
            <hr />

            <div className='flex justify-end p-3 gap-6 pt-6'>
                <Button text='Cancel' value='eventCancel' className='flex px-3 py-2 bg-gray-300 text-black items-center hover:bg-blue-300 rounded-md' onClick={() => navigate('/admin', { replace: true })} />
                <Button text='Apply' value='eventSave' className='flex px-5 py-2 bg-blue-700 text-white items-center hover:bg-blue-300 rounded-md' onClick={() => handleApplyEvent()} />
            </div>
        </div >
    )
}

export default AddEvent;
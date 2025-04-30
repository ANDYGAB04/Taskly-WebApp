
import ModalWrapper from '../ModalWrapper'
import { Dialog } from '@headlessui/react'
import Textbox from '../Textbox'
import { set, useForm } from 'react-hook-form'
import UserList from './UserList'
import { useState, React } from 'react'
import SelectList from '../SelectList'
import { BiImages } from "react-icons/bi";
import Button from '../Button'

const LISTS = ["TODO", "IN PROGRESS", "COMPLETED"];
const PRIORIRY = ["HIGH", "MEDIUM", "NORMAL", "LOW"];

const uploadedFileURLs = [];

const AddTask = ({ open, setOpen }) => {
    const task = ""
    const { register, handleSubmit, formState: { errors } } = useForm()
    const submitHandler = () => { }
    const [team, setTeam] = useState(task?.team || []);
    const [stage, setStage] = useState(task?.stage?.toUpperCase() || LISTS[0]);
    const [priority, setPriority] = useState(
        task?.priority?.toUpperCase() || PRIORIRY[2]
    );
    const handleSelect = (e) => {
        setSelectedFiles(e.target.files)

    }
    const [assets, setAssets] = useState([])
    const [uploading, setUploading] = useState(false)

    return (
        <>
            <ModalWrapper open={open} setOpen={setOpen}>
                <form onSubmit={handleSubmit(submitHandler)} >
                    <Dialog.Title
                        as='h2'
                        className='text-base font-bold leading-6 text-fuchsia-800 mb-4'
                        style={{marginTop:'1rem',marginLeft:"1rem"}}
                    >
                        {task ? "UPDATE TASK" : "ADD TASK"}
                    </Dialog.Title>
                    <div className='mt-2 flex flex-col gap-6' style={{ marginLeft: '1rem',marginRight: '1rem',marginTop: '1rem',marginBottom: '1rem' }}>
                        <Textbox
                            placeholder="Task Title"
                            type="text"
                            name="title"
                            label="Task Title"
                            className="w-full rounded"
                            register={register("title", {
                                required: "Task title is required",
                            })}
                            errors={errors.title ? errors.title.message : ""}
                        />
                        <UserList
                            setTeam={setTeam}
                            team={team}
                        />
                        <div className="flex gap-4">
                            <SelectList
                                label="Task Status"
                                lists={LISTS}
                                selected={stage}
                                setSelected={setStage}
                            />
                            <SelectList
                                label='Priority Level'
                                lists={PRIORIRY}
                                selected={priority}
                                setSelected={setPriority}
                            />

                        </div>
                        <div className='flex gap-4'>
                            <div className='w-full'>
                                <Textbox
                                    placeholder='Date'
                                    type='date'
                                    name='date'
                                    label='Task Date'
                                    className='w-full rounded'
                                    register={register("date", {
                                        required: "Date is required!",
                                    })}
                                    error={errors.date ? errors.date.message : ""}
                                />
                            </div>
                            <div className='w-full flex items-center justify-center mt-4'>
                                <label
                                    className='flex items-center gap-1 text-base text-ascent-2 hover:text-ascent-1 cursor-pointer my-4'
                                    htmlFor='imgUpload'
                                >
                                    <input
                                        type='file'
                                        className='hidden'
                                        id='imgUpload'
                                        onChange={(e) => handleSelect(e)}
                                        accept='.jpg, .png, .jpeg'
                                        multiple={true}
                                    />
                                    <BiImages />
                                    <span>Add Assets</span>
                                </label>
                            </div>
                        </div>
                        <div className='bg-gray-50 mt-6 mb-4 sm:flex sm:flex-row-reverse gap-4'>
                            {uploading ? (
                                <span classname=" text-sm py-2 text-red-500">
                                    Uploading assets
                                </span>
                            ) : (
                                <Button
                                    label='Submit'
                                    type='submit'
                                    className='bg-fuchsia-600 px-8 text-sm font-semibold text-white hover:bg-fuchsia-700  sm:w-auto rounded-full'
                                />
                            )}
                            <Button
                                type='button'
                                className='bg-white px-5 text-sm font-semibold text-gray-900 sm:w-auto'
                                onClick={() => setOpen(false)}
                                label='Cancel'
                            />
                        </div>

                    </div>
                </form>

            </ModalWrapper>
        </>
    )
}

export default AddTask
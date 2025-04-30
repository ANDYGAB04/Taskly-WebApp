import React, { useState } from 'react'
import { MdGridView, MdOutlineDashboardCustomize } from "react-icons/md";
import { FaList } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import Loading from "../components/Loader";
import Title from "../components/Title";
import { IoMdAdd } from 'react-icons/io';
import Button from "../components/Button";
import Tabs from "../components/Tabs";
import TaskTitle from "../components/TaskTitle";
import BoardView from '../components/BoardView';
import { tasks } from "../assets/data";
import Table from "../components/Task/Table";
import AddTask from "../components/Task/AddTask";




const TABS = [
  { title: "Board View", icon: <MdGridView /> },
  { title: "List View", icon: <FaList /> },
];

const TASK_TYPE = {
  todo: "bg-red-700",
  "in progress": "bg-purple-800",
  completed: "bg-green-800",
};

const Tasks = () => {
  const params = useParams();

  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const status = params?.status || "";

  return loading ? (
    <div className='py-10'>
      <Loading />
    </div>
  ) : (
    <div className='w-full' style={{ marginTop: '1rem' }}>
      <div className='flex items-center justify-between mb-4 ' style={{ marginLeft: '1rem' }}>
        <Title title={status ? `${status} Tasks` : "Tasks"} />

        {
          !status && (
            <div style={{ marginRight: '1rem' }} className='hidden md:flex'>
              <Button
               onClick={() => setOpen(true)}
                label="Create Task"
                icon={<IoMdAdd className="text-lg" />}
                className="flex flex-row-reverse gap-1 items-center bg-purple-700 hover:bg-purple-800 text-white rounded-full px-4 py-2 shadow-lg transition-all duration-300 mr-6 mt-4"
              />
            </div>
          )
        }

      </div>
      <div>
        <Tabs tabs={TABS} setSelected={setSelected} >
          {!status && (
            <div className='w-full flex justify-between gap-4 md:gap-x-12 py-4 '>
              <TaskTitle label="To Do" className={TASK_TYPE.todo} />
              <TaskTitle label="In Progress" className={TASK_TYPE["in progress"]} />
              <TaskTitle label="Completed" className={TASK_TYPE.completed} />
            </div>
          )}

          {selected !== 1 ? (
            <BoardView tasks={tasks} />
          ) : (
            <div className='w-full'>
              <Table tasks={tasks} />
            </div>
          )}
        </Tabs>
        <AddTask open={open} setOpen={setOpen}/>
      </div>
    </div>
  );

}

export default Tasks
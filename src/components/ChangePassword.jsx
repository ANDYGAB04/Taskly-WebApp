import { Dialog } from "@headlessui/react";
import React from "react";
import { useForm } from "react-hook-form";
import Button from "./Button";
import Loading from "./Loader";
import ModalWrapper from "./ModalWrapper";
import Textbox from "./Textbox";
import { toast } from "sonner";
import { useChangePasswordMutation } from "../redux/slices/api/userApiSlice";

const ChangePassword = ({ open, setOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [changeUserPassword, { isLoading }] = useChangePasswordMutation();

  const handleOnSubmit = async (data) => {
    if (data.password !== data.cpass) {
      toast.warning("Passwords don't match");
      return;
    }
    try {
      const res = await changeUserPassword({ password: data.password }).unwrap();
      toast.success("Password changed successfully");

      setTimeout(() => {
        setOpen(false);
      }, 1500);
    } catch (err) {
      console.log(err);
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <>
      <ModalWrapper open={open} setOpen={setOpen}>
        <form onSubmit={handleSubmit(handleOnSubmit)} className=''>
          <Dialog.Title
            as='h2'
            className='text-base font-bold leading-6 text-gray-900 mb-4'
            style={{ marginTop: '1rem', marginRight: '1rem', marginLeft: '0.7rem' }}
          >
            Change Password
          </Dialog.Title>
          <div className='mt-2 flex flex-col gap-6' style={{ marginTop: '1.2rem', marginRight: '1rem', marginLeft: '1rem' }}>
            <Textbox
              placeholder='New Password'
              type='password'
              name='password'
              label='New Password'
              className='w-full rounded'
              register={register("password", {
                required: "New Password is required!",
              })}
              error={errors.password ? errors.password.message : ""}
            />
            <Textbox
              placeholder='Confirm New Password'
              type='password'
              name='cpass'
              label='Confirm New Password'
              className='w-full rounded'
              register={register("cpass", {
                required: "Confirm New Password is required!",
              })}
              error={errors.cpass ? errors.cpass.message : ""}
            />
          </div>

          {isLoading ? (
            <div className='py-5'>
              <Loading />
            </div>
          ) : (
            <div
              className='py-3 mt-4 sm:flex justify-between'
              style={{
                marginTop: '1.2rem',
                marginRight: '1rem',
                marginLeft: '1rem',
                marginBottom: '1.2rem',
              }}
            >
              <Button
                type='button'
                className='bg-white px-5 text-sm font-semibold text-gray-900 sm:w-auto rounded-full'
                onClick={() => setOpen(false)}
                label='Cancel'
              />

              <Button
                type='submit'
                className='bg-fuchsia-600 px-8 text-sm font-semibold text-white hover:bg-fuchsia-700 sm:w-auto rounded-full'
                label='Save'
              />
            </div>
          )}
        </form>
      </ModalWrapper>
    </>
  );
};

export default ChangePassword;
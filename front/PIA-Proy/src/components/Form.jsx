/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useForm } from "react-hook-form";

export const Form = () => {
    const { register, handleSubmit, formState: {errors} } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className=" mt-2">
            <form onSubmit={handleSubmit(onSubmit)} className="container">
                <div className="mb-3">
                    <label className="form-label">Seccion:</label>
                    <input className="form-control" {...register('seccion', {required: true})} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Clave del Anexo:</label>
                    <input className="form-control" {...register('claveAnexo', {required: true})} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Nombre del Anexo:</label>
                    <input className="form-control" {...register('nombreAnexo', {required: true})} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Aplica:</label>
                    <br />
                    Yes <input className='me-4' {...register('aplica', {required: true})} type="radio" value='Si' />
                    No <input {...register('aplica', {required: true})} type="radio" value='No' />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

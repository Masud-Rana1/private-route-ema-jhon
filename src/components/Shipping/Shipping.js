import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Shipping.css';
const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user} = useAuth();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <form className="shipping-from" onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue={user.displayName} {...register("name")} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input defaultValue={user.email} {...register("email", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.email && <span className="error">This field is required</span>}
      <input placeholder="Address" defaultValue="" {...register("address")} />
      <input placeholder="city" defaultValue="" {...register("city")} />
      <input placeholder="Phone-number" defaultValue="" {...register("phone")} />
      
      <input type="submit" />
    </form>
        </div>
    );
};

export default Shipping;
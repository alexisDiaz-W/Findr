"use client"
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  example: string
  exampleRequired: string
  companyID: number
  companyName: string
  email: string
  address: string
}

export default function App() {

  // Inline style objects
  const formStyle = {
    display: 'flex',
    gap: '10px',
    width: '500px',
  };

  const inputStyle = {
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    color: 'black'
  };

  const buttonStyle = {
    color: 'black',
    fontSize: '25px'
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)


  console.log(watch("example")) // watch input value by passing the name of it


  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)} style={formStyle}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("example")} style={inputStyle} />


      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} style={inputStyle}/>
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="text" style={inputStyle}></input>


      <input type="submit" style={buttonStyle}/>
    </form>
  )
}
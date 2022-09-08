import S from './FormNewsLetter.module.css'
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';


export const FormNewsLetter = () => {
  const {register,handleSubmit,formState: { errors },} = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className={S.containerPai}>
      <p className={S.texto}><b>Deseja receber ofertas exclusivas? Preencha com seu e-mail!</b></p>
      <form className={S.container}>
      <input className={S.imput} {...register('Email',{ pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })} placeholder='E-mail'/>
      {errors.Email && <p>Digite um e-mail válido</p>}
      <div className={S.button}>
      <Button onClick={handleSubmit(onSubmit)} style={{
        backgroundColor: "#437a37",color:"#fff",}}variant="contained">Enviar</Button>
      </div>
      {/*<input type="submit" value="Enviar" />*/}
     </form>
     
    </div>
  )
}


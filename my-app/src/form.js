
import React, {useState} from "react";
import axios from "axios";
import * as Yup from "yup";
import {Form, Field, withFormik} from "formik";







const UserForm = ({ errors, touched}) => {
       
    
    return(
<div className="userform">
<h1>Enter User Data Here</h1>
<Form>
<Field type="text" name="name" placeholder="Please enter name">
{/* valadation stuff */}
</Field>
<Field type="text" email="email" placeholder="Please enter E-mail">
{/* valadation stuff */}
</Field>
<Field type="password" password="name" placeholder="Enter Password">
{/* valadation stuff */}
</Field>




</Form>
</div>


    );
    
}

export default UserForm;




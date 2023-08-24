import { Card, Typography, Grid, Checkbox, FormControlLabel, Box } from '@mui/material';
import './signup.styles.scss';
import MyTextField from '../../components/text-input/text-field';
import { InputLabel } from '../../components/text-input/text-field';
import { useEffect, useState } from 'react';
import InputSlider from '../../components/slider/slider.component';
import InputButton from '../../components/button/button';
import { PhoneInputField } from '../../components/text-input/text-field';
import { UserValidationSchema } from '../../validations/UserSignup';
import { useFormik } from 'formik';

const FormCheckBox = ({labelText, onCheckChange}) => {
    
    return (
        <FormControlLabel 
        control={
            <Checkbox 
            id={labelText}
            onChange={onCheckChange}
            sx={{
                color: '#aaa',
                '&.Mui-checked': {
                    color: '#aaa',
                },
            }}/>
        } 
        style={{color:'#ccc'}}
        label={<Typography style={{fontSize:'12px'}}>{labelText}</Typography>} />
    );
} 

const SignupPage = () => {
    const todayDate = new Date().toISOString().split('T')[0];
    const [formInputs, setFormInputs] = useState({
        firstName:"",
        lastName: "",
        email: "",
        number: "",
        dob : "",
        interests : [],
        proficiency : [],
        password: "",
        confirmPassword : ""
    });

    const formik = useFormik({
        initialValues :{
            firstName:"",
            lastName: "",
            email: "",
            number: "",
            dob : "",
            interests : [],
            proficiency : [],
            password: "",
            confirmPassword : ""
        }
    });

    useEffect(() => {
      
        console.log(formik.values);
      
    }, [formik.values])

    const handleInterestSelect = (event) => {
        let interests = [...formik.values.interests];
            
        if(event.target.checked) {
            interests.push(event.target.id);
        }
        else {
            interests = interests.filter(function(item) {
                return item !== event.target.id;
            })
        }

        formik.setFieldValue('interests', interests);
    };
    
    const handleSliderChange = (event, v) => {
        let proficiency = {...formik.values.proficiency};
        proficiency[event.target.name] = v;
        formik.setFieldValue('proficiency', proficiency);
    }

    const handleSignup = async (event) => {
        event.preventDefault();
        try {
            const isValid = await UserValidationSchema.validate(formInputs);
            console.log(isValid);
        } catch (error) {
            console.log(error.errors);
        }
    }

    const handlePhoneNumberChange = async (val) => {
        formik.setFieldValue('number', val);
    }

    return (
        <div className='div-signup-container'>

            {/* Title */}
            <Typography >Sign Up Form</Typography>
            
            {/* Singup Card */}
            <Card
                className='card-signup'>

                <Grid container columnSpacing={2} rowSpacing={2}>

                    {/* Name */}
                    <Grid item xs={6}>
                        <MyTextField
                        style={{margin:'20px'}}
                        textLabel="First Name"
                        textId="firstName"
                        textValue={formik.values.firstName}
                        onTextChange={formik.handleChange}
                        />
                    </Grid>
                
                    {/* Last Name */}
                    <Grid item xs={6}>
                        <MyTextField
                        textLabel="Last Name"
                        textId="lastName"
                        textValue={formik.values.lastName}
                        onTextChange={formik.handleChange}
                        />
                    </Grid>
                
                    {/* Email */}
                    <Grid item xs={12}>
                        <MyTextField
                        textFieldType="email"
                        textLabel="Email"
                        textId="email"
                        textValue={formik.values.email}
                        onTextChange={formik.handleChange}
                        />
                    </Grid>
  
                    {/* Phone Number */}
                    <Grid item md={6} xs={12}>
                        
                        <PhoneInputField 
                            textLabel="Number"
                            textId="number"
                            textValue={formik.values.number}
                            onTextChange={handlePhoneNumberChange}
                        />
                    </Grid>

                    {/* DOB*/}
                    <Grid item md={6} xs={12} >
                        <Box
                        display="flex"
                        flexDirection="column"
                        >
                            <InputLabel labelText="Date of Birth" />
                            <input 
                            id='dob'
                            style={{ paddingLeft:'10px', paddingRight:'10px', height:'50px'}}
                            type="date" 
                            max={todayDate} 
                            onChange={formik.handleChange}/>
                        </Box>
                    </Grid>

                    {/* Interests */}
                    <Grid item xs={12}>
                        <div style={{display:'flex', flexDirection:'column'}}>
                            <Typography>Interests</Typography>
                            <div style={{display:'flex', flexWrap:'wrap'}}>
                                <FormCheckBox
                                    labelText="Full Stack"
                                    onCheckChange={handleInterestSelect}
                                />
                                <FormCheckBox labelText="Backend" onCheckChange={handleInterestSelect} />
                                <FormCheckBox labelText="Frontend" onCheckChange={handleInterestSelect}/>
                                <FormCheckBox labelText="Testing" onCheckChange={handleInterestSelect}/>
                                <FormCheckBox labelText="UI/UX" onCheckChange={handleInterestSelect}/>
                                <FormCheckBox labelText="DevOPs" onCheckChange={handleInterestSelect}/>
                                <FormCheckBox labelText="Site Reliability" onCheckChange={handleInterestSelect}/>
                            </div>
                        </div>
                    </Grid>

                    {/* Language Proficiency */}
                    <Grid item xs={12}>
                        <div style={{display:'flex', flexDirection:'column'}}>
                            <Typography>Language Proficiency</Typography>
                            <InputSlider 
                                onSliderChange={handleSliderChange}
                                labelText="Java"
                            />
                            <InputSlider 
                                onSliderChange={handleSliderChange}
                                labelText="Javascript"
                            />
                            <InputSlider 
                                onSliderChange={handleSliderChange}
                                labelText="Python"
                            />
                            <InputSlider 
                                onSliderChange={handleSliderChange}
                                labelText="Typescript"
                            />
                            <InputSlider 
                                onSliderChange={handleSliderChange}
                                labelText="C++"
                            />
                        </div>
                    </Grid> 

                    {/* Password */}
                    <Grid item md={6} xs={12}>
                        <MyTextField
                        textId="password"
                        textFieldType='password'
                        textLabel="Password"
                        textValue={formik.values.password}
                        onTextChange={formik.handleChange}
                        />
                    </Grid>

                    {/* Confirm Password */}
                    <Grid item md={6} xs={12}>
                        <MyTextField
                        textId="confirmPassword"
                        textFieldType='password'
                        textLabel="Confirm Password"
                        textValue={formik.values.confirmPassword}
                        onTextChange={formik.handleChange}
                        />
                    </Grid>

                    {/* Submit Button */}
                    <Grid item xs={12}>
                        <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        >
                            <InputButton 
                                buttonText={"Sign Up"}
                                buttonVariant="contained"
                                onButtonClick = {handleSignup}
                            />
                        </Box>
                    </Grid>
                    
                </Grid>

            </Card>
        </div>
    );
} 

export default SignupPage;
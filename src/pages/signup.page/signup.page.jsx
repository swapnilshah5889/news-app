import { Card, Typography, Grid, Checkbox, FormControlLabel, Box } from '@mui/material';
import './signup.styles.scss';
import MyTextField from '../../components/text-input/text-field';
import { InputLabel } from '../../components/text-input/text-field';
import { useEffect, useState } from 'react';
import InputSlider from '../../components/slider/slider.component';
import InputButton from '../../components/button/button';
import { PhoneInputField, ErrorLabel } from '../../components/text-input/text-field';
import { UserValidationSchema } from '../../validations/UserSignup';
import { useFormik } from 'formik';
import DatePicker from '../../components/date-picker/date-picker.component';

const FormCheckBox = ({labelText, onCheckChange, isChecked, checkBoxId}) => {
    
    return (
        <FormControlLabel 
        control={
            <Checkbox 
            id={checkBoxId}
            checked={isChecked}
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

const interestsJsonArr = [
    {
        id:'1',
        name:'Full Stack'
    },
    {
        id:'2',
        name:'Backend'
    },
    {
        id:'3',
        name:'Frontend'
    },
    {
        id:'4',
        name:'Testing'
    },
    {
        id:'5',
        name:'UI/UX'
    },
    {
        id:'6',
        name:'DevOPs'
    },
    {
        id:'7',
        name:'Site Reliability'
    }
]

const langProfJsonArr = [
    {
        id:'1',
        name:'Java'
    },
    {
        id:'2',
        name:'JavaScript'
    },
    {
        id:'3',
        name:'Python'
    },
    {
        id:'4',
        name:'TypeScript'
    },
    {
        id:'5',
        name:'C++'
    },
    {
        id:'6',
        name:'HTML/CSS'
    }
]

const SignupPage = () => {

    // const [formStates, setFormStates] = useState({
    //     interse
    // });

    // Current system date
    const todayDate = new Date().toISOString().split('T')[0];

    // Signup User
    const handleSignup = (values, actions) => {
        alert("Signup successful");
        actions.resetForm();
        
        // Reset interests
        let interests = {...formik.values.interests};
        Object.keys(interests).map((key) => {
            interests[key].checked = false;
            return interests;
        });
        formik.setFieldValue('interests', interests);

        // Reset language proficiency
        let proficiency = {...formik.values.proficiency};
        Object.keys(proficiency).map((key) => {
            proficiency[key].value = 0;
            return proficiency;
        });
        formik.setFieldValue('proficiency', proficiency);
    }

    // Formik validation
    const formik = useFormik({
        initialValues :{
            firstName:"",
            lastName: "",
            email: "",
            number: "",
            dob : "",
            interests : interestsJsonArr.reduce((accObj, interest) => {
                            accObj[interest.id] = {name: interest.name, checked: false};
                            return accObj;
                        }, {}),
            proficiency : langProfJsonArr.reduce((accObj, lang) => {
                            accObj[lang.id] = {name: lang.name, value: 0};
                            return accObj;
                        }, {}),
            password: "",
            confirmPassword : "",
        },
        validationSchema : UserValidationSchema,
        onSubmit: handleSignup
    });


    // Log formik values
    useEffect(() => {
        console.log(formik.errors);
    }, [formik.errors])

    // Handle Interests Change
    const handleInterestSelect = (event) => {
        let interests = {...formik.values.interests};
        interests[event.target.id].checked = !interests[event.target.id].checked;
        formik.setFieldValue('interests', interests);
    };
    
    // Handle Language Proficiencey Slider Change
    const handleSliderChange = (event, v) => {
        let proficiency = {...formik.values.proficiency};
        proficiency[event.target.name].value = v;
        formik.setFieldValue('proficiency', proficiency);
    }

    // Handle phone number change
    const handlePhoneNumberChange = async (val) => {
        formik.setFieldValue('number', val);
    }

    // Return signup container
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
                        isTextError = {formik.errors.firstName && formik.touched.firstName}
                        textErrorMsg={formik.errors.firstName? formik.errors.firstName : ""}
                        textValue={formik.values.firstName}
                        onTextChange={formik.handleChange}
                        />
                    </Grid>
                
                    {/* Last Name */}
                    <Grid item xs={6}>
                        <MyTextField
                        textLabel="Last Name"
                        textId="lastName"
                        isTextError = {formik.errors.lastName && formik.touched.lastName}
                        textErrorMsg={formik.errors.lastName? formik.errors.lastName : ""}
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
                        isTextError = {formik.errors.email && formik.touched.email}
                        textErrorMsg={formik.errors.email? formik.errors.email : ""}
                        textValue={formik.values.email}
                        onTextChange={formik.handleChange}
                        />
                    </Grid>
  
                    {/* Phone Number */}
                    <Grid item md={6} xs={12}>
                        
                        <PhoneInputField 
                            textLabel="Number"
                            textId="number"
                            isTextError = {formik.errors.number && formik.touched.number}
                            textErrorMsg={formik.errors.number? formik.errors.number     : ""}
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
                            <DatePicker 
                            datePickerId='dob'
                            todayDate={todayDate}
                            onDateChange={formik.handleChange}
                            isDateError={formik.errors.dob && formik.touched.dob}
                            />
                            {formik.errors.dob && formik.touched.dob && 
                                <ErrorLabel 
                                labelText={formik.errors.dob}/>
                            }
                        </Box>
                    </Grid>

                    {/* Interests */}
                    <Grid item xs={12}>
                        <div style={{display:'flex', flexDirection:'column'}}>
                            {/* Title Label */}
                            <InputLabel labelText="Interests" />
                            {/* Error Label */}
                            {formik.errors.interests && formik.touched.interests && 
                                <ErrorLabel 
                                labelText={formik.errors.interests}/>
                            }
                            {/* Interests' Checkboxes */}
                            <div style={{display:'flex', flexWrap:'wrap'}}>

                                {formik.values.interests && 
                                    Object.keys(formik.values.interests).map((key) => {
                                    return (          
                                            <FormCheckBox
                                            key={key}
                                            checkBoxId={key}
                                            isChecked={formik.values.interests[key].checked}
                                            labelText={formik.values.interests[key].name}
                                            onCheckChange={handleInterestSelect}
                                            />
                    
                                    ); 
                                })}
                            </div>
                        </div>
                    </Grid>

                    {/* Language Proficiency */}
                    <Grid item xs={12}>
                        <div style={{display:'flex', flexDirection:'column'}}>
                            <InputLabel labelText="Language Proficiency" />
                            {formik.values.proficiency && 
                                Object.keys(formik.values.proficiency).map((key) => {
                                    return (   
                                        <InputSlider 
                                        key={key}
                                        sliderId={key}
                                        sliderValue={formik.values.proficiency[key].value}
                                        onSliderChange={handleSliderChange}
                                        labelText={formik.values.proficiency[key].name}/>
                                    );
                                })
                            }
                        
                        </div>
                    </Grid> 

                    {/* Password */}
                    <Grid item md={6} xs={12}>
                        <MyTextField
                        textId="password"
                        textFieldType='password'
                        textLabel="Password"
                        isTextError = {formik.errors.password && formik.touched.password}
                        textErrorMsg={formik.errors.password? formik.errors.password : ""}
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
                        isTextError = {formik.errors.confirmPassword && formik.touched.confirmPassword}
                        textErrorMsg={formik.errors.confirmPassword? formik.errors.confirmPassword : ""}
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
                                onButtonClick = {formik.handleSubmit}
                            />
                        </Box>
                    </Grid>
                    
                </Grid>

            </Card>
        </div>
    );
} 

export default SignupPage;
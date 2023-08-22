import { Card, Typography, Grid, Checkbox, FormControlLabel, Box } from '@mui/material';
import './signup.styles.scss';
import MyTextField from '../../components/text-input/text-field';
import { InputLabel } from '../../components/text-input/text-field';
import { useEffect, useState } from 'react';
import InputSlider from '../../components/slider/slider.component';
import InputButton from '../../components/button/button';

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
    const [formInputs, setFormInputs] = useState({});

    useEffect(() => {
      
        console.log(formInputs);
      
    }, [formInputs])

    const handleInterestSelect = (event) => {
        let interests = [];
        if('interests' in formInputs) {
            interests = [...formInputs['interests']];
        }
        if(event.target.checked) {
            interests.push(event.target.id);
        }
        else {
            interests = interests.filter(function(item) {
                return item !== event.target.id;
            })
        }

        setFormInputs({...formInputs, interests});
    };
    
    const handleSliderChange = (event, v) => {
        let proficiency = {};
        if('proficiency' in formInputs) {
            proficiency = {...formInputs['proficiency']};
        }
        proficiency[event.target.name] = v;

        setFormInputs({...formInputs, proficiency});
    }

    return (
        <div className='div-signup-container'>

            {/* Title */}
            <Typography >Sign Up Form</Typography>
            
            <Card
                className='card-signup'>

                <Grid container columnSpacing={2} rowSpacing={2}>

                    {/* Name */}
                    <Grid item xs={6}>
                        <MyTextField
                        style={{margin:'20px'}}
                        textLabel="First Name"
                        onTextChange={(e) => {
                            setFormInputs({...formInputs, firstName: e.target.value});
                        }}
                        />
                    </Grid>
                
                    {/* Last Name */}
                    <Grid item xs={6}>
                        <MyTextField
                        textLabel="Last Name"
                        onTextChange={(e) => {
                            setFormInputs({...formInputs, lastName: e.target.value});
                        }}
                        />
                    </Grid>
                
                    {/* Email */}
                    <Grid item xs={12}>
                        <MyTextField
                        textFieldType="email"
                        textLabel="Email"
                        onTextChange={(e) => {
                            setFormInputs({...formInputs, email: e.target.value});
                        }}
                        />
                    </Grid>

                        
                    {/* Email */}
                    <Grid item md={7} xs={12}>
                        <MyTextField
                        textFieldType="tel"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        textLabel="Number"
                        onTextChange={(e) => {
                            setFormInputs({...formInputs, number: e.target.value});
                        }}
                        />
                    </Grid>

                    {/* DOB*/}
                    <Grid item md={5} xs={12} >
                        <Box
                        display="flex"
                        flexDirection="column"
                        >
                            <InputLabel labelText="Date of Birth" />
                            <input 
                            style={{ paddingLeft:'10px', paddingRight:'10px', height:'50px'}}
                            type="date" 
                            max={todayDate} 
                            onChange={(e)=> {
                                setFormInputs({...formInputs, dob: e.target.value});
                            }}/>
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
                        textFieldType='password'
                        textLabel="Password"
                        onTextChange={(e) => {
                            setFormInputs({...formInputs, password: e.target.value});
                        }}
                        />
                    </Grid>

                    {/* Confirm Password */}
                    <Grid item md={6} xs={12}>
                        <MyTextField
                        textFieldType='password'
                        textLabel="Confirm Password"
                        onTextChange={(e) => {
                            setFormInputs({...formInputs, confirmPassword: e.target.value});
                        }}
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
                            />
                        </Box>
                    </Grid>
                        
                    
                </Grid>

            </Card>
        </div>
    );
} 

export default SignupPage;
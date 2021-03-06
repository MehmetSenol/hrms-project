import { useFormik } from 'formik'
import { Button, Form, Message } from 'semantic-ui-react'
import *as Yup from "yup"
import React, { useEffect, useState } from 'react'
import JobPostingService from '../services/JobPostingService';
import CityService from '../services/CityService';
import JobPositionService from '../services/JobPositionService';
import WayOfWorkingService from '../services/WayOfWorkingService';
import TypeOfWorkingService from '../services/TypeOfWorkingService';
import EmployerService from '../services/EmployerService';

export default function JobPostingAdd() {

    const [cities, setCities] = useState([])
    const [jobPositions, setJobPositions] = useState([])
    const [waysOfWorking, setWaysOfWorking] = useState([])
    const [typesOfWorking, setTypesOfWorking] = useState([])
    const [employers,setEmployers]=useState([])

    useEffect(() => {
        let cityService = new CityService();
        cityService.getCities().then((result) => setCities(result.data.data));
        let jobPositionService = new JobPositionService();
        jobPositionService.getJobPositions().then(result => setJobPositions(result.data.data));
        let wayOfWorkingService = new WayOfWorkingService();
        wayOfWorkingService.getWaysOfWorking().then(result => setWaysOfWorking(result.data.data));
        let typeOfWorkingService = new TypeOfWorkingService();
        typeOfWorkingService.getTypesOfWorking().then(result => setTypesOfWorking(result.data.data));
        let employerService=new EmployerService();
        employerService.getEmployers().then(result=> setEmployers(result.data.data))
    }, []);

    const { values, errors, handleChange, handleSubmit, touched } = useFormik({
        initialValues: {
            jobDescription: "",
            minSalary: "",
            maxSalary: "",
            openPositionCount: "",
            applicationDeadline: "",
            typeOfWorkingId: "",
            wayOfWorkingId: "",
            employerId: "",
            jobPositionId: "",
            cityId: "",
        },
        validationSchema:
            Yup.object({
                jobDescription: Yup.string().required("A????klama bos b??rak??lamaz!"),
                minSalary: Yup.number().required("Minimum maa?? b??rak??lamaz!"),
                maxSalary: Yup.number().required("Maximum maa?? b??rak??lamaz!"),
                openPositionCount: Yup.number().required("A????k pozisyon say??s?? bo?? b??rak??lamaz!"),
                applicationDeadline: Yup.date().required("Son ba??vuru tarihi bos b??rak??lamaz!"),
                typeOfWorkingId: Yup.number().required("??al????ma t??r?? bos b??rak??lamaz!"),
                wayOfWorkingId: Yup.number().required("??al????ma ??ekli bos b??rak??lamaz!"),
                employerId: Yup.number().required("????veren bo?? b??rak??lamaz!"),
                jobPositionId: Yup.string().required("???? pozisyonu bo?? b??rak??lamaz!"),
                cityId: Yup.number().required("??ehir bo?? b??rak??lamaz!"),
            }),
        onSubmit: values => {
            let jobPostingService = new JobPostingService();
            jobPostingService.add(values).then();
        }
    });

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <label>A????klama</label>
                    <textarea name="jobDescription" placeholder='A????klama' value={values.jobDescription} onChange={handleChange} />
                    {
                        errors.jobDescription && touched.jobDescription &&
                        <Message color='red'>{errors.jobDescription}</Message>
                    }
                </Form.Field>
                <Form.Field>
                    <label>Minimum Maa??</label>
                    <input name="minSalary" placeholder='Minimum Maa??' value={values.minSalary} onChange={handleChange} />
                    {
                        errors.minSalary && touched.minSalary &&
                        <Message color='red'>{errors.minSalary}</Message>
                    }
                </Form.Field>
                <Form.Field>
                    <label>Maksimum Maa??</label>
                    <input name="maxSalary" placeholder='Maksimum Maa??' value={values.maxSalary} onChange={handleChange} />
                    {
                        errors.maxSalary && touched.maxSalary &&
                        <Message color='red'>{errors.maxSalary}</Message>
                    }
                </Form.Field>
                <Form.Field>
                    <label>A????k Pozisyon Say??s??</label>
                    <input name="openPositionCount" placeholder='A????k Pozisyon Say??s??' value={values.openPositionCount} onChange={handleChange} />
                    {
                        errors.openPositionCount && touched.openPositionCount &&
                        <Message color='red'>{errors.openPositionCount}</Message>
                    }
                </Form.Field>
                <Form.Field>
                    <label>Son Ba??vuru Tarihi</label>
                    <input name="applicationDeadline" type="date" value={values.applicationDeadline} onChange={handleChange} />
                    {
                        errors.applicationDeadline && touched.applicationDeadline &&
                        <Message color='red'>{errors.applicationDeadline}</Message>
                    }
                </Form.Field>
                <Form.Field>
                    <label>??al????ma T??r??</label>
                    <select id="typeOfWorkingId" name="typeOfWorkingId" value={values.typeOfWorkingId} onChange={handleChange}>
                        <option value="">??al????ma t??r?? se??iniz</option>
                        {typesOfWorking.map(typeOfWorking => (
                            <option value={typeOfWorking.id}>{typeOfWorking.typeOfWork}</option>
                        ))}
                    </select>
                    {
                        errors.typeOfWorkingId && touched.typeOfWorkingId &&
                        <Message color='red'>{errors.typeOfWorkingId}</Message>
                    }
                </Form.Field>
                <Form.Field>
                    <label>??al????ma ??ekli</label>
                    <select id="wayOfWorkingId" name="wayOfWorkingId" value={values.wayOfWorkingId} onChange={handleChange}>
                        <option value="">??al????ma ??ekli se??iniz</option>
                        {waysOfWorking.map(wayOfWorking => (
                            <option value={wayOfWorking.id}>{wayOfWorking.wayOfWorking}</option>
                        ))}
                    </select>
                    {
                        errors.wayOfWorkingId && touched.wayOfWorkingId &&
                        <Message color='red'>{errors.wayOfWorkingId}</Message>
                    }
                </Form.Field>
                <Form.Field>
                    <label>????veren</label>
                    <select id="employerId" name="employerId" value={values.employerId} onChange={handleChange}>
                        <option value="">??irketinizi Se??iniz</option>
                        {employers.map(employer=>(
                            <option value={employer.id}>{employer.companyName}</option>
                        ))}
                    </select>    
                    {
                        errors.employerId && touched.employerId &&
                        <Message color='red'>{errors.employerId}</Message>
                    }
                </Form.Field>
                <Form.Field>
                    <label>???? pozisyonu</label>
                    <select id="jobPositionId" name="jobPositionId" value={values.jobPositionId} onChange={handleChange}>
                        <option value="">???? pozisyonu se??iniz</option>
                        {jobPositions.map(jobPosition => (
                            <option value={jobPosition.id}>{jobPosition.position}</option>
                        ))}
                    </select>
                    {
                        errors.jobPositionId && touched.jobPositionId &&
                        <Message color='red'>{errors.jobPositionId}</Message>
                    }
                </Form.Field>
                <Form.Field>
                    <label>??ehir</label>
                    <select id="cityId" name="cityId" value={values.cityId} onChange={handleChange}>
                        <option value="">??ehir se??iniz</option>
                        {cities.map(city => (<option key={city.id} value={city.id} selected>{city.cityName}</option>))}
                    </select>
                    {
                        errors.cityId && touched.cityId &&
                        <Message color='red'>{errors.cityId}</Message>
                    }
                </Form.Field>
                <Button type='submit'>??lan Ver</Button>
            </Form>
        </div>
    )
}
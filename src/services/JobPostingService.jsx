import axios from "axios"
export default class JobPostingService{
    getJobPostings(){
        return axios.get("http://localhost:8080/api/jobPostings/getByisActivateTrue")
    }


JobPostiAdd(values){
    return axios.post("http://localhost:8080/api/jobPostings/add",values).then((values)=>{
        console.log(values)
    }
    )
}
}
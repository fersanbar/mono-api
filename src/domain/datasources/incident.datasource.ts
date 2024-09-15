import { IncidentModel } from "../../data/incident.model";
import { IIncidentDocument } from "../entities/incident.entity";

export  class IncidentDataSource{

    public updateIncident = async (id:string,incident:Partial<IIncidentDocument>)=>{
        await IncidentModel.findByIdAndUpdate(id,{
            lat: incident.lat,
            lng: incident.lng,
            isSent: incident.isSent,
            genre: incident.genre,
            age: incident.age,
            creationDate: incident.creationDate
        })
    }
}
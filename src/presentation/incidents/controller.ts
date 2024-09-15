import { Request, Response } from 'express'
import { EmailService } from '../../domain/service/email.service';
import { IncidentModel } from '../../data/incident.model';

export class IncidentController{

    public createIncident = async (req: Request, res: Response) => {
        try {
            const {age, genre, lat, lng} = req.body;
            const newIncident = await IncidentModel.create({
                age,
                genre,
                lat,
                lng,
                creationDate: new Date

            });
            const emailService = new EmailService();
            return res.json(newIncident);
        } catch (error) {
            console.error(error);
        }
    }

    public getIncidents = async (req: Request, res: Response) =>{
        try {
            const incidents = await IncidentModel.find();
            res.json(incidents);
        } catch (error) {
            console.error(error);
        }
    }

    

    public getIncidentsLastWeek = async (req: Request, res: Response) => {
        try {
            const oneWeekAgo = new Date();
            oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

            const incidents = await IncidentModel.find({
                creationDate: { $gte: oneWeekAgo }
            });

            res.json(incidents);
        } catch (error) {
            console.error(error);
        }
    }

    public updateIncident = async (req: Request, res: Response) => {
        const { id } = req.params
        const { age, genre, lat, lng } = req.body;

        try {
            const incident = await IncidentModel.findByIdAndUpdate(
                id,
                {age,genre,lat,lng}
            )
            return res.json(incident);
        } catch (error) {
            
        }
    }

    public deleteIncident = async (req: Request, res: Response) => {
        const { id } = req.params
        try {
            await IncidentModel.findByIdAndDelete(id);
            res.json({message: "Registro borrado"})
        } catch (error) {
            
        }
    }
}
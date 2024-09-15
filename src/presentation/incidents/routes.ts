import { Router } from "express";
import { IncidentController } from "./controller";


export default class IncidentRoutes{

    static get routes() : Router{
        const router = Router();
        const incidentController  = new IncidentController();
        router.post("/",incidentController.createIncident)
        router.get("/",incidentController.getIncidents)
        router.get("/last-week", incidentController.getIncidentsLastWeek);
        router.put("/:id",incidentController.updateIncident)
        router.delete("/:id",incidentController.deleteIncident)
        return router;
    }
}
import cron from 'node-cron';
import { IncidentDataSource } from '../datasources/incident.datasource';
import { EmailService } from '../service/email.service';
import { IncidentModel } from '../../data/incident.model';
import { generateIncidentEmailTemplate } from '../templates/email.template';

export const emailJob = () => {
    const emailService = new EmailService()
    const incidentDataSource = new IncidentDataSource()
    cron.schedule('*/10 * * * * *', async () => {
        console.log("Cada 10 segundos");
        try {
            const incidents = await IncidentModel.find({ isSent: false })
            if (!incidents.length) {
                console.log("No hay casos pendientes de enviar");
                return;

            }

            console.log(`Procesando ${incidents.length} casos`);

            await Promise.all(
                incidents.map(async (incident) => {
                    const htmlbody = generateIncidentEmailTemplate(
                        incident.genre,
                        incident.age,
                        incident.lat,
                        incident.lng
                    )
                    await emailService.sendEmail({
                        to: "fer-sanchezb@hotmail.com",
                        subject: `Caso de ${incident.genre} de ${incident.age} años`,
                        htmlbody: htmlbody
                    })
                    console.log(`Email enviado para el caso con ID: ${incident._id}`);
                    await incidentDataSource.updateIncident(incident._id.toString(), { ...incident, isSent: true })
                    console.log(`Caso actualizado para el ID: ${incident._id}`);

                })
            )



        } catch (error) {
            console.error("Error durante el trabajo de envio de correos");

        }
    });
}
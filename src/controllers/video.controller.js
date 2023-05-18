import { cmcdExtractorService } from '../services/cmcd-extractor.service.js';
import { decodeBase64AndConcat } from '../utils/decodeBse64Concat.js';

export const video = async (req, res) => {

    try {
        const jsonBase64 = req.params['jsonbase64'];
        const videoURL = req.params['filename'];
        const decodedJson = decodeBase64AndConcat(jsonBase64, videoURL);
        const {headers, data} = await cmcdExtractorService(req, decodedJson);
        res.header(headers)
        data.pipe(res);
    } catch (error) {
        if (error.response) {
            // The client was given an error response (5xx, 4xx)
            jsLogger.error(error.response.status, error.response.statusText);
            res.status(error.response.status).send(error.response.statusText);
        // } else if (error.request) {
        //     // The client never received a response, and the request was never left
        } else {
            // Anything else
            res.status(500).send('Internal server error');
        }

    }

};

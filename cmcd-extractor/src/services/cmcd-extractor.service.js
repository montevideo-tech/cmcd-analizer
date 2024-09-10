import getCMCDRequestType from '../utils/getCMCDRequestType.js'
import { getCMCDParameter } from '../utils/getCMCDParameter.js';
import { cmcdValidator } from '../utils/cmcdValidator.js';
import { saveData } from '../utils/saveData.js';

export const cmcdExtractorService = async ({id, req, reqURI, decodedJson, dateStart, cmcdMode}) => {
    const body = {};
    
    // reqest validation
    const type = getCMCDRequestType(req, id);
    const cmcdParam = getCMCDParameter(req, reqURI, type);
    const validatorRes = cmcdValidator(cmcdParam, type, id);

    body.id = id;
    body['user-agent'] = req.headers['user-agent'];
    body['request_origin'] = req.headers.origin;
    body['request_ip'] = req.ip;
    body['received_datetime'] = dateStart;
    body['returned_datetime'] = new Date().toISOString(); 
    body['cdn_request_url'] = reqURI;
    body['cmcd_mode'] = cmcdMode;
    if (decodedJson) {
        delete decodedJson.url;
        Object.assign(body, decodedJson);
    }
    body.valid = validatorRes.valid;
    body.errors = validatorRes.errors;
    body.warnings = validatorRes.warnings;
    body['cmcd_keys'] = validatorRes.parsedData;
    if(body['cmcd_keys'] && body['cmcd_keys']['ts']){
        body['cmcd_keys']['ts-date'] = new Date(body['cmcd_keys']['ts']).toISOString()
    }
    body['cmcd_data'] = validatorRes.rawData;
    
    saveData(id, body);
}

import { client } from '../config.js';
import jsLogger from 'js-logger';

export const saveData = async (id, validatorRes) => {
    jsLogger.useDefaults({ defaultLevel: jsLogger.TRACE });

    // TODO: Remove error field, we need to fix errors mapping
    let data = {...validatorRes}
    if (data.errors){
        delete data.errors
    }
    if (data.valid){
        delete data.valid
    }

    try {
        jsLogger.info(`${id}: Saving data into the database...`);
        await client.index({
            index: `cmcd-v2`,
            body: data
        });
        jsLogger.info(`${id}: Data has been saved successfully.`);
    } catch (error) {
        jsLogger.error(`${id}: `, error);
    }
}

export default saveData;

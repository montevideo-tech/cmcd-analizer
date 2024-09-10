import jsLogger from 'js-logger';
import { client } from '../config.js';

const log = async (id, value, level) => {
    jsLogger.useDefaults({ defaultLevel: jsLogger.TRACE });

    // TODO: Remove error field, we need to fix errors mapping
    let data = {...value}
    if (data.errors){
        delete data.errors
    }
    if (data.valid){
        delete data.valid
    }

    jsLogger[level](`${id}: ${JSON.stringify(data)}`);
    try {
        await client.index({
            index: `logs-${id}`,
            body: data
        });
    } catch (error) {
        jsLogger.error(`${id}: `, error);
    }

};

export default log;
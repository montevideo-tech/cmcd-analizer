import { config } from "dotenv";
import { Client } from '@elastic/elasticsearch';
config();

export const PORT = process.env.PORT || 3000;

export const VIDEO_TEST_URL = process.env.VIDEO_TEST_URL || 'https://dash.akamaized.net/akamai/bbb_30fps/';

export const client = new Client({
    node: 'http://elasticsearch:9200',
    auth: {
        username: 'elastic',
        password: process.env.ELASTIC_PASSWORD
    }
})
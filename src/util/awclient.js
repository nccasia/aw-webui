import { AWClient } from 'aw-client';

let baseURL = process.env.VUE_APP_AW_SERVER_URL || 'http://localhost:5600';

const awc = new AWClient('aw-webui', { testing: !PRODUCTION, baseURL });

export default awc;

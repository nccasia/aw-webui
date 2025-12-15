import { AWClient } from 'aw-client';

let baseURL = process.env.VUE_APP_DOMAIN;

// If running with `npm node dev`, use testing server as origin.
// Works since CORS is enabled by default when running `aw-server --testing`.
if (!PRODUCTION) {
  baseURL = process.env.VUE_APP_AW_SERVER_URL || 'http://localhost:5600';
}

const awc = new AWClient('aw-webui', { testing: !PRODUCTION, baseURL });

export default awc;

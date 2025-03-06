import { AWClient } from 'aw-client';

let baseURL = 'https://tracker-api.nccsoft.vn/';

// If running with `npm node dev`, use testing server as origin.
// Works since CORS is enabled by default when running `aw-server --testing`.
if (!PRODUCTION) {
  baseURL = process.env.AW_SERVER_URL || 'https://tracker-api.nccsoft.vn/';
}

const awc = new AWClient('aw-webui', { testing: !PRODUCTION, baseURL });

export default awc;

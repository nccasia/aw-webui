import { AWClient } from 'aw-client';

let baseURL = 'https://tracker-api.komu.vn/';

// If running with `npm node dev`, use testing server as origin.
// Works since CORS is enabled by default when running `aw-server --testing`.
if (!PRODUCTION) {
  baseURL = AW_SERVER_URL || 'https://tracker-api.komu.vn/';
}

const awc = new AWClient('aw-webui', { testing: !PRODUCTION, baseURL });

export default awc;

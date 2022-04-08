import { AWClient } from 'aw-client';

let baseURL = 'http://tracker.komu.vn:5600';

// If running with `npm node dev`, use testing server as origin.
// Works since CORS is enabled by default when running `aw-server --testing`.
if (!PRODUCTION) {
  baseURL = AW_SERVER_URL || 'http://tracker.komu.vn:5600';
}

const awc = new AWClient('aw-webui', { testing: !PRODUCTION, baseURL });

export default awc;

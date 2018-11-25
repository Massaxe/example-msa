import redis from "redis";

let client: any;
try {
  client = redis.createClient();
} catch (e) {
  client = null;
}

export function Insert(
  key: string,
  data: string,
  cb: (success: boolean) => void
) {
  if (client) {
    client.set(key, data, () => {
      cb(true);
    });
  } else cb(false);
}

export function Get(key: string, cb: (data: string | boolean) => void) {
  if (client) {
    client.get(key, (err: any, data: any) => {
      if (err) cb(false);
      else cb(data);
    });
  } else cb(false);
}

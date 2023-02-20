import * as redis from 'redis';
const publisher = redis.createClient();


const publishing = (event: string, data: string) => publisher.publish(event, data);


export default {
  publishing,
  publisher
}
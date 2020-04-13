import { Pretend } from 'pretend';


export function httpCall<T>(object: new () => T): T {
    const client = Pretend
                    .builder()
                    .target(object, 'http://localhost:8080/');
    return client;
}
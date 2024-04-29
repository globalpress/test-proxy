import {joinURL} from 'ufo';

export default defineEventHandler(async (event) => {
    // get runtime config proxy url
    const proxyUrl = useRuntimeConfig().proxyUrl;
    console.log('proxyUrl', proxyUrl);
    
    // get path by replacing event.path api
    const path = event.path.replace(/^\/api\//, ''); // /api/users => users

    const target = joinURL(proxyUrl, path);
    // proxy path

    return proxyRequest(event, target);
});
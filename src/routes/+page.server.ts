import type { PageServerLoad } from './$types';
// import superagent from 'superagent';
// import crypto from 'crypto';

export const load = (async () => {
    // let pass = "akJKtTTtfN72";
    // let email_address = "albertrabie22@gmail.com";

    // pass = crypto.createHash('md5').update(pass).digest('hex');

    // console.log(pass)

    // let body
    // let respose
    // let jwt
    // let session

    // // callback
    // process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
    // try {
    //     const response = await superagent
    //         .post('https://api.avkn.co/auth/1/auth/1/login')
    //         .send({ type: 'email', request: { password: pass, email_address: email_address } });

    //     body = response.body;
    //     respose = response;
    //     jwt = response.headers['x-avkn-jwtsession'];
    //     session = response.headers['x-avkn-session'];

    //     // console.log(jwtr)
    // } catch (err) {
    //     // Handle error
    //     // console.error(err);
    //     // Display error message
    //     // You can define a variable like errorMessage and bind it to the UI to display the error message.
    // }
    return {};
}) satisfies PageServerLoad;
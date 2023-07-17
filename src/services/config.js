const dev = {
    env: 'DEV',
    baseURL: 'https://property-api.cranium.id'
}
const qa = {
    env: 'QA',
    baseURL: ''
}
const prod = {
    env: 'PROD',
    baseURL: ''
}

const config = {
    // ..prod
    //...qa
    ...dev
}

export { config };

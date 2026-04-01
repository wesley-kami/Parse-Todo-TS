export const Config = (key : string) : string =>{

    const data =  process.env[key] ;

    if(typeof data !== "string") throw new Error(`${key} environment variable needed`);

    return data;

}
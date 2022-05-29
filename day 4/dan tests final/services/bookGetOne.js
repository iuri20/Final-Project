import { findOneBookDB } from "../data/bookGetOne";

export async function getOneBook(_id){
    return await findOneBookDB(_id)
}
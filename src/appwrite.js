import { Client } from 'appwrite'

const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(PROJECT_ID)

const database = new Databases(client)

export const updateSearchCount = async (searchTerm, movie) => {
    // 1. Use Appwrite SDK to check if the search term exists in the database
    try {
        const result = await database.listDocuments(DATABASE_ID)
    } catch (error) {
        console.error(error);
    }
        // 2. If it does, update the count
        // 3. If it doesn't, createa  new document with the search term and count it as 1
}

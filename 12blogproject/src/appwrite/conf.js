import config from "../conf/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";
import authService from "./auth";


export class Service {
    client = new Client()
    databases;
    bucket;
    constructor() {
        this.client
            .setEndpoint(config.appWriteURL)
            .setProject(config.appWriteProjectId);
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }
    async createPost({ title, slug, featuredImage, status, userId, content }) {
       
        try {
            return await this.databases.createDocument(config.appWriteDatabaseId, config.appWriteCollectionId, slug, {
                title,
                content,
                featuredImage,
                status,
                userId
            }
        )

        } catch (error) {
            console.log(`error:${error.message}`)
        }
    }
    async updatePost(slug, { title, featuredImage, status,content }) {
        try {
            return this.databases.updateDocument(
                config.appWriteDatabaseId,
                config.appWriteCollectionId,
                slug,
                {
                    title, content, featuredImage, status
                }
            )
        } catch (error) {
            console.log(`error:${error}`)
        }
    }


    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                config.appWriteDatabaseId,
                config.appWriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log(`error:${error}`)
            return false
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                config.appWriteDatabaseId,
                config.appWriteCollectionId,
                slug
            )
        } catch (error) {
            console.log(`error:${error}`)
            return false
        }
    }


    async getPosts(queries = [Query.equal("status", ["active"])]) {
        try {
            return await this.databases.listDocuments(config.appWriteDatabaseId,
                config.appWriteCollectionId,
                queries)
        } catch (error) {
            console.log(`error:${error}`)
            return false
        }
    }

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(config.appWriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log(`error:${error}`)
        }
    }


    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                config.appWriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            return false
        }
    }

    getFileView(fileId) {
        return this.bucket.getFileView(config.appWriteBucketId, fileId)
    }
}

const service = new Service()
export default service

/* 
if i am exporting something by default then while importing i can import it by using anyname since i am exporting only one default fxn from this file so react knows under the hood which function i am mentioning about and i can only export one function by default per file and if i want to name my imports as per my wish for multiple exports too then i can use :
 import { AuthService as MyAuth } from './services';
 */
import config from "../conf/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";

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
    async createPost({ title, slug, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(config.appWriteDatabaseId, config.appWriteCollectionId, slug, {
                title,
                content,
                featuredImage,
                status,
                userId
            })

        } catch (error) {
            console.log(`error:${error}`)
        }
    }
    async updatePost(slug, { title, featuredImage, status }) {
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
            return await this.databases.deleteDocument(
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

 async uploadFile(file){
        try {
            return await this.bucket.createFile(config.appWriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log(`error:${error}`)
        }
    }


    async deleteFile(fileId){
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

    getFilePreview(fileId){
        return this.bucket.getFilePreview(config.appWriteBucketId,fileId)
    }
}

const service = new Service()
export default Service 
import React, { useState, useEffect } from 'react'
import appWriteService from '../appwrite/conf'
import { Container, PostCard } from '../components'



function AllPost() {
    const [posts, setPosts] = useState([])
    useEffect(() => {

 appWriteService.getPosts().then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })


    }, [])
   
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 2-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPost
import { useQuery, } from '@tanstack/react-query';
import { FC } from 'react'
import styles from './query.module.css'

const posts = [
  { id: 1, title: 'post 1' },
  { id: 2, title: 'post 2' },
]

const Query: FC = () => {

  // posts -> ["posts"]
  // posts/1 ["posts", post.id]
  // posts?authorId=1 ["posts", {authorId: 1}]
  // posts/2/comments ["posts", post.id, "comments"]

  const postsQuery = useQuery({
    queryKey: ['queryPosts'],
    queryFn: () => wait(1000).then(() => [...posts]),
    // queryFn: Promise.reject('error message'),
  })

  if (postsQuery.isLoading) return (
    <div className='App'>
      <h1>Loading...</h1>
    </div>
  )
  if (postsQuery.isError) return (
    <div className='App'>
      <pre>{JSON.stringify(postsQuery.error)}</pre>
    </div>
  )
  return (
    <div className={styles.queryWrapper}>
      <div className="tanStack">Your Query</div>
      <div>{postsQuery.data?.map(el => (
        <div key={el.id}>
          <span>Номер {el.id}, c текстом: {el.title}</span>
        </div>
      ))}
        {/* <button disabled={newMutation.isPending} onClick={() => newMutation.mutate('new post')}>Add new</button> */}
      </div>
    </div>
  )
}

function wait(duration: number) {
  return new Promise(resolve => setTimeout(resolve, duration))
}

export default Query

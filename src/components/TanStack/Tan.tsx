import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { FC } from 'react'
// import styles from '.'

const posts = [
  { id: 1, title: 'post 1' },
  { id: 2, title: 'post 2' },
]

const TanStack: FC = () => {
  const queryClient = useQueryClient()

  const newMutation = useMutation({
    mutationFn: (title: string) => {
      const randomId = Math.floor(Math.random() * 1000);
      return wait(1000).then(() => posts.push({ id: randomId, title }))
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["posts"] })
  })

  const postsQuery = useQuery({
    queryKey: ['posts'],
    queryFn: () => wait(1000).then(() => [...posts]),
    // queryFn: Promise.reject('error message'),
  })


  console.log(crypto.randomUUID());

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
    <div className='App'>
      <div className="tanStack">Your Mutations</div>
      <div>{postsQuery.data?.map(el => (
        <div key={el.id}>
          <span>Номер {el.id}, c текстом: {el.title}</span>
        </div>
      ))}
        <button disabled={newMutation.isPending} onClick={() => newMutation.mutate('new post')}>Add new</button>
      </div>
    </div>
  )
}

function wait(duration: number) {
  return new Promise(resolve => setTimeout(resolve, duration))
}

export default TanStack

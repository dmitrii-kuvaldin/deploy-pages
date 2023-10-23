import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import CityPage from './components/CityPage/CityPage';
// import Counter from './components/Counter/Counter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import TanStack from './components/TanStack/Tan';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// import Query from './components/TanStackQuery/Query';
import StyleTest from './components/StyleTest/StyleTest';
import Form from './components/Form/Form';
import SkeuomorphicSlider from './components/SkeuomorphicSlider/SkeuomorphicSlider';
import CardGrid from './components/CardGrid/CardGrid';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

const cards = [
  { title: "Alpes", content: 'The French Alps ski specialist', imageUrl: 'https://www.peakretreats.co.uk/media/15912/les2alpes_luka-leroy-1.jpg?anchor=center&mode=crop&width=1904&height=1320&rnd=132996012720000000' },
  { title: "Alpes", content: 'The French Alps ski specialist', imageUrl: 'https://www.peakretreats.co.uk/media/15912/les2alpes_luka-leroy-1.jpg?anchor=center&mode=crop&width=1904&height=1320&rnd=132996012720000000' },
  { title: "Alpes", content: 'The French Alps ski specialist', imageUrl: 'https://www.peakretreats.co.uk/media/15912/les2alpes_luka-leroy-1.jpg?anchor=center&mode=crop&width=1904&height=1320&rnd=132996012720000000' },
  { title: "Alpes", content: 'The French Alps ski specialist', imageUrl: 'https://www.peakretreats.co.uk/media/15912/les2alpes_luka-leroy-1.jpg?anchor=center&mode=crop&width=1904&height=1320&rnd=132996012720000000' },
  { title: "Alpes", content: 'The French Alps ski specialist', imageUrl: 'https://www.peakretreats.co.uk/media/15912/les2alpes_luka-leroy-1.jpg?anchor=center&mode=crop&width=1904&height=1320&rnd=132996012720000000' },
]


root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <TanStack />
      <App />
      {/* <CityPage />
      <Counter />
      <Query /> */}
      <StyleTest />
      <div className='sliderContainer'>
        <SkeuomorphicSlider images={[
          'https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/images/optimized/rev-78b5511/theplanetd.com/images/Best-Cities-in-Germany.jpg',
          'https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/images/optimized/rev-78b5511/theplanetd.com/images/Cities-in-Germany-Berlin.jpg',
          'https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/images/optimized/rev-78b5511/theplanetd.com/images/Cities-in-Germany-Munich.jpg'
        ]
        } />

      </div>
      <CardGrid cards={cards} />

      <Form onSubmit={() => console.log('')} />


      {/* <ReactQueryDevtools /> */}
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

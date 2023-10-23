// импорт хука useState
import { useState } from 'react'

function Counter(): JSX.Element {

  // это хук (хуки - это названия для стандартных методов работы в React)
  // этот хук работает с состоянием - каким-то значением, чаще изменяемым
  // внутри хука есть переменная - хранилище значений и функция, которое значение изменяет
  // называться как мы хотим но принято назвать функцию со слова set
  // например setName или setValue

  // хуки имеют названия, которые мы не изменяем, они установлены в React
  // и нужно не забыть их импортировать

  // названия хуков начинаются со слова 'use'

  const [counter, setCounter] = useState(0)

  //функция счетчик, она использует функцию изменения состояния
  //принимает старое состояние и меняет на новое, прибавляя один

  function handlePlus(): void {
    setCounter(counter + 1)
  }
  function handleMinus(): void {
    setCounter(counter - 1)
  }

  



  return (
    <div className='App'>
      <p>Counter</p>
      {/* в кудрявых скобках мы передаем значение переменной */}

      {/* указываем аттрибут onClick и передаем в него функцию-счетчик */}
      <button onClick={handleMinus}>Minus</button>
      <span>{counter}</span>
      <button onClick={handlePlus}>Plus</button>
    </div>
  )
}

export default Counter

// * есть второй вариант написания компонента - используйте тот,
// * который вам больше нравится
// const Counter: FC = () => (
//   <div>
//     <h1>Counter</h1>
//   </div>
// )

// export default Counter

import './App.css';
import React, { useRef, useEffect, useState } from 'react'

function App() {
  const renderCount = useRef(1)
  const [name, setName] = useState(null)
  useEffect(() => {
    renderCount.current = renderCount.current + 1
  })

  return (
    <div className="App">
      <input type="text" onChange={e => setName(e.target.value)} />
      <div>{renderCount.current}</div>
      <div>My name is {name}</div>
    </div>
  );
}
//normalde burda kaç defa render olduğunu saymak için akla ilk gelen şey bir
// state oluşturup useEffect'in içerisinde onu 1'er 1'er arttırıp bir divin içerisinde 
// göstermek geliyor. Ama bu durumda her state değiştiğinde tekrardan ve tekrardan render edilecek
// bu durumda da inf. loop oluşuyor. Fakat!!! useRef farkı burada devreye giriyor. useRef'in render'ı
// normalden bir tık farklı. Çünkü useRef'in değişmesi re-render ettirmiyor state'in aksine.
// bundan dolayı da useRef'i bu durumda counter olarak kullanabiliriz.

export default App;

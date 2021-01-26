import { useState } from 'react';
import './App.css';
import ColorPicker from './features/ColorPicker';
import Reset from './features/Reset';
import Result from './features/Result';
import SizeSetting from './features/SizeSetting';

function App() {
  //UseState luu gia tri ban dau
  const [listColor, setListColor] = useState({
    color: 'red',
    fontSize: 12,
  })

  function onSetColor(params) {
    //console.log(params);
    setListColor({
      ...listColor,
      color: params,
    })
  }

  function onChangeSize(value) {
    //console.log(value);
    const secondKey = Object.keys(listColor)[1];
    const size = listColor[secondKey];

    // if ((size + value) >= 8 && (size + value) <= 36) {
    //   setListColor({
    //     ...listColor,
    //     fontSize: size + value,
    //   })
    // }

    //Cách viet ngan hon
    setListColor({
      ...listColor,
      fontSize: (size + value >= 8 && size + value <= 36) ? (size + value) : size,
    })
  }

  function onSettingDefault(value) {
    if (value) {
      console.log(value);
      setListColor({
        color: 'red',
        fontSize: 12,
      })
    }
  }


  return (
    <div className="container mt-50">
      <div className="row">
        <ColorPicker listColor={listColor} onReceiceColor={onSetColor} />
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <SizeSetting
            fontSize={listColor}
            onChangeSize={onChangeSize}
          />
          <Reset onSettingDefault={onSettingDefault} />
        </div>
        <Result listColor={listColor} fontSize={listColor} />
      </div>
    </div>
  );
}

export default App;

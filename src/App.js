import Three from './Components/Three'
import Loader from './Components/Loader';
import View from './Views/index';

import { useState } from 'react';
import Website from './Views/Website';

function App() {
  const [Type, seType] = useState(false);

  // switch (Type) {
  //   case "website":
  return <Website Type={Type} />
  //   case "vr":
  //     return <Three />
  //   default:
  //     return <View seType={seType} />
  // }

}

export default App;

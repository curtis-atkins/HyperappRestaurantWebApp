import {h, app} from 'hyperapp';
import Header from "./Header.js";
import TopImage from "./TopImage.js";

export default function App({state, actions}) {
  return (
    <div class={'app'}>
      <Header state={state} actions={actions}/>
      <TopImage state={state} actions={actions}/>
    </div>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

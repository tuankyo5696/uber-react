import React,{Component} from 'react';

import Layout from './hoc/Layout/Layout';
import RegisterPage from './containers/registerPage';
class App extends Component{
  render(){
    return(
      <div>
         <Layout>
            <RegisterPage/>
         </Layout> 
      </div>
    )
  }
} 
 

export default App;

import React,{Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
library.add(fab,faEnvelope)



class Footer extends Component{

render(){
  return (  <footer class="fixed-bottom footer">
  <div class="container-fluid">
  <div class="row">
  <div class="col-md-6 text-center">
      <span class="float-md-left">sponsorparentsgreencard.com Emeryville,CA</span>
  </div>
  <div class="col-md-6 text-center">
      <div class="float-md-right">
      <a href='mailto:asajnani@gmail.com'  target="_blank" > <FontAwesomeIcon icon={faEnvelope} size="lg"/></a>
      &nbsp;
      &nbsp;
      <a href='http://www.facebook.com'  target="_blank" ><FontAwesomeIcon icon={['fab', 'facebook']} size="lg" /></a>
      &nbsp;
      &nbsp;
      <a href='http://www.twitter.com'  target="_blank" ><FontAwesomeIcon icon={['fab', 'twitter']}  size="lg"/></a>
      </div>
  </div>
  <hr/>
    <hr/>
</div>
  </div>
</footer>)
}

}

export default Footer

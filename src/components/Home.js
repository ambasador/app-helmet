import React from 'react';
import { Transition } from "react-transition-group";
import { TweenMax } from "gsap/all";
import {Helmet} from "react-helmet";

const startState = { autoAlpha: 0, scale: 1 };

const Home = (props) => {
  return (
    <Transition unmountOnExit in={props.show} timeout={1000} onEnter={node => TweenMax.set(node, startState)} addEndListener={ (node, done) => {
		TweenMax.to(node, 0.5, {
			autoAlpha: props.show ? 1 : 0,
			scale: props.show ? 1 : .9,
			onComplete: done
		});
	}}
>

    <div className="container--main home">
      <Helmet>
                  <meta charSet="utf-8" />
                  <title>Home</title>
                  <meta name="keywords"
                            content="doradca finansowy,doradcy kredytowi,doradztwo finansowe,kredyt hipoteczny,kredyty,lokaty" />
                      <meta name="author" content="Open Finance" />
                      <meta http-equiv="cleartype" content="on" />
              </Helmet>
      <h1>Home!!</h1>
    </div>
  </Transition>);
}

export default Home;
